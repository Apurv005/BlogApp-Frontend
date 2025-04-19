// src/components/PostForm.js
import React, { useState, useEffect } from "react";
import "./PostForm.css";

const PostForm = ({ onSubmit, initialData = {}, isEditing }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (initialData.title) setTitle(initialData.title);
    if (initialData.content) setContent(initialData.content);
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !content.trim()) {
      alert("Please fill in both the title and content fields.");
      return;
    }

    onSubmit({ ...initialData, title, content });
    setTitle("");
    setContent("");
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h2>{isEditing ? "Edit Post" : "Create Post"}</h2>
      <input
        type="text"
        placeholder="Post Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Write something awesome..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">{isEditing ? "Update" : "Publish"}</button>
    </form>
  );
};

export default PostForm;
