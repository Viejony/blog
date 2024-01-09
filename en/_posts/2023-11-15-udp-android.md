---
title: UDP
layout: post
lang: en
lang-ref: udp-android
summary: Android app for sending UDP messages to other devices.
date: 2023-11-15 12:26 -0500
pic-header: 20231115_122900_01.webp
---

*UDP* is an app for the sending of UDP messages to other devices. The objective
behind the development of this application is allow to send UDP messages from 
an Android smartphone to other devices connected to the same network.


## Project motivation

This application born from the necessity to send operation commands to mobile 
robots that are connected to WiFi networks. Smartphones have a great capacity of
connection and communication and such thing makes them an ideal medium to send the
required commands. Android platform is the most used: for this reason the decision
to develop the app in this operative system was made. 

The robots which I have worked need to be operated manually: commands must arrive
the quickest way to its destiny. For this specific use case, the commands speed 
is more important than quality of service. In other words, is most important that
the command arrive quickly than that it arrive with changes or errors. Its 
responsibility of the robot to check if the command is correct and if it should 
be executed.


## Features

The initial app prototype accomplish the searched objective. App has a simple 
user interface with buttons like a gamepad. Every button send a different 
movement command to the robot.

{% include 
centered-image.html 
url="20231115_122900_02.webp" 
size="90" 
caption="Graphic user interface with buttons similar to a gamepad." 
show_shadow=true
%}

Configuration menu of gamepad allows to adjust the behavior of every button: 
command contents can be changed, the amount of times that command is sent and 
the frequency which such command is send.

{% include 
centered-image.html 
url="20231115_122900_03.webp" 
size="40" 
caption="Configuration menu of button 1 of Gamepad" 
show_shadow=true
%}

With the advance of the project, more interaction ways were added: one of them
is a terminal view that display the text that is send and received.

{% include 
centered-image.html 
url="20231115_122900_04.webp" 
size="40" 
caption="Terminal view mode" 
show_shadow=true
%}

Other added view is the *programmable buttons*. A vertical list allows to add 
buttons that can be configured in similar way as Gamepad View. User decide how 
many buttons are in the list, the name of the button, the command to be send, 
its format, the sent frequency of that command and the amount of times that such
command is send.

{% include 
centered-image.html 
url="20231115_122900_05.webp" 
size="40" 
caption="Programmable buttons view mode" 
show_shadow=true
%}

Finalmente, se agregó un vista con contenidos de ayuda. En esta se encuentran 
definiciones básicas de los conceptos usados en la comunicación con el 
protocolo *UDP*, los modos de visualización de la app, etc.

Finally, a view with help contents were added. In this view are basic definitions
of UDP protocol communications concepts, view modes, etc.

{% include 
centered-image.html 
url="20231115_122900_06.webp" 
size="40" 
caption="View of help contents of the app." 
show_shadow=true
%}


## Personalización

An aesthetic feature of the app is that it allows you to change the base color 
of the theme and activate dark mode independently of the system. This allows 
you to adjust the appearance of the app to the user's tastes and allows you to 
have the app running for long periods of time with low battery consumption with 
OLED type screens.

{% include 
centered-image.html 
url="20231115_122900_07.webp" 
size="40" 
caption="App theme configuration view" 
show_shadow=true
%}


## Usage sample

The app is commonly used to manually control mobile robots in the *ExFacLab* from
*National University of Colombia*. The next video shows a tele operation test
of the *SDV4* robot with this app in *gamepad* mode.

{% include youtube-player.html id="PILThj70-FU"%}

This other video contains a tele operation demo with a virtual robot from ROS
(TurtleSim). Shows in detail how the app is configured, how to check if the app
send messages to the target computer and a movement test.

{% include youtube-player.html id="obgqgiwL60c"%}


## Get the app
This app is free and can be downloaded from PlayStore.

<div style="position: relative;">
    <a 
    href='https://play.google.com/store/apps/details?id=com.jamstudios.udp_sender&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>
        <img 
        alt='Get it on Google Play' 
        src='https://play.google.com/intl/es_es/badges/static/images/badges/en_badge_web_generic.png'
        style="margin: auto; width: 40%;"/>
    </a>
</div>