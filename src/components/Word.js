
function Word(props){

    const hiddenGuessWord = props.hiddenGuessWord;
    const hiddenGuessWordArray = hiddenGuessWord.split(''); //show each word as a list to have spaces between the underscore 
    const listItems = hiddenGuessWordArray.map((letter, index) =>
      <li className="list-inline-item" key={index}>
        <h1><strong>{letter + ' '}</strong></h1>
      </li>          
    )
    return(
        <ul>{listItems}</ul>
    )
}

export default Word;

//Useful links:
//https://www.w3schools.com/howto/howto_js_toggle_password.asp
//https://www.w3schools.com/cssref/pr_text_text-decoration.php