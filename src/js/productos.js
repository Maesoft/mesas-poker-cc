const mesasPokerContainer = document.getElementById("mesas-poker-container")
const RuletasContainer = document.getElementById("ruletas-container")
const modal = document.querySelector('.modal')

for (let i = 1; i < 51; i++) {
    mesasPokerContainer.innerHTML += `
                <div class="card m-2 bg-dark" style="width: 11rem;">
                <h5 class="card-title text-bg-dark">Mesa ${i}</h5>
                <div class="card-body">
                <img id="mesa${i}" src="/src/img/products/poker/${i}.png" class="card-img-top" alt="...">
                <a class="btnWA" href="https://wa.me/5492213091050?text=¡Hola! Me gustaría solicitar información sobre la mesa de poker ${i} que vi en tu sitio web. Me gustaría [UNA IGUAL / HACERLE MODIFICACIONES]. ¿Podrías proporcionarme más detalles y precios? ¡Gracias!" target="_blank">
                <img src="/src/img/assets/whatsapp.svg">
                <p>Enviar</p>
                </a>
                </div>
                </div>`
}
for (let i = 1; i < 3; i++) {
    RuletasContainer.innerHTML += `
                <div class="card m-2 bg-dark" style="width: 11rem;">
                <h5 class="card-title text-bg-dark">Ruleta ${i}</h5>
                <div class="card-body">
                <img src="/src/img/products/ruleta/${i}.png" class="card-img-top" alt="...">
                <a class="btnWA" href="https://wa.me/5492213091050?text=Hola, quisiera armar una mesa similar a la ruleta ${i}" target="_blank">
                <img src="/src/img/assets/whatsapp.svg">
                <p>Enviar</p>
                </a>
                </div>
                </div>`
}

mesasPokerContainer.addEventListener("click",(e)=>{
    const elementoClikeado = e.target.id
    if (elementoClikeado.includes('mesa')){
        modal.style.display= "block"
        
    }    
})
