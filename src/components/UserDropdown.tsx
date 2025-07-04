
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { User, Settings, LogOut, BookOpen, Trophy, Target } from "lucide-react";

interface UserDropdownProps {
  onClose: () => void;
}

const UserDropdown = ({ onClose }: UserDropdownProps) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>
        <Card className="w-80 bg-white shadow-lg">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-[#569c9f] rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-white text-xl font-bold">
                {user?.firstName?.charAt(0)}{user?.lastName?.charAt(0)}
              </span>
            </div>
            <CardTitle className="text-xl">{user?.firstName} {user?.lastName}</CardTitle>
            <p className="text-sm text-gray-600">{user?.email}</p>
            <p className="text-xs text-gray-500">{user?.university} - {user?.career}</p>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <Trophy className="w-5 h-5 text-[#569c9f] mx-auto mb-1" />
                <div className="text-sm font-semibold">12</div>
                <div className="text-xs text-gray-500">Simulaciones</div>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <Target className="w-5 h-5 text-green-600 mx-auto mb-1" />
                <div className="text-sm font-semibold">85%</div>
                <div className="text-xs text-gray-500">Promedio</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="text-sm font-medium text-gray-700 mb-2">Áreas de Interés:</div>
              <div className="flex flex-wrap gap-1">
                {user?.interests?.map((interest, i) => (
                  <span key={i} className="px-2 py-1 bg-[#569c9f]/10 text-[#569c9f] rounded-full text-xs">
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t pt-3 space-y-2">
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <User className="w-4 h-4 mr-2" />
                Ver Perfil
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Configuración
              </Button>
              <Button variant="ghost" className="w-full justify-start" size="sm">
                <BookOpen className="w-4 h-4 mr-2" />
                Mi Progreso
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50" 
                size="sm"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Cerrar Sesión
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UserDropdown;
