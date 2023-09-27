import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from './firebase.js';

const createPost = (userID, icon, posts) => {
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
};

export default createPost;
