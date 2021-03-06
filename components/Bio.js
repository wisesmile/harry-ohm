import clsx from "clsx";

import Image from "./Image";
import { getSiteMetaData } from "utils/helpers";

export default function Bio({ className }) {
  const { author, social } = getSiteMetaData();

  return (
    <div className={clsx(`flex items-center`, className)}>
      <Image
        className="flex-shrink-0 mb-0 mr-3 rounded-full w-14 h-14"
        src={require("../content/assets/me-001.png")}
        previewSrc={require("../content/assets/profile.png?lqip")}
        alt="Profile"
      />
      <p className="text-base leading-7">
        <b className="font-semibold">{author.summary}</b> by{" "}
        <a href="/post/first-post">{author.name}</a>
      </p>
    </div>
  );
}
