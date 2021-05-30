import { useState } from "react";

type ModalProps = {
  open?: boolean;
  onClose?(): void;
};

const Modal: React.FC<ModalProps> = ({ open, children, onClose }) => {
  const [isOpen, setIsOpen] = useState(open);

  const closeModal = (e: React.MouseEvent) => {
    if (e.target !== e.currentTarget) return;

    if (onClose) onClose();

    setIsOpen(false);
  };

  return (
    <dialog
      id="mymodaltop"
      className="bg-transparent z-0 relative w-screen h-screen"
      open={isOpen}
    >
      <div
        id="modalBackdrop"
        onClick={closeModal}
        className="p-7 flex justify-center items-start overflow-x-hidden overflow-y-auto fixed left-0 top-0 w-full h-full bg-blue-900 bg-opacity-50 z-50 transition-opacity duration-300 opacity-100"
      >
        <div className="bg-white flex rounded-lg md:w-1/2 relative pb-5">
          <div className="flex flex-col items-start md:w-full">
            <div className="pt-4 pb-3 px-5 flex items-center w-full">
              <svg
                className="ml-auto fill-current text-gray-700 w-5 h-5 cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 18 18"
                onClick={closeModal}
              >
                <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
              </svg>
            </div>
            {children}
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
