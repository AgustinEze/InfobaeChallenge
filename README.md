# Prueba Técnica React Infobae

## Descripción
Este proyecto es una prueba técnica en React para Infobae, donde se consumen datos de la API de DummyAPI.

## API Utilizada
Se utilizó la documentación de [DummyAPI](https://dummyapi.io/docs) para obtener los datos necesarios.

## Características
- Se utilizaron **custom hooks** para realizar los fetchs de datos.
- Debido a que el **sign in** de DummyAPI no funciona, se utilizó la `app-id` que aparece en los headers cuando inspeccionamos la página en **Network**, en el API Explorer.
- **Visualización de comentarios:** Si se hace clic en un post, se muestran los comentarios asociados.
- **Búsqueda por tags:** Al escribir un **tag** en la barra de búsqueda, los posts se filtran por dicho tag.
- **Navegación entre posts:** Al hacer clic en un tag dentro de un post, se redirige a una vista con todos los posts que contienen dicho tag.

## URL para Testear
Se puede probar la aplicación en el siguiente enlace:
[https://infobae-challenge-coral.vercel.app/](https://infobae-challenge-coral.vercel.app/)


## Para realizar el challenge
Se utilizo google, chatgpt y algunas funciones que tenia hechas de proyectos anteriores (useFetch)
La intencion para el SignIn con Google era usar una libreria que lo integra con React
