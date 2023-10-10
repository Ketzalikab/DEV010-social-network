/* // importamos la funcion que vamos a testear
import preferences from '../src/components/preferences';

// Primero verificamos si es una función.
describe('preferences', () => {
  it('verificamos que sea una función', () => {
    expect(typeof preferences).toBe('function');
  });

  // La función cumple con su cometido:

  it('la función pinta un documento HTML', () => {
    const result = preferences();
    expect(result instanceof HTMLElement).toBe(true);
  });
}); */
