import { useQuery } from "@tanstack/react-query";
import Post from "./Post";
import Nav from "./Nav";

export function App() {
  const { data = { baz: "astral" } } = useQuery({
    queryKey: ["hello"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5002/api/hello");
      return res.json();
    },
  });

  const posts = [
    { id: 1, title: "Post 1 Headline", text: "Lorem ipsum lalalalala" },
    { id: 2, title: "Post 2 Headline", text: "Lorem ipsum lalalalala" },
    { id: 3, title: "Post 3 Headline", text: "Lorem ipsum lalalalala" },
    { id: 4, title: "Post 4 Headline", text: "Lorem ipsum lalalalala" },
  ];

  return (
    <div>
      <Nav></Nav>
      <div className="container">
        {posts.map((post) => (
          <Post key={post.id} title={post.title} text={post.text} />
        ))}
      </div>
      {/* <div>{JSON.stringify(data)}</div> */}
    </div>
  );
}
