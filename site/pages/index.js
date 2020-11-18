import Head from 'next/head'
import styles from '../styles/Home.module.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { 
  Button,
  Jumbotron,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
   } from 'reactstrap';
   import { library } from '@fortawesome/fontawesome-svg-core';
   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
   import { fas } from '@fortawesome/free-solid-svg-icons';    
   library.add(fas);
   

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="keywords" content="palavras-chave,do,meu,site"/>
	      <meta name="description" content="Descrição do meu website"/>
        <meta name="author" content="Cesar Henrique Ramos"/>
        <title>Site com React e Next</title>
      </Head>
      <Navbar color="dark" dark expand="md" className="fixed-top menu">
        <Container>
          <NavbarBrand href="/">Site</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink href="/#inicio">Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#portifolio">Portifolio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/#servico">Serviços</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
      <Jumbotron fluid className="descricao-topo">
  <style>{`
  .descricao-topo{
    background-color: #000;
    color: #fff;
    padding-top:150px;
    padding-botton:150px;
    margin-bottom: 0rem !important;
    position:relative;
    }.inicio-scroll{
      position:absolute;
      top: 0px;
    }`}</style>
        <Container className="text-center">
        <a name="inicio" className="inicio-scroll"/>
          <h1 className="display-4 mb-4">Temos a solução que sua Empresa Precisa!</h1>          
          <hr className="my-2" />
          <p className="lead mb-4">Venha Mudar o Mundo Junto com Agente.</p>
          <p className="lead">
            <Button outline color="warning" size="lg">Entre em Contato</Button>
          </p>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="servicos">
      <style>{`
  .servicos{
    background-color: #fff;
    color: #000;
    padding-top:80px;
    padding-botton:80px
    margin-bottom: 0rem !important;
    position:relative;
    }.cicle{
      width:140px;
      height:140px;
      background-color: #fed136;
      padding-top:24px;
      color: #fff;
      font-size:52px;
    }.centralizar{
      margin: 0 auto !important;
      float: none !important;
    }.servico-scroll{
      position:absolute;
      top: 0px;
    }`}</style>
        <Container className="text-center">
         <a name="servico" className="servico-scroll"/>
          <div>
            <h2 className="display-4">Serviços</h2>
            <p className="lead pb-4">Nossos Serviços</p>
          </div>
          <div className="row">
          <div className="col-lg-4">
            <div className="rounded-circle cicle centralizar"><FontAwesomeIcon icon="code"/></div>
            <h2 className="mb-4 mt-4">Criação de Site</h2>
            <p className="mt-4">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            
          </div>
          <div className="col-lg-4">
          <div className="rounded-circle cicle centralizar"><FontAwesomeIcon icon="funnel-dollar"/></div>
            <h2 className="mb-4 mt-4">Criação de Campanha de Marketing</h2>
            <p className="mt-2">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            
          </div>
          <div className="col-lg-4">
          <div className="rounded-circle cicle centralizar"><FontAwesomeIcon icon="rocket"/></div>
            <h2 className="mb-4 mt-4">Gestão de Riscos</h2>
            <p className="mt-4">Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
            
          </div>
        </div>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="portifolio">
      <style>{`
  .portifolio{
    background-color: #f8f9fa;
    padding-top:80px;
    padding-botton:80px;
    margin-bottom: 0rem !important;
    position:relative;
    }.portifolio-scroll{
      position:absolute;
      top: 0px;
    }`}</style>
        <Container className="text-center">
          <a name="portifolio" className="portifolio-scroll"/>
          <div>
            <h2 className="display-4">Portifolio</h2>
            <p className="lead pb-4">Nossos Portifolio</p>
          </div>
          <div className="card-deck">
          <div className="card">
            <img className="card-img-top" src="./portolio_um.jpg" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="./portolio_dois.jpg" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
              <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src="./portolio_tres.jpg" alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
              <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
        </Container>
      </Jumbotron>
      <Jumbotron fluid className="portifolio2">
      <style>{`
      .portifolio2{
        background-color: #333;
        color: #fff;
        padding-top:150px;
        padding-bottom:150px;
        margin-bottom: 0rem !important;
        }.redonda{
          border-radius: 20px;
        }`}</style>
        <Container>
        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It'll blow your mind.</span></h2>
            <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto redonda" src="./portolio_dois.jpg" alt="Generic placeholder image"/>
          </div>
        </div>
        </Container>
      </Jumbotron>
      
      <footer className="rodape">
      <style>{`
  .rodape{
    background-color: #666;
    padding-top:15px;
    padding-bottom:5px;
    color:#fff;
    margin-bottom: 0rem !important;
    }`}</style>
        <Container className="text-center">
            <p>&copy; 2017-2018 Company, Inc. &middot; Privacy &middot; Terms</p>
        </Container>
      </footer>

    </div>
  )
}
