import Head from 'next/head'
import styles from '../styles/Home.module.css'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { 
  Button,
  Jumbotron,
  Container
   } from 'reactstrap';
   import { library } from '@fortawesome/fontawesome-svg-core';
   import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
   import { fas } from '@fortawesome/free-solid-svg-icons';    
import Menu from '../components/menu';
   library.add(fas);
   

const Home = (data) => (
    <div>
      {console.log(data)}
      <Head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="keywords" content="palavras-chave,do,meu,site"/>
	      <meta name="description" content="Descrição do meu website"/>
        <meta name="author" content="Cesar Henrique Ramos"/>
        <title>Site com React e Next</title>
      </Head>
        <Menu/>
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
  <h1 className="display-4 mb-4">{data.response.home.topTitle}</h1>          
          <hr className="my-2" />
          <p className="lead mb-4">{data.response.home.topSubTitle}</p>
          <p className="lead">
            <Button outline color="warning" size="lg">{data.response.home.topTextButton}</Button>
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
            <h2 className="display-4">{data.response.home.serTitle}</h2>
            <p className="lead pb-4">{data.response.home.serSubTitle}</p>
          </div>
          <div className="row">
          <div className="col-lg-4">
            <div className="rounded-circle cicle centralizar"><FontAwesomeIcon icon="code"/></div>
            <h2 className="mb-4 mt-4">{data.response.home.serUm}</h2>
            <p className="mt-4">{data.response.home.serUmDesc}</p>
            
          </div>
          <div className="col-lg-4">
          <div className="rounded-circle cicle centralizar"><FontAwesomeIcon icon="funnel-dollar"/></div>
            <h2 className="mb-4 mt-4">{data.response.home.serDois}</h2>
            <p className="mt-2">{data.response.home.serDoisDesc}</p>
            
          </div>
          <div className="col-lg-4">
          <div className="rounded-circle cicle centralizar"><FontAwesomeIcon icon="rocket"/></div>
            <h2 className="mb-4 mt-4">{data.response.home.serTres}</h2>
            <p className="mt-4">{data.response.home.serTresDesc}</p>
            
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
            <h2 className="display-4">{data.response.home.porTitle}</h2>
            <p className="lead pb-4">{data.response.home.porSubTitle}</p>
          </div>
          <div className="card-deck">
          <div className="card">
            <img className="card-img-top" src={data.response.portcardUmFileName} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{data.response.home.porCardUm}</h5>
              <p className="card-text">{data.response.home.porCardUmDesc}</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={data.response.portcardDoisFileName} alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{data.response.home.porCardDois}</h5>
              <p className="card-text">{data.response.home.porCardDoisDesc}</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
          <div className="card">
            <img className="card-img-top" src={data.response.portcardTresFileName}  alt="Card image cap"/>
            <div className="card-body">
              <h5 className="card-title">{data.response.home.porCardTres}</h5>
              <p className="card-text">{data.response.home.porCardTresDesc}</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
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
        <div className="row featurette">
          <div className="col-md-7">
            <h2 className="featurette-heading">{data.response.home.porItemDestaqueTitle}</h2>
            <p className="lead">{data.response.home.porItemDestaqueDesc}</p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto redonda" src={data.response.portcardDestaqueFileName} alt="Generic placeholder image"/>
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
  );
  Home.getInitialProps = async () => {
    var response = await axios.get('http://localhost:8080/home');
    //console.log(response);
    return { response : response.data };
  }
export default Home;