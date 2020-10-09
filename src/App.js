import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";

import AddressInfo from "./components/AddressInfo";
import Header from "./components/Header";
import MapSection from "./components/MapSection";

function App() {
  const [input, setInput] = useState("");
  const [ipData, setIpData] = useState({});

  const getIpInfo = useCallback(async() => {
    try {
      const api_key = process.env.REACT_APP_API_KEY;
			const response = await axios.get(`https://geo.ipify.org/api/v1?apiKey=${api_key}&domain=${input.trim()}`);
      setIpData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }, [input])

	const handleChange = e => {
		setInput(e.target.value);
	};

	const submitHandler = async e => {
		e.preventDefault();
		try {
      await getIpInfo();
		} catch (error) {
			console.log(error);
		}
  };
  
  useEffect(() => {
    getIpInfo();
  }, [getIpInfo])

	return (
		<div className="App">
			<Header handleChange={handleChange} submitHandler={submitHandler} />
			<AddressInfo ipData={ipData} />
			<MapSection />
		</div>
	);
}

export default App;
