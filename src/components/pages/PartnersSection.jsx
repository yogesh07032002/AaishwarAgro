export default function PartnersSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10">Our Official Clients</h2>
        <div className="flex justify-center gap-16 flex-wrap">
          
          {/* Indian Grameen Services */}
          <div className="flex flex-col items-center">
            <img 
              src="/grameen-logo.jpg" 
              alt="Indian Grameen Services" 
              className="h-28 w-auto mb-3" 
            />
            <p className="text-lg font-medium">Indian Grameen Services</p>
          </div>

          {/* WOTR */}
          <div className="flex flex-col items-center">
            <img 
              src="/wort-logo.png" 
              alt="WOTR" 
              className="h-28 w-auto mb-3" 
            />
            <p className="text-lg font-medium">WOTR</p>
          </div>

        </div>
      </div>
    </section>
  );
}
