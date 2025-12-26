import styles from "./Nav.module.css";

function Nav() {
  return (
    <div className={styles.navi}>
      <h3 className={styles.page}>Simple Blog Project</h3>
      <a href="#" className={styles.link}>
        View All Posts
      </a>
      <a href="#" className={styles.link}>
        Add Post
      </a>
    </div>
  );
}

export default Nav;
