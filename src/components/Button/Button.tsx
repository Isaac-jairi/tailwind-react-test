import classNames from 'classnames';
type Props = {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'default' | 'primary' | 'light' | 'dark';
  children: React.ReactNode;
  onClick?: VoidFunction;
};
export function Button({ type = 'button', variant, children, onClick }: Props) {
  let bgColor = 'text-black';
  if (variant === 'primary')
    bgColor = `bg-primary text-white hover:bg-primaryLight active:bg-primaryDark`;
  if (variant === 'light') bgColor = `bg-primaryLight text-white`;
  if (variant === 'dark') bgColor = `bg-primaryDark text-white`;

  bgColor += ' transition-all';

  return (
    <button
      type={type}
      onClick={onClick}
      className={classNames('py-2 px-4 rounded-md text-sm', bgColor)}
    >
      {children}
    </button>
  );
}
