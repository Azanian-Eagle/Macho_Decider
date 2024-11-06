# 💪 MACHO DECIDER 💪

## Overview
**MACHO DECIDER** is a fun web application that helps users make random decisions between multiple options. Users start with two options and can add up to 10 options in total. With a simple click, the app will select one option at random, making decision-making more exciting!

## Features
- **Decision Making**: Enter options and click "DECIDE!" to let the app choose randomly.
- **Dynamic Option Input**: Start with two input fields and add more by clicking the "Add More" button, up to a maximum of 10 options.
- **Responsive Design**: The application is designed to work well on various screen sizes.

## File Structure
- **index.html**: The main HTML file containing the structure of the application.
- **style.css**: Stylesheet providing the layout and design of the application.
- **script.js**: JavaScript file handling dynamic input, option collection, and random decision-making logic.
- **favicon.ico**: The favicon for the application, displayed in the browser tab.
- **Face of TaxBro_Logo.png**: The rounded-edge logo used as a favicon.

## Getting Started

### Prerequisites
- Any modern web browser (Google Chrome, Firefox, Safari, etc.)

### Installation
1. Clone or download this repository to your local machine.
2. Ensure all files are in the same directory for easy access.

### Running the App
1. Open `index.html` in your web browser.
2. You should see the **MACHO DECIDER** interface with two input fields, an "Add More" button, and a "DECIDE!" button.

## Usage

1. **Enter Options**:
   - Start by entering two options into the provided input fields.
   - If you want to add more options, click the **Add More** button. This adds a new input field each time, up to a maximum of 10 options.
   
2. **Making a Decision**:
   - Once you have at least two options entered, click the **DECIDE!** button.
   - The app will randomly select one option from the list and display it in the result area below the button.
   
3. **Resetting Options**:
   - To change options, simply edit the text in the input fields or refresh the page to reset all fields.

## Code Explanation

### index.html
The HTML file contains the layout of the app, including:
- The title.
- Input fields for entering options.
- Buttons for adding options dynamically and making a decision.
- A result area for displaying the chosen option.

### style.css
Defines the style and appearance of the application:
- `.container`: Centers the app and provides padding.
- `.input`, `.macho-button`: Styles for input fields and buttons, enhancing the user experience.
- `.macho-result`: Styles the result display area.

### script.js
Contains JavaScript code that powers the dynamic functionality:
- **Add More Options**: Handles the addition of more input fields with a maximum of 10.
- **Decision-Making Logic**: Collects non-empty inputs, randomly selects one, and displays the result.
- **Error Handling**: Displays a message if fewer than two options are entered.
  
### Live Demo
Check out the **MACHO DECIDER** in action [here](https://azanian-eagle.github.io/Macho_Decider/)!

### Installation
Clone this repository and open the `index.html` file in your browser:

```bash
git clone https://github.com/Azanian-Eagle/Macho_Decider.git
cd Macho_Decider
open index.html
```

### Customization
To customize the app further, you can:
- Change the colors in style.css for a different theme.
- Modify the JavaScript code to allow more or fewer options.
- Update the favicon by replacing Face of TaxBro_Logo.png with another image file.

### Contributing
If you would like to contribute to this project, feel free to fork the repository and submit a pull request with any improvements.

### Contact
For questions, comments or suggestions, please contact our head [@rmngqibisa](https://github.com/rmngqibisa) or [email](mailto:azanian-eagle@mngqibisafoundation.org) our team.

## Created by [Azanian Eagle](https://eagle-i.mngqibisafoundation.org/) 🦅
