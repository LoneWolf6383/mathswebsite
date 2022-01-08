// import Chart from 'chart.js'
const ch = document.querySelector('#myChart')
const myChart = new Chart(ch, {
    type: 'bar',
    data: {
        labels: [1, 2, 3, 4, 5],
        datasets: [{
            label: 'Dummy',
            data: [123, 23, 564, 63, 456],
            backgroundColor: [
                'rgba(0,255,247,1)',
                'rgba(0,255,95,1)',
                'rgba(56,0,255,1)',
                'rgba(255,0,4,1)',
                'rgba(154,0,255,1)'
            ],
            borderColor: [
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)'
            ],
            borderWidth: 2
        }],
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            }
        }
    }
})



































// const ctx = document.getElementById('myChart');
// const myChart = new Chart(ctx, {
//     type: 'bar',
//     data: {
//         labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             label: '# of Votes',
//             data: [100, 352, 321, 65, 322, 61],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)',
//                 'rgba(255, 206, 86, 0.2)',
//                 'rgba(75, 192, 192, 0.2)',
//                 'rgba(153, 102, 255, 0.2)',
//                 'rgba(255, 159, 64, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],
//             borderWidth: 2
//         }]
//     },
//     options: {
//         scales: {
//             y: {
//                 beginAtZero: true
//             }
//         }
//     }
// });