import { forwardRef, useRef } from "react";

const Modal = forwardRef(({ children, onClose }, ref) => {
  return (
    <dialog ref={ref} className="p-5 bg-transparent w-full">
      <div className="bg-gray-800/75 rounded-3xl w-full h-96 max-w-2xl ml-auto p-5">
        <div className="h-full overflow-y-scroll">{children}</div>
      </div>
    </dialog>
  );
});

export default Modal;

export function useModal() {
  const ref = useRef(null);

  const onOpen = () => ref.current.showModal();

  const onClose = () => ref.current.close();

  return { ref, onOpen, onClose };
}
