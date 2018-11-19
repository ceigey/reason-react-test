let component = ReasonReact.statelessComponent("Error404");

let make = (_children) => {
  /* spread the other default fields of component here and override a few */
  ...component,

  render: self => {
    <div className="error404">
      (ReasonReact.string("404 error!"))
    </div>
  },
};
