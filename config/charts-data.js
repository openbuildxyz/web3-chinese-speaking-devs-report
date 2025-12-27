// 图表数据配置
const chartDataConfig = {
  // 1. 样本概况
  statusChart: {
    type: "pie",
    labels: {
      zh: ["现 Web2，观望 Web3 中", "前 Web2 开发，现 Web3 中", "现学生已 Web3 或毕业就直接 Web3 中", "现学生，观望 Web3 中", "已经 / 准备退坑 Web3"],
      en: ["In Web2, Observing Web3", "Ex-Web2 Dev, Now in Web3", "Student Already in Web3 / Joining After Graduation", "Student, Observing Web3", "Already Left / Planning to Leave Web3"]
    },
    data: [40.0, 25.5, 16.8, 10.9, 6.8],
    colors: ["#2563eb", "#fbbf24", "#16a34a", "#8b5cf6", "#ef4444"]
  },

  ageOverallChart: {
    type: "bar",
    labels: {
      zh: ["20 岁以下", "20–25", "26–30", "31–35", "35–40", "41–50", "50 岁+"],
      en: ["Under 20", "20–25", "26–30", "31–35", "35–40", "41–50", "50+"]
    },
    data: [2.7, 29.1, 33.2, 19.1, 8.2, 7.3, 0.5],
    color: "#2563eb"
  },

  ageStatusChart: {
    type: "bar",
    labels: {
      zh: ["前 Web2 开发，现 Web3 中", "已经 / 准备退坑 Web3", "现 Web2，观望 Web3 中", "现学生已 Web3 或毕业就直接 Web3 中", "现学生，观望 Web3 中"],
      en: ["Ex-Web2 Dev, Now in Web3", "Already Left / Planning to Leave Web3", "In Web2, Observing Web3", "Student Already in Web3 / Joining After Graduation", "Student, Observing Web3"]
    },
    datasets: [
      {
        label: "20 岁以下",
        data: [1.8, 0.0, 2.3, 5.4, 4.2],
        color: "#64748b"
      },
      {
        label: "20–25",
        data: [12.5, 13.3, 15.9, 59.5, 79.2],
        color: "#2563eb"
      },
      {
        label: "26–30",
        data: [41.1, 40.0, 38.6, 21.6, 8.3],
        color: "#16a34a"
      },
      {
        label: "31–35",
        data: [21.4, 6.7, 27.3, 10.8, 4.2],
        color: "#f59e0b"
      },
      {
        label: "35–40",
        data: [12.5, 6.7, 10.2, 0.0, 4.2],
        color: "#ef4444"
      },
      {
        label: "41–50",
        data: [10.7, 33.3, 4.5, 2.7, 0.0],
        color: "#8b5cf6"
      },
      {
        label: "50 岁+",
        data: [0.0, 0.0, 1.1, 0.0, 0.0],
        color: "#9ca3af"
      }
    ]
  },

  // 2. 教育与英语
  eduChart: {
    type: "pie",
    labels: {
      zh: ["大学本科", "硕士研究生", "大学专科", "博士及以上", "高中以下", "高中/中专/技校"],
      en: ["Bachelor's Degree", "Master's Degree", "Associate Degree", "PhD or Above", "Below High School", "High School / Vocational School"]
    },
    data: [66.4, 23.2, 7.3, 1.8, 0.9, 0.5],
    colors: ["#2563eb", "#16a34a", "#f59e0b", "#8b5cf6", "#ef4444", "#9ca3af"]
  },

  schoolChart: {
    type: "bar",
    labels: {
      zh: ["区域性本科", "国内知名大学", "世界一流大学", "职业/技术学院", "其他"],
      en: ["Regional University", "Top Domestic University", "World-Class University", "Vocational / Technical College", "Other"]
    },
    data: [48.8, 24.9, 16.6, 6.0, 3.7],
    color: "#2563eb"
  },

  englishChart: {
    type: "doughnut",
    labels: {
      zh: ["主要依赖翻译", "能独立阅读文档", "能流畅协作/接近母语"],
      en: ["Rely on Translation Tools", "Can Read Documentation Independently", "Can Collaborate Fluently / Near-Native"]
    },
    data: [40, 43, 17],
    colors: ["#ef4444", "#2563eb", "#16a34a"]
  },

  // 3. 收入与薪资
  salaryFixedChart: {
    type: "bar",
    labels: {
      zh: ["< 5W 美金", "5–10W 美金", "10–20W 美金"],
      en: ["< $50K USD", "$50–100K USD", "$100–200K USD"]
    },
    data: [53.4, 31.0, 15.5],
    color: "#2563eb"
  },

  salaryVarChart: {
    type: "bar",
    labels: {
      zh: ["< 5W 美金", "5–10W 美金", "10–20W 美金", "30–40W 美金"],
      en: ["< $50K USD", "$50–100K USD", "$100–200K USD", "$300–400K USD"]
    },
    data: [83.9, 11.8, 3.2, 1.1],
    color: "#16a34a"
  },

  incomeSourceChart: {
    type: "bar",
    labels: {
      zh: ["固定薪资", "交易收入", "外包", "Airdrop", "Grant", "其他", "捐赠"],
      en: ["Fixed Salary", "Trading Income", "Freelance / Consulting", "Airdrop", "Grant", "Other", "Donations"]
    },
    data: [62.4, 46.2, 21.5, 21.5, 15.1, 8.6, 2.2],
    color: "#2563eb"
  },

  salarySatisChart: {
    type: "pie",
    labels: {
      zh: ["一般", "满意", "不满意"],
      en: ["Neutral", "Satisfied", "Dissatisfied"]
    },
    data: [61.3, 32.3, 6.5],
    colors: ["#f59e0b", "#16a34a", "#ef4444"]
  },

  // 4. 技术栈
  web3StackChart: {
    type: "bar",
    labels: {
      zh: [
        "EVM 生态栈（Ethereum / Polygon / BNB / Base 等）",
        "Solana / Rust 生态栈",
        "Move 生态栈（Aptos / Sui）",
        "DeFi 协议生态（Uniswap / Aave / Curve / GMX 等）",
        "去中心化存储栈（IPFS / Filecoin / Arweave）",
        "Layer2 / Rollup 扩展栈（Arbitrum / Optimism / Base 等）",
        "ZK 技术栈（zkSync / Starknet / Scroll / Linea 等）",
        "基础设施 / 节点运行与验证者生态",
        "跨链与互操作生态（LayerZero / Axelar / Wormhole 等）",
        "Bitcoin / Lightning / Ordinals 生态栈",
        "Cosmos 生态栈（Cosmos SDK / Osmosis / Sei / Berachain 等）",
        "预言机 / 数据服务栈（Chainlink / The Graph 等）"
      ],
      en: [
        "EVM Ecosystem (Ethereum / Polygon / BNB / Base, etc.)",
        "Solana / Rust Ecosystem",
        "Move Ecosystem (Aptos / Sui)",
        "DeFi Protocol Ecosystem (Uniswap / Aave / Curve / GMX, etc.)",
        "Decentralized Storage Stack (IPFS / Filecoin / Arweave)",
        "Layer2 / Rollup Scaling Stack (Arbitrum / Optimism / Base, etc.)",
        "ZK Tech Stack (zkSync / Starknet / Scroll / Linea, etc.)",
        "Infrastructure / Node Running & Validator Ecosystem",
        "Cross-Chain & Interoperability (LayerZero / Axelar / Wormhole, etc.)",
        "Bitcoin / Lightning / Ordinals Ecosystem",
        "Cosmos Ecosystem (Cosmos SDK / Osmosis / Sei / Berachain, etc.)",
        "Oracle / Data Services Stack (Chainlink / The Graph, etc.)"
      ]
    },
    data: [72, 38, 33, 27, 22, 19, 18, 17, 16, 15, 14, 13],
    color: "#8b5cf6"
  },

  techStackChart: {
    type: "bar",
    labels: {
      zh: ["HTML/CSS/JS", "React/Vue/Angular", "Node.js", "Python", "Java", "Go", "全栈/DevOps", "Rust", "移动端", ".NET/C#"],
      en: ["HTML/CSS/JS", "React/Vue/Angular", "Node.js", "Python", "Java", "Go", "Full-Stack/DevOps", "Rust", "Mobile", ".NET/C#"]
    },
    data: [66.1, 50.9, 46.4, 45.5, 34.8, 23.2, 11.6, 10.7, 8.0, 8.0],
    color: "#2563eb"
  },

  chainsOverallChart: {
    type: "bar",
    labels: {
      zh: ["Ethereum", "Solana", "Bitcoin", "BNB", "Sui", "Monad", "Tron", "Aptos", "Avalanche", "Optimism", "Cosmos", "Polygon", "Cardano", "Polkadot", "Arbitrum", "zkSync", "Base", "TON"],
      en: ["Ethereum", "Solana", "Bitcoin", "BNB", "Sui", "Monad", "Tron", "Aptos", "Avalanche", "Optimism", "Cosmos", "Polygon", "Cardano", "Polkadot", "Arbitrum", "zkSync", "Base", "TON"]
    },
    data: [75.0, 47.3, 38.4, 25.0, 20.5, 8.9, 4.5, 4.5, 3.6, 2.7, 2.7, 2.7, 1.8, 1.8, 1.8, 1.8, 1.8, 1.8],
    color: "#2563eb"
  },

  chainsWeb2ObserveChart: {
    type: "bar",
    labels: {
      zh: ["Ethereum", "Solana", "Bitcoin", "BNB", "Sui", "Monad", "Optimism", "Avalanche", "Polygon", "Cardano", "zkSync", "Arbitrum", "Polkadot", "Cosmos", "Aptos", "Tron", "TON", "Base"],
      en: ["Ethereum", "Solana", "Bitcoin", "BNB", "Sui", "Monad", "Optimism", "Avalanche", "Polygon", "Cardano", "zkSync", "Arbitrum", "Polkadot", "Cosmos", "Aptos", "Tron", "TON", "Base"]
    },
    data: [79.5, 51.1, 42.0, 22.7, 18.2, 9.1, 3.4, 3.4, 2.3, 2.3, 2.3, 2.3, 2.3, 2.3, 2.3, 1.1, 1.1, 1.1],
    color: "#16a34a"
  },

  chainsStudentObserveChart: {
    type: "bar",
    labels: {
      zh: ["Ethereum", "Solana", "Sui", "Bitcoin", "Monad", "BNB", "Aptos", "Base", "TON", "Polygon", "Arbitrum"],
      en: ["Ethereum", "Solana", "Sui", "Bitcoin", "Monad", "BNB", "Aptos", "Base", "TON", "Polygon", "Arbitrum"]
    },
    data: [58.3, 33.3, 33.3, 29.2, 25.0, 16.7, 12.5, 8.3, 4.2, 4.2, 4.2],
    color: "#8b5cf6"
  },

  // 5. 动机与学习
  motiveWeb3Chart: {
    type: "bar",
    labels: {
      zh: ["远程工作优势", "更高薪资", "信仰去中心化", "Web2 找不到工作/被裁员", "在炒币", "其他"],
      en: ["Remote Work Advantages", "Higher Salary", "Believe in Decentralization", "Can't Find Web2 Job / Laid Off", "Trading Crypto", "Other"]
    },
    data: [51.8, 26.8, 11.6, 2.7, 2.7, 0.9],
    color: "#2563eb"
  },

  learnWeb3Chart: {
    type: "bar",
    labels: {
      zh: ["社区活动", "炒币/交易", "项目需求/工作机会", "在线教程/课程", "朋友/同事推荐", "学校课程", "其他"],
      en: ["Community Events", "Crypto Trading", "Project Requirements / Job Opportunities", "Online Tutorials / Courses", "Friend / Colleague Recommendation", "School Courses", "Other"]
    },
    data: [29.6, 27.8, 14.8, 11.1, 8.3, 4.6, 0.9],
    color: "#16a34a"
  },

  entryHelpChart: {
    type: "bar",
    labels: {
      zh: ["参与开源项目", "参与社区贡献", "看视频", "看文档", "做外包项目", "看书"],
      en: ["Participate in Open Source", "Contribute to Community", "Watch Videos", "Read Documentation", "Do Freelance Projects", "Read Books"]
    },
    data: [58.3, 56.5, 46.3, 45.4, 30.6, 15.7],
    color: "#2563eb"
  },

  challengeTransitionChart: {
    type: "bar",
    labels: {
      zh: ["不熟悉区块链技术栈", "缺乏学习资源或指导", "不知道在哪找到工作", "合规/法规顾虑", "英语水平", "适应新工具", "理解去中心化理念"],
      en: ["Unfamiliar with Blockchain Tech Stack", "Lack Learning Resources or Guidance", "Don't Know Where to Find Jobs", "Compliance / Regulatory Concerns", "English Proficiency", "Adapting to New Tools", "Understanding Decentralization Concepts"]
    },
    data: [50.9, 38.4, 35.7, 33.9, 31.2, 19.6, 15.2],
    color: "#ef4444"
  },

  exitReasonChart: {
    type: "bar",
    labels: {
      zh: ["参与 AI 去了", "工作不稳定", "担心法律风险", "不如想象中挣钱", "尝试其他行业机会", "其他"],
      en: ["Moved to AI", "Job Instability", "Legal Risk Concerns", "Not as Profitable as Imagined", "Trying Opportunities in Other Industries", "Other"]
    },
    data: [46.7, 33.3, 26.7, 20.0, 20.0, 6.7],
    color: "#8b5cf6"
  },

  // 6. 开源参与
  osKnowChart: {
    type: "pie",
    labels: {
      zh: ["略有了解", "熟悉", "非常熟悉/经常参与", "不了解"],
      en: ["Slightly Familiar", "Familiar", "Very Familiar / Frequently Participate", "Not Familiar"]
    },
    data: [43.6, 41.8, 10.0, 4.5],
    colors: ["#2563eb", "#16a34a", "#8b5cf6", "#9ca3af"]
  },

  osUseRatioChart: {
    type: "bar",
    labels: {
      zh: ["少于 25%", "25–50%", "50–75%", "超过 75%"],
      en: ["Less than 25%", "25–50%", "50–75%", "Over 75%"]
    },
    data: [18.8, 34.4, 21.9, 25.0],
    color: "#2563eb"
  },

  osWayChart: {
    type: "bar",
    labels: {
      zh: ["偶尔提交 Issue", "代码/文档 PR", "从未参与", "维护或主导项目"],
      en: ["Occasionally Submit Issues", "Code / Documentation PRs", "Never Participated", "Maintain or Lead Projects"]
    },
    data: [45.7, 26.7, 23.8, 2.9],
    color: "#16a34a"
  },

  osMotiveChart: {
    type: "bar",
    labels: {
      zh: ["学习与技能提升", "兴趣/乐趣", "建立声誉", "工作需求", "贡献社会"],
      en: ["Learning & Skill Development", "Interest / Fun", "Build Reputation", "Work Requirements", "Contribute to Society"]
    },
    data: [92.5, 56.2, 46.2, 40.0, 12.5],
    color: "#2563eb"
  },

  osBlockerChart: {
    type: "bar",
    labels: {
      zh: ["缺乏时间", "不知道从何入手", "不够自信/门槛高", "没找到合适项目", "公司政策限制", "其他"],
      en: ["Lack of Time", "Don't Know Where to Start", "Not Confident Enough / High Barrier", "Haven't Found Suitable Projects", "Company Policy Restrictions", "Other"]
    },
    data: [65.0, 48.8, 42.5, 40.0, 10.0, 1.2],
    color: "#ef4444"
  },

  osLicenseChart: {
    type: "pie",
    labels: {
      zh: ["基本了解", "能选择合适许可证", "不清楚"],
      en: ["Basic Understanding", "Can Choose Appropriate License", "Not Clear"]
    },
    data: [71.9, 18.8, 9.4],
    colors: ["#2563eb", "#16a34a", "#ef4444"]
  },

  projectOpenChart: {
    type: "doughnut",
    labels: {
      zh: ["否", "是"],
      en: ["No", "Yes"]
    },
    data: [60.2, 39.8],
    colors: ["#ef4444", "#16a34a"]
  },

  osFutureChart: {
    type: "bar",
    labels: {
      zh: ["越来越重要", "成为主流基础设施", "保持现状", "会逐渐式微"],
      en: ["Becoming More Important", "Become Mainstream Infrastructure", "Stay the Same", "Will Gradually Decline"]
    },
    data: [42.5, 27.5, 23.8, 6.2],
    color: "#2563eb"
  },

  // 7. 社区参与
  communityChart: {
    type: "pie",
    labels: {
      zh: ["偶尔参与", "积极参与", "基本不参与"],
      en: ["Occasional Participation", "Active Participation", "Rarely Participate"]
    },
    data: [53.7, 25.9, 20.4],
    colors: ["#2563eb", "#16a34a", "#9ca3af"]
  },

  eventsChart: {
    type: "pie",
    labels: {
      zh: ["会", "不会", "组织过"],
      en: ["Yes", "No", "Have Organized"]
    },
    data: [66.7, 21.3, 11.1],
    colors: ["#16a34a", "#ef4444", "#2563eb"]
  },

  eventTypeChart: {
    type: "bar",
    labels: {
      zh: ["黑客松/大赛", "技术分享会", "Meetup", "项目路演", "Workshop"],
      en: ["Hackathon / Competition", "Tech Talk / Sharing Session", "Meetup", "Project Roadshow", "Workshop"]
    },
    data: [45.2, 35.7, 8.3, 6.0, 4.8],
    color: "#2563eb"
  },

  communityNeedChart: {
    type: "bar",
    labels: {
      zh: ["就业/合作机会", "项目孵化和资助", "黑客松奖励机制", "技术教育资源", "专属工具/环境", "其他"],
      en: ["Job / Collaboration Opportunities", "Project Incubation and Funding", "Hackathon Reward Mechanism", "Technical Education Resources", "Dedicated Tools / Environment", "Other"]
    },
    data: [37.2, 22.1, 18.6, 16.3, 4.7, 1.2],
    color: "#16a34a"
  },

  envSatisChart: {
    type: "pie",
    labels: {
      zh: ["一般", "满意", "不满意", "十分满意"],
      en: ["Neutral", "Satisfied", "Dissatisfied", "Very Satisfied"]
    },
    data: [48.3, 33.7, 16.9, 1.1],
    colors: ["#f59e0b", "#16a34a", "#ef4444", "#8b5cf6"]
  },

  backWeb2Chart: {
    type: "doughnut",
    labels: {
      zh: ["不考虑", "正在考虑"],
      en: ["Not Considering", "Considering"]
    },
    data: [77.4, 22.6],
    colors: ["#2563eb", "#ef4444"]
  }
};
