import * as React from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import {useHistory} from 'react-router-dom';
import './Popover.scss';
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";

export default function BasicPopover(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const history = useHistory();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  console.log(props?.list , "liost in mui")
let optionsval = props?.list;

  return (
    <div className="mb-3">
      <Button aria-describedby={id}  style={{
        borderRadius: 10,
        backgroundColor: "#424242",
        minWidth: 250,
        minHeight: 40
    }}
     variant="contained" className="" onClick={handleClick}>
       + Add Vehicle
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
      >
        
        <Stack spacing={2} sx={{ width: 200 }}>
      <Autocomplete
      id="combo-box"
      freeSolo
      disableClearable
      options={optionsval}
      getOptionLabel={(option) => option.name}
      onChange={(e, value) =>{
        console.log(e.target, value);
        props.setVehicleName(value.name); 
        history.push({pathname:'/VehiclesPage', state:{selectedVehicle:value} });
        handleClose();
      }
      }
      renderInput={(params) => (
        <TextField
          {...params}
          InputProps={{
            ...params.InputProps,
            type: "search"
          }}
        />
      )}
    />
    </Stack>
      </Popover>
    </div>
  );
}
