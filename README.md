# Khele Sanand — Live Athletics Dashboard

Single-file live results system for the Khele Sanand athletics meet: LED dashboard, Big View, Admin control room, referee phone entry (QR / link), public live results, call room, announcements (English · ગુજરાતી · हिन्दी voice), result sheets, certificates and WhatsApp sharing.

Everything is inside **`index.html`** — no server, no build, no install.

---

## 📁 Files

| File | Kya hai |
|---|---|
| `index.html` | Poora dashboard (yahi file GitHub Pages par chalegi) |
| `firebase-rules.json` | ⚡ Live Sync ke liye Firebase Realtime Database rules (optional) |
| `.nojekyll` | GitHub Pages ko file jaisi hai waisi serve karne ke liye |
| `README.md` | Ye guide |

---

## 🚀 GitHub Pages par publish kaise karein (pehli baar)

1. **github.com** par login karein → upar right **+ → New repository**.
2. Repository name: `khele-sanand-live` (ya koi bhi naam) → **Public** chunein → **Create repository**.
3. Naye repo mein **"uploading an existing file"** link par click karein.
4. Is folder ki **saari files** (`index.html`, `firebase-rules.json`, `.nojekyll`, `README.md`) drag-and-drop karein → neeche **Commit changes**.
   - `.nojekyll` chhupi file hai — agar na dikhe to bhi chalega, bas `index.html` zaroor upload karein.
5. Repo mein **Settings → Pages** kholein.
6. **Source: Deploy from a branch** → Branch: **main**, Folder: **/ (root)** → **Save**.
7. 1–2 minute baad upar link dikhega:
   `https://<aapka-username>.github.io/khele-sanand-live/`
   Yahi aapka live dashboard link hai. ✅

## 🔄 Update kaise karein (nayi file aaye tab)

1. Repo kholein → `index.html` par click → upar **🗑 Delete** nahi, balki repo ke main page par **Add file → Upload files**.
2. Nayi `index.html` upload karein (same naam) → **Commit changes**. Purani file replace ho jayegi.
3. 1–2 minute rukein, phir phone/laptop par page **refresh** karein (zarurat ho to browser cache clear karein).

> Purane print kiye hue referee QR codes kaam karte rahenge — link nahi badalta.

---

## ⚙️ Pehli baar setup (Admin panel mein)

1. GitHub wala link **laptop par** kholein → **Admin** → PIN set karein (recovery code sambhal kar rakhein).
2. **Generate → Step 1**: website address mein apna GitHub link daalein (page khud bhi bhar deta hai).
3. Referee ke liye mode:
   - **🔗 Link Mode** (bina setup ke chalta hai): referee QR scan → result bhare → **Send on WhatsApp** → control room us message ka link khole / **Enter Results → Import** mein paste kare.
   - **⚡ Live Sync** (automatic, sabse best): result seedha LED par aata hai. Neeche "Live Sync" dekhein.
4. QR window mein **Control room WhatsApp number** save karein — referee ka message seedha aapko aayega.
5. Events / Athletes add karein (Bulk Add se CSV bhi chalta hai) → **Print → Referee QR codes** print karein.
6. **Backup** lete rahein: Generate → Backup & Export. Data browser mein save hota hai, GitHub par nahi.

## ⚡ Live Sync (optional, automatic results)

1. **console.firebase.google.com** → naya project (free) → **Build → Realtime Database → Create** (location: asia-southeast1).
2. **Build → Authentication → Get started → Sign-in method → Anonymous → Enable**.
3. **Realtime Database → Rules** tab → `firebase-rules.json` ka poora content paste → **Publish**.
4. **Project settings → General** se **Web API key** copy karein; Realtime Database page se **database URL** copy karein.
5. Admin → **Generate → Phone & Sync Setup** → Mode: **Live Sync** → API key + DB URL daalein → **Save**.
6. Ab referee QR naye bante hain — inhe dobara print karein.

---

## 📺 Ground par kaun-sa screen kaise kholein

| Device | Kya kholein |
|---|---|
| Control laptop | GitHub link → **Admin** |
| LED / TV / projector | Admin → ☰ Menu → **LED dashboard** (ya Screen Control se LED Wall Output) |
| PA / speaker laptop | Admin → **🔊 Voice** → "Speak on THIS device" ON (Microsoft Edge best) |
| Referee phones | Event ka **QR scan** karein |
| Spectators | Print → **Live-results QR poster** |

## ✅ Meet se pehle checklist

- [ ] Ek referee QR **iPhone + Android** dono par scan karke test submit kiya
- [ ] PA laptop par ek announcement bol kar suna (English / ગુજરાતી / हिन्दी)
- [ ] LED par Big View / Daylight mode dhoop mein check kiya
- [ ] Demo data **Reset → Empty** kiya, asli events/athletes daale
- [ ] Backup file download karke rakhi
- [ ] Admin PIN + recovery code likh kar rakha

---

**Note:** Data har device ke browser mein rehta hai. Browser data clear karne se pehle **Backup** zaroor lein. Live Sync on ho to referee phones aur screens automatically update hote hain.
