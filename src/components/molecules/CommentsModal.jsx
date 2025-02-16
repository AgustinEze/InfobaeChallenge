import { ModalContainer } from "../atoms/ModalContainer";
import { Title } from "../atoms/Title";
import { useFetch } from "../../helpers/hooks/useFetch";
import { URL_ROUTES } from "../../helpers/urlRoutes";
import { CommentSkeleton } from "../atoms/CommentSkeleton";
import { Comment } from "../atoms/Comment";

export const CommentsModal = ({ onClose, postId }) => {
  const { data, loading } = useFetch(
    URL_ROUTES.getCommentByPost(postId)
  );

  return (
    <ModalContainer onClose={onClose}>
      <Title title={'Comentarios'} />

      <div className="max-h-64 overflow-y-auto">
        {loading ? (
          [...Array(5)].map((_, index) => <CommentSkeleton key={index} />)
        ) : data?.data?.length > 0 ? (
          data.data.map((comment, index) => (
            <Comment key={index} message={comment.message} />
          ))
        ) : (
          <Comment message={'No hay comentarios aún.'}/>
        )}
      </div>
    </ModalContainer>
  );
};
