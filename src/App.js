import logo from './logo.svg';
import './App.css';
import { Form, FormControl, InputGroup, ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faClipboard, faHeartbeat, faLink, faMapPin, faMicrochip, faShield } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

function App() {

  const [compliance, setCompliance] = useState(0);

  const [scope, setScope] = useState(0);

  const [affected, SetAffected] = useState(false);

  const [score, setScore] = useState(0);

  const [showsector, setShowsector] = useState(false);
  const [showsector2, setShowsector2] = useState(false);

  const [option1, setOption1] = useState(false);
  const [option2, setOption2] = useState(false);
  const [option3, setOption3] = useState(false);
  const [option4, setOption4] = useState(false);
  const [option5, setOption5] = useState(false);
  const [option6, setOption6] = useState(false);
  const [option7, setOption7] = useState(false);
  const [option8, setOption8] = useState(false);
  const [option9, setOption9] = useState(false);
  const [option10, setOption10] = useState(false);
  const [option11, setOption11] = useState(false);
  const [option12, setOption12] = useState(false);
  const [option13, setOption13] = useState(false);
  const [option14, setOption14] = useState(false);
  const [option15, setOption15] = useState(false);
  const [option16, setOption16] = useState(false);
  const [option17, setOption17] = useState(false);


  const [turnover, setTurnover] = useState(1000);

  useEffect (() =>{ 

    var scope = 0
    
    var score = 0

    if (option1 == true){ scope++ ; scope++}
    if (option2 == true){ scope++}
    if (option3 == true){ scope++}

    if (option5 == true){ score++}
    if (option6 == true){ score++}
    if (option7 == true){ score++}
    if (option8 == true){ score++}
    if (option9 == true){ score++}
    if (option10 == true){ score++}
    if (option11 == true){ score++}
    if (option12 == true){ score++}
    if (option13 == true){ score++}
    if (option14 == true){ score++}
    if (option15 == true){ score++}
    if (option16 == true){ score++}
    if (option17 == true){ score++}

      var final_score = Math.round(((score/13 )*100))
      setCompliance(Math.round(final_score))

    if (scope >= 2){ 
      SetAffected(true)
    }
    else{ SetAffected(false)}
    

  }, [option1, option2, option3, option4, option5, option6, option7,option8, option9, option10, option11, option12, option13, option14, option15, option16, option17])

  

  return (
    <div>

      <div className="Cont1">
      
      <div className="box">
        <h3 style={{color:"darkblue"}}><FontAwesomeIcon icon={faMapPin}/>&nbsp;&nbsp;Die Auswirkungen der NIS2-Richtlinie auf Ihr Unternehmen</h3>
        <br></br>
        <p><b>Branche – Ist Ihr Unternehmen in einer für die Gesellschaft kritischen Branche tätig?</b></p>

        <p style={{color:"grey"}}>Branchen gemäß Artikel 2&nbsp;&nbsp;<span className="sectors click" onClick={ () => setShowsector2(!showsector2)}>Klicken Sie hier, um alle Branchen zu sehen</span></p>
        {showsector2 ?
          <div className="sectors">
            <li>Anbieter öffentlicher elektronischer Kommunikationsnetze oder -dienste</li>
            <li>Trust-Service-Anbieter</li>
            <li>TLD and DNS provider</li>
            <li>Anbieter von Top-Level-Domains (TLD) und DNS-Diensten</li>
            <li>Alleiniger Anbieter eines kritischen Dienstes in einem Mitgliedstaat</li>
            <li>Störungen Ihrer Dienste können erhebliche Auswirkungen auf die öffentliche Sicherheit, Sicherheit und Gesundheit haben und bedeutsame grenzüberschreitende Risiken darstellen.</li>
          </div>:<></>}

        <Form.Check style={{float:"left", display:"flex"}} type="switch" id="default-radio" label="" onChange={ () => setOption1(!option1)}/>
        {option1 ? <p>&nbsp;Ja</p>:<p style={{color:"grey"}}>&nbsp;Nein</p>}
        <br></br>

        <p style={{color:"grey"}}>Branchen gemäß Anhang 1 und 2&nbsp;&nbsp;<span className="sectors click" onClick={ () => setShowsector(!showsector)}>Klicken Sie hier, um alle Branchen zu sehen</span></p>
          
          {showsector ?
          <div className="sectors">
            <li>Energie</li>
            <li>Transport</li>
            <li>Bankwesen</li>
            <li>Finanzmarktinfrastrukturen</li>
            <li>Gesundheit</li>
            <li>Trinkwasserversorgung und -verteilung</li>
            <li>Abfallwirtschaft</li>
            <li>Digital</li>
            <li>Informations- und Kommunikationstechnologie (IKT)</li>
            <li>Öffentliche Verwaltung</li>
            <li>Raumfahrt</li>
            <li>Abfallwirtschaft</li>
            <li>Herstellung, Produktion und Vertrieb von Chemikalien</li>
            <li>Herstellung, Verarbeitung und Vertrieb von Lebensmitteln</li>
            <li>Herstellung von Waren</li>
            <li>Digitale Dienstleister</li>
            <li>Forschung</li>
          </div>:<></>}

           
          <Form.Check style={{float:"left", display:"flex"}} type="switch" id="default-radio" label="" onChange={ () => setOption3(!option3)}/>
          {option3 ? <p>&nbsp;Ja</p>:<p style={{color:"grey"}}>&nbsp;Nein</p>}
          <br></br>
          
         
      
        <p className="nofloat"><b>Größe – Hat Ihr Unternehmen einen Jahresumsatz von über 10 Millionen Euro oder beschäftigt es mehr als 50 Mitarbeiter?</b></p>
        <Form.Check style={{float:"left", display:"flex"}} type="switch" id="default-radio" label="" onChange={ () => setOption2(!option2)}/>
        {option2 ? <p>&nbsp;Ja</p>:<p style={{color:"grey"}}>&nbsp;Nein</p>}
        <br></br>

          
        <br></br><br></br>
        <div className="boxbox">
          {affected ? <b>Höchstwahrscheinlich sind Sie von der neuen Richtlinie betroffen.</b> : <>Es besteht nur eine geringe Wahrscheinlichkeit, dass Sie von der neuen Richtlinie betroffen sind.</>}
        </div>
        </div>



        <div className="box">
        <h3 style={{color:"darkblue"}}><FontAwesomeIcon icon={faClipboard}/>&nbsp;&nbsp;Niveau der minimalen Cybersicherheitsmaßnahmen gemäß Artikel 21</h3>
        <br></br>
        
        
        <br></br>
        <p><b>Verfügt Ihre Organisation über Mechanismen zur Meldung von Cybersicherheitsvorfällen?</b></p>
        <Form.Check style={{float:"left", display:"flex"}} type="switch" id="default-radio" label="" onChange={ () => setOption5(!option5)}/>
        {option5 ? <p>&nbsp;Ja</p>:<p style={{color:"grey"}}>&nbsp;Nein</p>}

        <br></br>
        <p><b>Ist Ihre Unternehmensleitung in die Cybersicherheit eingebunden und entsprechend geschult?</b></p>
        <Form.Check style={{float:"left", display:"flex"}} type="switch" id="default-radio" label="" onChange={ () => setOption6(!option6)}/>
        {option6 ? <p>&nbsp;Ja</p>:<p style={{color:"grey"}}>&nbsp;Nein</p>}

        <br></br>
        <p><b>Welche Cybersicherheitsmaßnahmen hat Ihre Organisation gemäß Artikel 21 implementiert, wie z.B. Verschlüsselung, Mehr-Faktor-Authentifizierung und Zero- Trust-Architektur?</b></p>
        

        <p>Richtlinien zur Risikoanalyse und Informationssicherheit</p>
        <Form.Check style={{float:"left", display:"flex"}} type="switch" id="default-radio" label="" onChange={ () => setOption7(!option7)}/>
        {option7 ? <p>&nbsp;Ja</p>:<p style={{color:"grey"}}>&nbsp;Nein</p>}

        
        <p>Verfahren zur Bearbeitung von Vorfällen</p>
        <Form.Check style={{float:"left", display:"flex"}} type="switch" id="default-radio" label="" onChange={ () => setOption8(!option8)}/>
        {option8 ? <p>&nbsp;Ja</p>:<p style={{color:"grey"}}>&nbsp;Nein</p>}
        
          

        <p>Praktiken zur Geschäftskontinuität (Backup, Wiederherstellung, Krisenmanagement)</p>
        <Form.Check style={{float:"left", display:"flex"}} type="switch" id="default-radio" label="" onChange={ () => setOption9(!option9)}/>
        {option9 ? <p>&nbsp;Ja</p>:<p style={{color:"grey"}}>&nbsp;Nein</p>}
      

        <p>Sicherheitsrichtlinien für Lieferketten mit Lieferanten und Dienstleistern</p>
        <Form.Check style={{float:"left", display:"flex"}} type="switch" id="default-radio" label="" onChange={ () => setOption10(!option10)}/>
        {option10 ? <p>&nbsp;Ja</p>:<p style={{color:"grey"}}>&nbsp;Nein</p>}

      
        <p>Sicherheit bei der Entwicklung, Wartung und Verwundbarkeitsbewältigung von Netzwerken und Informationssystemen</p>
        <Form.Check style={{float:"left", display:"flex"}} type="switch" id="default-radio" label="" onChange={ () => setOption11(!option11)}/>
        {option11 ? <p>&nbsp;Ja</p>:<p style={{color:"grey"}}>&nbsp;Nein</p>}
        
        
        <p>Bewertung der Effektivität des Risikomanagements in der Cybersicherheit</p>
        <Form.Check style={{float:"left", display:"flex"}} type="switch" id="default-radio" label="" onChange={ () => setOption12(!option12)}/>
        {option12 ? <p>&nbsp;Ja</p>:<p style={{color:"grey"}}>&nbsp;Nein</p>}

        
        <p>Grundlegende Cybersicherheitspraktiken und Schulungen</p>
        <Form.Check style={{float:"left", display:"flex"}} type="switch" id="default-radio" label="" onChange={ () => setOption13(!option13)}/>
        {option13 ? <p>&nbsp;Ja</p>:<p style={{color:"grey"}}>&nbsp;Nein</p>}

      
        <p>Verfahren und Richtlinien zur Kryptographie und Verschlüsselung</p>
        <Form.Check style={{float:"left", display:"flex"}} type="switch" id="default-radio" label="" onChange={ () => setOption14(!option14)}/>
        {option14 ? <p>&nbsp;Ja</p>:<p style={{color:"grey"}}>&nbsp;Nein</p>}

      
        <p>Sicherheit der Personalressourcen, Zugangskontrollrichtlinien und Vermögensverwaltung</p>
        <Form.Check style={{float:"left", display:"flex"}} type="switch" id="default-radio" label="" onChange={ () => setOption15(!option15)}/>
        {option15 ? <p>&nbsp;Ja</p>:<p style={{color:"grey"}}>&nbsp;Nein</p>}

        
        <p>Nutzung von Mehr-Faktor-Authentifizierung oder Authentifizierungslösungen</p>
        <Form.Check style={{float:"left", display:"flex"}} type="switch" id="default-radio" label="" onChange={ () => setOption16(!option16)}/>
        {option16 ? <p>&nbsp;Ja</p>:<p style={{color:"grey"}}>&nbsp;Nein</p>}

        
        <p>Sicherung von Sprach-, Video-, Text- und Notfallkommunikationssystemen</p>
        <Form.Check style={{float:"left", display:"flex"}} type="switch" id="default-radio" label="" onChange={ () => setOption17(!option17)}/>
        {option17 ? <p>&nbsp;Ja</p>:<p style={{color:"grey"}}>&nbsp;Nein</p>}

        

      
        <br></br><br></br>

        <div className="boxbox">

        {compliance < 60 ?
        <p style={{color: "red"}}><b>Ihr Cybersicherheitsniveau gemäß NIS2 beträgt aktuell {compliance}%.</b></p>
        :
        <p style={{color: "green"}}><b>Ihr Cybersicherheitsniveau gemäß NIS2 beträgt aktuell {compliance}%. &nbsp;</b></p>
        }

        <ProgressBar now={compliance} />
        </div>

      </div>
      </div>
      

      

    </div>
  );
}

export default App;
