//parallax scroll on homepage
document.addEventListener("scroll", function () {
  const scrollY = window.scrollY;
  const foreground = document.querySelector(".foreground");
  foreground.style.transform = `translateZ(-5px) scale(${1.5 - scrollY * 0.005})`;
});


//collapsing/expandable menu when Rules: is clicked on the game.html page

  function toggleRules() {
    var rulesList = document.getElementById("rulesList");
  
    rulesList.style.maxHeight = rulesList.style.maxHeight === "0px" || rulesList.style.maxHeight === "" ? rulesList.scrollHeight + "px" : "0";
}


//contact us thank you message after pressing submit

document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const thankYouMessage = document.getElementById("thankYouMessage");
  const submitButton = document.getElementById("submitButton");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve the user's input
    const fullName = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const moreInformation = document.getElementById("moreInformation").value;

    // Display the thank you message
    contactForm.style.display = "none";
    thankYouMessage.style.display = "block";

    // Automatically redirect to the homepage after 5 seconds
    setTimeout(function () {
      window.location.href = "index.html"; 
      // 5000 milliseconds (5 seconds) delay
    }, 5000); 
  });

  contactForm.addEventListener("input", function () {
    // The code below prevents default form submission,
    // i.e. the user will have to submit values into the text fields
    // to get the thank you message to pop up.
    const fullName = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const moreInformation = document.getElementById("moreInformation").value;
    const isFormValid =
      fullName.trim() !== "" && email.trim() !== "" && moreInformation.trim() !== "";

    // Disable the submit form until info has been submitted by the user
    submitButton.disabled = !isFormValid;
  });
});



// Game page - Rock, Paper, Scissors

// The below line of code sets up logic that prevents the user from clicking an image when the message appears

//I had a problem here for ages, more than 1 message was appearing, the logic was messy so I had to remove the final message, you can't see it anymore in this code.
// Game page - Rock, Paper, Scissors

// The below line of code sets up logic that prevents the user from clicking an image when the message appears

//I had a problem here for ages, more than 1 message was appearing, the logic was messy so I had to remove the final message, you can't see it anymore in this code.

let isMessageDisplayed = false;

function playGame(userChoice) {
  // Check if the message is not displayed
  if (!isMessageDisplayed) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Get the final result without the intermediate message
    const result = getFinalResult(userChoice, computerChoice);

    const message = `You picked ${userChoice}! Your opponent picked ${computerChoice}. ${result}`;

    // Display message below images
    const gameResult = document.getElementById('gameResult');
    const messageText = document.getElementById('messageText');

    messageText.innerText = message;
    gameResult.classList.remove('hidden-result');

    // Set the flag to true to disable further clicks on images
    isMessageDisplayed = true;

    // Disable click events on the images
    disableImageClick();

    // Reset the flag and enable click events after a delay
    setTimeout(() => {
      isMessageDisplayed = false;
      enableImageClick();
    });
  }
}

function closeMessage() {
  const gameResult = document.getElementById('gameResult');
  const messageText = document.getElementById('messageText');

  gameResult.classList.add('hidden-result');
  messageText.innerText = '';
}

function disableImageClick() {
  const imageOptions = document.querySelectorAll('.image-option');
  imageOptions.forEach((option) => {
    option.removeEventListener('click', imageClickHandler);
  });
}

function enableImageClick() {
  const imageOptions = document.querySelectorAll('.image-option');
  imageOptions.forEach((option) => {
    option.addEventListener('click', imageClickHandler);
  });
}

function imageClickHandler(event) {
  const userChoice = event.target.getAttribute('data-choice');
  playGame(userChoice);
}

function getFinalResult(user, computer) {
  if (user === computer) {
    return "It's a tie!";
  } else if (
    (user === 'rock' && computer === 'scissors') ||
    (user === 'paper' && computer === 'rock') ||
    (user === 'scissors' && computer === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}
// Initial setup to enable click events on the images
enableImageClick();

//