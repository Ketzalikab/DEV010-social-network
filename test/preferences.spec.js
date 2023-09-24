// importamos la funcion que vamos a testear
import preferences from '../src/components/preferences';

// Primero verificamos si es una función.
describe('preferences', () => {
  it('verificamos que sea una función', () => {
    expect(typeof preferences).toBe('function');
  });

  // TODO Ahora debo verificar que la función cumpla con su cometido:

  it('la función pinta un documento HTML', () => {
    const result = preferences();
    expect(result instanceof HTMLElement).toBe(true);
  }); // marca "The error below may be caused by using the wrong test environment"

  // TODO 2. verificar que capture las preferencias del usuario en una variable.
  it('verificamos que los los valores de la función sean los correctos', () => {
    const result = preferences();
    const buttons = result.querySelectorAll('button'); // almacenamos los botones en un array.

    expect(buttons).toHaveLength(4);
    expect(buttons[0].value).toBe('teacher');
    expect(buttons[1].value).toBe('kids');
    expect(buttons[2].value).toBe('creator');
    expect(buttons[3].value).toBe('artist');
  // marca "The error below may be caused by using the wrong test environment"
  });

  it('la función debe capturar el valor del botón al hacer click', () => {
    const result = preferences();
    document.body.appendChild(result);

    const button = result.querySelector('button[value="teacher"]');
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    });

    const mockConsoleLog = jest.spyOn(console, 'log'); //mandamos a Jest a que espíe el futuro console.log que vamos a hacer.

    button.dispatchEvent(clickEvent); //esto simula el que alguien hizo click en el botón.

    expect(mockConsoleLog).toHaveBeenCalledWith('teacher');

    document.body.removeChild(result);
  });

  // TODO En un futuro al conectar con la base de datos de Firebase:
// .....3. verificar que las preferencias del usuario sean enviadas a Firebase.
});
