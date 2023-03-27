AFRAME.registerComponent("game-play",{
    schema:{
        chestId: {type:"string", default: "#chest1"}
    },

    isCollided: function(chestId){

      const chest = document.querySelector(chestId);
      chest.addEventListener("collide", e =>{
       if(chest.getAttribute("visible")){
        chest.setAttribute("visible", false)
        this.updateScore()
        this.updateTargets()        
       }
      })
    },

    init: function(){
        var duration = 120
        const timerEl = document.querySelector("#timer");
        this.startTimer(duration,timerEl)
    },
    
    startTimer: function(duration, timerEl){
        var minutes;
        var seconds;

        setInterval(()=>{
           if (duration >= 0){
              minutes = parseInt(duration/60);
              seconds = parseInt(duration%60);
              if (minutes < 10){
                 minutes = "0" + minutes
              }
              if (seconds < 10){
                 seconds = "0" + seconds
              }
              timerEl.setAttribute("text", {value: minutes + ":" + seconds})
              duration -= 1
           }else{
             this.gameOver()
           }  
        },1000)
    },

    updateTargets: function(){
        const el = document.querySelector("#targets");
        var count = el.getAttribute("text").value;
        let currentTargets = parseInt(count);
        currentTargets -= 1;
        el.setAttribute("text",{value: currentTargets});
    },

    updateScore: function(){
       const el = document.querySelector("#score");
       var count = el.getAttribute("text").value;
       let currentScore = parseInt(count);
       currentScore += 50;
       el.setAttribute("text",{value: `${currentScore}`});
       if(currentScore >= 750){
        console.log("You Win")
        var win_txt = document.querySelector("#win_text");
        win_txt.setAttribute("visible", true)
        var diverEl = document.querySelector("#diver_model")
        diverEl.setAttribute("visible",false)
        var terrainEl = document.querySelector("#terrain")
        terrainEl.setAttribute("visible",false)
       }
    },

    gameOver: function(){
       var diverEl = document.querySelector("#diver_model")
       var el = document.querySelector("#game_over_text")
       el.setAttribute("visible", true)
       diverEl.setAttribute("dynamic-body",{mass: 1})
    },

    chestCollision: function(){
        this.isCollided("#chest1");
        this.isCollided("#chest2");
        this.isCollided("#chest3"); 
        this.isCollided("#chest4");
        this.isCollided("#chest5");
        this.isCollided("#chest6"); 
        this.isCollided("#chest7"); 
        this.isCollided("#chest8");   
        this.isCollided("#chest9");  
        this.isCollided("#chest10");
        this.isCollided("#chest11");
        this.isCollided("#chest12");
        this.isCollided("#chest13");
        this.isCollided("#chest14");
        this.isCollided("#chest15");
    },

    update: function(){
        this.chestCollision()
    },
})
