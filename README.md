# Front End Challenge

## Objetivo
Utilizando la [API de Flicker](https://www.flickr.com/services/api/), contruir una aplicación en [React](https://reactjs.org/) que sea capaz mostrar las imágenes en un grid que use la pantalla completa.

## Instrucciones
Se debe crear un Fork de este repositorio y entregar los resultados por medio de un pull request.

El plazo de entrega es de 5 días, desde que se recibe la prueba. Se debe notificar por correo la finalización y entrega de esta.

## Requisitos
La aplicación debe contar con los siguientes elementos/condiciones:
* Se deben obtener las imágenes desde [este endpoint](https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=d81a384144084d2638d8ee136cc0398a&tags=lady&format=json&nojsoncallback=1&api_sig=37cf24e12588b9b312e1ef4a5a14a03c) ([tip](https://www.flickr.com/services/api/misc.urls.html))
* La página debe tener un grid que utilice la pantalla completa y debe ser responsive
* La página debe tener [scroll infinito](https://en.wiktionary.org/wiki/infinite_scroll)
* Al hacer click en una imagen, se debe deplegar un tooltip con la siguiente información:
    * Título
    * Descipción
    * Fecha de post
    * Fecha de actualización
    * Tags
    * Usuario que subió la imagen
* El proyecto debe compilarse con [Webpack](https://webpack.js.org/)

## Bonus

* Layout masonry

## En qué nos fijaremos

* Correcto uso de GIT
* Correcto uso de React
* Orden del código (clean code)
* Diseño responsive
