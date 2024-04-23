document.addEventListener("DOMContentLoaded", function() {
    const valueElement = document.getElementById("value");
    const incrementButton = document.getElementById("increment");
    const decrementButton = document.getElementById("decrement");
    const addToCartButton = document.querySelector(".btn-class button");
  
    let value = 0;
    let selectedColor = "";
    let selectedSize = "";
  
  
    function increment() {
      value++;
      updateValue();
    }
  
    function decrement() {
      if (value > 0) {
        value--;
        updateValue();
      }
    }
  
   
    function updateValue() {
      valueElement.textContent = value;
    }
 
    function showTick(selectedColor) {
      const ticks = document.querySelectorAll('.tick');
      ticks.forEach(tick => {
        tick.style.display = 'none';
      });
      const selectedTick = document.getElementById(`tick-${selectedColor}`);
      selectedTick.style.display = 'block';
    }
  
   
    incrementButton.addEventListener("click", increment);
    decrementButton.addEventListener("click", decrement);
  
 
    addToCartButton.addEventListener("click", function() {
      const colorOptions = document.querySelectorAll('.color-option');
      const sizeOptions = document.querySelectorAll('.size-option input[type="radio"]');
      let selectedColorElement;
      let selectedSizeElement;
  
 
      colorOptions.forEach(option => {
        if (option.querySelector('.tick').style.display !== 'none') {
          selectedColorElement = option;
          selectedColor = option.getAttribute('onclick').match(/'([^']+)'/)[1];
        }
      });
  
      sizeOptions.forEach(option => {
        if (option.checked) {
          selectedSizeElement = option.parentElement;
          selectedSize = selectedSizeElement.querySelector('span').textContent;
        }
      });
  
      // Display the result
      const number = parseInt(valueElement.textContent);
      const result = `Embrace Sideboard with Color ${selectedColor} and Size ${selectedSize} and Number ${number} added to cart`;
      const resultDiv = document.createElement('div');
      resultDiv.textContent = result;
      const extraDiv = document.querySelector('.extra');
      extraDiv.insertAdjacentElement('afterend', resultDiv);
    });
  
    
    const colorOptions = document.querySelectorAll('.color-option');
    colorOptions.forEach(option => {
      option.addEventListener('click', function() {
      
        const color = this.getAttribute('onclick').match(/'([^']+)'/)[1];
  
        showTick(color);
  
        colorOptions.forEach(otherOption => {
          if (otherOption !== option) {
            otherOption.querySelector('.tick').style.display = 'none';
          }
        });
      });
    });
  });
  

