import "./Base.css";

/*
UNCOMMENT THESE IF YOU WANT TO USE POLYFILLS:

// import "core-js/stable";
// import "regenerator-runtime/runtime";
*/

/*
UNCOMMENT THESE IF YOU WANT TO USE CSS PROP:

// @ts-ignore: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245
// tslint:disable-next-line: no-unused
// import * as cssprop from "styled-components/cssprop";
*/

import * as React from "react";
import { render } from "react-dom";

const App = () => <h1>Hello, World!</h1>;

render(<App />, document.getElementById("react-root"));
