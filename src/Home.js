
import './Home.css';

import { Component } from 'react';

import axios from 'axios';

import React,{useEffect} from 'react';

import { HiSearch } from "react-icons/hi";


    
  

  class Home extends Component{

    checkVariable(value) {
      let output = typeof value === 'number' ? 1 : 0;
      if (output === 0) output = typeof value === 'string' ? 2 : 0;
      switch (output) {
        case 1:
          return true;
        case 2:
          return false;
      }
    }

    ApiGet(CoutryName) {
      let CountryData;
      if(this.checkVariable(CoutryName) == true){
        axios.get("https://restcountries.com/v2/callingcode/" + CoutryName)
        .then((response) =>{
          CountryData = response.data[0];
          console.log(CountryData);
        });
      }      
      else{
        axios.get("https://restcountries.com/v3.1/name/" + CoutryName)
        .then((response) =>{
          CountryData = response.data[0];
          console.log(CountryData);
        });
      }
    }
    
    render(){
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
            <button onClick={() => this.ApiGet(20)}>asdasdasd</button>
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
                <img className='CountryImg' >
                
                </img>
                <h3 className='CountryName'>
  
                </h3>
                <div className='CountryInfo'>
                  <h4>Population:</h4>
                  
  
                  <h4>Region:</h4>
                  <h4>Capital:</h4>
                
                </div>
                
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
    


  }


export default Home;
