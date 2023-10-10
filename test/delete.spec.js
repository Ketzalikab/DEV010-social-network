import { doc, deleteDoc } from 'firebase/firestore';
import eliminarPost from '../src/components/firestoreDelete';
import { db } from '../src/components/firebase';

jest.mock('firebase/firestore', () => ({
  __esModule: true,
  ...jest.requireActual('firebase/firestore'), // Usa las implementaciones reales para otras funciones
  doc: jest.fn(),
  deleteDoc: jest.fn(),

}));

describe('eliminarPost', () => {
  it('deberia eliminar un post correctamente', async () => {
    const docID = 'tu-id-de-documento';

    const postRefMock = jest.fn();
    doc.mockReturnValueOnce(postRefMock);

    // const deleteDocMock = jest.fn().mockResolvedValue();
    deleteDoc.mockReturnValueOnce(Promise.resolve());
    const callbackMock = jest.fn();

    // llama a la funcion eliminarPost
    // const result = await eliminarPost(docID, callbackMock);
    try {
      // llama a la funcion eliminarPost
      const result = await eliminarPost(docID, callbackMock);
      expect(deleteDoc).toHaveBeenCalledWith(postRefMock);
      expect(callbackMock).toHaveBeenCalledWith('Post eliminado correctamente');
      expect(result).toBe('Post eliminado correctamente');
    } catch (error) {
    // Manejar errores inesperados
      console.error('Error inesperado:', error);
      throw error;
    }
  });
  it('debería llamar al callback si es una función', async () => {
    const docID = 'tu-id-de-documento';

    const postRefMock = jest.fn();
    doc.mockReturnValueOnce(postRefMock);

    // Simula una eliminación exitosa
    deleteDoc.mockReturnValueOnce(Promise.resolve());

    // Crea un mock para el callback
    const callbackMock = jest.fn();

    // Llama a la función eliminarPost con un callback que es una función
    await eliminarPost(docID, callbackMock);

    // Verifica que el callback se haya llamado con el mensaje correcto
    expect(callbackMock).toHaveBeenCalledWith('Post eliminado correctamente');
  });

  it('deberia manejar errores al eliminar un post', async () => {
    const docID = 'tu-id-de-documento';
    // aca ponemos la simulacion del callback
    const callbackMock = jest.fn();
    // Simula un error al eliminar el documento
    const error = new Error('Error al eliminar el post');
    // const deleteDocMock = jest.fn().mockRejectedValue(error);
    const postRefMock = doc(db, 'dataBase2', docID);

    // simular la funcion deleteDoc para lanzar un error
    deleteDoc.mockImplementationOnce(() => Promise.reject(error)); // Simula un error al eliminar el documento
    doc.mockReturnValueOnce(postRefMock);
    // llamar a la funcion eliminarPost y maneja la promesa rechazada
    await expect(eliminarPost(docID, callbackMock)).rejects.toThrowError(
      `Error al eliminar el post: ${error.message}`,
    );
    expect(callbackMock).toHaveBeenCalledWith(`Error al eliminar el post: ${error.message}`);
    // También podrías verificar que no se haya llamado al callback en el caso de éxito
    expect(callbackMock).not.toHaveBeenCalledWith('Post eliminado correctamente');
    expect(deleteDoc).toHaveBeenCalledWith(postRefMock);
  });

  it('deberia manejar caso sin callback', async () => {
    const docID = 'tu-id-de-documento';
    const postRefMock = jest.fn();
    doc.mockReturnValueOnce(postRefMock);
    deleteDoc.mockReturnValueOnce(Promise.resolve()); // Simula una eliminación exitosa
    const consoleLogSpy = jest.spyOn(console, 'log');
    const result = await eliminarPost(docID, null);

    expect(deleteDoc).toHaveBeenCalledWith(postRefMock);
    expect(result).toBe('Post eliminado correctamente');
    // Limpia el mock después de la prueba
    consoleLogSpy.mockRestore();
  });

  it('debería manejar caso donde callback no es una función', async () => {
    // Definición de un ID de documento para la prueba
    const docID = 'tu-id-de-documento';
    // Se crea un espía (spy) en la consola para monitorizar las salidas de error
    const consoleErrorSpy = jest.spyOn(console, 'error');
    // Llama a la función eliminarPost con un argumento 'callback' que no es una función
    const result = await eliminarPost(docID, 'no-es-una-funcion');
    // Verifica que la función resultante lance un error con el mensaje adecuado
    expect(result).toThrowError('Error al eliminar el post: callback no es una función');
    // Verifica que se haya llamado a console.error con un objeto Error
    expect(consoleErrorSpy).toHaveBeenCalledWith('Error inesperado:', expect.any(Error));

    // Limpia el mock después de la prueba
    consoleErrorSpy.mockRestore();
  });
  // Spy se utiliza para espiar (o "espionar") sobre métodos o funciones existentes.
  // La idea principal es rastrear y observar el comportamiento de una función durante las
  // pruebas sin cambiar su implementación real.
  // spyOn: La función jest.spyOn se utiliza para crear un espía en un objeto existente y
  // rastrear las llamadas a un método específico en ese objeto.
  // Puedes usar esto en combinación con otras funciones Jest, como expect,
  // para realizar afirmaciones sobre cómo se usa esa función en tus pruebas.

  it('debería manejar caso donde deleteDoc lanza una excepción no manejada', async () => {
    const docID = 'tu-id-de-documento';
    const error = new Error('Excepción no manejada');

    // Simula una excepción no manejada al eliminar el documento
    deleteDoc.mockImplementationOnce(() => { throw error; });

    // Llama a la función eliminarPost y espera que lance la excepción no manejada
    await expect(eliminarPost(docID)).rejects.toThrowError('Excepción no manejada');
  });
  it('debería manejar caso donde callback no es una función en el bloque catch', async () => {
    const docID = 'tu-id-de-documento';
    const error = new Error('Error al eliminar el post');

    // Simula un error al eliminar el documento
    deleteDoc.mockImplementationOnce(() => Promise.reject(error));

    const result = await eliminarPost(docID, 'no-es-una-funcion');

    expect(result).toThrowError('Error al eliminar el post: callback no es una función');
  });
});
