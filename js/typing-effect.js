function getLastLoginStr() {
    var currentDate = new Date();
    var day = currentDate.toLocaleDateString('en-US', { weekday: 'short' });
    var month = currentDate.toLocaleDateString('en-US', { month: 'short' });
    var date = currentDate.getDate();
    var time = currentDate.toLocaleTimeString();
    var terminalInfo = 'ttys007';
    var formattedDate = 'Last login: ' + day + ' ' + month + ' ' + date + ' ' + time + ' on ' + terminalInfo;
    return formattedDate;
}
function typingEffect(id, originalText, addingText, typingSpeed, timeout) {
    var typingElement = document.getElementById(id);
    var printText = originalText;
    if (typingSpeed == 0) {
        typingElement.innerHTML = printText + addingText;
    }
    else {
        for (var i = 0; i < addingText.length; i++) {
            setTimeout(function (char) {
                return function () {
                    printText += char;
                    typingElement.innerHTML = printText;
                };
            }(addingText.charAt(i)), i * typingSpeed);
        }
    }
    return new Promise(resolve => setTimeout(resolve, addingText.length * typingSpeed + timeout));
}
async function runTypingEffects() {
    const lastLogin = getLastLoginStr();
    const console_text_prefix = 'Tomoko@World ~ % ';
    let console_text = '';
    const target_id = 'terminal-contents';
    await typingEffect(target_id, console_text, lastLogin, 0, 0);
    console_text += lastLogin + '<br>';
    await typingEffect(target_id, console_text, console_text_prefix, 0, 0);
    console_text += console_text_prefix;
    await typingEffect(target_id, console_text, 'ls', 50, 500);
    console_text += 'ls<br>';
    await typingEffect(target_id, console_text, 'information.txt', 0, 0);
    console_text += 'information.txt<br>';
    await typingEffect(target_id, console_text, console_text_prefix, 0, 0);
    console_text += console_text_prefix;
    await typingEffect(target_id, console_text, 'cat information.txt', 50, 500);
    console_text += 'cat information.txt<br>';
    await typingEffect(target_id, console_text, 'Tomoko Kurotobi', 0, 0);
    console_text += 'Tomoko Kurotobi<br>';
    await typingEffect(target_id, console_text, 'Software Developer', 0, 0);
    console_text += 'Software Developer<br>';
    await typingEffect(target_id, console_text, console_text_prefix, 0, 0);
    console_text += console_text_prefix;
    await typingEffect(target_id, console_text, 'echo "#include &lt;iostream&gt;\nint main(){std::cout << "Hello, World!" << std::endl; return 0;}" > hello.cpp', 50, 500);
    console_text += 'echo "#include &lt;iostream&gt;\nint main(){std::cout << "Hello, World!" << std::endl; return 0;}" > hello.cpp<br>';
    await typingEffect(target_id, console_text, console_text_prefix, 0, 500);
    console_text += console_text_prefix;
    await typingEffect(target_id, console_text, 'g++ hello.cpp -o hello', 50, 500);
    console_text += 'g++ hello.cpp -o hello<br>';
    await typingEffect(target_id, console_text, console_text_prefix, 0, 0);
    console_text += console_text_prefix;
    await typingEffect(target_id, console_text, './hello', 50, 500);
    console_text += './hello<br>';
    await typingEffect(target_id, console_text, 'Hello, World!', 0, 0);
    console_text += 'Hello, World!<br>';
    await typingEffect(target_id, console_text, console_text_prefix, 0, 0);
}

