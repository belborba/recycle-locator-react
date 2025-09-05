import "./index.css";
import { Footer } from "./Layout/Components/Footer/index";
import { SocialMedia } from "./Layout/Components/SocialMedia";
import { SearchContainer } from "./Layout/Container";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center bg-neutral-100 sm:bg-[url('@/assets/images/bg.svg')] sm:bg-no-repeat sm:bg-cover sm:bg-center">
      <SocialMedia />
      <SearchContainer />
      <Footer />
    </div>
  );
}

export default App;
