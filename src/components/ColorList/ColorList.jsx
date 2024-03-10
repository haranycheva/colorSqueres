import { List, Item } from "./ColorList.styled";
import { colours } from "colors";

export function ColorList({ selected, onClick }) {
  return (
    <List>
      {colours.map(({ color, id }) => (
        <Item
          key={id}
          bgColor={color}
          selected={selected.color === color}
          onClick={() => onClick(color, id)}
        />
      ))}
    </List>
  );
}
