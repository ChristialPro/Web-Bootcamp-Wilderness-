
var weight = parseFloat(prompt("What is your weight?")); 
var height = parseFloat(prompt("What is your height?"));

function bmiCalculator (weight, height) {
       var bmi = weight / (height * height);
       
       var msg = bmiMessage(bmi);
       //return bmi;
       return msg;
}

function bmiMessage (calculatedBMI) {
  var msg = "";
  
  if (calculatedBMI < 18.5) {
    //alert("Your BMI is"  + calculatedBMI + " , so you are underweight.");
    msg = "Your BMI is "  + calculatedBMI + ", so you are underweight.";
  } else if (calculatedBMI <= 24.9) { 
    //alert("Your BMI is" + calculatedBMI + " , so you have a normal weight."); 
    msg = "Your BMI is " + calculatedBMI + ", so you have a normal weight.";
  }
  else if (calculatedBMI >24.9) {
    //alert("Your BMI is" +calculatedBMI+ " , so you are overweight."); 
    msg = "Your BMI is " +calculatedBMI+ ", so you are overweight."; 
  }
  return msg;
}
