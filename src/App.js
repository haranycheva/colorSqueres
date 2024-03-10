import { GlobalStyled } from "GlobalStyle.style";
import { Button, ColorDiv, Wrapper } from "App.styled";
import { ColorList} from "components/ColorList/ColorList";
import { Component } from "react";

export class App extends Component {
  state = {
    selected: null
  }
  handleClick = (color, id) =>{
    this.setState({selected: {color, id} })
  }
  handleButtonClick = () => {
    this.setState({selected: null})
  }
  render() {
    return (
      <Wrapper>
        <GlobalStyled />
        <ColorList selected={this.state.selected} onClick={this.handleClick} />
        <div>
        <ColorDiv bgColor={this.state.selected.color} />
        <Button type="button" onClick={this.handleButtonClick}>Reset</Button>
        </div>
      </Wrapper>
    );
  }
}
