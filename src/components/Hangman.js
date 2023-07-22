import { useState } from 'react';
import Letter from './Letter';
import Header from './Header';
import Word from './Word';
import ResultsModal from './ResultsModal';
import { Modal, Button } from "react-bootstrap";

function Hangman(){
  const [status, setStatus] = useState('launch'); //launch, setMusk, playing, results
  const [hangman, setHangman] = useState({figure: 1 , winner: null}) // 1 up to 11 using 'hangmandrawings' in the 'Public' folder
  const [guessWord, setGuessWord] = useState('');
  const [hiddenGuessWord, setHiddenGuessWord] = useState('');

  //Might need to be changed to stated to be better managed
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    //The user should be clearly informed if they have “won” or “lost” the game.
    if(status !== 'results') determineResults(); 

  if(status === 'launch') {
        //Get words from dictionary.txt
        //https://stackoverflow.com/questions/14446447/how-to-read-a-local-text-file-in-the-browser
        fetch("dictionary.txt")
        .then((res) => res.text())
        .then((text) => {

            const dictionaryWords = text.split('\n')
            const dictionaryMin = dictionaryWords.indexOf("START") + 1;
            const dictionaryax = dictionaryWords.length;
            const randomIndex = Math.floor(Math.random() * dictionaryax) + dictionaryMin;
            const randomWord = dictionaryWords[randomIndex];
            
            setGuessWord(randomWord.toUpperCase().replace('\r',''));
            //guessWord = randomWord.toUpperCase();
            console.log("GuessWord:" + guessWord);

           
            setStatus('setMusk'); //https://stackoverflow.com/questions/55265604/uncaught-invariant-violation-too-many-re-renders-react-limits-the-number-of-re

        })
        .catch((e) => console.error(e))

    }

    if(status === 'setMusk'){
         //hiddenGuessWord should have underscores insted of the actual word
         console.log("GuessWord:" + guessWord);


        let str = '';
        /*for(let letter of guessWord){
            str += '_';
        }*/

         for(let i=0; i<guessWord.length; i++ ){
             str += '_';
         }
         setHiddenGuessWord(str);
         console.log("Hidden: "+hiddenGuessWord);
         setStatus('playing')
    }

    function handleClick(e) 
    {
        const clickedLetter = e.currentTarget.innerText;
        if(guessWord.includes(clickedLetter)){
            //dertmine if the letter is in the guessWord 
            //if so, reveal it in the hiddenGuessword and change the color of the button 
            revealHiddenGuessWord(clickedLetter);
            e.currentTarget.classList.remove("btn-warning");
            e.currentTarget.classList.add("btn-outline-success", "disabled");            
        }
        else{
            //if NOT, increament hangman status (hangman++) and change the color of the button
            setHangman({...hangman, figure : hangman.figure + 1});
            e.currentTarget.classList.remove("btn-warning");
            e.currentTarget.classList.add("btn-outline-danger", "disabled");
        }

       
     }


    function revealHiddenGuessWord(char){
    let str = '';
    for(let i=0; i<guessWord.length; i++){
        if(guessWord[i] === char){
            str += char;
        }
        else{
            str += hiddenGuessWord[i];
        }
    }
    setHiddenGuessWord(str);
    }

    function determineResults(){
        if(guessWord === hiddenGuessWord && status !== 'launch'){
            //User won
            setHangman({...hangman, winner: true});
            setStatus('results');            
        }
        else if(hangman.figure === 11){
            //User lost
            setHangman({...hangman, winner: false});
            setStatus('results');
        }
    }


    return(
        <>
            <Header />
            <h1 className="text-body-emphasis text-md-center">Hangman game</h1>
            <p className="col-lg-8 mx-auto fs-5 text-muted text-md-center">
                Can you guess the word below before the stickman gets hanged?
            </p>
            <div className="container my-5" style={{marginTop : '50px'}}>
                <div className="p-5 text-center bg-body-tertiary rounded-3">
                    <div className="row  row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <img src={'hangmandrawings\\state'+hangman.figure+'.GIF'} alt='hangman' className="bd-placeholder-img img-thumbnail" width="300" height="200" style={{marginLeft : '20px'}}></img>
                        </div>
                        <div className="col" style={{width: '450px', marginTop: '30px'}}>
                            <Word hiddenGuessWord={hiddenGuessWord}/>
                            <div>
                                <Letter letters={letters} onChoose={event => handleClick(event)} style={{width: '350px'}}/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <ResultsModal winner={hangman.winner}/>

        </>

    );
}

export default Hangman;