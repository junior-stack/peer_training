import * as React from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select} from '@material-ui/core';
import "./../theme/SelectButton.css"

export default function SelectButton() {
  const [color, setColor] = React.useState('white');

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
      <FormControl variant="outlined" size='medium' margin='normal'>
        <Select
        //   labelId="demo-simple-select-outlined-label"
        //   id="demo-simple-select-outlined"
          variant="filled"
          value={color}
          label="Color"
          onChange={handleChange}
        >
          <MenuItem value={"blue"}>Blue</MenuItem>
          <MenuItem value={"red"}>Red</MenuItem>
          <MenuItem value={"yellow"}>Yellow</MenuItem>
        </Select>
      </FormControl>
  );
}