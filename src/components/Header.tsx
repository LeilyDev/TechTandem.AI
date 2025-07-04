import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import UserDropdown from "./UserDropdown";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const isAuthPage = location.pathname === "/login" || location.pathname === "/register";
  const isSimulationPage = location.pathname.includes("/simulation") || 
                          location.pathname.includes("/group") || 
                          location.pathname.includes("/psychometric");

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (isAuthPage) {
    return (
      <header className="bg-white/90 backdrop-blur-md border-b border-white/20 shadow-lg sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-[#569c9f] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">TT</span>
            </div>
            <span className="text-xl font-semibold text-[#569c9f]">TechTandem.AI</span>
          </Link>
          
          {location.pathname === "/register" ? (
            <Link to="/login">
              <Button variant="outline" size="sm">Ya tengo cuenta</Button>
            </Link>
          ) : (
            <Link to="/register">
              <Button variant="default" size="sm" className="bg-[#569c9f] hover:bg-[#4a9297]">Crear Cuenta</Button>
            </Link>
          )}
        </div>
      </header>
    );
  }

  if (user) {
    return (
      <>
        <header className="bg-white/90 backdrop-blur-md border-b border-white/20 shadow-lg sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            {isSimulationPage ? (
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-[#569c9f] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">TT</span>
                </div>
                <span className="text-xl font-semibold text-[#569c9f]">TechTandem.AI</span>
              </div>
            ) : (
              <Link  className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-[#569c9f] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">TT</span>
                </div>
                <span className="text-xl font-semibold text-[#569c9f]">TechTandem.AI</span>
              </Link>
            )}
            
            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                to="/dashboard" 
                className={`text-sm font-medium transition-colors hover:text-[#569c9f] ${
                  location.pathname === "/dashboard" ? "text-[#569c9f]" : "text-muted-foreground"
                }`}
              >
                Dashboard
              </Link>
              <Link 
                to="/simulations" 
                className={`text-sm font-medium transition-colors hover:text-[#569c9f] ${
                  location.pathname === "/simulations" ? "text-[#569c9f]" : "text-muted-foreground"
                }`}
              >
                Simulaciones
              </Link>
              <Link 
                to="/resources" 
                className={`text-sm font-medium transition-colors hover:text-[#569c9f] ${
                  location.pathname === "/resources" ? "text-[#569c9f]" : "text-muted-foreground"
                }`}
              >
                Recursos
              </Link>
              <Link 
                to="/community" 
                className={`text-sm font-medium transition-colors hover:text-[#569c9f] ${
                  location.pathname === "/community" ? "text-[#569c9f]" : "text-muted-foreground"
                }`}
              >
                Comunidad
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <div 
                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                onClick={() => setShowUserDropdown(true)}
              >
                <div className="w-8 h-8 bg-[#569c9f] rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">
                    {user.firstName?.charAt(0) || 'U'}
                  </span>
                </div>
                <div className="hidden md:block">
                  <div className="text-sm font-medium">{user.firstName} {user.lastName}</div>
                  <div className="text-xs text-muted-foreground">Estudiante</div>
                </div>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                Salir
              </Button>
            </div>
          </div>
        </header>
        
        {showUserDropdown && (
          <UserDropdown onClose={() => setShowUserDropdown(false)} />
        )}
      </>
    );
  }

  return (
    <header className="bg-white/90 backdrop-blur-md border-b border-white/20 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-[#569c9f] rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">TT</span>
          </div>
          <span className="text-xl font-semibold text-[#569c9f]">TechTandem.AI</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-[#569c9f]">
            Inicio
          </Link>
          <Link to="/#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-[#569c9f]">
            ¿Cómo Funciona?
          </Link>
          <Link to="/#testimonials" className="text-sm font-medium text-muted-foreground hover:text-[#569c9f]">
            Testimonios
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline">Iniciar Sesión</Button>
          </Link>
          <Link to="/register">
            <Button variant="default" className="bg-[#569c9f] hover:bg-[#4a9297]">Regístrate Gratis</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
