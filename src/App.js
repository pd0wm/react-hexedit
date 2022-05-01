import { Component } from 'react';

import Container from '@mui/material/Container';
import HexEditorBody from './components/HexEditorBody';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };

    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload(event) {
    var file = event.target.files[0];
    var reader = new FileReader();

    reader.onload = (event) => {
      console.log("Parsing");
      const s = [...event.target.result];
      this.setState({data: s.map((c) => c.charCodeAt(0))});
      console.log("done");
    };

    reader.readAsBinaryString(file);
  }

  render() {
    return (
      <div>
        <input type="file" onChange={this.handleUpload}></input>
        <Container>
          <HexEditorBody data={this.state.data}/>
        </Container>
      </div>
    );
  }
}

export default App;
