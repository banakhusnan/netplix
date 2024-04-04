import { forwardRef } from "react";

const Modal = forwardRef(({ children }, ref) => {
  return (
    <dialog
      ref={ref}
      className="fixed w-1/2 h-fit rounded border bg-black backdrop:bg-black backdrop:opacity-70 backdrop:backdrop-blur-xl text-white"
    >
      {children}
    </dialog>
  );
});

const Header = ({ children }) => {
  return (
    <div className="p-4 flex justify-between items-center">{children}</div>
  );
};

const Body = ({ children }) => {
  return <div className="p-4">{children}</div>;
};

Modal.Header = Header;
Modal.Body = Body;

export default Modal;
