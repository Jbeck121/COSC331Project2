$(function() {
  //var ajax = require('ajax');
  var $id = $('#id');
  var $list = $('#list');
  var $fname = $('#firstName');
  var $lname = $('#lastName');
  var $phone = $('#phone');
  var $email = $('#email');
  var $company = $('#company');



  $.ajax({
  type: "GET",
  url: "/contact",
  success: function(contacts) {
  console.log('success', contacts);
    $.each(contacts, function(index, element) {
      $list.append('<li>ID: ' + index + '<br>First Name: ' + element.firstName + '<br>Last Name: ' + element.lastName + '<br>Phone: ' + element.phone + '<br>Email: ' + element.email + '<br>Company: ' + element.company+'</li>');

    });
  },
  error: function() {
    alert("Error loading users!")
  }
});
$('#add').on('click', function() {
  var contact = {
    firstName: $fname.val(),
    lastName: $lname.val(),
    phone: $phone.val(),
    email: $email.val(),
    company: $company.val()
  };


$.ajax({
  type: "POST",
  url: "/contact",
  data: contact,
  success: function() {
  $list.append('<li>First Name: ' + $fname.val() + '<br>Last Name: ' + $lname.val() + '<br>Phone: ' + $phone.val() + '<br>Email: ' + $email.val() + '<br>Company: ' + $company.val()+'</li>');
location.reload();
},
error: function() {
  alert("error posting");
}

})
$('#delete').on('click', function() {
  var link;
$.ajax({
  type: "GET",
  url: "/contact",
  success: function(data) {
    $.each(data,function(i,element){
      if(i== $id.val()){
        link = '/contact/' + element._id;
        console.log(link);
        $.ajax({
          type: "DELETE",
          url: link,
          success: function(){
            console.log('deleted');
          },
          error: function() {
          console.log('error');
        }
        })
      }
    })

    }


})

});
});
})
