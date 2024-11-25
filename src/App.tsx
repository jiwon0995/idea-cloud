import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./routes";
import Providers from "./providers";

export default function App() {
  return (
    <Providers>
      <Router>
        <AppRouter />
      </Router>
    </Providers>
  );
}
