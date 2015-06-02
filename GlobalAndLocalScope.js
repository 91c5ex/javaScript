
//Scope A
var name="amit";
var myFunction = function(){
  
  //Scope B
  
  
  var sirName = "Thakur";
  console.log("Sir Name inside function "+sirName);
  
  var secondFunction = function(){
    
    //Scope C
    
    
      var middleName = "-";
      
      // Again Defining sir Name inside second Function
    
      var sirName="Thak";
    
    
    console.log("Sir Name is visible second Function ie  "+sirName );
      console.log("Middle Name is "+middleName);
  }
  
  secondFunction();
  
   //console.log("Middle Name is "+middleName);
  
};

console.log("Name is "+name);
myFunction();
//console.log("Sir Name is "+sirName);
//console.log("Middle Name is "+middleName);