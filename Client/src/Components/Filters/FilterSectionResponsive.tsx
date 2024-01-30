import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { useState } from 'react';
import { ListFlowers } from '../../Api/FlowersInf';

export default function SplitButton({filterNameOrSize,filterBy, labelName}) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [filteredData, setfilteredData] = useState<string[]>([]);
  
  let flowers: Array<{ type_name: string }> = ListFlowers();
  
  React.useEffect(() => {
    if (flowers && flowers.length > 0) {
      const newData = Array.from(new Set(flowers.map((flower) => flower[filterBy])));
      setfilteredData(newData);
    }

  }, [flowers]);

  const handleClick = () => {
    console.info(`You clicked ${filteredData[selectedIndex]}`);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number,
    data
  ) => {
    setSelectedIndex(index);
    setOpen(false);
    filterNameOrSize(filterBy,data)

  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <React.Fragment>
      <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button" className='filters__btnContainer' >
        <Button className="filters__btn"  onClick={ handleClick}>{labelName}</Button>
        <Button 
            className="filters__btnIcon" 
            variant="outlined" 
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="menu"
            onClick={handleToggle}
        >
          <ArrowDropDownIcon />
        </Button>
      </ButtonGroup>
      <Popper
        sx={{
          zIndex: 1,
        }}
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper >
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList id="split-button-menu" autoFocusItem >
                  {filteredData.map((type, index) => (
                    <MenuItem  className='filters__name'
                      key={type}
                      selected={index === selectedIndex}
                      onClick={(event) => handleMenuItemClick(event, index,type)}
                    >
                      {type}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
      
    </React.Fragment>
  );
}