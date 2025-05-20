document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("dataForm")
    const chartCanvas = document.getElementById("chartCanvas")
    let myChart;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const minX = parseInt(document.getElementById("minX").value);
        const maxX = parseInt(document.getElementById("maxX").value);

        //validaciones
        if (minX >= maxX) {
            alert("El valor inicial no debe ser mayor al valor final chI uwu");
            return
        }
        // Fin de validadciones


        //generar valores de x
        const xValues = Array(maxX - minX + 1)
            .fill()
            .map((_, i) => minX + i);

        //f(x) = x^2 + 2x + 1
        const yValues = xValues.map(x => x * x + 2 * x + 1)

        if (myChart) {
            myChart.destroy();
        }

        myChart = new Chart(chartCanvas, {
            type: `line`,
            data: {
                labels: xValues,
                datasets: [{
                    label: 'f(x) = x^2 + 2x + 1',
                    data: yValues,
                    borderColor:'rgba(75,195,192,1)',
                    fill:true,
                    tension: 0.3,
                }]
            },
            options: {
                responsive: true,
                scales:{
                    x:{title:{display:true,text: "Eje X"}},
                    y:{title:{display:true,text: "Eje Y"}}
                }
            }
        })
    })
});