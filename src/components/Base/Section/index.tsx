import React from "react";

const Section: React.FC<SectionProps> = ({ children, title }) => {
  return (
    <div className="[&:not(:last-child)]:mb-6">
      <div className="mb-6 font-semibold text-2xl">{title}</div>
      {children}
    </div>
  );
};

export default Section;
