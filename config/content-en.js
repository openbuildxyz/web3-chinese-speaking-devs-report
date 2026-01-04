// English content configuration
const contentEn = {
  title: "2025 Web3 Chinese-Speaking Developer Survey Report",
  subtitle: ``,
  note: "",

  sections: [
    {
      id: "sec0",
      title: "Survey Design & Sample Description",
      isIntro: true,
      content: [
        {
          type: "heading",
          level: 3,
          text: "1.1 Survey Objectives",
        },
        {
          type: "paragraph",
          text: "The \"2025 Web3 Chinese-Speaking Developer Survey Report\" (hereinafter referred to as the Report) is based on a questionnaire survey conducted in Chinese-speaking tech communities in late 2025, jointly initiated by <strong><a href=\"https://openbuild.xyz/\" target=\"_blank\">OpenBuild</a></strong>, <strong><a href=\"https://www.gccofficial.org/\" target=\"_blank\">GCC</a></strong>, <strong><a href=\"https://learnblockchain.cn/\" target=\"_blank\">登链</a></strong>, <strong>Creators</strong>, and <strong>OpenCAS</strong>, with data analysis services provided by <strong><a href=\"https://web3insight.ai/\" target=\"_blank\">Web3insight</a></strong>. This survey collected a total of 220 valid samples.",
        },
        {
          type: "paragraph",
          text: "The samples primarily come from Web2/Web3 developer communities, hackathons, and related events. To help understand the data, we referenced GitHub Octoverse, Stack Overflow, JetBrains, and other developer reports on key metrics for horizontal comparison to obtain a more comprehensive perspective.",
        },
        {
          type: "paragraph",
          text: "This report attempts to answer three core questions:",
        },
        {
          type: "list",
          items: [
            "Who constitutes the current and potential Chinese-speaking Web3 developer community?",
            "What commonalities and differentiations do they exhibit in terms of transition paths, tech stacks, income and career development, and open source participation?",
            "How do these characteristics compare with conclusions from global developer surveys like GitHub, JetBrains, and Stack Overflow regarding Web2/open source ecosystems, and what do they mean for projects, communities, and policymakers?",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "1.2 Sample Overview and Structure",
        },
        {
          type: "paragraph",
          text: "A total of 220 valid questionnaires were collected. In terms of overall distribution:",
        },
        {
          type: "list",
          items: [
            "The largest group consists of people still in Web2 or on campus but continuously observing Web3, nearly half;",
            "The second group consists of developers already working full-time or long-term in Web3, also a significant number;",
            "There's also a small but important group: those who have left or are preparing to leave Web3.",
          ],
        },
        {
          type: "paragraph",
          text: "This closely resembles the typical structure when new technologies enter a \"cooling-off period\": most are observing, a few have jumped in, and a very small number have experienced it and left.",
        },
        {
          type: "paragraph",
          text: "This implies two things:",
        },
        {
          type: "list",
          items: [
            "For developers, Web3 has evolved from pure speculative narrative to \"a technical/career option that can be seriously evaluated\";",
            "For ecosystem builders, the real challenge is winning over that large majority of \"observers who haven't decided yet.\" Their willingness to fill out this survey shows they've passed the awareness threshold and just need credible paths and opportunities.",
          ],
        },
        {
          type: "heading",
          level: 3,
          text: "1.4 Survey Design Features and Limitations",
        },
        {
          type: "paragraph",
          text: "This questionnaire has several design features:",
        },
        {
          type: "list",
          items: [
            "Rather than simply segmenting by \"languages/frameworks used,\" it branches questions based on career paths and current status;",
            "Targeted modules were designed for different stages (already in Web3, observing, students, exited), covering income, job seeking, learning methods, open source participation, community involvement, and views on the future;",
            "A relatively complete chain was designed for open source: awareness → participation methods → quantity → motivations → barriers → license understanding → usage ratio → judgments on the future;",
          ],
        },
        {
          type: "paragraph",
          text: "In addition, single-choice, multiple-choice, and open-text questions were combined, collecting a large amount of qualitative feedback that can be used to construct \"developer quotes\" and typical persona profiles.",
        },
        {
          type: "paragraph",
          text: "Main limitations include:",
        },
        {
          type: "list",
          items: [
            "The sample size is limited and not strictly random, primarily from Web3 communities, WeChat groups, TG groups, recruitment channels, hackathons, etc., with self-selection bias;",
            "The questionnaire logic is complex, some questions are only displayed for specific subsets, and the valid sample sizes for different branched questions are inconsistent;",
            "Currency and income ranges are primarily in USD, subjective satisfaction is greatly affected by market conditions, the survey time is concentrated in late 2025, and optimistic or pessimistic sentiments in responses may be influenced by market trend expectations.",
          ],
        },
        {
          type: "paragraph",
          text: 'This report is open-sourced on <strong><a href="https://github.com/openbuildxyz/web3-chinese-speaking-devs-report" target="_blank">GitHub</a></strong>. If you have any suggestions or feedback, please refer to the "How to Contribute" section at the end for collaboration.',
        },
        {
          type: "blockquote",
          text: "Note: All specific percentages are shown in the charts, while the text focuses on trends and insights.",
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
          text: "<strong>Sample Structure</strong>: Among 220 valid responses, nearly half are still in Web2 or on campus but actively observing Web3; the other half are already fully committed to Web3 long-term, with a small minority having exited or planning to exit. For most, Web3 has shifted from a question of 'belief' to 'whether it's worth betting one's career on.'",
        },
        {
          type: "paragraph",
          text: "<strong>Profile & Barriers</strong>: Age is mainly concentrated between 20–35, with bachelor's + master's degrees accounting for nearly 90%, very similar to the global developer profile. The real barrier isn't education, but mastery of <strong>English-first ecosystems</strong>: basic English gets you in, but fluent English collaboration determines your ceiling.",
        },
        {
          type: "paragraph",
          text: "<strong>Geographic Distribution & Career Paths</strong>:",
        },
        {
          type: "list",
          items: [
            "Many developers are in Tier-2/new Tier-1 cities in mainland China, writing code for global projects in USD or stablecoins, doing 'geographic arbitrage';",
            "Those reaching management, protocol core, or startup roles are more concentrated in hub cities like Singapore, Hong Kong, Dubai;",
            "Some digital nomads roam Southeast Asia, Japan, etc., with high freedom but higher compliance and long-term security risks.",
            "Web3's globalization hasn't eliminated the significance of 'location,' but transformed it from 'office city' to 'career strategy.'",
          ],
        },
        {
          type: "paragraph",
          text: "<strong>Income & Risk</strong>:",
        },
        {
          type: "list",
          items: [
            "Fixed annual salaries are generally similar to or slightly above local mid-senior Web2 engineers, but most lack benefits like social security;",
            "Trading, freelancing, Airdrops, Grants, and other variable income bring imagination, but 'mythical gains' happen only to a very few;",
            "The industry shifts some volatility and compliance risks that should be borne by companies onto individuals.",
            "For most, Web3 is more like a 'above-average but more volatile' job, not a continuous wealth-printing machine.",
          ],
        },
        {
          type: "paragraph",
          text: "<strong>Tech Stack & Chain Preferences</strong>:",
        },
        {
          type: "list",
          items: [
            "The foundation remains typical Web2 stack: frontend + full-stack JS dominates, Python/Java/Go handle backend, Rust/C++ do infrastructure and high-performance work;",
            "EVM + Solidity is the absolute main battlefield and default starting point; Solidity is more like a 'default skill' than an explicit label;",
            "Move, Solana, ZK, etc. are advanced 'second languages' that bring technical premiums but aren't entry barriers;",
            "In chain attention, the Ethereum-centric pattern aligns with global data; Solana/Bitcoin form a clear second tier, followed by BNB, Sui, and others.",
          ],
        },
        {
          type: "paragraph",
          text: "<strong>Motivations, Entry & Exit</strong>:",
        },
        {
          type: "list",
          items: [
            "The primary reason for choosing Web3 has shifted from 'belief/getting rich' to <strong>remote work and flexible lifestyle</strong>, with higher salary ranking second, and 'decentralization belief' in the minority;",
            "Truly effective entry paths: read docs and source code → participate in open source and hackathons → build trust in communities → get first opportunity;",
            "Transition challenges: lack of systematic learning paths, opaque job opportunities, compliance/legal concerns, English and conceptual barriers;",
            "Those exiting are more disappointed with current industry form and job stability rather than rejecting blockchain or open source itself; future return is possible.",
          ],
        },
        {
          type: "paragraph",
          text: "<strong>Open Source Participation Status</strong>:",
        },
        {
          type: "list",
          items: [
            "Almost everyone heavily relies on open source components, but very few are long-term core maintainers;",
            "More people file Issues than write PRs; main motivation is learning and skill improvement, biggest obstacles are time, unclear paths, insufficient confidence, and not finding suitable projects;",
            "Compared to global developer surveys, this sample has higher proportions who have submitted Issues or PRs, but Chinese-speaking developers' active participation in Web3 core repositories remains low, with overall activity declining significantly in 2025;",
            "Web3 is experimenting with Grant, Bounty, Token, and reputation incentives to reshape open source, but mechanisms are still experimental.",
          ],
        },
        {
          type: "paragraph",
          text: "<strong>Community & Work Environment</strong>:",
        },
        {
          type: "list",
          items: [
            "Most developers at least occasionally participate in community activities, many actively join hackathons and tech sharing;",
            "Compared to courses and tools, communities are expected to provide <strong>job/collaboration opportunities</strong> and <strong>project incubation/funding</strong>;",
            "Web3 practitioners' overall satisfaction with the environment is between 'neutral and satisfied,' most don't plan to return to Web2 soon, but about a quarter are swinging.",
            "The industry's core contradiction isn't absolute income, but 'opportunity density × uncertainty.'",
          ],
        },
        {
          type: "paragraph",
          text: "<strong>Overall Assessment</strong>:",
        },
        {
          type: "list",
          items: [
            "In profile, Web3 developers heavily overlap with ordinary engineers;",
            "In career paths, closer to 'engineer freelancer/maker' model;",
            "In risks, must face not just regulation but also competition from AI as a 'super talent harvester';",
            "In open source and community, Web3 stands on open source giants' shoulders, but itself is far from mature in license understanding, project openness, and governance structures.",
          ],
        },
        {
          type: "blockquote",
          text: "<strong>One-sentence summary</strong>: In 2025, for Chinese-speaking developers, Web3 is neither a utopia nor the end of a bubble, but an ongoing experiment of an engineer's playground and capital testing ground. It still offers opportunities, but only rewards those willing to learn long-term, embrace uncertainty, and continuously build reputation and trust in open source and communities.",
        },
      ],
    },
    {
      id: "sec1",
      title: "1. Sample Overview: Half Observing, Half Already Onboard",
      charts: [
        {
          id: "statusChart",

          name: "Current Status",
          title: "1.1 Distribution by Current Status",
          caption:
            "Figure 1: Distribution of 220 valid samples by current status.",
        },
        {
          id: "ageOverallChart",

          name: "Overall Age",
          title: "1.2 Overall Age Structure",
          caption: "Figure 2: Overall age distribution of the sample.",
        },
        {
          id: "ageStatusChart",

          name: "Age by Status",
          title: "1.3 Age × Current Status (Structural Overview)",
          caption:
            'Figure 3: Age group structure under different "current status" categories.',
        },
      ],
      content: [
        {
          type: "paragraph",
          text: "To better understand the different positions and mindsets of developers in Web3, we further aggregated the \"current status\" from the questionnaire into <strong>five developer personas</strong>:",
        },
        {
          type: "list",
          items: [
            "<strong>Transitioned from Web2 to Web3</strong>;",
            "<strong>Student stage already/entering Web3 directly</strong>;",
            "<strong>Working in Web2, observing Web3</strong>;",
            "<strong>Current student, observing Web3</strong>;",
            "<strong>Already left or preparing to leave Web3</strong>.",
          ],
        },
        {
          type: "paragraph",
          text: "This grouping is not intended to apply labels, but to more authentically reflect: who has already jumped in, who is hesitating, and who has experienced it and chosen to leave. The subsequent analysis of tech stacks, income, open source participation, and community behavior is based on this grouping.",
        },
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
          text: "Overall, ages are concentrated in the 20–35 range, highly consistent with global developer profiles.",
          afterChart: "ageStatusChart",
        },
        {
          type: "paragraph",
          text: "Compared to general surveys like Stack Overflow:",
          afterChart: "ageStatusChart",
        },
        {
          type: "list",
          items: [
            "The proportion of students and recent graduates is slightly higher, indicating that the new generation of developers considers Web3 as a career choice earlier;",
            "The sample also includes a certain proportion of senior engineers over 35—among them, some are trying it out while others have already exited, often making more calm judgments about trends.",
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
          title: "2.1 Highest Education and Institution Types",
          charts: ["eduChart", "schoolChart"],
          description: true,
        },
        {
          id: "eduChart",
          name: "Education",
          caption:
            "Figure 4: Distribution of highest education of surveyed Web3 developers.",
        },
        {
          id: "schoolChart",
          name: "Institution",
          caption:
            "Figure 5: Distribution of institution types of surveyed Web3 developers.",
        },
        {
          id: "englishChart",

          name: "English Proficiency",
          title: "2.2 English Proficiency (Categorized Overview)",
          caption:
            "Figure 6: English proficiency levels consolidated from multiple questionnaire options of surveyed Web3 developers.",
        },
      ],
      content: [
        {
          type: "paragraph",
          text: "From the education and institution distribution, we can see:",
          afterChart: "schoolChart",
        },
        {
          type: "list",
          items: [
            "Bachelor's and Master's degrees together account for nearly 90%, comparable to the global developer education structure.",
            'Nearly half come from regular undergraduate institutions, showing that Web3 isn\'t confined to an elite circle of "top domestic + overseas prestigious schools."',
            "The proportion of world-class universities is slightly higher, partly because: students from top schools find it easier to participate in hackathons and research projects, and are more willing to experiment in new fields.",
          ],
          afterChart: "schoolChart",
        },
        {
          type: "paragraph",
          text: "For project teams, a practical suggestion: <strong>if you only focus on a tiny number of prestigious schools, you'll miss more than half of potential excellent contributors</strong>.",
          afterChart: "schoolChart",
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
          type: "paragraph",
          text: "In a highly international technical ecosystem like Web3, English is no longer just a \"bonus\" on resumes, but the infrastructure that determines whether you can access first-hand information and core opportunities.",
          afterChart: "englishChart",
        },
        {
          type: "paragraph",
          text: "The sample feedback shows that English proficiency does not significantly affect \"whether one can enter the industry,\" but it significantly affects how far one can go: whether one can participate in protocol-level discussions, maintain core open source projects, join international teams, or consistently receive grants and fellowships.",
          afterChart: "englishChart",
        },
        {
          type: "paragraph",
          text: "In other words, English is not a short-term barrier, but a long-term watershed in Web3 career development.",
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
      title: "3. Geographic Distribution & Global Survival: The Real Spatial Structure of Web3 Developers",
      charts: [
        {
          id: "workModelChart",

          name: "Work Model",
          title: "3.1 Web3 Developer Work Models",
          caption: "Figure 10: Distribution of work models of surveyed Web3 developers.",
        },
        {
          id: "geoDistGroup",
          title: "3.2 Developer Regional and City Level Distribution",
          caption: "Figures 11–12: Distribution of surveyed Web3 developers by region and city tier.",
          charts: ["geoRegionChart", "geoCityLevelChart"],
        },

        {
          id: "geoRegionChart",
          name: "Regional Distribution",
        },

        {
          id: "geoCityLevelChart",
          name: "City Tier Distribution",
        },
],
      content: [
        {
          type: "paragraph",
          text: "Before discussing Web3's income, technology, and career paths, there's an unavoidable but often overlooked question:",
          afterChart: "workModelChart",
        },
        {
          type: "paragraph",
          text: "Where do Chinese-speaking Web3 developers actually live, who do they work for, and why are they distributed this way?",
          afterChart: "workModelChart",
        },
        {
          type: "paragraph",
          text: "Unlike traditional internet companies that are highly concentrated in first-tier cities, Web3 developers show a clear spatial dispersion characteristic. This is not accidental, but the result of remote collaboration, stablecoin salaries, and regulatory differences working together.",
          afterChart: "workModelChart",
        },
        {
          type: "heading",
          level: 3,
          text: "3.1 Geo-Arbitrage: Based in China, Coding for the World",
          afterChart: "workModelChart",
        },
        {
          type: "paragraph",
          text: "In this survey sample, a very prominent phenomenon is:",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "A significant proportion of Web3 developers live in second-tier and new first-tier cities in mainland China, yet serve overseas projects for the long term.",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "Common cities for these developers include Chengdu, Hangzhou, Changsha, Dali, and others, where living costs are relatively controllable, but income is denominated in USD or stablecoins. This model is often referred to in the community as <strong>\"Geo-Arbitrage\"</strong>:",
          afterChart: "geoDistGroup",
        },
        {
          type: "list",
          items: [
            "<strong>Cost side</strong>: Using domestic living costs, medical, and family support systems;",
            "<strong>Income side</strong>: Taking overseas Web3 projects and earning USD or stablecoin salaries;",
            "<strong>Result</strong>: Actual purchasing power is often higher than equivalent Web2 positions in first-tier cities.",
          ],
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "For many developers, this is an attractive and relatively \"rational\" choice.",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "It doesn't require immigration or entering core financial centers, yet can significantly improve cash flow in the short term.",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "But what needs to be seen is:",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "Geo-arbitrage solves \"current income,\" not \"long-term ceiling.\"",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "In this model, developers often:",
          afterChart: "geoDistGroup",
        },
        {
          type: "list",
          items: [
            "Work remotely long-term, lacking offline networks;",
            "Are more likely to stay in execution or mid-level engineering roles;",
            "Have limited influence on project decisions, direction, and governance.",
          ],
          afterChart: "geoDistGroup",
        },
        {
          type: "heading",
          level: 3,
          text: "3.2 Global Hub Cities: Singapore / Hong Kong / Dubai",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "In contrast to the \"geo-arbitrageurs\" are another group of developers and managers who choose to actively enter global Web3 hub cities.",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "In the Chinese-speaking Web3 ecosystem, Singapore, Hong Kong, and Dubai are frequently mentioned, and the reasons are not mysterious:",
          afterChart: "geoDistGroup",
        },
        {
          type: "list",
          items: [
            "Regulation is relatively clearer, more friendly to crypto assets and Web3 projects;",
            "High density of capital, projects, and talent;",
            "Frequent offline activities, conferences, and informal social interactions.",
          ],
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "The survey and interviews clearly show a trend:",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "The closer to management, core protocols, or startup roles, the more developers tend to cluster in these cities.",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "The reason is that high-level Web3 positions—such as CTOs, partners, core maintainers—",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "Highly depend on offline trust and long-term relationship building.",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "Remote collaboration can complete code, but it's hard to fully replace:",
          afterChart: "geoDistGroup",
        },
        {
          type: "list",
          items: [
            "Trust in architectural decisions;",
            "Early-stage negotiations and consensus in projects;",
            "Informal interactions between investors, partners, and core contributors.",
          ],
          afterChart: "geoDistGroup",
        },
        {
          type: "heading",
          level: 3,
          text: "3.3 Digital Nomads: Freedom, Legality, and Tax Boundaries",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "There's also a group of developers who choose a seemingly freer but fuzzier path—digital nomads.",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "They often travel to:",
          afterChart: "geoDistGroup",
        },
        {
          type: "list",
          items: [
            "Southeast Asia (Chiang Mai, Bangkok, Bali);",
            "Some Japanese cities;",
            "Occasional short-term moves between different countries.",
          ],
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "These developers typically pursue:",
          afterChart: "geoDistGroup",
        },
        {
          type: "list",
          items: [
            "Lower living costs;",
            "Higher quality of life;",
            "Maximum freedom over location and time.",
          ],
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "But the survey also frequently reveals concerns:",
          afterChart: "geoDistGroup",
        },
        {
          type: "list",
          items: [
            "Visa legality is ambiguous;",
            "Tax resident status is unclear;",
            "Lack of medical, social security, and long-term security.",
          ],
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "This means the digital nomad model requires extremely high personal discipline and risk awareness.",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "It's suitable for a minority who can clearly manage legal and financial boundaries, not a \"default safe option.\"",
          afterChart: "geoDistGroup",
        },
        {
          type: "heading",
          level: 3,
          text: "3.4 How Does Geographic Location Affect Career Ceiling?",
          afterChart: "geoDistGroup",
        },
        {
          type: "paragraph",
          text: "Overall, geographic choice is not a lifestyle issue, but part of career strategy:",
          afterChart: "geoDistGroup",
        },
        {
          type: "list",
          items: [
            "<strong>Geo-arbitrageurs</strong>:\nAdvantages: Cash flow, cost-effectiveness\nRisks: Limited ceiling and network",
            "<strong>Hub city entrants</strong>:\nAdvantages: Influence, long-term opportunities\nCosts: Living costs and uncertainty",
            "<strong>Digital nomads</strong>:\nAdvantages: Freedom\nRisks: Compliance and sustainability",
          ],
          afterChart: "geoDistGroup",
        },
        {
          type: "blockquote",
          text: "Insight 3: Web3's globalization hasn't eliminated the significance of \"location,\" but has redefined it.",
          afterChart: "geoDistGroup",
        },
      ],
    },
    {
      id: "sec4",
      title: "4. Web3 Income Structure & Salary Perceptions: Diverse Income Brings Possibility, Also Uncertainty",
      charts: [
        {
          id: "salaryIncomeGroup",
          title: "4.1 Fixed Annual Salary vs Variable Income",
          caption:
            "Figures 13–14: Distribution of fixed annual salary and variable income of surveyed Web3 developers.",
          charts: ["salaryFixedChart", "salaryVarChart"],
        },

        {
          id: "salaryFixedChart",
          name: "Fixed Salary",
        },

        {
          id: "salaryVarChart",
          name: "Variable Income",
        },
{
          id: "incomeSatisGroup",
          title: "4.2 Income Source Composition & Salary Satisfaction",
          caption:
            "Figures 15–16: Income source composition and subjective feelings toward Web3 salaries of surveyed Web3 developers.",
          charts: ["incomeSourceChart", "salarySatisChart"],
        },

        {
          id: "incomeSourceChart",
          name: "Income Sources",
        },

        {
          id: "salarySatisChart",
          name: "Salary Satisfaction",
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
            'Web3 developers are more like holding a "relatively stable base salary + small high-volatility options" combination.',
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
          type: "paragraph",
          text: "Diverse income doesn't mean \"earning more money,\" but rather a change in risk structure.",
          afterChart: "incomeSatisGroup",
        },
        {
          type: "paragraph",
          text: "Compared to Web2, Web3 transfers some uncertainty originally borne by companies to individuals: project cycles, token volatility, compliance and taxation, labor relationships—all need to be absorbed by developers themselves.",
          afterChart: "incomeSatisGroup",
        },
        {
          type: "paragraph",
          text: "This is also why, among those who left, \"job instability\" and \"legal and compliance risks\" are frequently mentioned—the real hesitation isn't just about how much one earns, but whether one can work on technology long-term with peace of mind.",
          afterChart: "incomeSatisGroup",
        },
        {
          type: "blockquote",
          text: "Insight 4: Web3's high-yield stories happen mostly to a very small minority, while the corresponding cost is that the entire group must bear higher volatility and uncertainty. For most people, it's more like an \"above-average but not as mythical as the legends\" job.",
          afterChart: "incomeSatisGroup",
        },
      ],
    },
    {
      id: "sec5",
      title:
        "5. Tech Stack & Public Chain Preferences: Not Separated from Web2, Just Opening New Territory Beside the Main Battlefield",
      charts: [
        {
          id: "techStackChart",

          name: "Web2 Tech Stack",
          title: "5.1 Primary Tech Stack",
          caption: "Figure 17: Primary Web2 tech stack of surveyed Web3 developers.",
        },
        {
          id: "web3StackChart",

          name: "Web3 Ecosystem",
          title: "Web3 Ecosystem Tech Stack Distribution (Overall Sample)",
          caption:
            "Figure 18: Web3 ecosystem tech stack distribution used by surveyed Web3 developers (multiple choice).",
        },
        {
          id: "chainsObserveGroup1",
          title: "5.2 Public Chain Preferences & GitHub Contributions (Part 1)",
          caption:
            "Figures 19–20: Public chain attention among overall sample and Web2 observers.",
          charts: ["chainsOverallChart", "chainsWeb2ObserveChart"],
        },

        {
          id: "chainsOverallChart",
          name: "Public Chain Attention",
        },

        {
          id: "chainsWeb2ObserveChart",
          name: "Web2 Observers' Chain Interest",
        },

        {
          id: "chainsObserveGroup2",
          title: "5.2 Public Chain Preferences & GitHub Contributions (Part 2)",
          caption:
            "Figures 21–22: Student interest in public chains, and Chinese-speaking developer ecosystem contributions on GitHub (Web3Insight data).",
          charts: ["chainsStudentObserveChart", "githubContribChart"],
        },

        {
          id: "chainsStudentObserveChart",
          name: "Student Observers' Chain Interest",
        },

        {
          id: "githubContribChart",
          name: "GitHub Ecosystem Contributions",
        },
],
      content: [
        {
          type: "paragraph",
          text: "Web2 tech stack distribution closely matches global trends:",
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
          text: 'In the survey design, we didn\'t list specific languages or libraries like "Solidity / web3.js / ethers.js" as separate options. Instead, as shown in Figure 18, we used the more realistic "ecosystem stack" dimension to categorize Web3 tech stacks.',
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
          text: 'In other words: For observers, the barrier isn\'t "knowing Solidity," but whether they can take that step beyond familiar Web2 stacks to write the first project that truly runs on-chain; for those already in the game, EVM + Solidity remains the main battlefield with the highest opportunity density, while Move, Solana, ZK and other new stacks are more like "second languages" on top of that foundation, bringing more technical premiums.',
          afterChart: "web3StackChart",
        },
        {
          type: "paragraph",
          text: 'The Ethereum-centric pattern in the Chinese-speaking sample is highly consistent with global data: it\'s almost the "default option" for all developers entering Web3. Solana and Bitcoin form a clear second tier, with BNB, Sui, various L2s and new chains following closely.',
          afterChart: "githubContribChart",
        },
        {
          type: "paragraph",
          text: "Compared to working Web2 developers, students show higher interest in BNB, Sui and other new chains, with more dispersed ecosystems and greater willingness to follow new narratives.",
          afterChart: "githubContribChart",
        },
        {
          type: "blockquote",
          text: 'Insight 5: From technology to ecosystem, Web3 isn\'t a parallel universe, but shares most engineering foundations with Web2, only redesigned at the "consensus + incentives" layer.',
          afterChart: "githubContribChart",
        },
      ],
    },
    {
      id: "sec6",
      title:
        "6. Motivations, Entry Paths & Challenges: From Idealized Narratives to Engineers' Pragmatic Calculus",
      charts: [
        {
          id: "motiveWeb3Chart",

          name: "Motivations",
          title: "6.1 Primary Motivations for Entering/Wanting to Enter Web3",
          caption: "Figure 23: Primary reasons surveyed Web3 developers chose Web3.",
        },
        {
          id: "learnEntryGroup",
          title: "6.2 Paths to Learn/Enter Web3",
          caption:
            "Figures 24–25: Channels to learn about Web3 and most effective entry methods of surveyed Web3 developers.",
          charts: ["learnWeb3Chart", "entryHelpChart"],
        },
        
        {
          id: "learnWeb3Chart",
          name: "Web3 Learning Channels",
        },

        {
          id: "entryHelpChart",
          name: "Effective Entry Methods",
        },
{
          id: "challengesExitGroup",
          title: "6.3 Transition Challenges & Exit Reasons",
          caption:
            "Figures 26–27: Main challenges transitioning from Web2 to Web3 and reasons structure among those who exited of surveyed Web3 developers.",
          charts: ["challengeTransitionChart", "exitReasonChart"],
        },
      
        {
          id: "challengeTransitionChart",
          name: "Transition Challenges",
        },

        {
          id: "exitReasonChart",
          name: "Exit Reasons",
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
          text: "For many developers, the real entry path isn't finish courses → get an offer, but a more fragmented and community-driven process: Reading documentation and source code → Participating in open source or hackathons → Building trust in the community → Getting the first opportunity.",
          afterChart: "entryHelpChart",
        },
        {
          type: "paragraph",
          text: "This is also why, in Web3, the weight of community, open source, and personal portfolios often exceeds that of a resume.",
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
          type: "paragraph",
          text: "It's worth noting that most who left haven't rejected blockchain technology or the value of open source itself.",
          afterChart: "exitReasonChart",
        },
        {
          type: "paragraph",
          text: "What they left is more about disappointment with the current industry form, project stability, and job security, rather than a rejection of \"decentralization\" or \"open source collaboration.\"",
          afterChart: "exitReasonChart",
        },
        {
          type: "paragraph",
          text: "This means: leaving doesn't equal ending—it's more like a phased exit. Many are still watching and don't rule out returning in the future.",
          afterChart: "exitReasonChart",
        },
        {
          type: "blockquote",
          text: "Insight 6: From motivation to exit, engineers' calculus becomes clearer—whether it's worth betting limited career capital on Web3 depends on: learning costs, opportunity density, compliance risks, and comparison with other tracks (especially AI).",
          afterChart: "exitReasonChart",
        },
      ],
    },
    {
      id: "sec7",
      title:
        "7. Open Source Participation: Highly Dependent, But Participation Depth Has Huge Room to Grow",
      charts: [
        {
          id: "osKnowUseGroup",
          title: "7.1 Open Source Awareness & Usage Ratio",
          caption:
            "Figures 28–29: Level of open source awareness and daily usage ratio of surveyed Web3 developers.",
          charts: ["osKnowChart", "osUseRatioChart"],
        },
        
        {
          id: "osKnowChart",
          name: "Open Source Awareness",
        },

        {
          id: "osUseRatioChart",
          name: "Open Source Usage",
        },
        {
          id: "osParticipationGroup1",
          title: "7.2 Methods, Motivations & Barriers to Open Source Participation (Part 1)",
          caption: "Figures 30–31: Comparison of open source participation of surveyed Web3 and Web2 developers.",
          charts: ["osWayWeb3Chart", "osWayWeb2Chart"],
        },

        {
          id: "osWayWeb3Chart",
          name: "Web3 Open Source Participation",
        },

        {
          id: "osWayWeb2Chart",
          name: "Web2 Open Source Participation",
        },

        {
          id: "osParticipationGroup2",
          title: "7.2 Methods, Motivations & Barriers to Open Source Participation (Part 2)",
          caption: "Figures 32–33: Motivations and main barriers to open source participation of surveyed Web3 developers.",
          charts: ["osMotiveChart", "osBlockerChart"],
        },

        {
          id: "osMotiveChart",
          name: "Participation Motivation",
        },

        {
          id: "osBlockerChart",
          name: "Participation Barriers",
        },
        {
          id: "osProjectFutureGroup",
          title: "7.3 Project Openness Level & Future Outlook",
          caption:
            "Figures 34–35: Understanding of open source licenses, project openness level of surveyed Web3 developers.",
          charts: ["osLicenseChart", "projectOpenChart"],
        },
        
        {
          id: "osLicenseChart",
          name: "License Understanding",
        },

        {
          id: "projectOpenChart",
          name: "Project Openness",
        },

        {
          id: "osFutureChart",
          name: "Open Source Future",
        },
{
          id: "contribActivityChart",

          name: "Contribution Activity",
          title: "7.4 Chinese-Speaking Developer Contribution Activity Over 5 Years",
          caption: "Figure 37: Chinese-speaking developer contribution activity from 2021–2025 (bar: active developers, line: YoY growth rate).",
        },
        {
          id: "coreRepoContribChart",

          name: "Core Repository Contributions",
          title: "7.5 Chinese-Speaking Developer Contribution to Web3 Core Repositories",
          caption: "Figure 38: Number and percentage of Chinese-speaking developers in major Web3 project core repositories.",
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
          type: "paragraph",
          text: "Compared to global developer surveys like GitHub and Stack Overflow, the proportion of this sample who have submitted Issues or PRs is notably higher.",
          afterChart: "osProjectFutureGroup",
        },
        {
          type: "paragraph",
          text: "This indicates that Chinese-speaking Web3 developers aren't just \"using open source,\" but are participating in open source collaboration to a significant degree.",
          afterChart: "osProjectFutureGroup",
        },
        {
          type: "paragraph",
          text: "At the same time, Web3 is exploring an open source path different from traditional volunteer models: through Grants, Bounties, Tokens, and reputation mechanisms to provide real incentives for sustained contributions. This is both an opportunity and an experiment not yet fully mature.",
          afterChart: "osProjectFutureGroup",
        },
        {
          type: "paragraph",
          text: "However, according to data provided by Web3Insight, the participation of Chinese-speaking developers in the Web3 open source ecosystem declined significantly in 2025. Meanwhile, due to language barriers, collaboration habits, and other factors, the contribution activity of Chinese-speaking developers to core repositories in the Web3 ecosystem is relatively low compared to the base of Chinese-speaking open source developers. As a naturally open source industry, Chinese-speaking developers still have a long way to go in open source.",
          afterChart: "coreRepoContribChart",
        },
        {
          type: "blockquote",
          text: 'Insight 7: Current Web3 is more like "standing on the shoulders of open source giants, but not yet mature in how to walk in open source ways." To truly inherit the open source spirit, more work is needed in understanding licenses, project openness strategies, and governance structures.',
          afterChart: "coreRepoContribChart",
        },
      ],
    },
    {
      id: "sec8",
      title:
        "8. Community & Work Environment: Hackathons, Opportunities, and Security",
      charts: [
        {
          id: "communityEventsGroup",
          title: "8.1 Community Participation & Technical Events",
          caption:
            "Figures 39–41: Whether participating in community and technical events, and preferred event types of surveyed Web3 developers.",
          charts: ["communityChart", "eventsChart", "eventTypeChart"],
        },
        
        {
          id: "communityChart",
          name: "Community Participation",
        },

        {
          id: "eventsChart",
          name: "Event Attendance",
        },

        {
          id: "eventTypeChart",
          name: "Event Type Preferences",
        },
{
          id: "communityNeedChart",

          name: "Community Needs",
          title: "8.2 Expectations for Community Support",
          caption: "Figure 42: Additional support hoped from the community of surveyed Web3 developers.",
        },
        {
          id: "envBackWeb2Group",
          title:
            "8.3 Feelings About Web3 Work Environment & Whether to Return to Web2",
          caption:
            "Figures 43–44: Environment satisfaction among working Web3 professionals and whether considering returning to Web2 of surveyed Web3 developers.",
          charts: ["envSatisChart", "backWeb2Chart"],
        },
      
        {
          id: "envSatisChart",
          name: "Environment Satisfaction",
        },

        {
          id: "backWeb2Chart",
          name: "Return to Web2 Interest",
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
          text: "For many Chinese-speaking Web3 developers, the value of community is not primarily reflected in \"how much new knowledge is gained,\" but in the connection of opportunities and trust.",
          afterChart: "communityNeedChart",
        },
        {
          type: "paragraph",
          text: "Communities are key nodes for them to access projects, filter risks, find partners, and get referrals and feedback.",
          afterChart: "communityNeedChart",
        },
        {
          type: "paragraph",
          text: "In a high-uncertainty industry, communities often serve as \"career buffers,\" which is why even those who have left Web3 often choose to stay in the community.",
          afterChart: "communityNeedChart",
        },
        {
          type: "paragraph",
          text: 'In terms of environment satisfaction, most people fall into "average" and "satisfied" categories; on whether to return to Web2, most Web3 practitioners don\'t consider it in the short term, but about a quarter are in a wavering state.',
          afterChart: "backWeb2Chart",
        },
        {
          type: "blockquote",
          text: 'Insight 8: The core contradiction of the Web3 work environment isn\'t absolute income, but "opportunity density × uncertainty." Whoever can build more robust and sustainable career paths locally will be better able to retain developers.',
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
        text: "Looking at the cycle from 2021–2025, an increasingly clear conclusion is:",
      },
      {
        type: "list",
        items: [
          "Web3 still offers opportunities;",
          "But it no longer rewards participants who \"rely only on luck and short-term narratives\";",
          "Those with real upside potential are: people who can build reputation in open source, establish trust in communities, and form irreplaceability in technology.",
        ],
      },
      {
        type: "paragraph",
        text: "Perhaps we can summarize Web3 in the eyes of Chinese-speaking developers in 2025 this way:",
      },
      {
        type: "blockquote",
        text: "It's not a destined utopia, nor a bubble that has already burst, but a testing ground for engineers and capital still in experimentation. For those willing to learn long-term, embrace uncertainty, and grow in open source, there's still a future worth betting on here, and community is the true infrastructure connecting these long-term believers.",
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
          "<strong>Submit Issues and Suggestions</strong>: If you find errors, omissions, or have suggestions for improvement in the report, please submit an Issue on <a href=\"https://github.com/openbuildxyz/web3-chinese-speaking-devs-report\" target=\"_blank\">GitHub</a>.",
          "<strong>Contribute Code</strong>: We accept Pull Requests to fix bugs, add new features, or improve documentation. Please check open Issues first to find areas where you can help.",
          "<strong>Improve Translations</strong>: If you find inaccurate translations or better ways to express something in Chinese or English, your improvements are welcome.",
          "<strong>Share and Spread</strong>: Help share this report to your communities, social media, or technical circles to reach more developers.",
          "<strong>Provide Data Insights</strong>: If you have data analysis experience, you can provide deeper data insights or visualization suggestions.",
          "<strong>Join Discussions</strong>: Participate in discussions about report content, methodology, or future directions in <a href=\"https://github.com/openbuildxyz/web3-chinese-speaking-devs-report\" target=\"_blank\">GitHub Discussions</a>.",
        ],
      },
      { type: "paragraph", text: "Contribution Guidelines:" },
      {
        type: "list",
        items: [
          "Be friendly and respectful: Community members should treat each other with respect and discuss issues constructively.",
          "Provide context: When submitting Issues or PRs, please describe the problem or improvement in detail.",
          "Follow existing style: Code and text should maintain consistency with existing style.",
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
        text: "This report is jointly initiated by <strong><a href=\"https://openbuild.xyz/\" target=\"_blank\">OpenBuild</a></strong>, <strong><a href=\"https://www.gccofficial.org/\" target=\"_blank\">GCC</a></strong>, <strong><a href=\"https://learnblockchain.cn/\" target=\"_blank\">登链</a></strong>, <strong>Creators</strong>, and <strong>OpenCAS</strong>, with data analysis services provided by <strong><a href=\"https://web3insight.ai/\" target=\"_blank\">Web3insight</a></strong>.",
      },
      {
        type: "paragraph",
        text: "The completion of this report would not have been possible without support from the following organizations and individuals:",
      },
      {
        type: "list",
        items: [
          "<strong>Community Partners (in no particular order)</strong>: Thanks to Monad Chinese, Solana Chinese, HOH, Starknet Chinese, Starknet Astro, KeyMapDAO, Alcove, Vana Chinese, Victor Zhang (SmartToken), Maggie (ETHGlobal), Defihack Labs, Henry Lee (KiteAI), 4Seas, BETA UCB, Herstory, and other communities/projects/contributors for their support (Due to the large number of communities, if there are any omissions, please accept our apologies and feel free to contact us for additions!).",
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
