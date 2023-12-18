import React from "react";
import "../../src/Home.css";
import StatCard from "../components/StatCard";
import Newsletter from "../components/Newsletter";

function Home() {
  return (
    <>
      {/* Hero */}
      <section id="hero" className="background">
        <div className="heroContent">
          <h1>
            Din portal til fleksible <br /> jobbmuligheter
          </h1>
          <p>
            Koble sammen pålitelige tjenesteytere med lokale jobbmuligheter,
            Koble <br />
            sammen pålitelige tjenesteytere med lokale jobbmuligheter.
            <br />
            <br />
            Meld deg på vårt nyhetsbrev for å være blant de første til å bli
            oppdatert!
          </p>
          <button className="primaryBtn">Meld deg på</button>
        </div>
      </section>

      {/* Platform */}
      <section id="platform" className="bgGrey">
        <div className="platformContainer">
          <div>
            <h2>Introduksjon til plattformen</h2>
            <p>
              Vår plattform er dedikert til å koble kvalifiserte tjenesteytere
              med varierte jobbmuligheter - fra IT-support til hagearbeid. Vi
              bygger broer mellom arbeidsgivere og lokalsamfunn, og fremmer et
              mer transparent og effektivt arbeidsmarked.
            </p>
            <p>
              Vår plattform er dedikert til å koble kvalifiserte tjenesteytere
              med varierte jobbmuligheter - fra IT-support til hagearbeid. Vi
              bygger broer mellom arbeidsgivere og lokalsamfunn, og fremmer et
              mer transparent og effektivt arbeidsmarked.
            </p>
            <button className="primaryBtn">Les mer</button>
          </div>
          <img src="/images/phoneMockup.png" />
        </div>
      </section>

      {/* Statistikk */}
      <section id="statistics">
        <div className="statisticsContainer">
          <h2>Oppmerksomhetsfangende statistikk</h2>
          <div className="cardContainer">
            <StatCard title="10.000" text="Jobbmuligheter opprettet" />
            <StatCard title="10.000" text="Jobbmuligheter opprettet" />
            <StatCard title="10.000" text="Jobbmuligheter opprettet" />
            <StatCard title="10.000" text="Jobbmuligheter opprettet" />
          </div>
        </div>
      </section>

      {/* Help us */}
      <section id="helpUs" className="bgGrey">
        <div className="helpUsContainer">
          <div>
            <h2>Vi trenger deg!</h2>
            <p>
              Vår plattform er dedikert til å koble kvalifiserte tjenesteytere
              med varierte jobbmuligheter – fra IT-support til hagearbeid. Vi
              bygger broer mellom arbeidsgivere og lokalsamfunn, og fremmer et
              mer transparent og effektivt arbeidsmarked.
            </p>
            <p>
              Vår plattform er dedikert til å koble kvalifiserte tjenesteytere
              med varierte jobbmuligheter - fra IT-support til hagearbeid. Vi
              bygger broer mellom arbeidsgivere og lokalsamfunn, og fremmer et
              mer transparent og effektivt arbeidsmarked.
            </p>
            <button className="primaryBtn">Ta kontakt</button>
          </div>
          <div className="advantages">
            <div className="advantageText">
              <h5>Lønn</h5>
              <p>
                Vår plattform er dedikert til å koble kvalifiserte tjenesteytere
                med varierte jobbmuligheter.
              </p>
            </div>
            <div className="greyLine" />
            <div className="advantageText">
              <h5>Fordeler</h5>
              <p>
                Vår plattform er dedikert til å koble kvalifiserte tjenesteytere
                med varierte jobbmuligheter – fra IT-support til hagearbeid. Vi
                bygger broer mellom arbeidsgivere og lokalsamfunn.
              </p>
            </div>
            <div className="greyLine" />
            <div className="advantageText">
              <h5>Lorem</h5>
              <p>
                Vår plattform er dedikert til å koble kvalifiserte tjenesteytere
                med varierte jobbmuligheter – fra IT-support til hagearbeid.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section id="news" className="columnAlign">
        <div className="centerAlign">
          <h2>Hold deg oppdatert</h2>
          <p>
            Meld deg på vårt nyhetsbrev for å være blant de første til å vite
            hva vi jobber med, hvordan vi ligger an og ikke minst spennende
            muligheter for å hjelpe til med å utvikle vår plattform!
          </p>
          <Newsletter />
        </div>
      </section>
    </>
  );
}

export default Home;
