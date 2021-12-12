const notedPhotoQuery = '.foto-anotada > img';
const filterSelectQuery = 'select#filtro-da-foto';
const fileInputQuery = 'input[type="file"]';
const selectEl = document.querySelector(filterSelectQuery);
let notedPhotoEl = document.querySelector(notedPhotoQuery);

const changePhotoFilter = () => {
    notedPhotoEl.style.filter = selectEl.value;
}

function readImage(file) {
    // Check if the file is an image.
    if (file.type && !file.type.startsWith('image/')) {
      console.log('File is not an image.', file.type, file);
      return;
    }
  
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        notedPhotoEl.src = event.target.result;
    });
    reader.readAsDataURL(file);
  }

  const fileSelector = document.querySelector(fileInputQuery);
  fileSelector.addEventListener('change', (event) => {
    const fileList = event.target.files;
    readImage(fileList[0])
  });

selectEl.addEventListener('change', changePhotoFilter);