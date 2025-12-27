// English content configuration
const contentEn = {
  title: "2025 Chinese-Speaking Web3 Developer & Open Source Survey Report",
  subtitle: `This report is based on a survey conducted in Chinese-speaking tech communities in early 2025, with <strong>220 valid responses</strong>. The sample comes primarily from Web2/Web3 developer communities, hackathons, and related events. To help understand the data, we referenced GitHub Octoverse, Stack Overflow, JetBrains, and other developer reports on key metrics for comparative analysis.`,
  note: "Note: All specific percentages are shown in the charts, while the text focuses on trends and insights, making it easy to use images for data and text for viewpoints in your articles.",

  sections: [
    {
      id: "sec1",
      title: "1. Sample Overview: Half Observing, Half Already Onboard",
      charts: [
        {
          id: "statusChart",
          title: "1.1 Distribution by Current Status",
          caption:
            "Figure 1: Distribution of 220 valid samples by current status.",
        },
        {
          id: "ageOverallChart",
          title: "1.2 Overall Age Structure",
          caption: "Figure 2: Overall age distribution of the sample.",
        },
        {
          id: "ageStatusChart",
          title: "1.3 Age × Current Status (Structural Overview)",
          caption:
            'Figure 3: Age group structure under different "current status" categories.',
        },
      ],
      content: [
        {
          type: "paragraph",
          text: "As shown in Figure 1, the sample can be roughly divided into three groups:",
          afterChart: "statusChart",
        },
        {
          type: "list",
          items: [
            "The largest group consists of people still in Web2 or on campus but continuously observing Web3, nearly half.",
            "The second group consists of developers already working full-time or long-term in Web3, also a significant number.",
            "There's also a small but important group: those who have left or are preparing to leave Web3.",
          ],
          afterChart: "statusChart",
        },
        {
          type: "paragraph",
          text: 'This resembles the structure when new technologies enter a "cooling-off period": <strong>most are observing, a few have jumped in, and a very small number have experienced it and left</strong>.',
          afterChart: "statusChart",
        },
        {
          type: "paragraph",
          text: "This implies two things:",
          afterChart: "statusChart",
        },
        {
          type: "list",
          items: [
            'For developers, Web3 has evolved from pure speculative narrative to "a technical/career option that can be seriously evaluated."',
            "For ecosystem builders, the real challenge is winning over that large majority of \"observers who haven't decided yet.\" Their willingness to fill out this survey shows they've passed the awareness threshold and just need credible paths and opportunities.",
          ],
          afterChart: "statusChart",
        },
        {
          type: "paragraph",
          text: "Overall, ages are concentrated in the 20–35 range, highly consistent with global developer profiles. However, compared to general surveys like Stack Overflow:",
          afterChart: "ageStatusChart",
        },
        {
          type: "list",
          items: [
            "The proportion of students and recent graduates is slightly higher, indicating that the new generation of developers considers Web3 as a career choice earlier.",
            "The proportion of senior engineers over 35 is also not low—among them, some are trying it out while others have already exited, making more calm judgments about trends.",
          ],
          afterChart: "ageStatusChart",
        },
        {
          type: "blockquote",
          text: 'Insight 1: For developers, Web3 is no longer a question of "belief" but "whether it\'s worth betting your career capital on."',
          afterChart: "ageStatusChart",
        },
      ],
    },
    {
      id: "sec2",
      title:
        "2. Education & English: The Barrier Isn't Degrees, But Mastering the English-Language Ecosystem",
      charts: [
        {
          id: "eduSchoolGroup",
          title: "2.1 Highest Education & Institution Types",
          caption:
            "Figures 4–5: Distribution of highest education and institution types.",
          charts: ["eduChart", "schoolChart"],
        },
        {
          id: "englishChart",
          title: "2.2 English Proficiency (Categorized Overview)",
          caption:
            "Figure 6: English proficiency levels consolidated from multiple questionnaire options.",
        },
      ],
      content: [
        {
          type: "paragraph",
          text: "From the education and institution distribution, we can see:",
          afterChart: "eduSchoolGroup",
        },
        {
          type: "list",
          items: [
            "Bachelor's and Master's degrees together account for nearly 90%, comparable to the global developer education structure.",
            'Nearly half come from regular undergraduate institutions, showing that Web3 isn\'t confined to an elite circle of "top domestic + overseas prestigious schools."',
            "The proportion of world-class universities is slightly higher, partly because: students from top schools find it easier to participate in hackathons and research projects, and are more willing to experiment in new fields.",
          ],
          afterChart: "eduSchoolGroup",
        },
        {
          type: "paragraph",
          text: "For project teams, a practical suggestion: <strong>if you only focus on a tiny number of prestigious schools, you'll miss more than half of potential excellent contributors</strong>.",
          afterChart: "eduSchoolGroup",
        },
        {
          type: "paragraph",
          text: "Can be roughly divided into three tiers:",
          afterChart: "englishChart",
        },
        {
          type: "list",
          items: [
            "<strong>Highly dependent on translation tools</strong>: Can use the English ecosystem but always half a step behind in accessing information and participating in discussions.",
            "<strong>Can independently read documentation and source code</strong>: The current main builders in Web3, can understand discussions but may not dare to write long articles or host meetings.",
            "<strong>Can collaborate fluently, even near-native</strong>: Not high in proportion, but determines who can enter protocol teams, core clients, and international communities.",
          ],
          afterChart: "englishChart",
        },
        {
          type: "blockquote",
          text: 'Insight 2: In the highly international ecosystem of Web3, English is no longer a "bonus" on resumes, but the foundation that determines whether you can access global first-hand information and opportunities.',
          afterChart: "englishChart",
        },
      ],
    },
    {
      id: "sec3",
      title:
        "3. Web3 Income Structure & Salary Perceptions: Diverse Income Brings Possibility, Also Uncertainty",
      charts: [
        {
          id: "salaryIncomeGroup",
          title: "3.1 Fixed Annual Salary vs Variable Income",
          caption:
            "Figures 7–8: Distribution of fixed annual salary and variable income.",
          charts: ["salaryFixedChart", "salaryVarChart"],
        },
        {
          id: "incomeSatisGroup",
          title: "3.2 Income Source Composition & Salary Satisfaction",
          caption:
            "Figures 9–10: Income source composition and subjective feelings toward Web3 salaries.",
          charts: ["incomeSourceChart", "salarySatisChart"],
        },
      ],
      content: [
        {
          type: "paragraph",
          text: "This section only covers respondents already working full-time or long-term part-time in Web3.",
        },
        {
          type: "paragraph",
          text: 'In terms of fixed salary, most Web3 engineers earn slightly above local mid-to-senior Web2 engineers; in terms of variable income, most have some extra earnings, but only a few have reached "mythical" levels.',
          afterChart: "salaryIncomeGroup",
        },
        {
          type: "paragraph",
          text: "Compared to traditional internet:",
          afterChart: "salaryIncomeGroup",
        },
        {
          type: "list",
          items: [
            'Web2 developers\' income is mainly locked in "fixed salary + year-end bonus."',
            'Web3 developers are more like holding a "stable base salary + small high-volatility options" combo ticket.',
          ],
          afterChart: "salaryIncomeGroup",
        },
        {
          type: "paragraph",
          text: "Most people's mainstay is still fixed salary, but nearly half have trading income, and about one-fifth earn supplementary income through freelancing, Airdrops, Grants, etc.",
          afterChart: "incomeSatisGroup",
        },
        {
          type: "paragraph",
          text: 'In terms of salary satisfaction, the distribution closely matches general surveys like JetBrains and Stack Overflow: most find it "acceptable," a small minority are very satisfied, and some are explicitly dissatisfied.',
          afterChart: "incomeSatisGroup",
        },
        {
          type: "blockquote",
          text: "Insight 3: Web3's high-yield stories happen mostly to a very small minority, while the corresponding cost is that the entire group must bear higher volatility and uncertainty. For most people, it's more like an \"above-average but not as mythical as the legends\" job.",
          afterChart: "incomeSatisGroup",
        },
      ],
    },
    {
      id: "sec4",
      title:
        "4. Tech Stack & Public Chain Preferences: Not Separated from Web2, Just Opening New Territory Beside the Main Battlefield",
      charts: [
        {
          id: "techStackChart",
          title: "4.1 Primary Tech Stack",
          caption: "Figure 11: Primary Web2 tech stack of surveyed developers.",
        },
        {
          id: "web3StackChart",
          title: "Web3 Ecosystem Tech Stack Distribution (Overall Sample)",
          caption:
            "Figure 11.1: Web3 ecosystem tech stack distribution used by surveyed developers (multiple choice).",
        },
        {
          id: "chainsObserveGroup",
          title: "4.2 Public Chain Preferences (Overall & Observers)",
          caption:
            "Figures 12–13: Public chain attention among overall sample and Web2 observers.",
          charts: ["chainsOverallChart", "chainsWeb2ObserveChart"],
        },
        {
          id: "chainsStudentObserveChart",
          title: "4.3 Public Chain Interest Among Student Observers",
          caption:
            "Figure 14: Public chain attention among student samples observing Web3.",
        },
      ],
      content: [
        {
          type: "paragraph",
          text: "(Note: Figure 11 focuses on Web2 general tech stack at the language/framework level. For more Web3-specific ecosystem stacks like EVM/Move/Solana/ZK, we provide a separate summary and analysis in section 4.1.1 below.)",
          afterChart: "techStackChart",
        },
        {
          type: "paragraph",
          text: "Tech stack distribution closely matches global trends:",
          afterChart: "techStackChart",
        },
        {
          type: "list",
          items: [
            "Frontend + Full-stack JS is the absolute mainstay, providing the foundation for DApps, wallets, and consoles.",
            "Python, Java, and Go form the backend camp, supporting transactions, data, and infrastructure.",
            "Rust and a small amount of C/C++ are concentrated in high-performance and underlying protocol development.",
          ],
          afterChart: "techStackChart",
        },
        {
          type: "paragraph",
          text: 'From this perspective, Web3 is more like adding a layer of "consensus mechanism + security + economic mechanism" on top of familiar technical foundations.',
          afterChart: "techStackChart",
        },
        {
          type: "paragraph",
          text: 'In the survey design, we didn\'t list specific languages or libraries like "Solidity / web3.js / ethers.js" as separate options. Instead, we used the more realistic "ecosystem stack" dimension to categorize Web3 tech stacks, such as:',
          afterChart: "web3StackChart",
        },
        {
          type: "list",
          items: [
            "EVM ecosystem stack (Ethereum, Polygon, BNB Chain, Base, etc.)",
            "Move ecosystem stack (Aptos, Sui)",
            "Solana / Rust ecosystem stack",
            "ZK tech stack (zkSync, Starknet, Scroll, Linea, etc.)",
            "Various Layer2 / Rollup expansion stacks (Arbitrum, Optimism, Base, etc.)",
            "Cosmos ecosystem stack, and Bitcoin / Lightning / Ordinals related ecosystems",
            "Decentralized storage (IPFS, Filecoin, Arweave) and cross-chain / interoperability stacks (LayerZero, Axelar, Wormhole, etc.)",
          ],
          afterChart: "web3StackChart",
        },
        {
          type: "paragraph",
          text: 'A few respondents directly filled in keywords like "Solidity" in open-ended questions, and we uniformly categorized them into the corresponding EVM ecosystem stack. Therefore, what you see in the charts is "EVM / Move / Solana / ZK ecosystem stacks," not separate "Solidity" options—this doesn\'t mean people don\'t use Solidity, but reflects our statistical categorization choice.',
          afterChart: "web3StackChart",
        },
        {
          type: "paragraph",
          text: "Combining the samples, we can see a relatively clear Web3 technical path:",
          afterChart: "web3StackChart",
        },
        {
          type: "list",
          items: [
            '<strong>The EVM ecosystem is almost the default starting point.</strong>Most respondents with on-chain development experience use the EVM ecosystem stack. In open responses, "Solidity" was mentioned multiple times; the real-world learning path is often:<em>First solidify React / Node / backend fundamentals → Then learn Solidity + Hardhat/Foundry → Gradually explore DeFi / NFT / MEV and other protocol layers.</em>',
            "<strong>Move, Solana, ZK and other new stacks are advanced, not starting points.</strong>Move ecosystem stacks (Aptos, Sui), Solana / Rust ecosystem stacks, and ZK tech stacks all have visible but relatively small proportions in the sample, typically appearing after some EVM / Solidity experience, or driven by specialized needs in gaming, social, L2, privacy, etc.",
            '<strong>Observer stage: Tech stack is almost entirely Web2.</strong>Among those still in Web2 or on campus, not yet truly working in Web3, tech stacks are almost uniformly HTML/CSS/JavaScript + React/Vue + Node.js + Python/Java/Go. Only a small minority who have already "jumped in" are writing production code in Solidity, Move, or Solana Rust.',
            '<strong>Solidity\'s role: From "explicit label" to "default capability."</strong>Many developers already in Web3 chose "EVM ecosystem stack" in the survey rather than writing "Solidity" separately. In their perception, Solidity is more like a basic skill for EVM development, no longer needing to be a separate identity label; what really differentiates developers is often understanding of protocol design, security auditing, cross-chain and infrastructure, not just knowing syntax.',
          ],
          afterChart: "web3StackChart",
        },
        {
          type: "paragraph",
          text: 'In other words: For observers, the barrier isn\'t "knowing Solidity," but whether they can take that step beyond familiar Web2 stacks to write the first project that truly runs on-chain; for those already in the game, EVM + Solidity remains the main battlefield with the highest opportunity density, while Move, Solana, ZK and other new stacks are more like "second languages" on top of that foundation.',
          afterChart: "web3StackChart",
        },
        {
          type: "paragraph",
          text: 'The Ethereum-centric pattern in the Chinese-speaking sample is highly consistent with global data: it\'s almost the "default option" for all developers entering Web3. Solana and Bitcoin form a clear second tier, with BNB, Sui, various L2s and new chains following closely.',
          afterChart: "chainsObserveGroup",
        },
        {
          type: "paragraph",
          text: "Compared to working Web2 developers, students show higher interest in BNB, Sui and other new chains, with more dispersed ecosystems and greater willingness to follow new narratives.",
          afterChart: "chainsStudentObserveChart",
        },
        {
          type: "blockquote",
          text: 'Insight 4: From technology to ecosystem, Web3 isn\'t a parallel universe, but shares most engineering foundations with Web2, only redesigned at the "consensus + incentives" layer.',
          afterChart: "chainsStudentObserveChart",
        },
      ],
    },
    {
      id: "sec5",
      title:
        "5. Motivations, Entry Paths & Challenges: From Idealized Narratives to Engineers' Pragmatic Calculus",
      charts: [
        {
          id: "motiveWeb3Chart",
          title: "5.1 Primary Motivations for Entering/Wanting to Enter Web3",
          caption: "Figure 15: Primary reasons respondents chose Web3.",
        },
        {
          id: "learnEntryGroup",
          title: "5.2 Paths to Learn/Enter Web3",
          caption:
            "Figures 16–17: Channels to learn about Web3 and most effective entry methods.",
          charts: ["learnWeb3Chart", "entryHelpChart"],
        },
        {
          id: "challengesExitGroup",
          title: "5.3 Transition Challenges & Exit Reasons",
          caption:
            "Figures 18–19: Main challenges transitioning from Web2 to Web3 and reasons structure among those who exited.",
          charts: ["challengeTransitionChart", "exitReasonChart"],
        },
      ],
      content: [
        {
          type: "paragraph",
          text: 'Unlike years ago when "belief and getting rich" dominated the narrative, what ranks first now is:',
          afterChart: "motiveWeb3Chart",
        },
        {
          type: "list",
          items: ["<strong>Remote work and flexible lifestyle</strong>;"],
          afterChart: "motiveWeb3Chart",
        },
        {
          type: "list",
          items: [
            'Only then comes "heard salaries are higher";',
            '"Belief in decentralization" accounts for only a small minority.',
          ],
          afterChart: "motiveWeb3Chart",
        },
        {
          type: "paragraph",
          text: "This shows most engineers already treat Web3 as a pragmatic work style choice, not an ideological vote.",
          afterChart: "motiveWeb3Chart",
        },
        {
          type: "paragraph",
          text: 'Unlike traditional technologies that rely more on "courses + official documentation," the main players here are:',
          afterChart: "entryHelpChart",
        },
        {
          type: "list",
          items: [
            "Hackathons, Hackerhouses, and other offline/online community events;",
            "Trading behavior—many people first contact Web3 through secondary markets, then reverse-enter the technical world.",
          ],
          afterChart: "entryHelpChart",
        },
        {
          type: "paragraph",
          text: 'When asked "what helps most for truly getting started with Web3 development?", most people chose:',
          afterChart: "entryHelpChart",
        },
        {
          type: "list",
          items: [
            "Participating in open source projects;",
            "Participating in community contributions;",
            "Doing real projects (freelancing, hackathons, internships, etc.).",
          ],
          afterChart: "entryHelpChart",
        },
        {
          type: "paragraph",
          text: "Challenges mainly fall into four categories:",
          afterChart: "exitReasonChart",
        },
        {
          type: "list",
          items: [
            "Unfamiliar with blockchain tech stack, lacking systematic learning paths.",
            "Don't know where to find Web3 jobs, lacking security about career prospects.",
            "Concerns about compliance/legal issues.",
            "Barriers in English and understanding concepts.",
          ],
          afterChart: "exitReasonChart",
        },
        {
          type: "paragraph",
          text: 'Though the exit sample is small, the structure is very typical: switching to AI, job instability, and legal risks rank at the top; "not as profitable as imagined" is just one item, not the whole story.',
          afterChart: "exitReasonChart",
        },
        {
          type: "blockquote",
          text: "Insight 5: From motivation to exit, engineers' calculus becomes clearer—whether it's worth betting limited career capital on Web3 depends on: learning costs, opportunity density, compliance risks, and comparison with other tracks (especially AI).",
          afterChart: "exitReasonChart",
        },
      ],
    },
    {
      id: "sec6",
      title:
        "6. Open Source Participation: Highly Dependent, But Participation Depth Has Huge Room to Grow",
      charts: [
        {
          id: "osKnowUseGroup",
          title: "6.1 Open Source Awareness & Usage Ratio",
          caption:
            "Figures 20–21: Level of open source awareness and daily usage ratio.",
          charts: ["osKnowChart", "osUseRatioChart"],
        },
        {
          id: "osParticipationGroup",
          title: "6.2 Participation Methods, Motivations & Barriers",
          caption:
            "Figures 22–24: Methods, motivations, and main barriers to participating in open source.",
          charts: ["osWayChart", "osMotiveChart", "osBlockerChart"],
        },
        {
          id: "osProjectFutureGroup",
          title: "6.3 Project Openness Level & Future Outlook",
          caption:
            "Figures 25–27: Understanding of open source licenses, project openness level, and judgment on open source's role in the next five years.",
          charts: ["osLicenseChart", "projectOpenChart", "osFutureChart"],
        },
      ],
      content: [
        {
          type: "paragraph",
          text: "Like any global developer report:",
          afterChart: "osKnowUseGroup",
        },
        {
          type: "list",
          items: [
            "Almost everyone relies on open source to varying degrees.",
            "In most projects, more than half of the code is built on open source components.",
          ],
          afterChart: "osKnowUseGroup",
        },
        {
          type: "paragraph",
          text: "In terms of participation, opening Issues is most common, those submitting PRs decrease significantly, and core contributors maintaining projects long-term are even fewer.",
          afterChart: "osBlockerChart",
        },
        {
          type: "paragraph",
          text: 'Motivations are dominated by "learning and skill improvement," followed by interest, reputation, and work needs; what truly hinders people are: lack of time, not knowing how to start, insufficient confidence, and can\'t find suitable projects.',
          afterChart: "osBlockerChart",
        },
        {
          type: "paragraph",
          text: "The reality is:",
          afterChart: "osProjectFutureGroup",
        },
        {
          type: "list",
          items: [
            'Most people know open source is important, but only "roughly know" about licenses.',
            'Projects they participate in aren\'t necessarily fully open source; some are in "semi-open semi-closed" state.',
            "When asked about open source's role in the next five years, the vast majority still believe it will become more important or even mainstream infrastructure.",
          ],
          afterChart: "osProjectFutureGroup",
        },
        {
          type: "blockquote",
          text: 'Insight 6: Current Web3 is more like "standing on the shoulders of open source giants, but not yet mature in how to walk in open source ways." To truly inherit the open source spirit, more work is needed in understanding licenses, project openness strategies, and governance structures.',
          afterChart: "osProjectFutureGroup",
        },
      ],
    },
    {
      id: "sec7",
      title:
        "7. Community & Work Environment: Hackathons, Opportunities, and Security",
      charts: [
        {
          id: "communityEventsGroup",
          title: "7.1 Community Participation & Technical Events",
          caption:
            "Figures 28–30: Whether participating in community and technical events, and preferred event types.",
          charts: ["communityChart", "eventsChart", "eventTypeChart"],
        },
        {
          id: "communityNeedChart",
          title: "7.2 Expectations for Community Support",
          caption: "Figure 31: Additional support hoped from the community.",
        },
        {
          id: "envBackWeb2Group",
          title:
            "7.3 Feelings About Web3 Work Environment & Whether to Return to Web2",
          caption:
            "Figures 32–33: Environment satisfaction among working Web3 professionals and whether considering returning to Web2.",
          charts: ["envSatisChart", "backWeb2Chart"],
        },
      ],
      content: [
        {
          type: "paragraph",
          text: "Most developers participate in communities at least occasionally, and a considerable portion actively participate in hackathons and tech sharing sessions. For many, this is both a learning environment and an entry point for meeting peers, finding jobs, and discovering collaboration opportunities.",
          afterChart: "eventTypeChart",
        },
        {
          type: "paragraph",
          text: 'Among numerous options, "employment/collaboration opportunities" and "project incubation/funding" lead by far, followed by courses and tools. Unlike many general tech communities focusing on "knowledge and tools," Web3 communities are expected to provide<strong>more direct opportunities and resource connections</strong>.',
          afterChart: "communityNeedChart",
        },
        {
          type: "paragraph",
          text: 'In terms of environment satisfaction, most people fall into "average" and "satisfied" categories; on whether to return to Web2, most Web3 practitioners don\'t consider it in the short term, but about a quarter are in a wavering state.',
          afterChart: "backWeb2Chart",
        },
        {
          type: "blockquote",
          text: 'Insight 7: The core contradiction of the Web3 work environment isn\'t absolute income, but "opportunity density × uncertainty." Whoever can build more robust and sustainable career paths locally will be better able to retain developers.',
          afterChart: "backWeb2Chart",
        },
      ],
    },
  ],

  conclusion: {
    title:
      "Conclusion: What Does Web3 Mean for Chinese-Speaking Developers in 2025?",
    content: [
      {
        type: "paragraph",
        text: "Combining this survey with public reports from GitHub, Stack Overflow, JetBrains, etc., we can roughly offer three judgments:",
      },
      {
        type: "list",
        items: [
          '<strong>In developer profiles, Web3 developers overlap heavily with "ordinary engineers."</strong>Age, education, and tech stack are very close—it\'s not a mysterious subcultural circle.',
          '<strong>In career paths, Web3 differs significantly from traditional internet.</strong>Diverse income, remote work, and high volatility make it closer to an "engineer freelancer/maker" model.',
          "<strong>In risks and competition, Web3 faces not just regulation, but also stronger talent magnets like AI.</strong>Whoever can provide better answers in real applications and developer experience is more likely to win engineer time in the next phase.",
          '<strong>In open source and community, Web3 inherits the broad framework of the global open source movement, but hasn\'t fully realized the ideal of "everything open source."</strong>',
        ],
      },
      {
        type: "paragraph",
        text: "Perhaps we can summarize Web3 in the eyes of Chinese-speaking developers in 2025 this way:",
      },
      {
        type: "blockquote",
        text: "It's not a destined utopia, nor a bubble that has already burst, but a testing ground for engineers and capital still in experimentation. For those willing to learn long-term, embrace uncertainty, and grow in open source, there's still a future worth betting on here.",
      },
    ],
  },

  contributors: {
    title: "Contributors",
    content: [
      {
        type: "paragraph",
        text: "This report was completed through collaboration within the Chinese-speaking Web3 open source community. Key contributors include:",
      },
      {
        type: "list",
        items: [
          "<strong>Survey Design & Execution</strong>: Jointly initiated by multiple Chinese-speaking Web3 developer communities, including developer groups, hackathon organizers, and tech media.",
          "<strong>Data Collection & Cleaning</strong>: The technical team collected data via online surveys in early 2025, spanning 4 weeks, receiving 240+ responses, and finally screening 220 valid samples.",
          "<strong>Data Analysis & Visualization</strong>: Data analysts used open source tools for data processing, with Chart.js implementing chart visualization.",
          "<strong>Report Writing & Editing</strong>: The technical writing team drafted the report based on data insights, ensuring objectivity and readability.",
          "<strong>Open Source Community Contributions</strong>: This report adopts an open collaboration model; community members can submit issues and improvement suggestions via GitHub.",
        ],
      },
      {
        type: "paragraph",
        text: "Special thanks to all developers who participated in the survey—your genuine feedback made this report possible.",
      },
    ],
  },

  howToContribute: {
    title: "How to Contribute",
    content: [
      {
        type: "paragraph",
        text: "We welcome contributions in all forms! Whether you're a developer, designer, data analyst, or writing enthusiast, you can help improve this report.",
      },
      {
        type: "list",
        items: [
          "<strong>Submit Issues and Suggestions</strong>: If you find errors, omissions, or have suggestions for improvement in the report, please submit an Issue on GitHub.",
          "<strong>Contribute Code</strong>: We accept Pull Requests to fix bugs, add new features, or improve documentation. Please check open Issues first to find areas where you can help.",
          "<strong>Improve Translations</strong>: If you find inaccurate translations or better ways to express something in Chinese or English, your improvements are welcome.",
          "<strong>Share and Spread</strong>: Help share this report to your communities, social media, or technical circles to reach more developers.",
          "<strong>Provide Data Insights</strong>: If you have data analysis experience, you can provide deeper data insights or visualization suggestions.",
          "<strong>Join Discussions</strong>: Participate in discussions about report content, methodology, or future directions in GitHub Discussions.",
        ],
      },
      { type: "paragraph", text: "Contribution Guidelines:" },
      {
        type: "list",
        items: [
          "Be friendly and respectful: Community members should treat each other with respect and discuss issues constructively.",
          "Provide context: When submitting Issues or PRs, please describe the problem or improvement in detail.",
          "Follow existing style: Code and text should maintain consistency with existing style.",
          "Small steps: Prioritize small, independent improvements; large improvements can be discussed first before implementation.",
        ],
      },
      {
        type: "blockquote",
        text: "Every contribution, no matter how small, makes this report better. Thank you for participating!",
      },
    ],
  },

  acknowledgments: {
    title: "Acknowledgments",
    content: [
      {
        type: "paragraph",
        text: "The completion of this report would not have been possible without support from the following organizations and individuals:",
      },
      {
        type: "list",
        items: [
          "<strong>Community Partners</strong>: Thanks to major Chinese-speaking Web3 developer communities, hackathon organizers, and tech Meetup organizers for assistance with promotion.",
          "<strong>Technical Support</strong>: Thanks to GitHub, Stack Overflow, JetBrains, and other platforms for providing public developer report data, which provided important references for our comparative analysis.",
          "<strong>Open Source Projects</strong>: The main tech stack used in this report includes Chart.js (charts), ChartDataLabels (data labels plugin), and other open source projects. Thanks to the maintainers of these projects.",
          "<strong>All Participants</strong>: Thanks to the 220 developers who took the time to fill out the survey—each of your responses contributed value to this report.",
        ],
      },
      {
        type: "paragraph",
        text: "This report is open source under CC-BY-4.0 license. Reproduction, sharing, and derivative works are welcome, please retain attribution.",
      },
      {
        type: "blockquote",
        text: "Open source is not a one-person show, but an ensemble performance. Thank you to every developer who has contributed to the Chinese-speaking Web3 ecosystem.",
      },
    ],
  },
};
