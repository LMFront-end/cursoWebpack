## Webpack

* Es un empaquetador de archivos para aplicaciones JavaScript modernas, totalmente configurable y a diferencia de los Task Runners (como Grunt y Gulp) donde los procesos se gestionan de forma separada, en Webpack, se conoce el origen y todo se compila en un único archivo.

* Crea una gráfica de todas las dependencias de la aplicación. Tiene un archivo de configuración, denominado webpack.config.js, donde se define todo el proceso de construcción en un objeto JS.

## Webpack tiene 4 conceptos clave:

* Entry: Indica cuál es el punto(s) de entrada.
  
* Output: Indica cuál es el punto(s) de salida.
  
* Loaders: Realizan transformaciones en los archivos.
  
* Plugins: Realizan acciones en los archivos.

## pagina oficial de webpack

* https://webpack.js.org/

## pasos

* 1. npm init -y
* 2. instalar las dos dependencias de webpack (dependencias de desarrollo)
  -->npm i -D webpack webpack-cli

## crear una carpeta raiz

* src --> index.js


## para correr el archivo de webpack
 * En el package.json, configurar el script:
  --> "scripts": {
        "build": "webpack"
    },

## CLI
* npx webpack --help

# or

* npx webpack help

## instalar babel

--> npm i -D babel-loader @babel/core @babel/preset-env

## inyectar webpack en html

--> npm i -D html-loader html-webpack-plugin

## inyectar webpack en css

--> npm i -D mini-css-extract-plugin css-loader

## servidor de desarrollo webpack
--> npm i -D webpack-dev-server