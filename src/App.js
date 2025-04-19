// src/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  const addPost = (newPost) => {
    const post = {
      id: Date.now(),
      title: newPost.title,
      content: newPost.content,
      likes: 0,
    };
    setPosts([post, ...posts]);
  };

  const updatePost = (id, updatedPost) => {
    const updated = posts.map((p) =>
      p.id === id ? { ...p, ...updatedPost } : p
    );
    setPosts(updated);
  };

  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const likePost = (id) => {
    const liked = posts.map((p) =>
      p.id === id ? { ...p, likes: p.likes + 1 } : p
    );
    setPosts(liked);
  };

  return (
    <Router>
      <div className={`app ${darkMode ? "dark" : ""}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                posts={posts}
                deletePost={deletePost}
                likePost={likePost}
              />
            }
          />
          <Route
            path="/create"
            element={<CreatePost addPost={addPost} posts={posts} />}
          />
          <Route
            path="/edit/:id"
            element={<CreatePost updatePost={updatePost} posts={posts} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
