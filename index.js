// Write your code here!
const postList = document.getElementById("post-list");

async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  displayPosts(posts);
}

function displayPosts(posts) {
  const post = posts[0];

  const title = document.createElement("h1");
  title.textContent = post.title;

  const body = document.createElement("p");
  body.textContent = post.body;

  postList.appendChild(title);
  postList.appendChild(body);
}

fetchPosts();

