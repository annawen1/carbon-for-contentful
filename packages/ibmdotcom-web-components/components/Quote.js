/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSQuote from "@carbon/ibmdotcom-web-components/es/components-react/quote/quote";
import DDSLinkWithIcon from "@carbon/ibmdotcom-web-components/es/components-react/link-with-icon/link-with-icon";
import DDSQuoteSourceHeading from "@carbon/ibmdotcom-web-components/es/components-react/quote/quote-source-heading";
import DDSQuoteSourceCopy from "@carbon/ibmdotcom-web-components/es/components-react/quote/quote-source-copy";
import DDSQuoteSourceBottomCopy from "@carbon/ibmdotcom-web-components/es/components-react/quote/quote-source-bottom-copy";

export default function BackgroundMedia(content) {
  const {
    copy,
    quoteMark,
    sourceHeading,
    sourceCopy,
    sourceBottomCopy,
    colorScheme,
  } = content?.fields || {};
  return (
    <DDSQuote color-scheme={colorScheme} mark-type={quoteMark}>
      {copy}
      <DDSQuoteSourceHeading>{sourceHeading}</DDSQuoteSourceHeading>
      <DDSQuoteSourceCopy>{sourceCopy}</DDSQuoteSourceCopy>
      <DDSQuoteSourceBottomCopy>{sourceBottomCopy}</DDSQuoteSourceBottomCopy>
      <DDSLinkWithIcon slot="footer" href="https://example.com">
        Link with icon
      </DDSLinkWithIcon>
    </DDSQuote>
  );
}
