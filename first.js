
   
   let doCoolStuff = function ()
   {
document.getElementById('cool').className ='cool red';

   }
   
   var car = {
      make: "VW",
      type: "polo",
      color: "blue",
      isTurnedOn: false,
      numOfWheels: 4,
      seats: ['seat1', 'seat2', 'seat3', 'seat4'],

      turnedOn : function(){
        this.isTurnedOn= true;

      },

      fly : function(){
        alert('fly');
      },

      switchCar : function(isON){
console.log('turn car'+isON);
if(isON == true){
    this.isTurnedOn = true;
}
else{
    this.isTurnedOn=false;
}
      }
    };

    console.log("hello there sweeet cheeks");
