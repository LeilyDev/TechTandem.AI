
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Brain, Clock, Target, TrendingUp } from "lucide-react";
import PsychometricTest from "./PsychometricTest";

interface PsychometricTestsProps {
  onBack: () => void;
}

interface Test {
  id: string;
  title: string;
  description: string;
  duration: string;
  questions: number;
  category: string;
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
  testQuestions: Array<{
    question: string;
    options: string[];
    type: 'multiple' | 'scale';
  }>;
}

const PsychometricTests = ({ onBack }: PsychometricTestsProps) => {
  const [selectedTest, setSelectedTest] = useState<Test | null>(null);

  const tests: Test[] = [
    {
      id: '1',
      title: 'Razonamiento Lógico',
      description: 'Evalúa tu capacidad de razonamiento lógico y resolución de problemas complejos.',
      duration: '25 min',
      questions: 20,
      category: 'Cognitivo',
      difficulty: 'Intermedio',
      testQuestions: [
        {
          question: 'Si todos los A son B, y todos los B son C, entonces:',
          options: ['Todos los A son C', 'Algunos A son C', 'Ningún A es C', 'No se puede determinar'],
          type: 'multiple'
        },
        {
          question: '¿Cuál es el siguiente número en la secuencia: 2, 6, 18, 54, ?',
          options: ['108', '162', '180', '216'],
          type: 'multiple'
        },
        {
          question: 'En tu trabajo, ¿con qué frecuencia prefieres resolver problemas de forma independiente?',
          options: ['Nunca', 'Raramente', 'A veces', 'Frecuentemente', 'Siempre'],
          type: 'scale'
        },
        {
          question: 'Si A > B y B > C, ¿cuál de las siguientes afirmaciones es verdadera?',
          options: ['A = C', 'A < C', 'A > C', 'No se puede determinar'],
          type: 'multiple'
        },
        {
          question: '¿Qué figura completa la serie? ○ ◑ ● ◐ ?',
          options: ['○', '◑', '●', '◐'],
          type: 'multiple'
        }
      ]
    },
    {
      id: '2',
      title: 'Personalidad Profesional',
      description: 'Identifica tu perfil de personalidad en el entorno laboral y estilo de trabajo.',
      duration: '30 min',
      questions: 25,
      category: 'Personalidad',
      difficulty: 'Básico',
      testQuestions: [
        {
          question: '¿Cómo prefieres trabajar en proyectos importantes?',
          options: ['Solo/a', 'En pareja', 'En equipo pequeño', 'En equipo grande'],
          type: 'multiple'
        },
        {
          question: '¿Con qué frecuencia tomas la iniciativa en situaciones nuevas?',
          options: ['Nunca', 'Raramente', 'A veces', 'Frecuentemente', 'Siempre'],
          type: 'scale'
        },
        {
          question: 'Cuando enfrentas un problema complejo, tu primer impulso es:',
          options: ['Analizarlo detalladamente', 'Buscar ayuda', 'Experimentar soluciones', 'Investigar casos similares'],
          type: 'multiple'
        },
        {
          question: '¿Qué tan cómodo/a te sientes presentando ideas a un grupo?',
          options: ['Muy incómodo/a', 'Incómodo/a', 'Neutral', 'Cómodo/a', 'Muy cómodo/a'],
          type: 'scale'
        },
        {
          question: 'En situaciones de estrés, tiendes a:',
          options: ['Mantener la calma', 'Buscar apoyo', 'Trabajar más intensamente', 'Tomar descansos frecuentes'],
          type: 'multiple'
        }
      ]
    },
    {
      id: '3',
      title: 'Aptitud Numérica',
      description: 'Mide tu capacidad para trabajar con números, estadísticas y análisis cuantitativo.',
      duration: '20 min',
      questions: 15,
      category: 'Aptitud',
      difficulty: 'Intermedio',
      testQuestions: [
        {
          question: 'Si un producto cuesta $120 y tiene un descuento del 25%, ¿cuál es el precio final?',
          options: ['$90', '$95', '$100', '$105'],
          type: 'multiple'
        },
        {
          question: '¿Cuál es el 15% de 240?',
          options: ['24', '30', '36', '42'],
          type: 'multiple'
        },
        {
          question: 'Un equipo completó 3/4 de un proyecto. Si el proyecto total son 80 horas, ¿cuántas horas faltan?',
          options: ['15 horas', '20 horas', '25 horas', '30 horas'],
          type: 'multiple'
        },
        {
          question: '¿Con qué frecuencia trabajas con datos numéricos en tus estudios/trabajo?',
          options: ['Nunca', 'Raramente', 'A veces', 'Frecuentemente', 'Siempre'],
          type: 'scale'
        },
        {
          question: 'Si una inversión de $1000 genera un retorno del 8% anual, ¿cuánto dinero habrá después de 2 años?',
          options: ['$1160', '$1164.64', '$1180', '$1200'],
          type: 'multiple'
        }
      ]
    },
    {
      id: '4',
      title: 'Inteligencia Emocional',
      description: 'Evalúa tu capacidad para reconocer y manejar emociones propias y ajenas.',
      duration: '35 min',
      questions: 30,
      category: 'Emocional',
      difficulty: 'Avanzado',
      testQuestions: [
        {
          question: 'Cuando un compañero de trabajo está visiblemente molesto, tu primera reacción es:',
          options: ['Preguntarle qué le pasa', 'Darle espacio', 'Ofrecer ayuda', 'Continuar con tu trabajo'],
          type: 'multiple'
        },
        {
          question: '¿Con qué frecuencia puedes identificar tus emociones en el momento que las experimentas?',
          options: ['Nunca', 'Raramente', 'A veces', 'Frecuentemente', 'Siempre'],
          type: 'scale'
        },
        {
          question: 'En una discusión acalorada, prefieres:',
          options: ['Defender tu punto firmemente', 'Buscar un compromiso', 'Escuchar antes de responder', 'Tomar un descanso'],
          type: 'multiple'
        },
        {
          question: '¿Qué tan bien puedes mantener la calma bajo presión?',
          options: ['Muy mal', 'Mal', 'Regular', 'Bien', 'Muy bien'],
          type: 'scale'
        },
        {
          question: 'Cuando alguien te da feedback negativo, normalmente:',
          options: ['Te defiendes inmediatamente', 'Te sientes atacado/a', 'Reflexionas sobre el comentario', 'Agradeces la retroalimentación'],
          type: 'multiple'
        }
      ]
    },
    {
      id: '5',
      title: 'Pensamiento Creativo',
      description: 'Mide tu capacidad para generar ideas innovadoras y pensar fuera de la caja.',
      duration: '40 min',
      questions: 18,
      category: 'Creatividad',
      difficulty: 'Avanzado',
      testQuestions: [
        {
          question: '¿Cuántos usos diferentes puedes encontrar para un clip?',
          options: ['1-3 usos', '4-6 usos', '7-10 usos', 'Más de 10 usos'],
          type: 'multiple'
        },
        {
          question: '¿Con qué frecuencia propones ideas nuevas en tu trabajo/estudios?',
          options: ['Nunca', 'Raramente', 'A veces', 'Frecuentemente', 'Siempre'],
          type: 'scale'
        },
        {
          question: 'Si tuvieras que diseñar una silla para personas que trabajan de pie, ¿cuál sería tu enfoque?',
          options: ['Silla ajustable en altura', 'Apoyo para una pierna', 'Silla inclinada', 'Soporte móvil'],
          type: 'multiple'
        },
        {
          question: '¿Qué tan cómodo/a te sientes experimentando con ideas no convencionales?',
          options: ['Muy incómodo/a', 'Incómodo/a', 'Neutral', 'Cómodo/a', 'Muy cómodo/a'],
          type: 'scale'
        },
        {
          question: 'Para resolver un problema, prefieres:',
          options: ['Seguir métodos probados', 'Combinar varios enfoques', 'Inventar un método nuevo', 'Preguntar a expertos'],
          type: 'multiple'
        }
      ]
    }
  ];

  if (selectedTest) {
    return (
      <PsychometricTest 
        test={selectedTest}
        onBack={() => setSelectedTest(null)}
      />
    );
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Básico': return 'bg-green-500';
      case 'Intermedio': return 'bg-yellow-500';
      case 'Avanzado': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cognitivo': return <Brain className="w-5 h-5" />;
      case 'Personalidad': return <Target className="w-5 h-5" />;
      case 'Aptitud': return <TrendingUp className="w-5 h-5" />;
      case 'Emocional': return <Brain className="w-5 h-5" />;
      case 'Creatividad': return <Target className="w-5 h-5" />;
      default: return <Brain className="w-5 h-5" />;
    }
  };

  return (
    <div>
      {/* Header */}
      <div className="flex items-center mb-8">
        <Button variant="ghost" onClick={onBack} className="mr-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Tests Psicométricos Disponibles</h1>
          <p className="text-muted-foreground">Descubre tus fortalezas y áreas de mejora</p>
        </div>
      </div>

      {/* Tests Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tests.map((test) => (
          <Card key={test.id} className="bg-white shadow-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{test.title}</CardTitle>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className={`${getDifficultyColor(test.difficulty)} text-white`}>
                      {test.difficulty}
                    </Badge>
                    <Badge variant="outline">
                      {test.category}
                    </Badge>
                  </div>
                </div>
                <div className="text-primary">
                  {getCategoryIcon(test.category)}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-sm">
                {test.description}
              </p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    Duración
                  </div>
                  <span className="font-medium">{test.duration}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Brain className="w-4 h-4 mr-1" />
                    Preguntas
                  </div>
                  <span className="font-medium">{test.questions}</span>
                </div>
              </div>
              
              <Button 
                variant="info" 
                className="w-full"
                size="sm"
                onClick={() => setSelectedTest(test)}
              >
                Comenzar Test
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PsychometricTests;
