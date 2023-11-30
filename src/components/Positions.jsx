import { Position } from "./Position";

export const Positions = (props) => {
  const { dicePositions, clickHandler, disableBetting } = props;

  return (
    <section className="positions">
      {Object.keys(dicePositions).map((position) => (
        <Position
          key={position}
          disableBetting={disableBetting}
          clickHandler={clickHandler}
          position={position}
          bet={dicePositions[position]}
        />
      ))}
    </section>
  );
};
