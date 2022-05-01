import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import Container from '@mui/material/Container';
import HexEditorRow from './components/HexEditorRow';


function App() {
  return (
    <div>
      <Container>
        <HexEditorRow/>
      </Container>
    </div>
  );
}

export default App;
