import styles from "./AddPost.module.css";

function AddPost() {
  return (
    <div className={styles.container}>
      <h3>Add New Post</h3>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Title ..."
          name="title"
          className={styles.title}
        />

        <textarea
          name="content"
          placeholder="Text ..."
          className={styles.content}
        />

        <input type="submit" value="AddPost" className={styles.button} />
      </form>
    </div>
  );
}

export default AddPost;
