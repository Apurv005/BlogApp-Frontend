import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import API_BASE from "./api";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "";
  }, [darkMode]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`${API_BASE}/posts`);
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  const addPost = (newPost) => setPosts([newPost, ...posts]);

  const updatePost = (id, updatedPost) => {
    const updated = posts.map((p) => (p.id === id ? updatedPost : p));
    setPosts(updated);
  };

  const deletePost = async (id) => {
    await fetch(`${API_BASE}/posts/${id}`, { method: "DELETE" });
    setPosts(posts.filter((p) => p.id !== id));
  };

  const likePost = async (id) => {
    const res = await fetch(`${API_BASE}/posts/${id}/like`, { method: "POST" });
    const updated = await res.json();
    setPosts(posts.map((p) => (p.id === id ? updated : p)));
  };

  return (
    <Router>
      <div className={`app ${darkMode ? "dark" : ""}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route
            path="/"
            element={
              <Home posts={posts} deletePost={deletePost} likePost={likePost} />
            }
          />
          <Route
            path="/create"
            element={<CreatePost addPost={addPost} />}
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
