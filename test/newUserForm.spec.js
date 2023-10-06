// importamos la funcion que vamos a testear
import newUser from '../src/components/NewUserForm';

// Primero verificamos si es una función.

describe('newUser', () => {
  it('verificamos que sea una función', () => {
    expect(typeof newUser).toBe('function');
  });
});

// verificar que la función pinte el html formulario

it('la función pinta un documento HTML', () => {
  const result = newUser();
  expect(result instanceof HTMLElement).toBe(true);
});
