import { Project } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectCard: React.FC<Project> = ({
  title,
  description,
  website,
  github,
  imageSrc,
  skills,
}) => {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized // Remove this if you have optimized images
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Link
            href={website}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 transition-colors"
          >
            Live Demo
          </Link>
          <Link
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 px-4 py-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 transition-colors"
          >
            View Code
          </Link>
        </div>
      </div>
    </div>
  );
};
ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
