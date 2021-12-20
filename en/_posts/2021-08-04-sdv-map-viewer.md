---
layout: post
title: SDV-Map-Viewer
lang: en
lang-ref: sdv-map-viewer
summary: Single page application for control and visualization of multiple mobile robots in remote mode.
date: 2021-08-04 09:00 -0500
---

*Sdv-Map-Viewer* is a single page application designed for control and visualization of multiple mobile robots in *ExFabLab*. This application was builded in *Angular*, a complete framework intended to make complex web applications that reuses the code in blocks called *components*.

## SDVUNx robots

The *SDVUN* mobile robots are in *ExFacLab (Experimental Factory Laboratory)* from the *National University of Colombia*. They are small autonomous vehicles with obstacle avoidance capabilities. Every one (there are three) has a *Lidar*, that is, a infrared laser that scans the environment and calculates the distance to any obstacle inside its range. Generated values are processed by the *Navigation Stack*, a set of applications that runs on *ROS* framework, and then obtains an approximated pose of the robot inside the laboratory. Next, an album will show you a collection of pictures of these robots.

{% 
include image-carousel.html 
height="50" 
unit="%" 
duration="7"
id="1"
imgs="/blog/assets/images/20210804_0900_01.webp, /blog/assets/images/20210804_0900_02.webp, /blog/assets/images/20210804_0900_03.webp, /blog/assets/images/20210804_0900_04.webp, /blog/assets/images/20210804_0900_05.webp, /blog/assets/images/20210804_0900_06.webp, /blog/assets/images/20210804_0900_07.webp"
%}

## Ways to operate the robots

To operate any of the *SDVUN* mobile robots, there are many alternatives:

- Remote terminal and direct commands to *ROS*
- *RViz*, from a local PC (connected to same network of the robots) with *GNU/Linux* and *ROS* installed ond configured
- *PRIA*, a microservice, installed in the robot. Receives positional commands from a real time database *(Firebase)*.

To determinate the advantages and disadvantages of an alternative, different characteristics are evaluated: some of these characteristics arise from the need to do remote task (due to the physical access restrictions, product of the pandemic). The next list shows these evaluation aspects:

- Remote operation: capability of the application to send operation commands to the robot, no matter if user is connected to laboratory network.
- Feedback: capability of the application to show navigation data and diagnostics data.
- Multi platform: application feature that allows it to be used in any operative system
- Route visualization: mobile robots generates routes when receive a positional command. Application should be capable of show these routes and update them quickly.

Now, the next table shows a comparative of every operation alternative:

| Charac.          | Terminal | RViz | PRIA |
|------------------|----------|------|------|
| Remote operation | NO       | NO   | YES  |
| Feedback         | NO       | YES  | NO   |
| Multi platform   | YES      | NO   | YES  |
| Show routes      | NO       | YES  | NO   |

None of the showed alternatives meet all the evaluated aspects. For this reason, the development of *SDV-Map-Viewer* was started.

## Web application: *sdv-map-viewer*

The proposed solution seeks to fulfill the next objectives:
- Allow tele operation of a variable number of mobile robots at the same time.
- Show navigation data, diagnostics data and sensor data from mobile robots.
- Must be multi platform
- Show planned routes by mobile robots

A single web application is proposed because this solution can accomplish the objectives and also:
- Don't requirers local installation.
- Don't requires to reload the page when doing a task.
- Very large documentation, tutorials and examples of how to do this applications.
- Any modern web navigator with Javascript support can run this application.
- 24/7 availability.

To develop this application, the *Angular* platform is selected. This platform uses *Typescript* an allows to build *Single Web Applications* with some useful features like code reusability and modularity. *Angular* has a long support of its developers and users: this guarantees that developed software will be durable, scalable and upgradable.

{% include 
centered-image.html 
url="20210804_0900_08.webp" 
size="70" 
caption="Visual appearance of SDV-Map-Viewer." 
%}

The application consists of a laboratory map and a set of icons that represents every *SDVUN* mobile robot with a unique color. The picture below shows the different icons for a single mobile robot with these meanings:
1. Current pose: the tip of the arrow shows the robot orientation.
2. Objective: when a click on the map occurs, this icon appears. Its orientation can be modified rotating the mouse cursor over the clicked point.
3. Current objective: if the mobile robot is currently moving, this icon shows that objective.
4. Path: current route that the mobile robot is following.
5. Label: this text shows the name of the robot and its useful to differentiate every one.

{% include 
centered-image.html 
url="20210804_0900_09.webp" 
size="60" 
caption="Icons used in SDV-Map-Viewer web application." 
%}

The application can be configured with user preferences: in the top-right side a button is placed and can be used to unfold the lateral panel with more functions. This panel contains the next options:
- Information panel of every mobile robot.
- Session information.
- Map options panel
    - Show grid
    - Show map labels
    - Show robot labels
    - Enable keyboard shortcuts
    - Set map type

{% include 
centered-image.html 
url="20210804_0900_11.webp" 
size="90" 
caption="GUI with side menu unfolded." 
%}

## *sdv-nav-service (backend)*

The service for obtaining data from robots and the sending of feedback data to the client is called *sdv-nav-service*. This service is developed in *Nodejs* runtime, also using *Typescript* language. *sdv-nav-service* connects to every robot automatically, using a bridge between *ROS* and *Typescript* and the user only needs to energize the robots and run *ROS* scripts.

*sdv-nav-service* deliver interest data to the clients that uses  *Sdv-Map-Viewer*, using a *WebSocket* connection for transferring data quickly and efficiently. This connection can be reestablished automatically, avoiding that the user reloads the page if a communication issue occurs.

The picture below shows the communication scheme between the Web Application *Sdv-Map-Viewer* and the *sdv-nav-service* backend. Note that the server is in the same network of the robots, meanwhile the client can be in any point of internet.

{% include 
centered-image.html 
url="20210804_0900_10.webp" 
size="90" 
caption="Communication scheme between client and server." 
%}

## Sample video

The next video shows a test with three *SDVUN* mobile robots inside the *ExFacLab*. With the *GUI* its possible to control, view and stop every mobile robot in a independent and way.

{% include youtube-player.html id="PCjBufpue6U"%}