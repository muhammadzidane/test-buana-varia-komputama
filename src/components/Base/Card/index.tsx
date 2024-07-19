import React from "react";

import classNames from "classnames";

/**
 * Card Component
 * @param className Additional classes for custom styling
 * @param children Children content to be displayed inside the card
 * @param rest Additional properties
 */
const Card: React.FC<CardProps> = ({ className, children, ...rest }) => {
  const cardClassName = classNames(
    className,
    "bg-white-1 mb-4 py-4 px-6 rounded-sm"
  );

  return (
    <div className={cardClassName} {...rest}>
      {children}
    </div>
  );
};

export default Card;
