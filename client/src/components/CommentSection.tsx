import { useQueryClient, useQuery, useMutation } from "react-query";
import EachComment from "./EachComment";

type CommentSectionProps = {
  blog: string;
};

export type CommentType = {
  id: string;
  blog: string;
  name: string;
  comment: string;
  created_at: Date;
};

const CommentSection = ({ blog }: CommentSectionProps) => {
  const queryClient = useQueryClient();

  // Queries
  const query = useQuery<CommentType[], Error>("comments", getComments(blog));

  // Mutations
  const mutation = useMutation(postComment(blog), {
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries("comments");
    },
  });
  return (
    <section className="not-format">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
          Discussion {query.data?.length}
        </h2>
      </div>
      <form className="mb-6">
        <div className="py-2 px-4 mb-4">
          <label htmlFor="name" className="sr-only">
            Your name
          </label>
          <input
            type="text"
            id="name"
            autoComplete="name"
            className="rounded-lg border border-gray-200 dark:border-gray-700 mx-2 w-full text-sm text-gray-900 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Your name"
            required
          />
          <label htmlFor="comment" className="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows={6}
            className="mt-4 rounded-lg border border-gray-200 dark:border-gray-700 mx-2 w-full text-sm text-gray-900 focus:ring-0 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Post comment
        </button>
      </form>
      {query.data?.map((comment: CommentType) => (
        <EachComment key={comment.id} comment={comment} />
      ))}
    </section>
  );
};

export default CommentSection;
