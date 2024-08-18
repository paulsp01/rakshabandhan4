// Script for index.html
function submitForm() {
  const name = document.getElementById("username").value.trim();
  if (name !== "") {
    // Save the name in localStorage
    localStorage.setItem("userName", name);
    // Redirect to the message page
    window.location.href = "message.html";
  } else {
    alert("Please enter your name!");
  }
}

// Script for message.html
window.onload = function () {
  // Retrieve the name from localStorage
  const name = localStorage.getItem("userName");
  const messageDiv = document.getElementById("personalized-message");

  if (name) {
    messageDiv.innerHTML = (
      
        `Happy Raksha Bandhan, ${name}! bhaiya 🎉🎁 May your bond of love and
        protection always stay strong.`
      
    );
  } else {
    messageDiv.innerHTML = "Happy Raksha Bandhan! 🎉🎁";
  }

  setTimeout(() => {
    messageDiv.classList.add('show');
  }, 100);
};
// Handle the display of the Rakhi image and text
document.addEventListener("DOMContentLoaded", () => {
      const button = document.getElementById("show-message-button");
      const rakhiContainer = document.getElementById("rakhi-container");
      //const initialContent = document.getElementById("initial-content");


    button.addEventListener("click", () => {
        rakhiContainer.classList.add("show");
        document.querySelector(".message-text").style.display = "none"; // Hide message-text element
        document.querySelector(".background").style.display = "none";   // Hide background images
        button.style.display = 'none'; // Hide the button after clicking
            rakhiContainer.classList.add("show");
        for (let i = 0; i < 20; i++) {
          const heart = document.createElement("div");
          heart.classList.add("heart");
          heart.style.left = `${Math.random() * 100}vw`;
          heart.style.animationDelay = `${Math.random() * 2}s`;
          document.body.appendChild(heart);

          // Remove the heart after animation completes
          // setTimeout(() => {
          //   heart.remove();
          // }, 4000);
        }

      
        createFirework();
    });


  function createFirework() {
    const fireworkContainer = document.getElementById("firework-container");
    if (!fireworkContainer) return;

    for (let i = 0; i < 20; i++) {
      const firework = document.createElement("div");
      firework.classList.add("firework");
      firework.style.left = `${Math.random() * 100}vw`;
      firework.style.top = `${Math.random() * 100}vh`;
      firework.style.animationDelay = `${Math.random() * 2}s`;
      fireworkContainer.appendChild(firework);

      // Remove firework after animation completes
       // Adjust timing to match firework animation duration
    }
  }



});
// window.addEventListener("load", () => {
//   const rakhiContainer = document.getElementById("rakhi-container");
//   rakhiContainer.classList.add("show");

//   // Add floating hearts (love fluid effect)
//   for (let i = 0; i < 20; i++) {
//     const heart = document.createElement("div");
//     heart.classList.add("heart");
//     heart.style.left = `${Math.random() * 100}vw`;
//     heart.style.animationDelay = `${Math.random() * 2}s`;
//     document.body.appendChild(heart);

//     // Remove the heart after animation completes
//     setTimeout(() => {
//       heart.remove();
//     }, 4000);
//   }
// });