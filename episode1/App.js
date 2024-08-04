// const heading = React.createElement(

//     "h1",
//      {id: "heading", xyz: "abc"},
//       "Hello World from React program");

const parent = React.createElement(
    "div",
    { id: "parent" },
    [React.createElement(
        "div",
        {  id: "child1" },
        [React.createElement("h1", {}, "i am h1 tag here"),React.createElement("h2", {}, "i am h2 tag here")]
    ),
    React.createElement(
        "div",
        {  id: "child2" },
        [React.createElement("h1", {}, "i am h1 tag here"),React.createElement("h2", {}, "i am h2 tag here")]
    )]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);