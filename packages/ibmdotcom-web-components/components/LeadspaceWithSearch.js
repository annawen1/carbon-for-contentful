/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import dynamic from "next/dynamic";
import DDSLeadspaceWithSearch from "@carbon/ibmdotcom-web-components/es/components-react/leadspace-with-search/leadspace-with-search";
import DDSLeadspaceWithSearchHeading from "@carbon/ibmdotcom-web-components/es/components-react/leadspace-with-search/leadspace-with-search-heading";
import DDSLeadspaceWithSearchContent from "@carbon/ibmdotcom-web-components/es/components-react/leadspace-with-search/leadspace-with-search-content";
import DDSLeadspaceWithSearchContentHeading from "@carbon/ibmdotcom-web-components/es/components-react/leadspace-with-search/leadspace-with-search-content-heading";
import DDSLeadspaceWithSearchContentCopy from "@carbon/ibmdotcom-web-components/es/components-react/leadspace-with-search/leadspace-with-search-content-copy";

const BackgroundMedia = dynamic(import("./BackgroundMedia"), { ssr: false });
const HorizontalRule = dynamic(import("./HorizontalRule"), { ssr: false });
const SearchWithTypeahead = dynamic(import("./SearchWithTypeahead"), {
  ssr: false,
});

export default function LeadspaceWithSearch(content) {
  const {
    adjacentTheme,
    backgroundMedia,
    heading,
    contentHeading,
    contentCopy,
  } = content?.fields || {};

  return (
    <DDSLeadspaceWithSearch adjacent-theme={adjacentTheme}>
      {!backgroundMedia ? undefined : (
        <BackgroundMedia slot="image" {...backgroundMedia} />
      )}
      <DDSLeadspaceWithSearchHeading>{heading}</DDSLeadspaceWithSearchHeading>
      <DDSLeadspaceWithSearchContent>
        <DDSLeadspaceWithSearchContentHeading>
          {contentHeading}
        </DDSLeadspaceWithSearchContentHeading>
        <DDSLeadspaceWithSearchContentCopy>
          {contentCopy}
        </DDSLeadspaceWithSearchContentCopy>
      </DDSLeadspaceWithSearchContent>
      <SearchWithTypeahead slot="search" leadspace-search></SearchWithTypeahead>
      <HorizontalRule slot="hr"></HorizontalRule>
    </DDSLeadspaceWithSearch>
  );
}
