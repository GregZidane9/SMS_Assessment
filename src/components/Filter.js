
import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dropdown,Button,ButtonGroup} from 'react-bootstrap';
import search from '../assests/Search.svg';

const Filter=()=>{
    const radios = [
        { name: 'ASC', value: '1' },
        { name: 'DESC', value: '2' },
       
      ];
      const [radioValue, setRadioValue] = useState('1');

  
        
        return(
            <div className="container pb-2">
                <div className="row">
                    <div className="">
                        <div className="input-group">
                            <input style={{width:"50%"}} type="text" className="form-control border-0 rounded" 
                            placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <div className="bg-white rounded">
                                <img className="p-2" style={{cursor:"pointer"}} src={search}/>
                            </div>

                        <div className="">
                            &nbsp;
                            Sort by &nbsp;
                            <Dropdown as={ButtonGroup}>
                            <Button className=" text-dark rounded border-1" variant="light">Homeworld</Button>
                            <Dropdown.Toggle variant="light" split  id="dropdown-custom-2" />
                            <Dropdown.Menu>
                                <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                            </Dropdown.Menu>
                            </Dropdown>
                            &nbsp;
                            <div className="btn-group btn-group-toggle" data-toggle="buttons">
                                <label className="btn btn-light active">
                                    <input type="radio" name="options" id="option1"  defaultChecked/> ASC
                                </label>
                                <label className="btn btn-light">
                                    <input type="radio" name="options" id="option2" /> DESC
                                </label>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        );
    
}

export  {Filter}