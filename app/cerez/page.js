import Link from "next/link";

export const metadata = {
  title: "Çerez Politikası",
  description: "FAI çerez politikası ve kullanım koşulları.",
  robots: { index: false, follow: false },
};

export default function CerezPage() {
  return (
    <div className="legal-page">

      <Link href="/" className="back">← Geri Dön</Link>

      <h1>Çerez Politikası – FAI</h1>

      <p>FAI markasına ait internet sitesi ve dijital platformlarda, kullanıcı deneyimini geliştirmek, hizmetlerin güvenli ve kesintisiz sunulmasını sağlamak ve performans ölçümü yapmak amacıyla çerezler ve benzeri teknolojiler (SDK – Software Development Kit dahil) kullanılmaktadır. Bu teknolojilerin kullanımı, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) ve ilgili mevzuata uygun olarak gerçekleştirilmektedir.</p>

      <h2>1. Çerez Nedir?</h2>
      <p>Çerezler, bir internet sitesi tarafından cihazınıza (bilgisayar, telefon, tablet vb.) yerleştirilen, isim-değer formatında veri içeren küçük metin dosyalarıdır. Çerezler sayesinde ziyaret edilen internet sitesi, cihazınızda belirli bilgileri saklayabilir ve bu bilgileri sonraki ziyaretlerde kullanabilir. Çerezler, siteye erişimde kullanılan internet tarayıcısı tarafından saklanır ve yalnızca ilgili alan adı tarafından erişilebilir.</p>
      <p><strong>Oturum Çerezleri:</strong> Tarayıcı kapatıldığında sona erer.</p>
      <p><strong>Kalıcı Çerezler:</strong> Süresi dolana kadar veya kullanıcı tarafından silinene kadar cihazda kalır.</p>

      <h2>2. Çerezlerin Kullanım Amaçları</h2>
      <p><strong>Zorunlu Çerezler:</strong> Site ve mobil uygulamanın doğru şekilde çalışması için gereklidir. Örneğin; oturum açan kullanıcıların sayfalar arasında geçiş yaparken tekrar giriş yapmak zorunda kalmaması.</p>
      <p><strong>İşlevsellik ve Tercih Çerezleri:</strong> Kullanıcı tercihlerini hatırlayarak kişiselleştirilmiş hizmet sunulmasını sağlar. Örneğin; dil seçiminin veya kullanıcı bilgilerinin hatırlanması.</p>
      <p><strong>Performans ve Analiz Çerezleri:</strong> Platformun performansını ölçmek ve geliştirmek amacıyla kullanılır. Örneğin; en çok ziyaret edilen sayfaların tespiti ve sistem optimizasyonu.</p>
      <p><strong>Hedefleme ve Reklam Çerezleri:</strong> Kullanıcının ilgi alanlarına uygun içerik ve tanıtımlar sunulmasını sağlar. Mobil uygulamalarda cihaz bazlı hedeflemeler yapılabilir.</p>
      <p><strong>Üçüncü Taraf Çerezler:</strong> FAI, hizmet kalitesini artırmak amacıyla üçüncü taraf hizmet sağlayıcılarla çalışabilir. Bu sağlayıcılar, analiz ve reklam faaliyetleri kapsamında kendi çerezlerini kullanabilir.</p>

      <h2>3. Hukuki Dayanak</h2>
      <p>Çerezler; bir sözleşmenin kurulması veya ifası için gerekli olması, veri sorumlusunun meşru menfaatleri kapsamında veri işlemenin zorunlu olması ve açık rıza alınması gereken durumlarda kullanıcının onay vermesi hukuki sebeplerine dayanılarak işlenmektedir.</p>

      <h2>4. Çerezlerin Yönetimi</h2>
      <p>Çerez kullanımı zorunlu olmamakla birlikte, bazı teknik çerezlerin devre dışı bırakılması durumunda platformun belirli fonksiyonları gerektiği gibi çalışmayabilir. Kullanıcılar; tarayıcı ayarları üzerinden çerezleri engelleyebilir, mevcut çerezleri silebilir veya çerez oluşturulduğunda uyarı alacak şekilde ayarlama yapabilir. İlk ziyaret sırasında sunulan bilgilendirme penceresi aracılığıyla çerez tercihleri yönetilebilir.</p>

      <h2>5. Veri Sahiplerinin Hakları</h2>
      <p>KVKK&apos;nın 11. maddesi uyarınca kullanıcılar; kişisel verilerinin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, işlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme, aktarıldığı üçüncü kişileri bilme, eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme, şartları oluştuğunda kişisel verilerin silinmesini veya yok edilmesini talep etme, otomatik sistemler aracılığıyla yapılan analizlere itiraz etme ve hukuka aykırı veri işlenmesi nedeniyle zarara uğraması halinde tazminat talep etme haklarına sahiptir.</p>
      <p>FAI, kişisel verilerin korunması konusunda yürürlükteki mevzuata uygun hareket etmektedir.</p>

    </div>
  );
}
