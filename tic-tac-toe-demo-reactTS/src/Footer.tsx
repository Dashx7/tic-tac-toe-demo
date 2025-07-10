interface FooterProps {
  onReset: () => void;
  winner?: string | null; // Optional prop to handle game state
}

const Footer: React.FC<FooterProps> = ({ onReset, winner }) => {
  return (
    <>
      {winner && (
        <div className="game-status">
          <h2>Winner: {winner}!</h2>
          <button onClick={onReset}>Play Again</button>
        </div>
      )}
    </>
  );
};

export default Footer;
