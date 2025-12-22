function Post(props) {
  return (
    <div className="post">
      <div className="picture">
        <img src="../assets/bear.jpg" alt="sample picture" />
      </div>
      <div className="content">
        <div className="title"> {props.title}</div>
        <p className="text">{props.text}</p>
        <button>Edit</button>
      </div>
    </div>
  );
}

export default Post;
