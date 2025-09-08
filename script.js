/* --- Part 2: JavaScript Functions --- */

// Global variable example
let animationActive = false; // global scope

// Function to toggle any class on an element (reusable)
function toggleClass(elementId, className) {
    const elem = document.getElementById(elementId);
    elem.classList.toggle(className);
    return elem.classList.contains(className); // returns true if class is active
}

// Function to change text content (demonstrates local scope)
function updateText(elementId, newText) {
    const elem = document.getElementById(elementId); // local scope
    elem.textContent = newText;
    return elem.textContent; // return the new text
}

// Function to animate an element by adding a class temporarily
function animateElement(elementId, animationClass, duration) {
    const elem = document.getElementById(elementId);
    elem.classList.add(animationClass);

    // Remove class after duration (in ms)
    setTimeout(() => {
        elem.classList.remove(animationClass);
    }, duration);
}

/* --- Part 3: Combining CSS Animations with JS --- */

// Button click: animate the image
document.getElementById('myButton').addEventListener('click', () => {
    // Toggle a zoom/rotate animation on the dog image
    animateElement('dogImage', 'active-animation', 1000);

    // Update info card text dynamically
    const newText = animationActive ? "CSS animations are fun!" : "Animations activated!";
    updateText('infoCard', newText);

    animationActive = !animationActive; // toggle global state
});

// Card flip on click (can be extended to more elements)
document.getElementById('infoCard').addEventListener('click', () => {
    toggleClass('infoCard', 'flipped'); // flips the card
});
