let initialUrl = ReasonReact.Router.dangerouslyGetInitialUrl();

let comp1     = () => ReactDOMRe.renderToElementWithId(<Component1 message="Hello #1!" />, "index1");
let comp2     = () => ReactDOMRe.renderToElementWithId(<Component2 greeting="Hello #2!" />, "index2");
let error404  = () => ReactDOMRe.renderToElementWithId(<Error404 />, "index2");

let routes = (url: ReasonReact.Router.url) => {
  switch (url.path) {
  | ["home", ..._] => comp1()
  /* | [...stuff] when List.exists(s => true, stuff) => comp1() */
  | ["dnd", ..._] => comp2()
  | _ => error404()
  }
};

let initialise = routes(initialUrl);
let watcherID = ReasonReact.Router.watchUrl(routes);

/* some time later */
/* ReasonReact.Router.unwatchUrl(watcherID); */