// Ye code ek hi folder ke liye hai: index.html, style.css, script.js

/* Folder Structure */
// portfolio/
// │── index.html
// │── style.css
// │── script.js

/* index.html */
const indexHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Utkarsh Kumawat | Portfolio</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Utkarsh Kumawat</h1>
    <p>Software Developer</p>
    <nav>
      <a href="#about">About</a>
      <a href="#skills">Skills</a>
      <a href="#experience">Experience</a>
      <a href="#projects">Projects</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <section id="about">
    <h2>About Me</h2>
    <p>I am a passionate Software Developer with experience in building web applications, problem-solving, and learning new technologies.</p>
  </section>

  <section id="skills">
    <h2>Skills</h2>
    <ul>
      <li>HTML, CSS, JavaScript</li>
      <li>React.js, Node.js</li>
      <li>Java, Python</li>
      <li>SQL, MongoDB</li>
      <li>Git, GitHub</li>
    </ul>
  </section>

  <section id="experience">
    <h2>Experience</h2>
    <h3>Software Developer Intern - ABC Company</h3>
    <p>Worked on web application development, optimized code, and improved UI/UX.</p>
  </section>

  <section id="projects">
    <h2>Projects</h2>
    <ul>
      <li><strong>Portfolio Website:</strong> A responsive site to showcase resume details.</li>
      <li><strong>Task Manager App:</strong> Built with React & Node.js to manage daily tasks.</li>
      <li><strong>Online Quiz App:</strong> Developed using JavaScript and Firebase.</li>
    </ul>
  </section>

  <section id="education">
    <h2>Education</h2>
    <p>B.Tech in Computer Science Engineering - JECRC University</p>
  </section>

  <section id="contact">
    <h2>Contact</h2>
    <p>Email: <a href="mailto:utkarsh@example.com">utkarsh@example.com</a></p>
    <p>LinkedIn: <a href="#">linkedin.com/in/utkarsh</a></p>
    <p>GitHub: <a href="#">github.com/utkarsh</a></p>
  </section>

  <footer>
    <p>© 2025 Utkarsh Kumawat | Portfolio</p>
  </footer>

  <script src="script.js"></script>
</body>
</html>`;

/* style.css */
const styleCSS = `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  line-height: 1.6;
  background: #f9f9f9;
  color: #333;
}

header {
  background: #222;
  color: #fff;
  text-align: center;
  padding: 20px;
}

header h1 {
  margin-bottom: 5px;
}

nav a {
  color: #fff;
  margin: 0 10px;
  text-decoration: none;
}

nav a:hover {
  text-decoration: underline;
}

section {
  padding: 30px;
  max-width: 800px;
  margin: auto;
}

h2 {
  margin-bottom: 15px;
  color: #444;
  border-bottom: 2px solid #ddd;
  padding-bottom: 5px;
}

ul {
  list-style: disc inside;
}

footer {
  text-align: center;
  background: #222;
  color: #fff;
  padding: 10px;
  margin-top: 20px;
}`;

/* script.js */
const scriptJS = `console.log("Portfolio Loaded!");`;

/* Node.js Example to create files */
const fs = require('fs');
fs.writeFileSync('index.html', indexHTML);
fs.writeFileSync('style.css', styleCSS);
fs.writeFileSync('script.js', scriptJS);
console.log('Portfolio folder ready with all files!');