interface BadgeProps {
  color: string | number;
  text: string;
  className?: string;
  arialabel?: string;
}

const Badge = ({ color, text, className, arialabel }: BadgeProps) => {
  return (
    <div
      role="status"
      aria-label={arialabel}
      className={
        color +
        (className || "") +
        " font-inter font-semibold rounded-full px-3 py-0.5 max-w-fit"
      }
    >
      {text}
    </div>
  );
};

export default Badge;
