import axios from "axios";
export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyPost(props.post);
  };

  return (
    <div id="posts-show">
      <h2>{props.post.title}</h2>
      <p>Body: {props.post.body}</p>
      <p>Image: {props.post.image}</p>

      <h2>Edit Here</h2>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.post.title} name="title" type="text" />
        </div>
        <div>
          Body: <input defaultValue={props.post.body} name="body" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.post.image} name="image" type="text" />
        </div>
        <button class="btn btn-outline-success me-2" type="submit">
          Update
        </button>
      </form>
      <button onClick={handleClick} type="button" class="btn btn-warning">
        Delete!
      </button>
    </div>
  );
}
