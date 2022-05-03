import * as React from 'react';
import { MenuItem, FormControl, Select} from '@material-ui/core';
import "./../theme/SelectButton.css";
import Context from "./../Context/context";

export default function SelectButton(props) {
  const {users, setUsers} = React.useContext(Context);

  const handleChange = (event) => {
    // setUsers(event.target.value);
        const acc = [];
        let i = 0;
        let curr = 0;

        for(i = 0; i < users.length; i++){
          if(users[i].color === event.target.value){
            return;
          }
        }
        for(i = 0; i < users.length; i++){
            if(users[i].id === props.id){
                acc.push({id: users[i].id, color: event.target.value});
                break;
            }
            acc.push(users[i]);
        }
        for(curr = i + 1; curr < users.length; curr++){
            acc.push(users[curr]);
        }
        setUsers(acc)
    }



  return (
      <FormControl variant="outlined" size='medium' margin='normal'>
        <Select
          variant="filled"
          value={users[props.id].color}
          label="Color"
          onChange={handleChange}
        >
          <MenuItem value={"blue"}>Blue</MenuItem>
          <MenuItem value={"red"}>Red</MenuItem>
          <MenuItem value={"yellow"}>Yellow</MenuItem>
          <MenuItem value={"green"}>Green</MenuItem>
        </Select>
      </FormControl>
  );
}