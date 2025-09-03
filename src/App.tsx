import "./index.css";
import { Footer } from "./Layout/Components/Footer/Index";
import { SocialMedia } from "./Layout/Components/SocialMedia";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between items-center">
      <SocialMedia />
      <p>Click on the Vite and React logos to learn more</p>
      <Footer />
    </div>
  );
}

export default App;
