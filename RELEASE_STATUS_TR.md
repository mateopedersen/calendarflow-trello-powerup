# CalendarFlow — Yayın Durumu

Kontrol tarihi: 8 Ekim 2026

## Gerçek durum

- **Kaynak ve lisans:** İlk sürüm MIT lisansıyla herkese açık depoda yayımlandı: [calendarflow-trello-powerup](https://github.com/mateopedersen/calendarflow-trello-powerup).
- **HTTPS dağıtımı:** GitHub Pages etkin. [Power-Up connector](https://mateopedersen.github.io/calendarflow-trello-powerup/src/index.html), [gizlilik bildirimi](https://mateopedersen.github.io/calendarflow-trello-powerup/docs/privacy.html) ve [destek sayfası](https://mateopedersen.github.io/calendarflow-trello-powerup/docs/support.html) tarayıcıda açılıp doğrulandı. Connector Trello’nun resmi `p.trellocdn.com/power-up.min.js` dosyasını yükler.
- **CI / birim testi:** GitHub Actions’ın yeniden çalıştırılan dağıtım akışında test ve Pages dağıtım adımları başarılı. İlk dağıtım denemesi Pages henüz etkinleştirilmediği için başarısız oldu. Yerel Node testleri `TZ=America/Los_Angeles` altında 10/10 geçti; kaynak JavaScript sözdizimi kontrolleri de temizdi.
- **Trello uygulama kaydı:** Gerçek app kaydı oluşturuldu. Power-Up ID: `6ac7553081b7246032038717`. Çalışma alanı: `Mateo Pedersen's workspace`. Connector ve SVG ikon URL'leri, Beta Calendars yazarı, doğrulanmış destek e-postası ve iki kategori kaydedildi.
- **Trello yetenekleri:** `board-buttons`, `on-enable` ve `show-settings` portalda seçildi; diğer yetenekler kapalı.
- **Marketplace listing:** İngilizce başlık, kısa overview ve uygulanmış özellikleri anlatan Markdown açıklama Trello portalına kaydedildi. Bu, public directory incelemesine gönderildiği veya listelendiği anlamına gelmez.
- **QA panosu:** `CalendarFlow QA — Beta Calendars` adlı özel pano oluşturuldu. Uygulama ekleme ekranı, panoya erişimin yanı sıra karta içerik ekleme, kart/listelerde işlem yapma ve pano üyelerinin kullanıcı bilgilerini görme olanağı bildirdi. Kullanıcı onayı beklenirken **Add** düğmesine basılmadı; bu nedenle gerçek Trello iframe ve kart testleri henüz yapılmadı.
- **JDA / yayın incelemesi:** JDA incelenip kabul edilmedi. Public marketplace submission gönderilmedi; Trello directory'de onaylı veya listelenmiş değil. Gerçek Power-Up ID'si, public URL ve listing formu bu durumu değiştirmez.

## Uygulama kapsamı

Trello board-toolbar düğmesi, açılış rehberi, ayar penceresi, salt okunur geçerli-board kart/liste erişimi, ay/hafta/yıl görünümleri, deadline sayımları, aylık yoğunluk göstergesi, yerel CSV/ICS üretimi, A4/US Letter yazdırma seçenekleri ve isteğe bağlı kaynak gezgini kodda tamamlandı. Trello kartlarına yazma yapılmıyor. Demo verileri yalnız açıkça etiketlenmiş `?demo=1` modunda kullanılıyor.

Gerçek Trello panosunda yetenek callback'leri, kart verisi ve yazdırma görünümü henüz canlı test edilmedi. Çok günlük kart çubukları ve ayrı çok sayfalı proje takvimi ilk sürümde tamamlanmadı. Marketplace listing görselleri/gif'i yüklenmedi. Support form gönderimi, Trello app'i etkinleştirme ve gerçek kullanıcı board'undaki davranışlar test edilmedi.

## Kaynak, yayın ve kayıt

- Repo: [GitHub](https://github.com/mateopedersen/calendarflow-trello-powerup)
- Connector: [GitHub Pages](https://mateopedersen.github.io/calendarflow-trello-powerup/src/index.html)
- Gizlilik: [Privacy notice](https://mateopedersen.github.io/calendarflow-trello-powerup/docs/privacy.html)
- Destek: [Support](https://mateopedersen.github.io/calendarflow-trello-powerup/docs/support.html)
- Gerçek Trello admin kaydı: [app `6ac7553081b7246032038717`](https://trello.com/apps/6ac7553081b7246032038717/edit)
- Kaynak ve lisans: [README](./README.md), [MIT LICENSE](./LICENSE)
- Beta Calendars tarih doğrulaması: [kaynak URL listesi](./verified_beta_destinations.txt)
- Backlink envanteri: [CSV raporu](./backlink_audit.csv)

## Sonraki gerekli adımlar

1. Trello'nun QA panosuna gösterdiği daha geniş izin uyarısını inceleyip kullanıcı onayını bekle; onay verilirse yalnız özel QA panosunda test et.
2. JDA'yı hesap sahibi kendisi incelesin ve gerekiyorsa kabul etsin. Bu adım yapılmadan review submission gönderme.
3. App'i private QA board'da çalıştır, gerçek Trello kart verisi, onboarding, settings, print, CSV ve ICS akışlarını doğrula; hataları düzelt.
4. Ürün görselleri gerekiyorsa gerçek uygulama ekranlarından üret ve portalın boyut kurallarını doğrula.
5. Developer support submission akışındaki gereklilikleri ve JDA durumunu yeniden kontrol et; uygunsa gerçek app bilgileriyle submission gönder ve vaka/başvuru referansını kaydet.
6. Dizin sayfası public olursa listing'i ve link özelliklerini anonim erişimde doğrula.
