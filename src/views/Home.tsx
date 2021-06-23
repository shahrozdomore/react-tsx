import React from "react";
import Logo from "../components/Logo";

export interface HomeProps {}

export interface HomeState {}

class Home extends React.Component<HomeProps, HomeState> {
  render() {
    return (
      <div>
        <Logo />
        <h1>Home</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          est dolorum itaque excepturi perspiciatis. Optio quibusdam asperiores
          fugiat delectus corrupti expedita, error sit eligendi odit voluptas
          quis aut? Repellat, vero.
        </p>
      </div>
    );
  }
}

export default Home;
