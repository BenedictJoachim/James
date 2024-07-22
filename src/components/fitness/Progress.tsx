const Progress = () => (
    <section className="bg-white py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Track Your Progress</h2>
        <div className="flex flex-wrap justify-center space-x-6">
          <div className="w-full md:w-1/3 p-4 bg-purple-500 text-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Progress 1</h3>
            <p>Details about tracking progress...</p>
          </div>
          {/* Add more progress details similarly */}
        </div>
      </div>
    </section>
  );
  
  export default Progress;
  