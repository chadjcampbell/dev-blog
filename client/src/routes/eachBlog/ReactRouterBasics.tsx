import CodeSnippet from "../../components/CodeSnippet";
import CommentSection from "../../components/CommentSection";

const ReactRouterBasics = () => {
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
              React Router Basics
            </h1>
          </header>
          <p className="lead">
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
          <CodeSnippet
            lang="jsx"
            code={`
const Home = () => {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the home page!</p>
    </div>
  );
};

export default Home;            
          `}
          />
          <p>
            <strong>src/components/About.jsx:</strong>
          </p>
          <CodeSnippet
            lang="jsx"
            code={`
const About = () => {
  return (
    <div>
      <h2>About</h2>
      <p>This is the about page.</p>
    </div>
  );
};

export default About;              
          `}
          />
          <h2>Step 4: Set up your routes</h2>
          <p>
            Create a new file, <strong>Routes.jsx</strong> in the{" "}
            <strong>src </strong>
            directory. For example:
          </p>
          <p>
            <strong>src/components/Routes.jsx:</strong>
          </p>
          <CodeSnippet
            lang="jsx"
            code={`
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRoutes;             
          `}
          />
          <h2>Step 5: Use the Routes component in App.jsx</h2>
          <p>
            Update <strong>src/App.jsx</strong> to use the
            <strong>Routes </strong>
            component:
          </p>
          <CodeSnippet
            lang="jsx"
            code={`
import './App.css';
import AppRoutes from './components/Routes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Router with Vite</h1>
      </header>
      <main>
        <AppRoutes />
      </main>
    </div>
  );
}

export default App;
          `}
          />
          <h2>Step 6: Start your development server</h2>
          <p>Run the following command to start the development server:</p>
          <CodeSnippet
            lang="bash"
            code={`
npm run dev
          `}
          />
          <p>
            Now, you can visit <strong>http://localhost:3000</strong> in your
            browser and see your React app with React Router in action. The home
            page should display, and you can navigate to the about page using
            the provided links. That's it! You've successfully set up a Vite
            React app with React Router.
          </p>
          <CommentSection />
        </article>
      </div>
    </div>
  );
};

export default ReactRouterBasics;
