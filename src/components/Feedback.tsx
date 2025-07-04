
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp, Target, Users, Brain, Trophy, CheckCircle } from "lucide-react";

interface FeedbackProps {
  type: 'individual' | 'group' | 'psychometric';
  topic: string;
  score: number;
  onBack: () => void;
}

const Feedback = ({ type, topic, score, onBack }: FeedbackProps) => {
  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-blue-600';
    if (score >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excelente';
    if (score >= 80) return 'Muy Bueno';
    if (score >= 70) return 'Bueno';
    return 'Necesita Mejora';
  };

  const getTypeIcon = () => {
    switch (type) {
      case 'individual': return <Target className="w-8 h-8 text-primary" />;
      case 'group': return <Users className="w-8 h-8 text-green-600" />;
      case 'psychometric': return <Brain className="w-8 h-8 text-blue-600" />;
    }
  };

  const getTypeTitle = () => {
    switch (type) {
      case 'individual': return 'Simulación Individual';
      case 'group': return 'Sesión Grupal';
      case 'psychometric': return 'Test Psicométrico';
    }
  };

  const getFeedbackContent = () => {
    switch (type) {
      case 'individual':
        return {
          strengths: [
            'Excelente comprensión de algoritmos fundamentales',
            'Respuestas claras y bien estructuradas',
            'Buen manejo de la complejidad temporal'
          ],
          improvements: [
            'Profundizar en optimización de código',
            'Practicar más casos edge en algoritmos',
            'Mejorar explicación de trade-offs'
          ],
          nextSteps: [
            'Practicar problemas de estructuras de datos avanzadas',
            'Revisar patrones de diseño comunes',
            'Realizar simulaciones de sistemas distribuidos'
          ]
        };
      case 'group':
        return {
          strengths: [
            'Excelente colaboración y comunicación',
            'Liderazgo efectivo en discusiones grupales',
            'Contribución valiosa al resultado final'
          ],
          improvements: [
            'Dar más espacio para que otros participen',
            'Mejorar la gestión del tiempo en grupo',
            'Desarrollar habilidades de facilitación'
          ],
          nextSteps: [
            'Practicar técnicas de facilitación de reuniones',
            'Participar en más sesiones de liderazgo',
            'Desarrollar habilidades de resolución de conflictos'
          ]
        };
      case 'psychometric':
        return {
          strengths: [
            'Alto nivel de razonamiento lógico',
            'Excelente capacidad analítica',
            'Fuerte orientación a resultados'
          ],
          improvements: [
            'Desarrollar mayor flexibilidad cognitiva',
            'Mejorar habilidades de comunicación interpersonal',
            'Balancear análisis con intuición'
          ],
          nextSteps: [
            'Realizar ejercicios de pensamiento lateral',
            'Practicar técnicas de mindfulness',
            'Participar en actividades de trabajo en equipo'
          ]
        };
    }
  };

  const feedback = getFeedbackContent();

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          {getTypeIcon()}
        </div>
        <h1 className="text-3xl font-bold mb-2">¡Retroalimentación Completa!</h1>
        <p className="text-muted-foreground">
          {getTypeTitle()} - {topic}
        </p>
      </div>

      {/* Score Card */}
      <Card className="bg-white shadow-card mb-8">
        <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
          <CardTitle className="text-center">
            <div className="flex items-center justify-center space-x-3">
              <Trophy className="w-6 h-6" />
              <span>Tu Puntuación</span>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-8">
          <div className="text-center">
            <div className={`text-6xl font-bold ${getScoreColor(score)} mb-2`}>
              {score}%
            </div>
            <Badge className={`${getScoreColor(score).replace('text-', 'bg-').replace('600', '500')} text-white text-lg px-4 py-2`}>
              {getScoreLabel(score)}
            </Badge>
            
            {/* Score breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">85%</div>
                <div className="text-sm text-muted-foreground">Conocimiento Técnico</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">88%</div>
                <div className="text-sm text-muted-foreground">Comunicación</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">92%</div>
                <div className="text-sm text-muted-foreground">Resolución de Problemas</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Feedback */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Strengths */}
        <Card className="bg-white shadow-card">
          <CardHeader className="bg-green-50">
            <CardTitle className="flex items-center text-green-800">
              <CheckCircle className="w-5 h-5 mr-2" />
              Fortalezas
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <ul className="space-y-2">
              {feedback.strengths.map((strength, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{strength}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Areas to Improve */}
        <Card className="bg-white shadow-card">
          <CardHeader className="bg-yellow-50">
            <CardTitle className="flex items-center text-yellow-800">
              <TrendingUp className="w-5 h-5 mr-2" />
              Áreas de Mejora
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <ul className="space-y-2">
              {feedback.improvements.map((improvement, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{improvement}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="bg-white shadow-card">
          <CardHeader className="bg-blue-50">
            <CardTitle className="flex items-center text-blue-800">
              <Target className="w-5 h-5 mr-2" />
              Próximos Pasos
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <ul className="space-y-2">
              {feedback.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{step}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <div className="flex justify-center space-x-4">
        <Button variant="outline" onClick={onBack}>
          Volver a Simulaciones
        </Button>
        <Button className="bg-primary hover:bg-primary/90">
          <Star className="w-4 h-4 mr-2" />
          Guardar Progreso
        </Button>
        <Button variant="success">
          Compartir Resultado
        </Button>
      </div>
    </div>
  );
};

export default Feedback;
