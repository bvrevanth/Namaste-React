/*
 *** Parcel Feature ***
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

const heading = React.createElement(
  "h1",
  {
    id: "title",
    style: {
      color: "red",
    },
  },
  "Hellow"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "title2",
    style: {
      color: "green",
    },
  },
  "World"
);

const heading3 = React.createElement(
  "h3",
  {
    id: "title3",
    style: {
      color: "blue",
    },
  },
  "from React"
);

const container = React.createElement(
  "div",
  {
    id: "container",
    style: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    },
  },
  [heading, heading2, heading3]
);

// create root using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// passing react element inside root
root.render(container);
