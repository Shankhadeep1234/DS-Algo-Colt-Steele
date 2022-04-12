const posts = [
  { title: "Post One", body: "This is the post one" },
  { title: "Post Two", body: "This is the post two" },
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 2000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 3000);
}

createPost({ title: "Post Three", body: "This is the post three" }, getPost);
