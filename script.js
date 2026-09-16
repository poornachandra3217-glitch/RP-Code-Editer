/* =========================================================
   LUMOSCODE — app logic
   ========================================================= */

const STARTER = {
  html:
`<div class="card">
  <h1>Hello, Poorna</h1>
  <p>Edit the panels on the left. The preview updates as you type.</p>
  <button id="go">Click me</button>
</div>`,
  css:
`body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  font-family: system-ui, sans-serif;
  background: linear-gradient(135deg, #ab97f0, #78e4db);
}

.card {
  padding: 32px 36px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(12px);
  color: #1b1738;
  text-align: center;
}

button {
  margin-top: 12px;
  padding: 9px 18px;
  border: none;
  border-radius: 999px;
  background: #1b1738;
  color: #fff;
  cursor: pointer;
}`,
  js:
`document.getElementById("go").addEventListener("click", () => {
  document.querySelector("h1").textContent = "It works!";
});`
};

const baseOptions = {
  lineNumbers: true,
  theme: "dracula",
  matchBrackets: true,
  autoCloseBrackets: true,
  lineWrapping: true,
  extraKeys: { "Ctrl-Space": "autocomplete" }
};

const htmlEditor = CodeMirror(document.getElementById("html-container"), {
  ...baseOptions,
  mode: "htmlmixed",
  placeholder: "Write HTML here...",
  autoCloseTags: true
});

const cssEditor = CodeMirror(document.getElementById("css-container"), {
  ...baseOptions,
  mode: "css",
  placeholder: "Write CSS here..."
});

const jsEditor = CodeMirror(document.getElementById("js-container"), {
  ...baseOptions,
  mode: "javascript",
  placeholder: "Write JavaScript here..."
});


/* ---------- toast ---------- */

const toastEl = document.getElementById("toast");
let toastTimer;

function toast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 2200);
}


/* ---------- live preview ---------- */

const iframe = document.getElementById("output");
let runTimer;

function runCode() {
  iframe.srcdoc =
    htmlEditor.getValue() +
    "<style>" + cssEditor.getValue() + "</style>" +
    "<scr" + "ipt>" + jsEditor.getValue() + "</scr" + "ipt>";
}

function scheduleRun() {
  clearTimeout(runTimer);
  runTimer = setTimeout(runCode, 300);
}

[htmlEditor, cssEditor, jsEditor].forEach(ed => ed.on("change", scheduleRun));


/* ---------- local storage ---------- */

function saveCode() {
  try {
    localStorage.setItem("lumos.html", htmlEditor.getValue());
    localStorage.setItem("lumos.css", cssEditor.getValue());
    localStorage.setItem("lumos.js", jsEditor.getValue());
    toast("Saved to this browser");
  } catch (e) {
    toast("Couldn't save — storage is blocked");
  }
}

function loadCode(silent) {
  try {
    const h = localStorage.getItem("lumos.html");
    const c = localStorage.getItem("lumos.css");
    const j = localStorage.getItem("lumos.js");

    if (h === null && c === null && j === null) {
      if (!silent) toast("Nothing saved yet");
      return false;
    }

    htmlEditor.setValue(h || "");
    cssEditor.setValue(c || "");
    jsEditor.setValue(j || "");
    if (!silent) toast("Loaded your saved code");
    return true;
  } catch (e) {
    if (!silent) toast("Couldn't read storage");
    return false;
  }
}

function deleteCode() {
  try {
    ["lumos.html", "lumos.css", "lumos.js"].forEach(k => localStorage.removeItem(k));
  } catch (e) { /* storage blocked — editors still clear */ }

  htmlEditor.setValue("");
  cssEditor.setValue("");
  jsEditor.setValue("");
  toast("Cleared");
}


/* ---------- download ---------- */

function downloadFile(filename, text, type) {
  const blob = new Blob([text], { type: type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

function downloadCode() {
  const page =
`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>LumosCode export</title>
<link rel="stylesheet" href="style.css">
</head>
<body>
${htmlEditor.getValue()}
<script src="script.js"><\/script>
</body>
</html>`;

  downloadFile("index.html", page, "text/html");
  downloadFile("style.css", cssEditor.getValue(), "text/css");
  downloadFile("script.js", jsEditor.getValue(), "text/javascript");
  toast("Downloading 3 files");
}


/* ---------- preview size ---------- */

function setPreviewSize(size) {
  const widths = { desktop: "100%", tablet: "768px", mobile: "375px" };
  iframe.style.width = widths[size] || "100%";
  iframe.style.height = "100%";
}


/* ---------- theme ---------- */

const themeButton = document.getElementById("theme-toggle-button");
let isLight = false;

function applyTheme() {
  document.body.classList.toggle("light", isLight);

  const cmTheme = isLight ? "neo" : "dracula";
  [htmlEditor, cssEditor, jsEditor].forEach(ed => ed.setOption("theme", cmTheme));

  themeButton.innerHTML = isLight
    ? '<i class="fa-solid fa-sun"></i>'
    : '<i class="fa-solid fa-moon"></i>';

  try { localStorage.setItem("lumos.theme", isLight ? "light" : "dark"); } catch (e) {}
}

themeButton.addEventListener("click", () => {
  isLight = !isLight;
  applyTheme();
});


/* ---------- wiring ---------- */

document.getElementById("run-button").addEventListener("click", runCode);
document.getElementById("save-button").addEventListener("click", saveCode);
document.getElementById("load-button").addEventListener("click", () => loadCode(false));
document.getElementById("delete-button").addEventListener("click", deleteCode);
document.getElementById("download-button").addEventListener("click", downloadCode);
document.getElementById("preview-size").addEventListener("change", e => setPreviewSize(e.target.value));

document.addEventListener("keydown", e => {
  if ((e.ctrlKey || e.metaKey) && e.key === "s") { e.preventDefault(); saveCode(); }
  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") { e.preventDefault(); runCode(); }
});


/* ---------- boot ---------- */

try {
  isLight = localStorage.getItem("lumos.theme") === "light";
} catch (e) {}
applyTheme();

if (!loadCode(true)) {
  htmlEditor.setValue(STARTER.html);
  cssEditor.setValue(STARTER.css);
  jsEditor.setValue(STARTER.js);
}

setPreviewSize("desktop");
runCode();
