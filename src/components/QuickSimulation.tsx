
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Clock, Send } from "lucide-react";

interface QuickSimulationProps {
  onBack: () => void;
}

const QuickSimulation = ({ onBack }: QuickSimulationProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answer, setAnswer] = useState("");
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutos
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    "Cuéntanos sobre un proyecto en el que hayas trabajado recientemente y qué desafíos enfrentaste.",
    "¿Cómo manejas la presión cuando tienes múltiples deadlines?",
    "Describe una situación donde tuviste que trabajar con un equipo diverso."
  ];

  useEffect(() => {
    if (timeLeft > 0 && !isCompleted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, isCompleted]);

  const handleSubmit = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setAnswer("");
    } else {
      setIsCompleted(true);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  if (isCompleted) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="bg-white shadow-sm">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-green-600 text-2xl">✓</span>
            </div>
            <h2 className="text-2xl font-bold mb-4">¡Simulación Rápida Completada!</h2>
            <p className="text-gray-600 mb-6">
              Has completado exitosamente tu simulación rápida. Tus respuestas han sido evaluadas.
            </p>
            <div className="bg-[#569c9f]/5 p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-[#569c9f] mb-2">Puntaje: 88/100</h3>
              <p className="text-sm text-gray-600">
                Excelente comunicación y estructura en tus respuestas. 
                Sigue practicando para mejorar la concisión.
              </p>
            </div>
            <Button onClick={onBack} className="bg-[#569c9f] hover:bg-[#4a9297]">
              Volver a Simulaciones
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Button variant="ghost" onClick={onBack} className="mr-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Simulación Rápida</h1>
            <p className="text-gray-600">Práctica intensiva de 5 minutos</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center space-x-2 text-lg font-mono">
            <Clock className="w-5 h-5 text-[#569c9f]" />
            <span className={timeLeft < 60 ? "text-red-500" : "text-[#569c9f]"}>
              {formatTime(timeLeft)}
            </span>
          </div>
          <div className="text-sm text-gray-500">
            Pregunta {currentQuestion + 1} de {questions.length}
          </div>
        </div>
      </div>

      {/* Question Card */}
      <Card className="bg-white shadow-sm mb-8">
        <CardHeader>
          <CardTitle className="text-xl">
            Pregunta {currentQuestion + 1}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <p className="text-lg text-gray-700 mb-4">
              {questions[currentQuestion]}
            </p>
          </div>
          
          <div className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Tu respuesta:
            </label>
            <Textarea
              placeholder="Escribe tu respuesta aquí..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="min-h-[120px] resize-none"
            />
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button 
          onClick={handleSubmit}
          disabled={!answer.trim()}
          className="bg-[#569c9f] hover:bg-[#4a9297]"
        >
          <Send className="w-4 h-4 mr-2" />
          {currentQuestion < questions.length - 1 ? "Siguiente" : "Finalizar"}
        </Button>
      </div>
    </div>
  );
};

export default QuickSimulation;
