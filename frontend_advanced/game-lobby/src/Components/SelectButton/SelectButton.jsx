import * as React from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import "./SelectButton.css";
import userContext from "../../Context/userContext";
import colorContext from "../../Context/colorContext";

export default function SelectButton(props) {
  const { users, setUsers } = React.useContext(userContext);
  const { usedColors, setusedColors } = React.useContext(colorContext);

  const newUsers = [...users];
  const newColors = { ...usedColors };

  const handleChange = (event) => {
    const usercolor = users[props.id];
    newUsers[props.id] = event.target.value;
    newColors[usercolor] = true;
    newColors[event.target.value] = false;
    setUsers(newUsers);
    setusedColors(newColors);
  };

  return (
    <FormControl variant="outlined" size="medium" margin="normal">
      <Select
        variant="filled"
        value={users[props.id]}
        label="Color"
        onChange={handleChange}
      >
        <MenuItem value={"white"} disabled={!newColors["white"]}>
          White
        </MenuItem>
        <MenuItem value={"blue"} disabled={!newColors["blue"]}>
          Blue
        </MenuItem>
        <MenuItem value={"red"} disabled={!newColors["red"]}>
          Red
        </MenuItem>
        <MenuItem value={"yellow"} disabled={!newColors["yellow"]}>
          Yellow
        </MenuItem>
        <MenuItem value={"green"} disabled={!newColors["green"]}>
          Green
        </MenuItem>
      </Select>
    </FormControl>
  );
}
