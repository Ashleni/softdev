// demo 1
// JS event propagation

var tds = document.getElementsByTagName('td');
// tds is an list of the values in <td> obtained from the html file

// how does it know which one its clicking???????????????? 
var clicky = function(e) {
  alert( this.innerHTML );
};

//for loop finds the appropriate name from tds 
for (var x=0; x < tds.length; x++) {
  tds[x].addEventListener('click', clicky);
}

