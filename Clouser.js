var sayHello = function (name){
  
      var text  = 'hello ,  ' +name;
  
  return function(){
      console.log(text);
  
  }
  
  
}


sayHello('Todd');   // Nothing happens


// The function return a function, which means it needs assignment , and then calling.


var HelloTodd = sayHello('Toddd');
HelloTodd();



sayHello('Bob')();  // We may call the function like this but this will call the clousre


//  Simply accessing the variable outside the immediate lexical scope create the closure.



