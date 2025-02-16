import { useState } from "react";
import { Image } from "../atoms/Image";
import { Tag } from "../atoms/Tag";
import { Title } from "../atoms/Title";

export const BlogCardContainer = ({ author, imageUrl, imageAlt, tags }) => {
  const [showAllTags, setShowAllTags] = useState(false);
  const visibleTags = showAllTags ? tags : tags.slice(0, 3);

  return (
    <div className="p-4 border rounded-lg shadow-md border-solid border-black border[1px]">
      <Title title={author} />

      <Image src={imageUrl} alt={imageAlt} className="w-full h-48 rounded-lg" />

      <div className="mt-3 flex flex-wrap gap-2">
        {visibleTags.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
        =
        {tags.length > 3 && !showAllTags && (
          <button
            onClick={() => setShowAllTags(true)}
            className="bg-gray-200 text-gray-700 px-2 py-1 rounded-lg text-sm"
          >
            +{tags.length - 3}
          </button>
        )}
      </div>
    </div>
  );
};
