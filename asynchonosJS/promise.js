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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      let error = false;
      if (!error) {
        resolve();
      } else {
        reject("Error something went wrong");
      }
    }, 3000);
  });
}

// createPost({ title: "Post Three", body: "This is the post three" })
//   .then(getPost)
//   .catch((err) => console.log(err));

//async await
async function getInit() {
  await createPost({ title: "Post Three", body: "This is the post three" });

  getPost();
}

getInit();

//promise.all
const promise1 = Promise.resolve("Hello World");
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "Good Bye");
});

Promise.all([promise1, promise2, promise3]).then((value) => {
  console.log(value);
});
