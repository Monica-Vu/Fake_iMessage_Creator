import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

interface DropdownProps {
    options?: Array<String> 
    id: string
}

const CustomDropdown: React.FC<DropdownProps> = ({ options, id }) => {
    return (
        <Dropdown>
          <Dropdown.Toggle variant="primary" id={id} size="sm">
            Receiver
          </Dropdown.Toggle>
    
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      );
}

export default CustomDropdown;
