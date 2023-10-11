/* import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
} from 'firebase/auth';
import login from '../src/components/login';

// Creamos un mock para getAuth
jest.mock('firebase/auth', () => ({
  getAuth: jest.fn(),
  signInWithPopup: jest.fn(),
  signInWithEmailAndPassword: jest.fn(),
  ...jest.requireActual('firebase/auth'), // Importa el módulo real para no interferir con su funcionalidad
  GoogleAuthProvider: {
    // Crea una función que devuelva un objeto simulado con el método PROVIDER_ID
    credential: jest.fn(),
    PROVIDER_ID: 'google.com',
  },
}));

describe('login', () => {
  beforeEach(() => {
    document.body.innerHTML = ''; // Limpia el DOM antes de cada prueba
  });

  it('debería realizar la autenticación con correo y contraseña', async () => {
    // Configura el mock para getAuth
    const mockAuth = getAuth();
    const email = 'test@example.com';
    const password = 'password123';

    const signInWithEmailAndPasswordSpy = jest
      .spyOn(mockAuth, 'signInWithEmailAndPassword')
      .mockResolvedValueOnce({
        user: {
          uid: 'user123',
          email,
        },
      });

    // Renderiza el componente
    document.body.appendChild(login());

    // Simula la entrada de valores en los campos de correo y contraseña
    const emailInput = document.getElementById('emailInput');
    emailInput.value = email;

    const passwordInput = document.getElementById('passwordInput');
    passwordInput.value = password;

    // Simula hacer clic en el botón de inicio de sesión
    const loginButton = document.getElementById('loginButton');
    loginButton.click();

    // Verifica que la función signInWithEmailAndPassword se haya llamado
    expect(signInWithEmailAndPassword).toHaveBeenCalledWith(email, password);
  });

  it('debería realizar la autenticación con Google', async () => {
    // Configura el mock para getAuth
    const mockAuth = getAuth();
    const signInWithPopupSpy = jest
      .spyOn(mockAuth, 'signInWithPopup')
      .mockResolvedValueOnce({
        user: {
          uid: 'user123',
          displayName: 'John Doe',
        },
      });

    // Renderiza el componente
    document.body.appendChild(login());

    // Simula hacer clic en el botón de inicio de sesión con Google
    const googleSignInLink = document.getElementById('googleSignInLink');
    googleSignInLink.click();

    // Verifica que la función signInWithPopup se haya llamado con el proveedor de Google
    expect(signInWithPopupSpy).toHaveBeenCalledWith(expect.any(GoogleAuthProvider));
  });
}); */
