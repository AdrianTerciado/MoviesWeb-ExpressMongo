# Movie App Backend Express - Mongo

Este proyecto es la parte del backend de una aplicación web para ver información sobre películas. Está construido con Express y se encarga de manejar las peticiones del frontend y de interactuar con la base de datos MongoDB para guardar tus películas favoritas. 
Al ser un ejercicio didáctico, los endpoints son sencillos y van sobre http://localhost:3000/api/. 
- Una ruta post para guardar tus favoritos
- Una ruta get para obtenerlos
- Una routa delete para borrarlos

Es totalmente escalable, se podría añadir ese update así como modificar fácilmente las rutas si se añaden usuarios con Login, por ejemplo.

Aquí podemos ver las rutas creadas y el sistema de carpetas.

![Captura de pantalla 2024-05-14 062839](https://github.com/AdrianTerciado/MoviesWeb-ExpressMongo/assets/158854133/eaecd81e-b735-4146-add1-6c8e2fcd30bb)

La parte fundamental del proyecto es la base de datos, pues estamos creando una API REST para tener una persistencia de datos.
No es necesario que sea muy compleja por lo que yo he optado por una no relacional con MongoDB y la he desplegado en Atlas.

El funcionamiento esquematico es el siguiente:

![Captura de pantalla 2024-05-14 091348](https://github.com/AdrianTerciado/MoviesWeb-ExpressMongo/assets/158854133/74908169-ae18-407c-b713-20b3bbca5ca6)

Cuando desde el front se marca una pelicula como favorita, se envía una peticion POST al back y este a través de la lógica del controlador y el modelo creado con mongoose guarda esa elícula en la base de datos.

Al desclickar el botón de favorito, se elimina de la base (DELETE).

Y cuando solicitamos ver favorites desde el front, se hace GET al servidor y este trae esas peliculas desde la base de datos.

Forma parte de una aplicacion full stack MERN.

Tanto Cors como la base de datos están configuradas para recibir peticiones de cualquier IP.

## Tecnologías Utilizadas
- Node.js
- Express
- Mongoose
- Cors
- MongoDB 

## Instalación
Clona este repositorio en tu máquina local.
Navega hasta la carpeta del proyecto.
Ejecuta npm install para instalar todas las dependencias.
Configura las variables de entorno necesaria, necesitarás una base de datos MongoDB con sus credenciales para el fichero .env
Ejecuta npm start para iniciar el servidor.

## Contribuir
Si deseas contribuir a este proyecto, por favor sigue estos pasos:
Realiza un fork del proyecto.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commits (git commit -m 'Añade nueva funcionalidad').
Sube tus cambios a la rama (git push origin feature/nueva-funcionalidad).
Abre un Pull Request.
