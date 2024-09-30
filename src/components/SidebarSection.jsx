// SidebarSection.jsx
import SidebarButton from "./SidebarButton";

const SidebarSection = ({ buttons, side, color, toggleModal }) => {
  // Determinar la posición según el lado (izquierda o derecha)
  const sideClass = side === "left" ? "left-6" : "right-6";
  
  return (
    <div
      className={`absolute ${sideClass} top-1/2 transform -translate-y-1/2 ${color} bg-opacity-70 backdrop-blur-sm rounded-2xl p-3`}
    >
      <div className="flex flex-col space-y-4">
        {buttons.map(({ icon: IconComponent, modal }, index) => (
          <SidebarButton
            key={`${side}-button-${index}`}
            IconComponent={IconComponent}
            onClick={() => toggleModal(modal)}
          />
        ))}
      </div>
    </div>
  );
};

export default SidebarSection;
