import Container from "@mui/material/Container";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green } from "@mui/material/colors";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";
import { Users } from "./components/Users";
import { UserPage } from "./components/Users/UserPage";
import { About } from "./components/About";
import { Navigation } from "./components/Navigation";
import { NotFound } from "./components/NotFound";

const theme = createTheme({
  palette: {
    primary: green,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="" element={<Users />} />
            <Route path="about" element={<About />} />
            <Route path="users/:id" element={<UserPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </ThemeProvider>
  );
}

export default App;
