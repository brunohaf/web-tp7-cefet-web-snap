const markCheckboxClassQuery = '#visibilidade-das-marcacoes';
let ocultMarksQuery = '.marcacao'
let markCheckedBoxEl = document.querySelector(markCheckboxClassQuery);
let marksEl = document.querySelector(ocultMarksQuery);

const enableDisableMarks = (evt) => {
    let targetEl = evt.currentTarget;
    marksEl.parentNode.classList.toggle(targetEl.value)
    console.log(marksEl)
}

markCheckedBoxEl.addEventListener('change', enableDisableMarks);