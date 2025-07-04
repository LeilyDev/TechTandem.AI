import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { Sparkles, Mail, Lock, Eye, EyeOff, ArrowRight, Shield, Zap, Users, Star, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate loading for better UX
    await new Promise(resolve => setTimeout(resolve, 800));
    
    if (login(formData.email, formData.password)) {
      toast.success("¡Bienvenido de nuevo! 🎉", {
        description: "Accediendo a tu dashboard...",
      });
      navigate("/dashboard");
    } else {
      toast.error("Credenciales incorrectas", {
        description: "Verifica tu email y contraseña",
      });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#9bc0c2] via-[#8bb8ba] to-[#7bb0b2] relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/8 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#3d8387]/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white/5 rounded-full blur-xl animate-bounce" style={{animationDelay: '2s', animationDuration: '4s'}} />
        <div className="absolute bottom-1/4 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-xl animate-bounce" style={{animationDelay: '3s', animationDuration: '5s'}} />
      </div>

      <div className={`w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Left Side - Welcome Back Content */}
        <div className={`text-white space-y-8 transition-all duration-1000 delay-300 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white animate-pulse" />
              </div>
              <div className="px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                🔐 Acceso seguro
              </div>
            </div>
            
            <h1 className="text-3xl font-bold leading-tight bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
              ¡Bienvenido de nuevo!
            </h1>
            
            <p className="text-lg opacity-90 leading-relaxed">
              Continúa tu journey hacia el éxito profesional con TechTandem.AI
            </p>

            <div className="flex items-center space-x-6 text-xs">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4 text-yellow-300 fill-current" />
                <span>4.9/5 rating</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span>1,000+ activos</span>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="space-y-4">
            <div className="group flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-base">Simulaciones Avanzadas</h3>
                <p className="text-xs opacity-80">Practica con IA de última generación</p>
              </div>
            </div>

            <div className="group flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-base">Progreso Personalizado</h3>
                <p className="text-xs opacity-80">Tracking detallado de tu evolución</p>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="flex items-center space-x-3 mb-4">
              <CheckCircle className="w-6 h-6 text-green-300" />
              <span className="font-semibold text-sm">Plataforma de confianza</span>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center text-xs">
              <div>
                <div className="text-xl font-bold">95%</div>
                <div className="opacity-80 text-xs">Éxito</div>
              </div>
              <div>
                <div className="text-xl font-bold">500+</div>
                <div className="opacity-80 text-xs">Empresas</div>
              </div>
              <div>
                <div className="text-xl font-bold">24/7</div>
                <div className="opacity-80 text-xs">Soporte</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <Card className={`bg-white/95 backdrop-blur-md shadow-2xl border-0 transition-all duration-1000 delay-500 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#569c9f] to-[#4a9297] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
              Iniciar Sesión
            </CardTitle>
            <p className="text-gray-600">
              Accede a tu cuenta y continúa aprendiendo
            </p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Field */}
              <div className="group">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                  Correo Electrónico
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-[#569c9f] transition-colors" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    className="pl-10 h-12 border-gray-200 focus:border-[#569c9f] focus:ring-[#569c9f] transition-all duration-200 hover:border-gray-300"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="group">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700 mb-2 block">
                  Contraseña
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-[#569c9f] transition-colors" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    className="pl-10 pr-12 h-12 border-gray-200 focus:border-[#569c9f] focus:ring-[#569c9f] transition-all duration-200 hover:border-gray-300"
                    value={formData.password}
                    onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#569c9f] transition-colors duration-200"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    checked={formData.rememberMe}
                    onCheckedChange={(checked) => 
                      setFormData(prev => ({ ...prev, rememberMe: checked as boolean }))
                    }
                    className="border-gray-300 data-[state=checked]:bg-[#569c9f] data-[state=checked]:border-[#569c9f]"
                  />
                  <Label htmlFor="remember" className="text-sm text-gray-600 cursor-pointer">
                    Recordarme
                  </Label>
                </div>
                
                <Link 
                  to="/forgot-password" 
                  className="text-sm text-[#569c9f] hover:text-[#4a9297] font-medium transition-colors duration-200 hover:underline"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>

              {/* Login Button */}
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#569c9f] to-[#4a9297] hover:from-[#4a9297] hover:to-[#3d8387] text-white font-semibold h-12 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 relative overflow-hidden group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Iniciando sesión...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Iniciar Sesión</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </Button>

            </form>

            {/* Sign Up Link */}
            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-sm text-gray-500 font-medium">¿No tienes cuenta?</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
              <Link 
                to="/register" 
                className="inline-flex items-center space-x-2 text-[#569c9f] hover:text-[#4a9297] font-semibold transition-colors duration-200 hover:underline"
              >
                <span>Regístrate gratis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;