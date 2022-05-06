import * as React from "react";
import { MenuItem, FormControl, Select } from "@material-ui/core";
import "./SelectButton.css";
import Context from "../../Context/context";

export default function SelectButton(props) {
  const { colors, setColors } = React.useContext(Context);

  const acc = { ...colors };

  const handleChange = (event) => {
    const usercolor = acc.users[props.id];
    acc.users[props.id] = event.target.value;
    acc[usercolor] = true;
    acc[event.target.value] = false;
    setColors(acc);
  };

  return (
    <FormControl variant="outlined" size="medium" margin="normal">
      <Select
        variant="filled"
        value={colors.users[props.id]}
        label="Color"
        onChange={handleChange}
      >
        <MenuItem value={"white"} disabled={!acc["white"]}>
          White
        </MenuItem>
        <MenuItem value={"blue"} disabled={!acc["blue"]}>
          Blue
        </MenuItem>
        <MenuItem value={"red"} disabled={!acc["red"]}>
          Red
        </MenuItem>
        <MenuItem value={"yellow"} disabled={!acc["yellow"]}>
          Yellow
        </MenuItem>
        <MenuItem value={"green"} disabled={!acc["green"]}>
          Green
        </MenuItem>
      </Select>
    </FormControl>
  );
}
