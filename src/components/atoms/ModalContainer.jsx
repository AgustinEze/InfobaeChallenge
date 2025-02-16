import { Button } from "./Button";

export const ModalContainer = ({ onClose, children }) => {
  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} 
    >
      <div 
        className="bg-white p-6 rounded-lg w-96 shadow-lg flex flex-col justify-center items-center gap-5"
        onClick={(e) => e.stopPropagation()}
      >
        {children}

        <Button
          text={'Cerrar'}
          onClick={onClose}
        />
      </div>
    </div>
  );
};
