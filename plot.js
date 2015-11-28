Plotly.d3.csv('https://raw.githubusercontent.com/paggel/Cars_Accident_Greece/master/data.csv', function(rows){
	var trace1 = {
		x: rows.map(function(row){
			return row['Cause']
		}),
		y: rows.map(function(row){
			return row['Number']
		}),
		name: 'Causes',
		type: 'bar',
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
	 	title:'Causes'
	 },
	 yaxis : {
		title: 'Number of causes'
 },
     barmode:"stack",
   //  barnorm:"percent",
};

	Plotly.newPlot('plot', data, layout);


})