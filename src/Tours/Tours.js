import './dist/Tours.css';
import Tours_card from './Tours_card'
import { useState } from 'react';

import marsbg from './Images/mars-bg.png';
import marsimg from './Images/mars.png';

import moonbg from './Images/moon-bg.png';
import moonimg from './Images/moon.png';

import stationbg from './Images/station-bg.png';
import stationimg from './Images/station.png';

function Tours() {

  const [mars_bg] = useState(marsbg);
  const [mars_img] = useState(marsimg);

  const [moon_bg] = useState(moonbg);
  const [moon_img] = useState(moonimg);

  const [station_bg] = useState(stationbg);
  const [station_img] = useState(stationimg);

  const description1 = "В миллионах километров от самого большого каньона Земли, располагающегося в Гренландии, поверхность Марса прорезает крупнейшая система каньонов Солнечной системы – долины Маринер. Долины Маринер пролегают вдоль экватора планеты, простираясь на 4000 км – практически на четверть её окружности.";
  const description2 = "Крупнейшее лунное море - Океан Бурь на видимой стороне Луны - оказалось гигантским следом от падения астероида на поверхность естественного спутника Земли. Его протяжённость 2000 км. Как и другие лунные моря, Океан Бурь представляет собой равнину, заполненную застывшей базальтовой лавой.";
  const description3 = "Пилотируемая орбитальная станция, используемая как многоцелевой космический исследовательский комплекс. Во время длительной экспедиции каждый экипаж совершает выход в открытый космос. И, как правило, ни один из выходов не обходится без научных экспериментов за бортом МКС.";

  return (
    <div className="tours__container">
      <h2>Космические туры</h2>

      <div className="tours__cards">
        <Tours_card isreverse={'row'} urlbg={mars_bg} name={"Mars"} place={"Долины Маринер"} description={description1} time_fly={"117 дней"} time_onplanet={"7 дней"} amount_people={"5 человек"} price={"2 000 000"} imgurl={mars_img}/>
        <Tours_card isreverse={'rowreverse'} urlbg={moon_bg} name={"Moon"} place={"Океан Бурь"} description={description2} time_fly={"24 часа"} time_onplanet={"5 часов"} amount_people={"10 человек"} price={"1 000 000"} imgurl={moon_img}/>
        <Tours_card isreverse={'row'} urlbg={station_bg} name={"Space station"} place={""} description={description3} time_fly={"2 часа 9 минут"} time_onplanet={"3 дня"} amount_people={"3 человека"} price={"1 500 000"} imgurl={station_img}/>

        
      </div>
    </div>
  );
}

export default Tours;