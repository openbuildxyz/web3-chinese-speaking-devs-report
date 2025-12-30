# -*- coding: utf-8 -*-
"""
因为问卷本身有逻辑关系，总表中有一些重复的空白字段不利于数据计算和图表生成，所以按“目前状态”字段，把原始问卷拆成 5 个子表导出, 方便后续计算单独状态下的数据

输出目录：
    ./status_split_csv/
    其中包含 5 个按状态拆分的 CSV 文件。
"""

import os

import pandas as pd

# ========= 1. 基本配置 =========

# 原始 CSV 文件名（如果不在同一目录，请改成绝对路径或相对路径）
INPUT_FILE = "survey_raw.csv"

# “目前状态”原始列名
COL_STATUS_RAW = "目前状态"

# 导出子表的目录
OUTPUT_DIR = "status_split_csv"


# ========= 2. 状态映射函数：目前状态 -> 5 大类 =========


def map_status_5cat(raw: str) -> str:
    """
    将问卷中的“目前状态”原始文本统一映射到 5 个标准类别：

        1. 前 Web2，现 Web3
        2. 现学生已/直 Web3
        3. 现 Web2 观望 Web3
        4. 现学生观望 Web3
        5. 已经/准备退坑 Web3

    其它情况统一标记为“未知”，方便后续检查。
    """
    if pd.isna(raw):
        return "未知"

    s = str(raw).strip()

    # 1. 前 Web2 开发，现 Web3 中
    if (
        "前 Web2 开发，现 Web3 中" in s
        or "前 Web2, 现 Web3 中" in s
        or "Web2 已入坑 Web3" in s
        or "Web2 已入坑Web3" in s
        or "Web2 已入坑 web3" in s
        or "Web2 已入坑" in s
    ):
        return "前 Web2，现 Web3"

    # 2. 现学生已 Web3 或毕业就直接 Web3 中
    if (
        "现学生已 Web3 或毕业就直接 Web3 中" in s
        or "现学生或毕业就直接 Web3 中" in s
        or "前学生，毕业直接 Web3 中" in s
        or "前学生毕业直接 Web3 中" in s
        or "前学生，毕业直接 Web3" in s
        or "前学生毕业直接 Web3" in s
    ):
        return "现学生已/直 Web3"

    # 3. 现 Web2 开发，观望 Web3 中
    if (
        "现 Web2 开发，观望 Web3 中" in s
        or "现 Web2，观望 Web3 中" in s
        or "现 Web2 观望 Web3 中" in s
        or "Web2 观望 Web3 中" in s
        or "Web2 观望 Web3" in s
        or "Web2 观望web3" in s
    ):
        return "现 Web2 观望 Web3"

    # 4. 现学生，观望 Web3 中
    if (
        "现学生，观望 Web3 中" in s
        or "现学生观望 Web3 中" in s
        or "现学生观望 Web3" in s
        or "现学生观望web3" in s
    ):
        return "现学生观望 Web3"

    # 5. 已经 / 准备退出 / 退坑 Web3
    if (
        "已经 / 准备退出 Web3" in s
        or "已经/准备退出 Web3" in s
        or "已经 / 准备退坑 Web3" in s
        or "已经/准备退坑 Web3" in s
        or "已经 / 准备退坑 web3" in s
        or "已经 / 准备退坑" in s
    ):
        return "已经/准备退坑 Web3"

    # 其它未覆盖的写法，统一先归为“未知”
    return "未知"


# ========= 3. 辅助函数：删除全空列 =========


def drop_all_empty_columns(df: pd.DataFrame) -> pd.DataFrame:
    """
    删除 DataFrame 中“所有数据行都为空”的列。

    空的定义：
      - NaN
      - 空字符串 ""
      - 只包含空白字符的字符串（如 "   "）
    """
    cols_to_drop = []

    for col in df.columns:
        # 对整列转成字符串，统一处理
        s = df[col].astype(str)

        # 标准化：去掉前后空白
        s_strip = s.str.strip()

        # 把 "nan"（由 NaN 转成字符串产生）也视为缺失
        mask_empty = (s_strip == "") | (s_strip.str.lower() == "nan")

        if mask_empty.all():
            cols_to_drop.append(col)

    if cols_to_drop:
        print(f"  将删除全空列：{cols_to_drop}")
        df = df.drop(columns=cols_to_drop)

    return df


# ========= 4. 主流程：读入 -> 映射 -> 拆表 -> 导出 =========


def main():
    # 4.1 读入原始 CSV —— 关键：所有列按字符串读取，避免 "3-5" 被解析为日期
    print(f"读取数据文件：{INPUT_FILE}")
    df = pd.read_csv(INPUT_FILE, dtype=str)

    if COL_STATUS_RAW not in df.columns:
        raise KeyError(
            f"找不到列：{COL_STATUS_RAW}，"
            f"请确认 CSV 表头是否为此名称，或修改脚本中的 COL_STATUS_RAW。"
        )

    # 4.2 生成 5 类状态列
    print(f"根据列『{COL_STATUS_RAW}』生成标准状态列 status_5cat ...")
    df["status_5cat"] = df[COL_STATUS_RAW].apply(map_status_5cat)

    print("\n=== 各状态类别样本数（含未知） ===")
    print(df["status_5cat"].value_counts(dropna=False))

    # 4.3 定义 5 个目标类别及顺序
    status_categories = [
        "前 Web2，现 Web3",
        "现学生已/直 Web3",
        "现 Web2 观望 Web3",
        "现学生观望 Web3",
        "已经/准备退坑 Web3",
    ]

    # 4.4 创建导出目录
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    # 4.5 按 5 个类别拆分并导出 CSV
    print(f"\n按 5 个状态拆分并导出到目录：{OUTPUT_DIR}\n")

    for cat in status_categories:
        sub_df = df[df["status_5cat"] == cat].copy()
        row_count = len(sub_df)

        # 在导出前，删除所有“整列都是空”的字段
        print(f"\n处理状态：{cat}（{row_count} 行）")
        sub_df = drop_all_empty_columns(sub_df)

        # 处理文件名中的特殊字符：去掉斜杠、空格，中文逗号换成下划线
        safe_name = cat.replace("/", "").replace("，", "_").replace(" ", "")
        out_path = os.path.join(OUTPUT_DIR, f"status_{safe_name}.csv")

        # 写出时保持 utf-8-sig；所有字段仍是字符串，"3-5" 会原样写出
        sub_df.to_csv(out_path, index=False, encoding="utf-8-sig")

        print(f"{cat:>16} ：{row_count:4d} 行  ->  {out_path}")

    # 4.6 额外导出一份“未知”表，方便你检查是否有写法没被映射到 5 类中
    df_unknown = df[df["status_5cat"] == "未知"].copy()
    if not df_unknown.empty:
        print("\n处理状态：未知")
        df_unknown = drop_all_empty_columns(df_unknown)

        unknown_path = os.path.join(OUTPUT_DIR, "status_未知.csv")
        df_unknown.to_csv(unknown_path, index=False, encoding="utf-8-sig")
        print(
            f"\n注意：还有 {len(df_unknown)} 行被标记为『未知』，"
            f"已单独导出到：{unknown_path}"
        )
        print("你可以打开这个文件，看看有没有需要补充进 map_status_5cat 的写法。")
    else:
        print("\n没有被标记为『未知』的行，说明目前的映射规则覆盖了所有写法。")

    print("\n处理完成。")


if __name__ == "__main__":
    main()
