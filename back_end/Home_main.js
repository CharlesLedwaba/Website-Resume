// button element from html
const cvBtn = document.querySelector('#DownloadBtn');
const idBtn = document.querySelector('#DownloadIdBtn');
const gradeBtn = document.querySelector('#DownloadGradeBtn');
const transcriptBtn = document.querySelector('#DownloadTransBtn');


// Onclick event to the CV button
cvBtn.addEventListener('click', function() {
    window.location.href = '../img/Resume.pdf';
});

// Onclick event to the ID button
idBtn.addEventListener('click', function() {
    window.location.href = '../img/Resume.pdf';
});

// Onclick event to the GRADE 12 RESULTS button
gradeBtn.addEventListener('click', function() {
    window.location.href = '../img/Resume.pdf';
});

// Onclick event to the TRANSCRIPT button
transcriptBtn.addEventListener('click', function() {
    window.location.href = '../img/Resume.pdf';
});

//dark mode backend
// Get the toggle button
const toggle = document.getElementById("slider round");

// Add an event listener to the toggle button
toggle.addEventListener("click", () => {
   lightMode();
});
function darkMode() {
    let element = document.body;
    let content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Dark Mode is ON";
}

// Call the darkMode() function
darkMode();
function lightMode() {
    let element = document.body;
    let content = document.getElementById("lightModetext");
    element.className = "light-mode";
    content.innerText = "Dark Mode is OFF";
}