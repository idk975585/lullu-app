import React, { useEffect, useState } from "react";

import axios from "axios";

function Home() {
  const [newz, setNewz] = useState([]);
  const [heading, setHeading] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=79e678e8cc5e4baeb5ce1c4fbcd7bdca"
      )
      .then((res) => {
        setNewz(res.data.articles);
        setHeading("General");
      });
  }, []);
  const Generalnewz = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=cd332ba1257c494ca102b484afd10cbb"
      )
      .then((res) => {
        setNewz(res.data.articles);
        setHeading("General");
      });
  };
  const Sportnewz = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=cd332ba1257c494ca102b484afd10cbb"
      )
      .then((res) => {
        setNewz(res.data.articles);
        setHeading("Sports");
      });
  };
  const Sciencenewz = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=cd332ba1257c494ca102b484afd10cbb"
      )
      .then((res) => {
        setNewz(res.data.articles);
        setHeading("Science");
      });
  };
  const Entertainmentnewz = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=cd332ba1257c494ca102b484afd10cbb"
      )
      .then((res) => {
        setNewz(res.data.articles);
        setHeading("Entertainment");
      });
  };
  const Technologynewz = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=cd332ba1257c494ca102b484afd10cbb"
      )
      .then((res) => {
        setNewz(res.data.articles);
        setHeading("Technology");
      });
  };
  const Businessnewz = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=cd332ba1257c494ca102b484afd10cbb"
      )
      .then((res) => {
        setNewz(res.data.articles);
        setHeading("Business");
      });
  };
  const Healthnewz = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=cd332ba1257c494ca102b484afd10cbb"
      )
      .then((res) => {
        setNewz(res.data.articles);
        setHeading("Health");
      });
  };
  const Indianewz = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=cd332ba1257c494ca102b484afd10cbb"
      )
      .then((res) => {
        setNewz(res.data.articles);
        setHeading("India");
      });
  };
  const Usanewz = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=cd332ba1257c494ca102b484afd10cbb"
      )
      .then((res) => {
        setNewz(res.data.articles);
        setHeading("USA");
      });
  };
  const Canadanewz = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=ca&apiKey=cd332ba1257c494ca102b484afd10cbb"
      )
      .then((res) => {
        setNewz(res.data.articles);
        setHeading("Canada");
      });
  };
  const newzdata = newz.map((value, index) => {
    return (
      <div className="card">
        <div key={index}></div>
        <img src={value.urlToImage} className="card-img-top" alt="news" />
        <div className="card-body">
          <h5 className="card-title">{value.title}</h5>
          <p className="card-text">{value.discription}</p>
          <a className="fullnewz" href={value.url}>
            Article
          </a>
        </div>
      </div>
    );
  });

  return (
    <div>
      {" "}
      <div className="main-box">
        <div className="left-box">
          <h1>CONTENT</h1>
          <div className="downward">
            <button to="/general" className="cotagory" onClick={Generalnewz}>
              General
            </button>

            <button to="/sports" className="cotagory" onClick={Sportnewz}>
              Sports
            </button>

            <button to="/science" className="cotagory" onClick={Sciencenewz}>
              Science
            </button>

            <button
              to="/entertainment"
              className="cotagory"
              onClick={Entertainmentnewz}
            >
              Entertainment
            </button>

            <button
              to="/technology"
              className="cotagory"
              onClick={Technologynewz}
            >
              Technology
            </button>

            <button to="/business" className="cotagory" onClick={Businessnewz}>
              Business
            </button>

            <button to="/health" className="cotagory" onClick={Healthnewz}>
              Health
            </button>

            <hr className="horiline" />
            <h1 className="country-newz">Country</h1>

            <button to="/india" className="cotagory" onClick={Indianewz}>
              India
            </button>

            <button to="/USA" className="cotagory" onClick={Usanewz}>
              USA
            </button>

            <button to="/Canada" className="cotagory" onClick={Canadanewz}>
              Canada
            </button>
          </div>
          <div className="newzhading">{heading}</div>
          <div className="newzdata">{newzdata}</div>
        </div>
      </div>
      <div className="right-box">
        <h1>RADHE</h1>
        <div className="card-body">
          {/* <h5 className="card-title">{value.title}</h5>
          <p className="card-text">{value.discription}</p>
          <a className="fullnewz" href={value.url}>
            Article
          </a> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
