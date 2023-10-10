// importamos la funcion que vamos a testear
import savePost from '../src/components/db.js';
import { db } from '../src/components/firebase';

const {
  doc, addDoc, collection, serverTimestamp,
} = require('firebase/firestore');

// creamos el mock
jest.mock('firebase/firestore', () => ({
  doc: jest.fn(),
  addDoc: jest.fn(),
  collection: jest.fn(),
  serverTimestamp: jest.fn(),
  getFirestore: jest.fn(),
}));

describe('savePost', () => {
  it('verificamos que sea una función', () => {
    expect(typeof savePost).toBe('function');
  });

  // comprobamos que se pueda guardar el post

  it('debería llamar a saveDoc con los argumentos correctos', async () => {
    const userID = 'Panchita';
    const icon = 'image.png';
    const post = 'Hoy hice una pintura mediante colores RGB';
    // Simula una llamada a savePost
    savePost(userID, icon, post);

    // Verifica que doc se haya mandado con los argumentos correctos
    addDoc(
      collection(db, 'dataBase2'),
      {
        userID, icon, post, likes: 0, time: serverTimestamp(),
      },
    );
  });
});
