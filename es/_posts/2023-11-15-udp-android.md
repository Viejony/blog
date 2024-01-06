---
title: UDP
layout: post
lang: es
lang-ref: udp-android
summary: Aplicación Android para el envío de mensajes UDP a otros dispositivos.
date: 2023-11-15 12:26 -0500
pic-header: 20231115_122900_01.webp
---

*UDP* es una aplicación para el envío de mensajes UDP a otros dispositivos. El 
objetivo detrás del desarrollo de esta aplicación es poder enviar mensajes de 
tipo UDP desde un celular Android a otros dispositivos conectados a la misma
red local.


## Motivación del proyecto

La aplicación nace de la necesidad de enviar comandos de operación a robots 
móviles que se conectan a redes WiFI. Los celulares cuentan con una gran 
capacidad de conexión y comunicación, lo que los hace ideales como medio para 
enviar estos comandos. La plataforma Android es la más utilizada, por lo que se
tomó la decisión de desarrollar la aplicación para este sistema operativo.

Los robots con los que he trabajado necesitan ser operados manualmente: los comandos
deben llegar lo más rápido posible a su destino. Para este caso de uso específico, 
la velocidad de los comandos es más importante que la calidad de servicio. En 
otras palabras, es más importante que el comando llegue rápido a que llegue con
cambios o errores. Es responsabilidad del robot determinar si el comando que le 
llega es correcto y si debe ejecutarse.


## Características

El prototipo inicial de la aplicación cumplía adecuadamente el 
objetivo buscado. La app contaba con una sencilla interfaz de usuario con botones 
similares a un Gamepad. Cada botón envía un comando de movimiento distinto al 
robot.

{% include 
centered-image.html 
url="20231115_122900_02.webp" 
size="90" 
caption="Interfáz con botones tipo Gamepad" 
%}

El menú de configuración del gamepad permite ajustar el comportamiento de 
cada botón: se puede cambiar el comando, la cantidad de veces que se envía y la
frecuencia con la que se envía.

{% include 
centered-image.html 
url="20231115_122900_03.webp" 
size="40" 
caption="Menu de configuración del botón 1 del Gamepad" 
%}

Con el avance del desarrollo de la app, se agregaron más formas de interacción: 
se agregó una vista tipo terminal en la se envía y se recibe texto.

{% include 
centered-image.html 
url="20231115_122900_04.webp" 
size="40" 
caption="Vista del modo terminal" 
%}

Otra vista agregada es la de *botones programables*. Una lista vertical permite
agregar botones que pueden ser configurados de forma similar a la de un gamepad.
El usuario decide cuantos botones hay en la lista, el nombre del botón, el 
comando, su formato, la frecuencia con la que se envía el comando y la cantidad 
de veces que se envía dicho comando.

{% include 
centered-image.html 
url="20231115_122900_05.webp" 
size="40" 
caption="Vista del modo Botones programables" 
%}

Finalmente, se agregó un vista con contenidos de ayuda. En esta se encuentran 
definiciones básicas de los conceptos usados en la comunicación con el 
protocolo *UDP*, los modos de visualización de la app, etc.

{% include 
centered-image.html 
url="20231115_122900_06.webp" 
size="40" 
caption="Vista de los contenidos de ayuda de la app." 
%}


## Personalización

Una característica estética de la app es que permite cambiar el color base del 
tema y activar el modo oscuro de forma independiente a la del sistema. Esto 
permite ajustar el aspecto de la app a los gustos del usuario y permite tener
la app ejecutándose por largos periodos de tiempo con un bajo consumo de batería
con pantallas tipo OLED.

{% include 
centered-image.html 
url="20231115_122900_07.webp" 
size="40" 
caption="Vista de configuración del tema de la app." 
%}


## Ejemplo de uso

La aplicación se usá habitualmente para el control manual de robots móviles
en el laboratorio *LabFabEx* en la *Universidad Nacional de Colombia*. En el 
siguiente video puede observarse una prueba de teleoperación manual del robot 
*SDV4* con esta app y el modo *gamepad.*

{% include youtube-player.html id="cjlaIxf0qbI"%}


## Consigue la app
Esta aplicación es gratuita y puede descargarse desde la PlayStore.

<div style="position: relative;">
    <a href='https://play.google.com/store/apps/details?id=com.jamstudios.udp_sender&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
        <img 
        alt='Disponible en Google Play' 
        src='https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png'
        style="margin: auto; width: 40%;"
        />
    </a>
</div>