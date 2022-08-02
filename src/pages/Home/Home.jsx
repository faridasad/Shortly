import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import introBg from "../../assets/images/illustration-working.svg";
import listIcon1 from "../../assets/images/icon-brand-recognition.svg";
import listIcon2 from "../../assets/images/icon-detailed-records.svg";
import listIcon3 from "../../assets/images/icon-fully-customizable.svg";
import "./home.scss";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [inputValue, setInputValue] = useState("");
  const [links, setLinks] = useState([]);
  const [copiedId, setCopiedId] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleShorten = async () => {
    try {
      const req = await fetch(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      const res = await req.json();
      if (res.ok) {
        setLinks((prevLinks) => [
          { id: res.result.code, inputValue, shortLink: res.result.short_link },
          ...prevLinks,
        ]);
        setInputValue("");
        setErrorText("");
      } else {
        setErrorText(res.error);
        !inputValue && setErrorText("Please add a link");
      }
    } catch (error) {
      setErrorText(error);
    }
  };

  return (
    <>
      <Navbar />
      <section className="intro">
        <div className="intro-wrapper">
          <div className="intro-wrapper-l">
            <h1 className="header-text">More than just shorter links</h1>
            <p className="small-text">
              Build your brand's recognition and get detailed <br /> insights on
              how your links are performing
            </p>
            <button className="button primary">Get Started</button>
          </div>
          <div className="intro-wrapper-r">
            <img src={introBg} alt="background" />
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="input-container">
          <input
            className={errorText && "invalid"}
            value={inputValue}
            type="text"
            placeholder="Shorten a link here..."
            tabIndex="0"
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleShorten()}
          />
          {errorText && <span className="error-text"> {errorText} </span>}
          <button className="button primary shorten" onClick={handleShorten}>
            Shorten it!
          </button>
        </div>
        {links.map((link, index) => {
          return (
            <div className="link-container" key={index}>
              <p className="domain-text">{link.inputValue}</p>
              <div className="border"></div>
              <a className="short-link" target="_blank" href={`https://www.${link.shortLink}`}>{link.shortLink}</a>
              <button
                className={
                  copiedId === link.id
                    ? "button primary copied"
                    : "button primary copy"
                }
                onClick={() => {
                  setCopiedId(link.id);
                  navigator.clipboard.writeText(link.shortLink);
                }}
              >
                {copiedId === link.id ? "Copied!" : "Copy"}
              </button>
            </div>
          );
        })}
        <div className="stats-wrapper">
          <div>
            <h1 className="stats-header">Advanced Statistics</h1>
            <p className="stats-small-text">
              Track how your links are performing across the web with <br /> our
              advanced statistics dashboard
            </p>
          </div>
          <ul className="cards">
            <li className="cards-item">
              <div className="icon-container">
                <img src={listIcon1} alt="Brand Recognition" />
              </div>
              <p className="cards-header">Brand Recognition</p>
              <p className="cards-desc">
                Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instil confidence in your
                content
              </p>
            </li>
            <li className="cards-item">
              <div className="icon-container">
                <img src={listIcon2} alt="Brand Recognition" />
              </div>
              <p className="cards-header">Detailed Records</p>
              <p className="cards-desc">
                Gain insights into who is clicking your links. Knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </li>
            <li className="cards-item">
              <div className="icon-container">
                <img src={listIcon3} alt="Brand Recognition" />
              </div>
              <p className="cards-header">Fully Customizable</p>
              <p className="cards-desc">
                Improve brand awareness and content discoverability through
                customizable links, supercharging audience engagement.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="boost">
        <h1 className="boost-header">Boost your links today</h1>
        <button className="button primary">Get Started</button>
      </section>

      <Footer />
    </>
  );
};

export default Home;
