

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
        nome: `Xtudo`,
        img: `../../frontend/assets/img/xtudo.png`,
        quantidade: 0
    }
];

inicializaLoja = () => {
    const containerProdutos = document.getElementById(`produtos`);
    items.map((valor) => {
        containerProdutos.innerHTML += `
        
        <div class="produtos-single">
            <img class="w-32 h-32" src="${valor.img}"/>
            <p>${valor.nome}</p>
            <a class="links" key="${valor.id}" href="#">Adicionar ao carrinho</a>
        </div>
        
        `
    });
};
inicializaLoja();

atualizaCarrinho = () => {
    console.log(items);
};

var links = document.getElementsByTagName('a')

for (var i = 0; i < links.length; i++){
    links[i].addEventListener('click',function(){
        let key = this.getAttribute('key');
        items[key].quantidade++;
        atualizaCarrinho();
    });
};