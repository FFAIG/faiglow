// ── SHARED ───────────────────────────────────────────────────────────────────
const twoColShared = [
  {
    heading: "KİŞİSELLEŞTİRME",
    lines: [
      "QR içeriğini ve tasarım detaylarını özelleştirin.",
      "Tek dokunuşla kendi dijital deneyiminizi oluşturun.",
      "Işığı, QR'ı ve tasarımı size göre yapılandırın.",
    ],
  },
  {
    heading: "İLETİŞİM",
    lines: [
      "E-mail, İnstagram",
      "aracılığıyla bize ulaşabilirsiniz.",
    ],
  },
];

// ── SITE CONFIG (layout + Header + Footer) ───────────────────────────────────
export const siteConfig = {
  siteName: "FAI",
  siteUrl: "https://faiglow.com",
  logo: {
    src: "/FAILOGOSON.png",
    alt: "FAI",
    headerW: 340,
    headerH: 136,
    footerW: 100,
    footerH: 40,
  },
  instagram: {
    url: "https://www.instagram.com/fai.glow/",
    label: "FAI Instagram",
  },
  defaultMetadata: {
    title: {
      default: "FAI QR LED Ayna",
      template: "%s – FAI",
    },
    description:
      "FAI QR LED Işıklı Ayna ile mekânınıza dijital deneyim katın. Uygulama gerektirmeyen temassız QR paylaşım.",
    openGraph: {
      siteName: "FAI",
      locale: "tr_TR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
    },
    robots: {
      index: true,
      follow: true,
    },
  },
  footer: {
    columns: [
      { heading: "ONLINE", text: "QR Oluşturun" },
      { heading: "BİZE ULAŞIN", text: "E-mail" },
      {
        heading: "FAI",
        links: [
          { href: "/gizlilik", label: "Gizlilik Sözleşmesi" },
          { href: "/cerez", label: "Çerez Politikası" },
        ],
        copyright: "© 2026 FAI Tüm hakları saklıdır.",
      },
    ],
  },
};

// ── HOME PAGE ────────────────────────────────────────────────────────────────
export const homeContent = {
  metadata: {
    title: "FAI QR LED Ayna – Dijital Etkileşimli Ayna",
    description:
      "FAI QR LED Işıklı Ayna ile mekânınıza dijital deneyim katın. Uygulama gerektirmeyen temassız QR paylaşım.",
    openGraph: {
      title: "FAI QR LED Ayna – Dijital Etkileşimli Ayna",
      url: "https://faiglow.com",
      images: [{ url: "/TURUNCUMEK1.png", width: 1919, height: 1000 }],
    },
    alternates: {
      canonical: "https://faiglow.com",
    },
  },

  hero: {
    backgroundImage: { src: "/TURUNCUMEK1.png", alt: "FAI QR LED Ayna" },
    productImage: { src: "/TURUNCU-FAI9.png" },
    eyebrow: "QR LED IŞIKLI AYNA",
    headline: ["IŞIĞIN İÇİNDE", "DİJİTAL GÜCÜNÜZ"],
    ctas: [
      { label: "DİJİTAL YÖNETİM", href: "/dijital-yonetim", variant: "primary" },
      { label: "KEŞFET", href: "#ozellikler", variant: "secondary" },
    ],
  },

  features: [
    {
      heading: "Mekanlarda Dijital Deneyim",
      text: "QR entegre yapısı sayesinde sosyal medya, ürün tanıtımı, çekiliş & marka iş birliği sistemi, kampanyalar, üyelik ve özel içerikler tek bir temas noktasıyla erişilebilir hale gelir. Mekân içinde estetik, arkasında güçlü bir dijital altyapı.",
    },
    {
      heading: "Seçkin Bağlantı Deneyimi",
      text: "Uygulama gerektirmeden, temassız paylaşım imkânı sunar. Işığın sofistike yansımasıyla dikkat çekin. Tek dokunuşla kalıcı bir iz bırakın.",
    },
    {
      heading: "Zamansız Güncellenebilir Kimlik",
      text: "FAI QR LED Işıklı Ayna üzerindeki QR alanı, dijital profilinizle entegredir. İletişim bilgilerinizi, sosyal medya hesaplarınızı veya markanıza ait tüm detayları tek dokunuşla QR değişmeden güncelleyebilirsiniz.",
    },
  ],

  banner: {
    image: { src: "/TURN-AYNA3.png" },
    headline: "IŞIĞIN İÇİNDE DİJİTAL GÜCÜNÜZ",
    textLines: [
      "QR KODLU LED AYNA ÜZERİNDEN ERİŞİLEN İÇERİKLER, HER KULLANICI İÇİN ÖZEL OLARAK KURGULANIR.",
      "HER KULLANICI, KENDİ DİJİTAL ALANININ SAHİBİDİR.",
    ],
  },

  twoCol: twoColShared,
};

// ── DİJİTAL YÖNETİM PAGE ─────────────────────────────────────────────────────
export const dijitalContent = {
  metadata: {
    title: "Dijital Yönetim Sistemi",
    description:
      "FAI QR LED Ayna Dijital Yönetim Sistemi – profilinizi oluşturun, markanızı yansıtın.",
  },

  hero: {
    image: { src: "/LAC-FAI5.png", alt: "FAI QR LED Ayna", width: 6811, height: 3406 },
    headline: "DİJİTAL ETKİLEŞİMLİ LED AYNA",
    cta: { label: "QR OLUŞTUR", href: "/login" },
  },

  // İlk section grubu (3 bölüm) – id="qr-deneyimi" anchor hedefi
  qrDeneyimi: [
    {
      heading: "QR DENEYİMİ",
      intro:
        "Size ilettiğimiz bağlantıya, e-posta adresiniz ve oluşturacağınız şifre ile güvenle giriş yapabilirsiniz. Kayıt ekranında istenilen bilgileri eksiksiz doldurarak hesabınızı oluşturmanız yeterlidir. Onay sürecini tamamladıktan sonra üyeliğiniz aktif hale gelecektir.",
      paragraphs: [],
      list: null,
      paragraphsAfter: [],
    },
    {
      heading: "PROFİLİNİZİ OLUŞTURUN, MARKANIZI YANSITIN",
      intro: null,
      paragraphs: [
        "Giriş yaptıktan sonra açılan profil panelinden QR aynanızda görüntülenecek dijital profilinizi oluşturabilirsiniz.",
      ],
      list: [
        "İletişim bilgileri",
        "Sosyal medya hesapları",
        "Kampanyalar",
        "Ürünler",
        "Etkinlikler",
        "Özel içerikler",
      ],
      paragraphsAfter: [],
    },
    {
      heading: "TAM KONTROL SİZDE",
      intro: null,
      paragraphs: [
        "QR aynanızdaki profil bilgilerinizi istediğiniz an güncelleyebilirsiniz.",
        "Artık QR Aynanız ile bilgilerinizi tek bir dokunuşla, prestijli ve modern bir şekilde paylaşmaya hazırsınız.",
      ],
      list: null,
      paragraphsAfter: [],
    },
  ],

  galleryImage: {
    src: "/LAC-FAI5-Y.png",
    alt: "FAI Ayna Koleksiyon",
    width: 2880,
    height: 1800,
  },

  // İkinci section grubu (5 bölüm)
  qrContent: [
    {
      heading: "NASIL ÇALIŞIR?",
      intro: null,
      paragraphs: [
        "Ayna üzerindeki QR kod sabit kalır; QR'ın arkasındaki dijital içerik ise tamamen dinamik ve yönetilebilir yapıdadır. Kullanıcı herhangi bir uygulama indirmek zorunda kalmadan içeriğe anında erişir.",
      ],
      list: null,
      paragraphsAfter: [],
    },
    {
      heading: "IŞIKLA YÖNLENDİRİLEN DENEYİM",
      intro: null,
      paragraphs: [
        "LED ışık, QR alanını yalnızca görünür kılmakla kalmaz; kullanıcının odağını doğrudan yönlendirir. Mekânın estetiğine zarar vermeden dikkat çeken bu tasarım, deneyimi sessizce başlatır.",
      ],
      list: null,
      paragraphsAfter: [],
    },
    {
      heading: "ZAMANSIZ VE GÜNCELLENEBİLİR YAPI",
      intro: null,
      paragraphs: [
        "QR LED Işıklı Ayna'nın en güçlü özelliği, QR kod değişmeden içeriğin her an güncellenebilir olmasıdır. Aynı QR üzerinden dilediğiniz içeriği kolayca yönetebilirsiniz.",
      ],
      list: null,
      paragraphsAfter: [],
    },
    {
      heading: "KİŞİSELLEŞTİRİLEBİLİR TASARIM",
      intro: null,
      paragraphs: [],
      list: ["Işık tonu", "QR alanı", "Kapsül yapısı", "İçerik sıralaması"],
      paragraphsAfter: [
        "Tüm yapı markaya, mekâna ve hedef kitleye göre eksiksiz biçimde özelleştirilebilir.",
      ],
    },
    {
      heading: "GALERİYE AÇILAN DİJİTAL PANEL",
      intro: null,
      paragraphs: [
        "QR LED Işıklı QR Yansıtan Ayna'da yer alan panel, sadece galeri mantığıyla yapılandırılabilir. Bu alan içerisinde;",
      ],
      list: ["Fotoğraflar", "Videolar", "Belgeler", "Özel metinler", "Anı içerikleri"],
      paragraphsAfter: [
        "tek bir dijital akış altında sunulur. Tüm içerikler admin panelinden kolayca yüklenir ve düzenlenir. Dilediğiniz an yeni anılar ekleyebilir, mevcut içerikleri güncelleyebilirsiniz.",
        "Fiziksel bir aynadan başlayan yolculuk, kişisel, kalıcı ve paylaşılan bir dijital hatıraya dönüşür.",
      ],
    },
  ],

  phoneImage: {
    src: "/TELEFON-Y5.png",
    alt: "FAI Dijital Profil – Mobil",
    width: 1920,
    height: 1080,
  },

  twoCol: twoColShared,
};
