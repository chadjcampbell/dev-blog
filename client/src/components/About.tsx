const About = () => {
  return (
    <section className="bg-white dark:bg-gray-900 min-h-[95vh] flex items-center">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className=" text-gray-800 sm:text-lg dark:text-gray-200">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            A Journey into Full Stack Web Development
          </h2>
          <p className="mb-4">
            This blog is a testament to the transformative power of curiosity
            and the boundless possibilities that come with stepping outside
            one's comfort zone. Here, I share my odyssey from sales, finance,
            and management to code repos, bugs battled, and the never ending
            list of languages and tools to learn. Recounting the challenges
            faced, the victories won, and the invaluable lessons learned along
            the way. As a neophyte in the realm of programming, I aim to
            demystify the coding journey for fellow career explorers and
            demonstrate that it's never too late to embrace a new skill set.
          </p>
          <p>
            Join me as I navigate the intricate pathways of coding syntax,
            grapple with debugging puzzles, and ultimately, craft meaningful
            full stack web applications. Whether you're a career transitioner, a
            coding enthusiast, or just someone curious about the fusion of
            business acumen and programming prowess, let's traverse this
            uncharted terrain together. Welcome to my digital memoir—a fusion of
            sales savvy and code charisma.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <a href="https://github.com/chadjcampbell" target="_blank">
            <img
              className="w-full rounded-lg border-solid border-2 border-black dark:border-white hover:scale-105 transform transition duration-500"
              src="githubss.png"
              alt="chads github"
            />
          </a>
          <a href="https://chadjcampbell.com/" target="_blank">
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg border-solid border-2 border-black dark:border-white hover:scale-105 transform transition duration-500"
              src="portfolioss.png"
              alt="chads portfolio"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
