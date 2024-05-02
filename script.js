// Variaveis do HTML
const inputName = document.getElementById('input-name');
const errorMessage = document.getElementById('input-name-error-message');
const submitButton = document.getElementById('submit-button');
const loadingText = document.getElementById('text-entry-input-loading');
const invalidName = document.getElementById('text-entry-input-invalid-name');
const textEntry = document.getElementById('text-entry');
const welcomeMessage = document.getElementById('text-entry-welcome-message');
const nextPageButton = document.getElementById('next-step-button');
const mainContent = document.getElementById('main-content');

// Função responsável pelo envio da informação 
function submitName () {
    if (inputName.value.trim() === '') {
      errorMessage.style.display = 'block';
      textEntry.innerHTML = '';
    } else {
        errorMessage.style.display = 'none';
        textEntry.innerHTML = loadingText.innerHTML;
        setTimeout(function () {
            checkName(inputName.value.trim().toLowerCase());
        }, 3000);
    }
}

// Função responsável por checar o nome de quem esta enviando
function checkName (name) {
    if (name === 'raíssa' || name === 'raissa') {
        displayWelcomeMessage();
        nextPageButton.style.display = 'block';
    } else {
        displayInvalidNameMessage();
    }
}

// Mostrar a mensagem de bem vindo caso o nome seja o esperado
function displayWelcomeMessage () {
    textEntry.innerHTML = welcomeMessage.innerHTML;
    inputName.style.display = 'none';
    submitButton.style.display = 'none';
}

// Mostrar mensagem de nome invalido caso não seja o esperado
function displayInvalidNameMessage () {
    textEntry.innerHTML = invalidName.innerHTML;
}

// Função responsável por deixar cada imagem correspondente a sua opção 
function changeEarthImage() {
    var selectedOption = document.getElementById("earth-options").value;
    var earthImages = document.querySelectorAll(".earth-images");

    earthImages.forEach(function(image) {
        if (image.classList.contains(selectedOption)) {
            image.style.display = "block";
        } else {
            image.style.display = "none";
        }
    });
}

// Funcionalidade responsável por sempre deixar a primeira opção selecionada ao entrar / recarregar a página
document.addEventListener('DOMContentLoaded', function() {
    var earthOptions = document.getElementById('earth-options');
    earthOptions.selectedIndex = 0;
    changeEarthImage();
});

// Função responsável por mostrar o conteúdo principal após todas as validações
nextPageButton.addEventListener('click', nextPageButtonClickHandler);

function nextPageButtonClickHandler() {
    mainContent.style.display = 'block';
    textEntry.style.display = 'none';
    submitButton.style.display = 'none';
    nextPageButton.style.display = 'none';
}