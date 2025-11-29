import { Link } from "react-router-dom";

export default function HomeLeftSidebar() {
  return (
    <>
      <div className="side-card">
        <h3>About Garrett</h3>
        <ul>
          <li>CS Student (A.S.)</li>
          <li>Clovis Community College</li>
          <li>Fresno, CA</li>
        </ul>
      </div>

      <div className="side-card">
        <h3>Featured Content</h3>
        <Link className="side-link" to="/projects/pineapplepuncher">
          🍍🥊Pineapple Puncher
        </Link>
      </div>

      <div className="side-card">
        <h3>Currently</h3>
        <p className="side-muted">
          Building projects, writing better project write-ups.
        </p>
      </div>
    </>
  );
}
