import "./index.css";
import { Footer } from "./Layout/Components/Footer/Index";
import { SocialMedia } from "./Layout/Components/SocialMedia";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between items-center bg-neutral-100 bg-[url('@/assets/images/bg.svg')] bg-no-repeat bg-cover bg-center">
      <SocialMedia />
      <p>Click on the Vite and React logos to learn more</p>
      <Footer />
    </div>
  );
}

export default App;
