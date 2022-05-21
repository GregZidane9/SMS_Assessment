import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Badge} from 'react-bootstrap';
import card from '../assests/Card.svg';
import deck from '../assests/Deck.svg';

class Header extends React.Component{

    render(){
        return(

        <div class="row">
          <div class="col">
            <Badge className="d-inline" bg="primary"><img src={card}/> All Cards</Badge> <Badge className="d-inline" bg="secondary"><img src={deck}/> Deck</Badge>{' '}
          </div>
          <div class="col-9  d-none d-lg-block d-xl-block">
          <h5 className="text-center"> SW-API Deck Builder</h5>
          </div>
          <div class="col-1">
          <Badge className=" bg-white text-dark border border-secondary p-1 rounded mr-3">Greg Stewart</Badge>
          </div>
        </div>
        );
    }
}

export {Header};