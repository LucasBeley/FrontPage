import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div id="page-container">
        <div id="bio">
          <div className="in-container">
            <img src={"/profile-pic.jpg"} alt="Lucas Beley-Titah" />
            <h1>Lucas Beley-Titah</h1>
          </div>
        </div>

        <div className="vertical-separator"></div>

        <div id="links">
          <div className="in-container">
            <a target="_blank" href="https://github.com/LucasBeley">
              <img src="/icons8-github.svg" />
              <span>GitHub</span>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/lucas-beley-titah-726507128"
            >
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
          <div className="horizontal-separator"></div>
          <div className="in-container">
            <a target="_blank" href="https://unagi.lucasbt.fr">
              <img src="/icons8-blog-96.png" />
              <div className="title-desc-container">
                <span>Unagi</span>
                <p>A blog built with Django.</p>
              </div>
            </a>
            <a target="_blank" href="https://pomo.lucasbt.fr">
              <img src="/icons8-pomodoro-96.png" />
              <div className="title-desc-container">
                <span>Pomo</span>
                <p>A pomodoro timer built with Svelte.</p>
              </div>
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
