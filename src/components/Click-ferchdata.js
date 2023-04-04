import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  const handleClick = async (id) => {
    try {
      const response = await fetch(`https://example.com/api/${id}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch("https://example.com/api");
  //       const data = await response.json();
  //       setData(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <button onClick={() => handleClick(item.id)}>Fetch Data</button>
        </div>
      ))}
    </div>
  );
}

export default App;
