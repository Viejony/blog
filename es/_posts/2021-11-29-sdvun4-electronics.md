---
layout: post
title: Electrónica del SDVUN4
lang: es
lang-ref: 20211129_172400
summary: Una vista rápida a la electrónica de uno de los robots móviles del LabFabEx, el SDVUN4.
date: 2021-11-29 17:24 -0500
---

Como parte de mi trabajo de grado, diseñé la electrónica del robot móvil *SDVUN4*, el cual es un robot móvil similar a los otros robots *SDVUNx* del laboratorio *LabFabEx* de la *Universidad Nacional de Colombia*. En la siguiente imagen se puede apreciar un *render* del diseño preliminar.

{% include 
centered-image.html 
url="20211129_172400_01.webp" 
size="90" 
caption="Concepto del SDVUN4" 
%}

La grán diferencia de este robot respecto a los anteriores es que cuenta con ruedas tipo Mecanum, como la que se ve en la siguiente imagen. Estas ruedas proporcionan al robot la capacidad de realizar movimientos en todas las direcciones del plano.

{% include 
centered-image.html 
url="20211129_172400_02.webp" 
size="90" 
caption="Rueda mecanum" 
%}

La forma como se llevan a cabo tales movimientos es la siguiente: cada rueda es capaz de generar dos tipos de impulso, uno perpendicular al eje de la rueda y otro paralelo a este mismo eje. Sumando de forma adecuada estos impulsos, se pueden anular o aumentar los impulsos totales, permitiendo una amplia gama de movimientos, como movimientos laterales, rotativos, diagonales o los clásicos adelante-atrás. En la siguiente figura, se observa un buen ejemplo de los tipos de movimento posibles con esta clase de robots.

{% include 
centered-image.html 
url="20211129_172400_11.svg" 
size="90" 
caption="Movimientos que puede realizar un robot con las ruedas mecanum."
%}

## Diagrama general
La siguiente imagen muestra el diagrama general del *SDVUN4*. Los bloques muestran de forma simplificada, los distintos PCBs, sensores o actuadores del robot.

{% include 
centered-image.html 
url="20211129_172400_03.webp" 
size="90" 
caption="Esquema de conexiones de los distintos circuitos del SDVUN4." 
%}

La mayor parte de los componentes se comunica al microcontrolador principal. Este a su vez se conecta via USB al computador a bordo, una tarjeta *Nvidia Jetson TX2*. Al computador a bordo también se conecta una cámara estereoscópica de la marca *ZED*.

Las baterías son monitorizadas y sus valores son utilizados por el robot para indicarle al usuario en que momento debe reemplazarlas por baterías cargadas y evitar daños por descarga excesiva, fenómeno al que son muy sensibles las baterías de litio.

## Soportes de la electrónica
Los diseños para las gavetas contenedoras de la electrónica de los robots *SDVUNx* presentan varias fallas, detectadas con el uso y el paso del tiempo:
- El material del que están hechas no es durable.
- Tienen un elevado costo de manufactura.
- No garantizan una verdadera accesibilidad a los componentes más demandados.

Por esta razón, se decidió replantear el diseño de estos soportes. El concepto obtenido es una caja de aluminio, aligerada pero resistente a las cargas que debe soportar. Los distintos componentes electrónicos se ordenan de tal forma que las baterías y el computador a bordo sean de fácil acceso, mientras los componentes con menor frecuencia de reparación o mantenimiento se alojan en la parte inferior, zona que es de menor accesibilidad.

En la siguiente figura se observa el diseño preliminar de la caja, con los distintos componentes montados.

{% include 
centered-image.html 
url="20211129_172400_04.webp" 
size="90" 
caption="Concepto de la caja de componentes electrónicos para el robot SDVUN4."
%}

## Ensamblaje final

En el siguiente album de imágenes se observa el montaje final de la caja de electrónica, con los distintos componentes ya montados. Se puede observar que algunas de las láminas son de material acrílico con un patrón hexagonal para reducir el peso que añaden a la estructura. Las tres baterías se conectan a un monitor de tensiones cada una, los cuales indican si las baterías se encuentran en buen estado. Estos monitores, al estar sometidos a las fuerzas que producen la conexión y la desconexión constante de las baterías, se montan directamente a la lámina de aluminio. El resto de componentes electrónicos se encuentra fijado a elementos plásticos no conductivos.

{% 
include image-carousel.html 
height="50" 
unit="%" 
duration="7"
id="1"
imgs="/blog/assets/images/20211129_172400_05.webp, /blog/assets/images/20211129_172400_06.webp, /blog/assets/images/20211129_172400_07.webp, /blog/assets/images/20211129_172400_08.webp, /blog/assets/images/20211129_172400_09.webp"
%}

La siguiente figura muestra la parte frontal del chasis del robot SDVUN4 con la caja de componentes electrónicos instalada en su interior. Además, se observan los conectores de los motores, los cuales son de facil desconexión: esto con el fin de facilitar el rápido demontaje de la caja en caso de necesitar llevar a cabo alguna tarea de mantenimiento. Tambíen se observa la cámara del robot, la cual usa un cable USB 3.0: dicho cable se conecta a la tarjeta *Jetson TX2*. Dado que este cable es de un grosor considerable, no puede doblarse demasiado, por lo que se deja más expuesto que cualquier otro cable. Los otros cables tienen las longitudes necesarias para conectar los distintos componentes sin que llegue a sobrar, permitiendo tener orden dentro de la caja.

{% include 
centered-image.html 
url="20211129_172400_10.webp" 
size="70" 
caption="Vista frontal de la caja ensamblada y montada en el chasis del SDVUN4."
%}
