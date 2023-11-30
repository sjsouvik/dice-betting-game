export const Position = (props) => {
  const { disableBetting, clickHandler, position, bet } = props;

  return (
    <div
      className={`position ${disableBetting ? "disable" : ""}`}
      role="button"
      onClick={() => clickHandler(position)}
    >
      <div>{`Position: ${position}`}</div>
      <span>{`Bet: $${bet}`}</span>
    </div>
  );
};
