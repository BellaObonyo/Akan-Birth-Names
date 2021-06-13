var days_of_week = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
var male_names = new Array('Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame');
var female_names = new Array('Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama');
var akanName = '';sss

function checkDayofWeek(){
	inputValidation();
	dob = document.getElementById('dob').value;
	gender = document.querySelector('input[name="gender"]:checked').value;
	
	var dobDate = new Date(dob);
    var indexOfDay = dobDate.getDay();
	dayOfWeek = days_of_week[indexOfDay];
	if(gender == 'male'){
		akanName = male_names[indexOfDay];
	} else if (gender == 'female'){
		akanName = female_names[indexOfDay];
	}
	document.getElementById('results').innerHTML = "Your Akan name is: " + akanName;
}

function inputValidation() {
	if (document.getElementById('dob').value == '') {
		alert("Please select a date");
	} 
	if (!atLeastOneRadio()) {
		alert("Please select a your gender");
	}
}

function atLeastOneRadio() {
	if (document.getElementById('male').checked == true || document.getElementById('female').checked == true) {
		return true;
	}
	return false;
}