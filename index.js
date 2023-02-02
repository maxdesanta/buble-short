const ascButton = document.querySelector("#asc-result");
const descButton = document.querySelector("#desc-result");
const textResult = document.querySelector("#result");

// Add event listeners to the buttons
ascButton.addEventListener("click", () => sort("asc"));
descButton.addEventListener("click", () => sort("desc"));

// sortNumber
function sort(order) {
    // Get the input value
    const numbers = getInputValue();
    
    // Sort the numbers
    const sorted = sortNumbers(numbers, order);

    // Update the result paragraph with the sorted numbers
    textResult.textContent = sorted.join(", ");
}

// inputValue
function getInputValue() {
    // Get the input value
    const inputValue = document.querySelector("#input-number").value;
    
    // Convert the input value to an array of numbers
    return inputValue.split(",").map(Number);
}

function sortNumbers(numbers, order) {
    if (order === "asc") {
        return numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        return numbers.sort((a, b) => b - a);
    }
}