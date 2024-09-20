"use client";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { useRouter } from "next/navigation";

export default function Modal({ children }) {
  const router = useRouter();

  function closemodal() {
    router.back();
  }

  return createPortal(
    <div className="modal__backdrop" onClick={closemodal}>
      <aside className="modal">{children}</aside>
    </div>,
    document.getElementById("modal-root")
  );
}

Modal.propTypes = {
  children: PropTypes.node.isRequired
};
