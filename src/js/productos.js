const mesasPokerContainer = document.getElementById("mesas-poker-container")
const RuletasContainer = document.getElementById("Ruletas-container")


for (let i = 1; i < 51; i++) {
    mesasPokerContainer.innerHTML += `
                <div class="card m-2 bg-dark" style="width: 11rem;">
                <h5 class="card-title text-bg-dark">Mesa ${i}</h5>
                <div class="card-body">
                <img src="/src/img/products/poker/${i}.png" class="card-img-top" alt="...">
                <a class="btnWA" href="https://wa.me/5492213091050?text=Hola, quisiera armar una mesa similar a la mesa ${i}" target="_blank">
                <img src="/src/img/assets/whatsapp.svg">
                <p>Enviar</p>
                </a>
                </div>
                </div>`
}
