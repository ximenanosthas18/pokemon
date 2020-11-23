//funcion para crear variables localStorage
window.addEventListener("load", function(event){
    localStorage.setItem("depositos", 0);
    localStorage.setItem("retiros", 0);
    localStorage.setItem("pagos", 0);
    localStorage.setItem("transacciones", 0);
    localStorage.setItem("balance", 500);
})

document.getElementById("login").addEventListener("submit", function(event){
    event.preventDefault();
    var pinU= document.getElementById("PIN").value;
    var constraints = {
        password: {
          presence: true,
          equality: "confirmPassword",
          length: {
              minimum: 4
          }
         
        }
      };

    var respuesta = validate({password: pinU, confirmPassword: "1234"}, constraints);

    if(respuesta != undefined){
        swal("PIN incorrecto");
    }
    else{
        window.location.replace("./index.html");
    }
});



