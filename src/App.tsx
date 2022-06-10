import { ResetStyles } from "./features/global";
import {
  HomeFeature,
  HeaderFeature,
  FooterFeature,
  PageFeature,
} from "./features";

function App() {
  return (
    <div>
      <ResetStyles />
      <HeaderFeature />
      <PageFeature>
        <HomeFeature />
      </PageFeature>
      <FooterFeature />
    </div>
  );
}

export default App;
