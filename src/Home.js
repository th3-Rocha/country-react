
import './Home.css';

import { Component } from 'react';

import axios from 'axios';

import React,{useEffect} from 'react';

import { HiSearch } from "react-icons/hi";


    
  

  class Home extends Component{

    Apiget(){
      CoutryName = "peru";
      let CountryData;
      axios.get("https://restcountries.com/v3.1/name/" + CoutryName)
      .then((response) =>{
        CountryData = response.data[0];
        console.log(CountryData);
      });
    }
    
    render(){
      return (
        Apiget();
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
