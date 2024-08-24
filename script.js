document.getElementById('decide-button').addEventListener('click', function () {
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;

    if (option1 === "" || option2 === "") {
        document.getElementById('result').textContent = "ENTER BOTH OPTIONS LIKE A REAL MAN!";
    } else {
        const choices = [option1, option2];
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        document.getElementById('result').textContent = randomChoice;
    }
});
