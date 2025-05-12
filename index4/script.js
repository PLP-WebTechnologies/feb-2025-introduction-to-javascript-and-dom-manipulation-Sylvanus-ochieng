// Function to change the text content
function changeText() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = "<p>The text has been changed!</p>";
  }
  
  // Function to change the style of the content
  function changeStyle() {
    const contentDiv = document.getElementById('content');
    contentDiv.style.fontSize = "30px"; // Change font size
    contentDiv.style.color = "green"; // Change text color
  }
  
  // Function to add a new element
  function addElement() {
    const newElement = document.createElement('div');
    newElement.classList.add('added-element'); // Add a class for styling
    newElement.textContent = "This is a new added element.";
    document.body.appendChild(newElement); // Add it to the body of the document
  }
  
  // Function to remove an element
  function removeElement() {
    const elementToRemove = document.querySelector('.added-element');
    if (elementToRemove) {
      elementToRemove.remove(); // Removes the first element with the class 'added-element'
    } else {
      alert("No element to remove.");
    }
  }
  