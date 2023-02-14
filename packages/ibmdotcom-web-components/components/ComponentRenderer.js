/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import dynamic from "next/dynamic";
const BackgroundMedia = dynamic(import("./BackgroundMedia"), { ssr: false });
const CardGroup = dynamic(import("./CardGroup"), { ssr: false });
const ContentBlock = dynamic(import("./ContentBlock"), { ssr: false });
const ContentBlockSegmentedItem = dynamic(
  import("./ContentBlockSegmentedItem"),
  { ssr: false }
);
const ContentGroup = dynamic(import("./ContentGroup"), { ssr: false });
const ContentGroupSimple = dynamic(import("./ContentGroupSimple"), {
  ssr: false,
});
const ContentGroupPictograms = dynamic(import("./ContentGroupPictograms"), {
  ssr: false,
});
const ContentItem = dynamic(import("./ContentItem"), { ssr: false });
const Card = dynamic(import("./Card"), { ssr: false });
const Leadspace = dynamic(import("./Leadspace"), { ssr: false });
const LinkWithIcon = dynamic(import("./LinkWithIcon"), { ssr: false });
const TableOfContents = dynamic(import("./TableOfContents"), { ssr: false });
const CardSectionCarousel = dynamic(import("./CardSectionCarousel"), {
  ssr: false,
});
const HorizontalRule = dynamic(import("./HorizontalRule"), { ssr: false });
const Image = dynamic(import("./Image"), {
  ssr: false,
});
const LeadspaceWithSearch = dynamic(import("./LeadspaceWithSearch"), {
  ssr: false,
});
const Quote = dynamic(import("./Quote"), {
  ssr: false,
});
const SearchWithTypeahead = dynamic(import("./SearchWithTypeahead"), {
  ssr: false,
});
const TabsExtended = dynamic(import("./TabsExtended"), {
  ssr: false,
});
const VideoPlayer = dynamic(import("./VideoPlayer"), {
  ssr: false,
});
const CardSection = dynamic(import("./CardSection"), { ssr: false });
const ThemeZone = dynamic(import("./ThemeZone"), { ssr: false });

// import exploreMore from "../data/exploreMore.json";

const map = {
  "dds-content-block": ContentBlock,
  "dds-card": Card,
  "dds-content-item": ContentItem,
  "dds-content-block-segmented-item": ContentBlockSegmentedItem,
  "dds-content-group": ContentGroup,
  "dds-content-group-simple": ContentGroupSimple,
  "dds-content-group-pictograms": ContentGroupPictograms,
  "dds-card-group": CardGroup,
  "dds-card-section-with-images": CardSection,
  "dds-card-section-carousel": CardSectionCarousel,
  "dds-background-media": BackgroundMedia,
  "dds-horizontal-rule": HorizontalRule,
  "dds-image": Image,
  "dds-leadspace": Leadspace,
  "dds-link-with-icon": LinkWithIcon,
  "dds-leadspace-with-search": LeadspaceWithSearch,
  "dds-quote": Quote,
  "dds-search-with-typeahead": SearchWithTypeahead,
  "dds-table-of-contents": TableOfContents,
  "dds-tabs-extended": TabsExtended,
  "dds-video-player-container": VideoPlayer,
  themeZone: ThemeZone,
};

export default function ComponentRenderer(content) {
  const { components } = content || {};

  let componentList = components || content.content;

  if (!Array.isArray(componentList)) {
    componentList = [componentList];
  }

  return (
    <>
      {componentList?.map((component) => {
        const { id } = component.sys.contentType.sys;
        let ComponentName = map[id];

        if (!ComponentName) {
          return <></>;
        }

        return <ComponentName key={component.sys.id} {...component} />;
      })}
    </>
  );
}
