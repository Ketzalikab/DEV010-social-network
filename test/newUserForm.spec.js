// importamos la funcion que vamos a testear
import newUser from '../src/components/NewUserForm';

// Primero verificamos si es una función.

describe('newUser', () => {
  it('verificamos que sea una función', () => {
    expect(typeof newUser).toBe('function');
  });
});
// TODO Ahora debo verificar que la función cumpla con su cometido:
// TODO 1. verificar que la función pinte el html formulario
// TODO 2. Sea capaz de capturar los datos del usuario de forma correcta
// TODO 3. Sea capaz de enviar los datos a FireBase.
// TODO 4. Sea capaz de recibir un id de usuario.
// TODO 5. Sea capaz de salvar los datos de usuario en una variable exportable.