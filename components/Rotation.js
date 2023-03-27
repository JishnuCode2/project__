//Terrain Rotation
AFRAME.registerComponent("terrain-movement-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
    speedOfMovement: {type:"number", default: 0}
  },
  init: function () {
    window.addEventListener("keydown", (e) => {
      var controlsEl = document.querySelector("#controls");
      controlsEl.setAttribute("visible", false)
      var mapPositionZ = this.el.getAttribute("position").z
  

      var playerEl =document.querySelector("#diver_model")
      var playerRot = playerEl.getAttribute("rotation")
      var playerPos = playerEl.getAttribute("position")
      if(playerEl.getAttribute("visible")){
      if (e.key === "ArrowLeft") {
        if (this.data.speedOfRotation < 0.08) {
          this.data.speedOfRotation += 0.08;

          if (playerRot.y !=200 && playerRot.y != 160){
            playerRot.y = 200;
            console.log(playerPos, playerRot)
          }else if(playerRot.y == 200 || playerRot.y == 160){
            playerRot.y = 180;
          }

            playerEl.setAttribute("rotation", playerRot);
            playerEl.setAttribute("position",playerPos)  
        }
      }
      if (e.key === "ArrowRight") {
        if (this.data.speedOfRotation != -0.08) {
          this.data.speedOfRotation -= 0.08;
          if(playerRot.y != 160 && playerRot.y != 200){
           playerRot.y = 160;

          }
          else if(playerRot.y == 200 || playerRot.y == 160){
            playerRot.y = 180;
          }
            playerEl.setAttribute("rotation", playerRot);
            playerEl.setAttribute("position",playerPos)  
        }
      }
      if (e.key === "ArrowUp" && mapPositionZ <= (-4)){
        if (this.data.speedOfMovement < 0.05) {
          this.data.speedOfMovement += 0.04;
        }
      }
      if ((e.key === "ArrowDown") && (mapPositionZ >= (-23))){
        if (this.data.speedOfMovement > -0.05) {
          this.data.speedOfMovement -= 0.04;
        }   
      }
    }
    });
  },
  tick: function () {
    var mapRotation = this.el.getAttribute("rotation");
    var mapPosition = this.el.getAttribute("position")

    
    if (mapPosition.z <= 0 && mapPosition.z >= (-23)){
      mapPosition.z += this.data.speedOfMovement
    }else if(mapPosition.z >= (-4)){
      mapPosition.z = (-4.01)
    }else{
      mapPosition.z = (-22.99)   
    }
 
    if (mapRotation.y < 48 && mapRotation.y > (-48)){
       mapRotation.y += this.data.speedOfRotation;
    }else if(mapRotation.y >= 48){
      mapRotation.y = 47.99
    }else{
      mapRotation.y = (-47.99)
    }
    this.el.setAttribute("rotation", mapRotation);
    this.el.setAttribute("position", mapPosition);
}}
);


