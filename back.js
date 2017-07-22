


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve.html", function(req, res) { 
	res.sendFile(path.join(__dirname, "reservehtml"));
}
});