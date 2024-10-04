import fetch from "node-fetch";
//exercici1

async function exercici1() {
  try {
    const users = await (
      await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();
    const user = users.find((u) => u.id === 9);

    if (user) {
      const tasks = await (
        await fetch(
          `https://jsonplaceholder.typicode.com/todos?userId=${user.id}`
        )
      ).json();
      tasks.forEach((task) =>
        console.log(`Títol: ${task.title}, Acabada: ${task.completed}`)
      );
    } else {
      console.log("Usuari no acabat.");
    }
  } catch (err) {
    console.error(`Error ${err}`);
  }
}
//exercici1();

//exercici2

async function exercici2(userId) {
  try {
    const posts = await (
      await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    ).json();

    console.log(`Missatges de l'usuari amb ID ${userId}:`);
    for (const post of posts) {
      console.log(`- Post: ${post.title}`);
      const comments = await (
        await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
      ).json();
      console.log(`  Comentaris:`);
      comments.forEach((comment) =>
        console.log(`    - ${comment.body}`)
      );
    }
  } catch (err) {
    console.error(`Error ${err}`);
  }
}
//exercici2(9); 

//exercici3
async function exercici3(userId) {
  try {
    const albums = await (
      await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
    ).json();

    for (const album of albums) {
      console.log(`Àlbum: ${album.title}`);
      const photos = await (
        await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`)
      ).json();
      photos.forEach((photo) =>
        console.log(`  Títol: ${photo.title}, URL: ${photo.url}`)
      );
    }
  } catch (err) {
    console.error(`Error ${err}`);
  }
}

exercici3(9);
