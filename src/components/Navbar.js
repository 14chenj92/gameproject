import "./Navbar.css";

const Navbar = () => {
  return (
    <ul className="nav-links">
      <button className="nav-button"><a href="/">Home</a></button>
      <button className="nav-button"><a href="hangman">Hangman</a></button>
      <button className="nav-button"><a href="tic">Tic-Tac Toe</a></button>
    </ul>
  );
};

export default Navbar;
