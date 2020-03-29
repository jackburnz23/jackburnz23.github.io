// Avoid `console` errors in browsers that lack a console.
(function() {
  // Types
  // int: 1,2, 3
  // boolean: true, false
  // string: "Jack"

  // first_name: Jack
  // lname: Burns
  var sum=function(a,b) {
 //alert(a+b)
  };
  sum("Jack",true);


  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.
