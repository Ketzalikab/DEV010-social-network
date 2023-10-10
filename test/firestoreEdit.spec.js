// importamos la funcion que vamos a testear
import editPost from '../src/components/firestoreEdit';
import { db } from '../src/components/firebase';

const { doc, updateDoc } = require('firebase/firestore');

// creamos el mock
jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  updateDoc: jest.fn(),
  getFirestore: jest.fn(),
}));

describe('editPost', () => {
  it('verificamos que sea una función', () => {
    expect(typeof editPost).toBe('function');
  });

  // comprobamos que se pueda editar el post

  it('debería llamar a updateDoc con los argumentos correctos', async () => {
    const docID = '8KLGPadVnuuqTaPywSw6';
    const newPost = 'Nuevo contenido del post';
    // Simula una llamada a editPost
    editPost(docID, newPost);

    // Verifica que doc se haya llamado con los argumentos correctos
    // Primer parámetro
    expect(doc).toHaveBeenCalledWith(db, 'dataBase2', docID);

    // Segundo parámetro
    expect(updateDoc).toHaveBeenCalledWith(undefined, {
      post: newPost,
    });
  });
});
