Plotly.d3.csv('https://raw.githubusercontent.com/paggel/Cars_Accident_Greece/master/data.csv', function(rows){
	var trace1 = {
		y: rows.map(function(row){
			return row['Cause']
		}),
		x: rows.map(function(row){
			return row['Number']
		}),
		name: 'Causes',
		type: 'bar',
		orientation: 'h',
		marker: {
    	color: 'rgba(55,128,191,0.7)',
    		line: {
      			color: 'rgba(55,128,191,1.0)',
      			width: 2
      	}
      }
	};


	 var data = [trace1];

	var layout = {
	title: 'Car Accidents causes on Greece (Jan - Jun 2015)',
	paper_bgcolor: 'rgba(245,246,249,1)',
  	plot_bgcolor: 'rgba(245,246,249,1)',
	xaxis : {
	 	title:'Number of accidents',
	 	tickcolor: 'red',
		titlefont : {
			color : 'red',
			size : '20',
		}

	 },
	 yaxis : {
		title: 'Causes',
		tickcolor: 'red',
		titlefont : {
			color : 'red',
			size : '20',
		}
 },
     barmode:"stack",
     margin: {
    l: 250,
    r: 20,
    t: 100,
    b: 70
  },
   //  barnorm:"percent",
};

	Plotly.newPlot('plot', data, layout);


})