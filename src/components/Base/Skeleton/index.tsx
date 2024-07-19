import classNames from "classnames";

/**
 * Skeleton Component
 * @param className Additional classes for custom styling
 * @param rest Additinal properties
 */
const Skeleton = ({
  className,
  ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
  const skeletonClassName = classNames(
    "animate-pulse rounded-md bg-primary/10",
    className
  );
  return <div className={skeletonClassName} {...rest} />;
};

export default Skeleton;
