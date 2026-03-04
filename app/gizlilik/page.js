import Link from "next/link";

export const metadata = {
  title: "Gizlilik Politikası ve KVKK",
  description: "FAI gizlilik politikası ve KVKK aydınlatma metni.",
  robots: { index: false, follow: false },
};

export default function GizlilikPage() {
  return (
    <div className="legal-page">

      <Link href="/" className="back">← Geri Dön</Link>

      <h1>Gizlilik Politikası ve KVKK Aydınlatma Metni</h1>

      <p>FAI, kişisel verilerinizin korunması ve gizliliğinin sağlanması konusunda son derece kararlı ve duyarlıdır. İşbu Gizlilik Politikası ve KVKK Aydınlatma Metni&apos;nin amacı, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) ve ilgili sair mevzuat kapsamında veri sorumlusu olarak aydınlatma yükümlülüğümüzü yerine getirmek; FAI tarafından işletilen internet sitesi ve dijital platformlar üzerinden kullanıcılar/müşteriler/ziyaretçiler (&quot;Veri Sahibi&quot;) tarafından paylaşılan veya site kullanımı sırasında üretilen kişisel verilerin işlenmesine ilişkin koşul ve esasları belirlemektir.</p>
      <p>Bu metin; hangi kişisel verilerin toplandığını, hangi amaçlarla kullanıldığını ve nasıl işlendiğini açıklamaktadır. FAI, başta Anayasa&apos;nın 20. maddesinde düzenlenen özel hayatın gizliliği ilkesi olmak üzere, kişilerin temel hak ve özgürlüklerini korumaya azami önem göstermektedir. Bu kapsamda kişisel veriler, KVKK&apos;ya uygun şekilde ve gerekli teknik/idari tedbirler alınarak işlenmekte ve korunmaktadır.</p>

      <h2>1. İşlenebilir Kişisel Veriler</h2>
      <p>FAI tarafından sunulan hizmetler kapsamında işlenebilecek kişisel veri kategorileri şunlardır:</p>
      <p><strong>Kimlik Bilgileri:</strong> Ad, soyad, TCKN/VKN, kimlik/pasaport numarası, uyruk, doğum tarihi, doğum yeri, cinsiyet.</p>
      <p><strong>İletişim Bilgileri:</strong> Telefon numarası, adres, e-posta adresi.</p>
      <p><strong>Abonelik Bilgileri:</strong> Kişiselleştirme, hedefleme ve reklam faaliyetleri kapsamında sayfa/ürün görüntüleme bilgileri, kampanya katılım bilgileri.</p>
      <p><strong>Demografik Veriler:</strong> Yaş, meslek, unvan.</p>
      <p><strong>Ödeme ve Finansal Bilgiler:</strong> Fatura ve borç bilgileri.</p>
      <p><strong>Cihaz Bilgileri:</strong> IMEI, cihaz marka/model, işletim sistemi, IP ve ağ bilgileri.</p>
      <p><strong>İşlem Bilgileri:</strong> Site, mobil uygulama veya çağrı merkezi üzerinden gerçekleştirilen işlemler.</p>
      <p><strong>Kullanım ve Davranışsal Bilgiler:</strong> Hizmet kullanım alışkanlıkları ve tercih bilgileri.</p>

      <h2>2. Kişisel Verilerin İşlenme Amaçları</h2>
      <p>Kişisel verileriniz aşağıdaki amaçlarla işlenmektedir:</p>
      <p>Ürün ve hizmetlerin sunulması, faturalandırılması ve abonelik işlemleri. Kullanıcı hesaplarının oluşturulması ve erişimin sağlanması. Sipariş ve ödeme süreçlerinin yürütülmesi. Ürün/hizmet tanıtımı, kampanya ve pazarlama faaliyetleri (açık rıza halinde). Ticari elektronik ileti gönderimi (yasal onay alınarak). Müşteri memnuniyeti, destek ve çağrı merkezi hizmetleri. Hizmet geliştirme, analiz ve performans değerlendirme. Hukuki yükümlülüklerin yerine getirilmesi. İlgili mevzuat kapsamında bilgi saklama ve denetim süreçleri.</p>

      <h2>3. Kişisel Verilerin Aktarılması</h2>
      <p>Kişisel verileriniz, KVKK&apos;nın 8. maddesine uygun olarak; iş ortakları, tedarikçiler, sunucu ve altyapı hizmet sağlayıcıları (yurt içi/yurt dışı) ve hukuken yetkili kamu kurum ve kuruluşları ile yalnızca hizmetin gerektirdiği ölçüde paylaşılabilir.</p>

      <h2>4. Veri Toplama Yöntemleri ve Hukuki Sebepler</h2>
      <p>Kişisel verileriniz; internet sitesi, mobil uygulama, üyelik/sipariş formları, sözleşmeler, e-posta, çağrı merkezi, sosyal medya ve diğer yazılı/sözlü iletişim kanalları aracılığıyla toplanmaktadır. Verileriniz KVKK&apos;nın 5. maddesinde belirtilen; kanunlarda açıkça öngörülmesi, sözleşmenin kurulması veya ifası, hukuki yükümlülüğün yerine getirilmesi, meşru menfaat ve açık rıza hukuki sebeplerine dayanılarak işlenmektedir.</p>

      <h2>5. Anonim Veriler ve İmha</h2>
      <p>FAI, istatistiksel analiz amacıyla verileri anonim hale getirebilir. Saklama süresi sona eren veya işleme amacı ortadan kalkan veriler; silinir, yok edilir veya anonim hale getirilir.</p>

      <h2>6. Veri Sahibinin Hakları</h2>
      <p>KVKK&apos;nın 11. maddesi uyarınca veri sahipleri; verilerinin işlenip işlenmediğini öğrenme, işlenmişse bilgi talep etme, düzeltme, silme veya yok edilmesini isteme, aktarılan üçüncü kişileri öğrenme, otomatik sistemlere itiraz etme ve zarara uğraması halinde tazminat talep etme haklarına sahiptir.</p>

      <h2>7. İletişim</h2>
      <p>Haklarınızı kullanmak için taleplerinizi <strong>info@faiglow.com</strong> adresine iletebilirsiniz.</p>

    </div>
  );
}
