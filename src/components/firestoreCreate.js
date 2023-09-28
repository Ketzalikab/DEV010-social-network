import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from './firebase.js';

// mandar post a DB (userID, icon, idLikes, post, time)
const createPost = (userID, icon, idLikes, post) => {
  const postRef = doc(db, 'posts', 'posts1a');

  updateDoc(postRef, {
    autor: arrayUnion(userID),
    icono: arrayUnion(icon),
    likes: arrayUnion(idLikes),
    post: arrayUnion(post),
  })
    .then(() => {
      console.log('Post creado');
    })
    .catch((error) => console.log(error));
};

/* const createPost = (userID, icon, posts) => {
  const postRef = doc(db, 'postPrueba', 'posts1b');

  updateDoc(postRef, {
    autor: arrayUnion(userID),
    icono: arrayUnion(icon),
    posts: arrayUnion(posts),

  })
    .then(() => {
      console.log('Post creado');
    })
    .catch((error) => console.log(error));
}; */

export default createPost;
