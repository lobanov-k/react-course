import { useState, useEffect } from "react";
import PropTypes from "prop-types";

export function Form({ value }) {
  const [count, setCount] = useState(0);
  const [form, setForm] = useState({ text: "", number: "" });

  const { text, number } = form;

  const onClickHandler = () => {
    setCount(count + 1);
  };

  const onChangeHandler = (e) => {
    setForm((prev) => ({
      ...prev,
      text:
        prev.text.length < e.target.value.length ? e.target.value : prev.text,
    }));
  };

  const onNumChange = (e) => {
    setForm((prev) => ({ ...prev, number: e.target.value }));
  };

  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  useEffect(() => {
    console.log("Text was updated", text);

    return () => {
      // callback который вызовется перед unmount компонента
      console.log("Actions before component unmount");
    };
  }, [text, number]); // state, props, какое-либо угодно другое значение

  // второй аргумент [ ... ]
  // [] - вызывается 1 раз во время первого рендера (componentDidMount)
  // [ someValue ] - вызывается когда изменяется значение someValue (componentDidUpdate)

  return (
    <div>
      {value && <div>Start from {value}</div>}
      <div>Count: {count}</div>
      <button onClick={onClickHandler}>Increase</button>
      <div>
        <br />
        <input
          placeholder="Some text ..."
          value={text}
          onChange={onChangeHandler}
        />
        <input placeholder="number" value={number} onChange={onNumChange} />
      </div>
    </div>
  );
}

Form.propTypes = {
  value: PropTypes.number,
};
