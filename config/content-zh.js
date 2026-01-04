// 中文内容配置
const contentZh = {
  title: "2025 Web3 华语开发者调研报告",
  subtitle: ``,
  note: "",
  sections: [
    {
      id: "sec0",
      title: "调研设计与样本说明",
      isIntro: true,
      content: [
        {
          type: "heading",
          level: 3,
          text: "1.1 调研目的",
        },
        {
          type: "paragraph",
          text: "《2025 Web3 华语开发者调研报告》（下称报告）基于 2025 年末在华语技术社区开展的一次问卷调研，由 <strong><a href=\"https://openbuild.xyz/\" target=\"_blank\">OpenBuild</a></strong>, <strong><a href=\"https://www.gccofficial.org/\" target=\"_blank\">GCC</a></strong>, <strong><a href=\"https://learnblockchain.cn/\" target=\"_blank\">登链</a></strong>, <strong>Creators</strong>, <strong>OpenCAS</strong> 联合发起，<strong><a href=\"https://web3insight.ai/\" target=\"_blank\">Web3insight</a></strong> 提供数据分析服务，本次共回收 220 份有效样本。",
        },
        {
          type: "paragraph",
          text: "样本主要来自 Web2/Web3 开发者社群、黑客松与相关活动。为帮助理解数据，我们在部分关键指标上参考了 GitHub Octoverse、Stack Overflow、JetBrains 等开发者报告，进行横向对比，以获得更全面的视角。",
        },
        {
          type: "paragraph",
          text: "本次报告尝试回答三个核心问题：",
        },
        {
          type: "list",
          items: [
            "当前与潜在的华语 Web3 开发者群体由谁构成？",
            "在转型路径、技术栈、收入与职业发展、开源参与上，他们有哪些共性与分化？",
            "这些特征与 GitHub、JetBrains、Stack Overflow 等全球开发者调研中的 Web2/开源生态相比，有何异同，对项目方、社区和政策制定者意味着什么？",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "1.2 样本概况与结构",
        },
        {
          type: "paragraph",
          text: "有效问卷共 220 份。整体分布上：",
        },
        {
          type: "list",
          items: [
            "最大的一块是仍在 Web2 或校园、但持续观望 Web3 的人，接近一半；",
            "其次是一批已经在 Web3 全职或长期投入的开发者；",
            "还有一个小但重要的群体：已经或准备退坑 Web3 的人。",
          ],
        },
        {
          type: "paragraph",
          text: "这非常接近许多新技术进入「冷静期」时的典型结构：多数人在观望，少数人已经下场，极少数人体验过再离开。",
        },
        {
          type: "paragraph",
          text: "这意味着两点：",
        },
        {
          type: "list",
          items: [
            "对开发者而言，Web3 已经从单纯的投机叙事回到了\"可以被认真评估的一种技术/职业选项\"；",
            "对生态建设者而言，真正要争取的是那一大半\"观望但未决\"的人，他们愿意填这份问卷，说明认知门槛已过，只差可信的路径和机会。",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "1.4 问卷设计特点与局限说明",
        },
        {
          type: "paragraph",
          text: "本次问卷在设计上有几个特点：",
        },
        {
          type: "list",
          items: [
            "不是简单按「使用语言/框架」切入，而是按职业路径和当前状态分流提问；",
            "对已在 Web3、观望中、学生、退坑等不同阶段，分别设计了有针对性的模块（收入、求职、学习方式、开源参与、社区参与、对未来的看法等）；",
            "对开源部分设计了较完整的链路：认知 → 参与方式 → 数量 → 动机 → 阻碍 → 许可证理解 → 使用比例 → 对未来的判断；",
          ],
        },
        {
          type: "paragraph",
          text: "此外，单选、多选与开放文本结合，收集了大量定性观点，可用于构建\"开发者语录\"与典型人物画像。",
        },
        {
          type: "paragraph",
          text: "主要局限包括：",
        },
        {
          type: "list",
          items: [
            "样本量有限且并非严格随机，主要来自 Web3 社区、微信群、TG 群、招聘渠道、黑客松等，存在自选择偏差；",
            "问卷逻辑复杂，部分问题只对特定子集展示，不同分支问题对应的有效样本数不一致；",
            "货币与收入区间以美元为主，主观满意度受行情影响较大，调研时间集中在 2025 年底，回答中的乐观或悲观情绪可能掺杂对市场走势的预期。",
          ],
        },
        {
          type: "paragraph",
          text: "本报告已在 <strong><a href=\"https://github.com/openbuildxyz/web3-chinese-speaking-devs-report\" target=\"_blank\">GitHub</a></strong> 开源，如果大家对于本报告有任何建议反馈，欢迎参考文末的「如何贡献」章节进行协作贡献。",
        },
        {
          type: "blockquote",
          text: "提示：所有具体百分比均在图表中呈现，正文只给出趋势与洞察。",
        },
      ],
    },
    {
      id: "tldr",
      title: "TL;DR",
      isIntro: true,
      content: [
        {
          type: "paragraph",
          text: "<strong>样本结构</strong>：220 份有效问卷中，接近一半仍在 Web2 或校园、但持续观望 Web3；另一半已经在 Web3 全职或长期投入，还有一小撮已经或准备退坑。Web3 对多数人来说，已经从『信不信』变成『值不值得押职业筹码』。",
        },
        {
          type: "paragraph",
          text: "<strong>画像与门槛</strong>：年龄主要集中在 20–35 岁，本科+硕士占近九成，和全球开发者画像非常接近。真正的门槛不在学历，而在能否玩转<strong>英文一手生态</strong>：会基础英文可以入行，但能流畅用英文协作，才决定上限。",
        },
        {
          type: "paragraph",
          text: "<strong>地理分布与职业路径</strong>：",
        },
        {
          type: "list",
          items: [
            "大量开发者身在内地二线/新一线城市，以美元或稳定币为全球项目写代码，做『地理套利』；",
            "走到管理层、协议核心或创业角色的人，更集中在新加坡、香港、迪拜等枢纽城市；",
            "还有一部分数字游民在东南亚、日本等地游走，自由高，但合规和长期保障风险也高。",
            "Web3 的全球化没有消灭『位置』的意义，而是把它从『办公城市』变成『职业策略』。",
          ],
        },
        {
          type: "paragraph",
          text: "<strong>收入与风险</strong>：",
        },
        {
          type: "list",
          items: [
            "固定年薪整体与本地中高级 Web2 工程师相近、略偏上，但大部分缺乏社保等权益；",
            "交易、外包、Airdrop、Grant 等非固定收入带来想象力，但『神话级收益』只发生在极少数人身上；",
            "行业把一部分本该由公司承担的波动和合规风险，转移给了个体。",
            "对大多数人而言，Web3 更像一份『中等偏上、但波动更大』的工作，而不是持续不断的暴富机器。",
          ],
        },
        {
          type: "paragraph",
          text: "<strong>技术栈与公链偏好</strong>：",
        },
        {
          type: "list",
          items: [
            "底层还是典型 Web2 栈：前端 + 全栈 JS 为主，Python/Java/Go 负责后端，Rust/C++ 做底层与高性能；",
            "EVM + Solidity 是绝对主战场，也是默认起点，Solidity 更像『默认技能』而非显性标签；",
            "Move、Solana、ZK 等是进阶『第二外语』，带来技术溢价但不是入门门槛；",
            "公链关注度上，以 Ethereum 为核心的格局与全球一致，Solana/Bitcoin 是第二梯队，BNB、Sui 等紧随其后。",
          ],
        },
        {
          type: "paragraph",
          text: "<strong>动机、入门与退坑</strong>：",
        },
        {
          type: "list",
          items: [
            "选择 Web3 的首要原因已从『信仰/暴富』转向<strong>远程工作与灵活生活方式</strong>，薪资更高排在其后，『去中心化信仰』只占少数；",
            "真正有效的入门路径是：看文档和源码 → 参与开源和黑客松 → 在社区里建立信任 → 获得第一份机会；",
            "转型难点在于：缺乏系统学习路径、工作机会不透明、合规/法律担忧、英语和理念门槛；",
            "退坑者更多是对当前行业形态和职业稳定性失望，而非否定区块链或开源本身，未来回流仍有可能。",
          ],
        },
        {
          type: "paragraph",
          text: "<strong>开源参与现状</strong>：",
        },
        {
          type: "list",
          items: [
            "几乎所有人高度依赖开源组件，但真正长期维护项目的核心贡献者很少；",
            "推 Issue 的人多，写 PR 的人少；主要动机是学习和技能提升，最大阻碍是时间、路径不清、自信不足和找不到合适项目；",
            "与全球开发者调查相比，本样本中提交过 Issue 或 PR 的比例更高，但华语开发者在 Web3 核心仓库中的活跃占比仍偏低，且 2025 年整体活跃度出现显著下滑；",
            "Web3 正在尝试用 Grant、Bounty、Token 和声誉激励重塑开源，但机制仍在实验阶段。",
          ],
        },
        {
          type: "paragraph",
          text: "<strong>社区与从业环境</strong>：",
        },
        {
          type: "list",
          items: [
            "多数开发者至少偶尔参与社区活动，不少人积极参加黑客松和技术分享；",
            "相比课程与工具，大家更期待社区提供的是<strong>就业/合作机会</strong>和<strong>项目孵化/资助</strong>；",
            "Web3 从业者整体对环境评价在『一般~满意』之间，大部分短期内不打算回 Web2，但约四分之一处于摇摆状态。",
            "行业的核心矛盾不在于绝对收入，而在于『机会密度 × 不确定性』。",
          ],
        },
        {
          type: "paragraph",
          text: "<strong>整体判断</strong>：",
        },
        {
          type: "list",
          items: [
            "画像上，Web3 开发者和普通工程师高度重叠；",
            "职业路径上，更接近『工程师自由职业/创客』模式；",
            "风险上，不仅要面对监管，也要和 AI 这样的『超级人才收割机』竞争；",
            "在开源与社区层面，Web3 站在开源巨人的肩膀上，但自身在许可证理解、项目开放程度和治理结构上还远未成熟。",
          ],
        },
        {
          type: "blockquote",
          text: "<strong>一句话总结</strong>：2025 年的 Web3，对华语开发者来说既不是乌托邦，也不是泡沫尾声，而是一个仍在试验中的工程师乐园与资本试验场。它仍然提供机会，但只奖励那些愿意长期学习、拥抱不确定性、在开源与社区中持续积累声誉和信任的人。",
        },
      ],
    },
    {
      id: "sec1",
      title: "一、样本概况：一半观望，一半已经「上车」",
      charts: [
        {
          id: "statusChart",

          name: "目前状态",
          title: "1.1 样本按「目前状态」分布",
          caption: "图 1：220 份有效样本按「目前状态」划分的占比。",
        },
        {
          id: "ageOverallChart",

          name: "整体年龄结构",
          title: "1.2 整体年龄结构",
          caption: "图 2：样本整体年龄分布。",
        },
        {
          id: "ageStatusChart",

          name: "年龄×目前状态",
          title: "1.3 年龄 × 目前状态（结构示意）",
          caption: "图 3：不同「目前状态」下的年龄段结构。",
        },
      ],
      content: [
        {
          type: "paragraph",
          text: "为了更好地理解不同开发者在 Web3 中所处的位置与心态差异，我们将问卷中的\"目前状态\"进一步归并为<strong>五类开发者画像</strong>：",
        },
        {
          type: "list",
          items: [
            "<strong>已从 Web2 转入 Web3</strong>；",
            "<strong>学生阶段已/正在直接进入 Web3</strong>；",
            "<strong>在 Web2 工作、观望 Web3</strong>；",
            "<strong>在校学生、观望 Web3</strong>；",
            "<strong>已经或准备退坑 Web3</strong>.",
          ],
        },
        {
          type: "paragraph",
          text: "这一分组并不是为了贴标签，而是为了更真实地还原：谁已经下场、谁在犹豫、谁经历过后选择离开。后文关于技术栈、收入、开源参与和社区行为的分析，均基于这一分组展开。",
        },
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
          text: "整体来看，年龄集中在 20–35 岁，与全球开发者画像高度一致。",
          afterChart: "ageStatusChart",
        },
        {
          type: "paragraph",
          text: "与 Stack Overflow 等通用调研相比：",
          afterChart: "ageStatusChart",
        },
        {
          type: "list",
          items: [
            "学生和应届生比例略高，说明新一代开发者更早把 Web3 视为职业选择之一；",
            "样本中 35 岁以上的资深工程师也占有一定比例，其中既有人正在尝试，也有人已经退场，对趋势的判断往往更为冷静。",
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
          title: "2.1 最高学历和毕业院校类型",
          charts: ["eduChart", "schoolChart"],
          description: true,
        },
        {
          id: "eduChart",
          name: "学历分布",
          caption: "图 4：受访 Web3 开发者的最高学历分布。",
        },
        {
          id: "schoolChart",
          name: "院校类型",
          caption: "图 5：受访 Web3 开发者的毕业院校类型分布。",
        },
        {
          id: "englishChart",

          name: "英语能力",
          title: "2.2 英语能力结构（归类示意）",
          caption: "图 6：受访 Web3 开发者的英语能力层级示意。",
        },
      ],
      content: [
        {
          type: "paragraph",
          text: "从学历和院校分布可以看到：",
          afterChart: "schoolChart",
        },
        {
          type: "list",
          items: [
            "本科与硕士合计接近九成，与全球开发者的学历结构相当。",
            "近一半来自普通本科院校，说明 Web3 并不是只发生在「清北+海外名校」的小圈子。",
            "世界一流大学的占比略高，部分原因在于：顶尖学校学生更容易参与黑客松、研究项目，也更愿意在新领域试水。",
          ],
          afterChart: "schoolChart",
        },
        {
          type: "paragraph",
          text: "对项目方来说，一个现实建议是：<strong>如果你只盯着极少数名校，就会错过一大半潜在的贡献者</strong>。",
          afterChart: "schoolChart",
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
          type: "paragraph",
          text: "在 Web3 这种高度国际化的技术生态中，英语不再只是简历上的\"加分项\"，而是决定你能否接入一手信息与核心机会的基础设施。",
          afterChart: "englishChart",
        },
        {
          type: "paragraph",
          text: "从样本反馈看，英语能力并不会明显影响\"是否能入行\"，但会显著影响一个人能走多远：是否能参与协议级讨论、维护核心开源项目、进入国际团队，或长期获得 Grant 与 Fellowship。",
          afterChart: "englishChart",
        },
        {
          type: "paragraph",
          text: "换句话说，英语不是短期门槛，而是 Web3 职业发展的长期分水岭。",
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
      title: "三、地理分布与全球化生存：Web3 开发者的真实空间结构",
      charts: [
        {
          id: "workModelChart",

          name: "工作模式",
          title: "Web3 开发者的工作模式",
          caption: "图 7：受访 Web3 开发者的工作模式分布。",
        },
        {
          id: "geoDistGroup",
          title: "受访开发者地区与城市层级分布",
          caption: "图 8–9：受访开发者地区结构与城市层级分布。",
          charts: ["geoRegionChart", "geoCityLevelChart"],
        },
        {
          id: "geoRegionChart",
          name: "地区分布",
        },
        {
          id: "geoCityLevelChart",
          name: "城市层级",
        },
      ],
      content: [
        {
          type: "paragraph",
          text: "在讨论 Web3 的收入、技术与职业路径之前，有一个绕不开但常被忽略的问题：",
          afterChart: "workModelChart",
        },
        {
          type: "paragraph",
          text: "华语 Web3 开发者，究竟「住在哪里、为谁工作、为什么这样分布」？",
          afterChart: "workModelChart",
        },
        {
          type: "paragraph",
          text: "与传统互联网公司高度集中在一线城市不同，Web3 开发者呈现出一种明显的空间离散化特征。这并非偶然，而是远程协作、稳定币薪酬与监管差异共同作用的结果。",
          afterChart: "workModelChart",
        },
        {
          type: "heading",
          level: 3,
          text: "3.1 地理套利：身在内地，为全球写代码",
          afterChart: "workModelChart",
        },
        {
          type: "paragraph",
          text: "在本次调研样本中，一个非常突出的现象是：",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "相当比例的 Web3 开发者居住在中国大陆的二线及新一线城市，却长期服务于海外项目。",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "这类开发者常见的城市包括成都、杭州、长沙、大理等，生活成本相对可控，但收入以美元或稳定币计价。这种模式在社区中常被称为 <strong>「地理套利（Geo‑Arbitrage）」</strong>：",
          afterChart: "geoDistGroup",
        },
        {
          type: "list",
          items: [
            "<strong>成本端</strong>：使用国内生活成本、医疗与家庭支持体系；",
            "<strong>收入端</strong>：承接海外 Web3 项目，获得美元或稳定币薪酬；",
            "<strong>结果</strong>：实际购买力往往高于一线城市同级别 Web2 岗位。",
          ],
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "对很多开发者而言，这是一种极具吸引力、也相对「理性」的选择。",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "它不要求移民、不需要进入核心金融中心，却能在短期内显著改善现金流。",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "但需要看到的是：",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "地理套利解决的是「当下收入」，而不是「长期上限」。",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "在这一模式下，开发者往往：",
          afterChart: "geoDistGroup",
        },
        {
          type: "list",
          items: [
            "长期远程，缺乏线下网络；",
            "更容易停留在执行型或中级工程角色；",
            "对项目决策、方向与治理影响有限。",
          ],
          afterChart: "geoDistGroup",
        },
        {
          type: "heading",
          level: 3,
          text: "3.2 全球枢纽城市：新加坡 / 香港 / 迪拜",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "与「地理套利者」形成对照的，是另一批选择主动进入全球 Web3 枢纽城市的开发者与管理者。",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "在华语 Web3 生态中，新加坡、香港和迪拜被频繁提及，原因并不神秘：",
          afterChart: "geoDistGroup",
        },
        {
          type: "list",
          items: [
            "监管相对明确，对加密资产和 Web3 项目更友好；",
            "资本、项目与人才密度高；",
            "线下活动、会议与非正式社交频繁。",
          ],
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "调研与访谈中可以明显感受到一个趋势：",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "越接近管理层、核心协议或创业角色的开发者，越倾向于向这些城市聚集。",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "原因在于，Web3 的高阶职位——如 CTO、合伙人、核心维护者——",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "高度依赖线下信任与长期关系积累。",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "远程协作可以完成代码，但很难完全替代：",
          afterChart: "geoDistGroup",
        },
        {
          type: "list",
          items: [
            "架构决策的信任；",
            "项目早期的博弈与共识；",
            "投资人、合作方与核心贡献者之间的非正式互动。",
          ],
          afterChart: "geoDistGroup",
        },
        {
          type: "heading",
          level: 3,
          text: "3.3 数字游民：自由、合法性与税务边界",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "还有一类开发者，选择了一条看似更自由、但边界更模糊的路径——数字游民。",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "他们常旅居于：",
          afterChart: "geoDistGroup",
        },
        {
          type: "list",
          items: [
            "东南亚（清迈、曼谷、巴厘岛）；",
            "日本部分城市；",
            "偶尔在不同国家之间短期移动。",
          ],
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "这类开发者通常追求：",
          afterChart: "geoDistGroup",
        },
        {
          type: "list",
          items: [
            "更低的生活成本；",
            "更高的生活质量；",
            "对地点与时间的最大自由度。",
          ],
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "但调研中也频繁出现隐忧：",
          afterChart: "geoDistGroup",
        },
        {
          type: "list",
          items: [
            "签证合法性模糊；",
            "税务居民身份不清；",
            "医疗、社保与长期保障缺位。",
          ],
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "这意味着，数字游民模式对个人自律与风险意识要求极高。",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "它适合少数能清晰管理法律与财务边界的人，而并非「默认安全选项」。",
          afterChart: "geoDistGroup",
        },
        {
          type: "heading",
          level: 3,
          text: "3.4 地理位置如何影响职业上限？",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "综合来看，地理选择并非生活方式问题，而是职业策略的一部分：",
          afterChart: "geoDistGroup",
        },
        {
          type: "list",
          items: [
            "<strong>地理套利者</strong>：\n优势：现金流、性价比\n风险：上限与网络受限",
            "<strong>枢纽城市进入者</strong>：\n优势：影响力、长期机会\n成本：生活成本与不确定性",
            "<strong>数字游民</strong>：\n优势：自由\n风险：合规与可持续性",
          ],
          afterChart: "geoDistGroup",
        },
        {
          type: "blockquote",
          text: "洞察三：Web3 的全球化，并没有消灭「位置」的意义，而是重新定义了它。",
          afterChart: "geoDistGroup",
        },
      ],
    },
    {
      id: "sec4",
      title: "四、Web3 收入结构与薪资感受：多元收入带来想象力，也带来不确定性",
      charts: [
        {
          id: "salaryIncomeGroup",
          title: "4.1 固定年薪 vs 非固定收入",
          caption: "图 10–11：受访 Web3 开发者的固定年薪与非固定收入区间分布。",
          charts: ["salaryFixedChart", "salaryVarChart"],
        },
        {
          id: "salaryFixedChart",
          name: "固定年薪",
        },
        {
          id: "salaryVarChart",
          name: "非固定收入",
        },
        {
          id: "incomeSatisGroup",
          title: "4.2 收入来源构成与薪资感受",
          caption: "图 12–13：受访 Web3 开发者的收入来源构成与对 Web3 薪资的主观感受。",
          charts: ["incomeSourceChart", "salarySatisChart"],
        },
        {
          id: "incomeSourceChart",
          name: "收入来源",
        },
        {
          id: "salarySatisChart",
          name: "薪资满意度",
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
            "Web3 开发者则更像拿着一份「相对稳定的底薪 + 少量高波动的期权」的组合。",
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
          type: "paragraph",
          text: "多元收入并不等于\"更赚钱\"，而更像是一种风险结构的变化。",
          afterChart: "incomeSatisGroup",
        },
        {
          type: "paragraph",
          text: "与 Web2 相比，Web3 把一部分原本由公司承担的不确定性，转移到了个人身上：项目周期、Token 波动、合规与税务、劳务关系，都需要开发者自行消化。",
          afterChart: "incomeSatisGroup",
        },
        {
          type: "paragraph",
          text: "这也是为什么在退坑样本中，\"工作不稳定\"和\"法律与合规风险\"被频繁提及——真正让人犹豫的，并不只是赚得多不多，而是能否长期、安心地做技术。",
          afterChart: "incomeSatisGroup",
        },
        {
          type: "blockquote",
          text: "洞察四：Web3 的高收益故事更多发生在极少数人身上，而对应的代价是整个群体需要承受更高波动与不确定性。对大多数人来说，它更像一份「中等偏上、但没有神话那么夸张」的工作。",
          afterChart: "incomeSatisGroup",
        },
      ],
    },
    {
      id: "sec5",
      title: "五、技术栈与公链偏好：没有脱离 Web2，只是在主战场旁边开了块新地",
      charts: [
        {
          id: "techStackChart",

          name: "Web2技术栈",
          title: "5.1 受访者主要 Web2 技术栈",
          caption: "图 14：受访 Web3 开发者的主要 Web2 技术栈。",
        },
        {
          id: "web3StackChart",

          name: "Web3生态栈",
          caption: "图 15：受访 Web3 开发者使用的 Web3 生态技术栈分布（多选）。",
        },
        {
          id: "chainsObserveGroup1",
          title: "5.2 公链偏好与 GitHub 贡献（一）",
          caption: "图 16–17：整体样本与 Web2 观望者的公链关注度。",
          charts: ["chainsOverallChart", "chainsWeb2ObserveChart"],
        },
        {
          id: "chainsOverallChart",
          name: "整体样本",
        },
        {
          id: "chainsWeb2ObserveChart",
          name: "Web2观望者",
        },
        {
          id: "chainsObserveGroup2",
          title: "5.2 公链偏好与 GitHub 贡献（二）",
          caption: "图 18–19：学生观望群体的公链兴趣，以及华语开发者在 GitHub 上的生态贡献分布（Web3Insight 数据）。",
          charts: ["chainsStudentObserveChart", "githubContribChart"],
        },
        {
          id: "chainsStudentObserveChart",
          name: "学生观望者",
        },
        {
          id: "githubContribChart",
          name: "GitHub贡献",
        },
      ],
      content: [
        {
          type: "paragraph",
          text: "Web2 的技术栈分布非常接近全球趋势：",
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
          text: "在问卷设计中，我们没有把「Solidity / web3.js / ethers.js」这类具体语言或库单独列成一个个选项，而是如图 15 所示，采用更贴近真实工作的「生态栈」维度来统计 Web3 技术栈。",
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
          text: "换句话说：对观望者而言，门槛不在「会不会 Solidity」，而在能否在熟悉的 Web2 栈之上跨出那一步，写出第一个真正跑在链上的项目；对已经入场的人而言，EVM + Solidity 仍然是机会密度最高的主战场，而 Move、Solana、ZK 等新栈，则更像是在此基础上的「第二外语」，会带来更多的技术溢价。",
          afterChart: "web3StackChart",
        },
        {
          type: "paragraph",
          text: "以 Ethereum 为中心的格局，在华语样本中与全球数据高度一致：它几乎是所有开发者进入 Web3 的「默认选项」。Solana 与 Bitcoin 构成明显的第二梯队，BNB、Sui、各种 L2 和新公链紧随其后。",
          afterChart: "githubContribChart",
        },
        {
          type: "paragraph",
          text: "相比在职 Web2 开发者，学生群体对 BNB、Sui 等新公链的兴趣更高，生态更分散，也更愿意追随新叙事。",
          afterChart: "githubContribChart",
        },
        {
          type: "blockquote",
          text: "洞察五：从技术到生态，Web3 并不是平行宇宙，而是与 Web2 共享绝大部分工程基础，只是在「共识 + 激励」层重新设计了一次。",
          afterChart: "githubContribChart",
        },
      ],
    },
    {
      id: "sec6",
      title: "六、动机、入门路径与挑战：从理想化叙事回归到工程师的算账逻辑",
      charts: [
        {
          id: "motiveWeb3Chart",

          name: "选择Web3原因",
          title: "6.1 进入 / 想进入 Web3 的主要动机",
          caption: "图 20：受访 Web3 开发者选择 Web3 的主要原因。",
        },
        {
          id: "learnEntryGroup",
          title: "6.2 了解 / 入门 Web3 的路径",
          caption: "图 21–22：受访 Web3 开发者了解 Web3 的渠道与最有效的入门方式。",
          charts: ["learnWeb3Chart", "entryHelpChart"],
        },
        {
          id: "learnWeb3Chart",
          name: "了解渠道",
        },
        {
          id: "entryHelpChart",
          name: "入门方式",
        },
        {
          id: "challengesExitGroup",
          title: "6.3 转型挑战与退坑原因",
          caption: "图 23–24：受访 Web3 开发者从 Web2 转型 Web3 的主要挑战与已经退坑人群的原因结构。",
          charts: ["challengeTransitionChart", "exitReasonChart"],
        },
        {
          id: "challengeTransitionChart",
          name: "转型挑战",
        },
        {
          id: "exitReasonChart",
          name: "退坑原因",
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
          text: "很多开发者的真实入场路径，并不是上完课 → 拿 Offer，而是更碎片化、也更社区化的过程：看文档和源码 → 参与开源或黑客松 → 在社区中建立信任 → 获得第一份机会。",
          afterChart: "entryHelpChart",
        },
        {
          type: "paragraph",
          text: "这也是为什么在 Web3 里，社区、开源和个人作品集的权重，往往高于一纸简历。",
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
          type: "paragraph",
          text: "值得注意的是，多数退坑者并没有否定区块链技术或开源价值本身。",
          afterChart: "exitReasonChart",
        },
        {
          type: "paragraph",
          text: "他们离开的，更多是对当前行业形态、项目稳定性和职业保障的失望，而不是对\"去中心化\"或\"开源协作\"的否定。",
          afterChart: "exitReasonChart",
        },
        {
          type: "paragraph",
          text: "这意味着：退坑并不等于结束，而更像一次阶段性退出——很多人仍在关注，也并不排除未来回流的可能。",
          afterChart: "exitReasonChart",
        },
        {
          type: "blockquote",
          text: "洞察六：从动机到退坑，工程师的算账逻辑越来越清晰——是否值得把有限的职业筹码押在 Web3 上，取决于：学习成本、机会密度、合规风险，以及与其他赛道（尤其是 AI）的对比。",
          afterChart: "exitReasonChart",
        },
      ],
    },
    {
      id: "sec7",
      title: "七、开源参与：高度依赖，参与深度仍有巨大上升空间",
      charts: [
        {
          id: "osKnowUseGroup",
          title: "7.1 对开源的认知与使用比例",
          caption: "图 25–26：受访 Web3 开发者对开源的了解程度与日常使用比例。",
          charts: ["osKnowChart", "osUseRatioChart"],
        },
        {
          id: "osKnowChart",
          name: "了解程度",
        },
        {
          id: "osUseRatioChart",
          name: "使用比例",
        },
        {
          id: "osParticipationGroup1",
          title: "7.2 参与开源的方式、动机和阻碍（一）",
          caption: "图 27–28：受访 Web3 与 Web2 开发者的开源参与情况对比。",
          charts: ["osWayWeb3Chart", "osWayWeb2Chart"],
        },
        {
          id: "osWayWeb3Chart",
          name: "Web3开发者",
        },
        {
          id: "osWayWeb2Chart",
          name: "Web2开发者",
        },
        {
          id: "osParticipationGroup2",
          title: "7.2 参与开源的方式、动机和阻碍（二）",
          caption: "图 29–30：受访 Web3 开发者参与开源的动机及主要阻碍因素。",
          charts: ["osMotiveChart", "osBlockerChart"],
        },
        {
          id: "osMotiveChart",
          name: "参与动机",
        },
        {
          id: "osBlockerChart",
          name: "主要阻碍",
        },
        {
          id: "osProjectFutureGroup",
          title: "7.3 项目开源程度与对未来的判断",
          caption: "图 31–32：受访 Web3 开发者对开源许可证的理解、项目开源程度。",
          charts: ["osLicenseChart", "projectOpenChart"],
        },
        {
          id: "osLicenseChart",
          name: "许可证理解",
        },
        {
          id: "projectOpenChart",
          name: "项目开放度",
        },
        {
          id: "osFutureChart",
          name: "未来判断",
        },
        {
          id: "contribActivityChart",

          name: "贡献活跃度",
          title: "7.4 过去 5 年华语开发者贡献活跃度",
          caption: "图 34：2021–2025 年华语开发者贡献活跃度（柱状图：活跃开发者数，折线图：同比增长率）。",
        },
        {
          id: "coreRepoContribChart",

          name: "核心仓库贡献",
          title: "7.5 华语开发者对 Web3 生态核心仓库的贡献活跃占比",
          caption: "图 35：各主要 Web3 项目核心仓库中华语开发者的数量及占比。",
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
          type: "paragraph",
          text: "与 GitHub、Stack Overflow 等全球开发者调查相比，本次样本中提交过 Issue 或 PR 的比例明显更高。",
          afterChart: "osProjectFutureGroup",
        },
        {
          type: "paragraph",
          text: "<strong>这说明华语 Web3 开发者并非只是\"使用开源\"，而是在相当程度上参与到开源协作中。</strong>",
          afterChart: "osProjectFutureGroup",
        },
        {
          type: "paragraph",
          text: "同时，Web3 也正在探索一种不同于传统志愿模式的开源路径：通过 Grant、Bounty、Token 和声誉机制，为持续贡献提供现实激励。这既是机会，也是尚未完全成熟的实验。",
          afterChart: "osProjectFutureGroup",
        },
        {
          type: "paragraph",
          text: "但根据 Web3insight 提供的数据，2025 年华语开发者参与 Web3 开源生态的活跃度出现了大幅下降，同时受制于语言、协作习惯等原因，华语开发者在 Web3 生态中对于核心仓库的贡献活跃占比相比华语开源开发者基数也处于较低位置，作为天然开源的行业，华语开发者的开源道路仍然任重道远。",
          afterChart: "coreRepoContribChart",
        },
        {
          type: "blockquote",
          text: "洞察七：当前 Web3 更像是「站在开源巨人肩膀上，但自身在如何以开源方式行走上还不成熟」的阶段。要真正继承开源精神，需要在许可证理解、项目开放策略和治理结构上补更多课。",
          afterChart: "coreRepoContribChart",
        },
      ],
    },
    {
      id: "sec8",
      title: "八、社区与从业环境：黑客松、机会和安全感",
      charts: [
        {
          id: "communityEventsGroup",
          title: "8.1 社区参与与技术活动",
          caption: "图 36–38：受访 Web3 开发者是否参与社区与技术活动，以及偏好的技术活动类型。",
          charts: ["communityChart", "eventsChart", "eventTypeChart"],
        },
        {
          id: "communityChart",
          name: "参与情况",
        },
        {
          id: "eventsChart",
          name: "活动参与",
        },
        {
          id: "eventTypeChart",
          name: "活动类型",
        },
        {
          id: "communityNeedChart",

          name: "社区支持需求",
          title: "8.2 对社区支持的期待",
          caption: "图 39：受访 Web3 开发者希望社区提供的额外支持。",
        },
        {
          id: "envBackWeb2Group",
          title: "8.3 对 Web3 从业环境的感受与是否回 Web2",
          caption: "图 40–41：受访 Web3 开发者在职人群的环境满意度与是否考虑回 Web2。",
          charts: ["envSatisChart", "backWeb2Chart"],
        },
        {
          id: "envSatisChart",
          name: "满意度",
        },
        {
          id: "backWeb2Chart",
          name: "回Web2意愿",
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
          text: "对很多华语 Web3 开发者来说，社区的价值并不主要体现在\"学到多少新知识\"，而在于机会与信任的连接。",
          afterChart: "communityNeedChart",
        },
        {
          type: "paragraph",
          text: "社区是他们接触项目、过滤风险、寻找合作伙伴、获得内推与反馈的关键节点。",
          afterChart: "communityNeedChart",
        },
        {
          type: "paragraph",
          text: "在一个高不确定性的行业里，社区往往承担了\"职业缓冲器\"的角色，这也是为什么即便已经退坑，不少人仍然选择留在社区中。",
          afterChart: "communityNeedChart",
        },
        {
          type: "paragraph",
          text: "从环境满意度来看，大多数人集中在「一般」和「满意」两档；对是否回 Web2 的问题，大部分 Web3 从业者短期内并不考虑，但也有大约四分之一处于摇摆状态。",
          afterChart: "backWeb2Chart",
        },
        {
          type: "blockquote",
          text: "洞察八：Web3 从业环境的核心矛盾并不在于绝对收入，而在于「机会密度 × 不确定性」。谁能在本地构建更稳健、可持续的职业通道，谁就更能留住开发者。",
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
        text: "从 2021–2025 的周期来看，一个越来越清晰的结论是：",
      },
      {
        type: "list",
        items: [
          "Web3 仍然提供机会；",
          "但不再奖励'只靠运气与短期叙事'的参与者；",
          "真正具备上行空间的，是那些：能在开源中积累声誉，在社区中建立信任，在技术上形成不可替代性的人。",
        ],
      },
      {
        type: "paragraph",
        text: "也许可以这样总结 2025 年华语开发者眼中的 Web3：",
      },
      {
        type: "blockquote",
        text: "它不是注定伟大的乌托邦，也不是已经终结的泡沫，而是一个仍在试验中的工程师乐园与资本试验场。对愿意长期学习、拥抱不确定性、乐于在开源中成长的人来说，这里依然有值得下注的未来，而社区，正是连接这些长期主义者的真正基础设施。",
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
          "<strong>提交问题和建议</strong>：如果你发现了报告中的错误、遗漏，或有改进建议，请在 <a href=\"https://github.com/openbuildxyz/web3-chinese-speaking-devs-report\" target=\"_blank\">GitHub</a> 上提交 Issue。",
          "<strong>贡献代码</strong>：我们可以接受 Pull Request 来修复 bug、添加新功能或改进文档。请先查看开放的 Issue，寻找你可以帮助的地方。",
          "<strong>改进翻译</strong>：如果你发现中英文翻译不准确或有更好的表达方式，欢迎提交改进。",
          "<strong>分享传播</strong>：帮助分享这份报告到你的社区、社交媒体或技术圈子，让更多开发者看到。",
          "<strong>提供数据洞察</strong>：如果你有数据分析经验，可以提供更深层次的数据洞察或可视化建议。",
          "<strong>参与讨论</strong>：在 <a href=\"https://github.com/openbuildxyz/web3-chinese-speaking-devs-report\" target=\"_blank\">GitHub Discussions</a> 中参与关于报告内容、方法论或未来方向的讨论。",
        ],
      },
      { type: "paragraph", text: "贡献指南：" },
      {
        type: "list",
        items: [
          "保持友善和尊重：社区成员应该相互尊重，建设性地讨论问题。",
          "提供上下文：提交 Issue 或 PR 时，请详细描述问题或改进内容。",
          "遵循现有风格：代码和文本应保持与现有风格一致。",
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
      { type: "paragraph", text: "本报告由 <strong><a href=\"https://openbuild.xyz/\" target=\"_blank\">OpenBuild</a></strong>, <strong><a href=\"https://www.gccofficial.org/\" target=\"_blank\">GCC</a></strong>, <strong><a href=\"https://learnblockchain.cn/\" target=\"_blank\">登链</a></strong>, <strong>Creators</strong>, <strong>OpenCAS</strong> 联合发起，<strong><a href=\"https://web3insight.ai/\" target=\"_blank\">Web3insight</a></strong> 提供数据分析服务。" },
      { type: "paragraph", text: "本报告的完成离不开以下组织和个人的支持：" },
      {
        type: "list",
        items: [
          "<strong>社区合作伙伴（排名不分先后）</strong>：感谢 Monad 华语、Solana 中文、HOH、Starknet 中文、Starknet Astro、KeyMapDAO、Alcove、Vana 中文、Victor Zhang (SmartToken)、Maggie(ETHGlobal)、Defihack Labs、Henry Lee (KiteAI)、4Seas、BETA UCB、Herstory 等社区/项目/贡献者的支持（因对接社区较多，如有遗漏，敬请谅解，欢迎随时联系我们补充！）。",
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
