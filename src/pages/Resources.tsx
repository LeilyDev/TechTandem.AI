import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import VideoPlayer from "@/components/VideoPlayer";
import GuideViewer from "@/components/GuideViewer";
import InteractiveTest from "@/components/InteractiveTest";
import { 
  Play, 
  BookOpen, 
  FileText, 
  Search,
  Star,
  Clock,
  Download,
  Eye,
  ArrowLeft
} from "lucide-react";

const Resources = () => {
  const [currentView, setCurrentView] = useState<'main' | 'video' | 'guide' | 'test'>('main');
  const [currentContent, setCurrentContent] = useState<any>(null);

  const handleVideoClick = (videoUrl: string, title: string) => {
    setCurrentContent({ videoUrl, title });
    setCurrentView('video');
  };

  const handleGuideClick = (title: string, content: React.ReactNode) => {
    setCurrentContent({ title, content });
    setCurrentView('guide');
  };

  const handleTestClick = (title: string, questions: any[]) => {
    setCurrentContent({ title, questions });
    setCurrentView('test');
  };

  const handlePDFDownload = (url: string) => {
    window.open(url, '_blank');
  };

  const backToMain = () => {
    setCurrentView('main');
    setCurrentContent(null);
  };

  // Render current view
  if (currentView === 'video' && currentContent) {
    return (
      <VideoPlayer
        videoUrl={currentContent.videoUrl}
        title={currentContent.title}
        onBack={backToMain}
      />
    );
  }

  if (currentView === 'guide' && currentContent) {
    return (
      <GuideViewer
        title={currentContent.title}
        content={currentContent.content}
        onBack={backToMain}
      />
    );
  }

  if (currentView === 'test' && currentContent) {
    return (
      <InteractiveTest
        title={currentContent.title}
        questions={currentContent.questions}
        onBack={backToMain}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#569c9f]/10 via-white to-[#4a9297]/10">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-[#569c9f]">Recursos para Mejorar tus Habilidades Técnicas</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Accede a nuestra biblioteca completa de videos de comunicación, tests y guías prácticas 
            organizadas para maximizar tu aprendizaje.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mt-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input 
              placeholder="Buscar recursos..."
              className="pl-10"
            />
          </div>
        </div>

        {/* Featured Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center space-x-2">
            <Star className="w-6 h-6 text-yellow-500" />
            <span>Recursos Destacados</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white shadow-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-r from-[#569c9f] to-[#4a9297] rounded-lg flex items-center justify-center">
                    <Play className="w-12 h-12 text-white" />
                  </div>
                  <Badge className="absolute top-2 right-2 bg-red-500">Nuevo</Badge>
                </div>
                <CardTitle className="text-lg">Comunicación Efectiva en Entrevistas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Aprende técnicas avanzadas para comunicar tus ideas de manera clara y convincente durante las entrevistas técnicas.
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>15 min</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="w-4 h-4" />
                    <span>1,234 vistas</span>
                  </div>
                </div>
                <Button 
                  variant="default" 
                  className="w-full bg-[#569c9f] hover:bg-[#4a9297]"
                  onClick={() => handleVideoClick('https://youtu.be/YBWIMFjzy5o?si=uy7qnJMfL1Y-R568', 'Comunicación Efectiva en Entrevistas')}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Ver Video
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-r from-[#4a9297] to-[#3d8387] rounded-lg flex items-center justify-center">
                    <FileText className="w-12 h-12 text-white" />
                  </div>
                  <Badge className="absolute top-2 right-2 bg-yellow-500">Popular</Badge>
                </div>
                <CardTitle className="text-lg">Guía: Estructuras de Datos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Guía completa con ejemplos prácticos y ejercicios para dominar las estructuras de datos más comunes.
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-4 h-4" />
                    <span>24 páginas</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>856 descargas</span>
                  </div>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handlePDFDownload('https://informatica.uv.es/docencia/fguia/TI/Libro/PDFs/CAPI5.pdf')}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Descargar PDF
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-card hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-r from-[#3d8387] to-[#569c9f] rounded-lg flex items-center justify-center">
                    <BookOpen className="w-12 h-12 text-white" />
                  </div>
                </div>
                <CardTitle className="text-lg">Test Interactivo: Algoritmos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Evalúa tu conocimiento en algoritmos con este test interactivo de dificultad progresiva.
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4" />
                    <span>30 min</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4" />
                    <span>4.8/5</span>
                  </div>
                </div>
                <Button 
                  variant="default" 
                  className="w-full bg-[#569c9f] hover:bg-[#4a9297]"
                  onClick={() => handleTestClick('Test Interactivo: Algoritmos', [
                    {
                      question: "¿Cuál es la complejidad temporal del algoritmo de búsqueda binaria?",
                      options: ["O(n)", "O(log n)", "O(n²)", "O(1)"],
                      correct: 1
                    },
                    {
                      question: "¿Qué estructura de datos sigue el principio LIFO?",
                      options: ["Cola", "Pila", "Lista enlazada", "Árbol"],
                      correct: 1
                    },
                    {
                      question: "¿Cuál es el peor caso de complejidad temporal del algoritmo QuickSort?",
                      options: ["O(n log n)", "O(n²)", "O(n)", "O(log n)"],
                      correct: 1
                    }
                  ])}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Iniciar Test
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Practical Guides */}
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <FileText className="w-5 h-5 text-[#569c9f]" />
              <span>Guías Prácticas</span>
            </h2>
            
            <div className="space-y-4">
              <Card className="bg-white shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-[#569c9f] rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Preparación para Coding Interviews</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Estrategias paso a paso para resolver problemas algorítmicos
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleGuideClick('Preparación para Coding Interviews', (
                          <div className="space-y-6">
                            <section>
                              <h2 className="text-2xl font-bold mb-4 text-[#569c9f]">Introducción</h2>
                              <p className="text-gray-700 mb-4">
                                Las entrevistas de programación son una parte crucial del proceso de selección en empresas tecnológicas. 
                                Esta guía te ayudará a prepararte de manera efectiva para enfrentar estos desafíos.
                              </p>
                            </section>

                            <section>
                              <h2 className="text-2xl font-bold mb-4 text-[#569c9f]">Fundamentos Esenciales</h2>
                              <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h3 className="font-semibold mb-2">1. Estructuras de Datos Básicas</h3>
                                  <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li>Arrays y Strings</li>
                                    <li>Listas Enlazadas</li>
                                    <li>Pilas y Colas</li>
                                    <li>Hash Tables</li>
                                    <li>Árboles y Grafos</li>
                                  </ul>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h3 className="font-semibold mb-2">2. Algoritmos Fundamentales</h3>
                                  <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li>Ordenamiento (QuickSort, MergeSort)</li>
                                    <li>Búsqueda (Binaria, DFS, BFS)</li>
                                    <li>Programación Dinámica</li>
                                    <li>Algoritmos Greedy</li>
                                    <li>Divide y Vencerás</li>
                                  </ul>
                                </div>
                              </div>
                            </section>

                            <section>
                              <h2 className="text-2xl font-bold mb-4 text-[#569c9f]">Estrategias de Resolución</h2>
                              <div className="space-y-4">
                                <div className="border-l-4 border-[#569c9f] pl-4">
                                  <h3 className="font-semibold mb-2">Paso 1: Entender el Problema</h3>
                                  <p className="text-sm text-gray-700">
                                    Lee cuidadosamente el enunciado, identifica inputs/outputs y pregunta por casos edge.
                                  </p>
                                </div>

                                <div className="border-l-4 border-[#569c9f] pl-4">
                                  <h3 className="font-semibold mb-2">Paso 2: Planificar la Solución</h3>
                                  <p className="text-sm text-gray-700">
                                    Piensa en voz alta, discute diferentes enfoques y analiza complejidad temporal.
                                  </p>
                                </div>

                                <div className="border-l-4 border-[#569c9f] pl-4">
                                  <h3 className="font-semibold mb-2">Paso 3: Implementar</h3>
                                  <p className="text-sm text-gray-700">
                                    Escribe código limpio, comenta partes complejas y maneja casos edge.
                                  </p>
                                </div>

                                <div className="border-l-4 border-[#569c9f] pl-4">
                                  <h3 className="font-semibold mb-2">Paso 4: Probar y Optimizar</h3>
                                  <p className="text-sm text-gray-700">
                                    Ejecuta casos de prueba, identifica bugs y optimiza si es necesario.
                                  </p>
                                </div>
                              </div>
                            </section>

                            <section>
                              <h2 className="text-2xl font-bold mb-4 text-[#569c9f]">Recursos Adicionales</h2>
                              <div className="bg-[#569c9f]/10 p-4 rounded-lg">
                                <h3 className="font-semibold mb-2">Plataformas de Práctica</h3>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                  <li>LeetCode - Problemas clasificados por dificultad</li>
                                  <li>HackerRank - Challenges y competencias</li>
                                  <li>CodeSignal - Simulaciones de entrevistas reales</li>
                                  <li>Pramp - Mock interviews con peers</li>
                                </ul>
                              </div>
                            </section>
                          </div>
                        ))}
                      >
                        Ver Guía
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-[#569c9f] rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Soft Skills para Tecnólogos</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Desarrolla habilidades de comunicación y liderazgo
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleGuideClick('Soft Skills para Tecnólogos', (
                          <div className="space-y-6">
                            <section>
                              <h2 className="text-2xl font-bold mb-4 text-[#569c9f]">Introducción</h2>
                              <p className="text-gray-700 mb-4">
                                Las habilidades blandas son esenciales en el entorno laboral actual. 
                                Esta guía te ayudará a desarrollar competencias clave para tu éxito profesional.
                              </p>
                            </section>

                            <section>
                              <h2 className="text-2xl font-bold mb-4 text-[#569c9f]">Habilidades Clave</h2>
                              <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h3 className="font-semibold mb-2">1. Comunicación Efectiva</h3>
                                  <p className="text-sm text-gray-700">
                                    Aprende a expresar tus ideas de manera clara y concisa, tanto verbalmente como por escrito.
                                  </p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h3 className="font-semibold mb-2">2. Trabajo en Equipo</h3>
                                  <p className="text-sm text-gray-700">
                                    Colabora con otros, escucha activamente y contribuye al éxito del grupo.
                                  </p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h3 className="font-semibold mb-2">3. Adaptabilidad</h3>
                                  <p className="text-sm text-gray-700">
                                    Sé flexible ante cambios y aprende a manejar situaciones inesperadas.
                                  </p>
                                </div>
                              </div>
                            </section>

                            <section>
                              <h2 className="text-2xl font-bold mb-4 text-[#569c9f]">Recursos Adicionales</h2>
                              <div className="bg-[#569c9f]/10 p-4 rounded-lg">
                                <h3 className="font-semibold mb-2">Lecturas Recomendadas</h3>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                  <li>"Cómo Ganar Amigos e Influir sobre las Personas" - Dale Carnegie</li>
                                  <li>"Los 7 Hábitos de la Gente Altamente Efectiva" - Stephen Covey</li>
                                  <li>"Inteligencia Emocional" - Daniel Goleman</li>
                                </ul>
                              </div>
                            </section>
                          </div>
                        ))}
                      >
                        Ver Guía
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-[#569c9f] rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">System Design Basics</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Fundamentos para entrevistas de diseño de sistemas
                      </p>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleGuideClick('System Design Basics', (
                          <div className="space-y-6">
                            <section>
                              <h2 className="text-2xl font-bold mb-4 text-[#569c9f]">Introducción</h2>
                              <p className="text-gray-700 mb-4">
                                El diseño de sistemas es una habilidad crítica para los ingenieros de software. 
                                Esta guía te proporcionará una base sólida en los principios de diseño de sistemas.
                              </p>
                            </section>

                            <section>
                              <h2 className="text-2xl font-bold mb-4 text-[#569c9f]">Conceptos Clave</h2>
                              <div className="space-y-4">
                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h3 className="font-semibold mb-2">1. Escalabilidad</h3>
                                  <p className="text-sm text-gray-700">
                                    Aprende a diseñar sistemas que puedan manejar un aumento en la carga de trabajo.
                                  </p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h3 className="font-semibold mb-2">2. Disponibilidad</h3>
                                  <p className="text-sm text-gray-700">
                                    Asegúrate de que tu sistema esté disponible y operativo en todo momento.
                                  </p>
                                </div>

                                <div className="bg-gray-50 p-4 rounded-lg">
                                  <h3 className="font-semibold mb-2">3. Mantenibilidad</h3>
                                  <p className="text-sm text-gray-700">
                                    Diseña sistemas que sean fáciles de mantener y actualizar.
                                  </p>
                                </div>
                              </div>
                            </section>

                            <section>
                              <h2 className="text-2xl font-bold mb-4 text-[#569c9f]">Recursos Adicionales</h2>
                              <div className="bg-[#569c9f]/10 p-4 rounded-lg">
                                <h3 className="font-semibold mb-2">Lecturas Recomendadas</h3>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                  <li>"Designing Data-Intensive Applications" - Martin Kleppmann</li>
                                  <li>"System Design Interview" - Alex Xu</li>
                                  <li>"The Art of Scalability" - Martin L. Abbott</li>
                                </ul>
                              </div>
                            </section>
                          </div>
                        ))}
                      >
                        Ver Guía
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Educational Videos */}
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <Play className="w-5 h-5 text-[#569c9f]" />
              <span>Videos Educativos</span>
            </h2>
            
            <div className="space-y-4">
              <Card className="bg-white shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Técnicas de Problem Solving</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Metodología STAR para responder preguntas técnicas
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">12 min</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleVideoClick('https://youtu.be/f2GQPmPVEK0?si=Gd-P0YvXCP7I8hZJ', 'Técnicas de Problem Solving')}
                        >
                          <Play className="w-3 h-3 mr-1" />
                          Ver
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Trabajo en Equipo Virtual</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Colaboración efectiva en entornos remotos
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">18 min</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleVideoClick('https://youtu.be/M8AYxCYGiag?si=N4d7GO_8itn0TTxm', 'Trabajo en Equipo Virtual')}
                        >
                          <Play className="w-3 h-3 mr-1" />
                          Ver
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Presentación de Proyectos</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Cómo comunicar tu trabajo técnico efectivamente
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">25 min</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleVideoClick('https://youtu.be/E6StRLc38VU?si=6bbosG1IWKxJSJ_i', 'Presentación de Proyectos')}
                        >
                          <Play className="w-3 h-3 mr-1" />
                          Ver
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Interactive Tests */}
          <section>
            <h2 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <BookOpen className="w-5 h-5 text-[#569c9f]" />
              <span>Tests Interactivos</span>
            </h2>
            
            <div className="space-y-4">
              <Card className="bg-white shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-[#569c9f] rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">JavaScript Fundamentals</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Evalúa tu conocimiento básico en JavaScript
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">20 preguntas</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleTestClick('JavaScript Fundamentals', [
                            {
                              question: "¿Cuál es la diferencia entre '==' y '===' en JavaScript?",
                              options: ["No hay diferencia", "=== compara tipo y valor", "== es más estricto", "=== solo compara valor"],
                              correct: 1
                            },
                            {
                              question: "¿Qué es el hoisting en JavaScript?",
                              options: ["Un tipo de error", "Elevación de declaraciones", "Una función built-in", "Un operador"],
                              correct: 1
                            }
                          ])}
                        >
                          Iniciar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-[#4a9297] rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Bases de Datos SQL</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Pon a prueba tus skills en consultas SQL
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">15 preguntas</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleTestClick('Bases de Datos SQL', [
                            {
                              question: "¿Qué comando SQL se usa para recuperar datos de una tabla?",
                              options: ["GET", "SELECT", "FETCH", "RETRIEVE"],
                              correct: 1
                            },
                            {
                              question: "¿Cuál es la diferencia entre INNER JOIN y LEFT JOIN?",
                              options: ["No hay diferencia", "LEFT JOIN incluye registros sin coincidencia de la tabla izquierda", "INNER JOIN es más rápido", "LEFT JOIN es más estricto"],
                              correct: 1
                            }
                          ])}
                        >
                          Iniciar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-card">
                <CardContent className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-[#3d8387] rounded-lg flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">Redes y Protocolos</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        Conceptos fundamentales de networking
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">12 preguntas</span>
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={() => handleTestClick('Redes y Protocolos', [
                            {
                              question: "¿Qué protocolo se usa para transferir páginas web?",
                              options: ["FTP", "HTTP", "SMTP", "TCP"],
                              correct: 1
                            },
                            {
                              question: "¿En qué capa del modelo OSI opera el protocolo IP?",
                              options: ["Capa de enlace", "Capa de red", "Capa de transporte", "Capa de aplicación"],
                              correct: 1
                            }
                          ])}
                        >
                          Iniciar
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resources;
