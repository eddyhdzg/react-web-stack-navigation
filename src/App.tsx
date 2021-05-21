import { BrowserRouter as Router } from "react-router-dom";
import RoutingExample from "./components/routingExample/RoutingExample";
import BottomNavigation from "./components/bottomNavigation/BottomNavigation";
import Appbar from "./components/appbar/Appbar";
import { RouterMemoProvider } from "./components/RouterMemoContext";

function App() {
  return (
    <div className="App">
      <Router>
        <RouterMemoProvider>
          <Appbar />
          <RoutingExample />
          <BottomNavigation />
        </RouterMemoProvider>
      </Router>
    </div>
  );
}

export default App;
