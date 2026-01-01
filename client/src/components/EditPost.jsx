import { useParams, useNavigate } from "react-router-dom";
import styles from "./EditPost.module.css";
import { useState } from "react";

function EditPost({ posts, click }) {
  const { postId } = useParams();
  const navigate = useNavigate();

  //get data for post of id=postId
  const post = posts.find((p) => p.id === postId);
  const id = postId;
  if (!post) return <p>Post not found. </p>;

  const [title, setTitle] = useState(post.title);
  const [text, setText] = useState(post.text);

  function handleSubmit(e) {
    e.preventDefault();
    click({ id, title, text });
    navigate("/");
  }

  return (
    <div className={styles.container} onSubmit={handleSubmit}>
      <h3>Edit Post</h3>
      <form className={styles.form}>
        <input
          type="text"
          placeholder="Title ..."
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className={styles.title}
        />

        <textarea
          placeholder="Text ..."
          name="content"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className={styles.content}
        />

        <input type="submit" value="Save Changes" className={styles.button} />
      </form>
    </div>
  );
}

export default EditPost;
