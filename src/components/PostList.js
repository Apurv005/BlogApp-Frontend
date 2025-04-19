// src/components/PostList.js
import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, onDelete, onLike }) => {
  return (
    <div>
      {posts.length === 0 ? (
        <p style={{ color: "var(--text-color)", textAlign: "center", marginTop: "30px" }}>
          No posts to display. Create your first post!
        </p>
      ) : (
        posts.map((post) => (
          <PostItem
            key={post.id}
            post={post}
            onDelete={onDelete}
            onLike={onLike}
          />
        ))
      )}
    </div>
  );
};

export default PostList;
