const Task = ({ task, id, checked, deleteTask }) => {
  return (
    <>
      <div className="list-container list-scroll-dark">
        <div>
          <input
            className="hidden"
            type="checkbox"
            id="1615288285729"
            checked={checked}
            key={id}
          />
          <label
            className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-900"
            htmlFor="1615288285729"
          >
            <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-500 rounded-full">
              <svg
                className="w-4 h-4 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
            <input
              type="text"
              className="bg-transparent pl-4 text-sm focus:outline-none "
              value={task}
              key={id}
            />
            <button
              className="text-xs focus:outline-none delete-button"
              key={id}
              onClick={deleteTask}
            >
              Delete
            </button>
          </label>
        </div>
      </div>
    </>
  );
};

export default Task;
