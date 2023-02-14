/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSHorizontalRule from "@carbon/ibmdotcom-web-components/es/components-react/horizontal-rule/horizontal-rule";

export default function HorizontalRule(content) {
  const { type, size, contrast, weight, slot } = content?.fields || {};
  return (
    <DDSHorizontalRule
      type={type}
      size={size}
      contrast={contrast}
      weight={weight}
      slot={slot}
    ></DDSHorizontalRule>
  );
}
