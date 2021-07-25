import { storiesOf } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";

import { CartSummary } from ".";
import { DEFAULT_PROPS } from "./fixtures";

storiesOf("@components/organisms/CartSummary", module)
  .addParameters({ component: CartSummary })
  .add("default", () => (
    <IntlProvider locale="es">
      <CartSummary {...DEFAULT_PROPS} />
    </IntlProvider>
  ));
