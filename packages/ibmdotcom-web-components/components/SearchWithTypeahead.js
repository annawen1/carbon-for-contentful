/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSSearchWithTypeahead from "@carbon/ibmdotcom-web-components/es/components-react/search-with-typeahead/search-with-typeahead";

export default function SearchWithTypeahead(content) {
  const { alternate } = content?.fields || {};
  return (
    <DDSSearchWithTypeahead
      leadspace-search={alternate || undefined}
    ></DDSSearchWithTypeahead>
  );
}
