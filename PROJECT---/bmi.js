
 function  cal () {
        // Get values from input fields
        let height = document.getElementById("height").value;
        let weight = document.getElementById("weight").value;

        // Convert height and weight to numbers
        height = parseFloat(height);
        weight = parseFloat(weight);

        // Check if the inputs are valid
        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            alert("Please enter valid height and weight!");
            return;
        }

        // Convert height from cm to meters
        var heightInMeters = height / 100;

        // Calculate BMI
        var bmi = weight / (heightInMeters * heightInMeters);
    bmi=bmi.toFixed(2);

        // Decide result
        var result = "";
        if (bmi < 18.5) {
            result = "Underweight";
        } else if (bmi < 25) {
            result = "Normal weight";
        } else if (bmi < 30) {
            result = "Overweight";
        } else {
            result = "overweight";
        }
let p=document.querySelector("#p");
let r=document.querySelector("#r");
p.innerHTML=bmi;
r.innerHTML=result;
    }

