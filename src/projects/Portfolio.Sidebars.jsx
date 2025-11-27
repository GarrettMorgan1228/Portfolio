export function PortfolioLeftSidebar({ project }) {
  return (
    <>
      <div className="side-card">
        <h3>Tech Stack</h3>
        <div className="chip-row">
          <span className="chip">React</span>
          <span className="chip">Vite</span>
          <span className="chip">JavaScript</span>
          <span className="chip">JSON</span>
        </div>
      </div>

      <div className="side-card">
        <h3>Recommended Resources</h3>
        <a className="side-link" href="https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv" target="_blank" rel="noreferrer">
          ▶️JavaScript Playlist
        </a>
        <a className="side-link" href="https://www.youtube.com/watch?v=2oCN2q1x3c4&list=PLZPZq0r_RZOOxqHgOzPyCzIl4AJjXbCYt" target="_blank" rel="noreferrer">
          ▶️HTML+CSS Playlist
        </a>
        <a className="side-link" href="https://www.youtube.com/watch?v=hn80mWvP-9g&list=PLZPZq0r_RZOMQArzyI32mVndGBZ3D99XQ" target="_blank" rel="noreferrer">
          ▶️React+Vite Playlist
        </a>
        <a className="side-link" href="https://www.youtube.com/watch?v=mJ-qvsxPHpY" target="_blank" rel="noreferrer">
          ▶️GitHub Tutorial
        </a>
        <a className="side-link" href="https://www.youtube.com/watch?v=E8xaV6fiTaA" target="_blank" rel="noreferrer">
          ▶️Vercel Deployment
        </a>
        <a className="side-link" href="https://www.youtube.com/watch?v=e5xUcr_wv4E" target="_blank" rel="noreferrer">
          ▶️Custom Domain
        </a>
        <p className="side-muted">Things I've found helpful in my study progression.</p>
      </div>
    </>
  );
}

export function PortfolioRightSidebar({ project }) {
  return (
    <>
    <div className="side-card">
      <h3>Notes</h3>
      <p className="side-muted">
        I wanted to create a space to practice what I've been studying, so I created this website as my own personal sandbox.
      </p>
    </div>

    <div className="side-card">
        <h3>TO-DO LIST</h3>
        <ul>
            <li>Implement Backend</li>
            <li>Message Feature</li>
        </ul>
    </div>
    </>
  );
}
