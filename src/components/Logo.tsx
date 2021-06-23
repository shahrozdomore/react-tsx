import React from "react";
import appLogo from "../app-logo.svg";

export interface IAppProps {
  title?: string;
}

export default class Logo extends React.Component<IAppProps> {
  public render() {
    return (
      <div>
        <img src={appLogo} className="App-logo" alt="logo" />
      </div>
    );
  }
}
