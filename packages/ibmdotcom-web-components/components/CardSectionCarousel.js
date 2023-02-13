/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import dynamic from "next/dynamic";
import DDSContentSectionCopy from "@carbon/ibmdotcom-web-components/es/components-react/content-section/content-section-copy.js";
import DDSContentSectionHeading from "@carbon/ibmdotcom-web-components/es/components-react/content-section/content-section-heading.js";
import DDSCarousel from "@carbon/ibmdotcom-web-components/es/components-react/carousel/carousel.js";
import DDSCardSectionCarousel from "@carbon/ibmdotcom-web-components/es/components-react/card-section-carousel/card-section-carousel.js";

const Card = dynamic(import("./Card"), { ssr: false });
// TODO: check if this should be DDSTextCTA
const LinkWithIcon = dynamic(import("./LinkWithIcon"), { ssr: false });

export default function ContentBlock(content) {
  const { heading, copy, linkWithIcon, cards } = content?.fields || {};
  return (
    <DDSCardSectionCarousel>
      <DDSContentSectionHeading>{heading}</DDSContentSectionHeading>
      <DDSContentSectionCopy>{copy}</DDSContentSectionCopy>
      {linkWithIcon && <LinkWithIcon slot="footer" {...linkWithIcon} />}
      <DDSCarousel>
        {cards.map((card, index) => {
          return <Card {...card} key={index} />;
        })}
      </DDSCarousel>
    </DDSCardSectionCarousel>
  );
}
