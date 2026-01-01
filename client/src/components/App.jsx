import { useQuery } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import Post from "./Post";
import Nav from "./Nav";
import AddPost from "./AddPost";
import EditPost from "./EditPost";

const starterPosts = [
  { title: "Post 1 Headline", text: "Lorem ipsum lalalalala" },
  { title: "Post 2 Headline", text: "Lorem ipsum lalalalala" },
  { title: "Post 3 Headline", text: "Lorem ipsum lalalalala" },
  { title: "Post 4 Headline", text: "Lorem ipsum lalalalala" },
];
export function App() {
  const { data = { baz: "astral" } } = useQuery({
    queryKey: ["hello"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5002/api/hello");
      return res.json();
    },
  });

  //if there is - get from localStorage - else get startedPost and generate id's to them
  const [posts, setPosts] = useState(() => {
    const saved = localStorage.getItem("posts");
    return saved
      ? JSON.parse(saved)
      : starterPosts.map((p) => ({ ...p, id: nanoid() }));
  });

  //update localStorage - every time there is a change in "posts"
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  function addNewPost(newPost) {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  }

  function deletePost(id) {
    setPosts((prevPosts) => prevPosts.filter((item) => item.id !== id));
  }

  function editPost(postToEdit) {
    //when postToEdit contains every property in the object (completety overwrites post to postToEdit)
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === postToEdit.id ? postToEdit : post))
    );

    //when it only contains properties that changed do {...post, postToEdit}
  }

  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              {posts.map((post) => (
                <Post
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  text={post.text}
                  delete={deletePost}
                  edit={editPost}
                />
              ))}
            </div>
          }
        />
        <Route path="/add-post" element={<AddPost click={addNewPost} />} />
        <Route
          path="/edit-post/:postId"
          element={<EditPost posts={posts} click={editPost} />}
        />
      </Routes>

      {/* <div>{JSON.stringify(data)}</div> */}
    </Router>
  );
}
