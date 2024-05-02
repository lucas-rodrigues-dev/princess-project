const inputName = document.getElementById('input-name');
const errorMessage = document.getElementById('input-name-error-message');
const submitButton = document.getElementById('submit-button');
const loadingText = document.getElementById('text-entry-input-loading');
const invalidName = document.getElementById('text-entry-input-invalid-name');
const backdoorButton = document.getElementById('text-entry-input-invalid-name-backdoor');
const textEntry = document.getElementById('text-entry');
const welcomeMessage = document.getElementById('text-entry-welcome-message');
const nextPageButton = document.getElementById('next-step-button');

function submitName () {
    if (inputName.value.trim() === '') {
      errorMessage.style.display = 'block';
      textEntry.innerHTML = '';
      backdoorButton.style.display = 'none';  
    } else {
        errorMessage.style.display = 'none';
        textEntry.innerHTML = loadingText.innerHTML;
        setTimeout(function () {
            checkName(inputName.value.trim().toLowerCase());
        }, 3000);
    }
}

function checkName (name) {
    if (name === 'raíssa' || name === 'raissa') {
        displayWelcomeMessage();
        nextPageButton.style.display = 'block';
    } else {
        displayInvalidNameMessage();
    }
}

function displayWelcomeMessage () {
    textEntry.innerHTML = welcomeMessage.innerHTML;
    inputName.style.display = 'none';
    submitButton.style.display = 'none';
}

function displayInvalidNameMessage () {
    textEntry.innerHTML = invalidName.innerHTML;
    backdoorButton.style.display = 'block';
}