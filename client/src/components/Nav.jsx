import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className={styles.bar}>
      <h3 className={styles.pageName}>Simple Blog Project</h3>
      <Link to="/" className={styles.link}>
        View All Posts
      </Link>
      <Link to="/add-post" className={styles.link}>
        Add Post
      </Link>
    </div>
  );
}

export default Nav;
