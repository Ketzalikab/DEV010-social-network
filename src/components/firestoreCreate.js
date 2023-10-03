import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from './firebase.js';

// mandar post a DB (userID, icon, idLikes, post, time)
const createPost = (userID, icon, idLikes, post) => {
  const postRef = doc(db, 'postNuevo', 'postNv');
  const arrayPost = [userID, icon, idLikes, post];

  updateDoc(postRef, {
    // posts: arrayUnion({ arrayPost }),
    posts: arrayUnion({
      userID, icon, idLikes, post,
    }),
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
