//FUNCION PARA DEPOSITOS
document.getElementById("depositos").addEventListener("submit", function(event){
    event.preventDefault();
    var monto = parseInt(document.getElementById("cantidad-deposito").value);
    //validar cantidad ingresada
    var constraints = {
        amount: {
          presence: true,
          numericality: {
              greaterThan: 0
          }
         
        }
      };

    var respuesta = validate({amount: monto}, constraints);
    
    if(respuesta != undefined){
        swal("Ingrese una cantidad valida");
    }
    else{
        //realizar deposito
        cuenta.deposito(monto);
        //guardar cantidad de depositos en localStorage para actividad
        document.getElementById("cantidad-deposito").value = "";
        var deposits = localStorage.getItem("depositos");
        deposits++;
        localStorage.setItem("depositos", deposits);
       
    }
  });

//FUNCION PARA RETIROS
document.getElementById("retiros").addEventListener("submit", function(event){
    event.preventDefault();
    var monto = parseInt(document.getElementById("cantidad-retiro").value);
    //validar cantidad ingresada
    var constraints = {
        amount: {
          presence: true,
          numericality: {
              greaterThan: 0
          }
         
        }
      };

    var respuesta = validate({amount: monto}, constraints);
    
    if(respuesta != undefined){
        swal("Ingrese una cantidad valida");
    }else{
        //realizar retiro
        cuenta.retiro(monto);
        //guardar cantidad de depositos en localStorage para actividad
        document.getElementById("cantidad-retiro").value = "";
        var withdrawals = localStorage.getItem("retiros");
        withdrawals++;
        localStorage.setItem("retiros", withdrawals);
    }
});

//FUNCION PARA PAGOS
document.getElementById("pagos").addEventListener("submit", function(event){
    event.preventDefault();
    var servicio = document.getElementById("select-servicio").value;
    var monto = parseInt(document.getElementById("cantidad-pago").value);
    //validar cantidad ingresada
    var constraints = {
        amount: {
          presence: true,
          numericality: {
              greaterThan: 0
          }
         
        }
      };

    var respuesta = validate({amount: monto}, constraints);
    
    if(respuesta != undefined){
        swal("Ingrese una cantidad valida");
    }
    else{
        //realizar pago
        cuenta.pagoServicio(servicio, monto);
        //guardar cantidad de depositos en localStorage para actividad
        document.getElementById("cantidad-pago").value = "";
        var payments = localStorage.getItem("pagos");
        payments++;
        localStorage.setItem("pagos", payments);
        console.log(cuenta.transacciones);
    }
});

//consultar saldo
document.getElementById("saldo-tab").addEventListener("click", function(event){
    event.preventDefault();
    cuenta.showBalance();
});

