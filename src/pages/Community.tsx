import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { 
  Users, 
  MessageCircle, 
  Heart, 
  Share, 
  Search,
  Plus,
  Clock,
  Bookmark,
  TrendingUp,
  BookOpen,
  Send
} from "lucide-react";

interface Post {
  id: string;
  author: string;
  avatar: string;
  badge: string;
  time: string;
  content: string;
  likes: number;
  comments: number;
  isLiked: boolean;
  postComments: Comment[];
}

interface Comment {
  id: string;
  author: string;
  avatar: string;
  time: string;
  content: string;
}

const Community = () => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [newPost, setNewPost] = useState("");
  const [commentInputs, setCommentInputs] = useState<Record<string, string>>({});
  const [posts, setPosts] = useState<Post[]>([
    {
      id: "1",
      author: "Carlos López",
      avatar: "CL",
      badge: "Estudiante",
      time: "hace 2 horas",
      content: "¡Acabo de completar mi primera simulación grupal en TechTandem! La experiencia fue increíble. Trabajamos en un problema de optimización de base de datos y aprendí mucho sobre trabajo en equipo. ¿Alguien más ha probado las simulaciones grupales? 💻✨",
      likes: 23,
      comments: 8,
      isLiked: false,
      postComments: [
        {
          id: "c1",
          author: "Ana García",
          avatar: "AG",
          time: "hace 1 hora",
          content: "¡Qué genial Carlos! Las simulaciones grupales son excelentes para desarrollar habilidades de comunicación y colaboración."
        }
      ]
    },
    {
      id: "2", 
      author: "Ana García",
      avatar: "AG",
      badge: "Mentora",
      time: "hace 4 horas",
      content: "📚 Tip del día: Al resolver problemas de algoritmos, siempre piensen en voz alta. No solo demuestra tu proceso de pensamiento, sino que también ayuda al entrevistador a entender tu enfoque. ¡La comunicación es clave! 🗣️\n\n💡 Habilidades blandas esenciales:\n• Comunicación clara y efectiva\n• Trabajo en equipo y colaboración\n• Adaptabilidad y flexibilidad\n• Pensamiento crítico y resolución de problemas\n• Liderazgo y toma de decisiones",
      likes: 42,
      comments: 15,
      isLiked: false,
      postComments: [
        {
          id: "c2",
          author: "Sofia Martín",
          avatar: "SM",
          time: "hace 1 hora",
          content: "¡Excelente consejo! Me ayudó mucho en mi última entrevista con Microsoft 🚀"
        },
        {
          id: "c3",
          author: "Diego Ruiz",
          avatar: "DR", 
          time: "hace 30 min",
          content: "¿Tienes algún consejo específico para entrevistas de frontend? 🤔"
        }
      ]
    }
  ]);

  const handlePublishPost = () => {
    if (!newPost.trim()) return;

    const post: Post = {
      id: Date.now().toString(),
      author: `${user?.firstName} ${user?.lastName}`,
      avatar: `${user?.firstName?.charAt(0)}${user?.lastName?.charAt(0)}`,
      badge: "Estudiante",
      time: "ahora",
      content: newPost,
      likes: 0,
      comments: 0,
      isLiked: false,
      postComments: []
    };

    setPosts([post, ...posts]);
    setNewPost("");
    
    toast({
      title: "¡Post publicado!",
      description: "Tu publicación ha sido compartida con la comunidad",
    });
  };

  const handleLikePost = (postId: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isLiked: !post.isLiked,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  const handleComment = (postId: string) => {
    const commentText = commentInputs[postId];
    if (!commentText?.trim()) return;

    const newComment: Comment = {
      id: Date.now().toString(),
      author: `${user?.firstName} ${user?.lastName}`,
      avatar: `${user?.firstName?.charAt(0)}${user?.lastName?.charAt(0)}`,
      time: "ahora",
      content: commentText
    };

    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          postComments: [...post.postComments, newComment],
          comments: post.comments + 1
        };
      }
      return post;
    }));

    setCommentInputs({
      ...commentInputs,
      [postId]: ""
    });

    toast({
      title: "Comentario agregado",
      description: "Tu comentario ha sido publicado",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#569c9f]/10 via-white to-[#4a9297]/10">
      <div className="container mx-auto px-4 py-8 pt-24">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-[#569c9f]">Comunidad TechTandem</h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Conecta con otros estudiantes, únete a grupos de estudio y participa en discusiones 
            que te ayudarán a crecer profesionalmente. Enfócate especialmente en desarrollar 
            habilidades blandas como comunicación, liderazgo y trabajo en equipo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Soft Skills Development */}
            <Card className="bg-white shadow-card border-l-4 border-[#569c9f]">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-[#569c9f]">
                  <TrendingUp className="w-5 h-5" />
                  <span>Habilidades Blandas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="p-3 bg-[#569c9f]/10 rounded-lg">
                    <h4 className="font-semibold text-[#569c9f] mb-1">Comunicación</h4>
                    <p className="text-xs text-gray-600">Expresa ideas clara y efectivamente</p>
                  </div>
                  <div className="p-3 bg-[#4a9297]/10 rounded-lg">
                    <h4 className="font-semibold text-[#4a9297] mb-1">Liderazgo</h4>
                    <p className="text-xs text-gray-600">Guía y motiva a tu equipo</p>
                  </div>
                  <div className="p-3 bg-[#3d8387]/10 rounded-lg">
                    <h4 className="font-semibold text-[#3d8387] mb-1">Adaptabilidad</h4>
                    <p className="text-xs text-gray-600">Ajústate a cambios y desafíos</p>
                  </div>
                  <div className="p-3 bg-[#569c9f]/10 rounded-lg">
                    <h4 className="font-semibold text-[#569c9f] mb-1">Trabajo en Equipo</h4>
                    <p className="text-xs text-gray-600">Colabora efectivamente</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Active Members */}
            <Card className="bg-white shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-primary" />
                  <span>Miembros Activos</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { name: "Ana García", status: "En línea", avatar: "AG" },
                    { name: "Carlos López", status: "Hace 5 min", avatar: "CL" },
                    { name: "Sofia Martín", status: "En línea", avatar: "SM" },
                    { name: "Diego Ruiz", status: "Hace 1 hora", avatar: "DR" }
                  ].map((member, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <div className="relative">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-medium">{member.avatar}</span>
                        </div>
                        {member.status === "En línea" && (
                          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium">{member.name}</div>
                        <div className="text-xs text-muted-foreground">{member.status}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Study Groups */}
            <Card className="bg-white shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-primary" />
                  <span>Grupos de Estudio</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-tech-gray rounded-lg">
                    <div className="font-medium text-sm mb-1">JavaScript Avanzado</div>
                    <div className="text-xs text-muted-foreground mb-2">12 miembros activos</div>
                    <Button size="sm" variant="outline" className="w-full">Unirse</Button>
                  </div>
                  
                  <div className="p-3 bg-tech-gray rounded-lg">
                    <div className="font-medium text-sm mb-1">Algoritmos y Estructuras</div>
                    <div className="text-xs text-muted-foreground mb-2">8 miembros activos</div>
                    <Button size="sm" variant="outline" className="w-full">Unirse</Button>
                  </div>
                  
                  <div className="p-3 bg-tech-gray rounded-lg">
                    <div className="font-medium text-sm mb-1">System Design</div>
                    <div className="text-xs text-muted-foreground mb-2">15 miembros activos</div>
                    <Button size="sm" variant="outline" className="w-full">Unirse</Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Active Discussions */}
            <Card className="bg-white shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span>Discusiones Activas</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="p-2 hover:bg-tech-gray rounded cursor-pointer">
                    <div className="font-medium">¿Mejores prácticas para APIs REST?</div>
                    <div className="text-xs text-muted-foreground">24 respuestas</div>
                  </div>
                  
                  <div className="p-2 hover:bg-tech-gray rounded cursor-pointer">
                    <div className="font-medium">Preparación para Google</div>
                    <div className="text-xs text-muted-foreground">18 respuestas</div>
                  </div>
                  
                  <div className="p-2 hover:bg-tech-gray rounded cursor-pointer">
                    <div className="font-medium">Docker vs Kubernetes</div>
                    <div className="text-xs text-muted-foreground">31 respuestas</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Create Post */}
            <Card className="bg-white shadow-card">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-[#569c9f] rounded-full flex items-center justify-center">
                    <span className="text-white font-medium">
                      {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <Textarea 
                      placeholder="¿Qué te gustaría compartir con la comunidad? Comparte tus experiencias, tips sobre habilidades blandas, o cualquier aprendizaje..."
                      className="mb-4 min-h-[100px]"
                      value={newPost}
                      onChange={(e) => setNewPost(e.target.value)}
                    />
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Plus className="w-4 h-4 mr-1" />
                          Imagen
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          Encuesta
                        </Button>
                      </div>
                      <Button 
                        onClick={handlePublishPost}
                        className="bg-[#569c9f] hover:bg-[#4a9297]"
                        disabled={!newPost.trim()}
                      >
                        Publicar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Community Posts */}
            <div className="space-y-6">
              {posts.map((post) => (
                <Card key={post.id} className="bg-white shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-[#569c9f] rounded-full flex items-center justify-center">
                        <span className="text-white font-medium">{post.avatar}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="font-semibold">{post.author}</span>
                          <Badge variant="secondary">{post.badge}</Badge>
                          <span className="text-sm text-muted-foreground">{post.time}</span>
                        </div>
                        
                        <p className="text-muted-foreground mb-4 whitespace-pre-line">
                          {post.content}
                        </p>
                        
                        <div className="flex items-center space-x-6 mb-4">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => handleLikePost(post.id)}
                            className={post.isLiked ? "text-red-500" : ""}
                          >
                            <Heart className={`w-4 h-4 mr-1 ${post.isLiked ? "fill-current" : ""}`} />
                            {post.likes}
                          </Button>
                          
                          <Button variant="ghost" size="sm">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {post.comments}
                          </Button>
                          
                          <Button variant="ghost" size="sm">
                            <Share className="w-4 h-4 mr-1" />
                            Compartir
                          </Button>
                          
                          <Button variant="ghost" size="sm">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                        </div>

                        {/* Comments Section */}
                        {post.postComments.length > 0 && (
                          <div className="mt-4 pl-4 border-l-2 border-[#569c9f]/20 space-y-3">
                            {post.postComments.map((comment) => (
                              <div key={comment.id} className="flex items-start space-x-3">
                                <div className="w-6 h-6 bg-[#569c9f] rounded-full flex items-center justify-center">
                                  <span className="text-white text-xs">{comment.avatar}</span>
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center space-x-2">
                                    <span className="text-sm font-medium">{comment.author}</span>
                                    <span className="text-xs text-muted-foreground">{comment.time}</span>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    {comment.content}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Add Comment */}
                        <div className="mt-4 flex items-center space-x-3">
                          <div className="w-8 h-8 bg-[#569c9f] rounded-full flex items-center justify-center">
                            <span className="text-white text-xs">
                              {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
                            </span>
                          </div>
                          <div className="flex-1 flex space-x-2">
                            <Input
                              placeholder="Escribe un comentario..."
                              value={commentInputs[post.id] || ""}
                              onChange={(e) => setCommentInputs({
                                ...commentInputs,
                                [post.id]: e.target.value
                              })}
                              onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                  handleComment(post.id);
                                }
                              }}
                            />
                            <Button 
                              size="sm"
                              onClick={() => handleComment(post.id)}
                              disabled={!commentInputs[post.id]?.trim()}
                              className="bg-[#569c9f] hover:bg-[#4a9297]"
                            >
                              <Send className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
