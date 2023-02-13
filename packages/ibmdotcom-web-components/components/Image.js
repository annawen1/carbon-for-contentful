/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSImage from "@carbon/ibmdotcom-web-components/es/components-react/image/image";
import DDSImageItem from "@carbon/ibmdotcom-web-components/es/components-react/image/image-item";

export default function Image(content) {
  const { alt, defaultSrc, border, heading, copy, lightbox, imageItems } =
    content?.fields || {};

  const { url } = defaultSrc?.fields?.file || {};
  return (
    <DDSImage
      alt={alt}
      defaultSrc={"https:" + url}
      border={border}
      heading={heading}
      copy={copy}
      lightbox={lightbox}
    >
      {!imageItems
        ? undefined
        : imageItems.map((image, index) => {
            const { minWidth } = image.fields;
            const { url } = image.fields.image.fields.file;

            return (
              <DDSImageItem
                media={`(min-width: ${minWidth})`}
                srcset={"https:" + url}
                key={index}
              ></DDSImageItem>
            );
          })}
    </DDSImage>
  );
}
