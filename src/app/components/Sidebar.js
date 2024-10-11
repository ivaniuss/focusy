import { Button } from "@/components/ui/button";

export default function Sidebar({ side, buttons }) {
  const sideClass = side === "left" ? "left-6" : "right-6";

// Configuración de los botones

  return (
      <div className={`absolute top-1/2 z-10 ${sideClass} flex flex-col items-center gap-4 transform -translate-y-1/2 bg-gradient-to-b from-[#592B2B] to-[#8B4D41] bg-opacity-70 backdrop-blur-sm rounded-2xl p-3 border border-[#F3D7AC] opacity-80`}> 
        {buttons.map(({ icon: IconComponent, modal }, index) => (
          <Button
            className="bg-transparent text-gray-200 hover:[#9A9A9A6B] hover:bg[#9A9A9A6B] hover:opacity-30 focus:ring-2 focus:ring-white"
            variant="ghost"
            size="icon"
            key={`${side}-button-${index}`}
            IconComponent={IconComponent}
            // onClick={() => toggleModal(modal)}
          >
            <IconComponent/>
          </Button>
        ))}
      </div>
  );
}
