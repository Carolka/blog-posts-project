import styles from "./Post.module.css";

function Post(props) {
  return (
    <div className={styles.post}>
      <img
        className={styles.picture}
        src="../assets/bear.jpg"
        alt="sample picture"
      />
      <div className={styles.content}>
        <div className={styles.title}> {props.title}</div>
        <p className={styles.text}>{props.text}</p>
        <div className={styles.buttonContainer}>
          <button className={styles.button}>Edit</button>
          <button className={styles.button}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default Post;
