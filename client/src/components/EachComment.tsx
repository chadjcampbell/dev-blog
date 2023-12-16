import { CommentType } from "./CommentSection";

type EachCommentProps = {
  comment: CommentType;
};

const EachComment = ({ comment }: EachCommentProps) => {
  return (
    <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
            {comment.name}
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <time>{String(comment.created_at)}</time>
          </p>
        </div>
      </div>
      <p>{comment.comment}</p>
    </article>
  );
};

export default EachComment;
