import CodeSnippet from "../../components/CodeSnippet";
import CommentSection from "../../components/CommentSection";

const ReactRouterCreateBrowserRouter = () => {
  return (
    <div className="pt-8 pb-16 lg:pt-16 lg:pb-24 bg-white dark:bg-gray-900 antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                <img
                  className="mr-4 w-16 h-16 rounded-full"
                  src="/chadLinkedIn.webp"
                  alt="Chad Campbell pic"
                />
                <div>
                  <p className="text-xl font-bold text-gray-900 dark:text-white">
                    Chad J Campbell
                  </p>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    Salesman, Manager, Aspiring Developer
                  </p>
                  <p className="text-base text-gray-500 dark:text-gray-400">
                    <time>Nov. 26, 2023</time>
                  </p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              React Routers createBrowserRouter
            </h1>
          </header>
          <p className="lead">
            This is the recommended router for all React Router web projects. It
            uses the DOM History API to update the URL and manage the history
            stack. It also enables the v6.4 data APIs like loaders, actions,
            fetchers and more.
          </p>
          <p>
            Below is a step-by-step tutorial on using React Router with a Vite
            React app. This assumes you have Node.js and npm installed on your
            machine.
          </p>

          <h2>Step 1: Create a new Vite React app</h2>
          <p>Open your terminal and run the following commands:</p>
          <CodeSnippet
            lang="bash"
            code={`
          npm create vite@latest my-react-router-app --template react 
          cd my-react-router-app
          `}
          />

          <h2>Step 2: Install React Router</h2>
          <p>In your project directory, install React Router:</p>
          <CodeSnippet
            lang="bash"
            code={`
          npm install react-router-dom
          `}
          />

          <h2>Step 3: Create your components</h2>
          <p>
            Create two simple components, <strong>Home.jsx</strong> and{" "}
            <strong>About.jsx</strong> in the <strong>src </strong>
            directory. For example:
          </p>
          <p>
            <strong>src/components/Home.jsx:</strong>
          </p>

          <CommentSection />
        </article>
      </div>
    </div>
  );
};

export default ReactRouterCreateBrowserRouter;
