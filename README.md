# Horizon Courts – Component Based UI (React)

A component-based landing page built using **core React concepts without JSX**.  
This project focuses on understanding **parent–child rendering**, reusable components, and UI composition using `React.createElement`.

---

##  Features

-  Built with **React 18 (CDN)**
-  Component-based architecture (Navbar, Hero, About, Services, Numbers)
-  Parent → Child rendering flow
-  No JSX (pure `React.createElement`)
-  Styled using plain CSS
-  Image-based cards (Services section)
-  Beginner-friendly & interview-ready structure

---

##  Project Structure

COMPONENT-BASED-UI/
│
├── index.html
├── main.js
├── app.js
├── style.css
├── hero.jpg
├── card1.jpg
├── card2.png
│
└── components/
  ├── Navbar.js
  ├── Hero.js
  ├── HeroText.js
  ├── HeroImage.js
  ├── About.js
  ├── Services.js
  ├── NumberItem.js
  └── NumbersSection.js

---


##  Core Concepts Used

- `ReactDOM.createRoot()` (used only once)
- Functional Components
- Parent–Child Component Hierarchy
- Reusable Components
- Props (`props.value`, `props.label`)
- Modular file structure
- CSS-based layout & styling

---


This project helped me understand:

- How React works **without JSX**
- Why components are functions, not elements
- How React builds a UI tree using `createElement`
- Importance of correct file structure & relative paths
- Separating structure (React) and design (CSS)

 ---


##  Future Improvements

- Make UI fully responsive
- Add hover animations
- Convert project to JSX
- Add Footer section
- Deploy using GitHub Pages / Netlify

