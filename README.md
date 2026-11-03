# Andrés Morales — Portfolio

Personal portfolio that presents who I am, my experience as a Full Stack developer, my education, certifications and technical skills. Available in **English and Spanish**.

**[👉 Live demo](https://portafolio-five-theta-75.vercel.app/)** · 🇪🇸 [Leer en español](#-en-español)

![Portfolio home page](assets/home.webp)

## ✨ Features

- Static three-page site: **Home**, **About me** and **Résumé**.
- **EN / ES language switch:** English by default; the choice is remembered and applied on every page (texts, page title, description and image descriptions).
- Responsive layout with Flexbox and media queries.
- CSS organized with the **BEM** methodology and CSS variables for colors and fonts.
- `title` and `meta description` on every page for search engines.
- Images in **WebP** for faster loading.
- Security headers on Vercel (`vercel.json`), including a **Content Security Policy** that only allows the site's own scripts.

## 🛠️ Tech stack

- HTML5
- CSS3 (variables, Flexbox, media queries, BEM)
- Vanilla JavaScript (only for the language switch, no libraries)
- Google Fonts (Krona One and Montserrat)
- Deployed on Vercel

## 🌐 How the language switch works

- The HTML is written in English, so the site is readable even without JavaScript.
- `js/i18n.js` holds the Spanish texts. Each translatable element has a `data-i18n` attribute (or `data-i18n-alt`, `data-i18n-content`, `data-i18n-aria-label`) with its key.
- Texts are applied with `textContent` and `setAttribute`, never `innerHTML`.
- The selected language is stored in `localStorage` and the switch buttons expose their state with `aria-pressed`.

## 📸 Screenshots

| About me | Résumé |
| --- | --- |
| ![About me page](assets/about.webp) | ![Résumé page](assets/curriculum.webp) |

## 🚀 Run locally

No dependencies or build step needed.

```bash
git clone https://github.com/imandresmorales/portafolio.git
cd portafolio
python3 -m http.server 8080   # or the Live Server extension in VS Code
```

Then open `http://localhost:8080`.

## 📁 Structure

```text
portafolio/
├── index.html        # Home
├── about.html        # About me
├── curriculum.html   # Experience, education and skills
├── js/
│   └── i18n.js       # EN/ES language switch
├── styles/
│   └── style.css     # Global styles
├── assets/           # Images and icons
└── vercel.json       # Security headers for the deployment
```

## ✍️ Author

**Andrés Morales**, Full Stack developer with a B.Eng. in Computer Science (ESPOL). I work with React, Next.js, NestJS, Node.js and Flutter.

- [LinkedIn](https://www.linkedin.com/in/imandresmorales/)
- [GitHub](https://github.com/imandresmorales)

---

## 🇪🇸 En español

Portafolio personal donde presento quién soy, mi experiencia como desarrollador Full Stack, mis estudios, certificaciones y habilidades técnicas. **[Ver demo en vivo](https://portafolio-five-theta-75.vercel.app/)**.

- Sitio estático de tres páginas: **Inicio**, **Sobre mí** y **Currículum**.
- **Selector de idioma EN / ES:** el sitio abre en inglés y el botón **ES** lo cambia a español en todas las páginas; la elección se recuerda.
- Hecho con **HTML, CSS** y un único archivo de **JavaScript puro** para el idioma, sin librerías.
- Diseño responsive, imágenes en WebP y cabeceras de seguridad en Vercel (incluida una política CSP).

Para verlo en local, clona el repositorio y sirve la carpeta con `python3 -m http.server 8080` o con la extensión Live Server de VS Code.
