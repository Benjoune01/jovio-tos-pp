// Jovio Bot - Terms of Service & Privacy Policy JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Update dates
    updateDates();
    
    // Load document content
    loadTermsOfService();
    loadPrivacyPolicy();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
    
    // Setup active navigation
    setupActiveNavigation();
});

// Update document dates
function updateDates() {
    const currentDate = new Date().toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    const termsDateElement = document.getElementById('terms-date');
    const privacyDateElement = document.getElementById('privacy-date');
    
    if (termsDateElement) termsDateElement.textContent = currentDate;
    if (privacyDateElement) privacyDateElement.textContent = currentDate;
}

// Load Terms of Service content
function loadTermsOfService() {
    const termsContent = document.querySelector('.terms-content');
    if (!termsContent) return;
    
    const termsHTML = `
        <h3>1. 📋 Hizmet Tanımı</h3>
        <p><strong>Jovio Bot</strong>, Discord platformu üzerinde yapay zeka teknolojisi kullanarak video ve görsel üretimi yapan bir Discord botudur. Bu bot, CRAULE API servisi ile entegre çalışarak kullanıcıların metin açıklamalarından yüksek kaliteli videolar ve görseller üretmesine olanak sağlar.</p>
        
        <h4>1.1 Sunulan Hizmetler</h4>
        <ul>
            <li><strong>Video Üretimi:</strong> Metin açıklamalarından AI destekli video oluşturma</li>
            <li><strong>Görsel Üretimi:</strong> Yapay zeka ile görsel/resim oluşturma</li>
            <li><strong>Kredi Sistemi:</strong> Kullanım tabanlı kredi yönetimi</li>
            <li><strong>Kullanıcı Yönetimi:</strong> Otomatik kayıt ve hesap yönetimi</li>
        </ul>

        <h3>2. ✅ Kabul Edilebilir Kullanım</h3>
        <p>Jovio Bot'u kullanırken aşağıdaki kurallara uymanız gerekmektedir:</p>
        
        <h4>2.1 İzin Verilen Kullanımlar</h4>
        <ul>
            <li>Yaratıcı ve sanatsal içerik üretimi</li>
            <li>Eğitim ve öğretim amaçlı materyaller</li>
            <li>Kişisel projeler ve hobiler</li>
            <li>Ticari olmayan sosyal medya içerikleri</li>
            <li>Sunum ve demo materyalleri</li>
        </ul>

        <h4>2.2 Yasaklanan İçerikler</h4>
        <ul>
            <li>🚫 Şiddet, nefret söylemi veya ayrımcılık içeren içerikler</li>
            <li>🚫 Pornografik, cinsel veya uygunsuz içerikler</li>
            <li>🚫 Telif hakkı ihlali yapan içerikler</li>
            <li>🚫 Yanıltıcı, sahte veya dezenformasyon içeren materyaller</li>
            <li>🚫 Zararlı, tehditkar veya taciz edici içerikler</li>
            <li>🚫 Spam veya istenmeyen reklam içerikleri</li>
            <li>🚫 Kişisel bilgileri izinsiz kullanan içerikler</li>
        </ul>

        <h3>3. 💳 Kredi Sistemi ve Ücretlendirme</h3>
        
        <h4>3.1 Kredi Kullanımı</h4>
        <ul>
            <li><strong>Video Üretimi:</strong> 10 kredi</li>
            <li><strong>Görsel Üretimi:</strong> 5 kredi</li>
            <li><strong>Hoş Geldin Bonusu:</strong> Yeni kullanıcılara 15 kredi</li>
            <li><strong>Manuel Kayıt Bonusu:</strong> Yönetici tarafından kayıt edilenlere 100 kredi</li>
        </ul>

        <h4>3.2 Kredi Politikası</h4>
        <p>Krediler, başarısız işlemler durumunda iade edilmez. Sistem hatası nedeniyle başarısız olan işlemler için kredi iadesi yapılabilir.</p>

        <h3>4. 🔒 Hesap Güvenliği ve Sorumluluklar</h3>
        
        <h4>4.1 Kullanıcı Sorumlulukları</h4>
        <ul>
            <li>Discord hesabınızın güvenliğini sağlamak</li>
            <li>Bot komutlarını sorumlu bir şekilde kullanmak</li>
            <li>Diğer kullanıcılara saygılı davranmak</li>
            <li>Sistem kaynaklarını adil şekilde kullanmak</li>
        </ul>

        <h4>4.2 Yasaklama (Blacklist) Politikası</h4>
        <p>Aşağıdaki durumlarda hesabınız geçici veya kalıcı olarak yasaklanabilir:</p>
        <ul>
            <li>Hizmet şartlarının tekrarlı ihlali</li>
            <li>Yasaklanan içerik türlerinin üretilmesi</li>
            <li>Sistem kaynaklarının kötüye kullanılması</li>
            <li>Spam veya otomatik bot kullanımı</li>
            <li>Diğer kullanıcıları rahatsız etme</li>
        </ul>

        <h3>5. ⚡ Hizmet Sınırlamaları</h3>
        
        <h4>5.1 Teknik Sınırlamalar</h4>
        <ul>
            <li><strong>Rate Limiting:</strong> Kullanıcı başına saatlik işlem sınırları</li>
            <li><strong>İçerik Boyutu:</strong> Maksimum 2000 karakter prompt</li>
            <li><strong>İşlem Süresi:</strong> Video: 2-10 dakika, Görsel: 30-120 saniye</li>
            <li><strong>Dosya Boyutu:</strong> Maksimum 25 MB (Discord sınırı)</li>
        </ul>

        <h4>5.2 Hizmet Erişilebilirliği</h4>
        <p>Jovio Bot 7/24 hizmet vermeye çalışır, ancak bakım, güncelleme veya teknik sorunlar nedeniyle geçici kesintiler yaşanabilir.</p>

        <h3>6. 📊 Veri Saklama ve İşleme</h3>
        
        <h4>6.1 Saklanan Veriler</h4>
        <ul>
            <li>Discord kullanıcı ID'si</li>
            <li>Kredi bakiyesi ve işlem geçmişi</li>
            <li>Üretilen içerik istatistikleri</li>
            <li>Hesap oluşturma ve son aktivite tarihleri</li>
        </ul>

        <h4>6.2 Veri Saklama Süresi</h4>
        <p>Kullanıcı verileri, hesap aktif olduğu sürece saklanır. 6 ay boyunca inaktif olan hesaplar silinebilir. Üretilen video ve görseller lokal sunucuda geçici olarak saklanır ve 24 saat sonra otomatik olarak silinir.</p>

        <h3>7. 🔄 Değişiklikler ve Güncellemeler</h3>
        <p>Bu hizmet şartları, hizmetin geliştirilmesi ve yasal gerekliliklerin karşılanması amacıyla güncellenebilir. Önemli değişiklikler kullanıcılara Discord üzerinden duyurulacaktır.</p>

        <h3>8. ⚖️ Sorumluluk Sınırlamaları</h3>
        
        <h4>8.1 Hizmet Garantileri</h4>
        <p>Jovio Bot "olduğu gibi" sunulmaktadır. Hizmetin kesintisiz, hatasız veya güvenli olacağına dair garanti verilmez.</p>

        <h4>8.2 Zararlar</h4>
        <p>Bot kullanımından kaynaklanan doğrudan veya dolaylı zararlardan sorumluluk kabul edilmez.</p>

        <h3>9. 📜 Yasal Hükümler</h3>
        <p>Bu hizmet şartları Türkiye Cumhuriyeti yasalarına tabidir. Uyuşmazlıklar İstanbul mahkemeleri tarafından çözümlenecektir.</p>

        <div style="background: #f0f9ff; border-left: 4px solid #0ea5e9; padding: 1rem; margin: 2rem 0; border-radius: 4px;">
            <p><strong>📌 Önemli Not:</strong> Bu hizmet şartlarını dikkatli okuyunuz. Jovio Bot'u kullanarak bu şartları kabul etmiş sayılırsınız.</p>
        </div>
    `;
    
    termsContent.innerHTML = termsHTML;
}

// Load Privacy Policy content
function loadPrivacyPolicy() {
    const privacyContent = document.querySelector('.privacy-content');
    if (!privacyContent) return;
    
    const privacyHTML = `
        <h3>1. 🔒 Giriş</h3>
        <p>Bu Gizlilik Politikası, <strong>Jovio Bot</strong> Discord botunun kullanıcı verilerini nasıl topladığını, kullandığını, sakladığını ve koruduğunu açıklamaktadır.</p>

        <h4>1.1 Kapsam</h4>
        <p>Bu politika, Jovio Bot hizmetini kullanan tüm Discord kullanıcılarına uygulanır.</p>

        <h3>2. 📊 Toplanan Veriler</h3>
        
        <h4>2.1 Otomatik Olarak Toplanan Veriler</h4>
        <ul>
            <li><strong>Discord Kullanıcı ID:</strong> Benzersiz Discord tanımlayıcınız</li>
            <li><strong>Sunucu ID:</strong> Bot'un kullanıldığı Discord sunucu bilgisi</li>
            <li><strong>Komut Kullanım Verileri:</strong> Hangi komutları ne zaman kullandığınız</li>
            <li><strong>İşlem Geçmişi:</strong> Video/görsel üretim istekleri ve sonuçları</li>
            <li><strong>Kredi İşlemleri:</strong> Kredi kullanımı ve bakiye değişiklikleri</li>
        </ul>

        <h4>2.2 Kullanıcı Tarafından Sağlanan Veriler</h4>
        <ul>
            <li><strong>Prompt Metinleri:</strong> Video/görsel üretimi için girdiğiniz açıklamalar</li>
            <li><strong>Tercih Ayarları:</strong> En-boy oranı, kalite seçimleri</li>
        </ul>

        <h4>2.3 Teknik Veriler</h4>
        <ul>
            <li><strong>IP Adresi:</strong> Discord API üzerinden alınan bağlantı bilgileri</li>
            <li><strong>Cihaz Bilgileri:</strong> Discord istemci türü ve sürümü</li>
            <li><strong>Kullanım İstatistikleri:</strong> Bot performansı ve hata analizi</li>
        </ul>

        <h3>3. 🎯 Veri Kullanım Amaçları</h3>
        
        <h4>3.1 Hizmet Sunumu</h4>
        <ul>
            <li>Video ve görsel üretim hizmetlerinin sağlanması</li>
            <li>Kullanıcı hesaplarının yönetilmesi</li>
            <li>Kredi sisteminin işletilmesi</li>
            <li>İçerik moderasyonu ve güvenlik kontrolü</li>
        </ul>

        <h4>3.2 Hizmet İyileştirme</h4>
        <ul>
            <li>Bot performansının analiz edilmesi</li>
            <li>Hata ayıklama ve sistem optimizasyonu</li>
            <li>Yeni özellik geliştirme</li>
            <li>Kullanıcı deneyiminin iyileştirilmesi</li>
        </ul>

        <h3>4. 🔐 Veri Saklama ve Güvenlik</h3>
        
        <h4>4.1 Saklama Süresi</h4>
        <ul>
            <li><strong>Kullanıcı Hesap Verileri:</strong> Hesap aktif olduğu sürece</li>
            <li><strong>İşlem Geçmişi:</strong> 2 yıl</li>
            <li><strong>Üretilen İçerikler:</strong> 24 saat (geçici saklama)</li>
            <li><strong>Log Verileri:</strong> 30 gün</li>
            <li><strong>Hata Kayıtları:</strong> 90 gün</li>
        </ul>

        <h4>4.2 Güvenlik Önlemleri</h4>
        <ul>
            <li><strong>Şifreleme:</strong> Tüm veriler şifreli olarak saklanır</li>
            <li><strong>Erişim Kontrolü:</strong> Yetkili personel tarafından sınırlı erişim</li>
            <li><strong>Güvenlik Duvarı:</strong> Sunucu ve ağ güvenliği</li>
            <li><strong>Düzenli Yedekleme:</strong> Veri kaybına karşı koruma</li>
        </ul>

        <h3>5. 🤝 Üçüncü Taraf Paylaşımı</h3>
        
        <h4>5.1 Hizmet Sağlayıcıları</h4>
        <p>Verileriniz aşağıdaki üçüncü taraf hizmetlerle paylaşılabilir:</p>
        <ul>
            <li><strong>CRAULE API:</strong> Video/görsel üretimi için</li>
            <li><strong>Discord API:</strong> Bot işlevselliği için</li>
            <li><strong>MySQL Veritabanı:</strong> Veri saklama için</li>
        </ul>

        <h4>5.2 Paylaşım Koşulları</h4>
        <ul>
            <li>Sadece hizmet sunumu için gerekli veriler paylaşılır</li>
            <li>Kişisel veriler satılmaz veya pazarlama için kullanılmaz</li>
            <li>Yasal zorunluluk olmadıkça veri paylaşılmaz</li>
        </ul>

        <h3>6. 🌍 Uluslararası Veri Transferi</h3>
        <p>Verileriniz, hizmet sağlayıcılarımızın bulunduğu ülkelere transfer edilebilir. Bu transferler uygun güvenlik önlemleri ile gerçekleştirilir.</p>

        <h3>7. 👤 Kullanıcı Hakları</h3>
        
        <h4>7.1 KVKK ve GDPR Hakları</h4>
        <p>Verilerinizle ilgili aşağıdaki haklara sahipsiniz:</p>
        <ul>
            <li><strong>Erişim Hakkı:</strong> Hangi verilerinizin işlendiğini öğrenme</li>
            <li><strong>Düzeltme Hakkı:</strong> Yanlış verilerin düzeltilmesini isteme</li>
            <li><strong>Silme Hakkı:</strong> Verilerinizin silinmesini talep etme</li>
            <li><strong>İşleme İtiraz:</strong> Veri işlemeye itiraz etme</li>
            <li><strong>Veri Taşınabilirliği:</strong> Verilerinizi başka platforma aktarma</li>
        </ul>

        <h3>8. 🍪 Çerezler ve İzleme</h3>
        
        <h4>8.1 Discord Bot Sınırlamaları</h4>
        <p>Jovio Bot, Discord platformu üzerinde çalıştığı için geleneksel web çerezleri kullanmaz. Ancak aşağıdaki izleme yöntemleri kullanılabilir:</p>
        <ul>
            <li><strong>Session Tracking:</strong> Aktif bot etkileşimleri</li>
            <li><strong>Usage Analytics:</strong> Komut kullanım istatistikleri</li>
            <li><strong>Performance Monitoring:</strong> Bot performans metrikleri</li>
        </ul>

        <h3>9. 👶 Çocukların Gizliliği</h3>
        <p>Jovio Bot, 13 yaşından küçük çocuklara yönelik tasarlanmamıştır. Discord'un kullanım şartları gereği 13 yaş altı kullanıcılardan bilerek veri toplamayız.</p>

        <h3>10. 🔔 Veri İhlali Bildirimi</h3>
        <p>Veri güvenliği ihlali durumunda:</p>
        <ul>
            <li>İhlal tespit edildikten sonra 72 saat içinde ilgili otoritelere bildirim yapılır</li>
            <li>Kullanıcılar Discord üzerinden bilgilendirilir</li>
            <li>Alınan önlemler ve öneriler paylaşılır</li>
        </ul>

        <h3>11. 📝 Politika Güncellemeleri</h3>
        <p>Bu gizlilik politikası, hizmet geliştirmeleri ve yasal değişiklikler nedeniyle güncellenebilir. Önemli değişiklikler Discord üzerinden duyurulur.</p>

        <h3>12. ⚖️ Yasal Dayanak</h3>
        <p>Veri işleme faaliyetlerimiz aşağıdaki yasal dayanaklar üzerine kuruludur:</p>
        <ul>
            <li><strong>Sözleşme:</strong> Hizmet sunumu için gerekli işlemler</li>
            <li><strong>Meşru Menfaat:</strong> Bot güvenliği ve iyileştirme</li>
            <li><strong>Rıza:</strong> İsteğe bağlı özellikler için</li>
            <li><strong>Yasal Yükümlülük:</strong> Kanuni gereklilikler</li>
        </ul>

        <div style="background: #fef3c7; border-left: 4px solid #f59e0b; padding: 1rem; margin: 2rem 0; border-radius: 4px;">
            <p><strong>⚠️ Önemli Uyarı:</strong> Bu gizlilik politikası, veri işleme faaliyetlerimizi şeffaf şekilde açıklamaktadır. Jovio Bot'u kullanarak bu politikayı kabul etmiş sayılırsınız.</p>
        </div>

        <div style="background: #dcfce7; border-left: 4px solid #22c55e; padding: 1rem; margin: 2rem 0; border-radius: 4px;">
            <p><strong>🔒 Güvenlik Taahhüdü:</strong> Verilerinizin güvenliği bizim önceliğimizdir.</p>
        </div>
    `;
    
    privacyContent.innerHTML = privacyHTML;
}

// Setup smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 100;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Setup active navigation highlighting
function setupActiveNavigation() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNav() {
        const scrollPos = window.scrollY + 150;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav();
}

// Add CSS class for active navigation links
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: var(--primary-color) !important;
        background-color: var(--bg-secondary);
        font-weight: 600;
    }
`;
document.head.appendChild(style);
