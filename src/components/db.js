import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase.js';

// mandar post a DB (userID, icon, idLikes, post, time)
const savePost = (userID, icon, post) => {
  addDoc(
    collection(db, 'dataBase2'),
    {
      userID, icon, post, likes: 0, time: serverTimestamp(),
    },
  );
};

export default savePost;
