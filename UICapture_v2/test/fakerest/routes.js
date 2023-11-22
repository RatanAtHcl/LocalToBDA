var express = require("express");
var router = express.Router();

router.get("/testString", function(req, res) {
    res.send("success");
});

router.get("/getCurrentUser", function(req, res) {
    res.send("admin");
});

router.post("/testJson", function(req, res) {
	var auth = req.headers.authorization

	if(auth == "1234567890") {
		res.json({data:"success-post"});
	}
	else {
		res.status(401).json();
	}
    
});

module.exports = router;
