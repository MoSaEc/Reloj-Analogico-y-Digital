// JavaScript
function actualizarRelojes() {
    var ahora = new Date();

    var relojDigital = document.querySelector('.reloj-digital');
    var horas = String(ahora.getHours()).padStart(2, '0');
    var minutos = String(ahora.getMinutes()).padStart(2, '0');
    var segundos = String(ahora.getSeconds()).padStart(2, '0');
    relojDigital.textContent = horas + ':' + minutos + ':' + segundos;

    var manecillaHora = document.querySelector('.manecilla-hora');
    var manecillaMinuto = document.querySelector('.manecilla-minuto');
    var manecillaSegundo = document.querySelector('.manecilla-segundo');
    var hora = ahora.getHours() % 12;
    var minuto = ahora.getMinutes();
    var segundo = ahora.getSeconds();
    var gradosHora = (360 / 12) * (hora + minuto / 60);
    var gradosMinuto = (360 / 60) * (minuto + segundo / 60);
    var gradosSegundo = (360 / 60) * segundo;
    manecillaHora.style.transform = `translateX(-50%) rotate(${gradosHora}deg)`;
    manecillaMinuto.style.transform = `translateX(-50%) rotate(${gradosMinuto}deg)`;
    manecillaSegundo.style.transform = `translateX(-50%) rotate(${gradosSegundo}deg)`;
}

function animarRelojes() {
    actualizarRelojes();
    requestAnimationFrame(animarRelojes); /* Actualiza las manecillas del reloj con cada cuadro de animación */
}

animarRelojes();
