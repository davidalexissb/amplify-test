import logo from "./logo.svg";
import "./App.css";
import { AmplifySignOut, withAuthenticator } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";
function App() {
  Auth.currentUserInfo().then((user) => {
    console.log(user);
  });
  return (
    <div className="App">
      <header className="App-header">
        <AmplifySignOut />
      </header>
    </div>
  );
}

export default withAuthenticator(App);
