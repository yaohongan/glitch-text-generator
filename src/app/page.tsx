'use client';

import { TextGlitchGenerator } from '@/components/TextGlitchGenerator';
import { Navigation } from '@/components/Navigation';
import { useState } from 'react';
import { Language } from '@/components/LanguageSwitcher';

// 多语言翻译数据
const translations: Record<Language, {
  title: string;
  description: string;
  guide: {
    title: string;
    input: {
      title: string;
      description: string;
    };
    select: {
      title: string;
      description: string;
    };
    copy: {
      title: string;
      description: string;
    };
  };
  effects: {
    title: string;
    zalgo: {
      title: string;
      description: string;
    };
    vaporwave: {
      title: string;
      description: string;
    };
    matrix: {
      title: string;
      description: string;
    };
    binary: {
      title: string;
      description: string;
    };
    corrupt: {
      title: string;
      description: string;
    };
  };
}> = {
  en: {
    title: 'Glitch Text Generator',
    description: 'Create unique glitch text effects. Supporting multiple styles including Zalgo, Vaporwave, Matrix, and more. Easy to use, try it now!',
    guide: {
      title: 'Usage Guide',
      input: {
        title: 'Input Text',
        description: 'Enter the text you want to transform. Supports multiple languages including English, Chinese, and more.'
      },
      select: {
        title: 'Choose Effect',
        description: 'Select from various glitch effects and adjust intensity parameters to achieve your desired effect.'
      },
      copy: {
        title: 'Copy & Use',
        description: 'Click the copy button to get the transformed text, ready to use in social media, design work, and more.'
      }
    },
    effects: {
      title: 'Effect Descriptions',
      zalgo: {
        title: 'Zalgo',
        description: 'Classic glitch text effect, adding combining characters above and below text to create an eerie visual effect.'
      },
      vaporwave: {
        title: 'Vaporwave',
        description: 'Converts text to full-width characters, creating a retro vaporwave aesthetic style.'
      },
      matrix: {
        title: 'Matrix',
        description: 'Simulates The Matrix style, randomly converting text to Japanese kana and numbers.'
      },
      binary: {
        title: 'Binary',
        description: 'Converts parts of text to binary numbers, creating a digital glitch effect.'
      },
      corrupt: {
        title: 'Corrupt',
        description: 'Simulates file corruption effect by randomly replacing character encodings.'
      }
    }
  },
  zh: {
    title: '故障文本生成器',
    description: '创造独特的故障文本效果。支持多种风格，包括Zalgo、Vaporwave、Matrix等。简单易用，立即尝试！',
    guide: {
      title: '使用指南',
      input: {
        title: '输入文本',
        description: '在文本框中输入你想要转换的文字。支持中文、英文等多种语言。'
      },
      select: {
        title: '选择效果',
        description: '从多种故障效果中选择，调整强度参数以获得理想的效果。'
      },
      copy: {
        title: '复制使用',
        description: '点击复制按钮获取转换后的文本，可直接用于社交媒体、设计作品等。'
      }
    },
    effects: {
      title: '效果说明',
      zalgo: {
        title: 'Zalgo',
        description: '经典的故障文本效果，在字符上下添加组合符号，创造诡异的视觉效果。'
      },
      vaporwave: {
        title: 'Vaporwave',
        description: '将文本转换为全角字符，营造复古蒸汽波美学风格。'
      },
      matrix: {
        title: 'Matrix',
        description: '模拟黑客帝国风格，将文字随机转换为日文假名和数字。'
      },
      binary: {
        title: 'Binary',
        description: '将部分文字转换为二进制数字，创造数字故障效果。'
      },
      corrupt: {
        title: 'Corrupt',
        description: '模拟文件损坏效果，随机替换字符编码。'
      }
    }
  },
  es: {
    title: 'Generador de Texto Glitch',
    description: 'Crea efectos de texto glitch únicos. Compatible con múltiples estilos como Zalgo, Vaporwave, Matrix y más. Fácil de usar, ¡pruébalo ahora!',
    guide: {
      title: 'Guía de Uso',
      input: {
        title: 'Texto de Entrada',
        description: 'Introduce el texto que quieres transformar. Compatible con múltiples idiomas incluyendo español, inglés y más.'
      },
      select: {
        title: 'Elegir Efecto',
        description: 'Selecciona entre varios efectos glitch y ajusta los parámetros de intensidad para lograr el efecto deseado.'
      },
      copy: {
        title: 'Copiar y Usar',
        description: 'Haz clic en el botón de copiar para obtener el texto transformado, listo para usar en redes sociales, diseño y más.'
      }
    },
    effects: {
      title: 'Descripciones de Efectos',
      zalgo: {
        title: 'Zalgo',
        description: 'Efecto de texto glitch clásico, añadiendo caracteres combinantes encima y debajo del texto para crear un efecto visual inquietante.'
      },
      vaporwave: {
        title: 'Vaporwave',
        description: 'Convierte el texto a caracteres de ancho completo, creando un estilo estético vaporwave retro.'
      },
      matrix: {
        title: 'Matrix',
        description: 'Simula el estilo de Matrix, convirtiendo aleatoriamente texto a kana japonés y números.'
      },
      binary: {
        title: 'Binario',
        description: 'Convierte partes del texto a números binarios, creando un efecto de fallo digital.'
      },
      corrupt: {
        title: 'Corrupto',
        description: 'Simula efecto de corrupción de archivos reemplazando aleatoriamente codificaciones de caracteres.'
      }
    }
  },
  fr: {
    title: 'Générateur de Texte Glitch',
    description: 'Créez des effets de texte glitch uniques. Prend en charge plusieurs styles dont Zalgo, Vaporwave, Matrix et plus. Facile à utiliser, essayez-le maintenant !',
    guide: {
      title: 'Guide d\'Utilisation',
      input: {
        title: 'Texte d\'Entrée',
        description: 'Entrez le texte que vous souhaitez transformer. Prend en charge plusieurs langues dont le français, l\'anglais et plus.'
      },
      select: {
        title: 'Choisir l\'Effet',
        description: 'Sélectionnez parmi divers effets glitch et ajustez les paramètres d\'intensité pour obtenir l\'effet souhaité.'
      },
      copy: {
        title: 'Copier et Utiliser',
        description: 'Cliquez sur le bouton copier pour obtenir le texte transformé, prêt à être utilisé sur les réseaux sociaux, dans des travaux de design et plus.'
      }
    },
    effects: {
      title: 'Descriptions des Effets',
      zalgo: {
        title: 'Zalgo',
        description: 'Effet de texte glitch classique, ajoutant des caractères combinés au-dessus et en dessous du texte pour créer un effet visuel étrange.'
      },
      vaporwave: {
        title: 'Vaporwave',
        description: 'Convertit le texte en caractères pleine largeur, créant un style esthétique rétro vaporwave.'
      },
      matrix: {
        title: 'Matrix',
        description: 'Simule le style Matrix, en convertissant aléatoirement le texte en kana japonais et en chiffres.'
      },
      binary: {
        title: 'Binaire',
        description: 'Convertit des parties du texte en nombres binaires, créant un effet de glitch numérique.'
      },
      corrupt: {
        title: 'Corrompu',
        description: 'Simule l\'effet de corruption de fichier en remplaçant aléatoirement les encodages de caractères.'
      }
    }
  },
  ja: {
    title: 'グリッチテキストジェネレーター',
    description: 'ユニークなグリッチテキスト効果を作成。Zalgo、Vaporwave、Matrixなど複数のスタイルに対応。使いやすく、今すぐお試しください！',
    guide: {
      title: '使用ガイド',
      input: {
        title: '入力テキスト',
        description: '変換したいテキストを入力してください。日本語、英語など複数の言語に対応しています。'
      },
      select: {
        title: 'エフェクト選択',
        description: '様々なグリッチエフェクトから選択し、強度パラメータを調整して希望の効果を得ることができます。'
      },
      copy: {
        title: 'コピーして使用',
        description: 'コピーボタンをクリックして変換されたテキストを取得し、SNS、デザイン作業などですぐに使用できます。'
      }
    },
    effects: {
      title: 'エフェクト説明',
      zalgo: {
        title: 'Zalgo',
        description: '古典的なグリッチテキスト効果、テキストの上下に結合文字を追加して不気味な視覚効果を作成します。'
      },
      vaporwave: {
        title: 'Vaporwave',
        description: 'テキストを全角文字に変換し、レトロなヴェイパーウェイブの美学スタイルを作成します。'
      },
      matrix: {
        title: 'Matrix',
        description: 'マトリックススタイルをシミュレートし、テキストをランダムに日本語のカナや数字に変換します。'
      },
      binary: {
        title: 'Binary',
        description: 'テキストの一部を二進数に変換し、デジタルグリッチ効果を作成します。'
      },
      corrupt: {
        title: 'Corrupt',
        description: '文字エンコーディングをランダムに置き換えることで、ファイル破損効果をシミュレートします。'
      }
    }
  },
  de: {
    title: 'Glitch-Text-Generator',
    description: 'Erstellen Sie einzigartige Glitch-Texteffekte. Unterstützt mehrere Stile wie Zalgo, Vaporwave, Matrix und mehr. Einfach zu verwenden, probieren Sie es jetzt aus!',
    guide: {
      title: 'Bedienungsanleitung',
      input: {
        title: 'Texteingabe',
        description: 'Geben Sie den Text ein, den Sie transformieren möchten. Unterstützt mehrere Sprachen einschließlich Deutsch, Englisch und mehr.'
      },
      select: {
        title: 'Effekt wählen',
        description: 'Wählen Sie aus verschiedenen Glitch-Effekten und passen Sie die Intensitätsparameter an, um Ihren gewünschten Effekt zu erzielen.'
      },
      copy: {
        title: 'Kopieren & Verwenden',
        description: 'Klicken Sie auf die Kopier-Schaltfläche, um den transformierten Text zu erhalten, bereit zur Verwendung in sozialen Medien, Designarbeiten und mehr.'
      }
    },
    effects: {
      title: 'Effektbeschreibungen',
      zalgo: {
        title: 'Zalgo',
        description: 'Klassischer Glitch-Texteffekt, der kombinierende Zeichen über und unter dem Text hinzufügt, um einen unheimlichen visuellen Effekt zu erzeugen.'
      },
      vaporwave: {
        title: 'Vaporwave',
        description: 'Konvertiert Text in Zeichen mit voller Breite und erzeugt einen retro Vaporwave-Ästhetikstil.'
      },
      matrix: {
        title: 'Matrix',
        description: 'Simuliert den Matrix-Stil, indem Text zufällig in japanische Kana und Zahlen umgewandelt wird.'
      },
      binary: {
        title: 'Binär',
        description: 'Konvertiert Teile des Textes in Binärzahlen und erzeugt einen digitalen Glitch-Effekt.'
      },
      corrupt: {
        title: 'Korrupt',
        description: 'Simuliert Dateibeschädigungseffekte durch zufälliges Ersetzen von Zeichenkodierungen.'
      }
    }
  },
  ru: {
    title: 'Генератор Глитч-Текста',
    description: 'Создавайте уникальные эффекты глитч-текста. Поддерживает множество стилей, включая Zalgo, Vaporwave, Matrix и другие. Прост в использовании, попробуйте сейчас!',
    guide: {
      title: 'Руководство по Использованию',
      input: {
        title: 'Ввод Текста',
        description: 'Введите текст, который вы хотите преобразовать. Поддерживает несколько языков, включая русский, английский и другие.'
      },
      select: {
        title: 'Выбор Эффекта',
        description: 'Выберите из различных эффектов глитча и настройте параметры интенсивности для достижения желаемого эффекта.'
      },
      copy: {
        title: 'Копировать и Использовать',
        description: 'Нажмите кнопку копирования, чтобы получить преобразованный текст, готовый к использованию в социальных сетях, дизайнерских работах и т.д.'
      }
    },
    effects: {
      title: 'Описания Эффектов',
      zalgo: {
        title: 'Zalgo',
        description: 'Классический эффект глитч-текста, добавляющий комбинирующиеся символы над и под текстом для создания жуткого визуального эффекта.'
      },
      vaporwave: {
        title: 'Vaporwave',
        description: 'Преобразует текст в символы полной ширины, создавая ретро эстетический стиль vaporwave.'
      },
      matrix: {
        title: 'Matrix',
        description: 'Имитирует стиль Матрицы, случайно преобразуя текст в японскую кану и цифры.'
      },
      binary: {
        title: 'Binary',
        description: 'Преобразует части текста в двоичные числа, создавая эффект цифрового глитча.'
      },
      corrupt: {
        title: 'Corrupt',
        description: 'Имитирует эффект повреждения файла, случайно заменяя кодировки символов.'
      }
    }
  },
  pt: {
    title: 'Gerador de Texto Glitch',
    description: 'Crie efeitos de texto glitch únicos. Suporta múltiplos estilos incluindo Zalgo, Vaporwave, Matrix e mais. Fácil de usar, experimente agora!',
    guide: {
      title: 'Guia de Uso',
      input: {
        title: 'Texto de Entrada',
        description: 'Insira o texto que deseja transformar. Suporta múltiplos idiomas incluindo português, inglês e mais.'
      },
      select: {
        title: 'Escolher Efeito',
        description: 'Selecione entre vários efeitos glitch e ajuste os parâmetros de intensidade para alcançar o efeito desejado.'
      },
      copy: {
        title: 'Copiar e Usar',
        description: 'Clique no botão copiar para obter o texto transformado, pronto para usar em mídias sociais, trabalhos de design e mais.'
      }
    },
    effects: {
      title: 'Descrições de Efeitos',
      zalgo: {
        title: 'Zalgo',
        description: 'Efeito de texto glitch clássico, adicionando caracteres combinados acima e abaixo do texto para criar um efeito visual sinistro.'
      },
      vaporwave: {
        title: 'Vaporwave',
        description: 'Converte texto para caracteres de largura completa, criando um estilo estético retrô vaporwave.'
      },
      matrix: {
        title: 'Matrix',
        description: 'Simula o estilo Matrix, convertendo aleatoriamente texto para kana japonês e números.'
      },
      binary: {
        title: 'Binary',
        description: 'Converte partes do texto para números binários, criando um efeito de glitch digital.'
      },
      corrupt: {
        title: 'Corrupt',
        description: 'Simula efeito de corrupção de arquivo substituindo aleatoriamente codificações de caracteres.'
      }
    }
  },
  ar: {
    title: 'مولد نص غليتش',
    description: 'أنشئ تأثيرات نصية فريدة. يدعم أنماطًا متعددة بما في ذلك زالغو، فيبورويف، ماتريكس، والمزيد. سهل الاستخدام، جربه الآن!',
    guide: {
      title: 'دليل الاستخدام',
      input: {
        title: 'إدخال النص',
        description: 'أدخل النص الذي تريد تحويله. يدعم لغات متعددة بما في ذلك العربية والإنجليزية والمزيد.'
      },
      select: {
        title: 'اختيار التأثير',
        description: 'اختر من بين تأثيرات غليتش متنوعة واضبط معايير الكثافة لتحقيق التأثير المرجو.'
      },
      copy: {
        title: 'نسخ واستخدام',
        description: 'انقر على زر النسخ للحصول على النص المحول، جاهز للاستخدام في وسائل التواصل الاجتماعي، وأعمال التصميم، والمزيد.'
      }
    },
    effects: {
      title: 'وصف التأثيرات',
      zalgo: {
        title: 'زالغو',
        description: 'تأثير نص غليتش كلاسيكي، يضيف حروفًا مركبة فوق وتحت النص لإنشاء تأثير بصري غريب.'
      },
      vaporwave: {
        title: 'فيبورويف',
        description: 'يحول النص إلى أحرف كاملة العرض، مما يخلق نمطًا جماليًا قديمًا من نوع فيبورويف.'
      },
      matrix: {
        title: 'ماتريكس',
        description: 'يحاكي نمط ماتريكس، ويحول النص عشوائيًا إلى حروف كانا يابانية وأرقام.'
      },
      binary: {
        title: 'ثنائي',
        description: 'يحول أجزاء من النص إلى أرقام ثنائية، مما يخلق تأثير غليتش رقمي.'
      },
      corrupt: {
        title: 'فاسد',
        description: 'يحاكي تأثير تلف الملف عن طريق استبدال ترميزات الأحرف عشوائيًا.'
      }
    }
  }
};

export default function Home() {
  const [language, setLanguage] = useState<Language>('en');
  const t = translations[language];

  const handleLanguageChange = (lang: Language) => {
    setLanguage(lang);
  };

  return (
    <>
      <Navigation onLanguageChange={handleLanguageChange} currentLang={language} />
      <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-950 via-slate-900 to-black text-white relative overflow-hidden">
        {/* 动态背景效果 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* 光晕效果 */}
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-500/10 blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-purple-500/10 blur-[100px] rounded-full"></div>
          {/* 网格效果 */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(99,102,241,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(99,102,241,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          {/* 闪光点效果 */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse delay-150"></div>
            <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-300"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8 relative">
          <header className="text-center mb-12 pt-24">
            <div className="inline-block">
              <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500">
                {t.title}
              </h1>
              <div className="h-1 w-full bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 rounded-full"></div>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto mt-6 text-lg">
              {t.description}
            </p>
          </header>

          <div className="mb-16 shadow-2xl shadow-blue-900/20">
            <TextGlitchGenerator language={language} />
          </div>

          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {t.guide.title}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all shadow-lg shadow-indigo-900/10">
                <h3 className="text-xl font-medium mb-3">{t.guide.input.title}</h3>
                <p className="text-gray-300">
                  {t.guide.input.description}
                </p>
              </div>
              <div className="group bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all shadow-lg shadow-indigo-900/10">
                <h3 className="text-xl font-medium mb-3">{t.guide.select.title}</h3>
                <p className="text-gray-300">
                  {t.guide.select.description}
                </p>
              </div>
              <div className="group bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all shadow-lg shadow-indigo-900/10">
                <h3 className="text-xl font-medium mb-3">{t.guide.copy.title}</h3>
                <p className="text-gray-300">
                  {t.guide.copy.description}
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16 mb-24">
            <h2 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              {t.effects.title}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all shadow-lg shadow-indigo-900/10">
                <h3 className="text-xl font-medium mb-3">{t.effects.zalgo.title}</h3>
                <p className="text-gray-300">
                  {t.effects.zalgo.description}
                </p>
              </div>
              <div className="group bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all shadow-lg shadow-indigo-900/10">
                <h3 className="text-xl font-medium mb-3">{t.effects.vaporwave.title}</h3>
                <p className="text-gray-300">
                  {t.effects.vaporwave.description}
                </p>
              </div>
              <div className="group bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all shadow-lg shadow-indigo-900/10">
                <h3 className="text-xl font-medium mb-3">{t.effects.matrix.title}</h3>
                <p className="text-gray-300">
                  {t.effects.matrix.description}
                </p>
              </div>
              <div className="group bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all shadow-lg shadow-indigo-900/10">
                <h3 className="text-xl font-medium mb-3">{t.effects.binary.title}</h3>
                <p className="text-gray-300">
                  {t.effects.binary.description}
                </p>
              </div>
              <div className="group bg-gradient-to-br from-indigo-900/30 to-purple-900/30 backdrop-blur-sm p-6 rounded-lg border border-white/10 hover:border-white/20 transition-all shadow-lg shadow-indigo-900/10">
                <h3 className="text-xl font-medium mb-3">{t.effects.corrupt.title}</h3>
                <p className="text-gray-300">
                  {t.effects.corrupt.description}
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
