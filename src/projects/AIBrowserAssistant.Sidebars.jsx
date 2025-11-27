export function AIBrowserAssistantLeftSidebar({ project }) {
  return (
    <>
    <div className="side-card">
        <h3>Tech Stack</h3>
        <div className="chip-row">
            <span className="chip">React</span>
            <span className="chip">Vite</span>
        </div>
    </div>

    <div className="side-card">
        <h3>Recommended Resources</h3>
        <a className="side-link" href="https://www.youtube.com/watch?v=2oCN2q1x3c4&list=PLZPZq0r_RZOOxqHgOzPyCzIl4AJjXbCYt" target="_blank" rel="noreferrer">
          ▶️HTML+CSS Playlist
        </a>
        <a className="side-link" href="https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv" target="_blank" rel="noreferrer">
          ▶️JavaScript Playlist
        </a>
        <a className="side-link" href="https://www.youtube.com/watch?v=hn80mWvP-9g&list=PLZPZq0r_RZOMQArzyI32mVndGBZ3D99XQ" target="_blank" rel="noreferrer">
          ▶️React+Vite Playlist
        </a>
        <a className="side-link" href="https://www.youtube.com/watch?v=mJ-qvsxPHpY" target="_blank" rel="noreferrer">
          ▶️GitHub Tutorial
        </a>
        <p className="side-muted">Things I've found helpful in my study progression.</p>
    </div>
    </>
  );
}

export function AIBrowserAssistantRightSidebar({ project }) {
  return (
    <>
    <div className="side-card">
        <h3>Notes</h3>
        <p className="side-muted">
        
        </p>
    </div>
    <div className="side-card">
        <h3>TO-DO LIST</h3>
        <ul>

        </ul>
    </div>
    </>
  );
}
