import useInformationStore from "../../../store/useInformationStore"
import Root from "../root/root"

/*
import * as z from "zod"
 import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
*/


export default function Step1 (){

    const {addInformation , nextStep , backStep , informationStore}:any = useInformationStore();
    
    

    function handleChange (e:any){
        addInformation({[e.target.name] : e.target.value});
    }

    /*
    const InformationSchema = z.object({
        name : z.string().min(3 , 'Nome deve ter pelo menos 3 caracteres.'),
        email: z.email('Email inválido'),
        cpf: z.string().min(11 , 'Erro ao inserir cpf.'),
    })

    const data = InformationSchema.parse(informationStore);

    */

    


   
    return (
        <Root>
        <form className="flex flex-col justify-center items-center gap-4" onSubmit={addInformation}>
            <h1 className="text-2xl font-bold text-black text-shadow-2xl text-center">Dados Pessoais</h1>
            <p className="font-light text-md overflow-wrap break-after-all text-center w-[95%]">Para começar, precisamos de algumas informações básicas.</p>
            <section className="w-full flex flex-col pt-3">
                <section className="flex flex-col items-start">
                    <label className="text-sm font-medium" htmlFor="name">Nome Completo</label>
                    <input className="w-full h-10 bg-gray-100 border-1 border-solid border-gray-50 outline-none px-2 rounded-xl" type="text" name="name" placeholder="Seu nome completo" value={informationStore.name} onChange={handleChange} required/>
                </section>

                <section>
                    <label className="text-sm font-medium" htmlFor="email">Email</label>
                    <input className="w-full h-10 bg-gray-100 border-1 border-solid border-gray-50 outline-none px-2 rounded-xl" type="text" name="email" placeholder="seu@email.com" value={informationStore.email} onChange={handleChange} required/>
                </section>

                <section>
                    <label className="text-sm font-medium" htmlFor="cpf">CPF</label>
                    <input className="w-full h-10 bg-gray-100 border-1 border-solid border-gray-50 outline-none px-2 rounded-xl" type="text" name="cpf" placeholder="000.000.000-00" value={informationStore.cpf} onChange={handleChange} required/>
                </section>
                
            </section>

            <button className={`w-full h-13 bg-green-500 text-lg font-semibold text-white shadow-xl rounded-4xl cursor-pointer`} onClick={nextStep}>Continuar</button>
        </form>

        
        </Root>
    )
}