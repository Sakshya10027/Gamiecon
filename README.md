# Gamiecon – VRGC Website

**Gamiecon** is a simple, static website built for VRGC (Virtual Reality / Game Convention).  
Live demo: [gamiecon.vercel.app](https://gamiecon.vercel.app)

---

## About

This repository holds the source for a clean, minimal static webpage featuring VRGC branding and interactive elements.

---

## Table of Contents
1. [Features](#features)  
2. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
3. [Development](#development)  
4. [Deployment](#deployment)  
5. [Project Structure](#project-structure)  
6. [Author](#author)  
7. [License](#license)  
8. [Suggestions & Contribution](#suggestions--contribution)

---

## Features
- Minimal static site—themed for a game / VR convention  
- Responsive design via CSS  
- Embedded video section for rich media  
- JavaScript interactivity via `app.js`

---

## Getting Started

### Prerequisites
- A modern web browser (e.g., Chrome, Firefox, Edge, Safari).  
- Optional: Node.js and a static server (e.g., `http-server`) for local testing.

### Installation
```bash
git clone https://github.com/Sakshya10027/Gamiecon.git
cd Gamiecon
```
To view locally:
- Simply open `index.html` in your browser  
  **or**  
- Serve with a static server:
  ```bash
  npm install -g http-server
  http-server .
  ```
  Then navigate to `http://localhost:8080` (or the port shown).

---

## Development

Feel free to extend the project:
- Tweak visuals via `style.css` or `style_2.css`  
- Enhance interactivity inside `app.js` (menu toggles, modals, etc.)  
- Update embedded video in the `video` folder  
- Integrate frameworks (React, Bootstrap, Tailwind) for advanced UI

---

## Deployment

Deployed using Vercel — updates to the main branch auto-deploy.

Live at [gamiecon.vercel.app](https://gamiecon.vercel.app)

---

## Project Structure
```
Gamiecon/
├── index.html        # Main HTML file
├── style.css         # Primary styles
├── style_2.css       # Alternate styles
├── app.js            # JavaScript functionality
└── video             # Embedded media content
```

---

## Author
**Sakshya10027**  
Creator and maintainer of the VRGC-themed website.

---

## License
No license file found. Consider adding one such as:
- [MIT License](https://opensource.org/licenses/MIT)  
- [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0)

---

## Suggestions & Contribution
- Add author contact info (email, social media)  
- Document preferred contribution process (issues, PR vs. workflow)  
- Provide browser compatibility notes or screenshots for clarity  
