import logo from './logo.svg';
import search from './assests/Search.svg';


import {Card, Container, Row, Col, Badge, Breadcrumb, InputGroup, FormControl
,Dropdown, Button, ButtonGroup,ToggleButton} from 'react-bootstrap';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import {Header} from './components/Header.js'



function App() {
  const radios = [
    { name: 'ASC', value: '1' },
    { name: 'DESC', value: '2' },
   
  ];
  const [radioValue, setRadioValue] = useState('1');

  return (
    
      
    <div>
      <div class="container pt-3">

        <Header/>
        <hr/>

        <Breadcrumb>
          <Breadcrumb.Item href="#">All Cards</Breadcrumb.Item>
          <Breadcrumb.Item active>Select a card</Breadcrumb.Item>
        </Breadcrumb>

      <div class="container pb-2">
        <div class="row">
          <div class="col">
            <div class="input-group">
              <input type="text" class="form-control border-0 rounded" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
              <div class="bg-white rounded">
                <img class="p-2" style={{cursor:"pointer"}} src={search}/>
              </div>
            </div>
          </div>
          <div class="col col-4">
            Sort by &nbsp;
            <Dropdown as={ButtonGroup}>
              <Button class=" text-dark rounded border-1" variant="light">Homeworld</Button>
              <Dropdown.Toggle variant="gray" split  id="dropdown-custom-2" />
              <Dropdown.Menu>
                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <ButtonGroup>
              {radios.map((radio, idx) => (
                <ToggleButton
                  key={idx}
                  id={`radio-${idx}`}
                  type="radio"
                  variant={idx % 2 ? 'light' : 'primary'}
                  name="radio"
                  value={radio.value}
                  checked={radioValue === radio.value}
                  onChange={(e) => setRadioValue(e.currentTarget.value)}
                >
                  {radio.name}
                </ToggleButton>
              ))}
            </ButtonGroup>

          </div>
        </div>
      </div>
      </div>
      <Container>
        <Row>
          <Col>
          <Card border="success" style={{ width: '18rem' }}>
              <Card.Header>Header</Card.Header>
              <Card.Body>
                <Card.Title>Success Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </Card.Text>
              </Card.Body>
          </Card>
          </Col>
        </Row>
      </Container>

      
    </div>
  );
}

export default App;
