import axios from "axios";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { Signup } from "./Signup";
import { Login } from "./Login";
import { useState } from "react";
import { PostsNew } from "./Postsnew";

export function Header() {
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isPostsNewVisible, setIsPostsNewVisible] = useState(false);

  const handleSignupShow = () => {
    setIsSignupVisible(true);
  };

  const handleSignupClose = () => {
    setIsSignupVisible(false);
  };

  const handleLoginShow = () => {
    setIsLoginVisible(true);
  };

  const handleLoginClose = () => {
    setIsLoginVisible(false);
  };

  const handlePostsNewShow = () => {
    setIsPostsNewVisible(true);
  };

  const handlePostsNewClose = () => {
    setIsPostsNewVisible(false);
  };

  const handleLogout = (event) => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg bg-medium">
          <div class="container-lg">
            <a class="navbar-brand" href="#">
              BLOG.
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/">Home</Link>|
                </li>
                <li class="nav-item">
                  <Link to="/about">About</Link>|
                </li>
                {localStorage.jwt === undefined ? (
                  <>
                    <li className="nav-item">
                      <a onClick={handleSignupShow} href="#">
                        Signup
                      </a>
                      |
                    </li>
                    <li className="nav-item">
                      <a onClick={handleLoginShow} href="#">
                        Login
                      </a>
                      |
                    </li>
                  </>
                ) : (
                  <li classname="nav-item">
                    <a onClick={handleLogout} href="#">
                      Logout
                    </a>
                    |
                  </li>
                )}
                <li className="nav-item">
                  <a className="nav-link" href="#posts-index">
                    All posts
                  </a>
                  |
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/posts/new">
                    New Posts
                  </a>
                  |
                </li>
              </ul>
              <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>

        <Modal show={isSignupVisible} onClose={handleSignupClose}>
          <Signup />
        </Modal>

        <Modal show={isLoginVisible} onClose={handleLoginClose}>
          <Login />
        </Modal>
      </header>
    </div>
  );
}
