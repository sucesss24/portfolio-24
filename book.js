

document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("bookingForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var phone = document.getElementById("phone").value.trim();
    var project = document.getElementById("Project").value.trim(); 

    if (name === "" || email === "" || phone === "" || project === "") {
      alert("Please fill in all fields.");
      return;
    }

    
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (phone.length !== 10 || isNaN(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    alert("Thank you, " + name + "! Your request has been submitted successfully.");
    form.reset();
  });
});
