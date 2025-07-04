
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Target, Clock, Star, Brain } from "lucide-react";
import IndividualSimulation from "./IndividualSimulation";

interface SimulationListProps {
  onBack: () => void;
}

interface Simulation {
  id: string;
  title: string;
  description: string;
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
  duration: string;
  topic: string;
  questions: string[];
}

const SimulationList = ({ onBack }: SimulationListProps) => {
  const [selectedSimulation, setSelectedSimulation] = useState<Simulation | null>(null);

  const simulations: Simulation[] = [
    {
      id: '1',
      title: 'Algoritmos y Estructuras de Datos',
      description: 'Practica preguntas fundamentales sobre algoritmos, complejidad y estructuras de datos.',
      difficulty: 'Intermedio',
      duration: '25 min',
      topic: 'Algoritmos',
      questions: [
        '¿Cuál es la diferencia entre un algoritmo de ordenamiento estable e inestable?',
        'Explica la complejidad temporal de QuickSort en el mejor y peor caso.',
        '¿Cuándo usarías una lista enlazada en lugar de un array?',
        'Describe cómo funciona el algoritmo de búsqueda binaria.',
        '¿Qué es una tabla hash y cuáles son sus ventajas?'
      ]
    },
    {
      id: '2',
      title: 'Programación Orientada a Objetos',
      description: 'Evalúa tu comprensión de conceptos OOP, herencia, polimorfismo y encapsulación.',
      difficulty: 'Básico',
      duration: '20 min',
      topic: 'POO',
      questions: [
        '¿Cuáles son los cuatro pilares de la programación orientada a objetos?',
        'Explica la diferencia entre herencia y composición.',
        '¿Qué es el polimorfismo y cómo se implementa?',
        'Define encapsulación y su importancia en OOP.',
        '¿Cuándo usar clases abstractas vs interfaces?'
      ]
    },
    {
      id: '3',
      title: 'Bases de Datos y SQL',
      description: 'Preguntas sobre diseño de bases de datos, consultas SQL y optimización.',
      difficulty: 'Intermedio',
      duration: '30 min',
      topic: 'Bases de Datos',
      questions: [
        '¿Qué es la normalización de bases de datos y por qué es importante?',
        'Explica la diferencia entre INNER JOIN y LEFT JOIN.',
        '¿Cómo optimizarías una consulta SQL lenta?',
        '¿Qué son los índices y cómo mejoran el rendimiento?',
        'Describe las propiedades ACID en bases de datos.'
      ]
    },
    {
      id: '4',
      title: 'Desarrollo Web Frontend',
      description: 'Evaluación de conocimientos en HTML, CSS, JavaScript y frameworks modernos.',
      difficulty: 'Intermedio',
      duration: '35 min',
      topic: 'Frontend',
      questions: [
        '¿Cuál es la diferencia entre var, let y const en JavaScript?',
        'Explica el modelo de cajas (box model) en CSS.',
        '¿Qué es el Virtual DOM y cómo funciona?',
        'Describe el concepto de responsividad en diseño web.',
        '¿Cómo manejas el estado en una aplicación React?'
      ]
    },
    {
      id: '5',
      title: 'Sistemas y Arquitectura',
      description: 'Preguntas sobre diseño de sistemas, escalabilidad y arquitecturas distribuidas.',
      difficulty: 'Avanzado',
      duration: '45 min',
      topic: 'Sistemas',
      questions: [
        '¿Cómo diseñarías un sistema de chat en tiempo real escalable?',
        'Explica los conceptos de microservicios vs arquitectura monolítica.',
        '¿Qué es el load balancing y cuáles son sus tipos?',
        'Describe estrategias de caching en aplicaciones web.',
        '¿Cómo garantizarías la consistencia de datos en un sistema distribuido?'
      ]
    },
    {
      id: '6',
      title: 'Desarrollo Backend',
      description: 'Evaluación de APIs, servidores, autenticación y mejores prácticas backend.',
      difficulty: 'Intermedio',
      duration: '30 min',
      topic: 'Backend',
      questions: [
        '¿Cuál es la diferencia entre REST y GraphQL?',
        'Explica los diferentes métodos de autenticación (JWT, OAuth, etc.).',
        '¿Cómo manejarías la validación de datos en una API?',
        'Describe patrones de diseño comunes en desarrollo backend.',
        '¿Qué consideraciones de seguridad son importantes en APIs?'
      ]
    }
  ];

  if (selectedSimulation) {
    return (
      <IndividualSimulation 
        simulation={selectedSimulation}
        onBack={() => setSelectedSimulation(null)}
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

  return (
    <div>
      {/* Header */}
      <div className="flex items-center mb-8">
        <Button variant="ghost" onClick={onBack} className="mr-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Simulaciones Individuales Disponibles</h1>
          <p className="text-muted-foreground">Elige una simulación para comenzar tu práctica</p>
        </div>
      </div>

      {/* Simulations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {simulations.map((simulation) => (
          <Card key={simulation.id} className="bg-white shadow-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg mb-2">{simulation.title}</CardTitle>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className={`${getDifficultyColor(simulation.difficulty)} text-white`}>
                      {simulation.difficulty}
                    </Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      {simulation.duration}
                    </div>
                  </div>
                </div>
                <Target className="w-6 h-6 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-sm">
                {simulation.description}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Brain className="w-4 h-4 mr-1" />
                  {simulation.questions.length} preguntas
                </div>
                <Button 
                  variant="default" 
                  size="sm"
                  onClick={() => setSelectedSimulation(simulation)}
                >
                  Comenzar
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SimulationList;
