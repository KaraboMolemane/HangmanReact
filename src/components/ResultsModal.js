import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function ResultsModal(props) {
    //https://www.pluralsight.com/guides/how-to-trigger-modal-for-react-bootstrap

    const winner = props.winner;
    
    return (
    <Modal show={winner !== null}>
        <Modal.Header>
        <Modal.Title>{winner? 'You Won!!!' : 'You Lost :('}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{winner? 'Congratulations, you guessed the word correctly and saved the stickman :) Click below to play another round.' : 'Unfortunately, you lost the game. Click below to play another round.'}</Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={() => window.location.reload()}>Play Again</Button>
        </Modal.Footer>
    </Modal>
    );
    
  }
  
  export default ResultsModal;