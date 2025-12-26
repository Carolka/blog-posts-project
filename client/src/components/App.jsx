import { useQuery } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { nanoid } from "nanoid";
import Post from "./Post";
import Nav from "./Nav";
import AddPost from "./AddPost";

export function App() {
  const { data = { baz: "astral" } } = useQuery({
    queryKey: ["hello"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5002/api/hello");
      return res.json();
    },
  });

  const posts = [
    { id: nanoid(), title: "Post 1 Headline", text: "Lorem ipsum lalalalala" },
    { id: nanoid(), title: "Post 2 Headline", text: "Lorem ipsum lalalalala" },
    { id: nanoid(), title: "Post 3 Headline", text: "Lorem ipsum lalalalala" },
    { id: nanoid(), title: "Post 4 Headline", text: "Lorem ipsum lalalalala" },
  ];

  return (
    <Router>
      <Nav></Nav>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              {posts.map((post) => (
                <Post key={post.id} title={post.title} text={post.text} />
              ))}
            </div>
          }
        />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>

      {/* <div>{JSON.stringify(data)}</div> */}
    </Router>
  );
}
