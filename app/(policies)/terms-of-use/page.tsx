/* eslint react/no-unescaped-entities: 0 */

import classNames from "classnames"

import { font_playfair } from "app/ui/fonts"

export default function Page() {
  const h1ClassNames = classNames([font_playfair.className, 'text-center font-bold text-4xl my-8'])
  const h2ClassNames = classNames([font_playfair.className, 'font-bold text-2xl mt-8 mb-4'])
  const ulClassNames = 'mx-8 my-4 list-disc'
  const pClassNames = 'indent-4 my-2'
  const aClassNames = 'text-link-alternate hover:underline'

  return (
    <>
      <h1 className={h1ClassNames}>
        KULLANIM ŞARTLARI
      </h1>

      <p className={pClassNames}>
        Biz, ALTU Hukuk Bürosu, olarak güvenliğinize önem veriyor ve bu Çerez Politikası ile siz ziyaretçilerimizi, web sitemizde hangi çerezleri, hangi amaçla kullandığımız ve çerez ayarlarınızı nasıl değiştireceğiniz konularında kısaca bilgilendirmeyi hedefliyoruz.
      </p>

      <p className={pClassNames}>
        Sevgili ziyaretçimiz, lütfen altuhukuk.com web sitemizi ziyaret etmeden önce işbu kullanım koşulları sözleşmesini dikkatlice okuyunuz. Siteye erişiminiz tamamen bu sözleşmeyi kabulünüze ve bu sözleşme ile belirlenen şartlara uymanıza bağlıdır. Şayet bu sözleşmede yazan herhangi bir koşulu kabul etmiyorsanız, lütfen siteye erişiminizi sonlandırınız. Siteye erişiminizi sürdürdüğünüz takdirde, koşulsuz ve kısıtlamasız olarak, işbu sözleşme metninin tamamını kabul ettiğinizin, tarafımızca varsayılacağını lütfen unutmayınız.
      </p>

      <p className={pClassNames}>
        altuhukuk.com web sitesi ALTU Hukuk Bürosu tarafından yönetilmekte olup, bundan sonra SİTE olarak anılacaktır. İşbu siteye ilişkin Kullanım Koşulları, yayınlanmakla yürürlüğe girer. Değişiklik yapma hakkı, tek taraflı olarak SİTE'ye aittir ve SİTE üzerinden güncel olarak paylaşılacak olan bu değişiklikleri, tüm kullanıcılarımız baştan kabul etmiş sayılır.
      </p>

      <h2 className={h2ClassNames}>
        Gizlilik
      </h2>

      <p className={pClassNames}>
        Gizlilik, ayrı bir sayfada, kişisel verilerinizin tarafımızca işlenmesinin esaslarını düzenlemek üzere mevcuttur. SİTE'yi kullandığınız takdirde, bu verilerin işlenmesinin gizlilik politikasına uygun olarak gerçekleştiğini kabul edersiniz.
      </p>

      <h2 className={h2ClassNames}>
        Hizmet Kapsamı
      </h2>

      <p className={pClassNames}>
        ALTU Hukuk Bürosu olarak, sunacağımız hizmetlerin kapsamını ve niteliğini, yasalar çerçevesinde belirlemekte tamamen serbest olup; hizmetlere ilişkin yapacağımız değişiklikler, SİTE'de yayınlanmakla yürürlüğe girmiş sayılacaktır.
      </p>

      <h2 className={h2ClassNames}>
        Telif Hakları
      </h2>

      <p className={pClassNames}>
        SİTE'de yayınlanan tüm metin, kod, grafikler, logolar, resimler, ses dosyaları ve kullanılan yazılımın sahibi (bundan böyle ve daha sonra "içerik" olarak anılacaktır) ALTU Hukuk Bürosu olup, tüm hakları saklıdır. Yazılı izin olmaksızın site içeriğinin çoğaltılması veya kopyalanması kesinlikle yasaktır.
      </p>

      <h2 className={h2ClassNames}>
        Genel Hükümler
      </h2>

      <p className={pClassNames}>
        Kullanıcıların tamamı, SİTE'yi yalnızca hukuka uygun ve şahsi amaçlarla kullanacaklarını ve üçüncü kişinin haklarına tecavüz teşkil edecek nitelikteki herhangi bir faaliyette bulunmayacağını taahhüt eder. SİTE dâhilinde yaptıkları işlem ve eylemlerindeki, hukuki ve cezai sorumlulukları kendilerine aittir. İşbu iş ve eylemler sebebiyle, üçüncü kişilerin uğradıkları veya uğrayabilecekleri zararlardan dolayı SİTE'nin doğrudan ve/veya dolaylı hiçbir sorumluluğu yoktur.
      </p>

      <p className={pClassNames}>
        SİTE'de mevcut bilgilerin doğruluk ve güncelliğini sağlamak için elimizden geleni yapmaktayız. Lakin gösterdiğimiz çabaya rağmen, bu bilgiler, fiili değişikliklerin gerisinde kalabilir, birtakım farklılıklar olabilir. Bu sebeple, site içerisinde yer alan bilgilerin doğruluğu ve güncelliği ile ilgili tarafımızca, açık veya zımni, herhangi bir garanti verilmemekte, hiçbir taahhütte bulunulmamaktadır.
      </p>

      <p className={pClassNames}>
        SİTE'de üçüncü şahıslar tarafından işletilen ve içerikleri tarafımızca bilinmeyen diğer web sitelerine, uygulamalara ve platformlara köprüler (hyperlink) bulunabilir. SİTE, işlevsellik yalnızca bu sitelere ulaşımı sağlamakta olup, içerikleri ile ilgili hiçbir sorumluluk kabul etmemekteyiz.
      </p>
    
      <p className={pClassNames}>
        SİTE'yi virüslerden temizlenmiş tutmak konusunda elimizden geleni yapsak da, virüslerin tamamen bulunmadığı garantisini vermemekteyiz. Bu nedenle veri indirirken, virüslere karşı gerekli önlemi almak, kullanıcıların sorumluluğundadır. Virüs vb. kötü amaçlı programlar, kodlar veya materyallerin sebep olabileceği zararlardan dolayı sorumluluk kabul etmemekteyiz.
      </p>

      <p className={pClassNames}>
        SİTE'de sunulan hizmetlerde, kusur veya hata olmayacağına ya da kesintisiz hizmet verileceğine dair garanti vermemekteyiz. SİTE'ye ve sitenin hizmetlerine veya herhangi bir bölümüne olan erişiminizi önceden bildirmeksizin herhangi bir zamanda sonlandırabiliriz.
      </p>

      <h2 className={h2ClassNames}>
        Sorumluluğun Sınırlandırılması
      </h2>

      <p className={pClassNames}>
        SİTE'nin kullanımından doğan zararlara ilişkin sorumluluğumuz, kast ve ağır ihmal ile sınırlıdır. Sözleşmenin ihlalinden doğan zararlarda, talep edilebilecek toplam tazminat, öngörülebilir hasarlar ile sınırlıdır. Yukarıda bahsedilen sorumluluk sınırlamaları aynı zamanda insan hayatına, bedeni yaralanmaya veya bir kişinin sağlığına gelebilecek zararlar durumunda geçerli değildir. Hukuken mücbir sebep sayılan tüm durumlarda, gecikme, ifa etmeme veya temerrütten dolayı, herhangi bir tazminat yükümlülüğümüz doğmayacaktır.
      </p>

      <p className={pClassNames}>
        Uyuşmazlık Çözümü: İşbu Sözleşme'nin uygulanmasından veya yorumlanmasından doğacak her türlü uyuşmazlığın çözümünde, Türkiye Cumhuriyeti yasaları uygulanır; İzmir Adliyesi Mahkemeleri ve İcra Daireleri yetkilidir.
      </p>

      <p className={classNames([pClassNames, 'text-xs text-right'])}>
        Bu kullanım koşulları, https://sartlar.com aracılığıyla oluşturulmuştur.
      </p>
    </>
  )
}