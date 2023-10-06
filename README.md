# Colective Is-Cool (Red Social)

## Índice

## 1. Preámbulo

Instagram, Snapchat, Twitter, Facebook, Twitch, Linkedin, etc. Las redes sociales han invadido nuestras vidas. Las amamos u odiamos, y muchos no podemos vivir sin ellas.

¿Porqué son tan atractivas? Bueno, son una combinación de varios ingredientes que responden a algunas de las necesidades psicolóogicas más básicas: Ser entretenidos, ser inspirados, pertenecer a un grupo o sociedad,  y satisfacer nuestra curiosidad.

Está comprobado, por ejemplo, que los likes de nuestros amigos disparan estimulos de placer en nuestro cerebro, conocidos como "neuro recompensas", que funcionan como pequeñas dosis de los mismos químicos que liberamos cuando sentimos que somos queridos o apreciados. Para nuestro cerebro, un like, es aceptación social inmediata.... lo que probablemente nos llevará a publicar mas contenido similar.   

Como sabe cualquier influencer moderno, los mejores contenidos van a ser aquellos que planteen cosas que diviertan, inspiren, eduquen o informen a sus audiencias sobre los temas que a estas les sean mas interesantes. 

Es por esto que como programadoras nos preguntamos: ¿Que red social falta? En instagram están los fotógrafos, en pinterest los artistas plásticos, en Twitter (ahora "X") están los periodistas.... ¿Quienes pueden necesitar una red social para compartir ideas y proyectos que los lleven a ser mejores profesionales, a inspirarse e inspirar a otros? La respuesta fue obvia ¡Los docentes! Los que trabajan en el aula, con niños, y que constantemente están buscando nuevas ideas que aplicar.

## 2. Resumen del proyecto

"Colective Is-cool" es una red social para profesores en donde se comparten recursos didácticos para la aplicación del arte y la tecnología en las aulas escolares. (Pensando en el marco de la educación STEM)

Está dirigida a:  

* Arte educadores, mediadores de artes, guias educativos, pedagogos, pscicólogos, profesores de educación formal e informal

* Especialistas en tecnologías aplicadas a la educación o aula que puedan diseñar materiales de mediación los cuales puedan ser implementados en el aula.

El proyecto busca que sus usuari@s puedan:

* Tener una comunicación cercana con especialistas y colegas relacionados en el ámbito del arte educacion y tecnologia.

* Poder compartir ideas entre colegas para la implementación, evaluación y creación de proyectos multidisciplinarios en sus aulas.

### Diseño de producto. 

* "Colective Is-Cool" es una [Single-page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
[_responsive_](https://curriculum.laboratoria.la/es/topics/css/02-responsive) (con más de una vista / página)

* Esté desarrollada de tal forma que responde a las necesidades de responsividad a distintas vistas, dependiendo de si el o la usuari@ accede a la red desde su computadora, tablet o móvil.   

Tamaños disponibles: 

   * Laptop o Pc:  (min-width: 1024px)
   * Tablet : (min-width: 1024px)
   * Mobile: (min-width : 768px, 360px)

* Posee 7 pantallas en total: 3 principales (login, preferencias, y timeline), y 4 auxiliares (registro de nuevo usuario, error y recuperar contraseña). 

  Para su diseño escogimos una paleta de colores azules con acentos en amarillo, que busca generar tranquilidad y confianza en los usuarios.
  
  ![paleta-de-colores-azules](src/img/cvetovaya-palitra-2932.png)

   Siendo una red artistica era probable que los usuarios usaran colores muy variados en sus post -obviamente, en versiones futuras de la interfaz - y por ello, escogimos un diseño plano y sencillo que no compitiera en colores o formas con esas futuras publicaciones. 

* Para manejar la data tanto de los usuarios como de los posts se utilizó Firebase, un servicio de base de datos y autenticación externo, gratuito y propiedad de Google. 

* Para comprobar, que nuestra aplicación funciona correctamente, se aplicaron una serie de pruebas unitarias con base en el entorno de Jest. 

## Historias de usuario (Vistas y funcionalidades)

![vistas de la app](src/img/visuals.jpg)

* _Login_ con Firebase:
  -  Creación de cuenta de acceso y autenticación con cuenta de correo y contraseña, y también con una cuenta de Google.

  * Validaciones:
    - Solamente se permite el acceso a usuarios con cuentas válidas.
    - No pueden haber usuarios repetidos.
    - La cuenta de usuario debe ser un correo electrónico válido.
    - Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
    
   * Comportamiento:
    - Al enviarse el formulario de registro o inicio de sesión, debe validarse.
    - Si hay errores, se deben mostrar mensajes descriptivos para ayudar al usuario a corregirlos.

* Muro/timeline
  * Validaciones:
    - Al publicar, se debe validar que exista contenido en el _input_.
  * Comportamiento:
    - Al recargar la aplicación, se debe verificar si el usuario está _logueado_
    antes de mostrar contenido.
    - Poder publicar un _post_.
    - Poder dar y quitar _like_ a una publicación. Máximo uno por usuario.
    -Llevar un conteo de los _likes_.
    - Poder eliminar un post específico.
    - Pedir confirmación antes de eliminar un _post_.
    - Al dar _click_ para editar un _post_, debe cambiar el texto por un _input_
    que permita editar el texto y luego guardar los cambios.
    - Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la
    información editada.
    - Al recargar la página debo de poder ver los textos editados.

  * Creación de cuenta de usuario e inicio de sesión

## Testeo con usuarios UX.

Aqui los resultados de gente probando la app. Y sus opiniones. 


## Boiler plate y tecnologías utilizadas.

Este proyecto es el resultado de las practicas profesionales de tres nuevas programadoras FrontEnd, formadas en el Bootcamp regional de Laboratoria:    Ketzali Arreola (México) , Saharai Rodríguez (México) y Alexandra Ron (Chile). 

Se ejecutó en un total de 6 sprints de una semana cada uno. Totalmente en vanilla Javascript (ES6+), HTML y CSS. No nos estuvo permitido el uso de frameworks o librerias, de ningún tipo.

## Resultado de los test Jest.

Se nos exigía que los tests unitarios debían cubrir un mínimo del 70% de _statements_, _functions_, _lines_, y _branches_.
