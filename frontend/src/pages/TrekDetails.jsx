import React from "react";
import { useParams, Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";
import { trekData } from "../components/MapList";
import "./TrekDetail.css"; 



const TrekDetail = () => {
  const { trekId } = useParams();
  const trek = Object.values(trekData).flat().find(t => t.id === parseInt(trekId));

  if (!trek) {
    return <p>Trek not found!</p>;
  }

  return (
    <Container className="mt-5">
      <Card>
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
          <div className="bot">
             <Button variant="primary" onClick={() => alert("Download started!")}>
            Scarica Mappa
          </Button>
          <Link to="/" className="btn btn-secondary ml-2">
            Torna alla lista
          </Link>
          </div>
         
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TrekDetail;