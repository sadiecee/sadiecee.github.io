// user_name = window.prompt("Please enter your name", "Type your name here");
// document.write(user_name);

function welcome()
{
  let a = "Please enter your name.";
  let b = "Type your name here.";

  // A prompt box is used to prompt users to input a value before entering a page
  user_name=window.prompt(a,b);

  message="<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"

  return message
}

function webmap_table(){
  document.write("<table width=100%>");
  for (var row=0; row <2; row++)
  {
    document.write("<tr>");
    for (var column=0; column <3; column++)
    {
      document.write("<td>" + row + "," + column + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table>");
}





//var header = "Welcome to my website " + user_name + "!";
//var headerupdated = document.getElementById('input_header').innerHTML = input_header+user_name;
//document.write(header);
//document.write(user_name);

// document.write("Where is my JS code?");
//window.alert(5 + 6);
//window.alert('5 + 6');
//document.write('<h1>A heading</h1>');
//document.write('<p>A sentence.</p>');
//const x = "web";
//const y = "mapping";
//const out = x + y;
//document.write(out);


//A prompt box is used to prompt users to input a value
//before entering a page.
// user_name = window.prompt("Please enter your name", "Type your name here");
// document.write(user_name);
//there are many ways to use the prompt feature
// sign = window.prompt(); // open the blank prompt window
// sign = prompt(); // open the blank prompt window
// sign = window.prompt('Are you feeling lucky'); // open the window with Text
//"Are you feeling lucky"
// sign = window.prompt('Are you feeling lucky', 'sure'); // open the window with
//Text "Are you feeling lucky" and default value "sure"

// x = 22;
//const y =33;
//document.writeln(x + y) ;
//document.writeln("<br>");
//document.writeln(x += 33);

// document.writeln("<button onclick='condition()'>Conditional Test</button>")
// function condition() {
//   x = confirm("Are you sure you want to proceed?");
//   if(x) {
//     document.writeln("You chose Okay!");
//   } else {
//     document.writeln("You chose Cancel!");
//   }
// }
//
// arr = ["Joe","April","Mark","Sara"];
// for (var i=0; i < arr.length; i++) {
//   document.writeln(arr[i],"<br>");
// }
