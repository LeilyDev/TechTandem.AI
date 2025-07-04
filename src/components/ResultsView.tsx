
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, Target, Users, Brain } from "lucide-react";

interface ResultsViewProps {
  onBack: () => void;
}

const ResultsView = ({ onBack }: ResultsViewProps) => {
  const results = [
    {
      id: 1,
      title: "Simulación Individual - Algoritmos",
      date: "Hace 2 horas",
      score: 88,
      type: "individual",
      feedback: "Excelente comprensión de algoritmos de ordenamiento. Mejora la explicación de complejidad temporal."
    },
    {
      id: 2,
      title: "Entrevista Grupal - Design Thinking",
      date: "Hace 1 día",
      score: 92,
      type: "group",
      feedback: "Liderazgo sobresaliente y gran capacidad de colaboración. Sigue así."
    },
    {
      id: 3,
      title: "Test Psicométrico - Razonamiento",
      date: "Hace 3 días",
      score: 85,
      type: "psychometric",
      feedback: "Muy buen razonamiento lógico. Practica más problemas de análisis numérico."
    },
    {
      id: 4,
      title: "Simulación Rápida - Comunicación",
      date: "Hace 1 semana",
      score: 90,
      type: "quick",
      feedback: "Comunicación clara y efectiva. Excelente estructura en las respuestas."
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return "text-green-600";
    if (score >= 80) return "text-blue-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return "Sobresaliente";
    if (score >= 80) return "Muy Bueno";
    if (score >= 70) return "Bueno";
    return "Necesita Mejora";
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'individual': return <Target className="w-5 h-5" />;
      case 'group': return <Users className="w-5 h-5" />;
      case 'psychometric': return <Brain className="w-5 h-5" />;
      default: return <TrendingUp className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'individual': return "bg-green-100 text-green-600";
      case 'group': return "bg-blue-100 text-blue-600";
      case 'psychometric': return "bg-purple-100 text-purple-600";
      default: return "bg-orange-100 text-orange-600";
    }
  };

  const averageScore = Math.round(results.reduce((acc, result) => acc + result.score, 0) / results.length);

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Button variant="ghost" onClick={onBack} className="mr-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Mis Resultados</h1>
            <p className="text-gray-600">Historial completo de tus simulaciones y evaluaciones</p>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-[#569c9f] mb-1">{results.length}</div>
            <div className="text-sm text-gray-600">Simulaciones Completadas</div>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">{averageScore}%</div>
            <div className="text-sm text-gray-600">Promedio General</div>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">92%</div>
            <div className="text-sm text-gray-600">Mejor Resultado</div>
          </CardContent>
        </Card>
        
        <Card className="bg-white shadow-sm">
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">7</div>
            <div className="text-sm text-gray-600">Días de Racha</div>
          </CardContent>
        </Card>
      </div>

      {/* Results List */}
      <div className="space-y-4">
        {results.map((result) => (
          <Card key={result.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-4 flex-1">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getTypeColor(result.type)}`}>
                    {getTypeIcon(result.type)}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-lg">{result.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {result.type === 'individual' ? 'Individual' : 
                         result.type === 'group' ? 'Grupal' : 
                         result.type === 'psychometric' ? 'Psicométrico' : 'Rápida'}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-2">{result.feedback}</p>
                    <div className="text-xs text-gray-500">{result.date}</div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className={`text-2xl font-bold ${getScoreColor(result.score)} mb-1`}>
                    {result.score}%
                  </div>
                  <div className={`text-sm ${getScoreColor(result.score)}`}>
                    {getScoreLabel(result.score)}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ResultsView;
