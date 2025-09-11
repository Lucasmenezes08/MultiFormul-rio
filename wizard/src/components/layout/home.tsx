import { CiCircleCheck } from "react-icons/ci";

export default function Home (){
    return (
        <section className="w-full h-screen flex flex-col justify-around items-center py-5">
            <section className="flex flex-col justify-center items-center gap-6">
                <section className="px-3 py-3 bg-green-200 rounded-full">
                    <CiCircleCheck size={40} className="text-green-700"/>
                </section>
            
                <h1 className="text-4xl font-semibold overflow-wrap break-after-all text-center w-[95%]">Seja bem vindo à pesquisa de satisfação</h1>
                <p className="text-center font-light overflow-wrap break-after-all w-[95%]">Sua opinião é muito importante para nós. Por favor, reserve alguns minutos para nos ajudar a melhorar.</p>
            </section>
            

            <button className=" flex items-center justify-center w-50 h-15 bg-black text-white text-lg rounded-xl cursor-pointer ">Iniciar Pesquisa</button>


        </section>
        
    )
}