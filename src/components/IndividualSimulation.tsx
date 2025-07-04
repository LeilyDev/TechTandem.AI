
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Send } from "lucide-react";
import Feedback from "./Feedback";

interface Simulation {
  id: string;
  title: string;
  description: string;
  difficulty: 'Básico' | 'Intermedio' | 'Avanzado';
  duration: string;
  topic: string;
  questions: string[];
}

interface IndividualSimulationProps {
  simulation: Simulation;
  onBack: () => void;
}

const IndividualSimulation = ({ simulation, onBack }: IndividualSimulationProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(new Array(simulation.questions.length).fill(''));
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerChange = (value: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < simulation.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowFeedback(true);
  };

  if (showFeedback) {
    return (
      <Feedback 
        type="individual"
        topic={simulation.topic}
        score={Math.floor(Math.random() * 30) + 70} // Simulando puntaje
        onBack={onBack}
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
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Button variant="ghost" onClick={onBack} className="mr-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{simulation.title}</h1>
            <div className="flex items-center space-x-3 mt-2">
              <Badge className={`${getDifficultyColor(simulation.difficulty)} text-white`}>
                {simulation.difficulty}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                {simulation.duration}
              </div>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground">Pregunta</div>
          <div className="text-xl font-bold text-primary">
            {currentQuestion + 1} / {simulation.questions.length}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-tech-gray rounded-full h-2 mb-8">
        <div 
          className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / simulation.questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <Card className="bg-white shadow-card mb-8">
        <CardHeader>
          <CardTitle className="text-xl">
            Pregunta {currentQuestion + 1}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <p className="text-lg text-foreground mb-4">
              {simulation.questions[currentQuestion]}
            </p>
          </div>
          
          <div className="space-y-4">
            <label className="block text-sm font-medium text-foreground">
              Tu respuesta:
            </label>
            <Textarea
              placeholder="Escribe tu respuesta aquí..."
              value={answers[currentQuestion]}
              onChange={(e) => handleAnswerChange(e.target.value)}
              className="min-h-[120px] resize-none"
            />
          </div>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button 
          variant="outline" 
          onClick={handlePreviousQuestion}
          disabled={currentQuestion === 0}
        >
          Anterior
        </Button>
        
        <div className="flex space-x-2">
          {simulation.questions.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentQuestion(index)}
              className={`w-8 h-8 rounded-full text-xs font-medium transition-colors ${
                index === currentQuestion
                  ? 'bg-primary text-white'
                  : answers[index] 
                  ? 'bg-green-100 text-green-600 border border-green-300'
                  : 'bg-gray-100 text-gray-500 border border-gray-300'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>

        {currentQuestion === simulation.questions.length - 1 ? (
          <Button 
            onClick={handleSubmit}
            disabled={!answers[currentQuestion].trim()}
            className="bg-green-600 hover:bg-green-700"
          >
            <Send className="w-4 h-4 mr-2" />
            Enviar Respuestas
          </Button>
        ) : (
          <Button 
            onClick={handleNextQuestion}
            disabled={!answers[currentQuestion].trim()}
          >
            Siguiente
          </Button>
        )}
      </div>
    </div>
  );
};

export default IndividualSimulation;
