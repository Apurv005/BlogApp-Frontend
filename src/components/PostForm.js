import React, { useState, useEffect } from "react";
import API_BASE from "../api";

const PostForm = ({ onPostCreated, editingPost, onPostUpdated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setContent(editingPost.content);
    }
  }, [editingPost]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = { title, content };

    if (editingPost) {
      const res = await fetch(`${API_BASE}/posts/${editingPost.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const updated = await res.json();
      onPostUpdated(updated);
    } else {
      const res = await fetch(`${API_BASE}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const newPost = await res.json();
      onPostCreated(newPost);
    }

    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{editingPost ? "Edit Post" : "Create Post"}</h2>
      <input
        type="text"
        placeholder="Post title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Post content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">{editingPost ? "Update" : "Create"}</button>
    </form>
  );
};

export default PostForm;
