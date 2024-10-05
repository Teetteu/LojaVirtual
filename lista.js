
const lista = [
    
    {
        nome: 'Pão francês',
        valor: 'R$10,00 kg',
        img: 'https://conteudo.imguol.com.br/c/entretenimento/3e/2022/04/20/pao-frances-carboidrato-1650485434523_v2_900x506.jpg'
    },

    { 
        nome: 'Pão de queijo',
        valor: 'R$3,50 uni.',
        img: 'https://p2.trrsf.com/image/fget/cf/942/530/images.terra.com/2022/07/01/31650768-shutterstock1268210182-768x575.jpg'
    },

    {
        nome: 'Baguette',
        valor: 'R$12,00 kg',
        img: 'https://www.allrecipes.com/thmb/FlXpXw4kT-Wpv-InixwYSgJRswg=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/7028-french-baguettes-DDMFS-4x3-a3f7e7cc53654c8db2c9919148e7c915.jpg'
    },

    {
        nome: 'Pão de forma',
        valor: 'R$ 7,00 uni.',
        img: 'https://amopaocaseiro.com.br/wp-content/uploads/2019/12/pao-de-forma-caseiro_02.jpg'
    },

    { 
        nome: 'Croissant',
        valor: 'R$5,00 uni.',
        img: 'https://lirp.cdn-website.com/33406c6e/dms3rep/multi/opt/historia-do-croissant-1920w.jpg'
    },

    {
        nome: 'Pão de batata',
        valor: 'R$ 9,00 kg',
        img: 'https://img.cybercook.com.br/imagens/receitas/927/pao-de-batata-com-carne-seca.jpg'
    },

    {
        nome: 'Empada',
        valor: 'R$ 5,00 uni.',
        img: 'https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/10/24/796246837-empada-de-camarao.jpg'
    },

    { 
        nome: 'Coxinha',
        valor: 'R$ 5,00 uni.',
        img: 'https://static.itdg.com.br/images/1200-630/12d6edf758753748df23c3b69a2258fc/279010-original.jpg'
    },

    {
        nome: 'Joelho',
        valor: 'R$6,50 uni.',
        img: 'https://catracalivre.com.br/wp-content/uploads/2020/12/mini-joelho-crocante2.jpg'
    },

    {
        nome: 'Pastel de pizza',
        valor: 'R$5,00 uni.',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/05/08/5d/c0/r3-express-food.jpg'
    },

    {
        nome: 'Pastel de queijo',
        valor: 'R$5,00 uni.',
        img: 'https://www.sabornamesa.com.br/media/k2/items/cache/990810f9242641a8e264ce996a78ed28_XL.jpg'
    },

    {
        nome: 'Pastel de carne',
        valor: 'R$5,00 uni.',
        img: 'https://www.comidaereceitas.com.br/wp-content/uploads/2009/01/recheio-de-carne-moida-para-pastel-solange-rodrigues.jpg'
    },

    {
        nome: ' Tortas de frango',
        valor: 'R$40,00 (8) uni.',
        img: 'https://diariodonordeste.verdesmares.com.br/image/contentid/policy:1.3241772:1654786647/Torta-de-frango.jpg?f=default&$p$f=91fd726'
    },

    {
        nome: ' Tortas quatro queijos',
        valor: 'R$40,00 (8) uni.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc71XLmHPssvkU8zllIDLXPY24I8p5lWAjaQPLbOJ9-A&s'
    },

    {
        nome: 'Café 50ml',
        valor: 'R$2,00',
        img: 'https://www.mg.senac.br/Noticias/PublishingImages/CAFE%20GETTY%20IMAGESSITE.jpg'
    },

    {
        nome: 'sucos naturais 300ml',
        valor: 'R$3,00',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS013DYpXTRQwaSqJeedYXmNhMD3RuK5HX6lJ_ejqZn1A&s'
    },

    {
        nome: 'refrigerante 2L',
        valor: 'R$12,00',
        img: 'https://cdn.awsli.com.br/1310/1310308/produto/216645479/file-1xye75wzss.png'
    },

    {
        nome: 'refrigerante 350ml',
        valor: 'R$5,00',
        img: 'https://alloydeliveryimages.s3.sa-east-1.amazonaws.com/item_images/623a0da1ba924.webp'
    },

    {
        nome: 'água mineral 500ml',
        valor: 'R$2,00',
        img: 'https://www.varanda.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/a/g/agua-mineral-crystal-500ml-7894900530001.jpg'
    },

    {
        nome: 'Cappuccinos 50ml',
        valor: 'R$5,00',
        img: 'https://oquetempracomer.com.br/wp-content/uploads/elementor/thumbs/Capuccino_11zon-q51zy0ymu9e25ufyx72toxvw7jh4ccq7vr5ymdnvks.jpg'
    },

    {
        nome: ' Mousse de maracujá',
        valor: 'R$20,00 8 uni.',
        img: 'https://guiadacozinha.com.br/wp-content/uploads/2021/11/mousse-maracuja-licor.jpg'
    },

    {
        nome: 'pudim',
        valor: 'R$5,00 uni.',
        img: 'https://www.receitas-sem-fronteiras.com/uploads/media/86139_highlight-30.jpg?1393609732'
    },

    {
        nome: ' cheesecake',
        valor: 'R$6,00 uni.',
        img: 'https://i0.wp.com/anamariabraga.globo.com/wp-content/uploads/2020/05/receitas-de-cheesecake-ana-maria-braga.jpg?fit=640%2C360&ssl=1'
    },

    {
        nome: 'Bolo de cenoura',
        valor: 'R$4,00 uni.',
        img: 'https://static.itdg.com.br/images/360-240/d290bc79bcad112ee9095604e45eb262/365326-original.jpg'
    },

    {
        nome: 'Bolo de chocolate',
        valor: 'R$6,00 uni.',
        img: 'https://www.estadao.com.br/resizer/oFDrDp3xgfze9zuyNaR5gnyURVA=/arc-anglerfish-arc2-prod-estadao/public/FIVYQFU6J5ND3PYRA6XQHR4NW4.jpg'
    },

    {
        nome: 'Broa',
        valor: 'R$4,00 uni.',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmk6tLofKVSl2TFdgPLm77bAuN7p1CM36NcKCYdCNMrQ&s'
    },

    {
        nome: 'torta de morango',
        valor: 'R$6,00 uni.',
        img: 'https://guiadacozinha.com.br/wp-content/uploads/2019/10/torta-morango-chocolate-branco.jpg'
    },

    {
        nome: 'Torta de limão',
        valor: 'R$6,00 uni.',
        img: 'https://recipesblob.oetker.com.br/assets/d044a4ef3cfe45998593f500c00942ef/1272x764/torta-de-limo.jpg'
    },

    {
        nome: ' brownie',
        valor: 'R$3,00 uni.',
        img: 'https://img.saborosos.com.br/imagens/brownie-de-chocolate.jpg'
    },

    {
        nome: 'cupcakes',
        valor: 'R$3,50 uni.',
        img: 'https://cdn.casaeculinaria.com/wp-content/uploads/2023/10/16142640/Cupcake-de-chocolate-1.webp'
    },

   
]


const gridcard = document.getElementById('gridcard')
 
lista.map(item => {

    const card = document.createElement('section')
    card.classList.add('card');

    const img = document.createElement('img')
    img.src = item.img
    card.appendChild(img)

    const nome = document.createElement('h3')
    nome.innerText = item.nome
    card.appendChild(nome)

    const valor = document.createElement('p')
    valor.innerText = item.valor
    card.appendChild(valor)
   
    const botao = document.createElement('button')
    botao.innerHTML = 'carrinho'
    card.appendChild(botao)

    gridcard.appendChild(card)
})
