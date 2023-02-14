/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import dynamic from "next/dynamic";
import DDSTabsExtended from "@carbon/ibmdotcom-web-components/es/components-react/tabs-extended/tabs-extended";
import DDSTab from "@carbon/ibmdotcom-web-components/es/components-react/tabs-extended/tab";

const ComponentRenderer = dynamic(import("./ComponentRenderer"), {
  ssr: false,
});

export default function TabsExtended(content) {
  const { orientation, tabs } = content?.fields || {};

  return (
    <DDSTabsExtended orientation={orientation || undefined}>
      {tabs.map((tab, index) => {
        const { label, disabled, children, selected } = tab.fields;
        return (
          <DDSTab
            label={label}
            disabled={disabled || undefined}
            selected={selected || undefined}
            key={index}
          >
            {children?.map((child, index) => {
              return <ComponentRenderer content={child} key={index} />;
            })}
          </DDSTab>
        );
      })}
    </DDSTabsExtended>
  );
}
