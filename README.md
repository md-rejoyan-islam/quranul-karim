<div align="center">
  <img src="public/logo_light.webp" alt="Quranul Karim Logo" width="200"/>
  <h1>Quranul Karim</h1>
  <p>Your multilingual companion for reading the Holy Quran.</p>
  <p>
    <a href="https://quranul-karim-multi-languages.vercel.app/" target="_blank">View Demo</a>
    ·
    <a href="https://github.com/md-rejoyan-islam/quranul-karim/issues" target="_blank">Report Bug</a>
    ·
    <a href="https://github.com/md-rejoyan-islam/quranul-karim/issues" target="_blank">Request Feature</a>
  </p>
</div>

## About The Project

Quranul Karim is a modern, open-source web application designed to make the Holy Quran accessible to everyone, regardless of their native language. With a clean, user-friendly interface and a focus on readability, this app provides a seamless experience for studying the Quran.

### ✨ Features

- **📖 Multi-Language Support:** Read the Quran in English, French, Russian, Chinese, Urdu, and Bengali.
- **🌐 Easy Language Switching:** Instantly switch between languages to compare translations.
- **🎨 Light & Dark Mode:** Choose a theme that's easy on your eyes.
- **📱 Responsive Design:** Enjoy a consistent experience on your desktop, tablet, or phone.
- **🚀 Fast & Lightweight:** Built with Next.js for optimal performance.

### 🛠️ Built With

- [![Next.js][Next.js]][Next-url]
- [![React][React.js]][React-url]
- [![TypeScript][TypeScript]][TypeScript-url]
- [![Tailwind CSS][TailwindCSS]][TailwindCSS-url]
- [![Framer Motion][Framer Motion]][Framer-Motion-url]

[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[TypeScript]: https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white
[TypeScript-url]: https://www.typescriptlang.org/
[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/
[Framer Motion]: https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white
[Framer-Motion-url]: https://www.framer.com/motion/

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js (v20 or higher) and npm installed on your machine.

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

### Installation

1.  Clone the repo
    ```sh
    git clone https://github.com/md-rejoyan-islam/quranul-karim.git
    ```
2.  Install NPM packages
    ```sh
    npm install
    ```
3.  Run the development server
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📜 Available Scripts

- `dev`: Runs the app in development mode.
- `build`: Builds the app for production.
- `start`: Starts a production server.
- `lint`: Runs the linter.

## 🏗️ Project Structure

```
/
├── app/              # Main application folder
│   ├── [lang]/       # Language-specific pages
│   │   ├── (home)/   # Home page
│   │   └── surah/    # Surah pages
│   └── api/          # API routes
├── components/       # Reusable components
├── context/          # React contexts
├── data/             # Quran data in different languages
├── hooks/            # Custom hooks
├── lib/              # Library functions and definitions
├── provider/         # Context providers
└── public/           # Public assets
```

## 🔌 API Endpoints

The application provides a simple REST API to fetch Quran data.

### Get All Surahs

| Language | API Endpoint                                                       |
| :------- | :----------------------------------------------------------------- |
| Bengali  | `https://quranul-karim-multi-languages.vercel.app/api/v1/bn/surah` |
| Chinese  | `https://quranul-karim-multi-languages.vercel.app/api/v1/zh/surah` |
| Russian  | `https://quranul-karim-multi-languages.vercel.app/api/v1/ru/surah` |
| English  | `https://quranul-karim-multi-languages.vercel.app/api/v1/en/surah` |
| French   | `https://quranul-karim-multi-languages.vercel.app/api/v1/fr/surah` |
| Urdu     | `https://quranul-karim-multi-languages.vercel.app/api/v1/ur/surah` |

### Get Surah Details

| Language | API Endpoint                                                              |
| :------- | :------------------------------------------------------------------------ |
| Bengali  | `https://quranul-karim-multi-languages.vercel.app/api/v1/bn/surah/[slug]` |
| Chinese  | `https://quranul-karim-multi-languages.vercel.app/api/v1/zh/surah/[slug]` |
| Russian  | `https://quranul-karim-multi-languages.vercel.app/api/v1/ru/surah/[slug]` |
| English  | `https://quranul-karim-multi-languages.vercel.app/api/v1/en/surah/[slug]` |
| French   | `https://quranul-karim-multi-languages.vercel.app/api/v1/fr/surah/[slug]` |
| Urdu     | `https://quranul-karim-multi-languages.vercel.app/api/v1/ur/surah/[slug]` |

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📬 Contact

Rejoyan Islam - [@rejoyan_islam](https://md-rejoyan-islam.github.io) - rejoyanislam0014@gmail.com

Rejoyan Linkedin - [Rejoyan Islam LinkedIn](https://www.linkedin.com/in/md-rejoyan-islam/)

Project Link: [https://github.com/md-rejoyan-islam/quranul-karim](https://github.com/md-rejoyan-islam/quranul-karim)
