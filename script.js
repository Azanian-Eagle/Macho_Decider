document.getElementById('decide-button').addEventListener('click', function () {
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;

    if (option1 === "" || option2 === "") {
        document.getElementById('result').textContent = "C'MON, DON'T BE A POES MAN! ENTER BOTH OPTIONS!";
    } else {
        const choices = [option1, option2];
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        document.getElementById('result').textContent = randomChoice;
    }
});
const maxOptions = 10;
let currentOptions = 2; // Start with the first two options already present

document.getElementById("add-more-button").addEventListener("click", () => {
    if (currentOptions < maxOptions) {
        currentOptions++;
        
        // Create a new input element
        const newOption = document.createElement("input");
        newOption.type = "text";
        newOption.placeholder = `OPTION ${currentOptions}`;
        newOption.className = "input macho-input";
        newOption.id = `option${currentOptions}`;
        
        // Append the new input to the container
        document.getElementById("additional-options-container").appendChild(newOption);
        
        // Disable the "Add More" button if max options reached
        if (currentOptions === maxOptions) {
            document.getElementById("add-more-button").disabled = true;
        }
    }
});
