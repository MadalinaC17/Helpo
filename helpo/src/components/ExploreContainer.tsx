import "./ExploreContainer.css";
import React, { useState, useEffect } from "react";

interface ContainerProps {}

const ExploreContainer: React.FC<ContainerProps> = () => {
  useEffect(() => {
    getProgramsApi();
  });
  return <div className="container"></div>;
};

function getProgramsApi() {
  fetch("https://helpocode19.appspot.com/programs")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

export default ExploreContainer;
