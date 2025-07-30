export function VideoSection() {
  return (
    <section className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-md bg-black/60 rounded-xl border border-white/10 relative">
            {/* Eliminar cualquier fondo que pueda estar ocultando el patrón cuadriculado */}
            <div className="aspect-video w-full bg-transparent relative z-10">
              <iframe
                className="w-full h-full absolute inset-0"
                src="https://www.youtube.com/embed/Vmd9pmtWRRo"
                title="SOLxAR Community Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
