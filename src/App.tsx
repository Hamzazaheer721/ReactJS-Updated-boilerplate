import { ErrorBoundry } from "components";
import RouteComponent from "routes";

function App() {
  return (
    <ErrorBoundry>
      <RouteComponent />
    </ErrorBoundry>
  );
}

export default App;
