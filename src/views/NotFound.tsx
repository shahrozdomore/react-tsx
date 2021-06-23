import React from "react";
export interface NotFoundProps {}

export interface NotFoundState {}

class NotFound extends React.Component<NotFoundProps, NotFoundState> {
  // state = { :  }
  render() {
    return (
      <div>
        <h1>Page not found</h1>
      </div>
    );
  }
}

export default NotFound;
