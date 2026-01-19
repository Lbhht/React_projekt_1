import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="appContainer">
      <Header />
      <div id="noteContainer">
        <Note title="Skcikad titel" content="skcikad content" />
      </div>
      <Footer />
    </div>
  );
}

export default App;

// Create a new react app
// 2. Create a App.jsx component
// 3. Create a Heander.jsx component that renders a <Header> element
// to show the Keeper App name in an <h1>
// 4. Create a Footer.jsx compinent that renders a <footer> element
// to shpw a copyright message in a <p> with a dynamically updated year
// 5. Create a Note.jsx compoennt to show a <div> element with a
// <h2> for a title and a <p> for the content.
// 6. Make sure that the final website is styled like the example
