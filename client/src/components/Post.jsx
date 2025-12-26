import styles from "./Post.module.css";

function Post(props) {
  return (
    <div className={styles.post}>
      <div className={styles.picture}>
        <img src="../assets/bear.jpg" alt="sample picture" />
      </div>
      <div className={styles.content}>
        <div className={styles.title}> {props.title}</div>
        <p className={styles.text}>{props.text}</p>
        <button className={styles.button}>Edit</button>
      </div>
    </div>
  );
}

export default Post;
