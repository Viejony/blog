---
layout: post
title: SDV-Map-Viewer
lang: es
lang-ref: sdv-map-viewer
summary: Aplicación Web de usa sola página (Single Page Aplication) para el control y visualización de múltiples robots móviles en modo remoto.
date: 2021-08-04 09:00 -0500
---

*SDV-Map-Viewer* es una aplicación Web de una sola página (*Single Web Aplication*) diseñada para el control y visualización de múltiples robots móviles (SDV) dentro del laboratorio LabFabEx.

## Robots SDVUNx
Los robots móviles *SDVUN* se encuentran en el *Laboratorio Fábrica Experimental* de la Universidad Nacional de Colombia. Son pequeños vehículos autónomos con capacidad de detectar y evadir obstáculos a medida que se desplazan dentro del laboratorio. Cada uno cuenta con un *Lidar*, esto es, un laser infrarojo que escanea el entorno y calcula la distancia a la que se encuentra un obstáculo. Los valores que genera el *Lidar* son procesados por el *Navigation Stack*, un conjunto de aplicaciones que corren en la plataforma *ROS*, para así obtener una pose aproximada del robot dentro de un mapa del laboratorio precargado. A continuación se muestra una colección de fotos de estos robots.

{% 
include image-carousel.html 
height="50" 
unit="%" 
duration="7"
id="1"
imgs="/blog/assets/images/20210804_0900_01.webp, /blog/assets/images/20210804_0900_02.webp, /blog/assets/images/20210804_0900_03.webp, /blog/assets/images/20210804_0900_04.webp, /blog/assets/images/20210804_0900_05.webp, /blog/assets/images/20210804_0900_06.webp, /blog/assets/images/20210804_0900_07.webp"
%}

## Formas de operar los robots
La operación de los robots *SDVUN* se puede llevar a cabo por medio de alguna de las siguientes alternativas:
- Terminal remoto y comandos directos a *ROS*
- *RViz*, desde un computador con *GNU/Linux* conectado a la red local
- *PRIA*, servicio instalado en el robot, que recibe comandos de posicionamiento desde una base de datos remota en tiempo real.

Para determinar las ventajas de una alternativa frente a la otra, se evaluan distintas características: algunas de ellas surgen por la necesidad de teleoperar los robots desde sitios distantes al laboratorio (dadas las restricciones de acceso, producto de la pandemia). En la siguiente lista se muestran los aspectos a evaluar:
- Operación remota: capacidad de la aplicación de enviar comandos de operación al robot, sin importar si el usuario se encuentra conectado a la red local del laboratorio.
- Feedback (retroalimentación): capacidad de la aplicación para mostrar los datos de navegación y datos de diagnóstico los robots móviles.
- Multi plataforma: capacidad de la aplicación de poderse ejecutar en distintos dispositivos con distintos sistemas operativos.
- Visualización de rutas: los robots generan rutas de forma dinámica. La aplicación debe ser capaz de mostrar estas rutas y actualizarlas rápidamente.

A continuación se muestra una comparación de estas alternativas:

| Carac.           | Terminal | RViz | PRIA |
|------------------|----------|------|------|
| Operación remota | NO       | NO   | SI   |
| Feedback         | NO       | SI   | NO   |
| Muti plataforma  | SI       | NO   | SI   |
| Rutas            | NO       | SI   | NO   |

Ninguna de las alternativas cumple con todos los aspectos valorados. Es por ello que se inició el desarrollo de la aplicación *SDV-Map-Viewer*.

## Aplicación Web: *sdv-map-viewer*
La aplicación web propuesta busca cumplir con los siguientes objetivos:
- Permitir la teleoperación de un número variable de robots móviles SDV
- Mostrar datos de navegación, diagnóstico y sensórica de los robots móviles.
- Debe ser mutiplataforma
- Mostrar las rutas que planean los robots móviles

Se propone una aplicación Web de una sola página (*Single Web Aplication*), dado que esta puede cumplir con los objetivos buscados y además:
- No requiere de instalación por parte del usuario.
- Basto material y documentación para el desarrollo de este tipo de soluciones.
- Cualquier navegador Web moderno que soporte Javascript puede ejecutarla.
- Disponibilidad 24/7.

Para el desarrollo de la aplicación se escoge la plataforma *Angular*, la cual usa el lenguaje *Typescript* y permite crear Aplicaciones Web de una sola página, con características como la modularidad y la reusabilidad de código. *Angular* tiene un respaldo sólido por parte de sus desarrolladores y usuarios: esto garantiza que el software sea duradero, actualizable y escalable.

{% include 
centered-image.html 
url="20210804_0900_08.webp" 
size="70" 
caption="Aspecto visual de la aplicación SDV-Map-Viewer." 
%}

La aplicación consta de un mapa del laboratorio y un conjunto de íconos que representan a cada robot SDVUNx con un color distintivo. En la figura inferior se observan los distintos íconos para un solo robot, con el siguiente significado:
1. Pose actual: la dirección de la punta de la flecha indica la orientación del robot.
2. Objetivo: al hacer click sobre el mapa, se muestra este elemento. Su orientación puede ser modificada rotando el mouse al hacer click sobre el mapa.
3. Objetivo actual: si el robot ya se encuentra en movimiento, este elemento indica el objetivo al que se está dirigiendo el robot.
4. Path: la ruta actual que el robot está siguiendo.
5. Etiqueta: para diferenciar los robots, se usa una etiqueta con el nombre del robot. 

{% include 
centered-image.html 
url="20210804_0900_09.webp" 
size="60" 
caption="Íconos usados en la aplicación." 
%}

La aplicación puede ser configurada a gusto del usuario: en la parte superior dereche se encuentra un botón para desplegar un panel. En dicho panel están las siguientes opciones:
- Paneles de información de cada robot *SDVUN*
- Panel de información de sesión
- Panel de Opciones de mapa:
    - Mostrar regilla
    - Mostrar etiquetas de mapa y de robots
    - Habilitar atajos de teclado
    - Tipo de mapa

{% include 
centered-image.html 
url="20210804_0900_11.webp" 
size="90" 
caption="Interfaz de la aplicación con el menú lateral desplegado." 
%}


## *sdv-nav-service (backend)*
El servicio de obtención de informacíon de los robots y envío de datos al cliente es llamado *sdv-nav-service*. Este es desarrollado en la plataforma *NodeJS*, usando tambien *Typescript* como lenguaje de programación. Este servicio se encarga se obtener la información de estado y datos de interés desde cada robot móvil, usando un puente entre *Typescript* y *ROS*. La conexión es automática, por lo que el operario de los robots solo debe encargarse de energizar y posicionar los *SDVUNx*.

*sdv-nav-service* entrega los datos de interés a los clientes que se conectan usando *sdv-map-viewer* usando un *WebSocket* para una transferencia de datos rápida y eficiente. Esta conexión puede reestablecerse automáticamente, lo que evita al usuario tener que recargar la página en caso de fallas en la conexión.

En la siguiente imagen se observa el esquema de comunicaciónes entre la aplicación Web *sdv-map-viewer* y el backend *sdv-nav-service*. Nótese que el servidor se encuentra en la misma red local de los robots *SDVUNx*, mientras el cliente puede estar en cualquier punto de internet.

{% include 
centered-image.html 
url="20210804_0900_10.webp" 
size="90" 
caption="Esquema de comunicación entre el cliente y el servidor." 
%}

## Video de ejemplo
En el siguiente video se muestra una prueba con tres robots móviles *SDV* dentro del *LabFabEx*. Con la interfáz es posible controlar, visualizar la posición y detener los 3 robots de forma independiente y simultanea.

{% include youtube-player.html id="PCjBufpue6U"%}
