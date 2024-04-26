function getLastLoginStr() {
  var currentDate = new Date();
  var day = currentDate.toLocaleDateString('en-US', {weekday: 'short'});
  var month = currentDate.toLocaleDateString('en-US', {month: 'short'});
  var date = currentDate.getDate();
  var time = currentDate.toLocaleTimeString();
  var terminalInfo = 'ttys007';
  var formattedDate = 'Last login: ' + day + ' ' + month + ' ' + date + ' ' +
      time + ' on ' + terminalInfo;
  return formattedDate;
}
function typingEffect(id, originalText, addingText, typingSpeed, timeout) {
  var typingElement = document.getElementById(id);
  var printText = originalText;
  if (typingSpeed == 0) {
    typingElement.innerHTML = printText + addingText;
  } else {
    for (var i = 0; i < addingText.length; i++) {
      setTimeout(function(char) {
        return function() {
          printText += char;
          typingElement.innerHTML = printText;
        };
      }(addingText.charAt(i)), i * typingSpeed);
    }
  }
  return new Promise(
      resolve =>
          setTimeout(resolve, addingText.length * typingSpeed + timeout));
}
async function typeBackground() {
  const lastLogin = getLastLoginStr();
  const console_text_prefix = 'Tomoko@World ~ % ';
  let console_text = '';
  const target_id = 'terminal-contents';
  const new_line = '<br>';

  const typing_list = [
    {contents: lastLogin, typingSpeed: 0, timeout: 0, break: true},
    {contents: console_text_prefix, typingSpeed: 0, timeout: 0, break: false},
    {contents: 'ls', typingSpeed: 50, timeout: 500, break: true},
    {contents: 'information.txt', typingSpeed: 0, timeout: 0, break: true},
    {contents: console_text_prefix, typingSpeed: 0, timeout: 0, break: false},
    {
      contents: 'cat information.txt',
      typingSpeed: 50,
      timeout: 500,
      break: true
    },
    {contents: '', typingSpeed: 0, timeout: 0, break: true},
    {contents: 'Tomoko Kurotobi', typingSpeed: 0, timeout: 0, break: true},
    {contents: 'Software Developer', typingSpeed: 0, timeout: 0, break: true},
    {
      contents: 'Computer Languages: C++, Python, JavaScript',
      typingSpeed: 0,
      timeout: 0,
      break: true
    },
    {
      contents: 'Framework: CUDA SDK, OpenCV, Qt, React.js',
      typingSpeed: 0,
      timeout: 0,
      break: true
    },
    {
      contents:
          'Tools: Git, CMake, VS concurrency Visualizer, NVIDIA Nsight Systems',
      typingSpeed: 0,
      timeout: 0,
      break: true
    },
    {
      contents: 'Troubleshooting, Debugging, Code Optimization',
      typingSpeed: 0,
      timeout: 0,
      break: true
    },
    {contents: '', typingSpeed: 0, timeout: 0, break: true},
    {contents: console_text_prefix, typingSpeed: 0, timeout: 0, break: false},
    {
      contents:
          'echo "#include &lt;iostream&gt;\nint main(){std::cout << "Hello, World!" << std::endl; return 0;}" > hello.cpp',
      typingSpeed: 50,
      timeout: 500,
      break: true
    },
    {contents: console_text_prefix, typingSpeed: 0, timeout: 0, break: false},
    {
      contents: 'g++ hello.cpp -o hello',
      typingSpeed: 50,
      timeout: 500,
      break: true
    },
    {contents: console_text_prefix, typingSpeed: 0, timeout: 0, break: false},
    {contents: './hello', typingSpeed: 50, timeout: 500, break: true},
    {contents: 'Hello, World!', typingSpeed: 0, timeout: 0, break: true},
    {contents: console_text_prefix, typingSpeed: 0, timeout: 0, break: false},
  ];

  for (let i = 0; i < typing_list.length; i++) {
    const text = typing_list[i];
    await typingEffect(
        target_id, console_text, text.contents, text.typingSpeed, text.timeout);
    console_text += text.contents;
    if (text.break) {
      console_text += new_line;
    }
  }
}
