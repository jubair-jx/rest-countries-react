import React, { useEffect, useState } from "react";

const Countries = () => {
  const [country, setCountries] = useState([]);
  useEffect(() => {
    const URL = "https://restcountries.com/v3.1/all";
    fetch(URL)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div>
      <h1>Total Show Country : {country.length}</h1>

      {country.map((desh) => (
        <ShowCountry
          img={desh.flags.png}
          name={desh.name.common}
          capital={desh.capital}
          indep={desh.independent}
        ></ShowCountry>
      ))}
    </div>
  );
};

function ShowCountry(props) {
  return (
    <div
      style={{
        border: "2px solid whitesmoke",
        marginTop: "20px",
        borderRadius: "15px",
      }}
    >
      <img
        style={{ marginTop: "20px", borderRadius: "20px" }}
        src={props.img ? props.img : "Not Found Flag"}
      ></img>
      <h2>Name : {props.name} </h2>
      <p>Capital : {props.capital} </p>
      <p>Independent : {props.indep ? "Yes" : "NO"}</p>
    </div>
  );
}

export default Countries;
