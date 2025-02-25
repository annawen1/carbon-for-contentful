/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import dynamic from "next/dynamic";
import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20.js";
import DDSContentSectionCopy from "@carbon/ibmdotcom-web-components/es/components-react/content-section/content-section-copy.js";
import DDSContentSectionHeading from "@carbon/ibmdotcom-web-components/es/components-react/content-section/content-section-heading.js";
import DDSLinkWithIcon from "@carbon/ibmdotcom-web-components/es/components-react/link-with-icon/link-with-icon.js";
import DDSCarousel from "@carbon/ibmdotcom-web-components/es/components-react/carousel/carousel.js";
import DDSCardSectionCarousel from "@carbon/ibmdotcom-web-components/es/components-react/card-section-carousel/card-section-carousel.js";

const Card = dynamic(import("./Card"), { ssr: false });

export default function ContentBlock(content) {
  const { heading, copy, href, ctaText, cards } = content?.fields || {};
  return (
    <DDSCardSectionCarousel>
      <DDSContentSectionHeading>{heading}</DDSContentSectionHeading>
      <DDSContentSectionCopy>{copy}</DDSContentSectionCopy>
      <DDSLinkWithIcon slot="footer" href={href}>
        {ctaText}
        <ArrowRight20 slot="icon" />
      </DDSLinkWithIcon>
      <DDSCarousel>
        {cards.map((card, index) => {
          return <Card {...card} key={index} />;
        })}
      </DDSCarousel>
    </DDSCardSectionCarousel>
  );
}
