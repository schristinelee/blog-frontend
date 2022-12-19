import { Link } from "react-router-dom";

export function Header() {
  return (
    <div>
      <header>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
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
                  <a href="#posts-index">All posts</a>|
                </li>
                <li class="nav-item dropdown">
                  <a href="#posts-new">New post</a>|<Link to="/about">About</Link>|
                </li>
                <li class="nav-item">
                  <Link to="/signup">Signup</Link>|
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
      </header>
    </div>
  );
}
