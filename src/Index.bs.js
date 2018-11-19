// Generated by BUCKLESCRIPT VERSION 4.0.7, PLEASE EDIT WITH CARE
'use strict';

var ReactDOMRe = require("reason-react/src/ReactDOMRe.js");
var ReasonReact = require("reason-react/src/ReasonReact.js");
var Error404$ReactTemplate = require("./Error404.bs.js");
var Component1$ReactTemplate = require("./Component1.bs.js");
var Component2$ReactTemplate = require("./Component2.bs.js");

var initialUrl = ReasonReact.Router[/* dangerouslyGetInitialUrl */3](/* () */0);

function comp1(param) {
  return ReactDOMRe.renderToElementWithId(ReasonReact.element(undefined, undefined, Component1$ReactTemplate.make("Hello #1!", /* array */[])), "index1");
}

function comp2(param) {
  return ReactDOMRe.renderToElementWithId(ReasonReact.element(undefined, undefined, Component2$ReactTemplate.make("Hello #2!", /* array */[])), "index2");
}

function error404(param) {
  return ReactDOMRe.renderToElementWithId(ReasonReact.element(undefined, undefined, Error404$ReactTemplate.make(/* array */[])), "index2");
}

function routes(url) {
  var match = url[/* path */0];
  if (match) {
    switch (match[0]) {
      case "dnd" : 
          return comp2(/* () */0);
      case "home" : 
          return comp1(/* () */0);
      default:
        return error404(/* () */0);
    }
  } else {
    return error404(/* () */0);
  }
}

var initialise = routes(initialUrl);

var watcherID = ReasonReact.Router[/* watchUrl */1](routes);

exports.initialUrl = initialUrl;
exports.comp1 = comp1;
exports.comp2 = comp2;
exports.error404 = error404;
exports.routes = routes;
exports.initialise = initialise;
exports.watcherID = watcherID;
/* initialUrl Not a pure module */