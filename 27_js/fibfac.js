// Team Phantom Tollbooth :: Clyde Sinclair, Fierce Dragon 
// SoftDev pd0
// K27 -- Basic functions in JavaScript
// 2023-04-04t
// --------------------------------------------------


// as a duo...
// pair programming style,
// implement a fact and fib fxn


//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.


function fact(n) {
	if (n < 2) 
        return 1;
      else {
          return (n * fact(n - 1));
      }
}


function fib(n){

  if (n <= 1){
	  return n
  }
  return fib(n-1)+fib(n-2);
}