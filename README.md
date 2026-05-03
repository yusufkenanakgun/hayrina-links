# hayrina-links

Hayrına uygulaması için universal links (iOS) / app links (Android) altyapısı.
Vercel üzerinden `https://hayrina-links.vercel.app/` adresinde host edilir.

## Dosyalar

- `vercel.json` — `/listing/:id` ve `/chat/:id` rewrite'ları, AASA için Content-Type header
- `.well-known/apple-app-site-association` — iOS universal links manifest (uzantısız)
- `.well-known/assetlinks.json` — Android app links manifest
- `index.html` — store fallback / redirect sayfası

## Yapılması gerekenler

1. `apple-app-site-association` içindeki `APPLE_TEAM_ID` yerine 10 karakterli Apple Team ID
2. `assetlinks.json` içindeki `ANDROID_SHA256_FINGERPRINT_BURAYA` yerine production keystore SHA-256 (`eas credentials` çıktısından)
3. `index.html` içindeki `APP_STORE_ID` yerine App Store yayın sonrası gelen 10 haneli ID

## Deploy

GitHub'a push → Vercel otomatik build alır.

## Test URL'leri

- https://hayrina-links.vercel.app/.well-known/apple-app-site-association
- https://hayrina-links.vercel.app/.well-known/assetlinks.json
- https://hayrina-links.vercel.app/listing/test123
- https://hayrina-links.vercel.app/
