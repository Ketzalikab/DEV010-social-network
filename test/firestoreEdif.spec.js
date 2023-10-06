// importamos la funcion que vamos a testear
import editPost from '../src/components/firestoreEdit';

const { doc, updateDoc } = require('firebase/firestore');

// creamos el mock
jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  updateDoc: jest.fn(),
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
    expect(doc).toHaveBeenCalledWith(expect.editPost(), 'dataBase2', docID);

    // Verifica que updateDoc se haya llamado con los argumentos correctos
    expect(updateDoc).toHaveBeenCalledWith(expect.editPost(), {
      post: newPost,
    });
  });
});
