import { type PlayerType } from "./gameLogic";

interface FooterProps {
  onReset: () => void;
  currentPlayer: PlayerType;
  winner?: string | null; // Optional prop to handle game state
}

const Footer: React.FC<FooterProps> = ({ onReset, currentPlayer, winner }) => {
  return (
    <>
      <div className="game-status">
        {winner && <h2>Winner: {winner}!</h2>}
        {winner || currentPlayer === null ? (
          <button onClick={onReset}>Play Again</button>
        ) : null}
      </div>
    </>
  );
};

export default Footer;
