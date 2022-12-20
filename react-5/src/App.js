import { Form } from "./components/Form";
import { TimerControl } from "./components/TimerControl";

function App() {
  return (
    <div className="App">
      <Form value={5} />
      <TimerControl />
    </div>
  );
}

export default App;
