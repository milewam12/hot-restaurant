
// TA Patricks Way

// $('.submitBtn').on('click', function(){
//  submitCustomer();
// });

// function submitCustomer(name, phoneNumber, email, uniqueID){
// 	$.ajax({

//         method: 'POST',

//         url: '/api/new',

//         data: {
//         	name: name,
//         	phoneNumber: phoneNumber,
//         	email: email,
//         	uniqueID: uniqueID
//         },
//         success: function(response){
//             console.log(response);

//             //if response success reload page
//         }

//     });
// }

// Teacher Patrick's Way

$("#submit").on("click", function(event) {
      event.preventDefault();
      var newCustomer = {
        customerName: $("#name").val().trim(),
        phoneNumber: $("#phoneNumber").val().trim(),
        customerEmail: $("#email").val().trim(),
        customerID: $("#uniqueID").val().trim()
      };

     // Question: What does this code do??
      $.post("/api/new", newCustomer)
      .done(function(data) {
        console.log(data);
        alert("Successfully made reservation!");
      });
    });

$.get("/api/" , function(data) {
        console.log(data);
        if (data) {
          $("#name").text(data.name);
          $("#phoneNumber").text(data.phoneNumber);
          $("#age").text(data.age);
          $("#uniqueID").text(data.forcePoints);
        }
        else {
          $("#name").text("The force is not strong with this one. Your character was not found.");
          $("#stats").hide();
        }
      });