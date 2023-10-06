import { doc, deleteDoc } from 'firebase/firestore';
import { db } from './firebase.js';

function eliminarPost(docID) {
  const postRef = doc(db, 'dataBase2', docID);
  return deleteDoc(postRef)
    .then(() => {
      console.log('Post eliminado correctamente');
    })
    .catch((error) => {
      console.error('Error al eliminar el post:', error);
      return Promise.reject(error);
    });
}

export default eliminarPost;
