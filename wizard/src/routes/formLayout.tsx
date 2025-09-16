import Home from "../components/layout/home";
import Step1 from "../components/layout/steps/step1";
import Step2 from "../components/layout/steps/step2";
import Step3 from "../components/layout/steps/step3";
import Step4 from "../components/layout/steps/step4";
import useInformationStore from "../store/useInformationStore"

export default function FormLayout (){

    const {currentStep}:number | any = useInformationStore();


    const renderCurrentStep = () => {
        switch (currentStep){
            case 1 : 
                return <Step1/>
            
            case 2: 
                return <Step2/>

            case 3: 
                return <Step3/>

            case 4: 
                return <Step4/>
            
            default: 
                return <Home/>
        }
    }

    return (
        <section className="w-full h-screen flex justify-center items-center">
            {renderCurrentStep()}
        </section>
    )
}