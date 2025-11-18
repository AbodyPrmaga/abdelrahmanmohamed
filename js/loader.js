window.onload = () => {

    // إخفاء اللودر تدريجياً
    document.getElementById("loader-screen").style.opacity = "0";

    setTimeout(() => {
        document.getElementById("loader-screen").style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 400); // وقت انتقال فقط وليس وقت تحميل
};
