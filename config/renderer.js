// 内容渲染引擎
class ReportRenderer {
  constructor() {
    this.currentLang = 'zh';
    this.content = { zh: contentZh, en: contentEn };
    this.charts = {};
  }

  // 初始化
  init() {
    this.renderHeader();
    this.renderSections();
    this.renderConclusion();
    this.renderHowToContribute();
    this.renderAcknowledgments();
    this.initCharts();
    this.initSidebar();
  }

  // 渲染头部
  renderHeader() {
    const data = this.content[this.currentLang];
    const h1El = document.querySelector('header h1');
    const pEl = document.querySelector('header p');
    const bqEl = document.querySelector('header blockquote');

    if (h1El) h1El.innerHTML = data.title;
    if (pEl) pEl.innerHTML = data.subtitle;
    if (bqEl) bqEl.textContent = data.note;
  }

  // 渲染章节
  renderSections() {
    const sections = this.content[this.currentLang].sections;

    sections.forEach(section => {
      const sectionEl = document.getElementById(section.id);
      if (!sectionEl) return;

      // 如果是介绍性章节(没有图表)
      if (section.isIntro) {
        const titleEl = sectionEl.querySelector('.section-header h2');
        if (titleEl) titleEl.textContent = section.title;
        this.renderSectionContent(sectionEl, section.content);
        return;
      }

      // 更新标题
      const titleEl = sectionEl.querySelector('.section-header h2');
      if (titleEl) titleEl.textContent = section.title;

      // 更新图表标题和说明（如果章节有图表）
      if (section.charts && Array.isArray(section.charts)) {
        section.charts.forEach(chart => {
        // 如果是图表组（包含 charts 数组）
        if (chart.charts && Array.isArray(chart.charts)) {
          // 如果 description 为 true，表示使用共享标题
          if (chart.description === true) {
            // 查找 subsection-title 元素
            const subsectionTitle = sectionEl.querySelector('.subsection-title');
            if (subsectionTitle) {
              subsectionTitle.textContent = chart.title;
            }
          } else {
            // 使用组中第一个图表的 chart-box
            const firstCanvas = sectionEl.querySelector(`#${chart.charts[0]}`);
            if (firstCanvas) {
              const chartBox = firstCanvas.closest('.chart-box');
              if (chartBox) {
                const titleEl = chartBox.querySelector('h3');
                const captionEl = chartBox.querySelector('.caption');
                if (titleEl) titleEl.textContent = chart.title;
                if (captionEl) captionEl.textContent = chart.caption;

                // 如果有 description，在标题后插入描述文字
                if (chart.description) {
                  // 检查是否已有描述元素，如果有则更新，没有则创建
                  let descEl = chartBox.querySelector('.chart-description');
                  if (!descEl) {
                    descEl = document.createElement('div');
                    descEl.className = 'chart-description';
                    // 在标题后插入
                    titleEl.parentNode.insertBefore(descEl, titleEl.nextSibling);
                  }
                  descEl.innerHTML = chart.description;
                }
              }
            }
          }

          // 处理组内每个子图表的name和caption配置
          chart.charts.forEach(subChartId => {
            const subCanvas = sectionEl.querySelector(`#${subChartId}`);
            if (subCanvas) {
              const chartBox = subCanvas.closest('.chart-box');
              if (chartBox) {
                // 查找该子图表的配置
                const section = this.content[this.currentLang].sections.find(s => s.id === sectionEl.id);
                if (section) {
                  const subChartConfig = section.charts.find(c => c.id === subChartId);
                  if (subChartConfig) {
                    const nameEl = chartBox.querySelector('.chart-name');
                    const captionEl = chartBox.querySelector('.caption');
                    if (nameEl && subChartConfig.name) nameEl.textContent = subChartConfig.name;
                    if (captionEl && subChartConfig.caption) captionEl.textContent = subChartConfig.caption;
                  }
                }
              }
            }
          });
        } else {
          // 单个图表
          const canvas = sectionEl.querySelector(`#${chart.id}`);
          if (canvas) {
            const chartBox = canvas.closest('.chart-box');
            if (chartBox) {
              const titleEl = chartBox.querySelector('h3');
              const nameEl = chartBox.querySelector('.chart-name');
              const captionEl = chartBox.querySelector('.caption');
              if (titleEl) titleEl.textContent = chart.title;
              if (nameEl && chart.name) nameEl.textContent = chart.name;
              if (captionEl) captionEl.textContent = chart.caption;
            }
          }
        }
      });
      }

      // 更新内容段落
      this.renderSectionContent(sectionEl, section.content);
    });
  }

  // 渲染章节内容
  renderSectionContent(sectionEl, content) {
    if (!content || content.length === 0) return;

    // 清除之前动态生成的内容
    const existingContent = sectionEl.querySelectorAll('.dynamic-content');
    existingContent.forEach(el => el.remove());

    // 按照图表位置分组内容
    const contentGroups = {};
    const endContent = [];

    content.forEach(item => {
      if (item.afterChart) {
        if (!contentGroups[item.afterChart]) {
          contentGroups[item.afterChart] = [];
        }
        contentGroups[item.afterChart].push(item);
      } else {
        endContent.push(item);
      }
    });

    // 为每个图表后的内容创建元素
    Object.entries(contentGroups).forEach(([chartId, items]) => {
      // 查找 canvas 元素
      let canvas = sectionEl.querySelector(`#${chartId}`);

      // 如果找不到，可能是图表组ID，需要查找对应的图表配置
      if (!canvas) {
        const section = this.content[this.currentLang].sections.find(s => s.id === sectionEl.id);
        if (section) {
          const chartConfig = section.charts.find(c => c.id === chartId || (c.charts && c.charts.includes(chartId)));
          if (chartConfig) {
            // 如果是图表组，使用最后一个图表的 canvas
            const targetChartId = chartConfig.charts ? chartConfig.charts[chartConfig.charts.length - 1] : chartConfig.id;
            canvas = sectionEl.querySelector(`#${targetChartId}`);
          }
        }
      }

      if (canvas) {
        const chartBox = canvas.closest('.chart-box');
        if (chartBox) {
          // 创建 DocumentFragment 收集所有元素
          const fragment = document.createDocumentFragment();
          const elements = items.map(item => this.createElementFromContent(item)).filter(el => el !== null);

          // 将所有元素添加到 fragment（保持顺序）
          elements.forEach(element => {
            fragment.appendChild(element);
          });

          // 检查 chart-box 是否在 charts-row 中
          const chartsRow = chartBox.closest('.charts-row');
          if (chartsRow) {
            // 如果在 charts-row 中，插入到 charts-row 之后
            if (chartsRow.nextSibling) {
              chartsRow.parentNode.insertBefore(fragment, chartsRow.nextSibling);
            } else {
              chartsRow.parentNode.appendChild(fragment);
            }
          } else {
            // 如果不在 charts-row 中，插入到 chart-box 之后
            if (chartBox.nextSibling) {
              chartBox.parentNode.insertBefore(fragment, chartBox.nextSibling);
            } else {
              chartBox.parentNode.appendChild(fragment);
            }
          }
        }
      }
    });

    // 将没有指定位置的内容插入到章节开头（section-header 之后，第一个图表之前）
    const sectionHeader = sectionEl.querySelector('.section-header');
    let insertPoint = sectionHeader?.nextElementSibling;

    if (endContent.length > 0) {
      // 创建 DocumentFragment 收集所有内容
      const fragment = document.createDocumentFragment();
      const elements = endContent.map(item => this.createElementFromContent(item)).filter(el => el !== null);

      elements.forEach(element => {
        fragment.appendChild(element);
      });

      // 一次性插入到 section-header 之后
      if (insertPoint) {
        sectionEl.insertBefore(fragment, insertPoint);
      } else {
        sectionEl.appendChild(fragment);
      }
    }
  }

  // 从内容项创建DOM元素
  createElementFromContent(item) {
    if (item.type === 'paragraph') {
      const p = document.createElement('p');
      p.innerHTML = item.text;
      p.classList.add('dynamic-content');
      return p;
    } else if (item.type === 'list') {
      const ul = document.createElement('ul');
      ul.classList.add('dynamic-content');
      item.items.forEach(text => {
        const li = document.createElement('li');
        li.innerHTML = text;
        ul.appendChild(li);
      });
      return ul;
    } else if (item.type === 'blockquote') {
      const blockquote = document.createElement('blockquote');
      blockquote.innerHTML = item.text;
      blockquote.classList.add('dynamic-content');
      return blockquote;
    } else if (item.type === 'heading') {
      const heading = document.createElement(`h${item.level || 3}`);
      heading.textContent = item.text;
      heading.classList.add('dynamic-content');
      return heading;
    }
    return null;
  }

  // 渲染结语
  renderConclusion() {
    const conclusion = this.content[this.currentLang].conclusion;
    const conclusionEl = document.querySelector('#conclusion');

    if (!conclusionEl || !conclusion) return;

    const titleEl = conclusionEl.querySelector('.section-header h2');
    if (titleEl) titleEl.textContent = conclusion.title;

    this.renderSectionContent(conclusionEl, conclusion.content);
  }

  // 渲染如何贡献
  renderHowToContribute() {
    const howToContribute = this.content[this.currentLang].howToContribute;
    const howToContributeEl = document.querySelector('#how-to-contribute');

    if (!howToContributeEl || !howToContribute) return;

    const titleEl = howToContributeEl.querySelector('.section-header h2');
    if (titleEl) titleEl.textContent = howToContribute.title;

    this.renderSectionContent(howToContributeEl, howToContribute.content);
  }

  // 渲染致谢
  renderAcknowledgments() {
    const acknowledgments = this.content[this.currentLang].acknowledgments;
    const acknowledgmentsEl = document.querySelector('#acknowledgments');

    if (!acknowledgmentsEl || !acknowledgments) return;

    const titleEl = acknowledgmentsEl.querySelector('.section-header h2');
    if (titleEl) titleEl.textContent = acknowledgments.title;

    this.renderSectionContent(acknowledgmentsEl, acknowledgments.content);
  }

  // 初始化图表
  initCharts() {
    // 初始化所有图表
    Object.entries(chartDataConfig).forEach(([chartId, config]) => {
      const canvas = document.getElementById(chartId);
      if (!canvas) return;

      // 处理多数据集图表（如 ageStatusChart, contribActivityChart）
      let datasets;
      if (config.datasets) {
        // 如果 datasets 已经是完整的配置（包含 type、borderColor 等），直接使用
        if (config.datasets[0].type || config.datasets[0].yAxisID) {
          datasets = config.datasets;
        } else {
          // 否则只提取基本配置
          datasets = config.datasets.map(ds => ({
            label: ds.label,
            data: ds.data,
            backgroundColor: ds.color
          }));
        }
      } else {
        datasets = [{
          data: config.data,
          backgroundColor: config.colors || config.color,
          ...(config.type === 'bar' ? { label: '选择比例 %' } : {})
        }];
      }

      const chartConfig = {
        type: config.type,
        data: {
          labels: config.labels.zh, // 默认中文
          datasets: datasets
        },
        options: this.getChartOptions(chartId, config)
      };

      // 为 coreRepoContribChart 添加自定义 tooltip
      if (chartId === 'coreRepoContribChart' && config.percentages) {
        chartConfig.options.plugins.tooltip = {
          callbacks: {
            label: function(context) {
              const devCount = context.raw;
              const percentage = config.percentages[context.dataIndex];
              return [`开发者数: ${devCount}`, `占比: ${percentage}%`];
            }
          }
        };
      }

      this.charts[chartId] = new Chart(canvas, chartConfig);
    });
  }

  // 获取图表配置
  getChartOptions(chartId, config) {
    const isPie = config.type === 'pie' || config.type === 'doughnut';
    const isStackedBar = config.type === 'bar' && config.datasets && !config.datasets[0].yAxisID;

    // contribActivityChart：柱状图 + 折线图，双 Y 轴
    if (chartId === 'contribActivityChart') {
      return {
        plugins: {
          legend: { position: 'top' },
          datalabels: {
            display: function(context) {
              // 只为折线图显示数据标签
              return context.dataset.type === 'line';
            },
            formatter: function(value, context) {
              return value + '%';
            },
            color: '#ef4444',
            font: {
              weight: 'bold',
              size: 11
            },
            align: 'top',
            anchor: 'end'
          }
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            beginAtZero: true,
            title: {
              display: true,
              text: '活跃开发者数'
            }
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            beginAtZero: false,
            title: {
              display: true,
              text: '同比增长率 (%)'
            },
            grid: {
              drawOnChartArea: false
            }
          }
        }
      };
    }

    // coreRepoContribChart：水平柱状图
    if (chartId === 'coreRepoContribChart') {
      return {
        plugins: {
          legend: { display: false },
          datalabels: { display: false }
        },
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true,
            max: 50
          }
        }
      };
    }

    // chainsOverallChart 和 chainsWeb2ObserveChart：水平柱状图（标签太多）
    if (chartId === 'chainsOverallChart' || chartId === 'chainsWeb2ObserveChart' || chartId === 'chainsStudentObserveChart') {
      return {
        plugins: {
          legend: { display: false },
          datalabels: { display: false }
        },
        indexAxis: 'y',
        layout: {
          padding: {
            left: 10,
            right: 20,
            top: 5,
            bottom: 5
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            max: 80,
            grid: {
              color: function(context) {
                return context.chart.options.scales.y.ticks.font.size <= 11 ? 'rgba(0,0,0,0.05)' : 'rgba(255,255,255,0.05)';
              }
            }
          },
          y: {
            ticks: {
              // 强制显示所有标签，不自动跳过
              autoSkip: false,
              maxRotation: 0,
              minRotation: 0,
              font: {
                size: 12,
                family: '-apple-system, BlinkMacSystemFont, "PingFang SC", "Helvetica Neue", Arial, sans-serif'
              },
              padding: 8
            },
            grid: {
              display: false,
              drawBorder: false
            }
          }
        },
        // 增加条形之间的间距
        elements: {
          bar: {
            borderWidth: 0
          }
        },
        // 设置maintainAspectRatio为false，让图表自然适应容器大小
        maintainAspectRatio: false
      };
    }

    if (isPie) {
      return {
        plugins: {
          legend: {
            position: 'right',
            labels: {
              boxWidth: 15,
              padding: 12,
              font: { size: 11 },
              generateLabels: (chart) => {
                const data = chart.data;
                return data.labels.map((label, i) => ({
                  text: `${label} ${data.datasets[0].data[i]}%`,
                  fillStyle: data.datasets[0].backgroundColor[i],
                  hidden: false,
                  index: i
                }));
              }
            }
          },
          datalabels: { display: false }
        }
      };
    } else if (isStackedBar) {
      // 堆叠柱状图（如 ageStatusChart）
      return {
        plugins: {
          legend: { position: 'right' },
          datalabels: { display: false }
        },
        scales: {
          x: { stacked: true },
          y: { stacked: true, beginAtZero: true, max: 100 }
        }
      };
    } else {
      return {
        plugins: {
          legend: { display: false },
          datalabels: { display: false }
        },
        ...(config.indexAxis === 'y' || config.labels.zh[0].length > 20 ? { indexAxis: 'y' } : {}),
        scales: config.indexAxis === 'y' || config.labels.zh[0].length > 20
          ? { x: { beginAtZero: true, max: 80 } }
          : { y: { beginAtZero: true, max: 60 } }
      };
    }
  }

  // 切换语言
  switchLanguage(lang) {
    this.currentLang = lang;

    // 更新文本内容
    this.renderHeader();
    this.renderSections();
    this.renderConclusion();
    this.renderHowToContribute();
    this.renderAcknowledgments();
    this.updateSidebarLanguage();

    // 更新图表标签
    Object.entries(this.charts).forEach(([chartId, chart]) => {
      const config = chartDataConfig[chartId];
      chart.data.labels = config.labels[lang];
      chart.update();
    });
  }

  // 初始化侧边栏
  initSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');

    // 移动端菜单切换
    mobileMenuBtn?.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      overlay.classList.toggle('active');
    });

    overlay?.addEventListener('click', () => {
      sidebar.classList.remove('open');
      overlay.classList.remove('active');
    });

    // 导航链接点击后关闭侧边栏（移动端）
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          sidebar.classList.remove('open');
          overlay.classList.remove('active');
        }
      });
    });

    // 高亮当前章节
    this.highlightActiveSection();

    // 初始化侧边栏语言
    this.updateSidebarLanguage();
  }

  // 更新侧边栏语言
  updateSidebarLanguage() {
    const navTranslations = {
      zh: {
        'nav-report-title': '报告内容',
        'nav-about-title': '关于',
        'sec0': '调研设计与样本说明',
        'tldr': 'TL;DR',
        'sec1': '一、样本概况：一半观望，一半已经「上车」',
        'sec2': '二、教育与英语：门槛不在学历，而在能否玩转英文一手生态',
        'sec3': '三、地理分布与全球化生存：Web3 开发者的真实空间结构',
        'sec4': '四、Web3 收入结构与薪资感受：多元收入带来想象力，也带来不确定性',
        'sec5': '五、技术栈与公链偏好：没有脱离 Web2，只是在主战场旁边开了块新地',
        'sec6': '六、动机、入门路径与挑战：从理想化叙事回归到工程师的算账逻辑',
        'sec7': '七、开源参与：高度依赖，参与深度仍有巨大上升空间',
        'sec8': '八、社区与从业环境：黑客松、机会和安全感',
        'conclusion': '结语',
        'how-to-contribute': '如何贡献',
        'acknowledgments': '致谢',
        'language': 'English'
      },
      en: {
        'nav-report-title': 'Report Contents',
        'nav-about-title': 'About',
        'sec0': 'Survey Design & Sample',
        'tldr': 'TL;DR',
        'sec1': '1. Sample Overview: Half Observing, Half Already On Board',
        'sec2': '2. Education & English Proficiency: Barrier Not in Degree, But in English-First Ecosystem',
        'sec3': '3. Geographic Distribution & Global Survival: The Real Spatial Structure of Web3 Developers',
        'sec4': '4. Web3 Income Structure & Salary Satisfaction: Diverse Income Brings Possibilities and Uncertainties',
        'sec5': '5. Tech Stack & Chain Preferences: Not Leaving Web2, Just Opening New Territory Beside Main Battlefield',
        'sec6': '6. Motivations, Entry Paths & Challenges: From Idealized Narratives to Engineers\' Pragmatic Calculus',
        'sec7': '7. Open Source Participation: High Dependence, Massive Room for Deeper Engagement',
        'sec8': '8. Community & Work Environment: Hackathons, Opportunities, and Security',
        'conclusion': 'Conclusion',
        'how-to-contribute': 'How to Contribute',
        'acknowledgments': 'Acknowledgments',
        'language': '中文'
      }
    };

    const translations = navTranslations[this.currentLang];

    // 更新标题
    const reportTitle = document.getElementById('nav-report-title');
    const aboutTitle = document.getElementById('nav-about-title');
    if (reportTitle) reportTitle.textContent = translations['nav-report-title'];
    if (aboutTitle) aboutTitle.textContent = translations['nav-about-title'];

    // 更新导航链接文本
    document.querySelectorAll('.nav-links a[data-i18n]').forEach(link => {
      const key = link.getAttribute('data-i18n');
      if (translations[key]) {
        link.textContent = translations[key];
      }
    });

    // 更新语言按钮文本
    const langBtnText = document.querySelector('#langToggle .btn-text');
    if (langBtnText) {
      langBtnText.textContent = translations['language'];
    }

    // 更新主题按钮文本和图标（根据当前主题状态）
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const themeIcon = document.querySelector('#themeToggle .btn-icon');
    const themeText = document.querySelector('#themeToggle .btn-text');

    if (themeIcon) {
      themeIcon.textContent = isDark ? '☀️' : '🌙';
    }

    if (themeText) {
      themeText.textContent = isDark
        ? (this.currentLang === 'zh' ? '亮色模式' : 'Dark Mode')
        : (this.currentLang === 'zh' ? '暗色模式' : 'Light Mode');
    }
  }

  // 高亮当前章节
  highlightActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    // 使用滚动事件监听而不是 IntersectionObserver
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // 偏移量，考虑到header的高度

      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
          link.classList.add('active');
        }
      });
    };

    // 监听滚动事件
    window.addEventListener('scroll', handleScroll);
    // 初始化时执行一次
    handleScroll();
  }

  // 切换主题
  switchTheme(isDark) {
    const textColor = isDark ? '#f5f5f5' : '#222222';
    const gridColor = isDark ? '#404040' : '#e5e5e5';

    Chart.defaults.color = textColor;
    Chart.defaults.borderColor = gridColor;

    Object.values(this.charts).forEach(chart => {
      chart.update();
    });
  }
}

// 全局渲染器实例
const reportRenderer = new ReportRenderer();
