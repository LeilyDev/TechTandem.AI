
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LogOut, Users, Clock, Mic, Video, MessageSquare } from "lucide-react";
import Feedback from "./Feedback";

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

interface GroupSimulationProps {
  session: GroupSession;
  onBack: () => void;
}

const GroupSimulation = ({ session, onBack }: GroupSimulationProps) => {
  const [timeRemaining, setTimeRemaining] = useState(25 * 60); // 25 minutos en segundos
  const [showFeedback, setShowFeedback] = useState(false);
  const [participants] = useState([
    { id: 1, name: 'Ana García', role: 'Facilitadora', status: 'online' },
    { id: 2, name: 'Carlos López', role: 'Participante', status: 'online' },
    { id: 3, name: 'María Rodríguez', role: 'Participante', status: 'online' },
    { id: 4, name: 'Tú', role: 'Participante', status: 'online' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleLeaveSession = () => {
    setShowFeedback(true);
  };

  if (showFeedback) {
    return (
      <Feedback 
        type="group"
        topic={session.topic}
        score={Math.floor(Math.random() * 20) + 80} // Simulando puntaje grupal
        onBack={onBack}
      />
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">{session.title}</h1>
          <div className="flex items-center space-x-3 mt-2">
            <Badge className="bg-green-500 text-white">
              En vivo
            </Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="w-4 h-4 mr-1" />
              {formatTime(timeRemaining)} restantes
            </div>
          </div>
        </div>
        <Button variant="destructive" onClick={handleLeaveSession}>
          <LogOut className="w-4 h-4 mr-2" />
          Salir de la Reunión
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-6">
          {/* Video Area */}
          <Card className="bg-white shadow-card">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-tech-blue to-tech-purple rounded-t-lg h-64 flex items-center justify-center relative">
                <div className="text-white text-center">
                  <Video className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Simulación de Video Colaborativo</p>
                  <p className="text-sm opacity-75">Cámara y micrófono activos</p>
                </div>
                <div className="absolute bottom-4 left-4 flex space-x-2">
                  <Button size="sm" variant="secondary" className="bg-white/20 text-white border-white/30">
                    <Mic className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/20 text-white border-white/30">
                    <Video className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Activity Card */}
          <Card className="bg-white shadow-card">
            <CardHeader>
              <CardTitle>Actividad Actual: {session.topic}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-tech-gray p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Caso de Estudio:</h4>
                  <p className="text-sm text-muted-foreground">
                    "Una startup tecnológica necesita rediseñar su aplicación móvil porque los usuarios 
                    reportan dificultades para completar el proceso de compra. Como equipo, deben 
                    identificar los problemas principales y proponer soluciones usando la metodología 
                    Design Thinking."
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h5 className="font-medium text-blue-800 mb-1">Fase Actual</h5>
                    <p className="text-sm text-blue-600">Definición del Problema</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <h5 className="font-medium text-green-800 mb-1">Tiempo Restante</h5>
                    <p className="text-sm text-green-600">{formatTime(timeRemaining)}</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h5 className="font-medium mb-2">Instrucciones:</h5>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Cada participante debe compartir su perspectiva sobre el problema</li>
                    <li>• Trabajen juntos para crear un mapa de empatía del usuario</li>
                    <li>• Definan 3 problemas principales identificados</li>
                    <li>• Preparen una presentación de 5 minutos con sus conclusiones</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Participants */}
          <Card className="bg-white shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Participantes ({participants.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {participants.map((participant) => (
                  <div key={participant.id} className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {participant.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{participant.name}</p>
                      <p className="text-xs text-muted-foreground">{participant.role}</p>
                    </div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Chat */}
          <Card className="bg-white shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="w-5 h-5 mr-2" />
                Chat Grupal
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-48 overflow-y-auto">
                <div className="text-xs">
                  <span className="font-medium text-blue-600">Ana García:</span>
                  <p className="text-muted-foreground">¡Bienvenidos! Empecemos identificando los pain points principales</p>
                </div>
                <div className="text-xs">
                  <span className="font-medium text-green-600">Carlos López:</span>
                  <p className="text-muted-foreground">Creo que el problema está en el checkout process</p>
                </div>
                <div className="text-xs">
                  <span className="font-medium text-purple-600">María Rodríguez:</span>
                  <p className="text-muted-foreground">Estoy de acuerdo, también la navegación es confusa</p>
                </div>
              </div>
              <div className="mt-3 pt-3 border-t">
                <div className="flex space-x-2">
                  <input 
                    type="text" 
                    placeholder="Escribe un mensaje..."
                    className="flex-1 text-xs px-2 py-1 border rounded"
                  />
                  <Button size="sm" variant="ghost">
                    <MessageSquare className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GroupSimulation;
