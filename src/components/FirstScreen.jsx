const FirstScreen = () => {
  return (
    <section className="flex h-full justify-center items-center bg-[url(/images/bg-fscreen.png)] bg-cover bg-center absolute overflow-hidden z-50 w-full">
            <div className="absolute top-8 h-[280px] w-[280px] animate-wiggle">
                <img src="/images/logo-ram.png" alt="" />
            </div>
            <div className="animate-spin-slow h-[300px] w-[300px] absolute mt-10 min-[450px]:h-[400px] min-[450px]:w-[400px] sm:h-[450px] sm:w-[450px]">
                <img src="/images/rickmorty.png" alt="" />
            </div>
            <div className="absolute mt-12 sm:h-[550px] sm:w-[550px]">
                <img src="/images/ram-portal-load.png" alt="" />
            </div>
            <footer className="text-white absolute bottom-2 text-center font-bold">
                <p>Created by &copy; Edwar León | Martín Porciúncula | Alan Polanco</p>
            </footer>
        </section>
    
  )
}
export default FirstScreen