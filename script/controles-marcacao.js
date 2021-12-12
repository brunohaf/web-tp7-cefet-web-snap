const markCheckboxClassQuery = '#visibilidade-das-marcacoes';
const ocultMarksQuery = '.marcacao'
const selectedclassTag = 'selecionada';
const sectionControls = 'section.controles';
const markCheckedBoxEl = document.querySelector(markCheckboxClassQuery);
const sectionControlsEl = document.querySelector(sectionControls);
const marksEl = document.querySelectorAll(ocultMarksQuery);

Object.defineProperty(Element.prototype, 'setControlSectionProperties',{
    value: function setControlSectionProperties(referencePropertiesData) {
        let referenceStyle = referencePropertiesData.style;
        let referenceData = referencePropertiesData.dataset;
        this.querySelector('#y-da-marcacao').value = parseInt(referenceStyle.top)
        this.querySelector('#x-da-marcacao').value = parseInt(referenceStyle.left)
        this.querySelector('#largura-da-marcacao').value = parseInt(referenceStyle.width)
        this.querySelector('#altura-da-marcacao').value = parseInt(referenceStyle.width)
        this.querySelector('#titulo-da-marcacao').value = referenceData.titulo;
        this.querySelector('#conteudo-da-marcacao').value = referenceData.conteudo;
        this.querySelector('#cor-da-marcacao').value = referenceData.cor;
        let radios = this.querySelectorAll('input[type="radio"]')
        let targetRadio = referencePropertiesData.classList.contains("formato-oval") ? 'formato-oval' : 'formato-retangular'
        Array.prototype.find.call(radios, r => r.value === targetRadio).checked = true;
        console.log(hey)
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
    sectionControlsEl.setControlSectionProperties(targetEl);
}

markCheckedBoxEl.addEventListener('change', toggleMarks);
marksEl.forEach(mark => mark.addEventListener('click', selectMarks));
