import React from "react";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-16">
        <h1 className="text-center text-4xl font-bold mt-8">
          Welcome to My Website
        </h1>
      </div>
    </div>
  );
}

export default App;