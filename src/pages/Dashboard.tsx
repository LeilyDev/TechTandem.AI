
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useAuth } from "@/hooks/useAuth";
import { 
  TrendingUp, 
  Target, 
  Calendar, 
  Trophy, 
  Activity, 
  BookOpen,
  Users,
  Clock,
  Zap,
  Brain,
  MessageCircle,
  Star,
  Heart
} from "lucide-react";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-[#569c9f]/5">
      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div className="mb-4 lg:mb-0">
            <div className="flex items-center space-x-3 mb-2">
              <h1 className="text-3xl font-bold">¡Hola, {user?.firstName}!</h1>
              <span className="text-2xl">👋</span>
            </div>
            <p className="text-gray-600 max-w-2xl">
              Bienvenido a tu espacio de crecimiento profesional. Aquí puedes monitorear tu progreso 
              y desarrollar las habilidades que te llevarán al éxito.
            </p>
            <div className="flex items-center space-x-4 mt-2">
              <Badge variant="secondary" className="bg-[#569c9f]/10 text-[#569c9f] border-[#569c9f]/20">
                Nivel Intermedio
              </Badge>
              <span className="text-sm text-gray-500">
                Última actividad: hace 2 horas
              </span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Cards */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-white shadow-sm border border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#569c9f] to-[#4a9297] rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Mi Progreso</h3>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Nivel Actual</span>
                        <span className="font-medium text-[#569c9f]">Intermedio</span>
                      </div>
                      <div className="text-2xl font-bold">65% completado</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-xl font-bold text-[#569c9f]">12</div>
                        <div className="text-xs text-gray-500">Simulaciones</div>
                      </div>
                      <div>
                        <div className="text-xl font-bold text-green-600">85%</div>
                        <div className="text-xs text-gray-500">Promedio</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm border border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Racha de Estudio</h3>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-500 mb-1">7</div>
                    <div className="text-sm text-gray-500 mb-3">días consecutivos</div>
                    <div className="flex justify-center space-x-1">
                      {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, i) => (
                        <div
                          key={day}
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                            i < 7 ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-500'
                          }`}
                        >
                          {day}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-sm border border-gray-100">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Próximas Tareas</h3>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Práctica de Comunicación</div>
                        <div className="text-xs text-gray-500">Hoy, 3:00 PM</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Habilidades de Liderazgo</div>
                        <div className="text-xs text-gray-500">Mañana, 10:00 AM</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Trabajo en Equipo</div>
                        <div className="text-xs text-gray-500">Viernes, 2:00 PM</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Soft Skills Focus */}
            <Card className="bg-white shadow-sm border border-gray-100">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle>Desarrollo de Habilidades Blandas</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <MessageCircle className="w-4 h-4 text-[#569c9f]" />
                        <span className="font-medium">Comunicación Efectiva</span>
                      </div>
                      <span className="text-sm font-medium text-[#569c9f]">92%</span>
                    </div>
                    <Progress value={92} className="h-2" />
                    <p className="text-xs text-gray-500 mt-1">Excelente capacidad para expresar ideas claramente</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-green-600" />
                        <span className="font-medium">Trabajo en Equipo</span>
                      </div>
                      <span className="text-sm font-medium text-green-600">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    <p className="text-xs text-gray-500 mt-1">Colabora eficientemente con diversos equipos</p>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <Brain className="w-4 h-4 text-purple-600" />
                        <span className="font-medium">Liderazgo</span>
                      </div>
                      <span className="text-sm font-medium text-purple-600">78%</span>
                    </div>
                    <Progress value={78} className="h-2" />
                    <p className="text-xs text-gray-500 mt-1">Desarrollando habilidades de dirección de equipos</p>
                  </div>

                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center space-x-2">
                        <Target className="w-4 h-4 text-blue-600" />
                        <span className="font-medium">Resolución de Problemas</span>
                      </div>
                      <span className="text-sm font-medium text-blue-600">88%</span>
                    </div>
                    <Progress value={88} className="h-2" />
                    <p className="text-xs text-gray-500 mt-1">Enfoque analítico y creativo para resolver desafíos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-white shadow-sm border border-gray-100">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <Activity className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle>Actividad Reciente</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">✅ Simulación de Comunicación Completada</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        Presentación de proyectos - 92%
                      </div>
                      <div className="text-xs text-gray-500">Hace 2 horas</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">🎯 Logro Desbloqueado</span>
                      </div>
                      <div className="text-sm text-gray-500">
                        "Comunicador Efectivo" - Excelencia en habilidades blandas
                      </div>
                      <div className="text-xs text-gray-500">Hace 1 día</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <Card className="bg-white shadow-sm border border-gray-100">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle>Mis Logros</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-green-700">Comunicador Efectivo</div>
                      <div className="text-xs text-green-600">Excelente en habilidades de comunicación</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Users className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-green-700">Colaborador Estrella</div>
                      <div className="text-xs text-green-600">Sobresaliente en trabajo en equipo</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg border border-gray-200">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">🏆</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-600">Líder Emergente</div>
                      <div className="text-xs text-gray-500">Progreso: 3/5 simulaciones de liderazgo</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Challenge */}
            <Card className="bg-gradient-to-r from-[#569c9f] to-[#4a9297] text-white">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle className="text-white">Desafío Semanal</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Maestría en Comunicación</h3>
                    <p className="text-sm text-white/90">
                      Completa 3 simulaciones de comunicación efectiva esta semana
                    </p>
                  </div>
                  <div>
                    <div className="text-sm mb-2">Progreso: 2/3 completado</div>
                    <Progress value={67} className="h-2 bg-white/20" />
                  </div>
                  <Button variant="outline" className="w-full bg-white/20 hover:bg-white/30 border-white/30 text-white">
                    Continuar Desafío
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills Tips */}
            <Card className="bg-white shadow-sm border border-gray-100">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <CardTitle>Tip del Día</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Star className="w-4 h-4 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-medium text-purple-800 mb-1">Escucha Activa</h4>
                      <p className="text-sm text-purple-700">
                        La escucha activa es fundamental para la comunicación efectiva. 
                        Practica hacer preguntas de seguimiento para demostrar interés genuino.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
