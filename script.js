// ===============================
// BUKA UNDANGAN
// ===============================

const tombol = document.getElementById("buka");

if (tombol) {
    tombol.addEventListener("click", function () {

        const musik = document.getElementById("musik");

        if (musik) {
            musik.play();
        }

        const undangan = document.getElementById("undangan");

        if (undangan) {
            undangan.scrollIntoView({
                behavior: "smooth"
            });
        }

    });
}

// ===============================
// COUNTDOWN
// ===============================

const target = new Date("December 12, 2026 08:00:00").getTime();

setInterval(function(){

    const sekarang = new Date().getTime();

    const selisih = target - sekarang;

    if(selisih <= 0){
        return;
    }

    const hari = Math.floor(selisih / (1000*60*60*24));

    const jam = Math.floor(
        (selisih % (1000*60*60*24))
        /
        (1000*60*60)
    );

    const menit = Math.floor(
        (selisih % (1000*60*60))
        /
        (1000*60)
    );

    const detik = Math.floor(
        (selisih % (1000*60))
        /
        1000
    );

    document.getElementById("hari").innerHTML = hari;
    document.getElementById("jam").innerHTML = jam;
    document.getElementById("menit").innerHTML = menit;
    document.getElementById("detik").innerHTML = detik;

},1000);

// ===============================
// ANIMASI SAAT SCROLL
// ===============================

const semuaSection = document.querySelectorAll(".section");

window.addEventListener("scroll",function(){

    semuaSection.forEach(function(item){

        const posisi = item.getBoundingClientRect().top;

        if(posisi < window.innerHeight-100){

            item.style.opacity="1";

            item.style.transform="translateY(0px)";
        }

    });

});

// ===============================
// STYLE AWAL
// ===============================

semuaSection.forEach(function(item){

    item.style.opacity="0";

    item.style.transform="translateY(80px)";

    item.style.transition="1s";

});

// ===============================
// POPUP FOTO GALERI
// ===============================

const gambar = document.querySelectorAll(".gallery img");

gambar.forEach(function(img){

    img.addEventListener("click",function(){

        window.open(img.src);

    });

});