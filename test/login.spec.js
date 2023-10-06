import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Importa la función que quieres probar
import { expect } from '@playwright/test';
import login, { autenticacionUser } from '../src/components/login.js';

// Creamos un mock para getAuth
jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
}));

describe('login', () => {
  it('verificamos que sea una función', () => {
    expect(typeof login).toBe('function');
  });

  it('la función pinta un documento HTML', () => {
    const result = login();
    expect(result instanceof HTMLElement).toBe(true);
  });
});

/* TODO Como testeamos una funcion dentro de otra funcion?

describe('autenticacionUser', () => {
  it('deberia autenticar al usuario correctamente', async () => {
    const email = 'test@example.com';
    const password = 'password123';

    // Configura el mock para getAuth
    const mockAuth = getAuth();
    const signInMock = signInWithEmailAndPassword(mockAuth, email, password);
    signInMock.mockResolvedValue({ uid: 'usuario123', email: 'test@example.com' });

    // Llama a la función que estás probando
    const result = await autenticacionUser(email, password);
    // Verifica que la función se haya llamado con los argumentos correctos
    expect(signInMock).toHaveBeenCalledWith(mockAuth, email, password);
    // Verifica que la función retorne el valor esperado
    expect(result).toEqual({ uid: 'usuario123', email: 'test@example.com' });
  });

  it('deberia manejar errores de autenticacion', async () => {
    const email = 'test@example.com';
    const password = 'password123';
    const errorMessage = 'Error al iniciar sesion: Usuario no encontrado';

    // Configura el mock para getAuth
    const mockAuth = getAuth();
    const signInMock = signInWithEmailAndPassword(mockAuth, email, password);
    signInMock.mockRejectedValue(new Error('auth/user-not-found')); /* simular un error especifico

    // Llama a la función que estás probando
    try {
      await autenticacionUser(email, password);
    } catch (error) {
    // Verifica que la función maneje el error correctamente
      expect(error.message).toBe(errorMessage);
    }
  });
}); */
