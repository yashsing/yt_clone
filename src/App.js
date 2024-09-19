import { Provider } from "react-redux";
import "./App.css";
import store from "./utils/store";
import AppContainer from "./components/AppContainer";

function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}

export default App;
