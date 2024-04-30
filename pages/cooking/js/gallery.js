
var fileBaseNames = [
  'IMG_20200109_123759.jpg', 'IMG_20200109_131729.jpg',
  'IMG_20200110_130236.jpg', 'IMG_20200114_125757.jpg',
  'IMG_20200114_135029.jpg', 'IMG_20200115_123509.jpg',
  'IMG_20200115_123821.jpg', 'IMG_20200117_133458.jpg',
  'IMG_20200120_141742.jpg', 'IMG_20200121_133342.jpg',
  'IMG_20200121_133345.jpg', 'IMG_20200122_131658.jpg',
  'IMG_20200123_115149.jpg', 'IMG_20200123_124408.jpg',
  'IMG_20200124_132614.jpg', 'IMG_20200127_121048.jpg',
  'IMG_20200127_125016.jpg', 'IMG_20200128_123514.jpg',
  'IMG_20200129_124523.jpg', 'IMG_20200130_123911.jpg',
  'IMG_20200130_131714.jpg', 'IMG_20200131_130538.jpg',
  'IMG_20200131_134503.jpg', 'IMG_20200203_123459.jpg',
  'IMG_20200203_132512.jpg', 'IMG_20200207_115853.jpg',
  'IMG_20200207_123601.jpg', 'IMG_20200210_123154.jpg',
  'IMG_20200210_132047.jpg', 'IMG_20200211_122430.jpg',
  'IMG_20200211_131637.jpg', 'IMG_20200212_123630.jpg',
  'IMG_20200218_115150.jpg', 'IMG_20200218_122309.jpg',
  'IMG_20200219_122008.jpg', 'IMG_20200219_132709.jpg',
  'IMG_20200220_124740.jpg', 'IMG_20200224_114111.jpg',
  'IMG_20200224_123338.jpg', 'IMG_20200225_130100.jpg',
  'IMG_20200225_134424.jpg', 'IMG_20200226_120712.jpg',
  'IMG_20200226_125009.jpg', 'IMG_20200227_124400.jpg',
  'IMG_20200228_121922.jpg', 'IMG_20200228_125526.jpg',
  'IMG_20200302_121034.jpg', 'IMG_20200302_124631.jpg',
  'IMG_20200303_121849.jpg', 'IMG_20200303_130228.jpg',
  'IMG_20200706_112657.jpg', 'IMG_20200707_110929.jpg',
  'IMG_20200709_120312.jpg', 'IMG_20200713_103711.jpg',
  'IMG_20200714_114254.jpg', 'IMG_20200715_112737.jpg',
  'IMG_20200717_114853.jpg', 'IMG_20200721_113345.jpg',
  'IMG_20200721_121848.jpg', 'IMG_20200722_120252.jpg',
  'IMG_20200804_112203.jpg', 'IMG_20200805_111039.jpg',
  'IMG_20200806_120401.jpg', 'IMG_20200807_170516.jpg',
  'IMG_20200810_105915.jpg', 'IMG_20200811_112641.jpg',
  'IMG_20200811_151947.jpg', 'IMG_20200812_111150.jpg',
  'IMG_20200812_155441.jpg', 'IMG_20200818_110416.jpg',
  'IMG_20200819_111815.jpg', 'IMG_20200819_111858.jpg',
  'IMG_20200819_160130.jpg', 'IMG_20200819_161959.jpg',
  'IMG_20200820_115608.jpg', 'IMG_20200820_152744.jpg',
  'IMG_20200821_161134.jpg', 'IMG_20200824_104604.jpg',
  'IMG_20200825_104611.jpg', 'IMG_20200825_104856.jpg',
  'IMG_20200827_111837.jpg', 'IMG_20200827_143104.jpg',
  'IMG_20200922_114327.jpg', 'IMG_20200922_115430.jpg',
  'IMG_20200922_120547.jpg', 'IMG_20200924_113511.jpg',

];
var galleryItems = [
  // {
  //   id: 'gallery-item-1',
  //   src: './figures/gallery/1.jpg',
  //   alt: 'Image 1',
  //   caption: 'Image 1',
  //   heading: 'Image 1',
  //   text: 'Image 1'
  // }
];
const baseURL =
    'https://tomokokurotobi.github.io/pages/cooking/figures/gallery/';


function fillArray(fileNames) {
  fileNames.forEach((fileName, index) => {
    let item = {
      id: 'gallery-item-' + (index + 1).toString(),
      src: fileName,
      alt: '',
      caption: '',
      heading: '',
      text: ''
    };
    galleryItems.push(item);
  });
}

// Function to fetch a single file
function fetchFile(baseName) {
  return new Promise(function(resolve, reject) {
    var url = baseURL + baseName;
    $.ajax({
      url: url,
      success: function(data) {
        // Resolve the promise with the fetched data
        resolve({name: baseName, data: data});
      },
      error: function() {
        // Reject the promise with an error message
        reject('Error fetching file: ' + url);
      }
    });
  });
}

// Define gallery grid items

function createGalleryItem(id, src, alt, caption) {
  let galleryItem = document.createElement('li');
  galleryItem.className = 'gallery-item wow fadeInUp';
  galleryItem.id = id;

  let image = document.createElement('img');
  image.src = src;
  image.alt = alt;

  let colorOverlay = document.createElement('div');
  colorOverlay.className = 'color-overlay';

  galleryItem.appendChild(image);
  galleryItem.appendChild(colorOverlay);

  return galleryItem;
}

function createGallery(attachTo) {
  let gallery = document.getElementById(attachTo);
  for (let i = 0; i < galleryItems.length; i++) {
    let item = galleryItems[i];
    let galleryItem =
        createGalleryItem(item.id, item.src, item.alt, item.caption);
    gallery.appendChild(galleryItem);
  }
}

// Define gallery popups

function createGalleryPopups(attachTo) {
  // Gallery popups (display control)
  let popups = document.getElementById(attachTo);
  popups.className = 'gallery-popups';

  // Carousel
  let carousel = document.createElement('div');
  carousel.className = 'carousel slide cover-all';
  carousel.id = 'gallery-carousel';
  carousel.setAttribute('data-bs-interval', 'false');
  carousel.setAttribute('data-ride', 'carousel');

  // Carousel inner to hold items
  let carouselInner = document.createElement('div');
  carouselInner.className = 'carousel-inner cover-all';
  for (let i = 0; i < galleryItems.length; i++) {
    let item = galleryItems[i];
    let carouselItem = document.createElement('div');
    carouselItem.className = 'carousel-item cover-all';
    if (i == 0) {
      carouselItem.className += ' active';  // Set first item as active
    }
    carouselItem.id = item.id + '-popup';
    carouselItem.innerHTML =
        '<img src="' + item.src + '" alt="' + item.alt + '">';
    carouselInner.appendChild(carouselItem);
  }
  carousel.appendChild(carouselInner);

  // Carousel controls
  let prev = document.createElement('button');
  prev.className = 'carousel-control-prev';
  prev.type = 'button';
  prev.id = 'carousel-control-prev'
  prev.setAttribute('data-bs-target', '#gallery-carousel');
  prev.setAttribute('data-bs-slide', 'prev');
  prev.innerHTML =
      '<span class="carousel-control-prev-icon" aria-hidden="true"></span><span class="visually-hidden">Previous</span>';

  let next = document.createElement('button');
  next.className = 'carousel-control-next';
  next.id = 'carousel-control-next'
  next.type = 'button';
  next.setAttribute('data-bs-target', '#gallery-carousel');
  next.setAttribute('data-bs-slide', 'next');
  next.innerHTML =
      '<span class="carousel-control-next-icon" aria-hidden="true"></span><span class="visually-hidden">Next</span>';

  carousel.appendChild(prev);
  carousel.appendChild(next);

  popups.appendChild(carousel);
}

var popups = document.getElementById('gallery-popups');

function closePopup() {
  popups.style.display = 'none';
}

function openPopup() {
  popups.style.display = 'block';
}

function isPopupOpen() {
  return popups.style.display == 'block';
}


$(document).ready(function() {
  // Array to store promises for each file
  var promises = [];
  var jpgFiles = [];

  // Create promises for each file and push them into the array
  fileBaseNames.forEach(function(baseName) {
    promises.push(fetchFile(baseName));
  });

  // Handle all promises using Promise.all
  Promise.all(promises)
      .then(function(results) {
        // Handle success when all promises are resolved
        results.forEach(function(result) {
          // Access the fetched data using result.data
          jpgFiles.push(baseURL + result.name);
        });
        fillArray(jpgFiles);
        createGallery('gallery-grid');
        createGalleryPopups('gallery-popups');


        galleryItems.forEach(function(item) {
          var popup = $('#' + item.id + '-popup');
          $('#' + item.id).click(function(e) {
            e.stopPropagation();  // Stop event bubbling
            var activePopup = $('.carousel-item.active');
            activePopup.removeClass('active');
            popup.addClass('active');
            openPopup();
          });
          popup.find('#close').click(function() {
            closePopup();
          });
        });

        $(document).click(function(event) {
          if (isPopupOpen()) {
            if (!$(event.target).closest('.carousel-item img').length &&
                !$(event.target).closest('#carousel-control-prev').length &&
                !$(event.target).closest('#carousel-control-next').length) {
              console.log('close')
              closePopup();
            }
          }
        });
      })
      .catch(function(error) {
        // Handle error when any promise is rejected
        console.error(error);
      });
});
