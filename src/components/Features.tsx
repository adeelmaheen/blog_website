const Features = () => {
  return (
    <div className="w-full min-h-screen bg-slate-50 flex flex-col justify-center items-center px-4">
      {/* Title Section */}
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-8 text-center">
        Languages
      </h1>

      {/* Feature Cards Container */}
      <div className="w-full max-w-6xl bg-white rounded-xl p-6 shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: NextJS */}
          <div className="bg-slate-100 p-6 rounded-lg hover:shadow-md transition duration-300">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800">
              NextJS
            </h2>
            <p className="text-slate-600 mt-2 text-sm md:text-base">
              <strong>Next.js 15 with TypeScript:</strong> Unlocking Advanced Web
              Development.
              <br />
              Next.js 15 introduces robust TypeScript support, enhancing the
              developer experience with improved type safety, autocompletion,
              and easier refactoring. This version brings new features like
              enhanced layouts, nested routing, and better image optimization,
              making it the perfect tool for building modern, full-stack web
              applications.
            </p>
          </div>

          {/* Card 2: Python */}
          <div className="bg-slate-100 p-6 rounded-lg hover:shadow-md transition duration-300">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800">
              Python
            </h2>
            <p className="text-slate-600 mt-2 text-sm md:text-base">
              <strong>Python: The Versatile Programming Language.</strong>
              <br />
              Python is a high-level, interpreted programming language known
              for its simplicity and readability. Its extensive libraries and
              frameworks make it ideal for web development, data analysis,
              machine learning, and automation. Python's versatility and ease
              of use have made it a favorite among developers and beginners
              alike.
            </p>
          </div>

          {/* Card 3: Agentic AI Engineer */}
          <div className="bg-slate-100 p-6 rounded-lg hover:shadow-md transition duration-300">
            <h2 className="text-xl md:text-2xl font-semibold text-slate-800">
              Agentic AI Engineer
            </h2>
            <p className="text-slate-600 mt-2 text-sm md:text-base">
              <strong>Agentic AI Engineer: Pioneering Intelligent Solutions.</strong>
              <br />
              An Agentic AI Engineer specializes in designing and implementing
              autonomous AI systems capable of intelligent decision-making and
              self-learning. By leveraging advanced algorithms and state-of-the-art
              machine learning techniques, these engineers develop innovative
              solutions that drive efficiency, enhance user experiences, and solve
              complex real-world problems. Their expertise is crucial in shaping
              the future of AI-driven technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
