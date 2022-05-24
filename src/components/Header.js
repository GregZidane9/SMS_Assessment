import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Badge} from 'react-bootstrap';
import card from '../assests/Card.svg';
import deck from '../assests/Deck.svg';

class Header extends React.Component{
    
    render(){
        return(

        <div className="row">
          <nav className="navbar justify-content-between">
          <div className="col d-inline">
            <Badge href="#" text="dark" bg="light"><img src={card}/> All Cards</Badge> 
            <Badge href="#" text="dark" bg="light"><img src={deck}/> Deck</Badge>{' '}
          </div>
          <div className="col-8 d-none d-lg-block d-xl-block">
            <h5 className="text-center"> SW-API Deck Builder</h5>
          </div>
            <form className="form-inline">
            <Badge className=" bg-white text-dark border border-secondary p-1 rounded mr-3">Greg Stewart</Badge>
            </form>
          </nav>
        </div>
        );
    }
}

export {Header};