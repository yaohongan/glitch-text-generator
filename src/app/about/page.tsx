export default function AboutPage() {
  const features = [
    {
      title: "专业的故障效果",
      description: "提供RGB分离、扫描线、噪点、像素化等多种专业故障效果，支持参数精确调节"
    },
    {
      title: "预设模板",
      description: "精心设计的预设效果模板，帮助你快速实现理想的视觉效果"
    },
    {
      title: "实时预览",
      description: "所有效果参数调整都能即时预览，帮助你精确控制创作效果"
    },
    {
      title: "高清导出",
      description: "支持高质量图片导出，确保你的作品保持最佳视觉效果"
    }
  ];

  const applications = [
    {
      title: "品牌设计",
      description: "为品牌创造独特的视觉识别，在竞争激烈的市场中脱颖而出"
    },
    {
      title: "社交媒体",
      description: "制作引人注目的社交媒体图片，提高内容的传播效果"
    },
    {
      title: "艺术创作",
      description: "探索数字艺术的新可能，创造独特的艺术作品"
    },
    {
      title: "音乐视觉",
      description: "为音乐作品创作配套的视觉效果，增强艺术表现力"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">关于故障艺术生成器</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            我们致力于为创作者提供专业的故障艺术创作工具，
            让每个人都能轻松探索数字艺术的无限可能。
          </p>
        </header>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">核心功能</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8">应用场景</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {applications.map((app, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-medium mb-3">{app.title}</h3>
                <p className="text-gray-400">{app.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-8">关于故障艺术</h2>
          <div className="bg-gray-900 p-8 rounded-lg">
            <p className="text-gray-400 mb-4">
              故障艺术（Glitch Art）起源于数字时代的技术故障，艺术家们发现这些意外的视觉效果蕴含着独特的美学价值。
              随着数字技术的发展，故障艺术逐渐发展成为一种重要的艺术表现形式。
            </p>
            <p className="text-gray-400 mb-4">
              在当代艺术中，故障艺术不仅仅是对技术缺陷的模仿，更是对数字文化的深度思考和艺术表达。
              它挑战了传统的美学观念，展现了数字时代特有的视觉语言。
            </p>
            <p className="text-gray-400">
              我们的故障艺术生成器，旨在为艺术家和设计师提供专业的创作工具，
              让更多人能够探索这种独特的艺术形式，创造出令人印象深刻的视觉作品。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
} 