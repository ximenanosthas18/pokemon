//creando el pie chart
var deposito = localStorage.getItem("depositos");
var retiro = localStorage.getItem("retiros");
var pago = localStorage.getItem("pagos");

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    maintainAspectRatio: false,
    data: {
        labels: ['Depositos', 'Retiros', 'Pagos'],
        datasets: [{
            label: 'Actividad bancaria',
            data: [],
            backgroundColor: [
                'rgba(255, 99, 132)',
                'rgba(54, 162, 235)',
                'rgba(255, 206, 86)',
            ]
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

function updateChart(){
    myChart.data.datasets[0].data.push(deposito);
    myChart.data.datasets[0].data.push(retiro);
    myChart.data.datasets[0].data.push(pago);
    myChart.update();
}
updateChart();