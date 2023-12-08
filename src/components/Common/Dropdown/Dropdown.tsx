import React from "react";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import "./Dropdown.css"
import { Contact } from "../../../context/Contacts/ContactsContext";

interface DropdownProps {
  label: string,
  options?: Array<Contact>
  id: string
  menuItemHandler: (id: number) => void
}

const CustomDropdown: React.FC<DropdownProps> = ({ label, options, id, menuItemHandler }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {label}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        {options?.map((option) => <MenuItem onClick={() => {
          handleClose();
          menuItemHandler(option.id)
        }}>{option.name}</MenuItem>)}
      </Menu>
    </>
  );
}



export default CustomDropdown;
