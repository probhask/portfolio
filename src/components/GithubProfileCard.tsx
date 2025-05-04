import React from "react";
import { FaGithub } from "react-icons/fa";

const GitHubProfileCard = () => {
  return (
    <a
      href="https://github.com/probhask"
      target="_blank"
      rel="noopener noreferrer"
      className="max-w-sm rounded-xl overflow-hidden shadow-lg  transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col items-center justify-center p-8 text-center cursor-pointer h-full"
    >
      <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-full mb-4">
        <FaGithub className="text-4xl text-gray-800 dark:text-gray-200" />
      </div>
      <h3 className="text-xl font-bold dark:text-white mb-2">
        View All Projects
      </h3>
      <p className="">Explore more of my work on GitHub</p>
      <div className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
        Visit Profile
      </div>
    </a>
  );
};

export default GitHubProfileCard;
