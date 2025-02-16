import { useState } from "react";
import { Image } from "../atoms/Image";
import { Tag } from "../atoms/Tag";
import { Title } from "../atoms/Title";
import { CommentsModal } from "./CommentsModal";

export const BlogCardContainer = ({
  author,
  imageUrl,
  imageAlt,
  tags,
  postId,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="p-4 border rounded-lg shadow-md border-solid border-black border[1px] cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <Title title={author} />

        <Image
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-48 rounded-lg"
        />

        <div className="mt-3 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
      </div>
      {isModalOpen && (
        <CommentsModal onClose={() => setIsModalOpen(false)} postId={postId} />
      )}
    </>
  );
};
