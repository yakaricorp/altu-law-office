/* eslint react/no-unescaped-entities: 0 */

import classNames from "classnames"
import Link from "next/link"

import { font_mukta, font_playfair } from "@/ui/fonts"
import TurnBackArrovSvg from '@/ui/icons/turn-back-arrow.svg'

function GoBack() {
  return (
    <Link href="/" className="hover:bg-alternate p-4">
      <TurnBackArrovSvg className="w-8 inline"></TurnBackArrovSvg>
    </Link>
  )
}

export default function Page() {
  const h1ClassNames = classNames([font_playfair.className, 'text-center font-bold text-4xl my-8'])
  const h2ClassNames = classNames([font_playfair.className, 'font-bold text-2xl mt-8 mb-4'])
  const ulClassNames = 'mx-8 my-4 list-disc'
  const pClassNames = 'indent-4 my-2'
  const aClassNames = 'text-link-alternate hover:underline'

  return (
    <div className={classNames([font_mukta.className, 'px-[10vw] xl:px-[20%] py-8'])}>
      <GoBack></GoBack>
      <h1 className={h1ClassNames}>
        GİZLİLİK POLİTİKASI
      </h1>

      <p className={pClassNames}>
        ALTU Hukuk Bürosu ("Şirket"), internet sitesini ziyaret eden kişilerin paylaşmış olduğu bilgilerin gizliliğini sağlamayı ilke olarak kabul etmiştir. Bu nedenle işbu "Gizlilik Politikası" kişilerin hangi bilgilerinin, hangi yollarla işlendiğini, bu bilgilerin hukuka uygun olarak ve vermiş olduğunuz izin kapsamında hangi üçüncü kişiler ile paylaşıldığını ve Şirket tarafından ne şekilde korunduğunu açıklayarak sizi bilgilendirmek amacı ile oluşturulmuştur. Ayrıca işbu Gizlilik Politikası çerçevesinde bu bilgilerin doğruluğunun sizler tarafından nasıl denetlenebileceği ve istendiğinde Şirketin internet sitesine başvurarak bu bilgilerin silinmesini nasıl sağlayabileceğiniz belirtilmiştir. Şirket Tarafından kişilere her türlü kanaldan sunulan tüm hizmetler kısaca "Hizmet" olarak anılacaktır.
      </p>

      <h2 className={h2ClassNames}>Veri Sorumlusu</h2>
      <p className={pClassNames}>
        Kişisel veri kimliği belirli veya belirlenebilir gerçek kişiye ilişkin isim, soyisim, doğum tarihi veya telefon numarası gibi her türlü bilgiyi ifade etmektedir.
        Kişisel verileriniz, veri sorumlusu sıfatıyla ________ Ticaret Sicil Müdürlüğü nezdinde ________ sicil numarası ile kayıtlı ve şirket merkezi İsmet Kaptan Mh. 1367 Sk. No:2 Kat:7 Daire:704 İkbal 2 İş Merkezi Konak/İzmir adresinde bulunan ALTU Hukuk Bürosu (Şirket) tarafından 6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) başta olmak üzere, ilgili mevzuat düzenlemeleri ve yetkili otorite kararları/duyuruları ile işbu Gizlilik Politikası çerçevesinde işlenmektedir.
        Şirket, gizliliğinizin ve kişisel verilerinizin korunmasına ilişkin endişelerinize saygı duymaktadır. Bu kapsamda Şirket, kişisel verilerinizi KVKK başta olmak üzere kişisel verilerin korunmasına ilişkin tüm mevzuat hükümlerine uygun şekilde işlemekte, verilerinizin güvenli şekilde barındırılmasını sağlamakta ve olası hukuka aykırı erişimlere karşı gerekli tüm güvenlik tedbirlerini almaktadır.
      </p>
      <p className={pClassNames}>
        İşbu Gizlilik Politikası metni, Şirket tarafından aşağıda belirtilen kanallar vasıtası ile hangi kişisel veri kategorilerinizin toplandığı ve hangi süreçler ve amaçlarla işlendiği, hangi alıcı gruplarına aktarıldığı, kişisel verilerinizin korunmasına ilişkin haklarınızı ve veri sorumlusu olarak Şirketin aydınlatma yükümlülüğü kapsamında sizleri bilgilendirmesi gereken diğer açıklamaları içermektedir.
      </p>

      <h2 className={h2ClassNames}>Gizlilik Politikasının Kapsamı ve Toplanan Veriler</h2>
      <p className={pClassNames}>
        Belirli bir kişiye ait kullanılacak ve işlenecek bilgiler, yalnızca bu kişinin kendi istemiyle veri girmesi veya bu hususta açıkça muvafakat vermesi halinde mümkündür. Veri girilmesi veya bu konuda açıkça muvafakat verilmesi, kişinin aşağıda belirtilen şartlar ile mutabık olduğunun göstergesidir. İnternet sitesi ziyaret edildiğinde bazı bilgiler internet sitesi sunucularında depolanır.
      </p>
      <p className={pClassNames}>
        Bu veriler şu şekilde olabilir:
      </p>
      <ul className={ulClassNames}>
        <li>İsim</li>
        <li>E-mail</li>
        <li>Telefon/Fax numarası</li>
      </ul>
      <p className={pClassNames}>
        Bu veriler doğrultusunda site kullanıcısı hakkında birtakım sonuçlar çıkarılır. Ancak bu kişisel veriler sadece anonim olarak kullanılabilir. Bu verilerin dışarıdan bir hizmet sağlayacısına aktarılması durumunda veri güvenliğine ilişkin mevcut yasal düzenlemeler çerçevesinde aktarılması için gerekli işlemler gerçekleştirilir.
      </p>
      <p className={pClassNames}>
        Kendi isteğiniz ile kişisel bilgilerin verilmesi halinde Şirket, bu bilgileri yasada öngörülen veya kullanıcının kabul beyanında belirtilen sınırlamalar çerçevesinde kullanacağını ve bu çerçevede işleme tabi tutacağını veya aktarılacağını taahhüt eder.
      </p>

      <p className={pClassNames}>
        Kişisel verilerin ve çerezlerin kullanım amaçları aşağıda listelenmiştir:
      </p>
      <ul className={ulClassNames}>
        <li>Kullanıcıların deneyimlerini özelleştirme</li>
        <li>Kullanıcılarla iletişimin sağlanması</li>
      </ul>
      <p className={pClassNames}>
        Sunulan hizmetin bir parçası olarak Şirket, hizmet alan kişilere ilişkin bilgileri işbu Gizlilik Politikası kapsamında elde edilebilir ve aktarabilir. Bu tür bilgi aktarımları, üçüncü kişiler tarafından belirlenen şartlara ve üçüncü kişiler ile mevcut sözleşmelere ve yürürlükteki mevcut yasal mevzuata uygun olarak yapılır. Bu Gizlilik Politikası, bilgi aktarımı yapılan üçüncü kişilerin gizlilik uygulamalarını yansıtmamaktadır ve onların gizlilik politikalarından veya uygulamalarından Şirket sorumlu değildir. İşbu Gizlilik Politikası Şirketin kendi kontrolü dışındaki uygulamalar tarafından toplanılan bilgiler, üçüncü taraflara ait internet siteleri ve platformlar tarafından toplanılan bilgiler, üçüncü taraflarca Şirket internet sitesindeki bağlantılar üzerinden toplanan bilgiler veya Şirketin sponsor olduğu veya katıldığı üçüncü taraf internet siteleri üzerindeki başlıklar, kampanyalar ve diğer reklam veya tanıtımları kapsamamaktadır. Üçüncü tarafların kendi internet siteleri yoluyla topladığı, sakladığı ve kullandığı kişisel verilere yönelik yapılan işlemlerden Şirket sorumlu değildir.
      </p>

      <h2 className={h2ClassNames}>
        Çocukların Gizliliği
      </h2>
      <p className={pClassNames}>
        İnternet sitemizde 18 yaşının altındaki çocuklardan bilerek veri toplamamaktadır. Eğer 18 yaşının altındaysanız lütfen Hizmetleri kullanarak herhangi bir kişisel verinizi paylaşmayınız. Bu noktada çocukların veli veya vasilerinin işbu Gizlilik Politikasının uygulanması konusunda çocuklarını kişisel verilerini paylaşmamaları konusunda eğiterek yardımları beklenmektedir.
      </p>

      <h2 className={h2ClassNames}>
        Çerez Kullanımı
      </h2>
      <p className={pClassNames}>
        Şirket, anılan kişisel verilerden bazılarını teknik bir iletişim dosyasını (Çerez-cookie) kullanarak elde edebilir. Bahsi geçen teknik iletişim dosyaları, ana bellekte saklanmak üzere bir internet sitesinin kullanıcının tarayıcısına gönderdiği küçük metin dosyalarıdır. Teknik iletişim dosyası bir internet sitesi hakkında durum ve tercihleri saklayarak İnternet'in kullanımını kolaylaştırır. Teknik iletişim dosyası, internet sitesini kaç kişinin kullandığını, bir kişinin internet sitesini hangi amaçla, kaç kez ziyaret ettiğini ve ne kadar kaldıklarını belirten istatistiksel bilgileri elde etmeye ve kullanıcılar için özel tasarlanmış kullanıcı sayfalarından dinamik olarak reklam ve içerik üretilmesine yardımcı olur. Teknik iletişim dosyası, ana bellekte veya e-postalardan veri veya başka herhangi bir kişisel veri almak için tasarlanmamıştır. Tarayıcıların pek çoğu başta teknik iletişim dosyasını kabul eder biçimde tasarlanmıştır, fakat kullanıcılar dilerse teknik iletişim dosyasının gelmemesi veya teknik iletişim dosyası gönderildiğinde ikaz verilmesini sağlayacak biçimde ayarları değiştirebilirler. Bu ayar değişikliğinden kaynaklanan herhangi bir kusurlu çalışma tarafımıza atfedilmemelidir.
      </p>

      <p className={pClassNames}>
        İnternet sitesinde kullanılan çerezler şu şekildedir:
      </p>
      <ul className={ulClassNames}>
        <li>İnternet sitesini bulmak amacı ile kullanılan kelimeler</li>
        <li>İnternet servisi sağlayıcısının ismi</li>
        <li>IP adresi ve/veya konumu</li>
        <li>Erişim sağlayan bilgisayarın işletim sistemi</li>
      </ul>

      <h2 className={h2ClassNames}>
        Diğer İnternet Sitelerine Verilen Bağlantılar
      </h2>
      <p className={pClassNames}>
        Şirket internet sitesi, içeriğinde üçüncü kişilere ait internet sitelerine yönlendiren bağlantılar/linkler içerebilecek olup işbu Gizlilik Politikası bu internet siteleri için geçerli değildir. Şirket bu internet sitelerine ilişkin herhangi bir sorumluluk kabul etmemektedir.
      </p>

      <h2 className={h2ClassNames}>
        Sosyal Medya
      </h2>
      <p className={pClassNames}>
        Şirket internet sitesi sitenin tamamının ya da bir bölümünün sosyal medya ağlarında paylaşılabilmesi için bazı sosyal medya ağlarına gömülü şekilde bağlantı vermektedir. Bu bağlantılı hizmetler yalnızca onay verilmesi durumunda çalışmakta olup bu sosyal medya bağlantılarının amacı site içeriklerinin görüntülenmesi ve istenildiğinde arkadaşlarınızla ve yakınlarınızla paylaşabilmenizdir. Bu yönlendirilen sosyal medya ağlarıyla ilgili veri paylaşımı onların sitelerinde ilan ettikleri gizlilik politikalarına tabidir. Bu gizlilik politikalarını da incelemeniz önem taşımaktadır.
      </p>

      <h2 className={h2ClassNames}>
        Bilgi Güncelleme ve Değişiklik
      </h2>
      <p className={pClassNames}>
        Şirket, gizlilik veri koruma prensiplerini güncel tutmak ve ilgili mevzuata uygun hale getirmek için işbu Gizlilik Politikası'nın içeriğini dilediği zaman değiştirebilir. Değişen Gizlilik Politikası Şirket internet sitesinde ilan edilir. Gizlilik Politikası'nın güncel haline <a className={aClassNames} href="/privacy-policy">https://www.altuhukuk.com/privacy-policy</a> adresinden sürekli olarak ulaşmanız mümkündür. İşbu Gizlilik Politikası'nın değiştirilmesinden sonra Şirketin hizmet veya uygulamalarını kullanmaya devam etmeniz halinde yapılan değişiklikleri kabul ettiğiniz varsayılır. Şirketin değişiklik yaptığı Gizlilik Politikası hükümleri internet sitesinde yayınlandığı tarihte yürürlük kazanır.
      </p>

      <h2 className={h2ClassNames}>
        İşlenen Kişisel Veri Kategorileri ve Kişisel Verilerin İşlenme Amaçları
      </h2>
      <p className={pClassNames}>
        Paylaşılan kişisel veriler müşterilere verilen hizmetlerin gereklerini, sözleşmenin ve teknolojinin gereklerine uygun şekilde yapabilmek, sunulan ürün ve hizmetlerimizi geliştirebilmek için; kamu güvenliğine ilişkin hususlarda ve hukuki uyuşmazlıklarda, talep halinde ve mevzuat gereği savcılıklara, mahkemelere ve ilgili kamu görevlilerine bilgi verebilmek için; üyelerimize geniş kapsamda çeşitli imkanlar sunabilmek için veya bu imkanları sunabilecek kişi ve kurumlarla yasal çerçevede paylaşabilmek için; reklam tercihlerini analiz etmek için 6698 sayılı KVKK ve ilgili ikincil düzenlemelere uygun olarak işlenecektir.
      </p>

      <h2 className={h2ClassNames}>
        Verileri Saklama Süresi
      </h2>
      <p className={pClassNames}>
        Sitede herhangi bir şekilde doğrudan paylaşılan veriler etkileşim süresinin devamı boyunca saklanmaktadır.
      </p>

      <h2 className={h2ClassNames}>
        Kişisel Verilerin Ne Şekilde İşlenebileceği
      </h2>
      <p className={pClassNames}>
        6698 sayılı Kişisel Verilerin Koruması Kanunu (KVKK) uyarınca, ALTU Hukuk Bürosu ile paylaşılan kişisel veriler, tamamen veya kısmen, otomatik olarak veya herhangi bir veri kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla elde edilerek, kaydedilerek, depolanarak, değiştirilerek, yeniden düzenlenerek kısacası veriler üzerinde gerçekleştirilen her türlü işleme konu olarak tarafımızca işlenebilecektir. KVKK kapsamında veriler üzerinde gerçekleştirilen her türlü işlem "kişisel verilerin işlenmesi" olarak kabul edilmektedir.
      </p>

      <h2 className={h2ClassNames}>
        Kişisel Verilerin Aktarılabileceği Üçüncü Kişi Veya Kuruluşlar Hakkında Bilgilendirme
      </h2>
      <p className={pClassNames}>
        Yukarıda belirtilen amaçlarla, ALTU Hukuk Bürosu ile paylaşılan kişisel verilerin aktarılabileceği kişi ve kuruluşlar; ana hissedarlar, hissedarlar, reklam verenler, doğrudan veya dolaylı yurtiçi/ yurtdışı iştiraklerimiz; başta ALTU Hukuk Bürosu altyapısını kullanan üye firmalar ve bunlarla sınırlı olmamak üzere sunulan hizmet ile ilgili kişi ve kuruluşlar olmak üzere, faaliyetlerimizi yürütmek üzere veya Veri İşleyen sıfatı ile hizmet aldığımız, iş birliği yaptığımız, program ortağı kuruluşları, yurtiçi/yurtdışı kuruluşlar ve diğer 3. kişiler ve kuruluşlardır. Mahkemelerden gelen bağlayıcı taleplere yönelik olarak hukuki yükümlülüklerimiz dahilinde verileriniz istisnai olarak resmi kurumlarla paylaşılabilecektir.
      </p>
      <p className={pClassNames}>
        Reklam amaçlı kullanılacak çerezlere ilişkin düzenlemelerimiz "ALTU Hukuk Bürosu Çerez Politikası" olup, şu anda okuduğunuz "Gizlilik ve Kişisel Verilerin Korunması Politikası'nın bir parçasını oluşturmaktadır. Çerez Politikamız hakkında bilgi edinmek için lütfen tıklayın.
      </p>

      <h2 className={h2ClassNames}>
        KVKK Yürürlüğe Girmeden Önce Elde Edilen Kişisel Veriler
      </h2>
      <p className={pClassNames}>
        ALTU Hukuk Bürosu internet sitesinde KVKK'nın yürürlük tarihi olan 07.04.2016 tarihinden önce depolanan kişisel veri bulunmamaktadır.
      </p>

      <h2 className={h2ClassNames}>
        Veri Sahibinin Hakları
      </h2>
      <p className={pClassNames}>
        Veri sahibi verilerine erişim hakkını her zaman kullanabilir. Buna ek olarak ilgili şartların yerine getirilmesi durumunda KVKK madde 11'de düzenlenen haklar ve aşağıda belirtilen haklar kullanılabilir.
      </p>

      <ul className={ulClassNames}>
        <li>Düzeltme hakkı</li>
        <li>Silme hakkı</li>
        <li>İşlemeyi kısıtlama hakkı</li>
        <li>Yetkili veri koruma denetim kurumu üzerinden bir şikayet oluşturma hakkı</li>
        <li>Veri taşınabilirliği hakkı</li>
      </ul>

      <p className={pClassNames}>
        Kişisel verilerin, Şirketin kanuni bir faydaya sahip olduğu zeminde işlenmesine ilişkin faaliyetler söz konusu olduğunda, içinde bulunulan özel durum sonucunda oluşan gerekçeler dolayısıyla, veri sahibi kişisel verilerin işlenmesine itiraz hakkına sahiptir. Şirket, verilerin işlenmesine ilişikin olarak koruması gereken çıkarların, hakların ve özgürlüklerin üzerinde yer alan önemli bir gerekçe olduğunu kanıtlayamadığı veya bu işlem kanuni hak taleplerde bulunmak, bu talepleri kullanmak veya savunmak gibi amaçlara hizmet ettiği sürece Şirket verilerin işlenmesini durduracaktır.
      </p>
      <p className={pClassNames}>
        Kişisel verilerin işlenmesine onay verilmesi halinde onayın geri çekilmesi imkanı vardır.
      </p>
      <p className={pClassNames}>
        Kanun kapsamında, kişisel verileriniz ile ilgili her türlü talep, şikayet ve önerilerinizi, kimliğinizi tevsik edici belgeler ve talebinizi içeren dilekçeniz ile aşağıdaki adresimize ulaştırabilir veya güvenli elektronik imza kullanmak suretiyle Şirketimizin <a className={aClassNames} href="mailto:altuhukuk@gmail.com" target="_blank">altuhukuk@gmail.com</a> kayıtlı elektronik posta adresine gönderebilirsiniz.
      </p>

      <p className={classNames([pClassNames, 'font-bold'])}>
        Adresimiz:
      </p>
      <p className={classNames([pClassNames, 'mb-8'])}>
        İsmet Kaptan Mh. 1367 Sk. No:2 Kat:7 Daire:704 İkbal 2 İş Merkezi Konak/İzmir
      </p>

      <GoBack></GoBack>
    </div>
  )
}