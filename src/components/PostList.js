import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, onDelete, onLike }) => {
  if (posts.length === 0) {
    return <p>No posts found. Create one!</p>;
  }

  return (
    <>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} onDelete={onDelete} onLike={onLike} />
      ))}
    </>
  );
};

export default PostList;
