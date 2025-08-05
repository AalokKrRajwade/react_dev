import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>This is myApp</h1>
    </div>
  );
}

const AnotherElement = (
    <a href="http://google.com" target='_blank'>Visit Google</a>
)

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const areactElement = React.createElement(
    'a',
    {
        href: "https://google.com",
        target: "_blank",
    },
    "Click me to visit google"
)

createRoot(document.getElementById("root")).render(
    <App />
    // <MyApp />

    // AnotherElement
    // areactElement
);
