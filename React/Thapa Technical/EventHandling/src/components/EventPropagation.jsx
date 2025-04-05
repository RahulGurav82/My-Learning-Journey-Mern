import React from "react";

// 🧠 Concepts First:
// Bubbling (default): Events propagate from the target element up to the parent elements.

// Capturing: Events go from the parent down to the target element, but you need to explicitly enable this phase.

function EventPropagationDemo() {
  const handleParentClick = () => {
    console.log("Parent Bubble");
  };

  const handleChildClick = () => {
    console.log("Child Bubble");
  };

  const handleParentCapture = () => {
    console.log("Parent Capture");
  };

  const handleChildCapture = () => {
    console.log("Child Capture");
  };

  return (
    <div
      onClick={handleParentClick}
      onClickCapture={handleParentCapture}
      style={{
        padding: "40px",
        backgroundColor: "#cceeff",
      }}
    >
      Parent
      <div
        onClick={handleChildClick}
        onClickCapture={handleChildCapture}
        style={{
          padding: "40px",
          backgroundColor: "#99ddff",
          marginTop: "10px",
        }}
      >
        Child (Click me)
      </div>
    </div>
  );
}

export default EventPropagationDemo;
