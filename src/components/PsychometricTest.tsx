
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Send, Brain } from "lucide-react";
import Feedback from "./Feedback";

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

interface PsychometricTestProps {
  test: Test;
  onBack: () => void;
}

const PsychometricTest = ({ test, onBack }: PsychometricTestProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>(new Array(test.testQuestions.length).fill(''));
  const [showFeedback, setShowFeedback] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < test.testQuestions.length - 1) {
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
        type="psychometric"
        topic={test.category}
        score={Math.floor(Math.random() * 25) + 75} // Simulando puntaje
        onBack={onBack}
      />
    );
  }

  const currentQ = test.testQuestions[currentQuestion];
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
            <h1 className="text-2xl font-bold">{test.title}</h1>
            <div className="flex items-center space-x-3 mt-2">
              <Badge className={`${getDifficultyColor(test.difficulty)} text-white`}>
                {test.difficulty}
              </Badge>
              <Badge variant="outline">
                {test.category}
              </Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="w-4 h-4 mr-1" />
                {test.duration}
              </div>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="text-sm text-muted-foreground">Pregunta</div>
          <div className="text-xl font-bold text-primary">
            {currentQuestion + 1} / {test.testQuestions.length}
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-tech-gray rounded-full h-2 mb-8">
        <div 
          className="bg-gradient-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentQuestion + 1) / test.testQuestions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <Card className="bg-white shadow-card mb-8">
        <CardHeader>
          <CardTitle className="text-xl flex items-center">
            <Brain className="w-6 h-6 mr-2 text-primary" />
            Pregunta {currentQuestion + 1}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <p className="text-lg text-foreground mb-6">
              {currentQ.question}
            </p>
          </div>
          
          <div className="space-y-3">
            {currentQ.type === 'multiple' ? (
              // Multiple choice questions
              currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  className={`w-full p-4 text-left border rounded-lg transition-all hover:border-primary ${
                    answers[currentQuestion] === option
                      ? 'border-primary bg-primary/5 text-primary'
                      : 'border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full border-2 mr-3 ${
                      answers[currentQuestion] === option
                        ? 'border-primary bg-primary'
                        : 'border-gray-300'
                    }`}>
                      {answers[currentQuestion] === option && (
                        <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                      )}
                    </div>
                    <span>{option}</span>
                  </div>
                </button>
              ))
            ) : (
              // Scale questions
              <div className="space-y-4">
                <div className="flex justify-between text-sm text-muted-foreground mb-2">
                  <span>{currentQ.options[0]}</span>
                  <span>{currentQ.options[currentQ.options.length - 1]}</span>
                </div>
                <div className="flex justify-between space-x-2">
                  {currentQ.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(option)}
                      className={`flex-1 p-3 text-center border rounded-lg transition-all hover:border-primary ${
                        answers[currentQuestion] === option
                          ? 'border-primary bg-primary text-white'
                          : 'border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  {currentQ.options.map((option, index) => (
                    <span key={index} className="flex-1 text-center">{option}</span>
                  ))}
                </div>
              </div>
            )}
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
          {test.testQuestions.map((_, index) => (
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

        {currentQuestion === test.testQuestions.length - 1 ? (
          <Button 
            onClick={handleSubmit}
            disabled={!answers[currentQuestion]}
            className="bg-green-600 hover:bg-green-700"
          >
            <Send className="w-4 h-4 mr-2" />
            Enviar Test
          </Button>
        ) : (
          <Button 
            onClick={handleNextQuestion}
            disabled={!answers[currentQuestion]}
          >
            Siguiente
          </Button>
        )}
      </div>
    </div>
  );
};

export default PsychometricTest;
