# Dynamic Web Page Project

_A project completed for the DECI Web Development Track._

## Overview

This project transforms a static landing page into a fully interactive and dynamic web page.  
The page automatically generates navigation links based on existing sections, highlights the section currently visible to the user, saves comments locally, and provides smooth interactions such as a disappearing navigation bar and a scroll-to-top button.

---

## Features

### 1. Dynamic Navigation Menu

- The JavaScript file scans all `<section>` elements and creates matching navigation links.
- Whenever a new section is added to the HTML, the navigation bar updates automatically.

### 2. Active Section Highlighting

Two methods were implemented to detect which section is currently in the viewport:

- Bounding rectangle checks.
- **Intersection Observer API** (final method used).

The visible section is highlighted with an `active` class.

### 3. Responsive Navbar Behavior

- On large screens, the navbar hides when the user stops scrolling.
- Reappears when the mouse moves to the top of the page or on hover.
- On small screens, a hamburger menu toggles the navigation visibility.

### 4. Comment System with Local Storage

- Users can submit comments including:
  - Name
  - Email
  - Comment text
- Input validation is applied.
- Comments are stored using `localStorage`, allowing them to persist between page reloads.

### 5. Scroll to Top Button

- Appears when the user scrolls down.
- Returns to the top smoothly when clicked.

---

## File Structure

.
├── index.html
├── css/
│ ├── styles.css
│ └── favicon.ico
└── js/
└── app.js

---

## How to Run

1. Download or clone the project.
2. Open `index.html` directly in your browser.
3. Add more `<section>` elements to test the dynamic behavior.

No server setup is required.

---

## Skills Practiced

- DOM Manipulation
- Handling scroll events
- Intersection Observer API
- Responsive behavior with JavaScript
- Form validation
- Using Local Storage
- Building clean interactive UI components

---

## Notes

This project was originally developed as part of **DECI** coursework, where the main objective was to convert a static landing page into a fully dynamic and user-interactive website using vanilla JavaScript.
