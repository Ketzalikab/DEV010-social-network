import {
  arrayUnion, doc, updateDoc, arrayRemove,
} from 'firebase/firestore';
import { db } from './firebase.js';

function likes(idPost, likesNumber, isLike, whoLike) {
  const postRef = doc(db, 'dataBase2', idPost);
  let nbLikes = Number(likesNumber);
  if (isLike) {
    if (whoLike) {
      nbLikes += 1;
      updateDoc(postRef, {
        likes: nbLikes,
        whoLikes: arrayUnion(whoLike),
      });
    }
  } else if (whoLike) {
    nbLikes -= 1;
    if (nbLikes < 0) { nbLikes = 0; }
    updateDoc(postRef, {
      likes: nbLikes,
      whoLikes: arrayRemove(whoLike),
    });
  }
  return nbLikes;
}

export default likes;
