/* import { sendPasswordResetEmail } from 'firebase/auth';
import recover from '../src/components/recover';

// Primero verificamos si es una función.
describe('recover', () => {
  it('verificamos que sea una función', () => {
    expect(typeof recover).toBe('function');
  });

  // Mock para firebase
  jest.mock('firebase/auth', () => ({
    getAuth: jest.fn(),
    sendPasswordResetEmail: jest.fn(),
  }));
});

/* TODO DESDE AQUI NO ESTá CORRIENDO EL TEST

  it('muestra mensaje de éxito al enviar email', () => {
    // Mockear comportamiento de sendEmail
    sendPasswordResetEmail.mockResolvedValue();

    // Renderizar componente
    const root = document.createElement('div');
    root.innerHTML = recover();

    // Seleccionar elementos
    const emailInput = root.querySelector('#emailRecover');
    const btnSend = root.querySelector('#btnSendEmail');
    const alert = root.querySelector('#showAlert');

    // Simular ingreso de email y click
    emailInput.value = 'test@test.com';
    btnSend.click();

    // Verificar mensaje
    expect(alert.textContent).toBe('Correo electrónico enviado, por favor revisa tu correo para cambiar tu contraseña');
  });
}); */
