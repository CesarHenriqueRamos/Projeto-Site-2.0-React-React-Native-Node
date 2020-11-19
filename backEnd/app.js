const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

require('./models/home');
const Home = mongoose.model('Home');
app.use(express.json());
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE');
    res.header("Access-Control-Allow-Headers", 'X-PINGOTHER, Content-Type, Authorization');
    app.use(cors());
    next();
});
app.use(
    '/file',
    express.static(path.resolve(__dirname, 'tmp', 'uploads'))
)

mongoose.connect('mongodb://localhost/semana_imercao_20',{
    useNewUrlParser: true,
    useUnifiedTopology:true
}).then(()=> {
    console.log("Banco conectado");
}).catch((err)=>{
    console.log("Erro: conexão com DB mongo falhou"+ err);
    }
)
//get
app.get('/home', (req, res) => {
    Home.findOne({}).then((home)=>{
        if(home.portcardUmFileName){
            var portcardUmFileName = "http://localhost:8080/file/home/"+ home.portcardUmFileName;
        }else{
            var portcardUmFileName = "http://localhost:8080/file/home/portolio_um.jpg";
        }
        if(home.portcardDoisFileName){
            var portcardDoisFileName = "http://localhost:8080/file/home/"+ home.portcardUmFileName;
        }else{
            var portcardDoisFileName = "http://localhost:8080/file/home/portolio_um.jpg";
        }
        if(home.portcardTresFileName){
            var portcardTresFileName = "http://localhost:8080/file/home/"+ home.portcardUmFileName;
        }else{
            var portcardTresFileName  = "http://localhost:8080/file/home/portolio_um.jpg";
        }
        if(home.portcardDestaqueFileName){
            var portcardDestaqueFileName = "http://localhost:8080/file/home/"+ home.portcardUmFileName;
        }else{
            var portcardDestaqueFileName = "http://localhost:8080/file/home/portolio_um.jpg";
        }
        return res.json({
            home,
            portcardUmFileName,
            portcardDoisFileName,
            portcardTresFileName,
            portcardDestaqueFileName
        })
    }).catch((err)=>{
        return res.status(400).json({
            error: true,
            message:"Erro ao buscar os dados no Banco de dados"
        })
    })
})
//post
app.post('/home', async (req, res) => {

    /*const dados = {
        "topTitulo": "Temos a solução que a sua empresa precisa!",
        "topSubtitulo": "This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.",
        "topTextoBtn": "ENTRE EM CONTATO",
        "topLinkBtn": "http://localhost:3000/",

        "serTitulo": "Serviços",
        "serSubtitulo": "Featured content or information",
        "serUmIcone": "code",
        "serUmTitulo": "Serviço 1",
        "serUmDesc": "Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.",
        "serDoisIcone": "laptop-code",
        "serDoisTitulo": "Serviço 2",
        "serDoisDesc": "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.",
        "serTresIcone": "mobile-alt",
        "serTresTitulo": "Serviço 3",
        "serTresDesc": "Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.",

        "portTitulo": "Portfólio",
        "portSubtitulo": "Featured content or information.",

        "portUmOriginalName": "portolio_um.jpg",
        "portUmFileName": "portolio_um.jpg",
        "portUmTitulo": "Card title",
        "portUmSubtitulo": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

        "portDoisOriginalName": "portolio_dois.jpg",
        "portDoisFileName": "portolio_dois.jpg",
        "portDoisTitulo": "Card title",
        "portDoisSubtitulo": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

        "portTresOriginalName": "portolio_tres.jpg",
        "portTresFileName": "portolio_tres.jpg",
        "portTresTitulo": "Card title",
        "portTresSubtitulo": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

        "portQuatroOriginalName": "portolio_quatro.jpg",
        "portQuatroFileName": "portolio_quatro.jpg",
        "portQuatroTitulo": "Card title",
        "portQuatroSubtitulo": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

        "portCincoOriginalName": "portolio_cinco.jpg",
        "portCincoFileName": "portolio_cinco.jpg",
        "portCincoTitulo": "Card title",
        "portCincoSubtitulo": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",

        "portSeisOriginalName": "portolio_seis.jpg",
        "portSeisFileName": "portolio_seis.jpg",
        "portSeisTitulo": "Card title",
        "portSeisSubtitulo": "This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
    };*/

    const homeExiste = await Home.findOne({});
    if(homeExiste){
        return res.status(400).json({
            error: true,
            message: "Erro: A página home já possui um registro!"
        });
    };

    Home.create(req.body, (err) => {
        if (err) return res.status(400).json({
            error: true,
            message: "Erro: Conteúdo da página home não cadastrada com sucesso!"
        })
    })

    return res.json({
        error: true,
        message: "Conteúdo da página home cadastrada com sucesso!"
    })
})

 
app.listen(8080, () => {
    console.log('Servidor iniciado na porta 8080: http://localhost:8080/');
});