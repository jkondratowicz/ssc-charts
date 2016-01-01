function addSpinner(el) {
	$(el).html("<div class='spinner'></div>");
}

$(function() {
	Highcharts.setOptions({
		chart: {
			style: {
				fontFamily: 'Helvetica'
			}
		}
	});
	addSpinner("#chart1");
	$.getJSON("data/contracts.json", function(data) {
		var chartData = {
			chart: {
				type: 'column'
			},
			title: {
				text: 'Umowy na budowę dróg podpisane w danym roku w kilometrach'
			},
			xAxis: {
				title: {
					text: 'lata'
				},
				categories: []
			},
			yAxis: {
				title: {
					text: 'kilometry'
				},
				reversedStacks: false
			},
			series: [],
			plotOptions: {
				column: {
					stacking: 'normal',
					borderWidth: 0
				}
			},
			credits: {
				enabled: false
			},
			tooltip: {
				shared: true,
				valueSuffix: ' km'
			},
			style: {
				fontFamily: 'Helvetica'
			}
		};

		chartData.xAxis.categories = data.map(function(row) {
			return row.date;
		});

		chartData.series.push({
			name: "Autostrady",
			color: "#5793F3",
			data: data.map(function(row) {
				return row["A"];
			})
		});
		chartData.series.push({
			name: "Drogi ekspresowe dwujezdniowe",
			color: "#D4DF5A",
			data: data.map(function(row) {
				return row["S2x2"];
			})
		});
		chartData.series.push({
			name: "Drogi ekspresowe jednojezdniowe",
			color: "#FEC42C",
			data: data.map(function(row) {
				return row["S1x2"];
			})
		});
		chartData.series.push({
			name: "Drogi ekspresowe - dobudowa drugiej jezdni",
			color: "#DD4444",
			data: data.map(function(row) {
				return row["Supgrade"];
			})
		});

		$("#chart1").highcharts(chartData);
	});
});