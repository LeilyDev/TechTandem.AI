
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BookOpen, CheckCircle } from "lucide-react";

interface GuideViewerProps {
  title: string;
  content: React.ReactNode;
  onBack: () => void;
}

const GuideViewer = ({ title, content, onBack }: GuideViewerProps) => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center mb-6">
        <Button variant="ghost" onClick={onBack} className="mr-4">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver
        </Button>
        <div className="flex items-center space-x-3">
          <BookOpen className="w-6 h-6 text-[#569c9f]" />
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
      </div>

      <Card className="bg-white shadow-sm">
        <CardContent className="p-8">
          {content}
        </CardContent>
      </Card>
    </div>
  );
};

export default GuideViewer;
