let currentSection = 0;

function nextSection(section) {
    const container = document.querySelector('.container');
    currentSection = section;
    container.style.transform = `translateX(-${currentSection * 100}vw)`;
}
