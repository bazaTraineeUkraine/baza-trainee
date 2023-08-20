interface ActionButtonProps {
  icon: React.ReactNode;
  className?: string;
}

export const ActionAdminPanelButton = ({
  icon,
  className = '',
  ...rest
}: ActionButtonProps) => {
  return (
    <button
      className={`rounded border border-solid border-white bg-black p-[0.6rem] text-neutral-50 ${className}`}
      {...rest}
    >
      {icon}
    </button>
  );
};
