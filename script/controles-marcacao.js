const markCheckboxClassQuery = '#visibilidade-das-marcacoes';
const ocultMarksQuery = '.marcacao'
const selectedclassTag = 'selecionada';
const markCheckedBoxEl = document.querySelector(markCheckboxClassQuery);
const marksEl = document.querySelectorAll(ocultMarksQuery);

const toggleMarks = (evt) => {
    let targetEl = evt.currentTarget;
    marksEl[0].parentNode.classList.toggle(targetEl.value);
}

const selectMarks = (evt) => {
    let targetEl = evt.currentTarget;
    targetEl.classList.toggle(selectedclassTag);
    console.log(targetEl);
}

markCheckedBoxEl.addEventListener('change', toggleMarks);
marksEl.forEach(mark => mark.addEventListener('click', selectMarks));