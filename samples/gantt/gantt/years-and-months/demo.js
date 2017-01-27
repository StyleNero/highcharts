$(function () {

    // THE CHART
    Highcharts.ganttChart('container', {
        chart: {
            marginLeft: 150,
            marginRight: 150
        },
        title: {
            text: 'Gantt Chart with Years and Months'
        },
        xAxis: [{
            tickInterval: 1000 * 60 * 60 * 24 * 30, // Month
            labels: {
                format: '{value:%b}',
                style: {
                    fontSize: '10px'
                }
            },
            min: Date.UTC(2014, 3, 17),
            max: Date.UTC(2015, 11, 0),
            currentDateIndicator: true
        }, {
            tickInterval: 1000 * 60 * 60 * 24 * 365, // Year
            labels: {
                format: '{value:%Y}',
                style: {
                    fontSize: '15px'
                }
            },
            linkedTo: 0
        }],
        yAxis: [{
            categories: ['Prototyping', 'Development', 'Testing'],
            reversed: true
        }],
        series: [{
            name: 'Project 1',
            dataLabels: {
                verticalAlign: 'top',
                inside: false
            },
            data: [{
                start: Date.UTC(2014, 4, 18),
                end: Date.UTC(2014, 11, 25),
                taskGroup: 0,
                taskName: 'Start prototype'
            }, {
                start: Date.UTC(2015, 0, 0),
                end: Date.UTC(2015, 10, 25),
                taskGroup: 1,
                taskName: 'Develop'
            }, {
                start: Date.UTC(2015, 0, 0),
                end: Date.UTC(2015, 3, 0),
                taskName: 'Test prototype',
                taskGroup: 0
            }, {
                start: Date.UTC(2015, 9, 23),
                end: Date.UTC(2015, 10, 26),
                taskName: 'Run acceptance tests',
                taskGroup: 2
            }]
        }]
    });
});
