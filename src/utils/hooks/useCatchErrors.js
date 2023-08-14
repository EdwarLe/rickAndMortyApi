import { useState } from "react";

export const useCatchErrors = (bool) => {
  const [emptySearch, setEmptySearch] = useState(false);
  const [error404Modal, setError404Modal] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const handleCloseModal = () => {
    setEmptySearch(false)
    setError404Modal(false)
  }
  const emptyError = () => {
    setEmptySearch(bool)
  }

  const error404 = () => {
    setError404Modal(bool)
  }

  const loaderScreen = () => {
    setTimeout(() => {
        setIsLoading(bool)
        
    }, 2000);
  }

  return {
    emptySearch,
    handleCloseModal,
    emptyError,
    error404,
    error404Modal,
    loaderScreen,
    isLoading
  };
};
