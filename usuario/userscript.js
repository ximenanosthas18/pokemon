var cuenta = {
    numCuenta: 0987654321,
    usuario: "Ash Ketchum",
    email: "ash@gmail.com",
    pin: 1234,
    
    showBalance: function(){
        document.getElementById("span-saldo").innerHTML = localStorage.getItem("balance");
    },

    deposito: function(cantidad){
        var f = new Date();
        this.agregarTransaccion({tipo: "Deposito", monto: cantidad, descripcion: "Deposito a cuenta", fecha: f});
        var balance_actual = JSON.parse(localStorage.getItem("balance"));
        balance_actual += cantidad;
        localStorage.setItem("balance", JSON.stringify(balance_actual));
        //this.balance += cantidad;
        this.showBalance();
        swal({
            icon: "success",
          });
        const doc = new jsPDF();
        doc.text("Deposito de: $" + document.getElementById("cantidad-deposito").value + " por Ash Ketchum.", 10, 10);
        doc.save("ATM-jspdf.pdf");
    },

    retiro: function(cantidad){
        var balance_actual = JSON.parse(localStorage.getItem("balance"));
        if(cantidad > balance_actual){
            swal("No tiene fondos suficientes");
        }
        else if(cantidad == 0 || typeof cantidad == NaN){
            swal("Porfavor ingrese una cantidad valida");
        }
        else{
            var f = new Date();
            this.agregarTransaccion({tipo: "Retiro", monto: cantidad, descripcion: "Retiro de efectivo", fecha: f})
            balance_actual -= cantidad;
            localStorage.setItem("balance", JSON.stringify(balance_actual));
            this.showBalance();
            swal("Porfavor retire su dinero");
            const doc = new jsPDF();
            doc.text("Retiro de: $" + document.getElementById("cantidad-retiro").value + " por Ash Ketchum.", 10, 10);
            doc.save("ATM-jspdf.pdf");
        }
    },
    
    pagoServicio: function(servicio, cantidad){
        var f = new Date();
        var balance_actual = JSON.parse(localStorage.getItem("balance"));
        if(cantidad < balance_actual){
        //validar el tipo de servicio y dependiendo de eso mostrar opciones de las companias
        this.agregarTransaccion({tipo: "Pago", monto: cantidad, descripcion: "Pago de servicio", fecha: f});
        balance_actual -= cantidad;
        localStorage.setItem("balance", JSON.stringify(balance_actual));
        swal("Su pago se ha realizado exitosamente!");
        const doc = new jsPDF();
        doc.text("Pago de " + document.getElementById("select-servicio").value + " de: $" + document.getElementById("cantidad-pago").value + " por Ash Ketchum.", 10, 10);
        doc.save("ATM-jspdf.pdf");
        }
        else{
            swal("No tiene fondos suficientes para realizar un pago");
        }
    },

    agregarTransaccion: function(transaccion){

        if(localStorage.getItem("transacciones") == 0){
           var data = [transaccion];
           localStorage["transacciones"] = JSON.stringify(data);
           //console.log(localStorage.getItem("transacciones"))
        } else {
           var data_existente = JSON.parse(localStorage.getItem("transacciones"));
           data_existente.push(transaccion);
           localStorage["transacciones"] = JSON.stringify(data_existente);
           //console.log(localStorage.getItem("transacciones"));
        }
    },

    imprimirTransaccion: function(){
        const doc = new jsPDF();
    
        doc.text("Ejemplo #1!", 10, 10);
        doc.save("ATM-jspdf.pdf");
    }
};
