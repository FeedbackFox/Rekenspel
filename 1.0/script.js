(function(){
  var problem = document.getElementById('problem');
  var h1 = document.getElementById("h1");
  var enterPressed = false;
  var answerSolved = false;

  var answer = 0;
  var x = randomNumber();
  var y = randomNumber();



  problem.innerHTML = x + " * " + y;



  setInterval(function checkAnswer() {
  var userinput = document.getElementById('userinput').value;
  var inputfield = document.getElementById('userinput');

  if (answerSolved)
  {
    y = randomNumber();
    x = randomNumber();
    problem.innerHTML = x + " * " + y;
    answerSolved = false;
  }

  inputfield.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
      enterPressed = true;
    }
  })

  if (enterPressed && userinput == (x * y))
  {
    alert("you a clever niggah mah boi");
    document.getElementById("right").src = "img/rightcheckbox.png";
    document.getElementById("wrong").src = "img/emptycheckbox.png";
    userinput = "";
    enterPressed = false;
    answerSolved = true;
  }
  else if (enterPressed && userinput != "")
  {
    document.getElementById("wrong").src = "img/wrongcheckbox.png";
    document.getElementById("right").src = "img/emptycheckbox.png";
    enterPressed = false;
    answerSolved = true;
  }


  }, 100);




  function randomNumber() {
    var x = Math.floor(Math.random() * 10) + 1;
    return x;
  }

})();
