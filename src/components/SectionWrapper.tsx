import React from "react";

interface SectionWrapperProps {
  heading: string;
  description?: string;
  id?: string;
  wrapperClassName?: string;
  headingClassName?: string;
  descriptionClassName?: string;
  children: React.ReactNode;
}
const SectionWrapper: React.FC<SectionWrapperProps> = ({
  heading,
  id,
  description,
  wrapperClassName,
  headingClassName,
  descriptionClassName,
  children,
}) => {
  return (
    <section
      id={id || heading}
      className={`w-full space-y-6 ${wrapperClassName}`}
    >
      <div className="space-y-2 flex flex-col items-center justify-center">
        <h2
          className={`text-center text-4xl font-bold border-b-2 w-fit first-letter:uppercase  ${headingClassName}`}
        >
          {heading}
        </h2>
        {description && (
          <h3
            className={`font-bold text-xl  first-letter:uppercase ${descriptionClassName}`}
          >
            Love challenges, love to learn, and love to code.
          </h3>
        )}
      </div>
      {children}
    </section>
  );
};
SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
