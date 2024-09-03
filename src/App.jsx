import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="page-container">
        <div id="bio">
          <div className="in-container">
            <img src={"/profile-pic.jpg"} alt="Lucas Beley-Titah" />
            <h1>
              Lucas Beley-Titah
            </h1>
          </div>
        </div>

        <div id="separator"></div>

        <div id="links">
          <div className="in-container">
            <a target="_blank" href="https://unagi.lucasbt.fr">
              <img src="/icons8-blog-96.png" />
              <span>Blog</span>
            </a>
            <a target="_blank" href="https://github.com/LucasBeley">
              <img src="/icons8-github.svg" />
              <span>GitHub</span>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/lucas-beley-titah-726507128">
              <img src="/icons8-linkedin.svg" />
              <span>LinkedIn</span>
            </a>
            <a target="_blank" href="/CV.pdf">
              <img src="/icons8-resume-96.png" />
              <span>CV</span>
            </a>
            <a href="mailto:lucas.beley@hotmail.fr">
              <img src="/icons8-mail-96.png" />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>

      <footer id="footer">
        <p>
          Icons by{" "}
          <a target="_blank" href="https://icons8.com/">
            Icons8
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
