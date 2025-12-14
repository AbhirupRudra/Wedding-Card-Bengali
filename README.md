# 💍 Royal Bengali Wedding Invitation

A premium, interactive, and fully responsive digital wedding invitation website designed with a traditional **Bengali Royal Theme** (Maroon & Gold). 

This project features a unique **"Royal Seal" unlocking mechanism** with haptic feedback, background music, falling petals animation, and a countdown timer.

![Project Status](https://img.shields.io/badge/Status-Completed-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![Language](https://img.shields.io/badge/Language-Bengali-green)

## ✨ Features

* **🔏 Royal Seal Interaction:** A unique "Press & Hold" wax seal interaction to unlock the invitation.
* **📳 Haptic Feedback:** Vibrations on touch and unlock (supported on Android/Mobile).
* **🎵 Background Music:** Audio player with toggle controls (Auto-plays after interaction).
* **🌸 Animations:** Falling golden petals, heartbeat effects, and smooth scroll reveal animations.
* **📱 Fully Responsive:** Optimized for both mobile phones and desktop screens.
* **🇧🇩 Bengali Localization:** Complete text in Bengali using beautiful fonts (*Galada* & *Hind Siliguri*).
* **⏳ Countdown Timer:** Live countdown to the wedding date.
* **📍 Event Details:** Sections for Wedding and Reception with location details.
* **👨‍👩‍👧‍👦 Family Section:** Dedicated section for Bride and Groom's family details.
* **🎨 Custom Design:** Central portrait frame on start screen with blur/focus effects.

## 🛠️ Technologies Used

* **HTML5:** Semantic structure.
* **CSS3:** Flexbox, Grid, CSS Variables, Keyframe Animations, Glassmorphism.
* **JavaScript (ES6+):** Logic for interactions, timer, music, Pointer Events API, and Intersection Observer API.
* **Fonts:** * *Galada* (Bengali Headings)
    * *Hind Siliguri* (Bengali Body)
    * *Rozha One* (English Accents)
* **Icons:** FontAwesome v6.4.0.

## 📂 File Structure

text
wedding-card/
│
├── index.html      # Main HTML structure and content
├── style.css       # Visual styling, animations, and responsive design
├── script.js       # Logic for seal interaction, vibration, timer, and music
└── README.md       # Project documentation

## 🚀 How to Run

Since this project uses vanilla HTML/CSS/JS, no build process or package manager is required.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/wedding-card.git](https://github.com/your-username/wedding-card.git)
    ```
2.  **Open the project:**
    Simply double-click `index.html` to open it in your default web browser.

> **Tip:** For the best experience (especially for audio autoplay policies and mobile testing), run this using a local server like **Live Server** in VS Code.

## 🎨 Customization Guide

### 1\. Changing Photos

  * **Start Screen Portrait:** \* Open `style.css` (approx line 58).
      * Find `.portrait-bg`.
      * Replace `background-image: url(...)` with your photo.
  * **Bride & Groom Circles:** \* Open `index.html`.
      * Find `<div class="couple-photos-container">`.
      * Replace the `src` attributes of the `<img>` tags.

### 2\. Changing Dates

Open `script.js` and update the variable at the top:

```javascript
const weddingDate = new Date("Feb 6, 2026 19:00:00").getTime();
```

### 3\. Changing Text

All text is currently in **Bengali**. You can edit the content directly in `index.html`.

  * **Family Names:** Look for the `family-section`.
  * **Invitation Text:** Look for the `invitation-formal-section`.

### 4\. Changing Music

Replace the source URL in the `<audio>` tag in `index.html`:

```html
<audio id="bgMusic" loop>
    <source src="./your-music-file.mp3" type="audio/mpeg">
</audio>
```

## 👨‍💻 Credits

**Designed & Developed by:** **Abhirup Rudra**

-----

*Made with ❤️ for Shalini & Sourav*
