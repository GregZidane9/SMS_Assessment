import { Breadcrumb} from 'react-bootstrap';
import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import {Header} from './components/Header.js'
import {Filter} from './components/Filter.js'
import {Card} from './components/Card.js'
import {HttpConstants} from './APIService/HttpConstant.ts'



var peopleSeed=[]

function App() {
 
  const [peoples,setPeople]=useState(null); //Data Fetching
  const [planets,setPlanets]=useState(null);

  useEffect(()=>{

    fetch(HttpConstants.APIBase+"people")
    .then(res=>{
      return res.json()
    }).then(data=>{
      SetSpecieName(setPeople,data.results)

    })

    fetch(HttpConstants.APIBase+"planets")
    .then(res=>{
      return res.json()
    }).then(data=>{
      SetSpecieName(setPlanets,data.results)

    })


  },[])

  return (
    
    <div>
      <div className="container pt-3">

        <Header/>
        <hr/>

        <Breadcrumb>
          <Breadcrumb.Item href="#">All Cards</Breadcrumb.Item>
          <Breadcrumb.Item active>Select a card</Breadcrumb.Item>
        </Breadcrumb>

        <Filter/>
        {peoples && <Card items={peoples}/>}
      
        
        
      </div>
      
      
      
    </div>
  );
}



function SetSpecieName(state,items){
 state(items)
  
 items.forEach(s=>{
  var specie = s.species[0]
  
  if(specie){
    fetch(specie)
    .then(res=>{
      return res.json()
    }).then(data=>{
      s.species[0]=data.name;

    })
  }else{
    s.species[0]="Unknown"
  }
 })
  
}
  

export default App;
