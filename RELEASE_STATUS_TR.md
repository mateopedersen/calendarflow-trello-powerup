# CalendarFlow — Yayın Durumu

Kontrol tarihi: 9 Ekim 2026

## Gerçek durum

- **Kaynak ve HTTPS dağıtımı:** MIT lisanslı kaynak [public GitHub deposunda](https://github.com/mateopedersen/calendarflow-trello-powerup); [connector](https://mateopedersen.github.io/calendarflow-trello-powerup/src/index.html), [gizlilik bildirimi](https://mateopedersen.github.io/calendarflow-trello-powerup/docs/privacy.html), [destek sayfası](https://mateopedersen.github.io/calendarflow-trello-powerup/docs/support.html) ve [kullanıcı rehberi](https://mateopedersen.github.io/calendarflow-trello-powerup/docs/user-guide.html) GitHub Pages üzerinden açık.
- **Dağıtım:** GitHub Actions dağıtım çalışması #2 başarılı. Yerel Node testleri `TZ=America/Los_Angeles` altında 10/10 geçti; JavaScript sözdizimi kontrolleri temizdi.
- **Trello uygulama kaydı:** Gerçek kayıt oluşturuldu. Power-Up ID: `6ac7553081b7246032038717`. Connector ve SVG ikon URL'leri, Beta Calendars yazarı, destek e-postası ve iki kategori kaydedildi.
- **Yetenekler ve listing taslağı:** Yalnız `board-buttons`, `on-enable` ve `show-settings` seçili. İngilizce başlık, overview, açıklama ve gizlilik URL'si Trello portalına kaydedildi. Bu bir review submission veya herkese açık directory listing değildir.
- **Özel QA panosu:** Kullanıcı, Trello'nun gösterdiği geniş kapsamlı izin metnini yalnız bu özel QA panosu için onayladı ve Power-Up eklendi. Trello onayı pano, kart/listeler ve pano üyelerinin temel bilgilerine erişim; pano içeriği ekleme ve işlem yapma olanağı bildirdi. Uygulama kodu Trello'ya yazma çağrısı yapmıyor; Trello izin bağlamında `board:write` ve `organization:write` görünüyor. Bu geniş izin farkı public review öncesi açıklanmalı ve daraltma olanağı araştırılmalı.
- **Gerçek pano testi:** Onboarding ve araç çubuğu düğmesi açıldı; Power-Up özel panodaki kartları okuyup doğru ay/hafta/yıl görünümleri, deadline içgörüleri, kaynak bağlantıları ve ayar penceresini gösterdi. Sentetik QA kartlarıyla doğrulanan sayılar: 3 son tarih, 1 tamamlanmış, 1 gecikmiş, 1 yaklaşan ve 1 tarihsiz kart.
- **Yazdırma ve dışa aktarma:** Yazdırma görünümü ve A4/Letter, yön, başlık ve siyah-beyaz kontrolleri görüldü. Print/Save PDF tıklamasından sonra sistem yazdırma penceresi gözlenmedi; gerçek baskı/PDF çıktısı doğrulanmadı. CSV ve ICS düğmeleri sentetik veride çağrıldı ancak indirme teyidi alınmadı. Birim testleri tarih/CSV/ICS mantığını kapsıyor.
- **Trello Marketplace incelemesi:** Trello Review Team uygulamayı panoya ekleyip test ettikten sonra 9 Ekim 2026'da iki değişiklik istedi: (1) Overview ve Description alanlarını fayda odaklı detaylarla ve bir iki görselle genişletmek, (2) connector yanıtına CSP güvenlik başlığı eklemek. Uygulama onaylı veya Directory'de listelenmiş değil; değişikliklerden sonra ekipten yeniden inceleme istenecek. Hesap sahibi ayrı bir imza e-postası almadığını bildirdi; JDA durumu Trello ile netleştirilecek.

## Uygulama kapsamı

Trello board-toolbar düğmesi, açılış rehberi, ayar penceresi, geçerli panonun salt okunur kart/liste erişimi, ay/hafta/yıl görünümleri, deadline sayımları, aylık yoğunluk göstergesi, yerel CSV/ICS üretimi, A4/US Letter yazdırma seçenekleri ve isteğe bağlı kaynak gezgini kodda mevcut. Demo verileri yalnız açıkça etiketlenmiş `?demo=1` modunda kullanılıyor.

Çok günlük kart çubukları ve ayrı çok sayfalı proje takvimi ilk sürümde tamamlanmadı. Marketplace görselleri/GIF'i yüklenmedi. Gerçek tarayıcı indirme ve sistem yazdırma çıktısı doğrulaması tamamlanmadı.

## Kaynak ve kayıt

- Repo: [GitHub](https://github.com/mateopedersen/calendarflow-trello-powerup)
- Connector: [GitHub Pages](https://mateopedersen.github.io/calendarflow-trello-powerup/src/index.html)
- Gerçek Trello admin kaydı: [Power-Up kaydı](https://trello.com/apps/6ac7553081b7246032038717/edit)
- Kaynak ve lisans: [README](./README.md), [MIT LICENSE](./LICENSE)
- Beta Calendars tarih doğrulaması: [kaynak URL listesi](./verified_beta_destinations.txt)
- Backlink envanteri: [CSV raporu](./backlink_audit.csv)

## Kalan yayın adımları

1. Yazdırma/PDF, CSV ve ICS indirmelerini tarayıcıda görünür çıktıyla doğrula; gerekiyorsa düzelt.
2. Trello izin modelini resmi belgelerle karşılaştır ve connector yalnız okuma yaparken neden yazma düzeyinde onay istendiğini çözümle.
3. İngilizce mağaza listing'ini Trello portalında yeni açıklama ve önizleme görselleriyle güncelle.
4. GitHub Pages yerine CSP ve ek güvenlik başlıklarını uygulayabilen bir host'a geç; Trello'nun embed akışını ve CSP'yi QA panosunda doğrula.
5. Review Team'e güncellemeleri bildirip yeniden inceleme iste; yanıt ve durumu kaydet.
6. Ayrı JDA gerekliliği olup olmadığını Trello ile netleştir; yasal metni görmeden kabul edilmiş varsayma.
7. Trello onay verirse herkese açık directory kaydını anonim erişimde doğrula.

Resmî kaynaklar: [Public Power-Up Guidelines](https://developer.atlassian.com/cloud/trello/guides/power-ups/public-power-up-guidelines/), [Submit Your Power-Up](https://developer.atlassian.com/cloud/trello/guides/power-ups/submitting-your-power-up/), [Managing Apps](https://developer.atlassian.com/cloud/trello/guides/power-ups/managing-apps/), [User Permissions](https://developer.atlassian.com/cloud/trello/guides/power-ups/user-permissions-in-power-ups/).
