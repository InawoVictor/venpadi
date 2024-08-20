import { defineStore } from "pinia";

export const useDialogStore = defineStore('dialog', () => {
    const toast = useToast();

    function showSuccess(message: string) {
        toast.add({
            severity: 'success', 
            summary: message, 
            detail: message, 
            life: 3000 
        });
    }
    function showError(message: string) {
        toast.add({
            severity: 'error', 
            summary: message, 
            detail: message, 
            life: 3000 
        });
    }
    function showWarning(message: string) {
        toast.add({
            severity: 'warn', 
            summary: message, 
            detail: message, 
            life: 3000 
        });
    }

    return {
        showError,
        showSuccess,
        showWarning,
    }
});