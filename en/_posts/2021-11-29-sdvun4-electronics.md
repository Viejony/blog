---
layout: post
title: SDVUN4 electronics
lang: en
lang-ref: 20211129_172400
summary: A fast review of electronics of an mobile robot from ExFacLab, SDVUN4.
date: 2021-11-29 17:24 -0500
---

As a part of my undergraduate work, I design the electronics of the *SDVUN4* mobile robot, which is very similar to the other *SDVUN* robot series from the *ExFacLab* of *National University of Colombia*. The next picture shows a render of the preliminary design of the robot.

{% include 
centered-image.html 
url="20211129_172400_01.webp" 
size="90" 
caption="SDVUN4 concept." 
%}

The main difference between this new model and the previous designs is that this robot has mecanum wheels, like showed wheels in the picture below. These wheels gives to the robot the capability to make movements in all directions over the ground.

{% include 
centered-image.html 
url="20211129_172400_02.webp" 
size="90" 
caption="Mecanum Wheel." 
%}

These movements can be happen in this way: every wheel can generate two type of impulse in the chassis, one of them is perpendicular to the wheel axis and the other is parallel to the same axis. Adding and subtracting these *impulses* a total impulse appears and generates the movement with a high range of possibilities like lateral movements, rotational movements, diagonal movements and the classical forward-backward movements. Next picture shows a good example of many types of movement using these kind of mobile robots.

{% include 
centered-image.html 
url="20211129_172400_11.svg" 
size="90" 
caption="Movements that a Mecanum wheeled robot can do."
%}

## General scheme

The image below shows a general scheme of *SDVUN4* electronics. Every block shows in a simplified form the different PCBs, circuits, sensors and actuators fo the robot.

{% include 
centered-image.html 
url="20211129_172400_03.webp" 
size="90" 
caption="Connections scheme of all the SDVUN4 circuits." 
%}

Most components communicates with the main microcontroller. At the same time, main microcontroller is connected with an on-board computer, a *Nividia Jetson TX2*, via *USB*. To the on-board computer a branded *ZED-mini* stereoscopic camera is connected via *USB* port.

Batteries are monitored and its voltage values are used by the robot to indicate to the user in what moment the batteries should be replaced and avoid permanent damage because a excessive discharge, phenomenon that mainly affects lithium based batteries.

## Electronic Supports

Previous drawers design for *SDVUN* mobile robots has some failures, detected by the robots usage and the passage of time:
- Drawers material it's not durable
- Drawers has a high manufacturing cost
- It's design don't guarantees a truly accessibility to most required electronic components.

For these reasons original design was revised. Obtained concept is a aluminum box, lightened but load resistant. The different electronic components are placed in such way that most used components are in the upper side of the box and less used components are in lower place, with a minor accessibility level.

Next picture shows the state of the art of the box, with mounted electronic components.

{% include 
centered-image.html 
url="20211129_172400_04.webp" 
size="90" 
caption="Electronics box concept for the SDVUN4 mobile robot."
%}

## Final Assembly.

The carousel below shows a set of the final assembly of the electronics box with mounted components. It can be seen that some sheets are made with acrylic material with a hexagonal hole pattern used to reduce the added weight. The three batteries are connected to a voltage monitor every one: these monitors indicates if batteries has a good state. Battery monitors are subjected to fatigue forces because connection and disconnection tasks and for this reason they are mounted directly to the aluminum sheet. All the other components are fixed to not conductive plastic elements.

{% 
include image-carousel.html 
height="50" 
unit="%" 
duration="7"
id="1"
imgs="/blog/assets/images/20211129_172400_05.webp, /blog/assets/images/20211129_172400_06.webp, /blog/assets/images/20211129_172400_07.webp, /blog/assets/images/20211129_172400_08.webp, /blog/assets/images/20211129_172400_09.webp"
%}

The nex picture shows the frontal side of the *SDVUN* robot chassis with electronic box mounted inside. Also, it can be seen the motor connectors which has a quick connection method: this allows to the user to unmount quickly the electronic box if some reparation it's needed. The *ZED Mini* camera can be seen mounted in the upper frame: this camera uses a *USB 3.0* cable which it´s less flexible than a regular cable. For this reason, this cable is more exposed than the others. The rest of the cables has a customized size that guarantees order inside the box.


{% include 
centered-image.html 
url="20211129_172400_10.webp" 
size="70" 
caption="Front view of the assembled electronics box, mounted on the SDVUN4 chassis."
%}