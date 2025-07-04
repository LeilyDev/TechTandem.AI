
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Play, Target, Rocket, Users, Brain, Zap, Trophy, Timer } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const [showDemo, setShowDemo] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 rounded-full border border-white/30">
              <Rocket className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Preparación Innovadora para Entrevistas Reales
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              ¿Listo para enfrentar{" "}
              <span className="text-primary">entrevistas reales?</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
              Mejora tus habilidades técnicas y blandas en un entorno colaborativo. 
              Practica con simuladores grupales que replican situaciones reales de trabajo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/register">
                <Button variant="hero" size="xl" className="w-full sm:w-auto">
                  <Rocket className="w-5 h-5 mr-2" />
                  Regístrate Gratis
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="xl" 
                className="w-full sm:w-auto"
                onClick={() => setShowDemo(true)}
              >
                <Play className="w-5 h-5 mr-2" />
                Explorar Demo
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <Card className="bg-white/95 backdrop-blur-sm shadow-card border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <span className="text-sm text-muted-foreground">TechTandem Simulator</span>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-[#569c9f] to-[#4a9297] rounded-full flex items-center justify-center animate-pulse">
                      <Brain className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium">IA Analítica Activa</span>
                      <div className="text-xs text-green-600 flex items-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                        Evaluando rendimiento en tiempo real
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-3 bg-tech-gray rounded-lg border-l-4 border-[#569c9f]">
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-medium">Escenario Actual</p>
                      <Badge className="bg-[#569c9f] text-white text-xs">
                        <Timer className="w-3 h-3 mr-1" />
                        15:30
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Optimizar algoritmo de búsqueda para aplicación móvil con 1M+ usuarios...
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-sm font-medium text-green-700">Habilidades Técnicas</div>
                        <Trophy className="w-4 h-4 text-green-600" />
                      </div>
                      <div className="text-xs text-green-600">✓ Algoritmos • O(log n)</div>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-sm font-medium text-blue-700">Soft Skills</div>
                        <Zap className="w-4 h-4 text-blue-600" />
                      </div>
                      <div className="text-xs text-blue-600">✓ Comunicación Clara</div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      Votar Solución
                    </Button>
                    <Button size="sm" variant="success" className="flex-1">
                      Discutir
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Modal */}
      {showDemo && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <Card className="w-full max-w-4xl bg-white">
            <CardContent className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">Demo Interactivo - TechTandem.AI</h2>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => setShowDemo(false)}
                >
                  ✕
                </Button>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-[#569c9f]/10 to-[#4a9297]/10 p-6 rounded-lg border border-[#569c9f]/20">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-[#569c9f] rounded-full flex items-center justify-center">
                      <Brain className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Simulación de Entrevista Técnica</h3>
                      <p className="text-sm text-muted-foreground">Practica en un entorno realista</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm">4 participantes conectados</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                        <span className="text-sm">IA evaluando en tiempo real</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                        <span className="text-sm">Feedback instantáneo</span>
                      </div>
                    </div>
                    
                    <div className="bg-white p-4 rounded border">
                      <h4 className="font-medium mb-2">Problema Actual:</h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        "Diseña un sistema de cache distribuido para una aplicación de e-commerce..."
                      </p>
                      <div className="flex space-x-2">
                        <Badge variant="outline" className="text-xs">Sistema Design</Badge>
                        <Badge variant="outline" className="text-xs">Escalabilidad</Badge>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-muted-foreground mb-4">
                    ¿Listo para experimentar la diferencia? Únete a miles de estudiantes que ya mejoran sus habilidades.
                  </p>
                  <Link to="/register">
                    <Button size="lg" className="bg-[#569c9f] hover:bg-[#4a9297]">
                      <Rocket className="w-5 h-5 mr-2" />
                      Comenzar Ahora - Es Gratis
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">80%</div>
            <div className="text-sm text-muted-foreground">Valoran habilidades blandas</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">95%</div>
            <div className="text-sm text-muted-foreground">Tasa de satisfacción</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Estudiantes activos</div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="container mx-auto px-4 py-20 bg-white rounded-2xl mx-4 shadow-card">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Mira cómo funciona TechTandem.AI</h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-tech-gray rounded-lg flex items-center justify-center border-2 border-dashed border-tech-gray-dark">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto">
                <Play className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Reproducir Demo Interactivo</h3>
                <p className="text-muted-foreground">
                  Descubre cómo nuestros simuladores grupales te preparan para el éxito
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="container mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Lo que dicen nuestros estudiantes</h2>
          <p className="text-muted-foreground">
            Más de 500 estudiantes han transformado su preparación para entrevistas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">MG</span>
                </div>
                <div>
                  <div className="font-semibold">María González</div>
                  <div className="text-sm text-muted-foreground">Estudiante de Ingeniería de Sistemas</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                "Las simulaciones grupales me ayudaron enormemente a ganar confianza. 
                Ahora me siento preparada para cualquier entrevista técnica."
              </p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-tech-green rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">CP</span>
                </div>
                <div>
                  <div className="font-semibold">Carlos Pérez</div>
                  <div className="text-sm text-muted-foreground">Egresado de Computación</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                "El feedback instantáneo y los recursos educativos son increíbles. 
                Mejoré mis habilidades blandas significativamente."
              </p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-tech-blue rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold">AR</span>
                </div>
                <div>
                  <div className="font-semibold">Ana Rodríguez</div>
                  <div className="text-sm text-muted-foreground">Reclutadora Senior</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                "Los candidatos que han usado TechTandem muestran mejor comunicación y trabajo en equipo. 
                Es notoria la diferencia."
              </p>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            ¿Estás Listo para Elevar tu Preparación?
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Únete a nuestra comunidad de estudiantes que ya están transformando su preparación para 
            entrevistas técnicas
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button variant="hero" size="xl">
                <Rocket className="w-5 h-5 mr-2" />
                Comenzar Gratis Ahora
              </Button>
            </Link>
            <Button variant="outline" size="xl" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Target className="w-5 h-5 mr-2" />
              Descargar App
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-tech-gray py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">TT</span>
                </div>
                <span className="text-lg font-semibold text-primary">TechTandem.AI</span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                La plataforma innovadora para preparación de entrevistas técnicas colaborativas.
              </p>
              <p className="text-xs text-muted-foreground">
                Creado por Leily Marlith Llanos Angeles
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Plataforma</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Entrevistas Individuales</div>
                <div>Entrevistas Grupales</div>
                <div>Feedback IA</div>
                <div>Recursos</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Comunidad</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Estudiantes</div>
                <div>Blog</div>
                <div>Casos de Éxito</div>
                <div>Eventos</div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Contacto</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Soporte</div>
                <div>Ayuda</div>
                <div>Términos</div>
                <div>Privacidad</div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
