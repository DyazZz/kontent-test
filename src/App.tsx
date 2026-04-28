import { Provider } from "react-redux";
import AppHeader from "@widgets/header/Header";
import AppFooter from "@widgets/footer/Footer";
import SearchPage from "@pages/search/SearchPage";
import { store } from "@app/slice";

import "./global.css";
import "./variables.css";

function App() {
  return (
    <Provider store={store}>
      <AppHeader />
      <SearchPage />
      <AppFooter />
    </Provider>
  );
}

export default App;
