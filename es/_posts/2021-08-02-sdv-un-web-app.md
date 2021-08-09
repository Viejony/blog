---
layout: post
title: SDV-UN-Web-App
lang: es
lang-ref: sdv-un-web-app
summary: Aplicación Web sencilla, basada en proyectos Open Source para el control de robots móbiles autónomos.
date: 2021-08-02 15:00 -0500
video_01: NwNL5vKip0I
video_02: e3IaDfzTlMg
---

Una aplicación Web sencilla, diseñada para usarse como GUI (interfaz gráfica de usuario) para el control de los robots móviles SDV del laboratorio *LabFabEx*.

El laboratorio *LabFabEx* se encuentra en la Universidad Nacional de Colombia, sede Bogotá y cuenta con múltiples máquinas y robots, los cuales conforman distintas celdas de manufactura: cada celda concentra diferentes máquinas que llevan a cabo una tarea específica, como prototipado o mecanizado de piezas. Los robots SDV (Self Driving Vehicles*, *Vehículos autónomos*) son los encargados de transportar piezas entre las distintas celdas del laboratorio. Son autónomos, ya que pueden evadir obstáculos y llegar a puntos específicos del laboratorio sin supervisión. Llevan un sensor *Lidar* de alta precisión y alcance junto a un computador a bordo de la marca *NUC* del fabricante *Intel*. El sistema operativo de los robots es *Ubuntu 18.04* y el software de navegación de los robots corre en la plataforma *ROS* (*Robot Operative System*).

![SDV]({{site.baseurl}}/assets/images/20210802_150000_02.webp)

## Formas de operar  los robots

Al momento de desarrollar el proyecto, las formas de ingresar comandos de movimiento a los robots *SDV* eran las siguientes:

- Usando RViz: Una aplicación perteneciente a los paquetes oficiales de *ROS*. Muy completa, ya que permite visualizar toda la información que genera y procesa el robot (*topics*), pero altamente dependiente de la plataforma *Linux*.
- Terminal remoto: por medio del protocolo *SSH* se le pueden enviar comandos al robot, con el problema de no poder visualizar simultáneamente la posición actual del robot o el destino. Además, es difícil de usar por parte de los usuarios novatos.

Ambas formas de operar a los robots son complejas de usar y requieren de una preparación previa. Por estas razones surge la necesidad de crear una interfaz de usuario independiente de la plataforma, con alta disponibilidad y fácil de usar.

## Funcionamiento de la aplicación web
![App]({{site.baseurl}}/assets/images/20210802_150000_01.webp)

La aplicación web creada consta de un mapa del laboratorio y paneles laterales que permiten:

- Observar los valores de posición que reporta el robot *SDV*.
- Enviar al robot una posición predefinida dentro del laboratorio
- Enviar una posición distinta a las predefinidas
- Botones de navegación manual

Además, se incluyen botones para la manipulación de la imagen del mapa, como *Zoom In*, *Zoom Out*, y botones de desplazamiento.

Cuando un robot SDV se conecta a la red, aparece como en la aplicación como una flecha de color sobre el mapa. Al hacer click en el mapa, la nueva posición se envía de forma inmediata el robot. Si existe una ruta que permita al robot llegar a tal punto, el robot empieza a moverse. Para añadir seguridad a la operación, se incorporó en la barra superior un botón de parada de emergencia, la cual detiene al robot de forma inmediata.

Otras funciones añadidas a la aplicación web son:

- Contenidos de ayuda para la resolución de problemas
- Control de acceso: solo usuarios identificados pueden acceder a la aplicación

## Software utilizado

La aplicación utiliza distintas herramientas de software libre:

- *roslibjs*: biblioteca escrita en *Javascript* para la comunicación con los robots. Usa *websockets* para el envío y lectura de datos. Utilizado en el lado del cliente.
- *nav2djs*: biblioteca escrita en *Javascript* para el trazado de mapas de robots móviles que funcionan con *ROS*. Utilizado en el lado del cliente.
- *XAMMP*: Paquete de software con aplicaciones útiles para el montaje de servidores web. Se utiliza la base de datos *mySQL* para la gestión de usuarios, el servidor *PHP* para añadir características de seguridad y *Apache* para el servicio web.

El proyecto también tiene una versión *vanilla*, la cual remueve las características de seguridad e identificación de usuarios, permitiendo ejecutar la aplicación desde un sencillo servicio de *Apache* o con un servicio montado en *Nodejs* y *Expres.js*. El código fuente es de acceso libre y se encuentra hospedado en *Github*.

## Ejemplo de uso

En el siguiente video se observa un ejemplo de uso con los robots *SDV* dentro del laboratorio *LabFabEx*.

{% include youtube-player.html id="NwNL5vKip0I" %}


## Enlaces
- [Robot Web Tools](http://robotwebtools.org/): Colección de paquetes de software pensados para la construcción de aplicaciones para robots.
- [Enlace al código fuente](https://github.com/Viejony/SDV-UN-Web-App)

