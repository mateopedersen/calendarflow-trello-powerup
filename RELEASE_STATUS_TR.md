# CalendarFlow — Yayın Durumu

Kontrol tarihi: 8 Ekim 2026

## Gerçek durum

- **Geliştirme:** İlk sürüm yerel çalışma alanında hazır.
- **Test:** 10/10 birim testi geçti; JavaScript sözdizimi kontrolleri temiz. Tarayıcıda örnek verili ay, hafta, yıl, analiz ve kaynak ekranları elle kontrol edildi.
- **Trello kaydı:** Oluşturulmadı. Uygulama yönetim sayfası Atlassian oturum açma ekranına yönlendirdi; kayıt öncesi gerçek HTTPS connector adresi gerekli.
- **Power-Up ID / connector / Marketplace:** Henüz yok; uygulama dizininde listelenmiyor veya onaylanmış değil.
- **GitHub:** [Halka açık depo](https://github.com/mateopedersen/calendarflow-trello-powerup) açıldı; şu anda boş. Kaynak kodu göndermek otomatik onay denetimi tarafından durduruldu. Denetim, içerik ve herkese açık hedef için bu sohbette yeterli, açık yetki görmedi. Kod yerel dosyalarda hazır; onay olmadan başka bir yükleme yolu kullanılmadı.
- **HTTPS yayını:** Henüz yapılmadı. GitHub Pages dosyalar gönderildikten ve ücretsiz Pages yayını etkinleştirildikten sonra kullanılabilir.
- **JDA:** Trello'nun güncel submission yönergesine göre ortak geliştirici anlaşması imzalanması gerekiyor. Bu anlaşma uygulama sahibi tarafından incelenip kabul edilmeli.

## Uygulama kapsamı

Yerel kaynakta Trello board-toolbar düğmesi, açılış rehberi, ayarlar, salt okunur geçerli-board kart/liste erişimi, ay/hafta/yıl görünümleri, due date sayımları ve aylık yoğunluk göstergesi bulunuyor. CSV ve iCalendar dosyaları tarayıcıda oluşturuluyor. Yazdırma ayarları A4/US Letter, yön, kart adlarını gösterme ve tek renk seçeneğini içeriyor; PDF oluşturma tarayıcının yazdırma penceresine bırakılıyor. Kaynak gezgini yalnız kullanıcı tıkladığında dış sayfa açıyor.

Canlı Trello içindeki kart entegrasyonu, kiosk olmayan yazdırma/PDF çıktısı, gerçek board üzerinde kullanım, mobil cihaz, koyu tema, büyük board performansı, Power-Up simgesi/listing görsellerinin portal yüklemesi ve Marketplace incelemesi henüz doğrulanmadı. Başlangıç ve bitiş arasında çok günlük kart şeridi ve ayrı çok sayfalı proje takvimi düzeni bu ilk sürümde tamamlanmadı.

## Kaynak ve lisans

- Yerel Git commit: `92f1d26` (`Build initial CalendarFlow Trello Power-Up`)
- Lisans: MIT, [LICENSE](./LICENSE)
- Kaynak: [README](./README.md), [uygulama kodu](./src/planner.js), [takvim motoru](./src/calendar.js), [dışa aktarma](./src/exports.js)
- Doğrulanmış kaynak sayfaları ve tarih tutarsızlıkları: [araştırma notları](./docs/trello-research.md), [kaynak URL listesi](./verified_beta_destinations.txt)
- Backlink envanteri: [CSV raporu](./backlink_audit.csv)

## Testler

`TZ=America/Los_Angeles` ile çalıştırılan Node.js yerleşik testlerinde 10 test geçti. Böylece tarih-only parse ve takvim davranışları ABD Pasifik saat diliminde de kontrol edildi. Yerel HTTP örneği `?demo=1` modu ile açıldı; bu örnek veriler gerçek board verisi değildir.

## Sonraki gerekli adımlar

1. Uygulama kodunun ve belgelerin halka açık GitHub deposuna ve GitHub Pages'e yayımlanması için açık sahip onayı gerekir. Otomatik denetim, yerel kaynaktan public depoya gönderimi reddetti.
2. Atlassian hesabında oturum açıp gerçek destek e-postasını doğrulamak gerekir.
3. Connector HTTPS üzerinde yayımlandıktan sonra Trello portalında app kaydı ve yetenekler tamamlanmalı.
4. JDA hesap sahibi tarafından incelenip kabul edilmeli; bu adımı ajan tamamlayamaz.
5. Test board'unda canlı entegrasyon ve yazdırma doğrulanmalı; listing assets ve gerçek alanlar tamamlanıp başvuru gönderilmeli.
