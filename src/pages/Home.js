import React from "react";
import PostList from "../components/PostList";

const Home = ({ posts, deletePost, likePost }) => {
  return (
    <div className="container">
      <h2>All Posts</h2>
      <PostList posts={posts} onDelete={deletePost} onLike={likePost} />
    </div>
  );
};

export default Home;
