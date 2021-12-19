---
layout: post
title: SDV-UN-Web-App
lang: en
lang-ref: sdv-un-web-app
summary: A simple Web Aplication based in Open Source Projects for control autonomous mobile robots.
date: 2021-08-02 15:00 -0500
---

A single web aplication used as GUI for SDV mobile robots in the *ExFacLab*.

The *Experimental Fabric Laboratory (ExFacLab)* is in the *National University of Colombia* and has with multiple machines and robots, that conforms different manufacturing cells: every cell contains different machines that makes an specific task, as prototyping or machining parts. The SDV robots (*Self Driving Vehicles*) are in charge of transporting parts between the different manufacturing cells of the laboratory. They are autonomous, because they can avoid obstacles and arrive to specific points in the laboratory without any supervision. Every SDV has a high precision, long-range *Lidar* among a on board computer *NUC* brand from *Intel*. The operative system is *Ubuntu 18.04* and the navigation software runs in *ROS* platform (*Robot Operative System*).

![SDV]({{site.baseurl}}/assets/images/20210802_150000_02.webp)

## Alternatives to operate the SDV robots

At the time to start the development of this project, there are multiple ways to put movement commands to the mobile robot. These are:

- Using *RViz*: An application that belongs to the official packages of *ROS*. Very complete, because allows to see all the information that the mobile robots generates, but highly dependant of *Ubuntu/Linux* distribution packages.
- Remote terminal: using the *SSH* protocol, we can send commands to the robot, but we can see simultaneously the current position or the destination. Also, is very difficult to use for beginner users.

Both ways to operate the SDV robots are complex and the users needs a previous preparation. For these reasons, the need to create a simpler solution arises, a solution with high availability and much simpler than the others.

## How works the web aplication
![App]({{site.baseurl}}/assets/images/20210802_150000_01.webp)

The developed web application has a map of the laboratory and contains multiple lateral panels that allows to:

- See the position values of a single *SDV* robot.
- Send a predefined position to the *SDV* robot.
- Send a position, different to the predefined positions.
- Use manual operation buttons.

Also, tha application includes multiple buttons for map image manipulation, as *Zoom In*, *Zoom Out* and image displacement.

When a *SDV* robot connects to the wireless network, the robot appears in the application as al color arrow over the map. By clicking ont the map, the new position is sended immediately to the robot. If a route to the objective exists, the robot begins to move. To add security to the robot operation, a emergency stop button is incorporated to the top bar.

Other added functions are:
- Help contents for troubleshooting
- Access control: only identified users can use the application

## Used software
This web application uses different open source tools:

- *roslibjs*: library written in *Javascript*, intended for communication between robots. Use *websockets* to send and receive data. Used in the client side.
- *nav2djs*: library written in *Javascript* used to draw the mobile robot maps from *ROS*. Used in the client side.
- *XAMPP*: software package with useful applications that can be used to mount a web server. The *mySQL* database is used for users and passwords management, the *PHP* server adds authentication characteristics and the *Apache* server is used as web hosting service.

This project also contains a *Vanilla* version, that removes the security features allowing a simple execution of the web application, needing only a simple *Apache* server or a service in *Nodejs* and *Express.js*. The source code is open and it's hosted in *Github*.

## Sample Video

The next video shows an usage sample with an *SDV* robot in the *ExFacLab*.

{% include youtube-player.html id="NwNL5vKip0I" %}

## Links
- [Robot Web Tools](http://robotwebtools.org/): A set of libraries to develop web applications.
- [Source Code on Github](https://github.com/Viejony/SDV-UN-Web-App)
