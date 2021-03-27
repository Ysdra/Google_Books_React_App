import React from "react";
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Jumbo = (props) => (
    <Jumbotron fluid className="text-center">
        <Container>
            <h1>Google Books</h1>
            <p>Search & Save Books</p>
        </Container>
    </Jumbotron>
);

export default Jumbo;