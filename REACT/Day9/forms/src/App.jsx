import NameInput from "./components/NameInput";
import EmailSubmit from "./components/EmailSubmit";
import AgeValidation from "./components/AgeValidation";
import SearchInput from "./components/SearchInput";

const App = () => {
  return (
    <div>
      <NameInput />

      <hr />

      <EmailSubmit />

      <hr />

      <AgeValidation />

      <hr />

      <SearchInput />
    </div>
  );
};

export default App;