# project-universe
Create a scrollable 3D dimension that showcases your different projects, in the form of planets.

Disclaimer: This effect is better suited in desktop/laptop viewports. May need a little bit of tweaking when implementing in mobile.

# Demo
Check the demo: https://project-universe.gioreyes.me

Check my website: https://gioreyes.me/

# Prerequisites
Download [jQuery](https://jquery.com/download/).

# How to update
**Project Array (projArr):** Load your project images here. All images must be the same image size (recommended).

**Project Names (projName):** Input the names of the projects in order of the images in the "projArr" array. The number of project names in this array must match the length of the "projArr" array.

**Project Links (projLink):** This is the array where you put the links of each of your projects. The number of project links in this array must match the length of the "projArr" array.

**Universe Background Color (bgColor):** Set your preferred "universe" background color.

**Universe Background Image (bgImage):** Set your preferred "universe" background image. Must uncomment setting of background-image located in the "init" function.

**Scroll Speed (scrollSpd):** Determines how fast the visitor can travel through the projects. Increase to go faster, decrease to go slower.

**Current Position (currPos):** Determines the visitor's current position in the "universe". This is the basis if the visitor can go further or nearer, based on the values set for min and max.

**Project Distance (distance):** Determines the distance between projects. Increase the value to expand the distance between projects, decrease the value to compress the projects.

**Minimum Distance (min):** Determines the nearness limit. This is the value that "currPos" is based, and the visitor starts in this limit when the page loads.

**Maximum Distance (max):** Determines the limit on how far the visitor can traverse in the "universe".

**Project Planet Positioning (planetPos):** Two dimensional array; contains the top and left positioning of each planet projects. The syntax is "top","left". The number of project positions in this array must match the length of the "projArr" array.
