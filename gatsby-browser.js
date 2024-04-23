import React from "react";
import { ContentfulLivePreviewProvider } from "@contentful/live-preview/react";

export const wrapRootElement = ({ element }) => (
  <ContentfulLivePreviewProvider
    locale="en-US"
    enableInspectorMode={true}
    enableLiveUpdates={true}
  >
    {element}
  </ContentfulLivePreviewProvider>
);
