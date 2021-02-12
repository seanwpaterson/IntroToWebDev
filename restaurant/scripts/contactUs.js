function validate() {
  const name = document.getElementsByName("name")[0].value;
  const email = document.getElementsByName("email")[0].value;
  const phoneNum = document.getElementsByName("phone")[0].value;

  if (validateName(name) && validateEmal(email) && validatePhoneNum(phoneNum)) {
    document.getElementById("valid").style.display = 'block';
    document.getElementById("invalid").style.display = 'none';
  }
  else {
    document.getElementById("valid").style.display = 'none';
    document.getElementById("invalid").style.display = 'block';

    if (validateName(name)) {
      document.getElementsByTagName("li")[3].style.display = 'none';
    } else {
      document.getElementsByTagName("li")[3].style.display = 'block';
    }

    if (validateEmal(email)) {
      document.getElementsByTagName("li")[4].style.display = 'none';
    } else {
      document.getElementsByTagName("li")[4].style.display = 'block';
    }

    if (validatePhoneNum(phoneNum)) {
      document.getElementsByTagName("li")[5].style.display = 'none';
    } else {
      document.getElementsByTagName("li")[5].style.display = 'block';
    }
  }
}

function validateName(name) {
  const regex = /^[\w'\-,.][^0-9_!¡?÷?¿\/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/gm;

  return regex.test(name);
}

function validateEmal(email) {
  // This regualr expression will only filter the common errors such as a space or extra fullstops
  const regex = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/gm;

  return regex.test(email);
}

function validatePhoneNum(phoneNum) {
  // We're trusting that the customer will enter their number corretly if they want us to contact them.
  // This also avoids having to worry about all possible formatting options of phone numbers.

  return phoneNum.length != 0;
}

// Resets the form elements to their initial state
function formReset() {
  document.getElementsByName("name")[0].value = "";
  document.getElementsByName("email")[0].value = "";
  document.getElementsByName("phone")[0].value = "";
  document.getElementsByName("inquiry")[0].selectedIndex = 0;
  document.getElementsByName("additionalInfo")[0].value = "";

  for (var i = 0; i < document.getElementsByClassName("form-check-input").length; i++) {
    document.getElementsByClassName("form-check-input")[i].checked = false;
  }
}
