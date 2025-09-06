# 🚀 Jovio Bot TOS&PP - Deployment Guide

Bu döküman, Jovio Bot'un Terms of Service ve Privacy Policy web sitesini GitHub Pages üzerinden nasıl deploy edeceğinizi adım adım açıklar.

## 📋 Ön Gereksinimler

- ✅ GitHub hesabı
- ✅ Discord Developer Portal erişimi
- ✅ Jovio Bot'unuzun Discord'da kayıtlı olması

## 🔧 1. GitHub Repository Kurulumu

### 1.1 Yeni Repository Oluşturma
1. GitHub'da oturum açın
2. "New repository" butonuna tıklayın
3. Repository bilgileri:
   - **Repository name**: `jovio-tos-pp` (veya istediğiniz isim)
   - **Description**: `Jovio Discord Bot - Terms of Service & Privacy Policy`
   - **Visibility**: Public (GitHub Pages için gerekli)
   - **Initialize this repository with**: README.md seçmeyin (zaten var)

### 1.2 Dosyaları Upload Etme
```bash
# Yöntem 1: GitHub Web Interface
# - "uploading an existing file" linkine tıklayın
# - TOS&PP/ klasöründeki tüm dosyaları drag & drop yapın
# - Commit message: "Initial commit - TOS&PP website"
# - "Commit changes" butonuna tıklayın

# Yöntem 2: Git Command Line
git clone https://github.com/[username]/jovio-tos-pp.git
cd jovio-tos-pp
# TOS&PP klasöründeki dosyaları buraya kopyalayın
git add .
git commit -m "Initial commit - TOS&PP website"
git push origin main
```

## 🌐 2. GitHub Pages Aktivasyonu

### 2.1 Repository Settings
1. Repository sayfasında **Settings** sekmesine tıklayın
2. Sol menüden **Pages** sekmesini seçin

### 2.2 Source Ayarları
1. **Source** bölümünde "Deploy from a branch" seçin
2. **Branch** dropdown'dan "main" seçin
3. **Folder** dropdown'dan "/ (root)" seçin
4. **Save** butonuna tıklayın

### 2.3 Deployment Kontrolü
- GitHub otomatik olarak site deploy etmeye başlar
- **Actions** sekmesinden build durumunu takip edebilirsiniz
- Deploy tamamlandığında yeşil ✅ işareti görünür
- Site URL'i: `https://[username].github.io/jovio-tos-pp/`

## 🤖 3. Discord Bot Settings

### 3.1 Discord Developer Portal
1. [Discord Developer Portal](https://discord.com/developers/applications)'a gidin
2. Jovio Bot'unuzu seçin
3. **General Information** sekmesine gidin

### 3.2 URL'leri Güncelleme
```
Terms of Service URL: https://[username].github.io/jovio-tos-pp/#terms
Privacy Policy URL: https://[username].github.io/jovio-tos-pp/#privacy
```

**Önemli**: `[username]` kısmını kendi GitHub kullanıcı adınızla değiştirin!

### 3.3 Değişiklikleri Kaydetme
1. URL'leri girdikten sonra **Save Changes** butonuna tıklayın
2. Bot'unuz artık resmi TOS ve Privacy Policy'ye sahip!

## ✅ 4. Test ve Doğrulama

### 4.1 Website Testi
1. Browser'da site URL'ini açın: `https://[username].github.io/jovio-tos-pp/`
2. Kontrol edilecekler:
   - ✅ Site düzgün yükleniyor mu?
   - ✅ Navigasyon çalışıyor mu?
   - ✅ Terms of Service içeriği görünüyor mu?
   - ✅ Privacy Policy içeriği görünüyor mu?
   - ✅ Mobil uyumlu mu?

### 4.2 Discord Bot Testi
1. Discord'da bot'unuzun profiline tıklayın
2. "Terms of Service" ve "Privacy Policy" linklerini test edin
3. Linkler doğru sayfalara yönlendiriyor mu kontrol edin

## 🔧 5. Özelleştirme

### 5.1 İçerik Güncelleme
Hizmet şartları veya gizlilik politikasını güncellemek için:

1. Repository'de `script.js` dosyasını düzenleyin
2. `loadTermsOfService()` veya `loadPrivacyPolicy()` fonksiyonlarındaki HTML içeriğini güncelleyin
3. Değişiklikleri commit edin
4. GitHub Pages otomatik olarak güncellenecek

### 5.2 Tasarım Değişiklikleri
```css
/* styles.css dosyasında renkleri değiştirme */
:root {
    --primary-color: #6366f1;    /* Bot'unuzun ana rengine göre ayarlayın */
    --secondary-color: #8b5cf6;  /* İkincil renk */
}
```

### 5.3 İletişim Bilgileri
```javascript
// script.js dosyasında iletişim bilgilerini güncelleyin
// E-posta adreslerini kendi adresinizle değiştirin
// GitHub repository linklerini güncelleyin
```

## 🚨 6. Sorun Giderme

### 6.1 Site Açılmıyor
- **Kontrol**: Repository public mi?
- **Kontrol**: GitHub Pages aktif mi?
- **Çözüm**: 5-10 dakika bekleyin (deployment süresi)

### 6.2 İçerik Güncellenmiyor
- **Kontrol**: Değişiklikler commit edildi mi?
- **Çözüm**: Browser cache'ini temizleyin (Ctrl+F5)
- **Çözüm**: GitHub Actions'da build başarılı mı kontrol edin

### 6.3 Discord'da Linkler Çalışmıyor
- **Kontrol**: URL'lerde `[username]` kısmı değiştirildi mi?
- **Kontrol**: URL'ler tam ve doğru mu?
- **Çözüm**: Discord Developer Portal'da URL'leri tekrar kaydedin

## 📊 7. Analytics ve Monitoring (Opsiyonel)

### 7.1 Google Analytics
```html
<!-- index.html head bölümüne ekleyin -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### 7.2 Site Monitoring
- [UptimeRobot](https://uptimerobot.com/) ile site durumunu izleyin
- [PageSpeed Insights](https://pagespeed.web.dev/) ile performans ölçün

## 🔄 8. Güncelleme Süreci

### 8.1 Düzenli Güncelleme
1. Yasal değişiklikler için dökümanları gözden geçirin
2. Bot özelliklerine göre hizmet şartlarını güncelleyin
3. Değişiklik tarihlerini güncelleyin
4. Kullanıcıları Discord'da bilgilendirin

### 8.2 Version Control
```bash
# Güncelleme öncesi backup
git tag v1.0.0
git push origin v1.0.0

# Güncelleme sonrası
git add .
git commit -m "Update TOS&PP - v1.1.0"
git tag v1.1.0
git push origin main
git push origin v1.1.0
```

## 📞 9. Destek

Deployment sırasında sorun yaşarsanız:

1. **GitHub Issues**: Repository'nizde issue açın
2. **Discord Community**: Discord geliştirici topluluklarından yardım alın
3. **Documentation**: GitHub Pages ve Discord Bot dokümantasyonlarını inceleyin

## ✨ 10. Tamamlandı!

Tebrikler! 🎉 Jovio Bot'unuz artık profesyonel Terms of Service ve Privacy Policy'ye sahip.

### Final Checklist:
- ✅ GitHub repository oluşturuldu
- ✅ GitHub Pages aktif
- ✅ Website erişilebilir
- ✅ Discord bot settings güncellendi
- ✅ Linkler test edildi
- ✅ İçerik doğrulandı

Bot'unuz artık Discord'un gereksinimlerini karşılıyor ve kullanıcılarınız güvenle hizmetinizi kullanabiliyor! 🚀
