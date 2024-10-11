import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import './MapList.css';

const trekData = {
  Toscana: [
    { id: 1, name: "Via Francigena", location: "Siena", duration: "7 giorni", difficulty: "Moderata", image: "https://placeholder.com/600x400?text=Via+Francigena" },
    { id: 2, name: "Anello del Rinascimento", location: "Firenze", duration: "4 giorni", difficulty: "Facile", image: "https://placeholder.com/600x400?text=Anello+del+Rinascimento" },
    { id: 3, name: "Monte Forato", location: "Alpi Apuane", duration: "6 ore", difficulty: "Moderata", image: "https://placeholder.com/600x400?text=Monte+Forato" },
    { id: 4, name: "Sentiero del Viandante", location: "Maremma", duration: "3 giorni", difficulty: "Moderata", image: "https://placeholder.com/600x400?text=Sentiero+del+Viandante+Maremma" },
    { id: 5, name: "Anello del Mugello", location: "Mugello", duration: "5 giorni", difficulty: "Impegnativa", image: "https://placeholder.com/600x400?text=Anello+del+Mugello" },
  ],
  Lombardia: [
    { id: 6, name: "Sentiero delle 4 Valli", location: "Valtellina", duration: "5 giorni", difficulty: "Impegnativa", image: "https://placeholder.com/600x400?text=Sentiero+delle+4+Valli" },
    { id: 7, name: "Via Valeriana", location: "Lago d'Iseo", duration: "3 giorni", difficulty: "Moderata", image: "https://placeholder.com/600x400?text=Via+Valeriana" },
    { id: 8, name: "Sentiero del Viandante", location: "Lago di Como", duration: "4 giorni", difficulty: "Moderata", image: "https://placeholder.com/600x400?text=Sentiero+del+Viandante+Como" },
    { id: 9, name: "Alta Via delle Grazie", location: "Valsassina", duration: "2 giorni", difficulty: "Impegnativa", image: "https://placeholder.com/600x400?text=Alta+Via+delle+Grazie" },
    { id: 10, name: "Cammino di San Colombano", location: "Pavia", duration: "6 giorni", difficulty: "Moderata", image: "https://placeholder.com/600x400?text=Cammino+di+San+Colombano" },
  ],
  Sicilia: [
    { id: 11, name: "Trekking dell'Etna", location: "Catania", duration: "2 giorni", difficulty: "Impegnativa", image: "https://placeholder.com/600x400?text=Trekking+dell'Etna" },
    { id: 12, name: "Sentiero della Magna Via Francigena", location: "Palermo-Agrigento", duration: "9 giorni", difficulty: "Moderata", image: "https://placeholder.com/600x400?text=Magna+Via+Francigena" },
    { id: 13, name: "Riserva dello Zingaro", location: "Trapani", duration: "1 giorno", difficulty: "Facile", image: "https://placeholder.com/600x400?text=Riserva+dello+Zingaro" },
    { id: 14, name: "Monte Pellegrino", location: "Palermo", duration: "3 ore", difficulty: "Moderata", image: "https://placeholder.com/600x400?text=Monte+Pellegrino" },
    { id: 15, name: "Gole dell'Alcantara", location: "Messina", duration: "4 ore", difficulty: "Facile", image: "https://placeholder.com/600x400?text=Gole+dell'Alcantara" },
  ],
  Trentino: [
    { id: 16, name: "Dolomiti di Brenta", location: "Madonna di Campiglio", duration: "5 giorni", difficulty: "Impegnativa", image: "https://placeholder.com/600x400?text=Dolomiti+di+Brenta" },
    { id: 17, name: "Lago di Tovel", location: "Val di Non", duration: "3 ore", difficulty: "Facile", image: "https://placeholder.com/600x400?text=Lago+di+Tovel" },
    { id: 18, name: "Sentiero della Pace", location: "Varie località", duration: "7 giorni", difficulty: "Moderata", image: "https://placeholder.com/600x400?text=Sentiero+della+Pace" },
    { id: 19, name: "Altopiano della Paganella", location: "Andalo", duration: "4 ore", difficulty: "Moderata", image: "https://placeholder.com/600x400?text=Altopiano+della+Paganella" },
    { id: 20, name: "Val di Fassa", location: "Canazei", duration: "6 giorni", difficulty: "Impegnativa", image: "https://placeholder.com/600x400?text=Val+di+Fassa" },
  ],
  Sardegna: [
    { id: 21, name: "Selvaggio Blu", location: "Golfo di Orosei", duration: "6 giorni", difficulty: "Molto impegnativa", image: "https://placeholder.com/600x400?text=Selvaggio+Blu" },
    { id: 22, name: "Sentiero Cala Luna - Cala Sisine", location: "Baunei", duration: "5 ore", difficulty: "Moderata", image: "https://placeholder.com/600x400?text=Cala+Luna+Cala+Sisine" },
    { id: 23, name: "Monte Limbara", location: "Gallura", duration: "4 ore", difficulty: "Moderata", image: "https://placeholder.com/600x400?text=Monte+Limbara" },
    { id: 24, name: "Cammino di Santa Barbara", location: "Sulcis-Iglesiente", duration: "8 giorni", difficulty: "Moderata", image: "https://placeholder.com/600x400?text=Cammino+Santa+Barbara" },
    { id: 25, name: "Parco Nazionale dell'Asinara", location: "Asinara", duration: "2 giorni", difficulty: "Facile", image: "https://placeholder.com/600x400?text=Parco+Asinara" },
  ],
};

const MapList = () => {
  const [selectedRegion, setSelectedRegion] = useState('Toscana');

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <Container className="map-list">
      <h1 className="text-center my-4">Percorsi di Trekking in Italia</h1>
      <Form.Group className="mb-4">
        <Form.Label>Seleziona una regione:</Form.Label>
        <Form.Control as="select" value={selectedRegion} onChange={handleRegionChange}>
          {Object.keys(trekData).map((region) => (
            <option key={region} value={region}>{region}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Row>
        {trekData[selectedRegion].map((trek) => (
          <Col key={trek.id} xs={12} md={6} lg={4} className="mb-4">
            <Card className="h-100 trek-card">
              <Card.Img variant="top" src={trek.image} alt={trek.name} />
              <Card.Body>
                <Card.Title>{trek.name}</Card.Title>
                <Card.Text>
                  <strong>Luogo:</strong> {trek.location}<br />
                  <strong>Durata:</strong> {trek.duration}<br />
                  <strong>Difficoltà:</strong> {trek.difficulty}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MapList;