AFRAME.registerComponent("bubble",{
    schema:{},
    createBubbles: function(positionY){
        
        var El = document.createElement("a-entity")

        //set attributes
        El.setAttribute("id","bubble")


        El.setAttribute("geometry", {primitive: "sphere", radius: 5})
        El.setAttribute("material", "color", "white")
        El.setAttribute("material", "opacity", 0.7)

        //get the terrain element
        var terrainEl = document.querySelector("#terrain")
        
        //append to terrain as child entity
        terrainEl.appendChild(El)

        setInterval(()=>{
            positionY +=0.5
            
            El.setAttribute("position", {x: -6,y:positionY,z:0})
        }, 100)
    
    },

    init: function(){
        setInterval(()=>{
             this.createBubbles(30) 
        },10000)
            
    }
})