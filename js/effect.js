const words = ["Abdelrahman Mohamed", "Python Developer", "Full-Stack Developer", "Telegram Bot Expert"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;
const speed = 100;

function type() {
    if (i >= words.length) i = 0; // اعادة اللوب

    currentWord = words[i];
    let displayed = isDeleting ? currentWord.substring(0, j--) : currentWord.substring(0, j++);

    document.getElementById("typing").textContent = displayed;

    if (!isDeleting && j === currentWord.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000); // وقت الانتظار قبل الحذف
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i++;
        setTimeout(type, 500); // وقت الانتظار قبل الكلمة الجديدة
    } else {
        setTimeout(type, speed);
    }
}

type();
