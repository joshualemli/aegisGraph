"use strict";

var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter'
};

var trace2 = {
  x: [1, 2, 3, 4],
  y: [16, 5, 11, 9],
  type: 'scatter'
};

var data = [trace1, trace2];

function init() {
  var e = document.getElementById('plot');
  Plotly.newPlot(e, data);
  console.log(e.data);
  setTimeout(function(){
    e.data[0].x.push(5);
    e.data[0].y.push(10);
    Plotly.redraw(e);
  },2000);
}

window.onload=init;
