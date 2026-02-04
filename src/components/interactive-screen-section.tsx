'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { Cpu, Users2, BarChart, Settings, ArrowRight } from 'lucide-react';

const screenItems = [
  {
    id: 'item-1',
    title: 'Panel de Control Avanzado',
    description: 'Monitorea tus KPIs en tiempo real.',
    icon: <BarChart className="h-6 w-6" />,
    imageId: 'interactive-screen-1',
  },
  {
    id: 'item-2',
    title: 'Gestión de Usuarios',
    description: 'Gestiona fácilmente roles y permisos.',
    icon: <Users2 className="h-6 w-6" />,
    imageId: 'interactive-screen-2',
  },
  {
    id: 'item-3',
    title: 'Estadísticas Potenciadas por IA',
    description: 'Aprovecha el aprendizaje automático para el crecimiento.',
    icon: <Cpu className="h-6 w-6" />,
    imageId: 'interactive-screen-3',
  },
  {
    id: 'item-4',
    title: 'Análisis Profundo',
    description: 'Entiende a tus usuarios como nunca antes.',
    icon: <BarChart className="h-6 w-6" />,
    imageId: 'interactive-screen-4',
  },
  {
    id: 'item-5',
    title: 'Configuraciones Personalizadas',
    description: 'Adapta la plataforma a tus necesidades.',
    icon: <Settings className="h-6 w-6" />,
    imageId: 'interactive-screen-5',
  },
];

export function InteractiveScreenSection() {
  const [activeItem, setActiveItem] = useState(screenItems[0]);

  const activeImage = PlaceHolderImages.find((img) => img.id === activeItem.imageId) as ImagePlaceholder;

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">
            Un Centro de Control para Tu Universo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestra plataforma proporciona un conjunto completo de herramientas para gestionar y hacer crecer tu negocio.
          </p>
        </div>

        <Card className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3 @container">
            <div className="lg:col-span-2 p-4 sm:p-6 md:p-8">
                <div className="bg-slate-800 rounded-t-lg shadow-2xl overflow-hidden">
                    <div className="bg-slate-900 h-8 flex items-center p-4">
                        <div className="flex space-x-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                    </div>
                    <div className="aspect-video bg-black relative">
                        {activeImage && (
                          <Image
                            src={activeImage.imageUrl}
                            alt={activeImage.description}
                            fill
                            className="object-cover transition-opacity duration-300"
                            data-ai-hint={activeImage.imageHint}
                          />
                        )}
                    </div>
                </div>
            </div>
            
            <div className="bg-secondary/50 p-4 sm:p-6 flex flex-col gap-2">
              {screenItems.map((item) => (
                <button
                  key={item.id}
                  onMouseEnter={() => setActiveItem(item)}
                  onFocus={() => setActiveItem(item)}
                  className={cn(
                    'group rounded-lg p-4 text-left transition-colors w-full',
                    activeItem.id === item.id
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'hover:bg-card/50'
                  )}
                >
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-4">
                            <div className={cn("transition-colors", activeItem.id !== item.id && "text-primary")}>
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="font-semibold font-headline">{item.title}</h3>
                                <p className={cn("text-sm transition-colors", activeItem.id === item.id ? "text-primary-foreground/80" : "text-muted-foreground")}>{item.description}</p>
                            </div>
                        </div>
                        <ArrowRight className={cn("h-5 w-5 opacity-0 transition-all group-hover:opacity-100", activeItem.id === item.id ? "opacity-100" : "text-primary")} />
                    </div>
                </button>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
