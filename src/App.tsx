import { BrowserRouter as Router } from "react-router-dom";
import {
  Appbar,
  BottomNavigation,
  RoutingExample,
  RouterMemoProvider,
  Page,
} from "./components";

function App() {
  return (
    <div className="App">
      <Router>
        <RouterMemoProvider>
          <Appbar />
          <Page>
            <RoutingExample />
          </Page>
          <BottomNavigation />
        </RouterMemoProvider>
      </Router>
    </div>
  );
}

export default App;
