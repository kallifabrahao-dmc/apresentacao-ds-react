/// <reference types="vite/client" />

import * as React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "CeToast": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}
