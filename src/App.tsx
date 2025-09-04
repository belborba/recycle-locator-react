import "./index.css";
import { Footer } from "./Layout/Components/Footer/index";
import { SocialMedia } from "./Layout/Components/SocialMedia";
import { SearchContainer } from "./Layout/Container";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between items-center bg-neutral-100 bg-[url('@/assets/images/bg.svg')] bg-no-repeat bg-cover bg-center">
      <SocialMedia />
      <SearchContainer />
      <Footer />
    </div>
  );
}

export default App;
