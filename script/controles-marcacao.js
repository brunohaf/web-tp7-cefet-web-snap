const markCheckboxClassQuery = '#visibilidade-das-marcacoes';
const ocultMarksQuery = '.marcacao'
const selectedclassTag = 'selecionada';
const sectionControls = 'section.controles';
const dynamicInputsQuery = 'select,input:not([type="checkbox"]):not(textarea)';
const dynamicInputEls = document.querySelectorAll(dynamicInputsQuery);
const markCheckedBoxEl = document.querySelector(markCheckboxClassQuery);
const sectionControlsEl = document.querySelector(sectionControls);
const marksEl = document.querySelectorAll(ocultMarksQuery);

Object.defineProperty(Element.prototype, 'updateControlSectionMarkingProperties',{
    value: function updateControlSectionMarkingProperties(markingReferenceProperties) {
        let referenceStyle = markingReferenceProperties.style;
        let referenceData = markingReferenceProperties.dataset;
        this.querySelector('#y-da-marcacao').value = parseInt(referenceStyle.top)
        this.querySelector('#x-da-marcacao').value = parseInt(referenceStyle.left)
        this.querySelector('#largura-da-marcacao').value = parseInt(referenceStyle.width)
        this.querySelector('#altura-da-marcacao').value = parseInt(referenceStyle.height)
        this.querySelector('#titulo-da-marcacao').value = referenceData.titulo;
        this.querySelector('#conteudo-da-marcacao').value = referenceData.conteudo;
        this.querySelector('#cor-da-marcacao').value = referenceData.cor;
        let radios = this.querySelectorAll('input[type="radio"]')
        let targetRadio = markingReferenceProperties.classList.contains("formato-oval") ? 'formato-oval' : 'formato-retangular'
        Array.prototype.find.call(radios, r => r.value === targetRadio).checked = true;
    },
    writable: true,
    configurable: true
});


Object.defineProperty(Element.prototype, 'setMarkingProperties',{
    value: function setMarkingProperties(property, controlReferenceProperties) {
        let markElement = this;
        if(property.type === 'radio'){
            let radios = controlReferenceProperties.querySelectorAll('input[type="radio"]')
            markElement.classList.add(Array.prototype.find.call(radios, r => r.checked).value);
            markElement.classList.remove(Array.prototype.find.call(radios, r => !r.checked).value);
        }
        else{
            let propertyId = `#${property.id}`
            const pxValue = `${controlReferenceProperties.querySelector(propertyId).value}px`;
            const value = controlReferenceProperties.querySelector(propertyId).value;
            let referenceStyle = markElement.style;
            const propertyToUpdateStrategy = {
                '#y-da-marcacao': () => referenceStyle.top = pxValue,
                '#x-da-marcacao':() => referenceStyle.left = pxValue,
                '#largura-da-marcacao':() => referenceStyle.width = pxValue,
                '#altura-da-marcacao':() => referenceStyle.height = pxValue,
                '#titulo-da-marcacao':() => markElement.dataset.titulo = value,
                '#conteudo-da-marcacao':() => markElement.dataset.conteudo = value,
                '#cor-da-marcacao':() => markElement.dataset.cor = value,
                default: () => false
            } 
            let task = propertyToUpdateStrategy[propertyId] || propertyToUpdateStrategy['default'];
            task();
        }
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
    sectionControlsEl.updateControlSectionMarkingProperties(targetEl);
}

const updateMarks = (evt) => {
    let targetEl = evt.currentTarget;
    let selectedMarks = Array.from(marksEl).filter(mark => mark.classList.contains(selectedclassTag));
    selectedMarks.forEach(mark => mark.setMarkingProperties(targetEl, sectionControlsEl))
}

markCheckedBoxEl.addEventListener('change', toggleMarks);
marksEl.forEach(mark => mark.addEventListener('click', selectMarks));
dynamicInputEls.forEach(input => input.addEventListener('change', updateMarks));