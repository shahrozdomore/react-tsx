import React from "react";

export interface AboutProps {}

export interface AboutState {}

class About extends React.Component<AboutProps, AboutState> {
  render() {
    return (
      <div>
        <h1>About</h1>
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

export default About;
