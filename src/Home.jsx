import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { LogoutLink } from "./LogoutLink";
import { Modal } from "./Modal";
import { PostsShow } from "./PostsShow";

export function Home() {
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  const handleHidePost = () => {
    setIsPostsShowVisible(false);
  };

  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([...posts, response.data]);
    });
  };

  const handleUpdatePost = (id, params) => {
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
      setPosts(
        posts.map((post) => {
          if (post.id === response.data.id) {
            return response.data;
          } else {
            return post;
          }
        })
      );
      handleHidePost();
    });
  };

  const handleDestroyPost = (post) => {
    console.log(post);
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then((response) => {
      setPosts(posts.filter((p) => p.id !== post.id));
      handleHidePost();
    });
  };

  useEffect(handleIndexPosts, []);

  return (
    <div className="container">
      <Signup />
      <Login />
      <LogoutLink />
      <Modal show={isPostsShowVisible} onClose={handleHidePost}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} />
      </Modal>

      <PostsNew onPostCreate={handleCreatePost} />
      <PostsIndex posts={posts} onSelectPost={handleShowPost} />
    </div>
  );
}
