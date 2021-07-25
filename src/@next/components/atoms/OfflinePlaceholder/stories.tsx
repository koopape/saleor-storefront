import { storiesOf } from "@storybook/react";
import React from "react";
import { IntlProvider } from "react-intl";

import { OfflinePlaceholder } from ".";

storiesOf("@components/atoms/OfflinePlaceholder", module)
  .addParameters({ component: OfflinePlaceholder })
  .addDecorator(story => <IntlProvider locale="es">{story()}</IntlProvider>)
  .add("default", () => <OfflinePlaceholder />);
