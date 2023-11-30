import { useEffect, useRef, useState } from "react";
import { stages } from "../helper/constants";

export const Timer = (props) => {
  const { stage, setStage, duration } = props;

  const [timeLeft, setTimeLeft] = useState(duration);
  const intervalId = useRef(null);

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setTimeLeft((oldTime) => oldTime - 1);
    }, 1000);

    return () => clearInterval(intervalId.current);
  }, []);

  useEffect(() => {
    if (timeLeft === 0) {
      clearInterval(intervalId.current);
      setStage(stages[stage]?.next);
    }
  }, [timeLeft]);

  if (stage === "over") {
    return null;
  }

  return <h2>{`${stages[stage]?.title}: ${timeLeft}s`}</h2>;
};
