import React, { useState } from "react";
import { Container, Carousel } from "react-bootstrap";
import MapList from "../components/MapList";
import "../HomeNav.css";

const HomePage = () => {
  const token = localStorage.getItem("token");

  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <Container fluid className="home-page">
      <Container fluid className="p-0">
        <div
          className="hero-container"
          style={{
            backgroundImage:
              "url('https://visitsienaofficial.it/wp-content/uploads/2022/10/francigena-1-1024x449.jpg')",
          }}
        >
          <div className="hero-content">
            <h1>Benvenuto nel Sito di Trekking</h1>
          </div>
        </div>
      </Container>

      <Container fluid className="container">
        <div className="map-container">
          <MapList />
        </div>
      </Container>

      <Carousel className="custom-carousel">
        <Carousel.Item>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <img
                  src="https://contents.mediadecathlon.com/p1568309/k$4e8c156a556aeeb2f617036f429f16bf/sq/scarpe-trekking-donna-mh100-mid-impermeabili-blu.jpg?format=auto&f=480x480"
                  className="card-img-top"
                  alt="Scarponi da Trekking"
                />
                <div className="card-body">
                  <h5 className="card-title">Scarponi da Trekking</h5>
                  <p className="card-text">
                    Scopri la nostra selezione di scarponi resistenti e
                    confortevoli per le tue avventure.
                  </p>
                  <a
                    href="https://www.decathlon.it/tutti-gli-sport/trekking-e-montagna/scarpe-donna-1"
                    className="btn btn-primary"
                  >
                    Acquista Ora
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <img
                  src="https://oberalp.imgix.net/89f4ae44-2164-4427-a9cb-248a8db2e075.png?auto=format&w=300&h=300"
                  className="card-img-top"
                  alt="Zaini da Trekking"
                />
                <div className="card-body">
                  <h5 className="card-title">Zaini da Trekking</h5>
                  <p className="card-text">
                    Esplora la nostra gamma di zaini comodi e spaziosi per
                    portare tutto il necessario.
                  </p>
                  <a
                    href="https://www.salewa.com/it-it/zaini?srsltid=AfmBOorVZ9sjY6UYKVlcYh-FaMP0pbxOHVt06-eVoisUf-09B5m40uMJ"
                    className="btn btn-primary"
                  >
                    Scopri di Più
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <img
                  src="https://contents.mediadecathlon.com/p1568309/k$4e8c156a556aeeb2f617036f429f16bf/sq/scarpe-trekking-donna-mh100-mid-impermeabili-blu.jpg?format=auto&f=480x480"
                  className="card-img-top"
                  alt="Scarponi da Trekking"
                />
                <div className="card-body">
                  <h5 className="card-title">Scarponi da Trekking</h5>
                  <p className="card-text">
                    Scopri la nostra selezione di scarponi resistenti e
                    confortevoli per le tue avventure.
                  </p>
                  <a
                    href="https://www.decathlon.it/tutti-gli-sport/trekking-e-montagna/scarpe-donna-1"
                    className="btn btn-primary"
                  >
                    Acquista Ora
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100">
                <img
                  src="https://oberalp.imgix.net/89f4ae44-2164-4427-a9cb-248a8db2e075.png?auto=format&w=300&h=300"
                  className="card-img-top"
                  alt="Zaini da Trekking"
                />
                <div className="card-body">
                  <h5 className="card-title">Zaini da Trekking</h5>
                  <p className="card-text">
                    Esplora la nostra gamma di zaini comodi e spaziosi per
                    portare tutto il necessario.
                  </p>
                  <a
                    href="https://www.salewa.com/it-it/zaini?srsltid=AfmBOorVZ9sjY6UYKVlcYh-FaMP0pbxOHVt06-eVoisUf-09B5m40uMJ"
                    className="btn btn-primary"
                  >
                    Scopri di Più
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>

      <footer className="footer">
        <div className="footer-container">
          <div className="footer-info">
            <h3>TrekkingApp</h3>
            <p>La tua guida per avventure all'aria aperta</p>
            <p>Email: info@trekkingapp.it</p>
            <p>Telefono: +39 123 456 7890</p>
            <p>Indirizzo: Via Della Calce, 00100 Roma</p>
          </div>
          <div className="footer-form">
            <button onClick={toggleFormVisibility}>
              {isFormVisible ? "Chiudi il Form" : "Richiedi Informazioni"}
            </button>
            {isFormVisible && (
              <form>
                <h3>Richiedi Informazioni</h3>
                <input type="text" placeholder="Nome" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="La tua richiesta" rows="4" required />
                <button type="submit">Invia</button>
              </form>
            )}
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default HomePage;
