/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DDSVideoPlayerContainer from "@carbon/ibmdotcom-web-components/es/components-react/video-player/video-player-container";
import DDSLightboxVideoPlayerContainer from "@carbon/ibmdotcom-web-components/es/components-react/lightbox-media-viewer/lightbox-video-player-container";

export default function VideoPlayer(content) {
  const {
    playingMode,
    videoId,
    videoDescription,
    caption,
    hideCaption,
    thumbnail,
    aspectRatio,
    backgroundMode
  } = content?.fields || {};
  return (
    <>
    <DDSVideoPlayerContainer
      playingMode={playingMode}
      videoId={videoId}
      caption={caption}
      hideCaption={hideCaption || undefined}
      video-description={videoDescription}
      thumbnail={thumbnail}
      aspectRatio={aspectRatio}
      background-mode={backgroundMode}
      ></DDSVideoPlayerContainer>
      {playingMode === 'lightbox' ? 
      <DDSLightboxVideoPlayerContainer></DDSLightboxVideoPlayerContainer> : ``}
      </>
      
  );
}
