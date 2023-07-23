import { Modal, Button } from "react-bootstrap";
import { useState } from 'react';

function Header(){

    const [showHelp, setShowHelp] = useState(false);

    const handleClose = () => setShowHelp(false);
    const handleShow = () => setShowHelp(true);

    return(
        <header className="bd-header bg-secondary py-3 d-flex align-items-stretch border-bottom border-dark">
            <div className="container-fluid d-flex align-items-center">
                <h1 className="d-flex align-items-center fs-4 text-white mb-0">
                Hangman Game
                </h1>
                <a href="../examples/cheatsheet-rtl/" className="ms-auto link-light" hrefLang="ar"></a>
                <div
                    className="d-flex align-items-center justify-content-center"
                   
                >
                    <Button variant="primary" onClick={handleShow}>
                    Launch demo modal
                    </Button>
                </div>
                <Modal show={showHelp} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>HOW TO PLAY</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Hangman is a classic word game in which you must guess the secret word one letter at a time. Guess one letter at a time to reveal the secret word.Each incorrect guess adds another part to the hangman. You only get 10 incorrect guesses.
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
            </div>
        </header>
    );
}

export default Header;

