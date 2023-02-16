import classNames from 'classnames';
import { Button } from 'components/Button';
import { useNavMobileContext } from 'contexts';
import { useNavigate } from 'react-router-dom';

type Props = {
  to: string;
  variant?: 'default' | 'primary';
  children: React.ReactNode;
};
export function NavMobileItem({ to, variant = 'default', children }: Props) {
  const navigate = useNavigate();
  const { isVisible, setIsVisible } = useNavMobileContext();
  let bgColor = 'bg-white text-black';
  if (variant === 'primary') {
    bgColor = 'bg-primary text-white';
  }
  function handlebuttonClick() {
    navigate(to);
    setIsVisible(false);
  }
  return (
    <button
      onClick={handlebuttonClick}
      className={classNames(
        'w-full p-4 text-center justify-center border-b border-gray-100',
        bgColor
      )}
    >
      {children}
    </button>
  );
}
