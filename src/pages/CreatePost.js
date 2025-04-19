// src/pages/CreatePost.js
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

function CreatePost({ addPost, updatePost, posts }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [formData, setFormData] = useState({ title: "", content: "" });

  useEffect(() => {
    if (isEdit) {
      const postToEdit = posts.find((p) => p.id === parseInt(id));
      if (postToEdit) {
        setFormData({ title: postToEdit.title, content: postToEdit.content });
      }
    }
  }, [id, isEdit, posts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) {
      alert("Title and content are required.");
      return;
    }

    if (isEdit) {
      updatePost(parseInt(id), formData);
    } else {
      addPost(formData);
    }

    navigate("/");
  };

  return (
    <div className="container">
      <h2 className="page-title">{isEdit ? "Edit Post" : "Create New Post"}</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <input
          type="text"
          name="title"
          placeholder="Enter post title"
          value={formData.title}
          onChange={handleChange}
          className="form-input"
        />
        <textarea
          name="content"
          placeholder="Enter post content"
          value={formData.content}
          onChange={handleChange}
          className="form-textarea"
          rows="6"
        />
        <button type="submit" className="btn submit">
          {isEdit ? "Update Post" : "Create Post"}
        </button>
      </form>
    </div>
  );
}

export default CreatePost;
