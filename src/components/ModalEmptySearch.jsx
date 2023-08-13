const ModalEmptySearch = ({handleCloseModal}) => {
  return (
    <section className="transition-all duration-700 min-h-screen min-w-full flex justify-center items-center px-4 absolute backdrop-blur-md z-50 top-0 bottom-0">
            <div className="bg-red-wine flex flex-col justify-center items-center px-4 rounded-3xl">
                <h2 className="text-light-yellow text-bold text-2xl mt-6">Tenemos un problema</h2>
                <div>
                    <img src="/images/ram-modal.png" alt="" className="sm:w-[300px] sm:h-[300px]" />
                </div>
                <article className="text-center">
                    <p className="text-light-yellow font-bold text-xl">¿Acaso ves algo aquí? <br />Abre los ojos <br />Brrrp...</p>
                </article>
                <button type="button" className="font-lato text-white font-bold bg-purple border-tranparent border-2 px-4 py-2 rounded-full mt-5 mb-4 hover:bg-light-yellow hover:text-red-wine" onClick={handleCloseModal}>Cerrar ventana</button>
            </div>
        </section>
  )
}
export default ModalEmptySearch