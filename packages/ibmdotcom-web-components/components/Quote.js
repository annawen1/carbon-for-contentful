/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import dynamic from "next/dynamic";
import DDSQuote from "@carbon/ibmdotcom-web-components/es/components-react/quote/quote";
import DDSQuoteSourceHeading from "@carbon/ibmdotcom-web-components/es/components-react/quote/quote-source-heading";
import DDSQuoteSourceCopy from "@carbon/ibmdotcom-web-components/es/components-react/quote/quote-source-copy";
import DDSQuoteSourceBottomCopy from "@carbon/ibmdotcom-web-components/es/components-react/quote/quote-source-bottom-copy";

const LinkWithIcon = dynamic(import("./LinkWithIcon"), {
  ssr: false,
});

export default function Quote(content) {
  const {
    copy,
    quoteMark,
    sourceHeading,
    sourceCopy,
    sourceBottomCopy,
    colorScheme,
    linkWithIcon,
  } = content?.fields || {};

  const linkWithIconFields = {
    fields: { ...linkWithIcon?.fields, slot: "footer" },
  };

  console.log("linkWithIcon", linkWithIcon);

  return (
    <DDSQuote color-scheme={colorScheme} mark-type={quoteMark}>
      {copy}
      <DDSQuoteSourceHeading>{sourceHeading}</DDSQuoteSourceHeading>
      <DDSQuoteSourceCopy>{sourceCopy}</DDSQuoteSourceCopy>
      <DDSQuoteSourceBottomCopy>{sourceBottomCopy}</DDSQuoteSourceBottomCopy>
      <LinkWithIcon {...linkWithIconFields} />
    </DDSQuote>
  );
}
