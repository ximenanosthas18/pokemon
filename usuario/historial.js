var numero = localStorage.getItem("transacciones");

var transactions = JSON.parse(numero);    

var markup = "";

for(var i = 0; i<transactions.length; i++){
    markup += '<a href="#" class="list-group-item list-group-item-action active"><div class="d-flex w-100 justify-content-between"><h5 class="mb-1">';
    markup += transactions[i].tipo;
    markup += '</h5><small>';
    markup += transactions[i].fecha;
    markup += '</small></div><p class="mb-1">';
    markup += transactions[i].monto;
    markup += '</p><small>';
    markup += transactions[i].descripcion;
    markup += '</small></a>';
}

document.getElementById("resultado").innerHTML = markup;