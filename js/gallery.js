
function createGalleryItem(id, src, alt, caption) {
  let galleryItem = document.createElement('li');
  galleryItem.className = 'gallery-item';
  galleryItem.id = id;

  let image = document.createElement('img');
  image.src = src;
  image.alt = alt;

  let figCaption = document.createElement('figcaption');
  figCaption.textContent = caption;

  galleryItem.appendChild(image);
  galleryItem.appendChild(figCaption);

  return galleryItem;
}

function createPopup(id, src, alt, heading, text) {
  let popup = document.createElement('div');
  popup.className = 'popup';
  popup.id = id + '-popup';

  let popupContent = document.createElement('div');
  popupContent.className = 'popup-content';

  let cross = document.createElement('span');
  cross.className = 'cross';
  cross.id = 'cross';
  cross.textContent = '×';

  let image = document.createElement('img');
  image.src = src;
  image.alt = alt;

  let h2 = document.createElement('h2');
  h2.textContent = heading;

  let p = document.createElement('p');
  p.textContent = text;

  let button = document.createElement('button');
  button.className = 'btn btn-lg btn-primary pull-right';
  button.id = 'close';
  button.textContent = 'Close';

  popupContent.appendChild(cross);
  popupContent.appendChild(image);
  popupContent.appendChild(h2);
  popupContent.appendChild(p);
  popupContent.appendChild(button);

  popup.appendChild(popupContent);

  return popup;
}

var items = [
  {
    id: 'cpp',
    src: 'figures/C++_Logo.png',
    alt: 'Programming',
    caption: 'C++',
    heading: 'C++ Programming',
    text: 'This is a popup window!'
  },
  {
    id: 'python',
    src: 'figures/Python_Logo.png',
    alt: 'Programming',
    caption: 'Python',
    heading: 'Python Programming',
    text: 'This is a popup window!'
  },
  {
    id: 'javascript',
    src: 'figures/JavaScript_Logo.png',
    alt: 'Programming',
    caption: 'JavaScript',
    heading: 'JavaScript Programming',
    text: 'This is a popup window!'
  },
  {
    id: 'opencv',
    src: 'figures/OpenCV_Logo.png',
    alt: 'Framework',
    caption: 'OpenCV',
    heading: 'OpenCV Framework',
    text: 'This is a popup window!'
  },
  {
    id: 'cuda',
    src: 'figures/CUDA_Logo.png',
    alt: 'Framework',
    caption: 'CUDA SDK',
    heading: 'CUDA SDK Framework',
    text: 'This is a popup window!'
  },
  {
    id: 'qt',
    src: 'figures/Qt_Logo.png',
    alt: 'Framework',
    caption: 'Qt',
    heading: 'Qt Framework',
    text: 'This is a popup window!'
  },
  {
    id: 'grpc',
    src: 'figures/gRPC_Logo.png',
    alt: 'Framework',
    caption: 'gRPC',
    heading: 'gRPC Framework',
    text: 'This is a popup window!'
  },
  {
    id: 'ubuntu',
    src: 'figures/Ubuntu_Logo.png',
    alt: 'Operating System',
    caption: 'Ubuntu',
    heading: 'Ubuntu Operating System',
    text: 'This is a popup window!'
  },
  {
    id: 'windows',
    src: 'figures/Windows_Logo.png',
    alt: 'Operating System',
    caption: 'Windows',
    heading: 'Windows Operating System',
    text: 'This is a popup window!'
  },
];


function createGallery() {
  let gallery = document.getElementById('gallery-grid');
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let galleryItem =
        createGalleryItem(item.id, item.src, item.alt, item.caption);
    gallery.appendChild(galleryItem);
    let popup =
        createPopup(item.id, item.src, item.alt, item.heading, item.text);
    gallery.appendChild(popup);
  }
}
$(document).ready(function() {
  items.forEach(function(item) {
    var popup = $('#' + item.id + '-popup');
    $('#' + item.id).click(function() {
      popup.show();
    });
    popup.find('#cross').click(function() {
      popup.hide();
    });
    popup.find('#close').click(function() {
      popup.hide();
    });
  });
});
createGallery();
