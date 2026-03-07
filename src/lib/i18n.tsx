import React, { createContext, useContext, useState, ReactNode } from "react";

export type Language = "en" | "tr" | "vi" | "ru";

type TranslationKeys = {
  nav: {
    home: string;
    services: string;
    howItWorks: string;
    about: string;
    contact: string;
    news: string;
    forAgencies: string;
    freeConsultation: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta1: string;
    cta2: string;
    stat1: string;
    stat1Label: string;
    stat2: string;
    stat2Label: string;
    stat3: string;
    stat3Label: string;
  };
  services: {
    title: string;
    subtitle: string;
    s1Title: string;
    s1Desc: string;
    s2Title: string;
    s2Desc: string;
    s3Title: string;
    s3Desc: string;
    s4Title: string;
    s4Desc: string;
  };
  howItWorks: {
    title: string;
    subtitle: string;
    step1: string;
    step1Desc: string;
    step2: string;
    step2Desc: string;
    step3: string;
    step3Desc: string;
    step4: string;
    step4Desc: string;
    step5: string;
    step5Desc: string;
  };
  about: {
    title: string;
    subtitle: string;
    p1: string;
    p2: string;
  };
  contact: {
    title: string;
    subtitle: string;
    messageUs: string;
    visitPage: string;
    email: string;
    workingHours: string;
    workingHoursValue: string;
    satValue: string;
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    photo: string;
    video: string;
    review: string;
    noItems: string;
  };
  agencies: {
    title: string;
    subtitle: string;
    benefit1Title: string;
    benefit1Desc: string;
    benefit2Title: string;
    benefit2Desc: string;
    benefit3Title: string;
    benefit3Desc: string;
    benefit4Title: string;
    benefit4Desc: string;
    cta: string;
    ctaDesc: string;
    whyTitle: string;
    howTitle: string;
    ctaTitle: string;
    step1: string;
    step2: string;
    step3: string;
    step4: string;
  };
  hint: {
    langTitle: string;
    langDesc: string;
  };
  news: {
    title: string;
    subtitle: string;
    backHome: string;
    noNews: string;
    readMore: string;
  };
  footer: {
    rights: string;
    tagline: string;
  };
};

const translations: Record<Language, TranslationKeys> = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      howItWorks: "How It Works",
      about: "About Us",
      contact: "Contact",
      news: "News",
      forAgencies: "For Agencies",
      freeConsultation: "Free Consultation",
    },
    hero: {
      title: "Official Employment in EU Countries",
      subtitle: "We are a licensed agency helping citizens from different countries live, work and develop legally in Europe. Safety, transparency and stability for every client.",
      cta1: "Message Us on Facebook",
      cta2: "Our Services",
      stat1: "5+",
      stat1Label: "Years Experience",
      stat2: "500+",
      stat2Label: "Successful Cases",
      stat3: "10+",
      stat3Label: "EU Countries",
    },
    services: {
      title: "Our Services",
      subtitle: "All services are provided officially, with legal guarantees and contract conclusion",
      s1Title: "Job Placement in EU",
      s1Desc: "Selection of verified vacancies in EU countries with official employment and social protection.",
      s2Title: "Document Processing",
      s2Desc: "Preparation and processing of documents for visa, residence permit and work permit in accordance with EU legislation.",
      s3Title: "Legal Support",
      s3Desc: "Full legal support of the employment process and legalization of stay in the country.",
      s4Title: "Post-Arrival Support",
      s4Desc: "Assistance with housing, registration and adaptation in the new country for a comfortable relocation.",
    },
    howItWorks: {
      title: "How It Works",
      subtitle: "Simple 5-step process to your new career in Europe",
      step1: "Application",
      step1Desc: "Submit an application or contact us via Facebook Messenger.",
      step2: "Consultation",
      step2Desc: "Free consultation to help choose the right country and vacancy.",
      step3: "Document Check",
      step3Desc: "We analyze your documents and prepare the complete package.",
      step4: "Registration",
      step4Desc: "Official employment registration through European partners.",
      step5: "Departure & Work",
      step5Desc: "Receive your visa, arrive in the country and start working legally.",
    },
    about: {
      title: "About Us",
      subtitle: "Trusted by hundreds of clients across the globe",
      p1: "Global Bridges INT. is an official international employment agency, registered and operating under EU law. We have been in the market for over 5 years and have helped hundreds of people obtain work permits, residence permits and stable positions in Europe.",
      p2: "We believe that everyone deserves the opportunity to live with dignity and work legally. Our specialists speak several languages, understand the peculiarities of migration legislation of different countries and make the process as comfortable as possible.",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Contact us directly through Facebook or email",
      messageUs: "Message Us",
      visitPage: "Visit Our Page",
      email: "Email Us",
      workingHours: "Working Hours",
      workingHoursValue: "Mon-Fri: 9:00-18:00",
      satValue: "Sat: 10:00-15:00",
    },
    blog: {
      title: "Blog & Reviews",
      subtitle: "Photos, videos and testimonials from our clients",
      readMore: "Read More",
      photo: "Photo",
      video: "Video",
      review: "Review",
      noItems: "No blog posts yet. Check back soon!",
    },
    agencies: {
      title: "For Recruitment Agencies",
      subtitle: "Partner with us to place your candidates in EU positions",
      benefit1Title: "Ready Candidate Pool",
      benefit1Desc: "Already have candidates? We handle the EU placement, documents and legal compliance for your workforce.",
      benefit2Title: "Revenue Sharing",
      benefit2Desc: "Earn commission on every successful placement through our transparent partnership program.",
      benefit3Title: "Legal Framework",
      benefit3Desc: "Full EU-compliant employment contracts, social insurance and work permits handled by our legal team.",
      benefit4Title: "Dedicated Support",
      benefit4Desc: "Personal account manager for your agency with priority processing and regular reporting.",
      cta: "Become a Partner",
      ctaDesc: "Contact us to discuss partnership opportunities and start placing your candidates in EU positions.",
    },
    news: {
      title: "Latest News",
      subtitle: "Stay updated with the latest from Global Bridges INT.",
      backHome: "← Back to Home",
      noNews: "No news articles yet. Stay tuned!",
      readMore: "Read Full Article",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Your bridge to a better future in Europe.",
    },
  },
  tr: {
    nav: {
      home: "Ana Sayfa",
      services: "Hizmetler",
      howItWorks: "Nasıl Çalışır",
      about: "Hakkımızda",
      contact: "İletişim",
      news: "Haberler",
      forAgencies: "Ajanslara",
      freeConsultation: "Ücretsiz Danışmanlık",
    },
    hero: {
      title: "AB Ülkelerinde Resmi İstihdam",
      subtitle: "Farklı ülkelerin vatandaşlarının Avrupa'da yasal olarak yaşamalarına, çalışmalarına ve gelişmelerine yardımcı olan lisanslı bir ajanstır.",
      cta1: "Facebook'tan Mesaj Gönder",
      cta2: "Hizmetlerimiz",
      stat1: "5+",
      stat1Label: "Yıllık Deneyim",
      stat2: "500+",
      stat2Label: "Başarılı Vaka",
      stat3: "10+",
      stat3Label: "AB Ülkesi",
    },
    services: {
      title: "Hizmetlerimiz",
      subtitle: "Tüm hizmetler resmi olarak, yasal garantiler ve sözleşme ile sağlanmaktadır",
      s1Title: "AB'de İş Yerleştirme",
      s1Desc: "Resmi istihdam ve sosyal koruma ile AB ülkelerinde doğrulanmış iş ilanlarının seçimi.",
      s2Title: "Belge İşleme",
      s2Desc: "AB mevzuatına uygun vize, oturma izni ve çalışma izni belgelerinin hazırlanması.",
      s3Title: "Hukuki Destek",
      s3Desc: "İstihdam sürecinin ve ülkede kalışın yasallaştırılmasının tam hukuki desteği.",
      s4Title: "Varış Sonrası Destek",
      s4Desc: "Yeni ülkede konut, kayıt ve uyum konusunda yardım.",
    },
    howItWorks: {
      title: "Nasıl Çalışır",
      subtitle: "Avrupa'daki yeni kariyerinize 5 basit adım",
      step1: "Başvuru",
      step1Desc: "Başvuru yapın veya Facebook Messenger üzerinden bize ulaşın.",
      step2: "Danışmanlık",
      step2Desc: "Doğru ülke ve pozisyonu seçmenize yardımcı olmak için ücretsiz danışmanlık.",
      step3: "Belge Kontrolü",
      step3Desc: "Belgelerinizi analiz edip eksiksiz paketi hazırlıyoruz.",
      step4: "Kayıt",
      step4Desc: "Avrupa ortakları aracılığıyla resmi istihdam kaydı.",
      step5: "Yolculuk ve İş",
      step5Desc: "Vizeni al, ülkeye var ve yasal olarak çalışmaya başla.",
    },
    about: {
      title: "Hakkımızda",
      subtitle: "Dünya genelinde yüzlerce müşteri tarafından güvenilmektedir",
      p1: "Global Bridges INT., AB hukuku kapsamında kayıtlı ve faaliyet gösteren resmi bir uluslararası istihdam ajansıdır. 5 yılı aşkın süredir piyasadayız ve yüzlerce kişinin çalışma izni, oturma izni ve Avrupa'da istikrarlı pozisyon elde etmesine yardımcı olduk.",
      p2: "Herkesin onurlu bir şekilde yaşama ve yasal olarak çalışma hakkı olduğuna inanıyoruz.",
    },
    contact: {
      title: "İletişime Geçin",
      subtitle: "Facebook veya e-posta yoluyla doğrudan bize ulaşın",
      messageUs: "Mesaj Gönder",
      visitPage: "Sayfamızı Ziyaret Edin",
      email: "E-posta Gönderin",
      workingHours: "Çalışma Saatleri",
      workingHoursValue: "Pzt-Cum: 9:00-18:00",
      satValue: "Cts: 10:00-15:00",
    },
    blog: {
      title: "Blog & Yorumlar",
      subtitle: "Müşterilerimizden fotoğraflar, videolar ve referanslar",
      readMore: "Devamını Oku",
      photo: "Fotoğraf",
      video: "Video",
      review: "Yorum",
      noItems: "Henüz blog yazısı yok. Yakında tekrar kontrol edin!",
    },
    agencies: {
      title: "İşe Alım Ajansları İçin",
      subtitle: "Adaylarınızı AB pozisyonlarına yerleştirmek için bizimle ortak olun",
      benefit1Title: "Hazır Aday Havuzu",
      benefit1Desc: "Zaten adaylarınız mı var? AB yerleştirme, belge ve yasal uyumu biz hallederiz.",
      benefit2Title: "Gelir Paylaşımı",
      benefit2Desc: "Şeffaf ortaklık programımız aracılığıyla her başarılı yerleştirmede komisyon kazanın.",
      benefit3Title: "Yasal Çerçeve",
      benefit3Desc: "AB uyumlu iş sözleşmeleri, sosyal sigorta ve çalışma izinleri hukuk ekibimiz tarafından yürütülür.",
      benefit4Title: "Özel Destek",
      benefit4Desc: "Öncelikli işlem ve düzenli raporlama ile ajansınız için kişisel hesap yöneticisi.",
      cta: "Ortak Olun",
      ctaDesc: "Ortaklık fırsatlarını görüşmek ve adaylarınızı AB pozisyonlarına yerleştirmeye başlamak için bize ulaşın.",
    },
    news: {
      title: "Son Haberler",
      subtitle: "Global Bridges INT.'den en son güncellemelerle haberdar olun",
      backHome: "← Ana Sayfaya Dön",
      noNews: "Henüz haber yok. Takipte kalın!",
      readMore: "Tam Makaleyi Oku",
    },
    footer: {
      rights: "Tüm hakları saklıdır.",
      tagline: "Avrupa'da daha iyi bir geleceğe köprünüz.",
    },
  },
  vi: {
    nav: {
      home: "Trang chủ",
      services: "Dịch vụ",
      howItWorks: "Cách thức",
      about: "Về chúng tôi",
      contact: "Liên hệ",
      news: "Tin tức",
      forAgencies: "Cho đại lý",
      freeConsultation: "Tư vấn miễn phí",
    },
    hero: {
      title: "Việc làm chính thức tại các nước EU",
      subtitle: "Chúng tôi là cơ quan được cấp phép giúp công dân từ các quốc gia khác nhau sống, làm việc và phát triển hợp pháp tại Châu Âu.",
      cta1: "Nhắn tin qua Facebook",
      cta2: "Dịch vụ của chúng tôi",
      stat1: "5+",
      stat1Label: "Năm kinh nghiệm",
      stat2: "500+",
      stat2Label: "Trường hợp thành công",
      stat3: "10+",
      stat3Label: "Quốc gia EU",
    },
    services: {
      title: "Dịch vụ của chúng tôi",
      subtitle: "Tất cả dịch vụ được cung cấp chính thức, với bảo đảm pháp lý và hợp đồng",
      s1Title: "Tuyển dụng tại EU",
      s1Desc: "Lựa chọn việc làm đã xác minh tại các nước EU với việc làm chính thức và bảo trợ xã hội.",
      s2Title: "Xử lý giấy tờ",
      s2Desc: "Chuẩn bị và xử lý giấy tờ xin thị thực, giấy phép cư trú và giấy phép lao động theo luật EU.",
      s3Title: "Hỗ trợ pháp lý",
      s3Desc: "Hỗ trợ pháp lý toàn diện trong quá trình tuyển dụng và hợp pháp hóa cư trú.",
      s4Title: "Hỗ trợ sau khi đến",
      s4Desc: "Hỗ trợ nhà ở, đăng ký và thích nghi tại quốc gia mới.",
    },
    howItWorks: {
      title: "Cách thức hoạt động",
      subtitle: "Quy trình 5 bước đơn giản cho sự nghiệp mới tại Châu Âu",
      step1: "Đăng ký",
      step1Desc: "Nộp đơn hoặc liên hệ qua Facebook Messenger.",
      step2: "Tư vấn",
      step2Desc: "Tư vấn miễn phí để chọn quốc gia và vị trí phù hợp.",
      step3: "Kiểm tra hồ sơ",
      step3Desc: "Chúng tôi phân tích hồ sơ và chuẩn bị bộ tài liệu hoàn chỉnh.",
      step4: "Đăng ký",
      step4Desc: "Đăng ký việc làm chính thức thông qua đối tác Châu Âu.",
      step5: "Khởi hành & Làm việc",
      step5Desc: "Nhận thị thực, đến quốc gia và bắt đầu làm việc hợp pháp.",
    },
    about: {
      title: "Về chúng tôi",
      subtitle: "Được hàng trăm khách hàng trên toàn thế giới tin tưởng",
      p1: "Global Bridges INT. là cơ quan tuyển dụng quốc tế chính thức, đăng ký và hoạt động theo luật EU. Chúng tôi đã có mặt trên thị trường hơn 5 năm.",
      p2: "Chúng tôi tin rằng mọi người đều xứng đáng có cơ hội sống xứng đáng và làm việc hợp pháp.",
    },
    contact: {
      title: "Liên hệ",
      subtitle: "Liên hệ trực tiếp qua Facebook hoặc email",
      messageUs: "Nhắn tin cho chúng tôi",
      visitPage: "Thăm trang của chúng tôi",
      email: "Gửi email",
      workingHours: "Giờ làm việc",
      workingHoursValue: "T2-T6: 9:00-18:00",
      satValue: "T7: 10:00-15:00",
    },
    blog: {
      title: "Blog & Đánh giá",
      subtitle: "Hình ảnh, video và lời chứng thực từ khách hàng",
      readMore: "Đọc thêm",
      photo: "Ảnh",
      video: "Video",
      review: "Đánh giá",
      noItems: "Chưa có bài viết. Hãy quay lại sau!",
    },
    agencies: {
      title: "Dành cho đại lý tuyển dụng",
      subtitle: "Hợp tác với chúng tôi để đưa ứng viên của bạn vào vị trí EU",
      benefit1Title: "Sẵn sàng ứng viên",
      benefit1Desc: "Đã có ứng viên? Chúng tôi xử lý việc bố trí EU, giấy tờ và tuân thủ pháp lý.",
      benefit2Title: "Chia sẻ doanh thu",
      benefit2Desc: "Kiếm hoa hồng cho mỗi lần bố trí thành công qua chương trình đối tác minh bạch.",
      benefit3Title: "Khung pháp lý",
      benefit3Desc: "Hợp đồng lao động, bảo hiểm xã hội và giấy phép lao động tuân thủ EU.",
      benefit4Title: "Hỗ trợ chuyên biệt",
      benefit4Desc: "Quản lý tài khoản cá nhân cho đại lý với xử lý ưu tiên.",
      cta: "Trở thành đối tác",
      ctaDesc: "Liên hệ để thảo luận cơ hội hợp tác.",
    },
    news: {
      title: "Tin tức mới nhất",
      subtitle: "Cập nhật tin tức mới nhất từ Global Bridges INT.",
      backHome: "← Về trang chủ",
      noNews: "Chưa có tin tức. Hãy theo dõi!",
      readMore: "Đọc bài đầy đủ",
    },
    footer: {
      rights: "Mọi quyền được bảo lưu.",
      tagline: "Cầu nối của bạn đến tương lai tốt đẹp hơn tại Châu Âu.",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      services: "Услуги",
      howItWorks: "Как это работает",
      about: "О нас",
      contact: "Контакты",
      news: "Новости",
      forAgencies: "Для агентств",
      freeConsultation: "Бесплатная консультация",
    },
    hero: {
      title: "Официальное трудоустройство в странах EU",
      subtitle: "Мы — лицензированное агентство, помогающее гражданам разных стран жить, работать и развиваться в Европе на законных основаниях. Безопасность, прозрачность и стабильность для каждого клиента.",
      cta1: "Написать в Facebook",
      cta2: "Наши услуги",
      stat1: "5+",
      stat1Label: "Лет опыта",
      stat2: "500+",
      stat2Label: "Успешных кейсов",
      stat3: "10+",
      stat3Label: "Стран ЕС",
    },
    services: {
      title: "Наши услуги",
      subtitle: "Все услуги предоставляются официально, с юридическими гарантиями и заключением договора",
      s1Title: "Трудоустройство в ЕС",
      s1Desc: "Подбор проверенных вакансий в странах ЕС с официальным трудоустройством и социальной защитой.",
      s2Title: "Оформление документов",
      s2Desc: "Подготовка и оформление документов на визу, вид на жительство и разрешение на работу.",
      s3Title: "Юридическая поддержка",
      s3Desc: "Полное юридическое сопровождение процесса трудоустройства и легализации пребывания.",
      s4Title: "Поддержка после приезда",
      s4Desc: "Помощь с жильём, регистрацией и адаптацией в новой стране.",
    },
    howItWorks: {
      title: "Как это работает",
      subtitle: "Простой процесс из 5 шагов к вашей новой карьере в Европе",
      step1: "Заявка",
      step1Desc: "Подайте заявку или свяжитесь с нами через Facebook Messenger.",
      step2: "Консультация",
      step2Desc: "Бесплатная консультация для выбора подходящей страны и вакансии.",
      step3: "Проверка документов",
      step3Desc: "Мы анализируем ваши документы и готовим полный пакет.",
      step4: "Оформление",
      step4Desc: "Официальное оформление трудоустройства через европейских партнёров.",
      step5: "Выезд и работа",
      step5Desc: "Получите визу, приезжайте в страну и начинайте работать легально.",
    },
    about: {
      title: "О нас",
      subtitle: "Нам доверяют сотни клиентов по всему миру",
      p1: "Global Bridges INT. — официальное международное агентство по трудоустройству, зарегистрированное и работающее в рамках законодательства ЕС. Мы на рынке более 5 лет и помогли сотням людей получить разрешения на работу, вид на жительство и стабильные позиции в Европе.",
      p2: "Мы верим, что каждый человек заслуживает возможности жить достойно и работать легально. Наши специалисты говорят на нескольких языках и делают процесс максимально комфортным.",
    },
    contact: {
      title: "Свяжитесь с нами",
      subtitle: "Свяжитесь с нами напрямую через Facebook или по электронной почте",
      messageUs: "Написать нам",
      visitPage: "Наша страница",
      email: "Написать на почту",
      workingHours: "Часы работы",
      workingHoursValue: "Пн-Пт: 9:00-18:00",
      satValue: "Сб: 10:00-15:00",
    },
    blog: {
      title: "Блог и отзывы",
      subtitle: "Фото, видео и отзывы наших клиентов",
      readMore: "Читать далее",
      photo: "Фото",
      video: "Видео",
      review: "Отзыв",
      noItems: "Публикаций пока нет. Загляните позже!",
    },
    agencies: {
      title: "Для кадровых агентств",
      subtitle: "Станьте нашим партнёром и размещайте своих кандидатов на позиции в ЕС",
      benefit1Title: "Готовые кандидаты",
      benefit1Desc: "Уже есть кандидаты? Мы берём на себя трудоустройство в ЕС, документы и юридическое соответствие.",
      benefit2Title: "Распределение дохода",
      benefit2Desc: "Получайте комиссию за каждое успешное трудоустройство через нашу прозрачную партнёрскую программу.",
      benefit3Title: "Правовая база",
      benefit3Desc: "Трудовые договоры, социальное страхование и рабочие разрешения в соответствии с законодательством ЕС.",
      benefit4Title: "Персональная поддержка",
      benefit4Desc: "Персональный менеджер для вашего агентства с приоритетной обработкой и регулярной отчётностью.",
      cta: "Стать партнёром",
      ctaDesc: "Свяжитесь с нами, чтобы обсудить возможности партнёрства и начать размещать кандидатов.",
    },
    news: {
      title: "Последние новости",
      subtitle: "Будьте в курсе последних обновлений от Global Bridges INT.",
      backHome: "← На главную",
      noNews: "Новостей пока нет. Следите за обновлениями!",
      readMore: "Читать полностью",
    },
    footer: {
      rights: "Все права защищены.",
      tagline: "Ваш мост к лучшему будущему в Европе.",
    },
  },
};

type I18nContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationKeys;
};

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Language>("en");
  const t = translations[lang];
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};

export const langLabels: Record<Language, string> = {
  en: "English",
  tr: "Türkçe",
  vi: "Tiếng Việt",
  ru: "Русский",
};
