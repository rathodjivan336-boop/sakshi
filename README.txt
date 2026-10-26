SAKSHI'S FAMILY BIRTHDAY WEBSITE
================================

Welcome! This is a separate, family-oriented birthday website for Sakshi.
Date: 28 October 2026
Theme: elegant blush pink + champagne gold
Languages: English + Kannada
Built with plain HTML, CSS and JavaScript.

1) RUN ON WINDOWS (BEGINNER FRIENDLY)
------------------------------------
Option A — easiest:
1. Extract Sakshi_Family_Birthday_Website.zip to a folder such as Desktop.
2. Open VS Code.
3. Choose File > Open Folder and select Sakshi_Family_Birthday_Website.
4. In VS Code Explorer, open index.html.
5. If you have the Live Server extension installed, right-click index.html > Open with Live Server.
6. Otherwise, double-click index.html in File Explorer to open it in Chrome/Edge.

No npm, Node.js, build step, or terminal commands are needed.

2) ADD PHOTOS
-------------
Put photos in the photos folder with these exact names:
papa.jpg
mummy.jpg
bhai.jpg
sakshi.jpg
tanushree.jpg
khushi.jpg
family-group.jpg

The same Sakshi photo is used in the welcome and special section. Missing photos display a visible placeholder. See photos/README.txt.

3) ADD KANNADA MUSIC
--------------------
Copy a permitted MP3 to music/kannada-birthday-song.mp3.
Refresh the page and press Play. Browsers usually block autoplay, so the visitor must click Play.

4) CHANGE WISHES / WORDING
--------------------------
Open index.html and search for the message or heading you want to change. Save, then refresh the browser. Kannada text is encoded in UTF-8. The Google Noto Sans Kannada font is requested online, with system fallbacks if offline.

5) PRIVACY — PLEASE READ BEFORE HOSTING
---------------------------------------
This folder does NOT include password protection. A password prompt written only in front-end JavaScript is not secure because the website files can still be downloaded or inspected.

Do NOT upload private family photos or personal messages to a public URL until real access control is enabled and tested.

Suggested no-cost path for a private link:
- Cloudflare Access can protect a site behind an identity/email login policy, but configuration depends on the hosting/origin setup and account availability. Use an authenticated, server-enforced access-control layer; do not rely on a hidden URL or client-side password.
- For a small static site, a host with built-in password protection or an identity-aware access gateway is appropriate. Verify that direct asset URLs (for example /photos/papa.jpg) are also blocked when logged out.
- Free hosting alone does not mean private hosting. Netlify/Vercel/GitHub Pages static hosting should be treated as public unless a real access-control layer is configured. Do not put secrets in HTML/JS.
- The website ZIP is suitable for offline use immediately. Online secure deployment is NOT configured in this package.

6) ONLINE HOSTING PLAN (AFTER YOU CHOOSE A PROVIDER)
----------------------------------------------------
1. First test locally and add only photos you are comfortable handling.
2. Choose a host and access-control service. Configure authentication at the server/edge, not in script.js.
3. Upload/deploy the static files.
4. Set an allowlist (for example, only your family members' email addresses).
5. Test the main page and each direct photo/audio URL in a private/incognito window while logged out. They must be denied before adding private photos.
6. Test on a phone and laptop. Keep the local ZIP as your backup.

No hosting account, domain, password, email allowlist, or deployment has been created by this package. I have not published a link.

7) WHAT IS INCLUDED / TEST STATUS
---------------------------------
Included: index.html, style.css, script.js, placeholder instructions, photos/ and music/ folders, offline/README.txt and this guide.
Designed to be responsive and to honor reduced-motion settings.
A static source-level check is performed when preparing the ZIP, but this is not a full cross-browser/device test. Please preview in your own Chrome/Edge and on a phone before sharing.

Made with love for Sakshi.
