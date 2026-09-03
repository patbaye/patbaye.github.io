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

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
  toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(800, 500, 20, 300);
    createPlatform(450, 600, 150, 50, "black");
    createPlatform(800, 600, 150, 50, "red");
   createPlatform(500, 1100, 150, 50);


    // TODO 3 - Create Collectables
   createCollectable("steve", 500, 500);
createCollectable("diamond", 700, 400);
createCollectable("steve", 1200, 700);


    
    // TODO 4 - Create Cannons
    createCannon("left", 400, 1000);
createCannon("right", 550, 2000);
createCannon("top", 450, 1500);


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
