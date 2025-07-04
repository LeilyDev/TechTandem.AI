
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, User, Settings, Target, BookOpen } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

interface ProfileConfigProps {
  onBack: () => void;
}

const ProfileConfig = ({ onBack }: ProfileConfigProps) => {
  const { user } = useAuth();
  const [preferences, setPreferences] = useState({
    difficulty: 'Intermedio',
    focusAreas: ['Comunicación', 'Liderazgo'],
    simulationDuration: '15-30 min',
    notifications: true,
    bio: 'Estudiante de Ingeniería de Sistemas enfocado en desarrollo de habilidades blandas y técnicas.'
  });

  const difficulties = ['Básico', 'Intermedio', 'Avanzado'];
  const availableFocusAreas = [
    'Comunicación', 'Liderazgo', 'Trabajo en Equipo', 'Resolución de Problemas',
    'Presentaciones', 'Negociación', 'Pensamiento Crítico', 'Creatividad'
  ];
  const durations = ['5-15 min', '15-30 min', '30-45 min', '45+ min'];

  const toggleFocusArea = (area: string) => {
    setPreferences(prev => ({
      ...prev,
      focusAreas: prev.focusAreas.includes(area)
        ? prev.focusAreas.filter(a => a !== area)
        : [...prev.focusAreas, area]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Button variant="ghost" onClick={onBack} className="mr-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>
        <div>
          <h1 className="text-2xl font-bold">Configurar Perfil</h1>
          <p className="text-gray-600">Personaliza tu experiencia de aprendizaje</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Configuration */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Info */}
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#569c9f] rounded-lg flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <CardTitle>Información Personal</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre
                  </label>
                  <Input defaultValue={user?.firstName} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Apellido
                  </label>
                  <Input defaultValue={user?.lastName} />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Biografía
                </label>
                <Textarea
                  placeholder="Cuéntanos sobre ti, tus objetivos y experiencia..."
                  value={preferences.bio}
                  onChange={(e) => setPreferences(prev => ({ ...prev, bio: e.target.value }))}
                  className="min-h-[100px]"
                />
              </div>
            </CardContent>
          </Card>

          {/* Learning Preferences */}
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Settings className="w-5 h-5 text-white" />
                </div>
                <CardTitle>Preferencias de Aprendizaje</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Nivel de Dificultad
                </label>
                <div className="flex space-x-2">
                  {difficulties.map((difficulty) => (
                    <Button
                      key={difficulty}
                      variant={preferences.difficulty === difficulty ? "default" : "outline"}
                      size="sm"
                      onClick={() => setPreferences(prev => ({ ...prev, difficulty }))}
                      className={preferences.difficulty === difficulty ? "bg-[#569c9f] hover:bg-[#4a9297]" : ""}
                    >
                      {difficulty}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Duración Preferida de Simulaciones
                </label>
                <div className="flex flex-wrap gap-2">
                  {durations.map((duration) => (
                    <Button
                      key={duration}
                      variant={preferences.simulationDuration === duration ? "default" : "outline"}
                      size="sm"
                      onClick={() => setPreferences(prev => ({ ...prev, simulationDuration: duration }))}
                      className={preferences.simulationDuration === duration ? "bg-[#569c9f] hover:bg-[#4a9297]" : ""}
                    >
                      {duration}
                    </Button>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Focus Areas */}
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-white" />
                </div>
                <CardTitle>Áreas de Enfoque</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600 mb-4">
                Selecciona las habilidades que más te interesa desarrollar
              </p>
              <div className="flex flex-wrap gap-2">
                {availableFocusAreas.map((area) => (
                  <Badge
                    key={area}
                    variant={preferences.focusAreas.includes(area) ? "default" : "outline"}
                    className={`cursor-pointer transition-colors ${
                      preferences.focusAreas.includes(area) 
                        ? "bg-[#569c9f] hover:bg-[#4a9297]" 
                        : "hover:bg-gray-100"
                    }`}
                    onClick={() => toggleFocusArea(area)}
                  >
                    {area}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Current Stats */}
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg">Mi Progreso Actual</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#569c9f] mb-1">65%</div>
                <div className="text-sm text-gray-600">Nivel Completado</div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Simulaciones</span>
                  <span className="font-medium">12</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Promedio</span>
                  <span className="font-medium text-green-600">85%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Racha</span>
                  <span className="font-medium text-orange-600">7 días</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Learning Plan */}
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <CardTitle className="text-lg">Plan de Aprendizaje</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-sm font-medium text-green-800">Esta Semana</div>
                  <div className="text-xs text-green-600">3 simulaciones de comunicación</div>
                </div>
                
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-sm font-medium text-blue-800">Próxima Semana</div>
                  <div className="text-xs text-blue-600">Focus en liderazgo de equipos</div>
                </div>
                
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-sm font-medium text-purple-800">Mes Siguiente</div>
                  <div className="text-xs text-purple-600">Evaluación psicométrica completa</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-end mt-8">
        <Button className="bg-[#569c9f] hover:bg-[#4a9297]">
          Guardar Configuración
        </Button>
      </div>
    </div>
  );
};

export default ProfileConfig;
