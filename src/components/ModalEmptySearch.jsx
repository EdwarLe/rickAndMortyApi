const ModalEmptySearch = ({ handleCloseModal, emptySearch }) => {
  return (
    <section className={`transition-all duration-700 min-h-screen min-w-full flex justify-center items-center px-4 absolute backdrop-blur-md z-50 top-0 bottom-0 ${emptySearch ? 'left-0' : 'left-full'}`}>
      <div className="bg-black flex flex-col justify-center items-center px-4 rounded-3xl">
        <h2 className="text-light-yellow text-bold text-2xl mt-6">
          ¿Acaso estás ciego?
        </h2>
        <div>
          <img
            src="/images/ram-modal-def.jpg"
            alt=""
            className="sm:w-[400px] sm:h-[400px]"
          />
        </div>
        <article className="text-center">
          <p className="text-light-yellow font-bold text-xl">
            Elige una dimensión <br /> aquí no hay nada
          </p>
        </article>
        <button
          type="button"
          className="font-lato text-white font-bold bg-black border-tranparent border-2 px-4 py-2 rounded-full mt-5 mb-4 hover:bg-white hover:text-black"
          onClick={handleCloseModal}
        >
          Cerrar ventana
        </button>
      </div>
    </section>
  );
};
export default ModalEmptySearch;
