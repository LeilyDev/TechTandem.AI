import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { 
  Target, 
  Users, 
  Brain, 
  Clock, 
  Star,
  Play,
  Settings,
  TrendingUp,
  Trophy,
  ArrowLeft
} from "lucide-react";
import SimulationList from "@/components/SimulationList";
import GroupSessions from "@/components/GroupSessions";
import PsychometricTests from "@/components/PsychometricTests";
import QuickSimulation from "@/components/QuickSimulation";
import ResultsView from "@/components/ResultsView";
import ProfileConfig from "@/components/ProfileConfig";

type ViewType = 'main' | 'individual' | 'group' | 'psychometric' | 'quick' | 'results' | 'config';

const Simulations = () => {
  const { user } = useAuth();
  const [currentView, setCurrentView] = useState<ViewType>('main');

  const renderCurrentView = () => {
    switch (currentView) {
      case 'individual':
        return <SimulationList onBack={() => setCurrentView('main')} />;
      case 'group':
        return <GroupSessions onBack={() => setCurrentView('main')} />;
      case 'psychometric':
        return <PsychometricTests onBack={() => setCurrentView('main')} />;
      case 'quick':
        return <QuickSimulation onBack={() => setCurrentView('main')} />;
      case 'results':
        return <ResultsView onBack={() => setCurrentView('main')} />;
      case 'config':
        return <ProfileConfig onBack={() => setCurrentView('main')} />;
      default:
        return renderMainView();
    }
  };

  const renderMainView = () => (
    <>
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Target className="w-8 h-8 text-[#569c9f]" />
          <h1 className="text-3xl font-bold">¡Hola, {user?.firstName}! Lista para practicar</h1>
        </div>
        <p className="text-gray-600 max-w-3xl mx-auto">
          Elige el tipo de simulación que mejor se adapte a tu preparación hoy. Cada modalidad está 
          diseñada para fortalecer diferentes habilidades.
        </p>
        <div className="flex justify-center space-x-4 mt-6">
          <Button 
            variant="info" 
            size="lg"
            onClick={() => setCurrentView('quick')}
            className="bg-[#569c9f] hover:bg-[#4a9297]"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Simulación Rápida
          </Button>
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setCurrentView('results')}
            >
              📊 Ver Resultados
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setCurrentView('config')}
            >
              <Settings className="w-4 h-4 mr-2" />
              Configurar
            </Button>
          </div>
        </div>
      </div>

      {/* Simulation Types */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Individual Interview */}
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="bg-gradient-to-r from-[#569c9f] to-[#4a9297] text-white rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-white">Entrevista Individual</CardTitle>
                <Badge variant="secondary" className="bg-yellow-500 text-white mt-1">
                  Recomendado
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-600 mb-4">
              Práctica personalizada uno a uno con IA adaptativa. Ideal para desarrollar confianza y 
              técnicas específicas.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-[#569c9f]" />
                <span className="text-sm">15-30 min</span>
              </div>
              <div className="flex items-center space-x-3">
                <Target className="w-4 h-4 text-[#569c9f]" />
                <span className="text-sm">Personalizado</span>
              </div>
              <div className="flex items-center space-x-3">
                <Brain className="w-4 h-4 text-[#569c9f]" />
                <span className="text-sm">IA Adaptativa</span>
              </div>
            </div>
            
            <Button 
              variant="default" 
              className="w-full bg-[#569c9f] hover:bg-[#4a9297]" 
              size="lg"
              onClick={() => setCurrentView('individual')}
            >
              Comenzar Individual
            </Button>
          </CardContent>
        </Card>

        {/* Group Interview */}
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-white">Entrevista Grupal</CardTitle>
                <Badge variant="secondary" className="bg-red-500 text-white mt-1">
                  En vivo
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-600 mb-4">
              Colabora con otros estudiantes en desafíos reales. Desarrolla habilidades de liderazgo y trabajo en equipo.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-green-600" />
                <span className="text-sm">30-45 min</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="w-4 h-4 text-green-600" />
                <span className="text-sm">Colaborativo</span>
              </div>
              <div className="flex items-center space-x-3">
                <Trophy className="w-4 h-4 text-green-600" />
                <span className="text-sm">Liderazgo</span>
              </div>
            </div>
            
            <Button 
              variant="success" 
              className="w-full bg-green-600 hover:bg-green-700" 
              size="lg"
              onClick={() => setCurrentView('group')}
            >
              Unirse a Grupo
            </Button>
          </CardContent>
        </Card>

        {/* Psychometric Test */}
        <Card className="bg-white shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-white">Test Psicométrico</CardTitle>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <p className="text-gray-600 mb-4">
              Evaluación completa de tu perfil cognitivo y habilidades. Descubre tus fortalezas y áreas de mejora.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-sm">20-40 min</span>
              </div>
              <div className="flex items-center space-x-3">
                <Brain className="w-4 h-4 text-blue-600" />
                <span className="text-sm">Cognitivo</span>
              </div>
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span className="text-sm">Análisis</span>
              </div>
            </div>
            
            <Button 
              variant="info" 
              className="w-full bg-blue-600 hover:bg-blue-700" 
              size="lg"
              onClick={() => setCurrentView('psychometric')}
            >
              Comenzar Evaluación
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* History Section */}
      <Card className="bg-white shadow-sm">
        <CardHeader>
          <CardTitle className="flex items-center space-x-3">
            <Clock className="w-5 h-5 text-[#569c9f]" />
            <span>Historial de Simulaciones</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <Target className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="font-medium">Simulación Individual - Algoritmos</div>
                  <div className="text-sm text-gray-500">Completada hace 2 horas</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-green-600">88%</div>
                <div className="text-sm text-gray-500">Excelente</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="font-medium">Entrevista Grupal - Design Thinking</div>
                  <div className="text-sm text-gray-500">Completada ayer</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-blue-600">92%</div>
                <div className="text-sm text-gray-500">Sobresaliente</div>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <Brain className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <div className="font-medium">Test Psicométrico - Razonamiento</div>
                  <div className="text-sm text-gray-500">Completado hace 3 días</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-purple-600">85%</div>
                <div className="text-sm text-gray-500">Muy Bueno</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-[#569c9f]/5">
      <div className="container mx-auto px-4 py-8 pt-24">
        {renderCurrentView()}
      </div>
    </div>
  );
};

export default Simulations;
