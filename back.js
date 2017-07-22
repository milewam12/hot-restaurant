


$('.submitBtn').on('click', function(){
 submitCustomer();
});

function submitCustomer(){
	$.ajax({

        method: 'POST',

        url: '/api/new',

        data: {
        	customerName: 'test'
        },
        success: function(response){
            console.log(response);
            //if response success reload page
        }

    });
}



// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "view.html"));
// });

// app.get("/tables", function(req, res) {
//   res.sendFile(path.join(__dirname, "tables.html"));
// });

// app.get("/reserve", function(req, res) { 
// 	res.sendFile(path.join(__dirname, "reserve.html"));
// });