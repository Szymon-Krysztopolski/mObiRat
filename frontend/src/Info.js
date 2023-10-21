import './Info.css';
import './App.css'
import { Link } from 'react-router-dom';
import React from 'react';
import Collapsible from 'react-collapsible';


export class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      needs: null
    };
    fetch('http://localhost:8080/api/city/test', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(data => {
        this.setState({ needs: data });
      })
  }
  render() {
    var miasto =null;
    if(this.state.needs!==null){
       miasto=this.state.needs.name;
    }
    
    if (this.state.needs !== null) {
      var aRHP = "krew_l" + this.state.needs.bloodType.a_RH_DODATNI + ".png"
      var aRHM = "krew_l" + this.state.needs.bloodType.a_RH_UJEMNY + ".png"
      var bRHP = "krew_l" + this.state.needs.bloodType.b_RH_DODATNI + ".png"
      var bRHM = "krew_l" + this.state.needs.bloodType.b_RH_UJEMNY + ".png"
      var zRHP = "krew_l" + this.state.needs.bloodType.zero_RH_DODATNI + ".png"
      var zRHM = "krew_l" + this.state.needs.bloodType.zero_RH_UJEMNY + ".png"
      var abRHP = "krew_l" + this.state.needs.bloodType.ab_RH_DODATNI + ".png"
      var abRHM = "krew_l" + this.state.needs.bloodType.ab_RH_UJEMNY + ".png"
      console.log(aRHP)
    }

    return (
      <div className="App">
        <div id='rectangle'>
          <Link to='/'>
            <img className='arrow-back' src='normal_u20_1.svg'></img>
          </Link>
          <div className='header'>

            <div className='title'>
              mDawca
            </div>
          </div>
          <div className='title-context'>Aktualne zapotrzebowanie w Twoim<br></br>regionie - {miasto!==null ? miasto : null}</div>
          <div className='blood-results'>
            <div className='row'>
              <div className='blood'><img src={zRHM} className='blood-img'></img>0 Rh-</div>
              <div className='blood'><img src={zRHP} className='blood-img'></img>0 Rh+</div>
              <div className='blood'><img src={aRHM} className='blood-img'></img>A Rh-</div>
              <div className='blood'><img src={aRHP} className='blood-img'></img>A Rh+</div></div>
            <div className='row'>
              <div className='blood'><img src={bRHM} className='blood-img'></img>B Rh-</div>
              <div className='blood'><img src={bRHP} className='blood-img'></img>B Rh+</div>
              <div className='blood'><img src={abRHM} className='blood-img'></img>AB Rh-</div>
              <div className='blood'><img src={abRHP} className='blood-img'></img>AB Rh+</div>
            </div>

          </div>
          <div className='QA'>
            <Collapsible trigger="Czy mogę zostać Dawcą krwi?">
              <div>
                <p>
                Osoby, które mają od 18 do 65 lat i cieszą się dobrym zdrowiem, a także:
                </p>
                <ul>
                  <li>które ważą co najmniej 50 kilogramów,</li>
                  <li>u których w ciągu ostatnich 6 miesięcy nie wykonano akupunktury, tatuażu, przekłucia uszu lub innych części ciała,</li>
                  <li>które w ciągu ostatnich 6 miesięcy nie miały wykonanych żadnych zabiegów operacyjnych, endoskopowych i innych diagnostycznych badań (np. gastroskopii, panendoskopii, artroskopii, laparoskopii),</li>
                  <li>które w ciągu ostatnich 6 miesięcy nie były leczone krwią i preparatami krwiopochodnymi.</li>
                </ul>
              </div>
            
            </Collapsible>
            <Collapsible trigger="Co należy zrobić przed oddaniem krwi?">
            <ul>
              <li>dzień przed oddaniem krwi pij dużo płynów (najlepiej niegazowanej wody mineralnej),</li>
              <li>wyśpij się,</li>
              <li>zjedz lekki posiłek (unikaj pokarmów zawierających dużą ilość tłuszczu).</li>
              <li>ogranicz palenie papierosów,</li>
              <li>nie przychodź oddawać krwi po spożyciu alkoholu lub innych substancji psychoaktywnych,</li>
              <li>zaplanuj dzień, w którym chcesz oddać krew. Sprawdź, w jakie dni i w jakich godzinach jest czynne centrum lub punkt, w którym chcesz oddać krew (możesz to zrobić także podczas akcji wyjazdowych mobilnych punktów pobierania krwi – tzw. krwiobusów).</li>
            </ul>
            </Collapsible>
            <Collapsible trigger="Jak zgłosić się do oddania krwi?">
              <p>W tym celu nie musisz nic robić. Znajdź najbliższy poboru korzystając z wyszukiwarki poniżej i udaj się tam w dogodnym terminie zgodnym z godzinami przyjęć. Najaktualniejsze informacje możesz uzyskać na stronie Twojego Regionalnego Centrum.</p>
            </Collapsible>
            <Collapsible trigger="Co przysługuje dawcom krwi?">
              <div>
              <ul>
                <li>ekwiwalent kaloryczny w wysokości 4500 kcal, zwykle w formie czekolad lub innych produktów żywnościowych,</li>
                <li>zwrot utraconego zarobku na zasadach wynikających z przepisów prawa pracy,</li>
                <li>zwrot kosztów przejazdu z miejsca zamieszkania do nabliższej jednostki publicznej służby krwi (wyłącznie środkami komunikacji zbiorowej: PKP, PKS, itp.)</li>
                <li>zwolnienie z pracy lub zajęć lekcyjnych w dniu, w którym oddaje krew (*na czas pandemii przysługują 2 dni usprawiedliwionej nieobecności w pracy: w dniu oddania i kolejnym)</li>
                <li>legitymacja  Honorowego Dawcy Krwi - zgodnie z Obwieszczeniem MZ z 19.06.2019 wydawana wyłącznie w wersji plastikowej, legitymacje papierowe były wydawane do wyczerpania zapasów. Każda osoba, która chce otrzymać taka legitymację, zgłasza ten fakt w momencie rejestracji; legitymacja zostanie przygotowana i przesłana poczta na adres korespondencyjny.</li>
                <li>otrzymanie wyników badań krwi - najwcześniej następnego dnia po oddaniu krwi!</li>
                <li>ulga podatkowa za oddaną krew jako darowiznę - odliczenie od dochodu przy rozliczeniu PIT</li>
            
              </ul>
              Niektóre samorządy lokalne wprowadzają preferencyjne bilety w komunikacji miejskiej dla zasłużonych honorowych dawców krwi. Kryteria przyznawania prawa do ulgowych/bezpłatnych przejazdów są różne w różnych miastach, prosimy o sprawdzanie informacji na stronach przewoźników.
              </div>
            </Collapsible>
          </div>
          <div className='bottom-row'>
            <div className='button-rows2'>
              <Link to='/needs'>
              <div className='button-row2'>
                <div className='text-in-button2'>
                  Zobacz zapotrzebowanie w innych rejonach
                </div>
              </div>
              </Link>
              <Link to='/map'>
                <div className='button-row'>
                  <div className='text-in-button'>
                    Znajdź najbliższe punkty poboru
                  </div>
                </div>
              </Link>
            </div>
          </div>

        </div>
      </div>
    );
  }

}

export default Info;
