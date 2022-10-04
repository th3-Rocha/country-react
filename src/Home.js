
import './Home.css';

import { HiSearch } from "react-icons/hi";

function Home() {
  return (
    <div className="containerThree">
      <div className="header">
        <h2>Where in the World?</h2>
        <h3>Dark Mode</h3>
      </div>
      <div className="menu"> 
        <div className="search-container">
          <HiSearch className='search-icon'/>
          <input className="search" type="text" name="SearchInput"  placeholder="Search for a country..." />
        </div>
        <select className="regions">
          <option value="" selected >Filter by Region</option>
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      <div className="gridPlace">
        <div className='flagContainer'>

            
        </div>
        <div className='flagContainer'>

            
        </div>
        <div className='flagContainer'>

            
        </div>
        <div className='flagContainer'>

            
        </div>
        <div className='flagContainer'>

            
        </div>
        <div className='flagContainer'>

            
        </div>
        
      </div>
    </div>
    
  );
}

export default Home;
