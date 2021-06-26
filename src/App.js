import logo from './logo.svg';
import './App.css';
import {AmplifySignOut, withAuthenticator} from "@aws-amplify/ui-react";

function App() {
  return (
    <div className="App">
      <h1>Hello from AWS amplify</h1>
      <AmplifySignOut />
    </div>
  );
}

export default withAuthenticator(App);
