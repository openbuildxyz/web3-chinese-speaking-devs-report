// 中文内容配置
const contentZh = {
  title: "2025 华语 Web3 开发者与开源参与调研报告",
  subtitle: `本报告基于 2025 年初在华语技术社区开展的一次问卷调研，共回收 <strong>220 份有效样本</strong>，样本主要来自 Web2/Web3 开发者社群、黑客松与相关活动。为帮助理解数据，我们在部分关键指标上参考了 GitHub Octoverse、Stack Overflow、JetBrains 等开发者报告做横向对比，以获得更全面的视角。`,
  note: "提示：所有具体百分比均在图表中呈现，正文只给出趋势与洞察，方便你在公众号中用图片承载数据、用文字承载观点。",
  sections: [
    {
      id: "sec1",
      title: "一、样本概况：一半观望，一半已经「上车」",
      charts: [
        {
          id: "statusChart",
          title: "1.1 样本按「目前状态」分布",
          caption: "图 1：220 份有效样本按「目前状态」划分的占比。",
        },
        {
          id: "ageOverallChart",
          title: "1.2 整体年龄结构",
          caption: "图 2：样本整体年龄分布。",
        },
        {
          id: "ageStatusChart",
          title: "1.3 年龄 × 目前状态（结构示意）",
          caption: "图 3：不同「目前状态」下的年龄段结构。",
        },
      ],
      content: [
        {
          type: "paragraph",
          text: "从图 1 可以看到，本次样本大致分成三块：",
          afterChart: "statusChart",
        },
        {
          type: "list",
          items: [
            "最大的一块是仍在 Web2 或校园，但持续观望 Web3 的人，接近一半。",
            "其次是一批已经在 Web3 全职或长期投入的开发者，规模也不小。",
            "还有一个小但重要的群体：已经或准备退坑 Web3 的人。",
          ],
          afterChart: "statusChart",
        },
        {
          type: "paragraph",
          text: "这更像很多新技术进入「冷静期」时的结构：<strong>多数人在看，少数人已经冲进去，极少数人体验过再离开</strong>。",
          afterChart: "statusChart",
        },
        {
          type: "paragraph",
          text: "也意味着两点：",
          afterChart: "statusChart",
        },
        {
          type: "list",
          items: [
            "对开发者而言，Web3 已经从单纯的投机叙事，回到了「可以被认真评估的一种技术/职业选项」。",
            "对生态建设者而言，真正要争取的是那一大半「观望但未决」的人，他们愿意填这份问卷，说明认知门槛已过，只差可信的路径和机会。",
          ],
          afterChart: "statusChart",
        },
        {
          type: "paragraph",
          text: "整体来看，年龄集中在 20–35 岁，与全球开发者画像高度一致。但相比 Stack Overflow 等通用调研：",
          afterChart: "ageStatusChart",
        },
        {
          type: "list",
          items: [
            "学生和应届生的比例略高，说明新一代开发者会更早把 Web3 视为职业选择之一。",
            "35 岁以上的资深工程师比例也不低，其中既有人正在尝试，也有人已经退场，对趋势的判断更冷静。",
          ],
          afterChart: "ageStatusChart",
        },
        {
          type: "blockquote",
          text: "洞察一：Web3 对开发者而言，已经不再是「信不信」的问题，而是「值不值得押职业筹码」的问题。",
          afterChart: "ageStatusChart",
        },
      ],
    },
    {
      id: "sec2",
      title: "二、教育与英语：门槛不在学历，而在能否玩转英文一手生态",
      charts: [
        {
          id: "eduSchoolGroup",
          title: "2.1 最高学历与院校类型",
          caption: "图 4–5：最高学历与毕业院校类型分布。",
          charts: ["eduChart", "schoolChart"],
        },
        {
          id: "englishChart",
          title: "2.2 英语能力结构（归类示意）",
          caption: "图 6：根据原问卷多个选项归并后的英语能力层级示意。",
        },
      ],
      content: [
        {
          type: "paragraph",
          text: "从学历和院校分布可以看到：",
          afterChart: "eduSchoolGroup",
        },
        {
          type: "list",
          items: [
            "本科与硕士合计接近九成，与全球开发者的学历结构相当。",
            "近一半来自普通本科院校，说明 Web3 并不是只发生在「清北+海外名校」的小圈子。",
            "世界一流大学的占比略高，部分原因在于：顶尖学校学生更容易参与黑客松、研究项目，也更愿意在新领域试水。",
          ],
          afterChart: "eduSchoolGroup",
        },
        {
          type: "paragraph",
          text: "对项目方来说，一个现实建议是：<strong>如果你只盯着极少数名校，就会错过一大半潜在的优秀贡献者</strong>。",
          afterChart: "eduSchoolGroup",
        },
        {
          type: "paragraph",
          text: "可以粗略分成三档人：",
          afterChart: "englishChart",
        },
        {
          type: "list",
          items: [
            "<strong>高度依赖翻译工具</strong>：能使用英文生态，但同步信息和参与讨论时永远慢半拍。",
            "<strong>能独立阅读文档和源码</strong>：是当前 Web3 的主力建设者，能看懂讨论、但未必敢写长文或主持会议。",
            "<strong>能流畅协作甚至接近母语</strong>：比例不高，却决定了谁能进入协议团队、核心客户端和国际社区。",
          ],
          afterChart: "englishChart",
        },
        {
          type: "blockquote",
          text: '洞察二：在 Web3 这种高度国际化的生态里，英语不再是简历上的"加分项"，而是决定你能否接入全球一手信息与机会的地基。',
          afterChart: "englishChart",
        },
      ],
    },
    {
      id: "sec3",
      title: "三、Web3 收入结构与薪资感受：多元收入带来想象力，也带来不确定性",
      charts: [
        {
          id: "salaryIncomeGroup",
          title: "3.1 固定年薪 vs 非固定收入",
          caption: "图 7–8：固定年薪与非固定收入区间分布。",
          charts: ["salaryFixedChart", "salaryVarChart"],
        },
        {
          id: "incomeSatisGroup",
          title: "3.2 收入来源构成与薪资感受",
          caption: "图 9–10：收入来源构成与对 Web3 薪资的主观感受。",
          charts: ["incomeSourceChart", "salarySatisChart"],
        },
      ],
      content: [
        {
          type: "paragraph",
          text: "本节只统计已经在 Web3 全职 / 长期兼职的受访者。",
        },
        {
          type: "paragraph",
          text: "从固定年薪看，多数 Web3 工程师的收入水平与本地中高级 Web2 工程师相近，略偏上；从非固定收入看，大多数人有一些额外收入，但只有少数人达到了「神话级」水平。",
          afterChart: "salaryIncomeGroup",
        },
        {
          type: "paragraph",
          text: "和传统互联网相比：",
          afterChart: "salaryIncomeGroup",
        },
        {
          type: "list",
          items: [
            "Web2 开发者的收入主要锁定在「固定工资 + 年终奖」上。",
            "Web3 开发者则更像拿着一张「稳定底薪 + 少量高波动期权」的组合券。",
          ],
          afterChart: "salaryIncomeGroup",
        },
        {
          type: "paragraph",
          text: "大多数人的主心骨仍然是固定薪资，但近半数有交易收入，约五分之一通过外包、Airdrop、Grant 等方式获得补充收入。",
          afterChart: "incomeSatisGroup",
        },
        {
          type: "paragraph",
          text: "在薪资满意度上，分布与 JetBrains、Stack Overflow 等通用调查非常接近：多数人觉得「还可以」，一小部分非常满意，也有一部分明确不满意。",
          afterChart: "incomeSatisGroup",
        },
        {
          type: "blockquote",
          text: "洞察三：Web3 的高收益故事更多发生在极少数人身上，而对应的代价是整个群体需要承受更高波动与不确定性。对大多数人来说，它更像一份「中等偏上、但没有神话那么夸张」的工作。",
          afterChart: "incomeSatisGroup",
        },
      ],
    },
    {
      id: "sec4",
      title: "四、技术栈与公链偏好：没有脱离 Web2，只是在主战场旁边开了块新地",
      charts: [
        {
          id: "techStackChart",
          title: "4.1 主要技术栈",
          caption: "图 11：受访开发者的主要 Web2 技术栈。",
        },
        {
          id: "web3StackChart",
          title: "Web3 生态技术栈分布（整体样本）",
          caption: "图 11.1：受访开发者使用的 Web3 生态技术栈分布（多选）。",
        },
        {
          id: "chainsObserveGroup",
          title: "4.2 公链偏好（整体 & 观望者）",
          caption: "图 12–13：整体样本与 Web2 观望者的公链关注度。",
          charts: ["chainsOverallChart", "chainsWeb2ObserveChart"],
        },
        {
          id: "chainsStudentObserveChart",
          title: "4.3 学生观望群体的公链兴趣",
          caption: "图 14：观望 Web3 的学生样本在各公链上的关注度。",
        },
      ],
      content: [
        {
          type: "paragraph",
          text: "（说明：图 11 重点展示的是语言 / 框架维度的 Web2 通用技术栈。关于 EVM / Move / Solana / ZK 等更偏 Web3 生态栈的情况，我们在下文 4.1.1 单独做了汇总与解读。）",
          afterChart: "techStackChart",
        },
        {
          type: "paragraph",
          text: "技术栈分布非常接近全球趋势：",
          afterChart: "techStackChart",
        },
        {
          type: "list",
          items: [
            "前端 + 全栈 JS 是绝对主力，为 DApp、钱包和控制台提供基础。",
            "Python、Java、Go 构成后端阵营，支撑交易、数据和基础设施。",
            "Rust 和少量 C/C++ 集中在高性能和底层协议开发中。",
          ],
          afterChart: "techStackChart",
        },
        {
          type: "paragraph",
          text: "从这一点看，Web3 更像是在熟悉的技术地基上，额外叠加了一层「共识机制 + 安全 + 经济机制」。",
          afterChart: "techStackChart",
        },
        {
          type: "paragraph",
          text: "在问卷设计中，我们没有把「Solidity / web3.js / ethers.js」这类具体语言或库单独列成一个个选项，而是采用更贴近真实工作的「生态栈」维度来统计 Web3 技术栈，例如：",
          afterChart: "web3StackChart",
        },
        {
          type: "list",
          items: [
            "EVM 生态栈（Ethereum、Polygon、BNB Chain、Base 等）",
            "Move 生态栈（Aptos、Sui）",
            "Solana / Rust 生态栈",
            "ZK 技术栈（zkSync、Starknet、Scroll、Linea 等）",
            "各类 Layer2 / Rollup 扩展栈（Arbitrum、Optimism、Base 等）",
            "Cosmos 生态栈，以及 Bitcoin / Lightning / Ordinals 等相关生态",
            "去中心化存储（IPFS、Filecoin、Arweave）与跨链 / 互操作栈（LayerZero、Axelar、Wormhole 等）",
          ],
          afterChart: "web3StackChart",
        },
        {
          type: "paragraph",
          text: "结合样本，可以看到一条比较清晰的 Web3 技术路径：",
          afterChart: "web3StackChart",
        },
        {
          type: "list",
          items: [
            "<strong>EVM 生态几乎是默认起点。</strong>大部分有链上开发经验的受访者，都在使用 EVM 生态栈。在开放回答中，「Solidity」多次被点名；现实中的学习路径往往是：<em>先打牢 React / Node / 后端基础 → 再学 Solidity + Hardhat/Foundry → 逐步接触 DeFi / NFT / MEV 等协议层。</em>",
            "<strong>Move、Solana、ZK 等新栈，是进阶而非起点。</strong>Move 生态栈（Aptos、Sui）、Solana / Rust 生态栈，以及 ZK 技术栈在样本中都有可见但相对较小的比例，通常出现在已经有一定 EVM / Solidity 经验之后，或由游戏、社交、L2、隐私等专项需求倒逼产生。",
            "<strong>观望者阶段：技术栈几乎完全是 Web2。</strong>在仍在 Web2 或校园、尚未真正入职 Web3 的人群中，技术栈几乎清一色是 HTML/CSS/JavaScript + React/Vue + Node.js + Python/Java/Go。真正已经在用 Solidity、Move、Solana Rust 写生产代码的，只是已经「下场」的少数人。",
            "<strong>Solidity 的角色：从「显性标签」变成「默认能力」。</strong>很多已经在 Web3 的开发者，在问卷中选择的是「EVM 生态栈」，而不是单独写「Solidity」。在他们的认知里，Solidity 更像是 EVM 开发的一项基础技能，不再需要单独作为身份标签；真正拉开差距的，往往是对协议设计、安全审计、跨链与基础设施的理解，而不仅仅是会写语法。",
          ],
          afterChart: "web3StackChart",
        },
        {
          type: "paragraph",
          text: "少数受访者在开放题中直接填写了「Solidity」等关键词，我们在分析时也统一归入对应的 EVM 生态栈。因此，你在图表中看到的是「EVM / Move / Solana / ZK 等生态栈」，而不是单独的「Solidity」选项——这并不代表大家不用 Solidity，而是出于统计口径的选择。",
          afterChart: "web3StackChart",
        },
        {
          type: "paragraph",
          text: "换句话说：对观望者而言，门槛不在「会不会 Solidity」，而在能否在熟悉的 Web2 栈之上跨出那一步，写出第一个真正跑在链上的项目；对已经入场的人而言，EVM + Solidity 仍然是机会密度最高的主战场，而 Move、Solana、ZK 等新栈，则更像是在此基础上的「第二外语」。",
          afterChart: "web3StackChart",
        },
        {
          type: "paragraph",
          text: "以 Ethereum 为中心的格局，在华语样本中与全球数据高度一致：它几乎是所有开发者进入 Web3 的「默认选项」。Solana 与 Bitcoin 构成明显的第二梯队，BNB、Sui、各种 L2 和新公链紧随其后。",
          afterChart: "chainsObserveGroup",
        },
        {
          type: "paragraph",
          text: "相比在职 Web2 开发者，学生群体对 BNB、Sui 等新公链的兴趣更高，生态更分散，也更愿意追随新叙事。",
          afterChart: "chainsStudentObserveChart",
        },
        {
          type: "blockquote",
          text: "洞察四：从技术到生态，Web3 并不是平行宇宙，而是与 Web2 共享绝大部分工程基础，只是在「共识 + 激励」层重新设计了一次。",
          afterChart: "chainsStudentObserveChart",
        },
      ],
    },
    {
      id: "sec5",
      title: "五、动机、入门路径与挑战：从理想化叙事回归到工程师的算账逻辑",
      charts: [
        {
          id: "motiveWeb3Chart",
          title: "5.1 进入 / 想进入 Web3 的主要动机",
          caption: "图 15：受访者选择 Web3 的主要原因。",
        },
        {
          id: "learnEntryGroup",
          title: "5.2 了解 / 入门 Web3 的路径",
          caption: "图 16–17：了解 Web3 的渠道与最有效的入门方式。",
          charts: ["learnWeb3Chart", "entryHelpChart"],
        },
        {
          id: "challengesExitGroup",
          title: "5.3 转型挑战与退坑原因",
          caption:
            "图 18–19：从 Web2 转型 Web3 的主要挑战与已经退坑人群的原因结构。",
          charts: ["challengeTransitionChart", "exitReasonChart"],
        },
      ],
      content: [
        {
          type: "paragraph",
          text: "和几年前「信仰与暴富」主导叙事不同，如今排在前面的，是：",
          afterChart: "motiveWeb3Chart",
        },
        {
          type: "list",
          items: ["<strong>远程工作与灵活生活方式</strong>；"],
          afterChart: "motiveWeb3Chart",
        },
        {
          type: "list",
          items: ["其次才是「听说薪资更高」；", "「信仰去中心化」只占少数。"],
          afterChart: "motiveWeb3Chart",
        },
        {
          type: "paragraph",
          text: "这说明多数工程师已经把 Web3 当作一种务实的工作方式选择，而不是意识形态投票。",
          afterChart: "motiveWeb3Chart",
        },
        {
          type: "paragraph",
          text: "与传统技术更多依赖「课程 + 官方文档」不同，这里的主角是：",
          afterChart: "entryHelpChart",
        },
        {
          type: "list",
          items: [
            "黑客松、Hackerhouse 等线下/线上社区活动；",
            "交易行为——很多人是先在二级市场接触 Web3，再反向进入技术世界。",
          ],
          afterChart: "entryHelpChart",
        },
        {
          type: "paragraph",
          text: "当问到「什么方式最有助于你真正入门 Web3 开发？」时，最多人选择的是：",
          afterChart: "entryHelpChart",
        },
        {
          type: "list",
          items: [
            "参与开源项目；",
            "参与社区贡献；",
            "做真实项目（外包、黑客松、实习等）。",
          ],
          afterChart: "entryHelpChart",
        },
        {
          type: "paragraph",
          text: "挑战主要集中在四类：",
          afterChart: "exitReasonChart",
        },
        {
          type: "list",
          items: [
            "不熟悉区块链技术栈，缺乏系统学习路径。",
            "不知道从哪里找 Web3 工作，对职业前景缺乏安全感。",
            "对合规/法律问题心存忧虑。",
            "英语与理念理解存在门槛。",
          ],
          afterChart: "exitReasonChart",
        },
        {
          type: "paragraph",
          text: "退坑样本虽少，但结构非常典型：转去做 AI、工作不稳定和法律风险等位居前列，「不如想象中挣钱」只是其中一项，而不是全部。",
          afterChart: "exitReasonChart",
        },
        {
          type: "blockquote",
          text: "洞察五：从动机到退坑，工程师的算账逻辑越来越清晰——是否值得把有限的职业筹码押在 Web3 上，取决于：学习成本、机会密度、合规风险，以及与其他赛道（尤其是 AI）的对比。",
          afterChart: "exitReasonChart",
        },
      ],
    },
    {
      id: "sec6",
      title: "六、开源参与：高度依赖，参与深度仍有巨大上升空间",
      charts: [
        {
          id: "osKnowUseGroup",
          title: "6.1 对开源的认知与使用比例",
          caption: "图 20–21：对开源的了解程度与日常使用比例。",
          charts: ["osKnowChart", "osUseRatioChart"],
        },
        {
          id: "osParticipationGroup",
          title: "6.2 参与方式、动机与阻碍",
          caption: "图 22–24：参与开源的方式、动机及主要阻碍因素。",
          charts: ["osWayChart", "osMotiveChart", "osBlockerChart"],
        },
        {
          id: "osProjectFutureGroup",
          title: "6.3 项目开源程度与对未来的判断",
          caption:
            "图 25–27：对开源许可证的理解、项目开源程度与对未来五年开源作用的判断。",
          charts: ["osLicenseChart", "projectOpenChart", "osFutureChart"],
        },
      ],
      content: [
        {
          type: "paragraph",
          text: "和任何一份全球开发者报告一样：",
          afterChart: "osKnowUseGroup",
        },
        {
          type: "list",
          items: [
            "几乎所有人都在不同程度上依赖开源。",
            "大多数项目中，超过一半的代码都建立在开源组件之上。",
          ],
          afterChart: "osKnowUseGroup",
        },
        {
          type: "paragraph",
          text: "参与方式上，提 Issue 最常见，写 PR 的人明显减少，长期维护项目的核心贡献者更少。",
          afterChart: "osBlockerChart",
        },
        {
          type: "paragraph",
          text: "动机几乎被「学习与技能提升」支配，其次才是兴趣、声誉和工作需求；而真正阻碍大家的是：缺乏时间、不知道如何开始、不够自信、找不到合适项目。",
          afterChart: "osBlockerChart",
        },
        {
          type: "paragraph",
          text: "现实状况是：",
          afterChart: "osProjectFutureGroup",
        },
        {
          type: "list",
          items: [
            "大多数人知道开源重要，但对许可证只「大概知道」。",
            "自己参与的项目未必真正完全开源，部分处在「半开半闭」状态。",
            "当问到未来五年开源的作用时，绝大多数人仍然认为会更重要甚至成为主流基础设施。",
          ],
          afterChart: "osProjectFutureGroup",
        },
        {
          type: "blockquote",
          text: "洞察六：当前 Web3 更像是「站在开源巨人肩膀上，但自身在如何以开源方式行走上还不成熟」的阶段。要真正继承开源精神，需要在许可证理解、项目开放策略和治理结构上补更多课。",
          afterChart: "osProjectFutureGroup",
        },
      ],
    },
    {
      id: "sec7",
      title: "七、社区与从业环境：黑客松、机会和安全感",
      charts: [
        {
          id: "communityEventsGroup",
          title: "7.1 社区参与与技术活动",
          caption: "图 28–30：是否参与社区与技术活动，以及偏好的技术活动类型。",
          charts: ["communityChart", "eventsChart", "eventTypeChart"],
        },
        {
          id: "communityNeedChart",
          title: "7.2 对社区支持的期待",
          caption: "图 31：希望社区提供的额外支持。",
        },
        {
          id: "envBackWeb2Group",
          title: "7.3 对 Web3 从业环境的感受与是否回 Web2",
          caption: "图 32–33：在职 Web3 人群的环境满意度与是否考虑回 Web2。",
          charts: ["envSatisChart", "backWeb2Chart"],
        },
      ],
      content: [
        {
          type: "paragraph",
          text: "多数开发者至少偶尔参与社区，有相当一部分积极参加黑客松和技术分享会。对很多人而言，这既是学习场景，也是结识同伴、寻找工作和合作机会的入口。",
          afterChart: "eventTypeChart",
        },
        {
          type: "paragraph",
          text: "在众多选项中，「就业/合作机会」和「项目孵化/资助」遥遥领先，其次才是课程和工具。这与很多通用技术社区侧重「知识与工具」不同，Web3 社区被期待提供的是<strong>更直接的机会与资源链接</strong>。",
          afterChart: "communityNeedChart",
        },
        {
          type: "paragraph",
          text: "从环境满意度来看，大多数人集中在「一般」和「满意」两档；对是否回 Web2 的问题，大部分 Web3 从业者短期内并不考虑，但也有大约四分之一处于摇摆状态。",
          afterChart: "backWeb2Chart",
        },
        {
          type: "blockquote",
          text: "洞察七：Web3 从业环境的核心矛盾并不在于绝对收入，而在于「机会密度 × 不确定性」。谁能在本地构建更稳健、可持续的职业通道，谁就更能留住开发者。",
          afterChart: "backWeb2Chart",
        },
      ],
    },
  ],

  conclusion: {
    title: "结语：2025 年的 Web3，对华语开发者意味着什么？",
    content: [
      {
        type: "paragraph",
        text: "综合本次调研与 GitHub、Stack Overflow、JetBrains 等公开报告，我们大致可以给出三个判断：",
      },
      {
        type: "list",
        items: [
          "<strong>在开发者画像上，Web3 开发者与「普通工程师」高度重叠。</strong>年龄、学历和技术栈都非常接近，这不是一个神秘的亚文化圈层。",
          "<strong>在职业路径上，Web3 又和传统互联网有显著不同。</strong>多元收入、远程办公和高波动，让它更接近一种「工程师自由职业/创客」模式。",
          "<strong>在风险与竞争上，Web3 面对的不只是监管，还有 AI 等更强力的人才收割机。</strong>谁能在真实应用和开发体验上拿出更好的答案，谁就更可能赢得下一阶段的工程师时间。",
          "<strong>在开源与社区上，Web3 继承了全球开源运动的大框架，但还没有完全兑现「一切开源」的理想。</strong>",
        ],
      },
      {
        type: "paragraph",
        text: "也许可以这样总结 2025 年华语开发者眼中的 Web3：",
      },
      {
        type: "blockquote",
        text: "它不是注定伟大的乌托邦，也不是已经终结的泡沫，而是一个仍在试验中的工程师乐园与资本试验场。对愿意长期学习、拥抱不确定性、乐于在开源中成长的人来说，这里依然有值得下注的未来。",
      },
    ],
  },

  contributors: {
    title: "贡献者说明",
    content: [
      {
        type: "paragraph",
        text: "本报告由华语 Web3 开源社区协作完成，主要贡献者包括：",
      },
      {
        type: "list",
        items: [
          "<strong>问卷设计与调研执行</strong>：由多个华语 Web3 开发者社区联合发起，包括开发者社群、黑客松组织方和技术媒体。",
          "<strong>数据收集与清洗</strong>：技术团队在 2025 年初通过线上问卷收集数据，历时 4 周，共回收 240+ 份问卷，最终筛选得到 220 份有效样本。",
          "<strong>数据分析与可视化</strong>：数据分析师使用开源工具进行数据处理，Chart.js 实现图表可视化。",
          "<strong>报告撰写与编辑</strong>：技术写作团队基于数据洞察撰写报告正文，确保客观性与可读性。",
          "<strong>开源社区贡献</strong>：本报告采用开源协作模式，社区成员可以通过 GitHub 提交问题和改进建议。",
        ],
      },
      {
        type: "paragraph",
        text: "特别感谢所有参与问卷调研的开发者，是你们的真实反馈让这份报告成为可能。",
      },
    ],
  },

  howToContribute: {
    title: "如何贡献",
    content: [
      {
        type: "paragraph",
        text: "我们欢迎所有形式的贡献！无论你是开发者、设计师、数据分析师还是写作爱好者，都可以帮助改进这份报告。",
      },
      {
        type: "list",
        items: [
          "<strong>提交问题和建议</strong>：如果你发现了报告中的错误、遗漏，或有改进建议，请在 GitHub 上提交 Issue。",
          "<strong>贡献代码</strong>：我们可以接受 Pull Request 来修复 bug、添加新功能或改进文档。请先查看开放的 Issue，寻找你可以帮助的地方。",
          "<strong>改进翻译</strong>：如果你发现中英文翻译不准确或有更好的表达方式，欢迎提交改进。",
          "<strong>分享传播</strong>：帮助分享这份报告到你的社区、社交媒体或技术圈子，让更多开发者看到。",
          "<strong>提供数据洞察</strong>：如果你有数据分析经验，可以提供更深层次的数据洞察或可视化建议。",
          "<strong>参与讨论</strong>：在 GitHub Discussions 中参与关于报告内容、方法论或未来方向的讨论。",
        ],
      },
      { type: "paragraph", text: "贡献指南：" },
      {
        type: "list",
        items: [
          "保持友善和尊重：社区成员应该相互尊重，建设性地讨论问题。",
          "提供上下文：提交 Issue 或 PR 时，请详细描述问题或改进内容。",
          "遵循现有风格：代码和文本应保持与现有风格一致。",
          "小步快跑：优先处理小的、独立的改进，大的改进可以先讨论再实施。",
        ],
      },
      {
        type: "blockquote",
        text: "每一份贡献，无论大小，都让这份报告变得更好。感谢你的参与！",
      },
    ],
  },

  acknowledgments: {
    title: "致谢",
    content: [
      { type: "paragraph", text: "本报告的完成离不开以下组织和个人的支持：" },
      {
        type: "list",
        items: [
          "<strong>社区合作伙伴</strong>：感谢各大华语 Web3 开发者社群、黑客松组织方、技术 Meetup 组织者的协助推广。",
          "<strong>技术支持</strong>：感谢 GitHub、Stack Overflow、JetBrains 等平台提供的公开开发者报告数据，为我们的横向对比提供了重要参考。",
          "<strong>开源项目</strong>：本报告使用的主要技术栈包括 Chart.js（图表）、ChartDataLabels（数据标签插件）等开源项目，感谢这些项目的维护者。",
          "<strong>所有参与者</strong>：感谢 220 位花时间填写问卷的开发者，你们每一个人的回答都为这份报告贡献了价值。",
        ],
      },
      {
        type: "paragraph",
        text: "本报告遵循 CC-BY-4.0 协议开源，欢迎转载、分享和二次创作，请保留署名。",
      },
      {
        type: "blockquote",
        text: "开源不是一个人的独角戏，而是一群人的协奏曲。感谢每一位为华语 Web3 生态做出贡献的开发者。",
      },
    ],
  },
};
