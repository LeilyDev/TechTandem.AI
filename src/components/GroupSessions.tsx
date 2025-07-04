
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, Clock, Star, Video, LogOut } from "lucide-react";
import GroupSimulation from "./GroupSimulation";

interface GroupSessionsProps {
  onBack: () => void;
}

interface GroupSession {
  id: string;
  title: string;
  description: string;
  participants: number;
  maxParticipants: number;
  duration: string;
  startTime: string;
  topic: string;
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
  status: 'Esperando' | 'En curso' | 'Próximo';
}

const GroupSessions = ({ onBack }: GroupSessionsProps) => {
  const [selectedSession, setSelectedSession] = useState<GroupSession | null>(null);

  const sessions: GroupSession[] = [
    {
      id: '1',
      title: 'Design Thinking - Solución de Problemas',
      description: 'Sesión colaborativa para resolver un caso de estudio real usando metodología Design Thinking.',
      participants: 4,
      maxParticipants: 6,
      duration: '45 min',
      startTime: 'Ahora',
      topic: 'Design Thinking',
      difficulty: 'Intermedio',
      status: 'Esperando'
    },
    {
      id: '2',
      title: 'Desarrollo Ágil - Planificación de Sprint',
      description: 'Practica la planificación de sprints y estimación de historias de usuario.',
      participants: 5,
      maxParticipants: 8,
      duration: '40 min',
      startTime: '15:30',
      topic: 'Metodologías Ágiles',
      difficulty: 'Intermedio',
      status: 'Próximo'
    },
    {
      id: '3',
      title: 'Arquitectura de Software - Case Study',
      description: 'Diseño colaborativo de la arquitectura para un sistema de e-commerce escalable.',
      participants: 3,
      maxParticipants: 5,
      duration: '60 min',
      startTime: '16:00',
      topic: 'Arquitectura',
      difficulty: 'Avanzado',
      status: 'Próximo'
    },
    {
      id: '4',
      title: 'Liderazgo Técnico - Resolución de Conflictos',
      description: 'Simulación de situaciones difíciles en equipos de desarrollo y cómo resolverlas.',
      participants: 6,
      maxParticipants: 6,
      duration: '35 min',
      startTime: 'En curso',
      topic: 'Liderazgo',
      difficulty: 'Avanzado',
      status: 'En curso'
    },
    {
      id: '5',
      title: 'Code Review - Mejores Prácticas',
      description: 'Practica realizando code reviews constructivos en equipo.',
      participants: 2,
      maxParticipants: 4,
      duration: '30 min',
      startTime: '17:00',
      topic: 'Code Review',
      difficulty: 'Básico',
      status: 'Próximo'
    }
  ];

  if (selectedSession) {
    return (
      <GroupSimulation 
        session={selectedSession}
        onBack={() => setSelectedSession(null)}
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Esperando': return 'bg-blue-500';
      case 'En curso': return 'bg-green-500';
      case 'Próximo': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  const getButtonText = (session: GroupSession) => {
    switch (session.status) {
      case 'Esperando': return 'Unirse Ahora';
      case 'En curso': return 'En Progreso';
      case 'Próximo': return 'Reservar Lugar';
      default: return 'Unirse';
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
          <h1 className="text-3xl font-bold">Sesiones Grupales Disponibles</h1>
          <p className="text-muted-foreground">Únete a una sesión colaborativa en vivo</p>
        </div>
      </div>

      {/* Sessions Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sessions.map((session) => (
          <Card key={session.id} className="bg-white shadow-card hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle className="text-lg mb-2">{session.title}</CardTitle>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge className={`${getDifficultyColor(session.difficulty)} text-white`}>
                      {session.difficulty}
                    </Badge>
                    <Badge className={`${getStatusColor(session.status)} text-white`}>
                      {session.status}
                    </Badge>
                  </div>
                </div>
                <Users className="w-6 h-6 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 text-sm">
                {session.description}
              </p>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Users className="w-4 h-4 mr-1" />
                    Participantes
                  </div>
                  <span className="font-medium">
                    {session.participants}/{session.maxParticipants}
                  </span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="w-4 h-4 mr-1" />
                    Duración
                  </div>
                  <span className="font-medium">{session.duration}</span>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Video className="w-4 h-4 mr-1" />
                    Inicio
                  </div>
                  <span className="font-medium">{session.startTime}</span>
                </div>
              </div>

              {/* Progress bar for participants */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                <div 
                  className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(session.participants / session.maxParticipants) * 100}%` }}
                ></div>
              </div>
              
              <Button 
                variant={session.status === 'Esperando' ? 'success' : session.status === 'En curso' ? 'secondary' : 'default'}
                className="w-full"
                size="sm"
                onClick={() => setSelectedSession(session)}
                disabled={session.status === 'En curso'}
              >
                {getButtonText(session)}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GroupSessions;
