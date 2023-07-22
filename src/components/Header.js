
function Header(){
    return(
        <header className="bd-header bg-secondary py-3 d-flex align-items-stretch border-bottom border-dark">
            <div className="container-fluid d-flex align-items-center">
                <h1 className="d-flex align-items-center fs-4 text-white mb-0">
                Hangman Game
                </h1>
                <a href="../examples/cheatsheet-rtl/" className="ms-auto link-light" hrefLang="ar">Help</a>
            </div>
        </header>
    );
}

export default Header;

