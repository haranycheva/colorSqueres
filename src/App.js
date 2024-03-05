import { GlobalStyled } from "GlobalStyle.style";
import { Button, ColorDiv, Wrapper } from "App.styled";
import { ColorList} from "components/List";
import { Component } from "react";

export class App extends Component {
  state = {
    selected: ""
  }
  handleClick = (color, id) =>{
    this.setState({selected: {color: color, id: id} })
  }
  handleButtonClick = () => {
    this.setState({selected: ""})
  }
  render() {
    return (
      <Wrapper>
        <GlobalStyled />
        <ColorList selected={this.state.selected} handleClick={this.handleClick}></ColorList>
        <div>
        <ColorDiv color={this.state.selected.color}></ColorDiv>
        <Button type="button" onClick={this.handleButtonClick}>Reset</Button>
        </div>
      </Wrapper>
    );
  }
}
