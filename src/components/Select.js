import React from "react";
import { useState } from "react";
const Select = () => {
  const [data, setData] = useState([]);
  const [message, setmessage] = useState("");

  const handleChange = (event) => {
    const values = event.target.value;
    if (data.includes(values)) {
      // setData(data.filter((each) => each != values));
      setmessage("Name already exit");
    } else {
      setData([...data, values]);
    }
  };

  const options = [
    {
      value: 0,
      text: "Angular",
    },
    {
      value: 1,
      text: "Bootstrap",
    },
    {
      value: 2,
      text: "React.js",
    },
    {
      value: 3,
      text: "Vue.js",
    },
  ];
  return (
    <div>
      {options.map((each, i) => {
        return (
          <select value={each} onChange={handleChange}>
            <option value="">{each.value}</option>
            <option value={each.text}>{each.text}</option>
          </select>
        );
      })}

      <p>{data}</p>
      <br />
      <p style={{ color: "red" }}>{message}</p>

      <h5>{data.length}</h5>
    </div>
  );
};

export default Select;
