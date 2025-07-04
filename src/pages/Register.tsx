import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, User, Mail, Lock, GraduationCap, Briefcase, Heart, CheckCircle, Zap, BarChart3, Sparkles, Star, Users, TrendingUp } from "lucide-react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    university: "",
    career: "",
    interests: [] as string[]
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isAnimated, setIsAnimated] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const { register } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    setIsAnimated(true);
  }, []);

  const availableInterests = [
    "JavaScript", "Python", "React", "Node.js", "Machine Learning",
    "Data Science", "Cybersecurity", "Cloud Computing", "Mobile Development",
    "DevOps", "UI/UX Design", "Database Management", "Artificial Intelligence"
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
      newErrors.firstName = "El nombre es requerido";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Los apellidos son requeridos";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "El email no es válido";
    }

    if (!formData.password.trim()) {
      newErrors.password = "La contraseña es requerida";
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres";
    }

    if (formData.interests.length === 0) {
      newErrors.interests = "Selecciona al menos un área de interés";
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
    <div className="min-h-screen bg-gradient-to-br from-[#569c9f] via-[#4a9297] to-[#3d8387] relative overflow-hidden flex items-center justify-center p-4">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-[#3d8387]/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-bounce" style={{animationDelay: '2s', animationDuration: '4s'}} />
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-white/5 rounded-full blur-xl animate-bounce" style={{animationDelay: '3s', animationDuration: '5s'}} />
      </div>

      <div className={`w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 transition-all duration-1000 ${isAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Left Side - Welcome Content */}
        <div className={`text-white space-y-8 transition-all duration-1000 delay-300 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white animate-pulse" />
              </div>
              <div className="px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
                ✨ Plataforma #1 en preparación técnica
              </div>
            </div>
            <h1 className="text-5xl font-bold leading-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Únete a TechTandem.AI
            </h1>
            <p className="text-xl opacity-90 leading-relaxed">
              Desarrolla tus habilidades técnicas y blandas con simulaciones realistas 
              y feedback personalizado impulsado por IA.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-300 fill-current" />
                <span>4.9/5 valoración</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>+1,000 estudiantes</span>
              </div>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5" />
                <span>95% éxito</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="group flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Simulaciones Interactivas</h3>
                <p className="text-sm opacity-80">Practica entrevistas técnicas en tiempo real con IA avanzada</p>
              </div>
            </div>

            <div className="group flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Análisis Detallado</h3>
                <p className="text-sm opacity-80">Recibe feedback personalizado con métricas avanzadas</p>
              </div>
            </div>

            <div className="group flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/15 transition-all duration-300 hover:transform hover:scale-105">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Comunidad Activa</h3>
                <p className="text-sm opacity-80">Conecta con otros estudiantes y profesionales del sector</p>
              </div>
            </div>
          </div>

          <div className="pt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center space-x-3 mb-4">
                <CheckCircle className="w-6 h-6 text-green-300" />
                <span className="font-semibold">Garantía de calidad</span>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold">1,000+</div>
                  <div className="opacity-80">Estudiantes activos</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="opacity-80">Tasa de éxito</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <Card className={`bg-white/95 backdrop-blur-md shadow-2xl border-0 transition-all duration-1000 delay-500 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
          <CardHeader className="text-center pb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-[#569c9f] to-[#4a9297] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-3xl font-bold text-gray-800 mb-2">
              Crear Cuenta
            </CardTitle>
            <p className="text-gray-600">
              Únete a la comunidad líder en preparación técnica
            </p>
            <div className="flex justify-center mt-4">
              <div className="flex space-x-2">
                {[0, 1, 2].map((step) => (
                  <div
                    key={step}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      step <= currentStep ? 'bg-[#569c9f]' : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-700 mb-1">Información Personal</h3>
                  <p className="text-sm text-gray-500">Cuéntanos un poco sobre ti</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="group">
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700 mb-2 block">
                      Nombre *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-[#569c9f] transition-colors" />
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="Tu nombre"
                        className="pl-10 border-gray-200 focus:border-[#569c9f] focus:ring-[#569c9f] transition-all duration-200 hover:border-gray-300"
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      />
                    </div>
                    {errors.firstName && (
                      <p className="text-red-500 text-xs mt-1 animate-in slide-in-from-left duration-300">{errors.firstName}</p>
                    )}
                  </div>

                  <div className="group">
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700 mb-2 block">
                      Apellidos *
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-[#569c9f] transition-colors" />
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Tus apellidos"
                        className="pl-10 border-gray-200 focus:border-[#569c9f] focus:ring-[#569c9f] transition-all duration-200 hover:border-gray-300"
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      />
                    </div>
                    {errors.lastName && (
                      <p className="text-red-500 text-xs mt-1 animate-in slide-in-from-left duration-300">{errors.lastName}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="group">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                  Email *
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-[#569c9f] transition-colors" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu.email@ejemplo.com"
                    className="pl-10 border-gray-200 focus:border-[#569c9f] focus:ring-[#569c9f] transition-all duration-200 hover:border-gray-300"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1 animate-in slide-in-from-left duration-300">{errors.email}</p>
                )}
              </div>

              {/* Password */}
              <div className="group">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700 mb-2 block">
                  Contraseña *
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-[#569c9f] transition-colors" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Mínimo 6 caracteres"
                    className="pl-10 pr-10 border-gray-200 focus:border-[#569c9f] focus:ring-[#569c9f] transition-all duration-200 hover:border-gray-300"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-[#569c9f] transition-colors duration-200"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1 animate-in slide-in-from-left duration-300">{errors.password}</p>
                )}
              </div>

              {/* Academic Information */}
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-700 mb-1">Información Académica</h3>
                  <p className="text-sm text-gray-500">Opcional - nos ayuda a personalizar tu experiencia</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="group">
                    <Label htmlFor="university" className="text-sm font-medium text-gray-700 mb-2 block">
                      Universidad
                    </Label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-[#569c9f] transition-colors" />
                      <Input
                        id="university"
                        type="text"
                        placeholder="Tu universidad"
                        className="pl-10 border-gray-200 focus:border-[#569c9f] focus:ring-[#569c9f] transition-all duration-200 hover:border-gray-300"
                        value={formData.university}
                        onChange={(e) => setFormData({...formData, university: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="group">
                    <Label htmlFor="career" className="text-sm font-medium text-gray-700 mb-2 block">
                      Carrera
                    </Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 group-focus-within:text-[#569c9f] transition-colors" />
                      <Input
                        id="career"
                        type="text"
                        placeholder="Tu carrera"
                        className="pl-10 border-gray-200 focus:border-[#569c9f] focus:ring-[#569c9f] transition-all duration-200 hover:border-gray-300"
                        value={formData.career}
                        onChange={(e) => setFormData({...formData, career: e.target.value})}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="space-y-4">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-gray-700 mb-1">Áreas de Interés</h3>
                  <p className="text-sm text-gray-500">Selecciona las tecnologías que más te interesan *</p>
                </div>
                
                <div className="flex flex-wrap gap-3 justify-center">
                  {availableInterests.map((interest, index) => (
                    <Badge
                      key={interest}
                      variant={formData.interests.includes(interest) ? "default" : "outline"}
                      className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                        formData.interests.includes(interest)
                          ? "bg-gradient-to-r from-[#569c9f] to-[#4a9297] hover:from-[#4a9297] hover:to-[#3d8387] text-white shadow-lg"
                          : "hover:bg-[#569c9f]/10 hover:border-[#569c9f] hover:shadow-md"
                      }`}
                      onClick={() => handleInterestToggle(interest)}
                      style={{
                        animationDelay: `${index * 50}ms`
                      }}
                    >
                      {formData.interests.includes(interest) && (
                        <CheckCircle className="w-3 h-3 mr-1" />
                      )}
                      {interest}
                    </Badge>
                  ))}
                </div>
                
                {formData.interests.length > 0 && (
                  <div className="text-center text-sm text-[#569c9f] font-medium">
                    ✨ {formData.interests.length} {formData.interests.length === 1 ? 'área seleccionada' : 'áreas seleccionadas'}
                  </div>
                )}
                
                {errors.interests && (
                  <p className="text-red-500 text-xs text-center animate-in slide-in-from-left duration-300">{errors.interests}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#569c9f] to-[#4a9297] hover:from-[#4a9297] hover:to-[#3d8387] text-white font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 relative overflow-hidden group"
                size="lg"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                <Sparkles className="w-5 h-5 mr-2" />
                Crear Cuenta Gratis
              </Button>
            </form>

            <div className="text-center">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-sm text-gray-500 font-medium">¿Ya tienes cuenta?</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>
              <Link 
                to="/login" 
                className="text-[#569c9f] hover:text-[#4a9297] font-semibold transition-colors duration-200 hover:underline"
              >
                Inicia Sesión Aquí
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Register;