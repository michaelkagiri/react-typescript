import React from "react";
import Greeting from "./Greeting"; // Import Greeting component
import Counter from "./Counter"; // Import Counter component

const App: React.FC = () => {
  return (
    <div>
      {/* Pass a name to the Greeting component */}
      <Greeting name="Michael" />

      {/* Render the Counter component */}
      <Counter />
    </div>
  );
};

export default App;
