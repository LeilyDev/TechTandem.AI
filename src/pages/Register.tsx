import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, User, Mail, Lock, Sparkles, CheckCircle, Zap, Users, Star } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    interests: [] as string[]
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isAnimated, setIsAnimated] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const availableInterests = [
    "JavaScript", "Python", "React", "Node.js", "AI/ML",
    "DevOps", "Mobile", "UI/UX", "Data Science", "Cloud"
  ];

  const handleInterestToggle = (interest: string) => {
    if (formData.interests.includes(interest)) {
      setFormData({
        ...formData,
        interests: formData.interests.filter(i => i !== interest)
      });
    } else {
      setFormData({
        ...formData,
        interests: [...formData.interests, interest]
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "Nombre requerido";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Apellido requerido";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Contraseña requerida";
    } else if (formData.password.length < 6) {
      newErrors.password = "Mínimo 6 caracteres";
    }
    if (formData.interests.length === 0) {
      newErrors.interests = "Selecciona al menos una área";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    const success = register(formData);
    
    if (success) {
      toast({
        title: "¡Registro exitoso!",
        description: "Bienvenido a TechTandem.AI",
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Error",
        description: "El email ya está registrado",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#9bc0c2] via-[#8bb8ba] to-[#7bb0b2] relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/8 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#3d8387]/15 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className={`w-full max-w-5xl grid grid-cols-1 lg:grid-cols-5 gap-8 items-center relative z-10 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        
        {/* Left Side - Compact Welcome */}
        <div className={`lg:col-span-2 text-white space-y-6 transition-all duration-1000 delay-300 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
              </div>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-medium">
                #1 en preparación técnica
              </span>
            </div>
            
            <h1 className="text-4xl font-bold leading-tight bg-gradient-to-r from-white to-white/90 bg-clip-text text-transparent">
              Únete a TechTandem.AI
            </h1>
            
            <p className="text-lg opacity-90">
              Desarrolla habilidades técnicas y blandas con simulaciones de IA.
            </p>

            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-300 fill-current" />
                <span>4.9/5</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="w-4 h-4" />
                <span>1,000+</span>
              </div>
            </div>
          </div>

          {/* Compact Features */}
          <div className="space-y-3">
            <div className="flex items-center space-x-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-all duration-200">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Simulaciones IA</h3>
                <p className="text-xs opacity-80">Entrevistas técnicas realistas</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/15 transition-all duration-200">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <CheckCircle className="w-4 h-4 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Feedback Instantáneo</h3>
                <p className="text-xs opacity-80">Mejora con cada práctica</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
            <div className="grid grid-cols-2 gap-3 text-center text-sm">
              <div>
                <div className="text-xl font-bold">95%</div>
                <div className="opacity-80 text-xs">Tasa de éxito</div>
              </div>
              <div>
                <div className="text-xl font-bold">1K+</div>
                <div className="opacity-80 text-xs">Estudiantes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Compact Form */}
        <Card className={`lg:col-span-3 bg-white/95 backdrop-blur-md shadow-2xl border-0 transition-all duration-1000 delay-500 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <CardHeader className="text-center pb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-[#569c9f] to-[#4a9297] rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-800">
              Crear Cuenta
            </CardTitle>
            <p className="text-sm text-gray-600">
              Únete en menos de 2 minutos
            </p>
          </CardHeader>
          
          <CardContent className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Personal Info - Compact */}
              <div className="grid grid-cols-2 gap-3">
                <div className="group">
                  <Label htmlFor="firstName" className="text-xs font-medium text-gray-700 mb-1 block">
                    Nombre *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 group-focus-within:text-[#569c9f] transition-colors" />
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="Juan"
                      className="pl-7 h-8 text-sm border-gray-200 focus:border-[#569c9f] focus:ring-[#569c9f] transition-all duration-200"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    />
                  </div>
                  {errors.firstName && (
                    <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                  )}
                </div>

                <div className="group">
                  <Label htmlFor="lastName" className="text-xs font-medium text-gray-700 mb-1 block">
                    Apellido *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 group-focus-within:text-[#569c9f] transition-colors" />
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Pérez"
                      className="pl-7 h-8 text-sm border-gray-200 focus:border-[#569c9f] focus:ring-[#569c9f] transition-all duration-200"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    />
                  </div>
                  {errors.lastName && (
                    <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="group">
                <Label htmlFor="email" className="text-xs font-medium text-gray-700 mb-1 block">
                  Email *
                </Label>
                <div className="relative">
                  <Mail className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 group-focus-within:text-[#569c9f] transition-colors" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="juan@ejemplo.com"
                    className="pl-7 h-8 text-sm border-gray-200 focus:border-[#569c9f] focus:ring-[#569c9f] transition-all duration-200"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="group">
                <Label htmlFor="password" className="text-xs font-medium text-gray-700 mb-1 block">
                  Contraseña *
                </Label>
                <div className="relative">
                  <Lock className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-3 h-3 group-focus-within:text-[#569c9f] transition-colors" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Mínimo 6 caracteres"
                    className="pl-7 pr-8 h-8 text-sm border-gray-200 focus:border-[#569c9f] focus:ring-[#569c9f] transition-all duration-200"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#569c9f] transition-colors duration-200"
                  >
                    {showPassword ? <EyeOff className="w-3 h-3" /> : <Eye className="w-3 h-3" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>

              {/* Compact Interests */}
              <div className="space-y-2">
                <Label className="text-xs font-medium text-gray-700">
                  Áreas de Interés * 
                  <span className="text-gray-500">(selecciona al menos una)</span>
                </Label>
                
                <div className="flex flex-wrap gap-2">
                  {availableInterests.map((interest, index) => (
                    <Badge
                      key={interest}
                      variant={formData.interests.includes(interest) ? "default" : "outline"}
                      className={`cursor-pointer transition-all duration-200 text-xs hover:scale-105 ${
                        formData.interests.includes(interest)
                          ? "bg-gradient-to-r from-[#569c9f] to-[#4a9297] hover:from-[#4a9297] hover:to-[#3d8387] text-white shadow-md"
                          : "hover:bg-[#569c9f]/10 hover:border-[#569c9f]"
                      }`}
                      onClick={() => handleInterestToggle(interest)}
                      style={{
                        animationDelay: `${index * 30}ms`
                      }}
                    >
                      {formData.interests.includes(interest) && (
                        <CheckCircle className="w-2 h-2 mr-1" />
                      )}
                      {interest}
                    </Badge>
                  ))}
                </div>
                
                {formData.interests.length > 0 && (
                  <div className="text-center text-xs text-[#569c9f] font-medium">
                    ✨ {formData.interests.length} seleccionada{formData.interests.length !== 1 ? 's' : ''}
                  </div>
                )}
                
                {errors.interests && (
                  <p className="text-red-500 text-xs text-center">{errors.interests}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#569c9f] to-[#4a9297] hover:from-[#4a9297] hover:to-[#3d8387] text-white font-semibold h-10 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <Sparkles className="w-4 h-4 mr-2" />
                Crear Cuenta Gratis
              </Button>
            </form>

            <div className="text-center pt-2">
              <span className="text-xs text-gray-500">¿Ya tienes cuenta? </span>
              <Link 
                to="/login" 
                className="text-xs text-[#569c9f] hover:text-[#4a9297] font-semibold transition-colors duration-200 hover:underline"
              >
                Inicia Sesión
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;