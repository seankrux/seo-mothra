import type { DocumentActionComponent } from "sanity";
import { getLiveUrl } from "../live-url";

export const OpenLiveUrlAction: DocumentActionComponent = (props) => {
  const document = props.draft || props.published;
  const slug = document?.slug as { current?: string } | undefined;
  const url = getLiveUrl(props.type, slug?.current);

  if (!["home", "page", "post", "service"].includes(props.type)) return null;

  return {
    label: "Open Live Page",
    disabled: !url,
    onHandle: () => {
      if (url) window.open(url, "_blank", "noopener,noreferrer");
      props.onComplete();
    },
  };
};
