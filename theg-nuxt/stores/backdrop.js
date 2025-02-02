import { defineStore } from 'pinia';

export const useBackdropStore = defineStore('backdrop', {
    state: () => ({
        isBackdropActive: false,
    }),
    actions: {
        activateBackdrop() {
            this.isBackdropActive = true;
        },
        deactivateBackdrop() {
            this.isBackdropActive = false;
        }
    }
});
