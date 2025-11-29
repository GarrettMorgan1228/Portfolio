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
        <a
          className="side-link"
          href="https://www.youtube.com/watch?v=2oCN2q1x3c4&list=PLZPZq0r_RZOOxqHgOzPyCzIl4AJjXbCYt"
          target="_blank"
          rel="noreferrer"
        >
          ▶️HTML+CSS Playlist
        </a>
        <a
          className="side-link"
          href="https://www.youtube.com/watch?v=Ihy0QziLDf0&list=PLZPZq0r_RZOO1zkgO4bIdfuLpizCeHYKv"
          target="_blank"
          rel="noreferrer"
        >
          ▶️JavaScript Playlist
        </a>
        <a
          className="side-link"
          href="https://www.youtube.com/watch?v=BCg4U1FzODs"
          target="_blank"
          rel="noreferrer"
        >
          ▶️TypeScript Tutorial
        </a>
        <a
          className="side-link"
          href="https://www.youtube.com/watch?v=hn80mWvP-9g&list=PLZPZq0r_RZOMQArzyI32mVndGBZ3D99XQ"
          target="_blank"
          rel="noreferrer"
        >
          ▶️React+Vite Playlist
        </a>
        <a
          className="side-link"
          href="https://www.youtube.com/watch?v=mJ-qvsxPHpY"
          target="_blank"
          rel="noreferrer"
        >
          ▶️GitHub Tutorial
        </a>
        <a
          className="side-link"
          href="https://youtu.be/GGi7Brsf7js?t=107"
          target="_blank"
          rel="noreferrer"
        >
          ▶️Chrome MV3 Tutorial
        </a>
        <p className="side-muted">
          Things I've found helpful in my study progression.
        </p>
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
          Extension users will need to input their own unique API key through
          the extension's settings menu, accessible in the top right hand corner
          of the sidebar. API keys are not meant to be shared between users.
        </p>
      </div>
      <div className="side-card">
        <h3>TO-DO LIST</h3>
        <ul>
          <li>Style Sidebar UI</li>
          <li>Build App Into Repo</li>
          <li>Complete Write Up</li>
          <li>Add Code Screenshots</li>
          <li>Record Video Demo</li>
        </ul>
      </div>
    </>
  );
}
