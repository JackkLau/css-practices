import React from "react";

export default function Index({children}: any) {
  const numOfItem = React.Children.count(children);
  return <div className="wrapper">
    {children}
  </div>

}