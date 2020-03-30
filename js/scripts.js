(function(){

  var form_contact = document.getElementById("form-contact");
  var inputs = form_contact.elements;
  
  // Validate CHeck Inputs
  var checkInputs = function(){
    for (var i = 0; i < inputs.length; i++) {
      // Identificate if the input is, text, email or textarea
      if (inputs[i].type == "text" || inputs[i].type == "email" || inputs[i].name == ["message"]) {
        // If it is text, email type, we will check that the inputs are completed.
        if (inputs[i].value.length == 0) {
          console.log('El campo ' + inputs[i].name + ' esta incompleto');
          inputs[i].className = inputs[i].className + " error";
          return false;
        } else {
          inputs[i].className = inputs[i].className.replace(" error", "");
        }
      }
    }  
    return true;
  };

  var send = function(e){
    e.preventDefault();
    if (!checkInputs()) {
      console.log('Falto validar los Input');
      // e.preventDefault();
    } else {
      console.log('Envia');
      // e.preventDefault();
    }
  };

  // Event
  form_contact.addEventListener("submit", send);

  // Memu padding
  let windowHeight = window.pageYOffset;
  window.onscroll = function () {
    const scrollDown = window.pageYOffset;
    if (windowHeight >= scrollDown || windowHeight == scrollDown) {
      document.getElementById("header-container").style.padding = "2% 0";
    } else {
      document.getElementById("header-container").style.padding = ".5%";
    }
  };
  
}());

function showMenu() {
  var menu = document.getElementById("navbar_menu");
  menu.classList.toggle("active");
}

