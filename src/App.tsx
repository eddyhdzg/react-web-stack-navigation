import { BrowserRouter as Router } from "react-router-dom";
import RoutingExample from "./components/routingExample/RoutingExample";
import BottomNavigation from "./components/bottomNavigation/BottomNavigation";
import { RouterMemoProvider } from "./components/RouterMemoContext";

function App() {
  return (
    <div className="App">
      <Router>
        <RouterMemoProvider>
          <RoutingExample />
          <BottomNavigation />
        </RouterMemoProvider>
      </Router>
    </div>
  );
}

export default App;
