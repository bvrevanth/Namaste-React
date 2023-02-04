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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
