import { useEffect, useState } from "react";
import {
  balance,
  findInvestedAmount,
  generateState,
  noOfPositions,
  stages,
} from "../helper";
import { Positions, Timer } from "../components";
import { usePrevious } from "../hooks/usePrevious";

const initialPositionsState = generateState(noOfPositions);

export const Board = () => {
  const [positions, setPositions] = useState(initialPositionsState);
  const [currentBalance, setCurrentBalance] = useState(balance);
  const [stage, setStage] = useState("betting");
  const [winner, setWinner] = useState(null);

  const prevPosition = usePrevious(positions);

  const disableBetting = stage !== "betting" || currentBalance === 0;

  let winningAmount = 0,
    lostAmount = 0;

  const positionClickHandler = (position) => {
    if (disableBetting) {
      return;
    }

    setPositions((oldPositions) => ({
      ...oldPositions,
      [position]: oldPositions[position] + 1,
    }));
    setCurrentBalance((oldBalance) => oldBalance - 1);
  };

  const rebetHandler = () => {
    if (stage === "betting") {
      const requiredAmountToInvest = findInvestedAmount(prevPosition);
      if (requiredAmountToInvest > currentBalance) {
        return;
      }

      setPositions(prevPosition);
      setCurrentBalance(currentBalance - requiredAmountToInvest);
    }
  };

  useEffect(() => {
    if (stage === "betting") {
      setPositions(initialPositionsState);

      if (currentBalance === 0) {
        setStage("over");
        return;
      }
    }

    if (stage === "resultTime") {
      const w = Math.floor(Math.random() * noOfPositions) + 1;
      setWinner(w);
      setCurrentBalance((oldBalance) => oldBalance + positions[w] * 2);
    }
  }, [stage]);

  if (stage === "resultTime" && winner) {
    winningAmount = positions[winner] * 2;
    lostAmount = findInvestedAmount(positions) - winningAmount;
  }

  return (
    <div className="App">
      <h1>Dice betting game</h1>

      <h2>{`Current balance: $${currentBalance}`}</h2>

      <Timer
        key={stages[stage]?.id}
        duration={stages[stage]?.duration}
        stage={stage}
        setStage={setStage}
      />

      <button onClick={rebetHandler}>Rebet</button>

      {stage === "over" && (
        <h3>Game is over since your current balance is 0</h3>
      )}

      {stage === "resultTime" && (
        <h3>{`The winning position is: ${winner}, winning amount: $${winningAmount}, lost amount: $${
          lostAmount || 0
        }`}</h3>
      )}

      <Positions
        dicePositions={positions}
        disableBetting={disableBetting}
        clickHandler={positionClickHandler}
      />
    </div>
  );
};
