type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
  };
  
  export default function Modal({ isOpen, onClose, children }: ModalProps) {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-20 z-50 flex items-center justify-center">
        <div className="min-w-200 min  bg-white text-black p-6 rounded-lg shadow-xl relative z-60">
          <button className=" min-w-10 bg-red-300 rounded-3xl absolute top-2 right-2 text-3xl" onClick={onClose}>
            ×
          </button>
          {children}
        </div>
      </div>
    );
  }
  