// Maximum number of options allowed
const maxOptions = 10;

// Start with two options (initial input fields in HTML)
let currentOptions = 2;

// Event listener for "Add More" button to dynamically add more options
document.getElementById("add-more-button").addEventListener("click", () => {
    if (currentOptions < maxOptions) {
        currentOptions++; // Increase option count

        // Create a new input element for the additional option
        const newOption = document.createElement("input");
        newOption.type = "text";
        newOption.placeholder = `OPTION ${currentOptions}`;
        newOption.className = "input macho-input";
        newOption.id = `option${currentOptions}`;

        // Append new input to the additional options container
        document.getElementById("additional-options-container").appendChild(newOption);

        // Disable "Add More" button if max options are reached
        if (currentOptions === maxOptions) {
            document.getElementById("add-more-button").disabled = true;
        }
    }
});

// Event listener for the "DECIDE!" button to make a decision
document.getElementById("decide-button").addEventListener("click", () => {
    // Collect all entered options
    const options = [];
    for (let i = 1; i <= currentOptions; i++) {
        const optionValue = document.getElementById(`option${i}`).value.trim();
        if (optionValue) {
            options.push(optionValue);
        }
    }

    // Check if there are valid options to choose from
    if (options.length > 1) {
        // Randomly select an option from the list
        const selectedOption = options[Math.floor(Math.random() * options.length)];
        document.getElementById("result").textContent = `Decision: ${selectedOption}`;
    } else {
        document.getElementById("result").textContent = "Please enter at least two options.";
    }
});
