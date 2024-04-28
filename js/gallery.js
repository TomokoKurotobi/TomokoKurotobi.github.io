

var galleryItems = [
  {
    id: 'cpp',
    src: 'figures/C++_Logo.png',
    alt: 'Programming',
    caption: 'C++',
    heading: '',
    text:
        'C++ is my main programming language as I have been using it for more than 10 years. For high performance computing such as computer vision, decision making algorithms for robots, and controlling target hardware, I have used C++ extensively. I am also familiar with the new standards including C++17, C++20. By using object-oriented feature of C++, I have developed many reusable and scalable libraries. With the help of existing libraries such as OpenCV, CUDA, and Qt, I have developed many applications ranging from algorithm development to user interfaces. My biggest achievement of this language is developing a retina tracking algorithm for a medical device.'
  },  // Created python and JS compatible library
  {
    id: 'python',
    src: 'figures/Python_Logo.png',
    alt: 'Programming',
    caption: 'Python',
    heading: '',
    text:
        'Python is my first choice for prototyping computer vision algorithms and analyzing and visualizing data. As well as C++, I have been using Python for more than 10 years. This powerful language for data visualization helped me to verify and validate the performance of algorithms I developed, and to communicate with other team members. Graphical user interfaces with Plotly and Dash were implemented to check the image quality from the medical imaging device constantly and quickly.'
  },
  {
    id: 'javascript',
    src: 'figures/JavaScript_Logo.png',
    alt: 'Programming',
    caption: 'JavaScript',
    heading: '',
    text:
        'With only a few years of experience, JavaScript is becoming my new favorite language. I learnt and started to use this language to maintain and develop a web-based user interface for a medical device. The user interface was developed with React.js and Electron.js framework to bridge the C++ based high performant algorithms to the user. This GUI consists of multiple pages to control the device for intuitive operation.'
  },
  {
    id: 'typescript',
    src: 'figures/TypeScript_Logo.png',
    alt: 'Programming',
    caption: 'TypeScript',
    heading: '',
    text:
        'As a superset of JavaScript, TypeScript is a natural choice for me to use. For developing a GUI that was mentioned in the JavaScript section, I used TypeScript to make the code more robust and maintainable. The type checking feature of TypeScript helped me to find bugs before running the code, especially when the code base became larger, and the number of developers increased.'
  },
  {
    id: 'opencv',
    src: 'figures/OpenCV_Logo.png',
    alt: 'Framework',
    caption: 'OpenCV',
    heading: '',
    text:
        'For computer vision tasks, OpenCV is my go-to library. I have been using OpenCV for more than 10 years. I have developed many algorithms for object detection, tracking, and image processing. This library the enhanced development efficiency for any image processing tasks such as a retina tracking algorithm, an auto-focus algorithm, and a target detection for calibration process. Not only for algorithm development, but also for testing, debugging and visualizing the system status, OpenCV is a powerful tool for me as it provides a wide range of visualization and control tools.'
  },
  {
    id: 'cuda',
    src: 'figures/CUDA_Logo.png',
    alt: 'Framework',
    caption: 'CUDA SDK',
    heading: '',
    text:
        'CUDA SDK is a powerful tool for parallel computing on NVIDIA GPUs. With this SDK, I have developed several high performance computing algorithms for image processing. For example, the advanced retina tracking that was developed for a medical device equipped with a high-speed image filtering algorithms that I implemented to enhance features of the retina, and feature detection and matching algorithms for real-time registration operation. Also, the Nsight Systems has been used to profile the performance and a bottle neck of the algorithms to optimize and debug the code.'
  },
  {
    id: 'qt',
    src: 'figures/Qt_Logo.png',
    alt: 'Framework',
    caption: 'Qt',
    heading: '',
    text:
        'For a C++ developer, Qt is one of the go-to framework to develop a user interface seamlessly. I found Qt designer is very useful to design the layout of the GUI and to connect the signals and slots between the GUI and the backend code. One of the achievements of using Qt was successfully delivering a GUI for a clinical trial of a medical imaging device to collect real data.'
  },
  {
    id: 'react',
    src: 'figures/React_Logo.webp',
    alt: 'Framework',
    caption: 'React',
    heading: '',
    text:
        'React and Electron framework was also used for the medical imaging device. Since this is JavaScript based framework and the backend was written in C++, NodeAPI was used to convert the C++ API to JavaScript API. '
  },
  {
    id: 'cmake',
    src: 'figures/CMake_Logo.png',
    alt: 'Framework',
    caption: 'CMake',
    heading: '',
    text:
        'CMake have been used to configure software projects. CMake can be used on mutliple platforms to generate build files for the target platform, which Ubuntu and Windows OS in my experience. By using CMake, I could easily configure the build environment for the software that uses CUDA, OpenCV, Pytorch and Qt libraries. Also installing the software and dependencies into one folder was easy by using this tool.'
  },
  {
    id: 'ros',
    src: 'figures/ROS_Logo.png',
    alt: 'Framework',
    caption: 'ROS',
    heading: '',
    text:
        'ROS is a powerful tool for robotics. I have used ROS to develop algorithms for robots and automated systems at my early career. ROS provides microservices to communicate between different parts of the system, which made it easy to develop and test the algorithms in complex systems. Also, this provides a wide range of libraries and tools for visualization, debugging and logging, which also enhanced the efficiency of teamwork.'
  },
  {
    id: 'github',
    src: 'figures/GitHub_Logo.png',
    alt: 'Framework',
    caption: 'GitHub',
    heading: '',
    text:
        'GitHub made me easy to manage the code base and collaborate with other developers. Especially when we have several developing branches, rebasing feature of GitHub helped me to merge the branches without losing the history of the code. For the first time of using this, there was a bit of learning curve, but after that, I\'ve been truly grateful for this tool on daily basis. GitHub Actions to automate the testing and deployment process are one of the most wonderful features of it. This feature helped the team to test the software on the actual system overnight to catch issues on branches under pull request efficiently since the system was shared by everyone and time was limited.'
  },
  {
    id: 'grpc',
    src: 'figures/gRPC_Logo.png',
    alt: 'Framework',
    caption: 'gRPC',
    heading: '',
    text:
        'To combine multiple processes into one integrated software, gRPC is a great framework. I am just new to this framework, but it was easy enough to start wrapping one of the core software\'s API to communicate with the user interface. By using protocol buffer, I could easily define the communication protocol between the processes and generate the code for both C++ and JavaScript.'
  },
  // {
  //   id: 'node',
  //   src: 'figures/Node_Logo.png',
  //   alt: 'Framework',
  //   caption: 'Node.js',
  //   heading: '',
  //   text:
  //       'Node.js and JavaScript made it easier to develop a packaging tool
  //       and a test code for the software.'
  // },
  {
    id: 'visualstudio',
    src: 'figures/VisualStudio_Logo.png',
    alt: 'IDE',
    caption: 'Visual Studio',
    heading: '',
    text:
        'Visual Studio provides powerful tools not only coding and building a project, but also profiling the outcome. With Concurrency Visualizer, I have profiled the performance of the algorithms and optimized the code. More details are mentioned in troubleshooting and optimization section, but visualizing the task management and assignment to each CPU core, I could find the bottle neck of the core software of the medical device, and resolved the issue. The Visual Studio Code is also my favorite editor for developing code.'
  },
  {
    id: 'ubuntu',
    src: 'figures/Ubuntu_Logo.png',
    alt: 'Operating System',
    caption: 'Ubuntu',
    heading: '',
    text:
        'During my master degrees and the early stage of my career, I used Ubuntu as my main operating system. I have developed many algorithms for robotics, computer vision, and control systems. I am also familiar with its debugger called gdb, and its package manager called apt.'
  },
  {
    id: 'windows',
    src: 'figures/Windows_Logo.png',
    alt: 'Operating System',
    caption: 'Windows',
    heading: '',
    text:
        'Windows OS was the main operating system for a medical device in my recent career. Visual Studio and it\'s debugger, profiler were used to developing and optimizing the software. Package manager called Chocolatey was used to install and manage some software.'
  },
  {
    id: 'troubleshooting',
    src: 'figures/Troubleshooting_Logo.png',
    alt: 'Operating System',
    caption: 'Troubleshooting',
    heading: 'Troubleshooting',
    text:
        'Troubleshooting is one of my strongest skills. I have been involved in many projects that required troubleshooting skills ranging from compiling failure such as linking error, runtime error such as missing dependencies, segmentation fault, and system failure such as memory leak. By maximizing the use of profiling and debugging tools, I have resolved the issues efficiently. Not only using the tools, but also naiive way such as commenting out part of the code and watching memory usage and CPU usage difference helped me to identify the source of the issue. Troubleshooting tasks require focus on details and logical thinking, which I acquired thtoughout my career.'
  },
  {
    id: 'optimization',
    src: 'figures/Optimization_Logo.png',
    alt: 'Operating System',
    caption: 'Optimization',
    heading: 'Optimization',
    text:
        'By checking the software both statically and dynamically, I have optimized the code for performance and memory usage. For example, I have optimized the performance of the retina tracking algorithm by profiling the code with Visual Studio Concurrency Visualizer and NVIDIA Nsight Systems, and updated the code base to use proper number of threads. My optimization is not only using the proper number of threads but also optimizing an algorithm to minimize the resource usage. For example, I replace a chain of algorithms with lookup tables or applying pre combined matrices to reduce the number of operations. The biggest achievement of optimization is reducing the CPU usage of the core software of the medical device from 100% to 30% by identifying the source of the issue and replacing the part with alternative algorithm.'
  }
];

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
  if (heading == '') {
    textNode = document.createTextNode(' Experience');
  }
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
    let popup =
        createPopup(item.id, item.src, item.alt, item.heading, item.text);
    carouselItem.appendChild(popup);
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

createGallery('gallery-grid');          // Pass id to attach gallery grid
createGalleryPopups('gallery-popups');  // Pass id to attach gallery popups

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
      if (!$(event.target).closest('.popup-content').length &&
          !$(event.target).closest('#carousel-control-prev').length &&
          !$(event.target).closest('#carousel-control-next').length) {
        closePopup();
      }
    }
  });
});
