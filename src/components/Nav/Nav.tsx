import { Button, Navlogo, HamburgerIcon, NavMobileItem } from 'components';
import { useNavMobileContext } from 'contexts';
import { Link } from 'react-router-dom';

export function Nav() {
  const { isVisible, setIsVisible } = useNavMobileContext();
  return (
    <nav className="w-full h-20 bg-gray-100 border-b border-gray-200">
      <div className="w-full h-full max-w-7xl m-auto flex items-center justify-between px-4">
        <Navlogo />
        <div className="hidden lg:flex items-center gap-4 ">
          <Link to="/dashboard">
            <Button>Dashboard</Button>
          </Link>
          <Link to="/contatos">
            <Button>Contatos</Button>
          </Link>
          <Link to="/emails">
            <Button>E-Mails</Button>
          </Link>
          <Link to="/escrever-agora">
            <Button variant="light">Escrever agora</Button>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button onClick={() => setIsVisible((prev) => !prev)}>
            {isVisible ? (
              <span className="font-bold text-2xl">X</span>
            ) : (
              <HamburgerIcon />
            )}
          </Button>
        </div>
      </div>
      {isVisible && (
        <div className=" w-full h-[calc(100vh-80px)] fixed top-20 left-0 bg-white">
          <div className="flex flex-col items-stretch justify-center">
            <NavMobileItem to="/contatos">E-Mails</NavMobileItem>

            <NavMobileItem to="/contatos">Contatos</NavMobileItem>

            <NavMobileItem to="/dashboard">Dashboard</NavMobileItem>

            <NavMobileItem to="/escrever-agora">
              <Button variant="light">Escrever agora</Button>
            </NavMobileItem>
          </div>
        </div>
      )}
    </nav>
  );
}
