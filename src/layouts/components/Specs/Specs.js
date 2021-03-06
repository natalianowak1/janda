import React from "react";
import "./Specs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDonate, faLandmark } from "@fortawesome/free-solid-svg-icons";

const Specs = () => {
  return (
    <div className="specs" id="specs">
      <h3>Specjalizacje</h3>
      <div className="specsBox">
        <div className="businessEntities specsList">
          <div className="specsTitle">
            <FontAwesomeIcon icon={faLandmark} /> Podmioty Gospodarcze
          </div>
          <br></br>
          <ul>
            <li>Rejestracja podmiotów gospodarczych</li>
            <li>Bieżąca obsługa prawna</li>
            <li>Reprezentowanie przedsiębiorców przed sądami</li>
            <li>Windykacja należności</li>
            <li>Opinie prawne</li>
            <li>Arbitraż krajowy i międzynarodowy</li>
            <li>Udział w negocjacjach handlowych</li>
          </ul>
        </div>
        <div className="dueDilligence specsList">
          <div className="specsTitle">
            <FontAwesomeIcon icon={faDonate} /> Due Dilligence
          </div>
          <br></br>
          <ul>
            <li>Wielopłaszczyznowa analiza przedsiębiorstw</li>
            <li>Analiza prawna</li>
            <li>Anliza prawna</li>
            <li>Analiza podatkowa</li>
            <li>
              Określenie istniejącego i potencjalnego ryzyka związanego z
              planowaną transakcją kapitałową
            </li>
            <li>Fuzje, przejęcia, łączenie spółek</li>
            <li>Obsługa prawna restrukturyzacji przedsiębiorstw</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Specs;
