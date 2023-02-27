import './App.css';
import Moviecards from './Components/Movieposter';

function App() {
  return (
    <div className="App">
     <Moviecards 
      profile="https://movieplayer.net-cdn.it/t/images/2017/12/20/bright_jpg_191x283_crop_q85.jpg"
      bg="https://occ-0-2433-448.1.nflxso.net/art/cd5c9/3e192edf2027c536e25bb5d3b6ac93ced77cd5c9.jpg"
      name="Bright" 
      year="2017"
      time="117 min"
       dir="David Aye"
       details="Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work with an Orc to find a weapon everyone is prepared to kill for. "
        genre=" Action, Adventure, Drama"/>
     
     <Moviecards 
           profile="https://mr.comingsoon.it/imgdb/locandine/235x336/53750.jpg"
      bg="https://fsmedia.imgix.net/cd/c9/5e/ba/4817/4d9a/93f0/c776ec32ecbc/lara-crofts-neck-looks-unnatural-in-the-new-poster-for-tomb-raider.png"
      name="Tomb Raider" 
      year="2018"
      time="125 min"
       dir="Roar Uthaug"
       details="Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her limits when she finds herself on the island where her father disappeared."
        genre=" Action,Fantasy"/>

     
    </div>
  );
}

export default App;
