

const items = [
    {
        id: 0,
        nome: `Carne dupla`,
        img: `../../frontend/assets/img/duplaCarne.png`,
        quantidade: 0
    },
    {
        id: 1,
        nome: `Hamburgue com Batata Frita`,
        img: `../../frontend/assets/img/hamburguerFritas.png`,
        quantidade: 0
    },
    {
        id: 2,
        nome: `XTudo`,
        img: `../../frontend/assets/img/xtudo.png`,
        quantidade: 0
    },
    {
        id: 3,
        nome: `ChesseBurguer`,
        img: `../../frontend/assets/img/cheeseburguer.png`,
        quantidade: 0
    },
    {
        id: 4,
        nome: `ChesseBacon`,
        img: `../../frontend/assets/img/cheesebacon.png`,
        quantidade: 0
    },
    {
        id: 5,
        nome: `XSalada`,
        img: `../../frontend/assets/img/xsalada.png`,
        quantidade: 0
    }

];

inicializaLoja = () => {
    const containerProdutos = document.getElementById(`produtos`);
    items.map((valor) => {
        containerProdutos.innerHTML += `
        
        <div class="produtos-single flex flex-col items-center justify-center bg-laranjaPaleta-Primary w-96 h-96 border-4 border-amareloPaleta-900">
            <img class="w-32 h-32" src="${valor.img}"/>
            <p class="text-3xl text-center font-bold">${valor.nome}</p>
            <button class="links" key="${valor.id}">Adicionar ao carrinho</button>
        </div>
        
        `
    });
};
inicializaLoja();

atualizaCarrinho = () => {
    var containerCarrinho = document.getElementById('carrinho');
    containerCarrinho.innerHTML = '';
    items.map((valor) => {
        if (valor.quantidade > 0) {
            containerCarrinho.innerHTML += `
            <p class="my-3"><span class="text-2xl font-bold">${valor.nome}</span> | quantidade:${valor.quantidade}</p>
            <hr>
            `;
        }
    })
};

var links = document.getElementsByTagName('button')

for (var i = 0; i < links.length; i++){
    links[i].addEventListener('click',function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizaCarrinho();
    });
};