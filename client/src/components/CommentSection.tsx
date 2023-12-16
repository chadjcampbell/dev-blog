import { useQuery, useMutation } from "react-query";
import EachComment from "./EachComment";
import { FormEvent } from "react";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

type CommentSectionProps = {
  blog: string;
};

export type CommentType = {
  id: number;
  blog: string;
  name: string;
  comment: string;
  created_at: string;
};

const CommentSection = ({ blog }: CommentSectionProps) => {
  const useComments = () => {
    return useQuery("comments", async () => {
      const { data } = await axios.get(`${BACKEND_URL}/comments/${blog}`);
      return data;
    });
  };

  const { status, data, isFetching } = useComments();

  // Mutations
  const mutation = useMutation((formData: FormData) => {
    // Assuming postComment returns a Promise
    return postComment(formData);
  });

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    mutation.mutate(formData);
  };

  console.log(data);

  return (
    <section className="not-format">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
          Discussion {data?.length}
        </h2>
      </div>
      <form className="mb-6" onSubmit={onSubmit}>
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
      {status === "loading" ? (
        "Loading..."
      ) : status === "error" ? (
        <p>Something went wrong</p>
      ) : data.length == 0 ? (
        <p>No comments yet</p>
      ) : (
        data?.map((comment: CommentType) => (
          <EachComment key={comment.id} comment={comment} />
        ))
      )}
      <div>{isFetching ? "Updating..." : " "}</div>
    </section>
  );
};

export default CommentSection;
