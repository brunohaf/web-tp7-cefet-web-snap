const markCheckboxClassQuery = '#visibilidade-das-marcacoes';
const ocultMarksQuery = '.marcacao'
const selectedclassTag = 'selecionada';
const sectionControls = 'section.controles';
const markCheckedBoxEl = document.querySelector(markCheckboxClassQuery);
const sectionControlsEl = document.querySelector(sectionControls);
const marksEl = document.querySelectorAll(ocultMarksQuery);

Object.defineProperty(Element.prototype, 'setMarkingPositionProperties',{
    value: function setMarkingPositionProperties(referencePropertiesData) {
        let referenceStyle = referencePropertiesData.style;
        this.querySelector('#y-da-marcacao').value = parseInt(referenceStyle.top)
        this.querySelector('#x-da-marcacao').value = parseInt(referenceStyle.left)
        this.querySelector('#largura-da-marcacao').value = parseInt(referenceStyle.width)
        this.querySelector('#altura-da-marcacao').value = parseInt(referenceStyle.width)
    },
    writable: true,
    configurable: true
});

const toggleMarks = (evt) => {
    let targetEl = evt.currentTarget;
    marksEl[0].parentNode.classList.toggle(targetEl.value);
}

const selectMarks = (evt) => {
    let targetEl = evt.currentTarget;
    targetEl.classList.toggle(selectedclassTag);
    sectionControlsEl.setMarkingPositionProperties(targetEl)
}

markCheckedBoxEl.addEventListener('change', toggleMarks);
marksEl.forEach(mark => mark.addEventListener('click', selectMarks));
