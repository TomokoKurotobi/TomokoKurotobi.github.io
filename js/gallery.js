

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
    id: 'typescript',
    src: 'figures/TypeScript_Logo.png',
    alt: 'Programming',
    caption: 'TypeScript',
    heading: 'TypeScript Programming',
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
    id: 'react',
    src: 'figures/React_Logo.webp',
    alt: 'Framework',
    caption: 'React',
    heading: 'React Framework',
    text: 'This is a popup window!'
  },
  {
    id: 'cmake',
    src: 'figures/CMake_Logo.png',
    alt: 'Framework',
    caption: 'CMake',
    heading: 'CMake Framework',
    text: 'This is a popup window!'
  },
  {
    id: 'ros',
    src: 'figures/ROS_Logo.png',
    alt: 'Framework',
    caption: 'ROS',
    heading: 'ROS Framework',
    text: 'This is a popup window!'
  },
  {
    id: 'github',
    src: 'figures/GitHub_Logo.png',
    alt: 'Framework',
    caption: 'GitHub',
    heading: 'GitHub Framework',
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
    id: 'node',
    src: 'figures/Node_Logo.png',
    alt: 'Framework',
    caption: 'Node.js',
    heading: 'Node.js Framework',
    text: 'This is a popup window!'
  },
  {
    id: 'visualstudio',
    src: 'figures/VisualStudio_Logo.png',
    alt: 'IDE',
    caption: 'Visual Studio',
    heading: 'Visual Studio IDE',
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
  {
    id: 'troubleshooting',
    src: 'figures/Troubleshooting_Logo.png',
    alt: 'Operating System',
    caption: 'Troubleshooting',
    heading: 'Troubleshooting Operating System',
    text: 'This is a popup window!'
  },
  {
    id: 'optimization',
    src: 'figures/Optimization_Logo.png',
    alt: 'Operating System',
    caption: 'Optimization',
    heading: 'Optimization Operating System',
    text: 'This is a popup window!'
  }
];

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

  // Popup content
  let popupContent = document.createElement('div');
  popupContent.className = 'popup-content';

  let h2 = document.createElement('h2');

  let image = document.createElement('img');
  image.src = src;
  image.alt = alt;
  h2.appendChild(image);

  let textNode = document.createTextNode(heading);
  h2.appendChild(textNode);

  let p = document.createElement('p');
  p.textContent = text;

  let button = document.createElement('button');
  button.className = 'btn btn-lg btn-primary pull-right';
  button.id = 'close';
  button.textContent = 'Close';

  popupContent.appendChild(h2);
  popupContent.appendChild(p);
  popupContent.appendChild(button);

  popup.appendChild(popupContent);

  return popup;
}

function createGallery() {
  let gallery = document.getElementById('gallery-grid');
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let galleryItem =
        createGalleryItem(item.id, item.src, item.alt, item.caption);
    gallery.appendChild(galleryItem);
    // let popup =
    //     createPopup(item.id, item.src, item.alt, item.heading, item.text);
    // gallery.appendChild(popup);
    // let buttons = createPopupButtons();
    // popup.appendChild(buttons);
  }
}


function createPopupButtons() {
  let buttons = document.createElement('div');
  buttons.className = 'buttons';

  let cross = document.createElement('div');
  cross.className = 'fa-solid fa-xmark btn-cross';
  cross.id = 'cross';

  let prv = document.createElement('div');
  prv.className = 'fa-solid fa-chevron-left btn-prv';
  prv.id = 'prv';

  let nxt = document.createElement('div');
  nxt.className = 'fa-solid fa-chevron-right btn-nxt';
  nxt.id = 'nxt';

  buttons.appendChild(cross);
  buttons.appendChild(prv);
  buttons.appendChild(nxt);
  return buttons;
}

function createGalleryPopups() {
  let popups = document.getElementById('gallery-popups');
  for (let i = 0; i < items.length; i++) {
    let item = items[i];
    let popup =
        createPopup(item.id, item.src, item.alt, item.heading, item.text);
    popups.appendChild(popup);
    let buttons = createPopupButtons();
    popup.appendChild(buttons);
  }
}

createGallery();
createGalleryPopups();

$(document).ready(function() {
  items.forEach(function(item, index) {
    var popup = $('#' + item.id + '-popup');
    $('#' + item.id).click(function(e) {
      e.stopPropagation();
      popup.css('opacity', 0);
      popup.css('display', 'block');
      popup.animate({opacity: 1}, 500);
    });
    popup.find('#close').click(function() {
      popup.hide();
    });
    popup.find('#cross').click(function() {
      popup.hide();
    });
    popup.find('#prv').click(function() {
      popup.hide();
      var prevIndex = (index - 1 + items.length) % items.length;
      var prevPopup = $('#' + items[prevIndex].id + '-popup');
      // move from left to right
      prevPopup.css('left', '-100%');
      prevPopup.show();
      prevPopup.animate({left: '0'}, 500);
    });
    popup.find('#nxt').click(function() {
      popup.hide();
      var nextIndex = (index + 1) % items.length;
      var nextPopup = $('#' + items[nextIndex].id + '-popup');
      // move from right to left
      nextPopup.css('left', '100%');
      nextPopup.show();
      nextPopup.animate({left: '0'}, 500);
    });
  });
});
