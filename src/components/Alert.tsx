import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div
      className="alert alert-primary alert-dismissible"
    >
      {children}
      <button onClick={onClose} type="button" className="btn-close"></button>
    </div>
  );
};

export default Alert;
