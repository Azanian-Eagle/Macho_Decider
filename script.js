const maxOptions = 10; // Set maximum option limit
let currentOptions = 2; // Initial two options already available

// Handle 'Add More' button click event
document.getElementById("add-more-button").addEventListener("click", () => {
    if (currentOptions < maxOptions) {
        currentOptions++; // Increase current option count
        
        // Create a new option input element
        const newOption = document.createElement("input");
        newOption.type = "text";
        newOption.placeholder = `OPTION ${currentOptions}`;
        newOption.className = "input macho-input";
        newOption.id = `option${currentOptions}`;
        
        // Append new option to the container
        document.getElementById("additional-options-container").appendChild(newOption);
        
        // Disable 'Add More' button if limit is reached
        if (currentOptions === maxOptions) {
            document.getElementById("add-more-button").disabled = true;
        }
    }
});
