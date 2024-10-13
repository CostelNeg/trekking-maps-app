import React, { useState } from "react";
import { Container, Row, Col, Card, Form } from "react-bootstrap";
import "./MapList.css";

const trekData = {
  Toscana: [
    {
      id: 1,
      name: "Via Francigena",
      location: "Siena",
      duration: "7 giorni",
      difficulty: "Moderata",
      image:
        "https://visitsienaofficial.it/wp-content/uploads/2022/10/francigena-1-1024x449.jpg",
    },
    {
      id: 2,
      name: "Anello del Rinascimento",
      location: "Firenze",
      duration: "4 giorni",
      difficulty: "Facile",
      image:
        "https://images2-trekking.gazzettaobjects.it/wp-content/uploads/2021/05/02/16/00/GettyImages-1215881583.jpg",
    },
    {
      id: 3,
      name: "Monte Forato",
      location: "Alpi Apuane",
      duration: "6 ore",
      difficulty: "Moderata",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Apuane%2C_monte_forato_02.JPG/260px-Apuane%2C_monte_forato_02.JPG",
    },
    {
      id: 4,
      name: "Sentiero del Viandante",
      location: "Maremma",
      duration: "3 giorni",
      difficulty: "Moderata",
      image:
        "https://media-assets.vanityfair.it/photos/6364b6b0c192a3714ed452ec/3:2/w_1998,h_1332,c_limit/Seconda%20tappa%20Mandello%20del%20Lario-Vezio%20(519)_b2.jpg",
    },
    {
      id: 5,
      name: "Anello del Mugello",
      location: "Mugello",
      duration: "5 giorni",
      difficulty: "Impegnativa",
      image: "https://cdn.pacer.cc/route/screenshot/osm_2749819.png",
    },
  ],
  Lombardia: [
    {
      id: 6,
      name: "Sentiero delle 4 Valli",
      location: "Valtellina",
      duration: "5 giorni",
      difficulty: "Impegnativa",
      image: "https://www.valcavargna.org/wp-content/uploads/2023/01/016.jpg",
    },
    {
      id: 7,
      name: "Via Valeriana",
      location: "Lago d'Iseo",
      duration: "3 giorni",
      difficulty: "Moderata",
      image:
        "https://www.viavaleriana.it/wp-content/uploads/2023/02/atlas-702826-1-Copia-722x1024.png",
    },
    {
      id: 8,
      name: "Sentiero del Viandante",
      location: "Lago di Como",
      duration: "4 giorni",
      difficulty: "Moderata",
      image:
        "https://www.abitarelestremo.it/wp-content/uploads/2022/02/mappa_sentiero_del_viandante_varenna_dervio.jpg",
    },
    {
      id: 9,
      name: "Alta Via delle Grazie",
      location: "Valsassina",
      duration: "2 giorni",
      difficulty: "Impegnativa",
      image:
        "https://www.terre.it/wp-content/uploads/2023/01/alta-via-delle-grazie-mappa-1.png",
    },
    {
      id: 10,
      name: "Cammino di San Colombano",
      location: "Pavia",
      duration: "6 giorni",
      difficulty: "Moderata",
      image:
        "https://www.cittametropolitana.mi.it/export/sites/default/Cammini_metropolitani/img/cartina-San-Colombano-con-Leinster.jpg",
    },
  ],
  Sicilia: [
    {
      id: 11,
      name: "Trekking dell'Etna",
      location: "Catania",
      duration: "2 giorni",
      difficulty: "Impegnativa",
      image:
        "https://picsum.photos/200/300://placeholder.com/600x400?text=Trekking+dell'Etna",
    },
    {
      id: 12,
      name: "Sentiero della Magna Via Francigena",
      location: "Palermo-Agrigento",
      duration: "9 giorni",
      difficulty: "Moderata",
      image:
        "https://picsum.photos/200/300://placeholder.com/600x400?text=Magna+Via+Francigena",
    },
    {
      id: 13,
      name: "Riserva dello Zingaro",
      location: "Trapani",
      duration: "1 giorno",
      difficulty: "Facile",
      image:
        "https://picsum.photos/200/300://placeholder.com/600x400?text=Riserva+dello+Zingaro",
    },
    {
      id: 14,
      name: "Monte Pellegrino",
      location: "Palermo",
      duration: "3 ore",
      difficulty: "Moderata",
      image:
        "https://picsum.photos/200/300://placeholder.com/600x400?text=Monte+Pellegrino",
    },
    {
      id: 15,
      name: "Gole dell'Alcantara",
      location: "Messina",
      duration: "4 ore",
      difficulty: "Facile",
      image:
        "https://picsum.photos/200/300://placeholder.com/600x400?text=Gole+dell'Alcantara",
    },
  ],
  Trentino: [
    {
      id: 16,
      name: "Dolomiti di Brenta",
      location: "Madonna di Campiglio",
      duration: "5 giorni",
      difficulty: "Impegnativa",
      image:
        "https://picsum.photos/200/300://placeholder.com/600x400?text=Dolomiti+di+Brenta",
    },
    {
      id: 17,
      name: "Lago di Tovel",
      location: "Val di Non",
      duration: "3 ore",
      difficulty: "Facile",
      image:
        "https://picsum.photos/200/300://placeholder.com/600x400?text=Lago+di+Tovel",
    },
    {
      id: 18,
      name: "Sentiero della Pace",
      location: "Varie località",
      duration: "7 giorni",
      difficulty: "Moderata",
      image:
        "https://picsum.photos/200/300://placeholder.com/600x400?text=Sentiero+della+Pace",
    },
    {
      id: 19,
      name: "Altopiano della Paganella",
      location: "Andalo",
      duration: "4 ore",
      difficulty: "Moderata",
      image:
        "https://picsum.photos/200/300://placeholder.com/600x400?text=Altopiano+della+Paganella",
    },
    {
      id: 20,
      name: "Val di Fassa",
      location: "Canazei",
      duration: "6 giorni",
      difficulty: "Impegnativa",
      image:
        "https://picsum.photos/200/300://placeholder.com/600x400?text=Val+di+Fassa",
    },
  ],
  Sardegna: [
    {
      id: 21,
      name: "Selvaggio Blu",
      location: "Golfo di Orosei",
      duration: "6 giorni",
      difficulty: "Molto impegnativa",
      image:
        "https://picsum.photos/200/300://placeholder.com/600x400?text=Selvaggio+Blu",
    },
    {
      id: 22,
      name: "Sentiero Cala Luna - Cala Sisine",
      location: "Baunei",
      duration: "5 ore",
      difficulty: "Moderata",
      image:
        "https://picsum.photos/200/300://placeholder.com/600x400?text=Cala+Luna+Cala+Sisine",
    },
    {
      id: 23,
      name: "Monte Limbara",
      location: "Gallura",
      duration: "4 ore",
      difficulty: "Moderata",
      image:
        "https://picsum.photos/200/300://placeholder.com/600x400?text=Monte+Limbara",
    },
    {
      id: 24,
      name: "Cammino di Santa Barbara",
      location: "Sulcis-Iglesiente",
      duration: "8 giorni",
      difficulty: "Moderata",
      image:
        "https://picsum.photos/200/300://placeholder.com/600x400?text=Cammino+Santa+Barbara",
    },
    {
      id: 25,
      name: "Parco Nazionale dell'Asinara",
      location: "Asinara",
      duration: "2 giorni",
      difficulty: "Facile",
      image:
        "https://picsum.photos/200/300://placeholder.com/600x400?text=Parco+Asinara",
    },
  ],
};

const MapList = () => {
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <Container fluid className="p-0">
      <p className="title" >Esplora i sentieri più belli d'Italia e scopri nuove avventure!</p>
      <Container className="mt-5">
        <Form.Group className="mb-4">
          <Form.Label>Seleziona una regione:</Form.Label>
          <Form.Control
            as="select"
            value={selectedRegion}
            onChange={handleRegionChange}
          >
            <option value="">Scegli una regione</option>
            {Object.keys(trekData).map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        {selectedRegion && (
          <Row>
            {trekData[selectedRegion].map((trek) => (
              <Col key={trek.id} xs={12} md={6} lg={4} className="mb-4">
                <Card className="h-100 trek-card">
                  <Card.Img variant="top" src={trek.image} alt={trek.name} />
                  <Card.Body>
                    <Card.Title>{trek.name}</Card.Title>
                    <Card.Text>
                      <strong>Luogo:</strong> {trek.location}
                      <br />
                      <strong>Durata:</strong> {trek.duration}
                      <br />
                      <strong>Difficoltà:</strong> {trek.difficulty}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </Container>
  );
};

export default MapList;
