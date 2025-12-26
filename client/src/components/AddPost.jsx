import styles from "./AddPost.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

function AddPost({ click }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const id = nanoid();
    click({ id, title, text });
    navigate("/");
  }

  return (
    <div className={styles.container}>
      <h3>Add New Post</h3>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title ..."
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.title}
        />

        <textarea
          name="content"
          placeholder="Text ..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.content}
        />

        <input type="submit" value="AddPost" className={styles.button} />
      </form>
    </div>
  );
}

export default AddPost;
