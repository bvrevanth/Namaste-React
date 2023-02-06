/*
 *** Parcel Features ***
 * Created A Server
 * HMR - Hot Module Replacement
 * File Watcher algorithm - C++
 * BUNDLING
 * MINIFY
 * Cleaning our Code
 * Dev abd Production Build
 * Super Fast build algorithm
 * Image Optimization
 * Caching while development
 * Compression
 * Compatible with older version of browser
 * HTTPS on dev
 * port Number
 * Consistent Hashing Algorithm
 * Zero Config
 * Tree shaking
 *
 *
 * Transitive Dependencies
 */

// imported react and reactdom from nodemodule folder

import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => object => HTML(dom)

// JSX
// this is react element
const heading = (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

// this is functional component
const Heading2 = () => (
  <h1 id="title" key="h2">
    Namaste React
  </h1>
);

// React Component
//   - Functional Component :  it is a normal javascript function which returns some piece of JSX or react element
// create root using createRoot
// Name of component starts with capital letter - not a mandatory but a good practice
// using a component inside a component is known as "Component Composition"
// composing components
const HeaderComponent = () => {
  return (
    <div>
      {/* we can pass react element like this inside a functional component*/}
      {heading}
      {/* we can pass functional component inside a function like this */}
      <Heading2 />
      {/* we can also pass functional component like this , because it is nothing but a normal function */}
      {Heading2()}

      {/* we can literally write any piece of JS inside this {} */}

      <h1>Namaste React Functional Component</h1>
      <h2>Namaste h2 tag</h2>
    </div>
  );
};

// we can also write functional component like this
// this is the most used format
// const HeaderComponent2 = () => (
//   <div>
//     <h1>Namaste React Functional Component</h1>
//     <h2>Namaste React by Akshay</h2>
//   </div>
// );

// we also can write functional component like this
// const HeaderComponent3 = function () {
//   <div>
//     <h1>Namaste React Functional Component</h1>
//     <h2>Namaste React by Akshay</h2>
//   </div>;
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element inside root

// while passing react element
// root.render(heading);

// while passing functional component for rendering

root.render(<HeaderComponent />);

// as earlier we talked , we can also pass component like this also
// root.render(HeaderComponent());
