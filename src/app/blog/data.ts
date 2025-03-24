export interface BlogPost {
  id: number;
  slug: string;
  translations: {
    en: {
      title: string;
      excerpt: string;
      content: string;
      category: string;
    };
    zh: {
      title: string;
      excerpt: string;
      content: string;
      category: string;
    };
  };
  date: string;
  readTime: {
    en: string;
    zh: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'zalgo-text-effect-guide',
    translations: {
      zh: {
        title: 'Zalgo文本效果完全指南',
        excerpt: '深入了解Zalgo文本效果的原理和应用，掌握创作诡异文本效果的技巧。',
        content: `
          Zalgo文本效果是一种通过添加Unicode组合字符来创造诡异视觉效果的技术。
          本文将详细介绍Zalgo效果的实现原理、常用字符集和实际应用场景。

          ## 什么是Zalgo文本？

          Zalgo文本最早起源于互联网文化，通过在普通文字上叠加大量Unicode组合字符，
          创造出一种扭曲、破碎的视觉效果。这种效果常用于恐怖主题的创作或特殊的艺术表现。

          ## 技术原理

          Zalgo效果主要使用了Unicode中的组合字符（Combining Characters）。
          这些字符本身不显示为独立字符，而是叠加在基础字符上，形成视觉效果。

          ## 实现方法

          1. 选择基础文本
          2. 添加上部组合字符
          3. 添加中部组合字符
          4. 添加下部组合字符
          5. 控制叠加密度

          ## 应用场景

          - 恐怖主题创作
          - 特殊艺术效果
          - 社交媒体个性化
          - 游戏文本设计

          ## 使用建议

          1. 适度使用，避免过度堆叠导致文本难以辨认
          2. 考虑平台兼容性
          3. 注意文本可读性
          4. 结合具体场景选择合适的强度
        `,
        category: '教程'
      },
      en: {
        title: 'Complete Guide to Zalgo Text Effect',
        excerpt: 'Dive deep into the principles and applications of Zalgo text effects, mastering the techniques for creating eerie text effects.',
        content: `
          Zalgo text effect is a technique that creates an eerie visual effect by adding Unicode combining characters.
          This article will introduce the implementation principles, common character sets, and practical application scenarios of the Zalgo effect.

          ## What is Zalgo Text?

          Zalgo text originated from internet culture, creating a distorted and fragmented visual effect by 
          stacking a large number of Unicode combining characters on ordinary text. This effect is often used in 
          horror-themed creations or special artistic expressions.

          ## Technical Principles

          The Zalgo effect mainly uses combining characters in Unicode. These characters do not display as 
          independent characters, but are superimposed on the base characters to form a visual effect.

          ## Implementation Methods

          1. Choose base text
          2. Add top combining characters
          3. Add middle combining characters
          4. Add bottom combining characters
          5. Control stacking density

          ## Application Scenarios

          - Horror-themed creations
          - Special artistic effects
          - Social media personalization
          - Game text design

          ## Usage Suggestions

          1. Use moderately, avoid excessive stacking making text difficult to recognize
          2. Consider platform compatibility
          3. Pay attention to text readability
          4. Choose appropriate intensity according to specific scenarios
        `,
        category: 'Tutorial'
      }
    },
    date: '2024-03-24',
    readTime: {
      en: '10 minutes',
      zh: '10分钟'
    }
  },
  {
    id: 2,
    slug: 'vaporwave-text-design',
    translations: {
      zh: {
        title: 'Vaporwave文字设计：复古美学的数字表达',
        excerpt: '探索Vaporwave文字效果的设计理念和实现方法，了解这种独特的复古美学风格。',
        content: `
          Vaporwave是一种融合了复古电子和互联网文化的艺术风格，
          其文字设计是这种美学的重要组成部分。

          ## Vaporwave文字的特点

          1. 全角字符的使用
          2. 特殊符号的点缀
          3. 空间感的营造
          4. 复古元素的融入

          ## 设计技巧

          - 字符间距的把控
          - 符号的选择和搭配
          - 视觉层次的构建
          - 整体布局的考虑

          ## 应用领域

          - 音乐封面设计
          - 社交媒体内容
          - 艺术创作
          - 品牌视觉

          ## 实践建议

          1. 理解风格内涵
          2. 把握设计节奏
          3. 注重细节处理
          4. 保持风格统一
        `,
        category: '设计'
      },
      en: {
        title: 'Vaporwave Text Design: Digital Expression of Retro Aesthetics',
        excerpt: 'Explore the design concepts and implementation methods of Vaporwave text effects, and understand this unique retro aesthetic style.',
        content: `
          Vaporwave is an artistic style that combines retro electronics and internet culture,
          and its text design is an important component of this aesthetic.

          ## Characteristics of Vaporwave Text

          1. Use of full-width characters
          2. Decoration with special symbols
          3. Creation of spatial sense
          4. Integration of retro elements

          ## Design Techniques

          - Control of character spacing
          - Selection and matching of symbols
          - Construction of visual hierarchy
          - Consideration of overall layout

          ## Application Fields

          - Music cover design
          - Social media content
          - Artistic creation
          - Brand visuals

          ## Practical Recommendations

          1. Understand the style connotations
          2. Grasp design rhythm
          3. Pay attention to detail
          4. Maintain style consistency
        `,
        category: 'Design'
      }
    },
    date: '2024-03-23',
    readTime: {
      en: '8 minutes',
      zh: '8分钟'
    }
  },
  {
    id: 3,
    slug: 'matrix-text-effects',
    translations: {
      zh: {
        title: '创建黑客帝国风格的文本效果',
        excerpt: '学习如何打造经典的黑客帝国数字雨效果，为你的设计增添科技感和神秘感。',
        content: `
          黑客帝国文本效果是受到经典电影《黑客帝国》启发的一种视觉效果，具有浓厚的科技感和未来感。
          本文将介绍如何创建这种效果并在不同场景中应用。

          ## 核心要素

          1. 垂直流动的字符
          2. 绿色为主的配色方案
          3. 亚洲字符与拉丁字符的混合
          4. 随机变化的字符组合

          ## 实现技术

          - 使用等宽字体
          - 随机字符生成算法
          - 垂直流动动画技术
          - 字符亮度和透明度变化

          ## 应用场景

          - 科技产品演示
          - 游戏界面设计
          - 网站和应用背景
          - 视频特效制作

          ## 实用建议

          1. 控制字符密度
          2. 处理好速度节奏
          3. 考虑性能优化
          4. 与其他元素的协调
        `,
        category: '技术'
      },
      en: {
        title: 'Creating Matrix-Style Text Effects',
        excerpt: 'Learn how to create classic Matrix digital rain effects, adding a sense of technology and mystery to your designs.',
        content: `
          The Matrix text effect is a visual effect inspired by the classic film "The Matrix," with a strong sense of technology and futurism.
          This article will introduce how to create this effect and apply it in different scenarios.

          ## Core Elements

          1. Vertically flowing characters
          2. Green-dominated color scheme
          3. Mix of Asian and Latin characters
          4. Randomly changing character combinations

          ## Implementation Techniques

          - Use of monospaced fonts
          - Random character generation algorithms
          - Vertical flow animation techniques
          - Character brightness and transparency variations

          ## Application Scenarios

          - Tech product demonstrations
          - Game interface design
          - Website and application backgrounds
          - Video special effects production

          ## Practical Suggestions

          1. Control character density
          2. Handle speed and rhythm well
          3. Consider performance optimization
          4. Coordinate with other elements
        `,
        category: 'Technology'
      }
    },
    date: '2024-03-21',
    readTime: {
      en: '7 minutes',
      zh: '7分钟'
    }
  },
  {
    id: 4,
    slug: 'binary-code-typography',
    translations: {
      zh: {
        title: '二进制代码排版艺术',
        excerpt: '探索将二进制代码融入排版设计的创新方法，打造独特的技术美学。',
        content: `
          二进制代码作为计算机的基础语言，不仅具有功能性，更蕴含着独特的视觉美感。
          本文将探讨如何将二进制代码元素融入现代排版设计。

          ## 二进制设计的魅力

          1. 极简主义的视觉表达
          2. 强烈的技术感与未来感
          3. 黑白对比的视觉冲击
          4. 隐含的信息与故事

          ## 设计应用

          - 品牌标识设计
          - 海报与印刷品
          - 数字界面元素
          - 时尚与服装设计

          ## 创作方法

          1. 选择有意义的二进制序列
          2. 考虑空间布局与节奏
          3. 与其他设计元素的结合
          4. 掌握可读性与艺术性的平衡

          ## 案例分析

          从科技公司的品牌识别到现代艺术作品，二进制代码已经成为一种富有表现力的设计语言。
          成功的案例往往能在技术理性与艺术感性之间找到平衡点。
        `,
        category: '设计'
      },
      en: {
        title: 'The Art of Binary Code Typography',
        excerpt: 'Explore innovative methods of incorporating binary code into typographic design, creating unique technical aesthetics.',
        content: `
          Binary code, as the fundamental language of computers, not only has functionality but also contains unique visual aesthetics.
          This article will discuss how to incorporate binary code elements into modern typographic design.

          ## The Appeal of Binary Design

          1. Minimalist visual expression
          2. Strong sense of technology and futurism
          3. Visual impact of black and white contrast
          4. Implied information and stories

          ## Design Applications

          - Brand identity design
          - Posters and print materials
          - Digital interface elements
          - Fashion and clothing design

          ## Creation Methods

          1. Choose meaningful binary sequences
          2. Consider spatial layout and rhythm
          3. Combine with other design elements
          4. Master the balance between readability and artistry

          ## Case Analysis

          From tech company brand identities to modern artworks, binary code has become an expressive design language.
          Successful cases often find a balance between technical rationality and artistic sensibility.
        `,
        category: 'Design'
      }
    },
    date: '2024-03-19',
    readTime: {
      en: '6 minutes',
      zh: '6分钟'
    }
  },
  {
    id: 5,
    slug: 'corrupt-text-art',
    translations: {
      zh: {
        title: '故障文本艺术：数字时代的表达形式',
        excerpt: '了解故障文本的艺术价值和表现手法，将数字错误转化为创意表达。',
        content: `
          故障文本艺术（Corrupt Text Art）是一种利用数字错误和故障产生美学效果的创作形式。
          通过对文本进行有意的"破坏"，创造出独特的视觉语言和思想表达。

          ## 故障美学的起源

          故障美学源于数字艺术领域，将系统错误和技术失效视为创意灵感的源泉，
          而不是需要避免的问题。这种创作理念挑战了对完美的传统追求。

          ## 表现技法

          1. 字符置换与错位
          2. 编码错误的模拟
          3. 视觉断裂与重组
          4. 随机噪点的引入

          ## 文化意义

          故障文本艺术反映了数字时代的不确定性，质疑技术完美的表象，
          呈现出一种对抗主流审美的另类表达，同时也展示了混沌中的秩序美。

          ## 实验方向

          - 与传统文学形式的结合
          - 跨媒介的故障艺术实践
          - 互动性故障文本创作
          - 社会评论与政治表达
        `,
        category: '艺术'
      },
      en: {
        title: 'Corrupt Text Art: Expressive Form in the Digital Age',
        excerpt: 'Understand the artistic value and expressive techniques of corrupt text, transforming digital errors into creative expression.',
        content: `
          Corrupt Text Art is a form of creation that utilizes digital errors and glitches to produce aesthetic effects.
          By intentionally "damaging" text, it creates unique visual language and thought expression.

          ## Origins of Glitch Aesthetics

          Glitch aesthetics originated in the field of digital art, viewing system errors and technical failures as 
          sources of creative inspiration, rather than problems to be avoided. This creative concept challenges the 
          traditional pursuit of perfection.

          ## Expressive Techniques

          1. Character replacement and misalignment
          2. Simulation of encoding errors
          3. Visual breakage and reorganization
          4. Introduction of random noise

          ## Cultural Significance

          Corrupt text art reflects the uncertainty of the digital age, questions the appearance of technological 
          perfection, presents an alternative expression that counters mainstream aesthetics, and also showcases 
          the beauty of order within chaos.

          ## Experimental Directions

          - Combination with traditional literary forms
          - Cross-media glitch art practices
          - Interactive corrupt text creation
          - Social commentary and political expression
        `,
        category: 'Art'
      }
    },
    date: '2024-03-16',
    readTime: {
      en: '9 minutes',
      zh: '9分钟'
    }
  },
  {
    id: 6,
    slug: 'text-effects-in-social-media',
    translations: {
      zh: {
        title: '社交媒体中的文本效果应用策略',
        excerpt: '掌握在社交媒体平台上使用特殊文本效果的技巧，提高内容吸引力和互动率。',
        content: `
          在信息爆炸的社交媒体环境中，如何让你的内容脱颖而出？特殊文本效果可以成为提升用户注意力和互动率的有力工具。
          本文将分享在不同社交平台上应用文本效果的实用策略。

          ## 平台特性与文本效果选择

          1. Instagram：视觉冲击力强的Vaporwave效果
          2. Twitter：简洁醒目的部分Zalgo效果
          3. TikTok：动感十足的Matrix风格
          4. Facebook：适度的二进制和故障风格

          ## 受众心理分析

          - Z世代对复古风格的偏好
          - 科技爱好者的认同感
          - 文化亚群体的身份认同
          - 新奇效应与记忆点创造

          ## 实操技巧

          1. 避免过度使用，造成阅读困难
          2. 与内容主题保持一致性
          3. 考虑跨平台兼容性问题
          4. 创建品牌专属文本风格

          ## 效果测量

          通过A/B测试、互动率分析和用户调研，持续优化你的文本效果策略，
          找到最适合你的目标受众和品牌调性的表现方式。
        `,
        category: '营销'
      },
      en: {
        title: 'Text Effect Application Strategies in Social Media',
        excerpt: 'Master the techniques of using special text effects on social media platforms to increase content attractiveness and engagement rates.',
        content: `
          In the information-explosion environment of social media, how can you make your content stand out? Special text effects can be a powerful tool for enhancing user attention and engagement.
          This article will share practical strategies for applying text effects on different social platforms.

          ## Platform Characteristics and Text Effect Selection

          1. Instagram: Visually impactful Vaporwave effects
          2. Twitter: Concise and eye-catching partial Zalgo effects
          3. TikTok: Dynamic Matrix style
          4. Facebook: Moderate binary and glitch styles

          ## Audience Psychology Analysis

          - Gen Z's preference for retro styles
          - Tech enthusiasts' sense of identification
          - Cultural subgroups' identity
          - Novelty effect and memory point creation

          ## Practical Techniques

          1. Avoid overuse, causing reading difficulties
          2. Maintain consistency with content themes
          3. Consider cross-platform compatibility issues
          4. Create brand-exclusive text styles

          ## Effect Measurement

          Through A/B testing, engagement rate analysis, and user research, continuously optimize your text effect strategy,
          finding the most suitable expression for your target audience and brand tone.
        `,
        category: 'Marketing'
      }
    },
    date: '2024-03-14',
    readTime: {
      en: '8 minutes',
      zh: '8分钟'
    }
  },
  {
    id: 7,
    slug: 'glitch-effects-in-gaming',
    translations: {
      zh: {
        title: '游戏中的故障文本效果应用',
        excerpt: '探索如何在游戏界面和对话中运用故障文本，增强游戏氛围和叙事深度。',
        content: `
          游戏设计中，故障文本效果可以作为强化游戏体验的有力工具，特别是在科幻、恐怖或赛博朋克题材的作品中。
          本文将分享游戏开发中应用故障文本的实用技巧和案例分析。

          ## 故障文本在游戏中的作用

          1. 强化叙事氛围
          2. 提示游戏状态变化
          3. 传达角色心理和情感
          4. 标志游戏世界的异常

          ## 实现方式

          - 基于状态的动态文本变化
          - 与游戏事件联动的文本效果
          - 结合声音效果的多感官体验
          - 作为谜题和解谜元素

          ## 经典案例分析

          从《控制》中的异常现象提示，到《观察者》中的故障对话，再到《黑暗之魂》中的玩家留言系统，
          许多游戏都巧妙地运用了故障文本来丰富游戏体验和深化主题表达。

          ## 设计建议

          1. 保持游戏可读性和可玩性
          2. 与游戏整体风格保持一致
          3. 避免过度使用导致玩家疲劳
          4. 以服务游戏体验为核心准则
        `,
        category: '游戏'
      },
      en: {
        title: 'Application of Glitch Text Effects in Gaming',
        excerpt: 'Explore how to apply glitch text in game interfaces and dialogues to enhance game atmosphere and narrative depth.',
        content: `
          In game design, glitch text effects can serve as powerful tools for enhancing the gaming experience, especially in sci-fi, horror, or cyberpunk themed works.
          This article will share practical tips and case studies for applying glitch text in game development.

          ## Role of Glitch Text in Games

          1. Enhance narrative atmosphere
          2. Indicate changes in game state
          3. Convey character psychology and emotions
          4. Mark anomalies in the game world

          ## Implementation Methods

          - State-based dynamic text changes
          - Text effects linked to game events
          - Multi-sensory experience combined with sound effects
          - As puzzle and puzzle-solving elements

          ## Classic Case Studies

          From the anomaly prompts in "Control", to the glitched dialogues in "Observer", to the player message system in "Dark Souls",
          many games cleverly use glitch text to enrich the gaming experience and deepen thematic expression.

          ## Design Recommendations

          1. Maintain game readability and playability
          2. Maintain consistency with the overall game style
          3. Avoid overuse leading to player fatigue
          4. Core principle: serve the gaming experience
        `,
        category: 'Gaming'
      }
    },
    date: '2024-03-10',
    readTime: {
      en: '7 minutes',
      zh: '7分钟'
    }
  },
  {
    id: 8,
    slug: 'accessible-glitch-design',
    translations: {
      zh: {
        title: '可访问性与故障文本设计的平衡',
        excerpt: '探讨如何在创造有趣的故障文本效果的同时，确保内容对所有用户保持可访问性。',
        content: `
          故障文本效果虽然视觉上吸引人，但可能给特定用户群体带来可访问性挑战。
          本文探讨如何在创意表达和普遍可访问性之间找到平衡点。

          ## 可访问性挑战

          1. 屏幕阅读器兼容性问题
          2. 认知负荷增加
          3. 对视力障碍用户的影响
          4. 对神经多样性用户的考量

          ## 平衡策略

          - 提供替代文本和描述
          - 开发可控的效果强度选项
          - 设计渐进式效果展示
          - 考虑临时性和位置选择

          ## 技术实现

          通过CSS变量控制效果强度，JavaScript监测用户偏好设置，
          以及提供明确的控制界面，可以创建既有创意又具包容性的故障文本效果。

          ## 行业最佳实践

          1. 进行用户测试和反馈收集
          2. 遵循WCAG准则
          3. 考虑多平台兼容性
          4. 在设计初期就纳入可访问性考量
        `,
        category: '可访问性'
      },
      en: {
        title: 'Balancing Accessibility and Glitch Text Design',
        excerpt: 'Discuss how to ensure content remains accessible to all users while creating interesting glitch text effects.',
        content: `
          While glitch text effects are visually attractive, they may present accessibility challenges to specific user groups.
          This article explores how to find a balance between creative expression and universal accessibility.

          ## Accessibility Challenges

          1. Screen reader compatibility issues
          2. Increased cognitive load
          3. Impact on users with visual impairments
          4. Considerations for neurodiverse users

          ## Balancing Strategies

          - Provide alternative text and descriptions
          - Develop controllable effect intensity options
          - Design progressive effect display
          - Consider temporality and location selection

          ## Technical Implementation

          Through CSS variables controlling effect intensity, JavaScript monitoring user preference settings,
          and providing clear control interfaces, you can create glitch text effects that are both creative and inclusive.

          ## Industry Best Practices

          1. Conduct user testing and collect feedback
          2. Follow WCAG guidelines
          3. Consider multi-platform compatibility
          4. Incorporate accessibility considerations from the design outset
        `,
        category: 'Accessibility'
      }
    },
    date: '2024-03-05',
    readTime: {
      en: '9 minutes',
      zh: '9分钟'
    }
  }
];

// 翻译博客分类
export const categoryTranslations = {
  en: {
    '教程': 'Tutorial',
    '设计': 'Design',
    '技术': 'Technology',
    '艺术': 'Art',
    '营销': 'Marketing',
    '游戏': 'Gaming',
    '可访问性': 'Accessibility'
  },
  zh: {
    'Tutorial': '教程',
    'Design': '设计',
    'Technology': '技术',
    'Art': '艺术',
    'Marketing': '营销',
    'Gaming': '游戏',
    'Accessibility': '可访问性'
  }
}; 