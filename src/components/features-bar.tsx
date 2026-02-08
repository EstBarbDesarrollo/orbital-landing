'use client';

import { Card } from './ui/card';
import { ShieldCheck, Send, CloudUpload, FileText } from 'lucide-react';

export function FeaturesBar() {
  return (
    <div className="-mt-20 relative z-10 pb-20">
      <div className="container px-16">
        <div className="bg-[#eaeaec] rounded-2xl p-[15px]">
          <Card className="overflow-hidden rounded-2xl shadow-none">
            <div className="flex flex-col md:flex-row">
              <div className="p-4 bg-primary text-primary-foreground flex flex-col justify-center items-start gap-2 md:w-[40%]">
                <div className="flex items-center justify-between w-full">
                  <div>
                    <h3 className="font-bold text-xl">Firma Digital Orbital</h3>
                    <p className="text-xs opacity-90 mt-1">
                      Pleno valor legal (Ley 25.506). Seguridad jurídica total e inmediata.
                    </p>
                  </div>
                  <ShieldCheck className="w-7 h-7 flex-shrink-0" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 md:flex-1">
                <div className="p-4 flex flex-col items-center justify-center text-center gap-2 bg-card">
                  <Send className="w-8 h-8 text-primary" />
                  <h3 className="font-semibold text-xs mt-1">Eliminación de papel y traslados</h3>
                </div>
                <div className="p-4 flex flex-col items-center justify-center text-center gap-2 border-t sm:border-t-0 sm:border-l bg-card">
                  <CloudUpload className="w-8 h-8 text-primary" />
                  <h3 className="font-semibold text-xs mt-1">Información siempre disponible y protegida</h3>
                </div>
                <div className="p-4 flex flex-col items-center justify-center text-center gap-2 border-t sm:border-t-0 sm:border-l bg-card">
                  <FileText className="w-8 h-8 text-primary" />
                  <h3 className="font-semibold text-xs mt-1">Centralización de documentos y legajos</h3>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
