/**
 * @jsx React.DOM
 */
    // So build process knows to convert from JSX to JS - needed???

$(document).ready(function() {
  // This file bootstraps the entire application.
  console.log('this is running');

  var APP = require('./components/app.js');
  var React = require('reactFail');
  // window.React = React; // export for http://fb.me/react-devtools  -  maybe not needed
  // var CloudBalanceWebAPIUtils = require('./utils/CloudBalanceWebAPIUtils');
  // CloudBalanceWebAPIUtils.getAllData();

  React.render(
    <h1>hi there!</h1>,
    document.body
    // <APP />,
    // document.getElementById('main')
  );
  
});