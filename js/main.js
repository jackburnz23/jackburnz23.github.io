$('#JackyForm').on('submit', function(e) {

});

$(document).on('submit','form#JackyForm',function(e){
  //e.preventDefault();
  //alert("Jack is the best!");
});


var jacksObject = {
  karate: "is awesome",
  jackIsDumb: false,
  nathanIsDumb: function() {
   alert('True!');
  }
};
