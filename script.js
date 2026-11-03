function changePage(pageId) {

    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    document.getElementById(pageId).classList.add('active');

    window.scrollTo(0, 0);
}

function openLetter() {
    changePage('birthday');

    const music = document.getElementById('bgMusic');

    music.muted = false;
    music.volume = 1;

    music.play()
        .then(() => {
            console.log("Musik berhasil diputar!");
        })
        .catch((error) => {
            console.log("Musik gagal diputar:", error);
        });
}

function showLetter() {
    changePage('letter');
}

function showSurprise() {
    changePage('surprise');
}

function goHome() {
    changePage('opening');
}

function toggleMusic() {

    const music = document.getElementById('bgMusic');
    const button = document.getElementById('musicButton');

    if (music.paused) {
        music.play();
        button.innerHTML = "♫ Pause";
    } else {
        music.pause();
        button.innerHTML = "♫ Music";
    }
}

function blowCandle() {

    const flame = document.getElementById("flame");
    const smoke = document.getElementById("smoke");
    const button = document.getElementById("blowButton");
    const wishText = document.getElementById("wishText");

    if (flame.classList.contains("out")) {
        return;
    }

    // Memadamkan api
    flame.classList.add("out");

    // Menampilkan asap
    smoke.classList.add("show");

    // Mengubah tulisan
    wishText.innerHTML =
        "Your wish is on its way! ♡";

    // Mengubah tombol
    button.innerHTML = "🎀 Candle Blown!";

    button.disabled = true;
}