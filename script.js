let calculation = '';

      function updateCalculation(value) {
        calculation += value;
        return console.log(calculation);
      } 

      const inputDisplay = document.getElementById('inputDisplay');

      function addToInput(value) {
        inputDisplay.value += value;
      }

      function handleKeyDown(event) {
          if (event.keyCode === 13) {
            inputDisplay.value = eval(inputDisplay.value);
          }
      } 