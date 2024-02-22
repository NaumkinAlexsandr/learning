import React, { useEffect, useState } from "react";
import Button from "@mui/material/IconButton";
import "./react.scss";

const url = "https://jsonplaceholder.typicode.com/posts";

//  DataProvider получает данные с сервера и сохраняет их в состоянии:
function DataProvider(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json.splice(0, 3)));
  }, []);

  return props.render(data);
}

// Показывает список постов User
function PostListForUser(props) {
  return (
    <div>
      {props.posts.length ? (
        props.posts.map((post) => (
          <p style={{ color: "white" }} key={post.id}>
            <span className="props-title">{post.title}</span>
            <br />
            <span className="props-output">{post.body}</span>
          </p>
        ))
      ) : (
        <p>No posts</p>
      )}
    </div>
  );
}

// Показывает список постов с возможнастью редактировать
function PostListForAdmin(props) {
  return (
    <div>
      {props.posts.length ? (
        props.posts.map((post) => (
          <p style={{ color: "white" }} key={post.id}>
            <span className="props-title">{post.title}</span> <br />
            <span className="props-output">{post.body}</span>
            <br />
            <Button id="example-btn" style={{ backgroundColor: "#83D350" }}>
              Edite
            </Button>
            <Button id="example-btn" style={{ backgroundColor: "#F60030" }}>
              Delete
            </Button>
          </p>
        ))
      ) : (
        <p>No posts</p>
      )}
    </div>
  );
}

export default function Blog() {
  const [admin, setAdmin] = useState(false);

  const toggle = () => setAdmin(!admin);

  const render = (data) => {
    return admin ? (
      <PostListForAdmin posts={data} />
    ) : (
      <PostListForUser posts={data} />
    );
  };

  return (
    <p>
      <DataProvider render={render} />
      <Button id="example-btn" onClick={toggle}>
        {admin ? "user" : "admin"}
      </Button>
    </p>
  );
}
