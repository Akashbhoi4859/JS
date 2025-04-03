
      //  Add Items to Array 
      let myArray = [];

      function add() {
          
          let item = document.getElementById("inputBox").value;
          
          
          if (item !== "") {
              myArray.push(item);
            
              document.getElementById("inputBox").value = "";
          }
      }

      
      function display() {
          
          let result = document.getElementById("result");
          
          
          if (myArray.length === 0) {
              result.innerHTML = "Array is empty";
          } else {
              
              result.innerHTML = "Array items: " + myArray.join(",");
          }
      }
