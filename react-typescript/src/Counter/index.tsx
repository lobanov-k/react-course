import React, { useState } from "react";

type Props = {
  initValue: number;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
};

interface A {
  a: string;
}

interface B extends A {
  b: string;
}

const objB: B = {
  a: "",
  b: "",
};

const initCounter: number = 0;
let initText: string = "";
let booleanVar: boolean = false;

// initText = false;

export default function Counter({ initValue, onClick }: Props) {
  const [counter, setCounter] = useState<number>(initValue);
  return (
    <>
      <div></div>
      <button
        onClick={(e) => {
          setCounter(counter + 1);
          onClick(e);
        }}
      ></button>
    </>
  );
}
