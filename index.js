
document.getElementById("btn").addEventListener("click", function(event) {

  let userEmail = document.getElementById("email").value;
  let userPassword = document.getElementById("password").value;
  let add = document.getElementById("add");
  let greeting = document.getElementById("greeting");

  if(userEmail == "" || userPassword == "" || userEmail.indexOf("@", 1) < 0){ //if an email is starting with @
      alert("Please enter a valid e-mail address and password."); 
  } else{
      add.innerHTML = "Welcome " + userEmail;
      document.getElementById("loginModal").style.display = "block";
      greeting.innerText = `Welcome ${userEmail} You did a good job`;
  }

  event.preventDefault(); // to prevent a browser’s default behavior to submit the form
});


let modal = document.getElementById("loginModal");
let span = document.getElementsByClassName("close")[0];
//return node list so we must type the index even if its only elemnent with that class!

span.addEventListener("click", function() {
modal.style.display = "none";
}) // to close the modal when you click on X

window.addEventListener("click", function(event) {
if (event.target == modal) {
  modal.style.display = "none";
  }
})
//when you click outside of the poping modal - to close the modal
