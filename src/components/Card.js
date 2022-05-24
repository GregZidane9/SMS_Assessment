import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assests/css/card.css'
import card from '../assests/Card.svg';
import female from '../assests/Gender-Female.svg';
import male from '../assests/Gender-Male.svg';
import homeworld from '../assests/Homeworld.svg';
import starship from '../assests/Starship.svg';
import vehicle from '../assests/Vehicle.svg';

const Card = (items)=>{
    //console.log(items)

    return(
        <div className='row'>
            {
                items.items.map((item,index)=>(
                    <div key={index} className='col pt-4'>
                        <div className="card bg-light mb-3 maxWidth">
                            <div className="card-header">
                                <img src={card}/>
                                <h4 className='pt-3'>{item.name}</h4>
                            </div>
                            <div className="card-body">
                                <small><img src={male}/> {item.birth_year}</small>
                                <small className='float-end'>{item.species[0]}</small>
                                <hr/>
                                <div className='bg'><img src={homeworld}/> <small>Homeworld</small><small className='float-end'>{item.homeworld}</small></div>
                                <div className='bg'><img src={vehicle}/> <small>Vehicle</small><small className='float-end'>{item.vehicle}</small></div>
                                <div className='bg'><img src={starship}/> <small>Starship</small><small className='float-end'>{item.starship}</small></div>
                            </div>
                        </div> 
                    </div>
                ))
            }
        </div>
        
        
    );
}



export {Card}