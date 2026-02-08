'use client';

import { Card } from './ui/card';
import { ShieldCheck, Send, CloudUpload, FileText } from 'lucide-react';

export function FeaturesBar() {
  return (
    <div className="-mt-20 relative z-10">
      <div className="container">
        <Card className="shadow-lg overflow-hidden rounded-2xl">
          <div className="flex flex-col md:flex-row">
            <div className="p-8 bg-primary text-primary-foreground flex flex-col justify-center items-start gap-4 md:w-[40%]">
              <div className="flex items-center justify-between w-full">
                <div>
                  <h3 className="font-bold text-2xl">Firma Digital Orbital</h3>
                  <p className="text-sm opacity-90 mt-1">
                    Pleno valor legal (Ley 25.506). Seguridad jurídica total e inmediata.
                  </p>
                </div>
                <ShieldCheck className="w-8 h-8 flex-shrink-0" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:flex-1 bg-card">
              <div className="p-6 flex flex-col items-center justify-center text-center gap-3">
                <Send className="w-10 h-10 text-primary" />
                <h3 className="font-semibold text-sm mt-2">Eliminación de papel y traslados</h3>
              </div>
              <div className="p-6 flex flex-col items-center justify-center text-center gap-3 border-t sm:border-t-0 sm:border-l">
                <CloudUpload className="w-10 h-10 text-primary" />
                <h3 className="font-semibold text-sm mt-2">Información siempre disponible y protegida</h3>
              </div>
              <div className="p-6 flex flex-col items-center justify-center text-center gap-3 border-t sm:border-t-0 sm:border-l">
                <FileText className="w-10 h-10 text-primary" />
                <h3 className="font-semibold text-sm mt-2">Centralización de documentos y legajos</h3>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
