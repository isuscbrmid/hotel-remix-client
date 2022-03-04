import React from "react";

const useModal = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const toggle = () => setShowModal(!showModal);
  return {
    showModal,
    toggle,
  };
};

export default useModal;