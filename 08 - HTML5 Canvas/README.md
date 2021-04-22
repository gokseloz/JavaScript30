## HTML5 Canvas
- This course contains mainly Canvas, HSL color, mouse events.

## Why did I work on this project?
- In order to improve my JS skills

## What did I learn from this project?
- Creating basic Canvas
    - creatin canvas element in HTML :  ```<canvas id="draw" width="800" height="800"></canvas> ```
    - getting the canvas in JS : ``` const canvas = document.querySelector("#draw") ```
    - creating painting area : ``` const ctx = canvas.getContext("2d") ```
- Some Canvas properties;
    - strokeStyle: sets the color
    - lineJoin: determines what shape it will be whe two lines meet
    - lineCap: sets the shape of the line
    - lineWidth: sets the width of the line
- Some Canvas Paths;
    - beginPath(): creates a new path, therefore lines act independently           
    - moveTo(): moves the path to the specified point                               
    - lineTo(): creates a line to specified point from the last specified point     
    - stroke(): this method actually draws the path which is defined before with moveTo() and lineTo()
    - beginPath(), moveTo() and lineTo() => starting up the line
    - stroke() => draw the line

|     |     |
| --- | --- |
| beginPath(), moveTo() and lineTo() | starting up the line  |
| stroke() | draw the line  |



## How did I do this?
- Vanilla JavaScript
