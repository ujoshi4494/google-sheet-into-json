import React, { useState, useEffect, Fragment } from "react";
import "./App.css";
import axios from "axios";
import Table from "./Components/Table";

function App() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("https://api.github.com/users");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchedData();
  };

  const fetchedData = async () => {
    const data = await axios.get(url);
    console.log("url", url);
    setData(data.data);
    console.log("data", data.data);
    return data.data;
  };

  useEffect(() => {
    setIsLoading(true);

    fetchedData();
    setIsLoading(false);
  }, []);
  return (
    <Fragment>
      <h1 className='heading'>Google API into JSON</h1>
      <input
        type='text'
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: "60%", padding: "10px" }}></input>
      <input
        type='button'
        onClick={handleSubmit}
        value='Submit'
        className='input-submit'
      />
      <Table data={data} />
    </Fragment>
  );
}

export default App;
