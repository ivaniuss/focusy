'use client';
import ArrowButton from "./ArrowButton";

export const SceneChanger = ({ changeScene }) => {
  return (
    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-16">
      <ArrowButton direction="left" onClick={() => changeScene("prev")} />
      <ArrowButton direction="right" onClick={() => changeScene("next")} />
    </div>
  );
};
