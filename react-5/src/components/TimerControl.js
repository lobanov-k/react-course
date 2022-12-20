import React, { useState } from "react";
import { Timer } from "./Timer";

export function TimerControl() {
  const [withTimer, setWithTimer] = useState(false);

  return (
    <>
      <button onClick={() => setWithTimer(!withTimer)}>Start Timer</button>
      {withTimer && <Timer />}
    </>
  );
}
