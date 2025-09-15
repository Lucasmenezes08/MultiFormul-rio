import { create } from "zustand";

const useInformationStore = create((set) => ({
    informationStore : {},
    currentStep : 1,

    addInformation : (newData:any) => set((state:any) => ({...state.informationStore , ...newData})),
    nextStep : () => set((state:any) => ({currentStep: state.currentStep + 1})),
    backStep : () => set((state:any) => ({currentStep: state.currentStep - 1})),
}));

export default useInformationStore;