// Translation system for Russian (default) and English
export type Language = 'ru' | 'en'

export const translations = {
  ru: {
    // Navigation
    nav: {
      home: 'Главная',
      courses: 'Курсы',
      pricing: 'Цены',
      contact: 'Контакты',
      enrollNow: 'Записаться сейчас'
    },
    
    // Home Page
    home: {
      badge: 'Говорите свободно ✨',
      hero: {
        title: 'Научитесь общаться на английском с настоящими носителями ',
        titleHighlight: 'языка',
        subtitle: 'Изучение английского языка современным способом',
        exploreCourses: 'Изучить курсы',
        contactTelegram: 'Связаться в Telegram'
      },
      whyChoose: {
        title: 'Почему мы лучшая ESL школа?',
        feature1: {
          title: 'Талантливые носители английского языка',
          description: 'Наши талантливые, преданные делу учителя уделяют приоритетное внимание помощи студентам в естественном общении на английском языке.'
        },
        feature2: {
          title: 'Гибкое расписание',
          description: 'Учитесь в своем темпе с занятиями, которые соответствуют вашему образу жизни.'
        },
        feature3: {
          title: 'Интерактивное обучение',
          description: 'Увлекательные уроки, наполненные беседами, занятиями и использованием английского языка в реальной жизни.'
        },
        feature4: {
          title: 'Глобальное сообщество',
          description: 'Общайтесь с учителями и студентами со всего мира и получайте аутентичное общение.'
        }
      },
      vision: {
        badge: 'Наше видение, миссия и ценности',
        title: 'Мы трансформируем опыт обучения',
        subtitle: 'В Oakwood ESL наша миссия - обеспечить целостную, инклюзивную поддержку всех студентов для достижения их целей общения на английском языке и развития их уникальных талантов, чтобы они находили радость и удовлетворение в высшем образовании, карьере и жизни',
        card1: {
          title: 'Наша миссия: Каждый студент, каждый успех',
          description: 'Мы создаем поддерживающую, инклюзивную среду обучения, где студенты из всех слоев общества раскрывают свой потенциал и достигают своих целей в английском языке.'
        },
        card2: {
          title: 'Ценности в действии',
          description: 'Совершенство, уважение, инклюзивность и радость - смотрите, как наши ценности оживают на каждом уроке.'
        },
        card3: {
          title: 'Дальновидное обучение',
          description: 'Мы представляем мир, где язык открывает двери - к образованию, карьере и значимым связям.'
        },
        card4: {
          title: 'Персонализированная поддержка',
          description: 'Преданные учителя и наставники, которые верят в вас, понимают ваши цели и направляют вас на каждом шагу вперед.'
        },
        card5: {
          title: 'Инклюзивное сообщество',
          description: 'Присоединяйтесь к яркому, приветливому сообществу, где ценится разнообразие и важен каждый голос.'
        },
        quote: '"В Oakwood ESL мы стремимся трансформировать опыт изучения английского языка. С момента вашего первого урока с нами вы заметите разницу. Помимо теплого приема и приглашающей атмосферы - это команда высококвалифицированных учителей, администраторов и вспомогательного персонала, все из которых разделяют цель обеспечить высокую вовлеченность наших студентов в их путешествие по изучению английского языка и чувствовать себя на 100% уверенно, используя английский язык."',
        quoteAuthor: '— Команда Oakwood ESL'
      },
      impact: {
        title: 'Наше влияние',
        students: 'Активных студентов и растет',
        teachers: 'Опытных носителей английского языка',
        countries: 'Представленных стран'
      },
      cta: {
        title: 'Готовы начать свой путь?',
        subtitle: 'Получите свой первый пробный урок со скидкой 50%! Начните с консультации, чтобы найти идеальный пакет для вас.',
        viewPricing: 'Посмотреть цены и пакеты',
        exploreCourses: 'Изучить все курсы'
      }
    },
    
    // Courses Page
    courses: {
      badge: 'Наши форматы обучения',
      hero: {
        title: 'Выберите свой идеальный путь обучения',
        subtitle: 'Три гибких формата, разработанных для соответствия вашему образу жизни и ускорения вашего владения английским языком'
      },
      individual: {
        title: 'Индивидуальные уроки',
        description: 'Персонализированные уроки один на один, адаптированные к вашим конкретным потребностям и целям',
        feature1: 'Индивидуальная программа',
        feature2: 'Индивидуальное внимание',
        feature3: 'Гибкое расписание',
        feature4: 'Отслеживание прогресса',
        feature5: 'Минимум 3 урока'
      },
      group: {
        title: 'Групповые уроки (2-3 студента)',
        description: 'Интерактивные уроки в небольших группах для совместного обучения и поддержки сверстников',
        feature1: 'Совместное обучение',
        feature2: 'Групповые занятия',
        feature3: 'Доступные цены',
        feature4: 'Социальное взаимодействие',
        feature5: 'Минимум 3 урока'
      },
      club: {
        title: 'Разговорный клуб',
        description: 'Присоединяйтесь к нашему динамичному разговорному клубу для практики общения и нетворкинга',
        feature1: 'Свободная разговорная практика',
        feature2: 'Групповые обсуждения',
        feature3: 'Культурный обмен',
        feature4: 'Построение сообщества',
        feature5: 'Минимум 3 сессии'
      },
      learnMore: 'Узнать больше',
      booksTitle: 'Наши учебники',
      booksSubtitle: 'Комплексные рабочие тетради, разработанные для развития сильного фонематического восприятия и навыков чтения',
      book1: {
        title: 'Уровень первый',
        subtitle: 'Фонематическое восприятие'
      },
      book2: {
        title: 'Книжка-раскраска',
        subtitle: 'Фонематическое восприятие'
      },
      book3: {
        title: 'Уровень второй',
        subtitle: 'Фонематическое восприятие'
      },
      book4: {
        title: 'Уровень третий',
        subtitle: 'Фонематическое восприятие'
      },
      howItWorks: {
        title: 'Как это работает',
        subtitle: 'Начните свое путешествие по изучению английского языка всего за четыре простых шага',
        step1: {
          title: 'Выберите свой пакет',
          description: 'Выберите формат обучения, который лучше всего соответствует вашим потребностям и целям'
        },
        step2: {
          title: 'Пробный урок',
          description: 'Получите скидку 50% на первую сессию и познакомьтесь с нашими преподавателями'
        },
        step3: {
          title: 'Встретьте своего учителя',
          description: 'Свяжитесь с опытным преподавателем, подобранным под ваш уровень'
        },
        step4: {
          title: 'Начните обучение',
          description: 'Начните свой путь с минимум 3 уроков для непрерывности'
        }
      },
      finalCta: {
        title: 'Готовы трансформировать свой английский?',
        subtitle: 'Начните с первого пробного урока со скидкой 50% и испытайте персонализированное обучение',
        button: 'Изучить все пакеты'
      }
    },
    
    // Pricing Page
    pricing: {
      badge: 'Цены и пакеты',
      hero: {
        title: 'Простые, прозрачные цены',
        subtitle: 'Выберите свой идеальный план и начните изучать английский с уверенностью'
      },
      mostPopular: 'САМЫЙ ПОПУЛЯРНЫЙ',
      recommended: 'РЕКОМЕНДУЕТСЯ',
      trialLesson: 'Пробный первый урок',
      offFirstSession: 'Скидка 50% на первую сессию',
      regularPrice: 'Обычная цена за урок',
      minimumPackage: 'Минимальный пакет',
      lessons: 'уроков',
      whatsIncluded: "Что включено",
      getStarted: 'Начать',
      newStudent: {
        title: '🎁 Специальное предложение для новых студентов',
        description: 'Получите свой первый пробный урок со скидкой 50%, чтобы убедиться, что мы идеально подходим вам!'
      },
      commitment: {
        title: '📋 Минимальное обязательство',
        description: 'Все пакеты требуют минимум 3 урока для обеспечения непрерывности и измеримого прогресса.'
      },
      comparison: {
        title: 'Сравнение функций',
        feature: 'Функция',
        personalizedCurriculum: 'Персонализированная программа',
        oneOnOne: 'Индивидуальные сессии',
        groupInteraction: 'Групповое взаимодействие',
        flexibleScheduling: 'Гибкое расписание',
        progressReports: 'Отчеты о прогрессе',
        speakingPractice: 'Разговорная практика'
      },
      faq: {
        title: 'Часто задаваемые вопросы',
        subtitle: 'Найдите ответы на распространенные вопросы о наших ценах и пакетах',
        q1: 'Могу ли я переключаться между пакетами?',
        a1: 'Вы можете переключаться между форматами индивидуальных, групповых или разговорных клубов в любое время. Просто свяжитесь с нами, чтобы обсудить ваши варианты.',
        q2: 'Что, если я хочу больше уроков сверх минимума?',
        a2: 'Вы можете продолжить с любым количеством дополнительных уроков. Каждый дополнительный урок оплачивается по обычному тарифу для этого пакета.',
        q3: 'Как я могу запланировать свои уроки?',
        a3: 'После регистрации вы будете координировать расписание напрямую с вашим учителем. Мы предлагаем гибкое время утром, днем и вечером.',
        q4: 'Какова ваша политика отмены?',
        a4: 'Мы требуем уведомления за 24 часа для отмены. Уроки, отмененные с надлежащим уведомлением, могут быть перенесены на другое время.',
        q5: 'Предлагаете ли вы корпоративное обучение?',
        a5: 'Да! Мы предлагаем индивидуальные корпоративные пакеты для команд и организаций. Свяжитесь с нами для индивидуального предложения.',
        q6: 'Какие способы оплаты вы принимаете?',
        a6: 'Мы принимаем банковские переводы, наличные и различные методы цифровых платежей. Свяжитесь с нашей командой для получения конкретных деталей оплаты.'
      },
      finalCta: {
        title: 'Готовы начать обучение?',
        subtitle: 'Забронируйте свой пробный урок со скидкой 50% сегодня и сделайте первый шаг к свободному английскому',
        telegram: 'Написать в Telegram',
        email: 'Написать нам'
      }
    },
    
    // Contact Page
    contact: {
      badge: 'Свяжитесь с нами',
      hero: {
        title: 'Связаться с нами',
        subtitle: 'Есть вопросы? Мы будем рады услышать вас. Свяжитесь с нами через любой из этих каналов.'
      },
      telegram: {
        title: 'Telegram',
        description: 'Свяжитесь с нами в Telegram для быстрых ответов и мгновенных обновлений о ваших уроках.',
        button: 'Напишите нам'
      },
      email: {
        title: 'Email',
        description: 'Отправьте нам электронное письмо с вашим запросом, и мы ответим в течение 24 часов.'
      },
      phone: {
        title: 'Телефон',
        description: 'Позвоните нам напрямую, чтобы поговорить с нашей командой и запланировать пробный урок.'
      },
      form: {
        title: 'Отправьте нам сообщение',
        subtitle: 'Заполните форму, и мы свяжемся с вами как можно скорее. Независимо от того, есть ли у вас вопросы о наших курсах, ценах или вы просто хотите поздороваться, мы здесь, чтобы помочь.',
        officeLocation: 'Расположение офиса',
        officeLocationText: 'Доступны для онлайн и офлайн уроков',
        responseTime: 'Время ответа',
        responseTimeText: 'Мы обычно отвечаем в течение 24 часов',
        fullName: 'Полное имя',
        emailAddress: 'Адрес электронной почты',
        phoneNumber: 'Номер телефона (необязательно)',
        subject: 'Тема',
        message: 'Сообщение',
        send: 'Отправить сообщение',
        namePlaceholder: 'Иван Иванов',
        emailPlaceholder: 'you@example.com',
        phonePlaceholder: '+7 (xxx) xxx-xxxx',
        subjectPlaceholder: 'Как мы можем помочь?',
        messagePlaceholder: 'Расскажите нам больше о вашем запросе...'
      },
      faq: {
        title: 'Часто задаваемые вопросы',
        subtitle: 'Быстрые ответы, которые помогут вам начать',
        q1: 'Каково ваше обычное время ответа?',
        a1: 'Мы стремимся ответить на все запросы в течение 24 часов в будние дни. Сообщения в Telegram обычно отвечаются еще быстрее.',
        q2: 'Могу ли я забронировать пробный урок напрямую?',
        a2: 'Да! Свяжитесь с нами через Telegram, электронную почту или используйте нашу контактную форму, чтобы забронировать пробный урок со скидкой 50%.',
        q3: 'Предлагаете ли вы офлайн уроки?',
        a3: 'Мы в основном предлагаем онлайн-уроки для гибкости, но мы можем обсудить индивидуальные договоренности в зависимости от ваших потребностей.',
        q4: 'Что, если у меня есть вопросы о конкретных курсах?',
        a4: 'Посетите нашу страницу курсов для подробной информации или свяжитесь с нами напрямую для персонализированных рекомендаций.'
      },
      finalCta: {
        title: 'Готовы начать свой путь?',
        subtitle: 'Не ждите! Забронируйте свой пробный урок со скидкой 50% сегодня и сделайте первый шаг к свободному английскому.',
        button: 'Изучить наши пакеты'
      }
    },
    
    // Booking Page
    booking: {
      badge: 'Скидка 50% на первый урок',
      hero: {
        title: 'Забронируйте пробный урок',
        subtitle: 'Начните свое путешествие по изучению английского языка сегодня. Выберите курс, выберите время и приготовьтесь говорить свободно с преподавателями-носителями языка.'
      },
      benefits: {
        trial: {
          title: 'Скидка 50% на пробный урок',
          description: 'Ваш первый урок по половинной цене'
        },
        teachers: {
          title: 'Преподаватели-носители языка',
          description: 'Учитесь у опытных носителей языка'
        },
        schedule: {
          title: 'Гибкое расписание',
          description: 'Выбирайте удобное для вас время'
        },
        commitment: {
          title: 'Без обязательств',
          description: 'Попробуйте, прежде чем выбрать пакет'
        }
      },
      form: {
        title: 'Завершите бронирование',
        subtitle: 'Заполните форму ниже, и мы свяжемся с вами в течение 24 часов, чтобы подтвердить пробный урок.',
        personalInfo: 'Личная информация',
        firstName: 'Имя',
        lastName: 'Фамилия',
        email: 'Адрес электронной почты',
        phone: 'Номер телефона',
        courseSelection: 'Выбор курса',
        courseType: 'Тип курса',
        selectCourse: 'Выберите курс',
        general: 'Общий английский',
        business: 'Деловой английский',
        conversation: 'Разговорная практика',
        exam: 'Подготовка к экзаменам (IELTS/TOEFL)',
        kids: 'Английский для детей',
        intensive: 'Интенсивный курс',
        level: 'Текущий уровень',
        selectLevel: 'Выберите ваш уровень',
        beginner: 'Начинающий (A1)',
        elementary: 'Элементарный (A2)',
        intermediate: 'Средний (B1)',
        upperIntermediate: 'Выше среднего (B2)',
        advanced: 'Продвинутый (C1)',
        proficient: 'Свободный (C2)',
        notSure: 'Не уверен',
        packageType: 'Интересующий пакет',
        selectPackage: 'Выберите пакет',
         individual: 'Индивидуальные уроки',
         group: 'Групповые уроки',
         club: 'Разговорный клуб',
         homeVisit: 'Домашний визит',
        custom: 'Настроить пакет',
        scheduling: 'Предпочтения по расписанию',
        preferredDate: 'Предпочтительная дата начала',
        preferredTime: 'Предпочтительное время',
        selectTime: 'Выберите временной интервал',
        morning: 'Утро (9:00 - 12:00)',
        afternoon: 'День (12:00 - 17:00)',
        evening: 'Вечер (17:00 - 21:00)',
        flexible: 'Гибкое',
        goals: 'Цели обучения (необязательно)',
        goalsPlaceholder: 'Расскажите нам о ваших целях изучения английского языка и том, чего вы надеетесь достичь...',
        hearAboutUs: 'Как вы о нас узнали? (необязательно)',
        selectOption: 'Выберите вариант',
        google: 'Поиск Google',
        social: 'Социальные сети',
        friend: 'Друг или семья',
        telegram: 'Telegram',
        advertisement: 'Реклама',
        other: 'Другое',
        submit: 'Забронировать пробный урок',
        submitting: 'Отправка...',
        terms: 'Отправляя эту форму, вы соглашаетесь с нашими условиями и политикой конфиденциальности.',
        firstNamePlaceholder: 'Иван',
        lastNamePlaceholder: 'Иванов',
        emailPlaceholder: 'you@example.com',
        phonePlaceholder: '+7 (xxx) xxx-xxxx'
      },
      sidebar: {
        help: 'Нужна помощь?',
        helpText: 'Свяжитесь с нами напрямую в Telegram для мгновенной помощи с бронированием.',
        messageTelegram: 'Написать в Telegram',
        whatNext: 'Что дальше?',
        step1: 'Мы рассмотрим ваш запрос на бронирование',
        step2: 'Получите подтверждение в течение 24 часов',
        step3: 'Вас свяжут с вашим преподавателем',
        step4: 'Начните пробный урок!',
        whyBook: 'Почему стоит забронировать у нас?',
        activeStudents: '25+ активных студентов',
        nativeTeachers: '10+ преподавателей-носителей языка',
        flexibleSchedule: 'Гибкое расписание',
        moneyBack: 'Гарантия возврата денег'
      },
      faq: {
        title: 'Часто задаваемые вопросы о бронировании',
        q1: 'Что включено в пробный урок?',
        a1: 'Полная 60-минутная сессия с преподавателем-носителем языка, оценка уровня и персонализированный план обучения.',
        q2: 'Могу ли я выбрать преподавателя?',
        a2: 'Да! Мы подберем вам преподавателя на основе ваших предпочтений, и вы можете запросить изменения в любое время.',
        q3: 'Что если мне нужно перенести урок?',
        a3: 'Вы можете перенести урок за 24 часа до занятия без штрафа.',
        q4: 'Нужно ли мне брать обязательство на пакет?',
        a4: 'Совсем нет! Пробный урок не требует обязательств. Выберите пакет, только если вы удовлетворены.'
      },
      altCta: {
        title: 'Еще не готовы забронировать?',
        subtitle: 'Изучите наши курсы и цены, чтобы найти идеальный пакет для вашего путешествия по изучению английского языка.',
        viewCourses: 'Посмотреть все курсы',
        seePricing: 'Посмотреть цены'
      },
      alerts: {
        success: 'Запрос на бронирование успешно отправлен! Мы свяжемся с вами в ближайшее время, чтобы подтвердить пробный урок.',
        error: 'Не удалось отправить бронирование. Пожалуйста, попробуйте снова или свяжитесь с нами через Telegram.'
      }
    },
    
    // Footer
    footer: {
      aboutUs: 'О нас',
      aboutText: 'Oakwood ESL - это динамичная и приземленная английская школа, которая воспитывает ярких и творческих студентов. Мы фокусируемся на реальном общении и готовим наших студентов к реальным жизненным ситуациям.',
      quickLinks: 'Быстрые ссылки',
      courses: 'Курсы',
      pricing: 'Цены',
      home: 'Главная',
      contact: 'Контакты',
      followUs: 'Подписывайтесь на нас',
      rights: '© 2025 Oakwood ESL. Все права защищены.'
    }
  },
  
  en: {
    // Navigation
    nav: {
      home: 'Home',
      courses: 'Courses',
      pricing: 'Pricing',
      contact: 'Contact',
      enrollNow: 'Enroll Now'
    },
    
    // Home Page
    home: {
      badge: 'Speak Fluently ✨',
      hero: {
        title: 'Learn how to communicate in English with real native',
        titleHighlight: 'speakers',
        subtitle: 'English learning with a very modern edge',
        exploreCourses: 'Explore Courses',
        contactTelegram: 'Contact on Telegram'
      },
      whyChoose: {
        title: 'Why we are the best ESL school?',
        feature1: {
          title: 'Talented Native English teachers',
          description: 'Our talented, dedicated teachers prioritise helping students communicate in English in a natural manner.'
        },
        feature2: {
          title: 'Flexible Scheduling',
          description: 'Learn at your own pace with class times that fit your lifestyle.'
        },
        feature3: {
          title: 'Interactive Learning',
          description: 'Engaging lessons filled with conversations, activities, and real-world English usage.'
        },
        feature4: {
          title: 'Global Community',
          description: 'Connect with teachers and students from around the world and experience authentic communication.'
        }
      },
      vision: {
        badge: 'Our Vision, Mission and Values',
        title: 'We transform the learning Experience',
        subtitle: 'At Oakwood ESL, our mission is to provide holistic, inclusive support for all students to achieve their goals of communicating in English and to grow their unique talents so that they find joy and fulfillment in higher education, career, and life',
        card1: {
          title: 'Our Mission: Every Student, Every Success',
          description: 'We create a supportive, inclusive learning environment where students from all backgrounds discover their potential and achieve their English language goals.'
        },
        card2: {
          title: 'Values in Action',
          description: 'Excellence, respect, inclusivity, and joy—see our values come alive in every lesson.'
        },
        card3: {
          title: 'Visionary Learning',
          description: 'We envision a world where language opens doors—to education, careers, and meaningful connections.'
        },
        card4: {
          title: 'Personalized Support',
          description: 'Dedicated teachers and mentors who believe in you, understand your goals, and guide you every step forward.'
        },
        card5: {
          title: 'Inclusive Community',
          description: 'Join a vibrant, welcoming community where diversity is celebrated and every voice matters.'
        },
        quote: '"At Oakwood ESL, we are committed to transforming the English learning experience. From the moment you have your first lesson with us, you will notice the difference. Beyond the warm welcome and inviting environment is a team of highly trained teachers, administrators and support personnel, all of whom share the goal of ensuring that our students are highly engaged in their English learning journey and feel 100% confident using the English language."',
        quoteAuthor: '— The Oakwood ESL Team'
      },
      impact: {
        title: 'Our Impact',
        students: 'Active Students and growing',
        teachers: 'Expert Native English teachers',
        countries: 'Countries Represented'
      },
      cta: {
        title: 'Ready to Start Your Journey?',
        subtitle: 'Get your first trial lesson at 50% off! Begin with a consultation to find the perfect package for you.',
        viewPricing: 'View Pricing & Packages',
        exploreCourses: 'Explore All Courses'
      }
    },
    
    // Courses Page
    courses: {
      badge: 'Our Learning Formats',
      hero: {
        title: 'Choose Your Perfect Learning Path',
        subtitle: 'Three flexible formats designed to fit your lifestyle and accelerate your English proficiency'
      },
      individual: {
        title: 'Individual Lessons',
        description: 'One-on-one personalized lessons tailored to your specific needs and goals',
        feature1: 'Customized curriculum',
        feature2: 'One-on-one attention',
        feature3: 'Flexible scheduling',
        feature4: 'Progress tracking',
        feature5: 'Minimum 3 lessons'
      },
      group: {
        title: 'Group Lessons (2-3 Students)',
        description: 'Interactive lessons in small groups for collaborative learning and peer support',
        feature1: 'Collaborative learning',
        feature2: 'Group activities',
        feature3: 'Affordable pricing',
        feature4: 'Social interaction',
        feature5: 'Minimum 3 lessons'
      },
      club: {
        title: 'Speaking Club',
        description: 'Join our dynamic speaking club for conversation practice and networking',
        feature1: 'Free conversation practice',
        feature2: 'Group discussions',
        feature3: 'Cultural exchange',
        feature4: 'Community building',
        feature5: 'Minimum 3 sessions'
      },
      learnMore: 'Learn More',
      booksTitle: 'Our Course Books',
      booksSubtitle: 'Comprehensive workbooks designed to build strong phonemic awareness and reading skills',
      book1: {
        title: 'Level One',
        subtitle: 'Phonemic Awareness'
      },
      book2: {
        title: 'Coloring Book',
        subtitle: 'Phonemic Awareness'
      },
      book3: {
        title: 'Level Two',
        subtitle: 'Phonemic Awareness'
      },
      book4: {
        title: 'Level Three',
        subtitle: 'Phonemic Awareness'
      },
      howItWorks: {
        title: 'How It Works',
        subtitle: 'Start your English learning journey in just four simple steps',
        step1: {
          title: 'Choose Your Package',
          description: 'Select the learning format that best fits your needs and goals'
        },
        step2: {
          title: 'Trial Lesson',
          description: 'Get 50% off your first session and meet our instructors'
        },
        step3: {
          title: 'Meet Your Teacher',
          description: 'Connect with an expert instructor matched to your level'
        },
        step4: {
          title: 'Start Learning',
          description: 'Begin your journey with a minimum of 3 lessons for continuity'
        }
      },
      finalCta: {
        title: 'Ready to Transform Your English?',
        subtitle: 'Start with your first trial lesson at 50% off and experience personalized learning',
        button: 'Explore All Packages'
      }
    },
    
    // Pricing Page
    pricing: {
      badge: 'Pricing & Packages',
      hero: {
        title: 'Simple, Transparent Pricing',
        subtitle: 'Choose your perfect plan and start learning English with confidence'
      },
      mostPopular: 'MOST POPULAR',
      recommended: 'RECOMMENDED',
      trialLesson: 'First Lesson Trial',
      offFirstSession: '50% off your first session',
      regularPrice: 'Regular Price per Lesson',
      minimumPackage: 'Minimum Package',
      lessons: 'lessons',
      whatsIncluded: "What's Included",
      getStarted: 'Get Started',
      newStudent: {
        title: '🎁 New Student Special',
        description: 'Get your first trial lesson at 50% off to ensure we\'re the perfect fit for you!'
      },
      commitment: {
        title: '📋 Minimum Commitment',
        description: 'All packages require a minimum of 3 lessons to ensure continuity and measurable progress.'
      },
      comparison: {
        title: 'Feature Comparison',
        feature: 'Feature',
        personalizedCurriculum: 'Personalized Curriculum',
        oneOnOne: 'One-on-One Sessions',
        groupInteraction: 'Group Interaction',
        flexibleScheduling: 'Flexible Scheduling',
        progressReports: 'Progress Reports',
        speakingPractice: 'Speaking Practice'
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Find answers to common questions about our pricing and packages',
        q1: 'Can I switch between packages?',
        a1: 'You can transition between Individual, Group, or Speaking Club formats at any time. Just contact us to discuss your options.',
        q2: 'What if I want more lessons beyond the minimum?',
        a2: 'You can continue with as many additional lessons as you want. Each extra lesson is billed at the regular rate for that package.',
        q3: 'How do I schedule my lessons?',
        a3: 'After enrollment, you\'ll coordinate directly with your teacher for scheduling. We offer flexible timing across morning, afternoon, and evening slots.',
        q4: 'What\'s your cancellation policy?',
        a4: 'We require 24 hours notice for cancellations. Lessons canceled with proper notice can be rescheduled for another time.',
        q5: 'Do you offer corporate training?',
        a5: 'Yes! We offer customized corporate packages for teams and organizations. Contact us for a tailored quote.',
        q6: 'What payment methods do you accept?',
        a6: 'We accept bank transfers, cash, and various digital payments methods. Contact our team for specific payment details.'
      },
      finalCta: {
        title: 'Ready to Start Learning?',
        subtitle: 'Book your 50% off trial lesson today and take the first step toward fluent English',
        telegram: 'Chat on Telegram',
        email: 'Email Us'
      }
    },
    
    // Contact Page
    contact: {
      badge: 'Get in Touch',
      hero: {
        title: 'Contact Us',
        subtitle: 'Have questions? We\'d love to hear from you. Reach out to us through any of these channels.'
      },
      telegram: {
        title: 'Telegram',
        description: 'Connect with us on Telegram for quick responses and instant updates about your lessons.',
        button: 'Message Us'
      },
      email: {
        title: 'Email',
        description: 'Send us an email with your inquiry and we\'ll respond within 24 hours.'
      },
      phone: {
        title: 'Phone',
        description: 'Call us directly to speak with our team and schedule your trial lesson.'
      },
      form: {
        title: 'Send us a Message',
        subtitle: 'Fill out the form and we\'ll get back to you as soon as possible. Whether you have questions about our courses, pricing, or just want to say hello, we\'re here to help.',
        officeLocation: 'Office Location',
        officeLocationText: 'Available for online and offline lessons',
        responseTime: 'Response Time',
        responseTimeText: 'We typically respond within 24 hours',
        fullName: 'Full Name',
        emailAddress: 'Email Address',
        phoneNumber: 'Phone Number (Optional)',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        namePlaceholder: 'John Doe',
        emailPlaceholder: 'you@example.com',
        phonePlaceholder: '+1 (234) 567-890',
        subjectPlaceholder: 'How can we help?',
        messagePlaceholder: 'Tell us more about your inquiry...'
      },
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Quick answers to help you get started',
        q1: 'What are your typical response times?',
        a1: 'We aim to respond to all inquiries within 24 hours on weekdays. Telegram messages are typically answered even faster.',
        q2: 'Can I book a trial lesson directly?',
        a2: 'Yes! Contact us through Telegram, email, or use our contact form to book your 50% off trial lesson.',
        q3: 'Do you offer offline lessons?',
        a3: 'We primarily offer online lessons for flexibility, but we can discuss custom arrangements based on your needs.',
        q4: 'What if I have questions about specific courses?',
        a4: 'Visit our Courses page for detailed information, or contact us directly for personalized recommendations.'
      },
      finalCta: {
        title: 'Ready to Start Your Journey?',
        subtitle: 'Don\'t wait! Book your 50% off trial lesson today and take the first step toward fluent English.',
        button: 'Explore Our Packages'
      }
    },
    
    // Booking Page
    booking: {
      badge: '50% Off Your First Lesson',
      hero: {
        title: 'Book Your Trial Lesson',
        subtitle: 'Start your English learning journey today. Choose your course, pick a time, and get ready to speak fluently with native teachers.'
      },
      benefits: {
        trial: {
          title: '50% Off Trial',
          description: 'Your first lesson at half price'
        },
        teachers: {
          title: 'Native Teachers',
          description: 'Learn from expert native speakers'
        },
        schedule: {
          title: 'Flexible Schedule',
          description: 'Choose times that work for you'
        },
        commitment: {
          title: 'No Commitment',
          description: 'Try before you commit to a package'
        }
      },
      form: {
        title: 'Complete Your Booking',
        subtitle: 'Fill out the form below and we\'ll get back to you within 24 hours to confirm your trial lesson.',
        personalInfo: 'Personal Information',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email Address',
        phone: 'Phone Number',
        courseSelection: 'Course Selection',
        courseType: 'Course Type',
        selectCourse: 'Select a course',
        general: 'General English',
        business: 'Business English',
        conversation: 'Conversation Practice',
        exam: 'Exam Preparation (IELTS/TOEFL)',
        kids: 'English for Kids',
        intensive: 'Intensive Course',
        level: 'Current Level',
        selectLevel: 'Select your level',
        beginner: 'Beginner (A1)',
        elementary: 'Elementary (A2)',
        intermediate: 'Intermediate (B1)',
        upperIntermediate: 'Upper Intermediate (B2)',
        advanced: 'Advanced (C1)',
        proficient: 'Proficient (C2)',
        notSure: 'Not Sure',
        packageType: 'Interested Package',
        selectPackage: 'Select a package',
        individual: 'Individual Lessons',
        group: 'Group Lessons',
        club: 'Speaking Club',
        homeVisit: 'Home Visit',
        custom: 'Customise Package',
        scheduling: 'Scheduling Preferences',
        preferredDate: 'Preferred Start Date',
        preferredTime: 'Preferred Time',
        selectTime: 'Select a time slot',
        morning: 'Morning (9:00 AM - 12:00 PM)',
        afternoon: 'Afternoon (12:00 PM - 5:00 PM)',
        evening: 'Evening (5:00 PM - 9:00 PM)',
        flexible: 'Flexible',
        goals: 'Learning Goals (Optional)',
        goalsPlaceholder: 'Tell us about your English learning goals and what you hope to achieve...',
        hearAboutUs: 'How did you hear about us? (Optional)',
        selectOption: 'Select an option',
        google: 'Google Search',
        social: 'Social Media',
        friend: 'Friend or Family',
        telegram: 'Telegram',
        advertisement: 'Advertisement',
        other: 'Other',
        submit: 'Book My Trial Lesson',
        submitting: 'Submitting...',
        terms: 'By submitting this form, you agree to our terms and privacy policy.',
        firstNamePlaceholder: 'John',
        lastNamePlaceholder: 'Doe',
        emailPlaceholder: 'you@example.com',
        phonePlaceholder: '+1 (234) 567-890'
      },
      sidebar: {
        help: 'Need Help?',
        helpText: 'Contact us directly on Telegram for instant assistance with your booking.',
        messageTelegram: 'Message on Telegram',
        whatNext: 'What Happens Next?',
        step1: 'We review your booking request',
        step2: 'Receive confirmation within 24 hours',
        step3: 'Get matched with your teacher',
        step4: 'Start your trial lesson!',
        whyBook: 'Why Book With Us?',
        activeStudents: '25+ Active Students',
        nativeTeachers: '10+ Native Teachers',
        flexibleSchedule: 'Flexible Schedule',
        moneyBack: 'Money-Back Guarantee'
      },
      faq: {
        title: 'Booking FAQs',
        q1: 'What\'s included in the trial lesson?',
        a1: 'A full 60-minute session with a native teacher, level assessment, and personalized learning plan.',
        q2: 'Can I choose my teacher?',
        a2: 'Yes! We\'ll match you based on your preferences and you can request changes anytime.',
        q3: 'What if I need to reschedule?',
        a3: 'You can reschedule up to 24 hours before your lesson with no penalty.',
        q4: 'Do I need to commit to a package?',
        a4: 'Not at all! The trial lesson has no commitment. Choose a package only if you\'re satisfied.'
      },
      altCta: {
        title: 'Not Ready to Book Yet?',
        subtitle: 'Explore our courses and pricing to find the perfect package for your English learning journey.',
        viewCourses: 'View All Courses',
        seePricing: 'See Pricing'
      },
      alerts: {
        success: 'Booking request submitted successfully! We\'ll contact you soon to confirm your trial lesson.',
        error: 'Failed to submit booking. Please try again or contact us via Telegram.'
      }
    },
    
    // Footer
    footer: {
      aboutUs: 'About Us',
      aboutText: 'Oakwood ESL is a dynamic and down-to-earth English school that nurtures bright and imaginative students. We focus on real communication and prepare our students for real life situations.',
      quickLinks: 'Quick Links',
      courses: 'Courses',
      pricing: 'Pricing',
      home: 'Home',
      contact: 'Contact',
      followUs: 'Follow Us',
      rights: '© 2025 Oakwood ESL. All rights reserved.'
    }
  }
}

export const getTranslation = (lang: Language, key: string): string => {
  const keys = key.split('.')
  let value: any = translations[lang]
  
  for (const k of keys) {
    value = value?.[k]
  }
  
  return value || key
}
