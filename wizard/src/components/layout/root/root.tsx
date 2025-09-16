export default function Root ({children}:any){
    return (
        <section className="w-[35%] max-h-[80vh] shadow-2xl rounded-2xl px-5 py-5">
            {children}
        </section>
    )
}