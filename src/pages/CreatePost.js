import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API_BASE from "../api";

const CreatePost = ({ addPost, updatePost, posts }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = !!id;

  const [formData, setFormData] = useState({ title: "", content: "" });

  useEffect(() => {
    if (isEdit && posts) {
      const postToEdit = posts.find((p) => p.id === id);
      if (postToEdit) {
        setFormData({ title: postToEdit.title, content: postToEdit.content });
      }
    }
  }, [id, isEdit, posts]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title || !formData.content) return;

    if (isEdit) {
      const res = await fetch(`${API_BASE}/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const updated = await res.json();
      updatePost(id, updated);
    } else {
      const res = await fetch(`${API_BASE}/posts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const created = await res.json();
      addPost(created);
    }

    navigate("/");
  };

  return (
    <div className="container">
      <h2>{isEdit ? "Edit Post" : "Create Post"}</h2>
      <form onSubmit={handleSubmit} className="post-form">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
          rows="6"
          required
        />
        <button type="submit">{isEdit ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default CreatePost;
