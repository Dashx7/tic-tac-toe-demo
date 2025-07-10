// Creating a simple header component for the Tic Tac Toe game with the current player displayed
interface HeaderProps {
  currentPlayer: string;
}
// Better practice to use functional components with props in React
function Header({ currentPlayer }: HeaderProps) {
  return (
    <header>
      <h1>Tic Tac Toe</h1>
      <p>
        The current player is:{" "}
        {<span className="current-player">{currentPlayer}</span>}
      </p>
    </header>
  );
}

export default Header;
