/* eslint react/no-unescaped-entities: 0 */

import classNames from "classnames"

import { font_playfair } from "app/ui/fonts"

export default function Page() {
  const h1ClassNames = classNames([font_playfair.className, 'text-center font-bold text-4xl my-8'])
  const h2ClassNames = classNames([font_playfair.className, 'font-bold text-2xl mt-8 mb-4'])
  const pClassNames = 'indent-4 my-2'

  return (
    <>
      <h1 className={h1ClassNames}>
        ÇEREZ POLİTİKASI
      </h1>

      <p className={pClassNames}>
        Biz, ALTU Hukuk Bürosu, olarak güvenliğinize önem veriyor ve bu Çerez Politikası ile siz ziyaretçilerimizi, web sitemizde hangi çerezleri, hangi amaçla kullandığımız ve çerez ayarlarınızı nasıl değiştireceğiniz konularında kısaca bilgilendirmeyi hedefliyoruz.
      </p>

      <p className={pClassNames}>
        Sizlere daha iyi hizmet verebilmek adına, çerezler vasıtasıyla, ne tür kişisel verilerinizin hangi amaçla toplandığı ve nasıl işlendiği konularında, kısaca bilgi sahibi olmak için lütfen bu Çerez Politikasını okuyunuz. Daha fazla bilgi için Gizlilik Politikamıza göz atabilir ya da bizlerle çekinmeden iletişime geçebilirsiniz.
      </p>

      <h2 className={h2ClassNames}>
        Çerez Nedir?
      </h2>

      <p className={pClassNames}>
        Çerezler, kullanıcıların web sitelerini daha verimli bir şekilde kullanabilmeleri adına, cihazlarına kaydedilen küçük dosyacıklardır. Çerezler vasıtasıyla kullanıcıların bilgilerinin işleniyor olması sebebiyle, 6698 sayılı Kişisel Verilerin Korunması Kanunu gereğince, kullanıcıların bilgilendirilmeleri ve onaylarının alınması gerekmektedir.
      </p>

      <p className={pClassNames}>
        Bizler de siz sevgili ziyaretçilerimizin, web sitemizden en verimli şekilde yararlanabilmelerini ve siz sevgili ziyaretçilerimizin kullanıcı deneyimlerinin geliştirilebilmesini sağlamak adına, çeşitli çerezler kullanmaktayız.
      </p>

      <h2 className={h2ClassNames}>
        1. Zorunlu Çerezler
      </h2>

      <p className={pClassNames}>
        Zorunlu çerezler, web sitesine ilişkin temel işlevleri etkinleştirerek web sitesinin kullanılabilir hale gelmesini sağlayan çerezlerdir. Web sitesi bu çerezler olmadan düzgün çalışmaz.
      </p>

      <h2 className={h2ClassNames}>
        2. Performans Çerezleri
      </h2>

      <p className={pClassNames}>
        Performans çerezleri, ziyaretçilerin web sitesine ilişkin kullanım bilgilerini ve tercihlerini anonim olarak toplayan ve bu sayede web sitesinin performansının geliştirilmesine olanak sağlayan çerezlerdir.
      </p>

      <h2 className={h2ClassNames}>
        3. Fonksiyonel Çerezler
      </h2>

      <p className={pClassNames}>
        Fonksiyonel çerezler, kullanıcıların web sitesine ilişkin geçmiş kullanımlarından yola çıkılarak gelecekteki ziyaretlerinde tanınmalarını ve hatırlanmalarını sağlayan ve bu sayede web sitelerinin kullanıcılara dil, bölge vb. gibi kişiselleştirilmiş bir hizmet sunmasına olanak tanıyan çerezlerdir.
      </p>

      <h2 className={h2ClassNames}>
        4. Reklam Çerezleri
      </h2>

      <p className={pClassNames}>
        Reklam çerezleri, üçüncü taraflara ait çerezlerdir ve web sitelerinde ziyaretçilerin davranışlarını izlemek için kullanılırlar. Bu çerezlerin amaçları, ziyaretçilerin ihtiyaçlarına yönelik ilgilerini çekecek reklamların gösterilmesine yardımcı olmaktır ve sorumluluğu çerez sahibi üçüncü taraflara aittir.
      </p>

      <h2 className={h2ClassNames}>
        Çerezler İle İşlenen Kişisel Veriler Nelerdir?
      </h2>

      <p className={pClassNames}>
        Kimlik (isim, soy isim, doğum tarihi vb.) ve iletişim (adres, e-posta adresi, telefon, IP, konum vb.) bilgileriniz tarafımızca, çerezler (cookies) vasıtasıyla, otomatik veya otomatik olmayan yöntemlerle ve bazen de analitik sağlayıcılar, reklam ağları, arama bilgi sağlayıcıları, teknoloji sağlayıcıları gibi üçüncü taraflardan elde edilerek, kaydedilerek, depolanarak ve güncellenerek, aramızdaki hizmet ve sözleşme ilişkisi çerçevesinde ve süresince, meşru menfaat işleme şartına dayanılarak işlenecektir.
      </p>

      <h2 className={h2ClassNames}>
        Çerezler Hangi Amaçla Kullanılmaktadır?
      </h2>

      <p className={pClassNames}>
        Web sitemizde, şüpheli eylemlerin tespiti yoluyla güvenliğin sağlanması, kullanıcıların tercihleri doğrultusunda işlevsellik ve performansın artırılması, ürünlerin ve hizmetlerin geliştirilmesi ve kişiselleştirilmesi ile bu hizmetlere ulaşımın kolaylaştırılması, sözleşmesel ve hukuki sorumlulukların yerine getirilmesi amaçlı çerezler kullanmaktadır. Ayrıca kullanıcıların daha geniş kapsamlı hizmet sağlayıcılar ile buluşturulabilmesi amacıyla reklam çerezleri ve üçüncü taraflarla bilgi paylaşımı da söz konusudur.
      </p>

      <h2 className={h2ClassNames}>
        Çerezler Nasıl Yönetilmektedir?
      </h2>

      <p className={pClassNames}>
        Tüm bu açıklamalardan sonra, hangi çerezlerin kullanılacağı konusu, tamamen kullanıcılarımızın özgür iradelerine bırakılmıştır. Çerez tercihlerinizi, tarayıcınızın ayarlarından silerek ya da engelleyerek, web sitemize adım attığınız anda yönetebilir ya da gelecekte, istediğiniz zaman bu ayarları değiştirebilirsiniz. Daha ayrıntılı bilgi için Gizlilik Politikamıza göz atabilir ya da bizlerle altuhukuk@gmail.com e-mail adresi üzerinden iletişime geçebilirsiniz.
      </p>

      <p className={classNames([pClassNames, 'text-xs text-right'])}>
        Bu çerez politikası, https://sartlar.com aracılığıyla oluşturulmuştur.
      </p>
    </>
  )
}