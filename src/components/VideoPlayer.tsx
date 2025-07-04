
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
  title: string;
  onBack: () => void;
}

const VideoPlayer = ({ videoUrl, title, onBack }: VideoPlayerProps) => {
  const getVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/);
    return match ? match[1] : '';
  };

  const embedUrl = `https://www.youtube.com/embed/${getVideoId(videoUrl)}`;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={onBack} className="mr-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>
        <h1 className="text-2xl font-bold">{title}</h1>
      </div>

      <Card className="bg-white shadow-sm">
        <CardContent className="p-6">
          <div className="aspect-video mb-4">
            <iframe
              src={embedUrl}
              title={title}
              className="w-full h-full rounded-lg"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">
                Video educativo para mejorar tus habilidades técnicas y profesionales.
              </p>
            </div>
            <Button 
              variant="outline" 
              onClick={() => window.open(videoUrl, '_blank')}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Ver en YouTube
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default VideoPlayer;
