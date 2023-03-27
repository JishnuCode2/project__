AFRAME.registerComponent("fish",{
    init: function(){
      for (var i =1; i<=30; i++){
        //create id
        var id = `fish${i}`

        //position
        var posX
        if (Math.round(Math.random(1,2)) == 1){
          posX = Math.round(Math.random()*50) - 100
        }else{
          posX = Math.round(Math.random()*50)
        }
        var posY = Math.round(Math.random()*40)
        var posZ = Math.round(Math.random() * 100) + 30
        var position = {x: posX, y: posY, z:posZ}
        
        //call function
        this.createFishes(id,position)
      }
    },

    createFishes: (id, position)=>{
      
        var fishEl = document.createElement("a-entity")
        fishEl.setAttribute("gltf-model","./models/fish_low_poly/scene.gltf")
        
   
        //set attributes
        fishEl.setAttribute("id",id)
        fishEl.setAttribute("position", position)
        fishEl.setAttribute("scale",{x: 2 , y: 2, z: 2})
        fishEl.setAttribute("rotation", {x:0, y:90, z:0})

        //get the terrain element
        var terrainEl = document.querySelector("#terrain")
        
        //append to terrain as child entity
        terrainEl.appendChild(fishEl)
    }
})