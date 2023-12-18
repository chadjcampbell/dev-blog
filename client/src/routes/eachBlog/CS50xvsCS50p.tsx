import CommentSection from "../../components/CommentSection";

const CS50xvsCS50p = () => {
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
                    <time>Dec. 18, 2023</time>
                  </p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
              CS50x vs CS50p
            </h1>
          </header>
          <p className="lead">
            Here I will give a brief overview of the topics covered in Harvards
            CS50x and CS50p, and a comparison of the two.
          </p>
          <section id="cs50x">
            <h2>CS50x: Introduction to Computer Science</h2>

            <p>
              CS50x, known as "Introduction to Computer Science," is an online
              adaptation of Harvard's introductory computer science course,
              CS50. It aims to provide a comprehensive introduction to the field
              of computer science and programming.
            </p>

            <h3>Topics Covered:</h3>
            <ol>
              <li>C Programming</li>
              <li>Algorithms and Data Structures</li>
              <li>Web Development</li>
              <li>SQL and Databases</li>
              <li>Python</li>
            </ol>

            <h3>Assignments:</h3>
            <p>
              The course includes a series of problem sets and projects that
              reinforce the concepts taught in lectures. Assignments often
              involve implementing solutions in C, and Python is introduced
              later in the course.
            </p>
          </section>

          <section id="cs50p">
            <h2>CS50p: CS50's Introduction to Programming with Python</h2>

            <p>
              CS50p, or "CS50's Introduction to Programming with Python,"
              focuses on teaching programming using the Python language. It
              covers various fundamental topics in Python programming.
            </p>

            <h3>Topics Covered:</h3>
            <ol>
              <li>Basic Concepts</li>
              <li>Libraries</li>
              <li>File I/O</li>
              <li>Regular Expressions</li>
              <li>Object-Oriented Programming</li>
              <li>Miscellaneous Topics</li>
            </ol>

            <h3>Assignments:</h3>
            <p>
              Assignments in CS50p involve coding exercises and projects that
              reinforce Python programming concepts and their practical
              applications.
            </p>
          </section>

          <section id="comparison">
            <h2>Comparison:</h2>

            <ul>
              <li>
                <strong>Programming Languages:</strong> CS50x introduces C and
                later includes Python. CS50p focuses exclusively on Python.
              </li>
              <li>
                <strong>Web Development:</strong> CS50x includes web development
                with HTML, CSS, JavaScript, and Flask. CS50p does not cover web
                development.
              </li>
              <li>
                <strong>Database Interaction:</strong> CS50x covers SQL with
                various database systems. CS50p does not include database
                topics.
              </li>
              <li>
                <strong>Additional Python Topics:</strong> CS50p covers various
                Python-specific topics like libraries, file I/O, regular
                expressions, and object-oriented programming.
              </li>
              <li>
                <strong>Final Project:</strong> Both courses have a final
                project, allowing students to apply their knowledge. CS50p's
                final project is more Python-centric.
              </li>
            </ul>

            <p>
              Whereas CS50x itself focuses on computer science more generally as
              well as programming with C, Python, SQL, and JavaScript, CS50P is
              entirely focused on programming with Python. You can take CS50P
              before CS50x, during CS50x, or after CS50x. But for an
              introduction to computer science itself, you should still take
              CS50x!
            </p>
          </section>
          <CommentSection blog="CS50xvsCS50p" />
        </article>
      </div>
    </div>
  );
};

export default CS50xvsCS50p;
