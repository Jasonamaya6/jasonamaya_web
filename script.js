// JavaScript for greeting based on the time of day for the index html
document.addEventListener('DOMContentLoaded', () => {
    const greetingElement = document.getElementById('greeting');
    const now = new Date();
    const hour = now.getHours();
  
    let greeting = "Hello!";
    if (hour >= 5 && hour < 12) {
      greeting = "Good Morning! 🌟";
    } else if (hour >= 12 && hour < 17) {
      greeting = "Good Afternoon! 🌤️";
    } else if (hour >= 17 && hour < 19) {
      greeting = "Good Evening! 🌆";
    } else {
      greeting = "Good Night! 🌙";
    }
  
    greetingElement.textContent = greeting;
  });
  

/* Script that will helps flip the experience html section */
document.addEventListener('DOMContentLoaded', () => {
    const professionalTab = document.getElementById('professional-tab');
    const extracurricularTab = document.getElementById('extracurricular-tab');
    const professionalContent = document.getElementById('professional-content');
    const extracurricularContent = document.getElementById('extracurricular-content');

    professionalTab.addEventListener('click', () => {
      professionalTab.classList.add('active');
      extracurricularTab.classList.remove('active');
      professionalContent.style.display = 'block';
      extracurricularContent.style.display = 'none';
    });

    extracurricularTab.addEventListener('click', () => {
      extracurricularTab.classList.add('active');
      professionalTab.classList.remove('active');
      extracurricularContent.style.display = 'block';
      professionalContent.style.display = 'none';
    });
  });


  
  