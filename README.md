# LumosCode — Online HTML/CSS/JS Code Editor

A glassmorphic in-browser code editor. Write HTML, CSS and JavaScript in three
stacked panels on the left and watch the live preview on the right.

## Features
- Live preview (debounced, updates as you type)
- Editors stacked left: HTML → CSS → JavaScript; output on the right
- Glassmorphic UI with dark / light theme (remembered between visits)
- Save, fetch and clear code in browser localStorage
- Download index.html, style.css and script.js as separate files
- Preview size switcher: desktop / tablet / mobile
- Shortcuts: Ctrl+S save, Ctrl+Enter run, Ctrl+Space autocomplete

## Tech
HTML5, CSS3, vanilla JavaScript, CodeMirror 5.65.5, Font Awesome 6.

## Run it
Open `index.html` in a browser. No build step, no install.

## Files
- `index.html` — markup and CDN links
- `styles.css` — glass tokens, layout, responsive rules
- `script.js` — editors, preview, storage, download, theme
