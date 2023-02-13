/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import dynamic from "next/dynamic";
import DDSBackgroundMedia from "@carbon/ibmdotcom-web-components/es/components-react/background-media/background-media";
import DDSImageItem from "@carbon/ibmdotcom-web-components/es/components-react/image/image-item";

const VideoPlayer = dynamic(import("./VideoPlayer"), { ssr: false });

export default function BackgroundMedia(content) {
  const {
    gradientDirection,
    mobilePosition,
    altText,
    defaultSrc,
    imageItems,
    opacity,
    slot,
    videoPlayer,
  } = content?.fields || {};
  const { url } = defaultSrc?.fields?.file || {};
  return (
    <DDSBackgroundMedia
      gradient-direction={gradientDirection}
      mobile-position={mobilePosition}
      alt={altText}
      default-src={"https:" + url}
      opacity={opacity}
      slot={slot}
    >
      {videoPlayer?.length
        ? VideoPlayer(...videoPlayer)
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
    </DDSBackgroundMedia>
  );
}
