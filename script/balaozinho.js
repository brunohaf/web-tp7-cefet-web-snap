const marksQuery = '.marcacao'
const baloonQuery = '#balaozinho'
const baloonEl = document.querySelector(baloonQuery);
const marksListEl = document.querySelectorAll(marksQuery);

const showBaloonContent = (evt) => {
    let targetMarkElAttribs = evt.currentTarget.dataset;
    baloonEl.style.color = targetMarkElAttribs.cor;
    baloonEl.style.top = `${evt.pageY}px`;
    baloonEl.style.left = `${evt.pageX}px`;
    baloonEl.innerHTML = 
        `<h2>${targetMarkElAttribs.titulo}</h2>
        <p>${targetMarkElAttribs.conteudo}</p>`
        console.log(baloonEl)
}

const hideBaloonContent = () => {
    baloonEl.innerHTML = "";
}

marksListEl.forEach(mark => mark.addEventListener('mouseover', showBaloonContent));
marksListEl.forEach(mark => mark.addEventListener('mouseout', hideBaloonContent));