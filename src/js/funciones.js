const txtArea = document.getElementById('exampleFormControlTextarea1');
const btnWA = document.querySelector(".btnWA");

txtArea.addEventListener('input', () => {
    let mensaje = txtArea.value.trim()
    btnWA.href = 'https://wa.me/5492213091050?text=' + mensaje
})