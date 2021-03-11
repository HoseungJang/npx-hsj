import { createElement } from "react";
import { render } from "ink";

import { Introduce } from "./Introduce";

export const run = () => render(createElement(Introduce));
