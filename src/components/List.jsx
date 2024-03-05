
import { List, Item } from "./List.styled";
import { colours } from "colors";

export function ColorList ({selected, handleClick}){
    return (<List>
        {colours.map(({color, id}) => 
            (<Item key={id} color={color} selected={selected.color === color} onClick={() => handleClick(color, id)}></Item>)
        )}
    </List>);
  }
