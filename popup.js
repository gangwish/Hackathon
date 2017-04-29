document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginButton').addEventListener('click', function() {
        authorizeReq();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('createSetButton').addEventListener('click', function() {
		console.log("Sending ID: " + $('#setIdText').val());
        $.get('https://sociallanguagelearning.herokuapp.com/selectSet?id=' + $('#setIdText').val())
		$('#setIdText').val() = "";
    });
});