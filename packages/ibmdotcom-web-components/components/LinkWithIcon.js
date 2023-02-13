/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSLinkWithIcon from "@carbon/ibmdotcom-web-components/es/components-react/link-with-icon/link-with-icon";
import ArrowDown20 from "@carbon/icons-react/es/arrow--down/20.js";
import ArrowRight20 from "@carbon/icons-react/es/arrow--right/20.js";
import Download20 from "@carbon/icons-react/es/download/20.js";
import Launch20 from "@carbon/icons-react/es/launch/20.js";
import PlayOutline20 from "@carbon/icons-react/es/play--outline/20.js";
import Blog20 from "@carbon/icons-react/es/blog/20.js";
import DocumentPDF20 from "@carbon/icons-react/es/document--pdf/20.js";
import NewTab20 from "@carbon/icons-react/es/new-tab/20.js";
import Phone20 from "@carbon/icons-react/es/phone/20.js";
import Calendar20 from "@carbon/icons-react/es/calendar/20.js";
import Email20 from "@carbon/icons-react/es/email/20.js";
import Chat20 from "@carbon/icons-react/es/chat/20.js";

const iconMap = {
  ArrowDown20: <ArrowDown20 slot="icon" />,
  ArrowRight20: <ArrowRight20 slot="icon" />,
  Download20: <Download20 slot="icon" />,
  Launch20: <Launch20 slot="icon" />,
  PlayOutline20: <PlayOutline20 slot="icon" />,
  Blog20: <Blog20 slot="icon" />,
  DocumentPDF20: <DocumentPDF20 slot="icon" />,
  NewTab20: <NewTab20 slot="icon" />,
  Phone20: <Phone20 slot="icon" />,
  Calendar20: <Calendar20 slot="icon" />,
  Email20: <Email20 slot="icon" />,
  Chat20: <Chat20 slot="icon" />,
}

export default function LinkWithIcon(content) {
  const {
    iconPlacement,
    disabled,
    href,
    text,
    icon,
  } = content?.fields || {};
  return (
    <DDSLinkWithIcon
      iconPlacement={iconPlacement}
      disabled={disabled}
      href={href}
      >
      {text} {iconMap[icon]}
    </DDSLinkWithIcon>
  );
}
