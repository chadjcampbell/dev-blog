const EachComment = () => {
  return (
    <article className="p-6 mb-6 text-base bg-white rounded-lg dark:bg-gray-900">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center">
          <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900 dark:text-white">
            Michael Gough
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            <time>Feb. 8, 2022</time>
          </p>
        </div>
      </div>
      <p>
        Very straight-to-point article. Really worth time reading. Thank you!
        But tools are just the instruments for the UX designers. The knowledge
        of the design tools are as important as the creation of the design
        strategy.
      </p>
    </article>
  );
};

export default EachComment;
