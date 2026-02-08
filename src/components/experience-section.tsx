import { Button } from "./ui/button";
import Link from "next/link";
import { EstudioBarbosaLogo } from "./estudio-barbosa-logo";
import { Badge30Anos } from "./badge-30-anos";
import { Card } from "./ui/card";

export function ExperienceSection() {
    return (
        <section className="bg-brand-blue text-brand-blue-foreground py-20 relative mt-20">
            <div className="container text-center">
                <div className="flex justify-center items-center gap-4 mb-4">
                    <EstudioBarbosaLogo />
                    <Badge30Anos />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-headline">
                    No es sólo tecnología. Es experiencia aplicada.
                </h2>
                <p className="mt-4 text-lg max-w-3xl mx-auto">
                    Orbital nace de la trayectoria y visión de Estudio Barbosa: una respuesta sólida a los desafíos de la gestión laboral moderna, tras más de 30 años de liderazgo en instituciones educativas.
                </p>
            </div>
            <div className="container relative mt-12">
                <Card className="p-8 max-w-3xl mx-auto">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
                        <h3 className="text-xl font-bold text-foreground">
                            ¿Querés simplificar la gestión de tu organización?
                        </h3>
                        <div className="flex gap-4 flex-shrink-0">
                            <Button asChild>
                                <Link href="#contact">Solicitar atención personalizada</Link>
                            </Button>
                            <Button variant="outline" asChild>
                                <Link href="#">Ingresar a Orbital</Link>
                            </Button>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    )
}
