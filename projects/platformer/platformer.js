$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    //create walls
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the loops below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can give you a better idea of where to create new platforms
     * Comment the lines out to remove the grid
     */

    // for (let i = 100; i < canvas.width; i += 100) {
    //   createPlatform(i, canvas.height, -1, -canvas.height);
    // }
    // for (let i = 100; i < canvas.height; i += 100) {
    //   createPlatform(canvas.width, i, -canvas.width, -1);
    // }

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////

    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    createPlatform(200, 605, 130, 20);
    createPlatform(100, 305, 130, 20);
    createPlatform(150, 450, 130, 20);
    createPlatform(450, 650, 130, 20);
    createPlatform(360, 490, 130, 20);
    createPlatform(600, 550, 130, 20);
    createPlatform(800, 650, 130, 20);
    createPlatform(350, 322, 130, 20);
    createPlatform(450, 188, 130, 20);
    createPlatform(40, 708, 130, 20);
    createPlatform(1000, 708, 130, 20);
    createPlatform(1200, 508, 130, 20);
    createPlatform(1000, 590, 130, 20);
    createPlatform(1250, 400, 130, 20);
    createPlatform(1000, 305, 130, 20);
    createPlatform(900, 505, 130, 20);
    createPlatform(758, 335, 130, 20);
    createPlatform(858, 135, 130, 20);
    createPlatform(658, 185, 130, 20);
    createPlatform(558, 285, 130, 20);
    createPlatform(1008, 100, 130, 20);
    createPlatform(1308, 150, 130, 20);
    createPlatform(1118, 190, 130, 20);
    createPlatform(508, 90, 130, 20);

    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("database", 600, 460, 2, 0.5);
    createCollectable("database", 1000, 270, 2, 0.5);
    createCollectable("database", 140, 670, 2, 0.5);
    createCollectable("database", 1200, 400, 2, 0.5);
    createCollectable("database", 360, 380, 2, 0.5);
    createCollectable("database", 1008, 60, 2, 0.5);

    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)

    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }
  createCannon("left", 400, 1200); 
  createCannon("bottom", 500, 1500); 
  createCannon("bottom", 1200, 1200);
  createCannon("top", 900, 1500);
  createCannon("right", 400, 1200); 







  registerSetup(setup);
});
