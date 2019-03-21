'use strict';

const programAccordions = document.querySelectorAll('.program__item');

for (let i = 0; i < programAccordions.length; i++) {
  programAccordions[i].addEventListener("click", function(event) {
    console.log(event.target.className);
    if(event.target.className === 'program-toggle'){
      this.classList.toggle("active");
    }

  });
}

