(function () {
    // Yayın sonrası gerçek değerlerle değiştir:
    var IOS_STORE = 'https://apps.apple.com/tr/app/hayrina/idAPP_STORE_ID';
    var ANDROID_STORE = 'https://play.google.com/store/apps/details?id=com.hayrina.app';

    var path = window.location.pathname || '/';
    var search = window.location.search || '';
    var ua = navigator.userAgent || '';
    var isIOS = /iPhone|iPad|iPod/i.test(ua);
    var isAndroid = /Android/i.test(ua);

    var stores = document.getElementById('stores');
    var msg = document.getElementById('msg');
    document.getElementById('ios').href = IOS_STORE;
    document.getElementById('android').href = ANDROID_STORE;

    function showStores(text) {
    msg.textContent = text;
    stores.style.display = 'block';
    }

    if (!isIOS && !isAndroid) {
    showStores('Hayrına mobil uygulamasını telefonunuzdan açın.');
    return;
    }

    // Universal link zaten yüklüyse intercept etmiş olur, bu sayfa hiç görünmez.
    // Burası: app yüklü değil + /listing/xxx açıldı durumu.
    var deepPath = path.replace(/^\/+/, '');
    var scheme = 'hayrina://' + deepPath + search;

    var fallbackTimer = setTimeout(function () {
    showStores('Uygulama yüklü değil. Mağazadan indirebilirsiniz:');
    window.location.href = isIOS ? IOS_STORE : ANDROID_STORE;
    }, 1500);

    // Sayfa background'a giderse (uygulama açıldı), fallback'i iptal et
    document.addEventListener('visibilitychange', function () {
    if (document.hidden) clearTimeout(fallbackTimer);
    });

    // Custom scheme tetikle
    window.location.href = scheme;
})();