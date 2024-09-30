"use client";
import { SidebarButton } from "./SidebarButton";
import { leftButtons, rightButtons } from "./sidebarConfig";

export const Sidebar = ({
  activeModal,
  setActiveModal,
  scenes,
  currentSceneIndex,
}) => {
  const toggleModal = (modalName) => {
    if (activeModal === modalName) {
      setActiveModal("");
    } else {
      setActiveModal(modalName);
    }
  };

  const dynamicClassName = `absolute top-1/2 transform -translate-y-1/2 ${scenes[currentSceneIndex].color} bg-opacity-70 backdrop-blur-sm rounded-2xl p-3`;

  return (
    <>
      {/* Left Sidebar */}
      <div className={`${dynamicClassName} left-6`}>
        <div className="flex flex-col space-y-4">
          {leftButtons.map(({ icon: IconComponent, modal }, index) => (
            <SidebarButton
              key={`left-button-${index}`}
              IconComponent={IconComponent}
              onClick={() => toggleModal(modal)}
            />
          ))}
        </div>
      </div>
      {/* Right Sidebar */}
      <div className={`${dynamicClassName} right-6`}>
        <div className="flex flex-col space-y-4">
          {rightButtons.map(({ icon: IconComponent, modal }, index) => (
            <SidebarButton
              key={`right-button-${index}`}
              IconComponent={IconComponent}
              onClick={() => toggleModal(modal)}
            />
          ))}
        </div>
      </div>
    </>
  );
};
