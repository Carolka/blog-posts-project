import styles from "./Post.module.css";
import { Link } from "react-router-dom";

function Post(props) {
  function handleClick(e) {
    props.delete(props.id);
  }

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
          {/* <button className={styles.button}>Edit</button> */}
          <Link to={"/edit-post/" + props.id} className={styles.edit}>
            Edit Post
          </Link>
          <button className={styles.button} onClick={handleClick}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
