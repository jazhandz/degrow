import {media} from "styles/media";
import { useMediaQuery } from "./use-media-query";

export function useIsMobile() {
  return useMediaQuery(media.mobile);
}
