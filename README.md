# ⚡ RP Code

A modern, browser-based **HTML, CSS & JavaScript code editor** with a live preview environment.

RP Code allows you to write HTML, CSS, and JavaScript in separate editors and instantly see the output in the preview panel — all directly in your browser.

---

## ✨ Features

* 📝 **HTML Editor** — Write and edit HTML code
* 🎨 **CSS Editor** — Style your webpages in real time
* ⚡ **JavaScript Editor** — Add interactive functionality
* 👀 **Live Preview** — Instantly view your webpage output
* ▶️ **Run Code** — Execute your current code manually
* 💾 **Save Code** — Save your work in the browser's local storage
* 📂 **Fetch Code** — Load previously saved code
* 🗑️ **Clear Code** — Remove the current code
* 📥 **Download Code** — Download HTML, CSS and JavaScript files
* 🖥️ **Responsive Preview** — Test Desktop, Tablet and Mobile layouts
* 🌙 **Dark/Light Theme** — Switch between dark and light modes
* 🔢 **Line Numbers** — Easily navigate through your code
* ✨ **Code Autocomplete** — Helpful coding suggestions
* 🔗 **Bracket Matching** — Automatically highlights matching brackets
* 📱 **Responsive UI** — Designed to work across different screen sizes
* 🔔 **Toast Notifications** — Provides feedback for actions such as saving and clearing code

---

## 🛠️ Technologies Used

| Technology       | Purpose                            |
| ---------------- | ---------------------------------- |
| HTML5            | Application structure              |
| CSS3             | Styling and responsive design      |
| JavaScript       | Application logic and interactions |
| CodeMirror       | Code editor interface              |
| Font Awesome     | Icons                              |
| Google Fonts     | Typography                         |
| LocalStorage API | Saving code locally                |
| iframe           | Live code preview                  |

## The project uses CodeMirror editors for HTML, CSS and JavaScript with language-specific modes and editor features.

## 📂 Project Structure

```text
RP-Code/
│
├── index.html
├── styles.css
├── script.js
└── README.md
```

### `index.html`

Contains the main structure of the application, including:

* Navigation/header
* HTML editor
* CSS editor
* JavaScript editor
* Output preview
* Control buttons
* Preview-size selector
* Theme toggle

The interface separates the three code editors from the output preview.

### `styles.css`

Controls the application's visual design, including:

* Glassmorphism UI
* Dark and light themes
* Responsive layout
* Editor panels
* Buttons
* Background effects
* Preview container
* Mobile layout

The UI uses a glass-style design with responsive breakpoints for smaller screens.

### `script.js`

Handles the application's functionality, including:

* CodeMirror initialization
* Live preview
* Save/load functionality
* Code clearing
* Code downloading
* Theme switching
* Preview resizing
* Keyboard shortcuts

The live preview combines the HTML, CSS and JavaScript editor contents and renders them inside an iframe.

---

## 🚀 How to Run

### 1. Clone the repository

```bash
git clone https://github.com/your-username/rp-code.git
```

### 2. Open the project

Go to the project folder:

```bash
cd rp-code
```

### 3. Run the application

Simply open:

```text
index.html
```

in your web browser.

You can also use **VS Code + Live Server** for a smoother development experience.

---

## 🎯 How to Use

### Step 1 — Write HTML

Enter your HTML code in the **HTML editor**.

### Step 2 — Add CSS

Use the **CSS editor** to style your webpage.

### Step 3 — Add JavaScript

Use the **JavaScript editor** to add functionality.

### Step 4 — Run

Click **Run** to render the code in the preview panel.

### Step 5 — Save

Click **Save** to store your code in the browser.

### Step 6 — Download

Click **Download** to generate:

```text
index.html
style.css
script.js
```

The application creates downloadable files from the current editor contents.

---

## ⌨️ Keyboard Shortcuts

| Shortcut       | Action            |
| -------------- | ----------------- |
| `Ctrl + S`     | Save code         |
| `Ctrl + Enter` | Run code          |
| `Ctrl + Space` | Code autocomplete |

---

## 💡 Why This Project?

RP Code was created to provide a simple environment where developers and students can experiment with frontend technologies without constantly switching between files and browser windows.

It is especially useful for:

* Learning HTML
* Practicing CSS
* Experimenting with JavaScript
* Building small frontend prototypes
* Testing UI ideas
* Learning how frontend technologies work together

---

## 🔮 Future Improvements

Possible future enhancements include:

* [ ] Syntax error detection
* [ ] Multiple project/file support
* [ ] Code formatting
* [ ] Custom themes
* [ ] Export as ZIP
* [ ] Resizable editor panels
* [ ] Full-screen preview
* [ ] GitHub integration
* [ ] Cloud-based project saving
* [ ] More programming languages

---

## 🌐 Browser Compatibility

RP Code is designed to run in modern browsers that support:

* HTML5
* CSS3
* JavaScript ES6+
* LocalStorage
* iframe `srcdoc`

---

## 👨‍💻 Author

**RP Code**

Built with ❤️ using HTML, CSS and JavaScript.

---

## 📄 License

This project is open-source and available for learning and educational purposes.
