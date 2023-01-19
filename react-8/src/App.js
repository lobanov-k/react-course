import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";

import "./App.css";
import { Users } from "./components/Users";

const theme = createTheme({
  palette: {
    primary: green,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        {/* <Counter /> */}
        <Users />
      </Container>
    </ThemeProvider>
  );
}

export default App;
