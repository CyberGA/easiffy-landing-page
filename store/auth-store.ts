import {create} from "zustand";
import {produce} from "immer";

type User = {
	fullname: string;
	email: string;
	phoneNumber: string;
	referredBy?: string;
	password?: string;
	passwordConfirmation?: string;
};

type AuthState = {
	type: string;
	setType: any;
	step: number;
	setStep: (step: number) => void;
	showAffiliateModal: boolean;
	setShowAffiliateModal: (show: boolean) => void;
	user: User | null;
	setUser: (user: User) => void;
};

export const useAuthStore = create<AuthState>((set) => ({
	type: "",
	step: 1,
	setType: (type: string) =>
		set((state) => {
			if (state.type !== type) {
				return {type: type};
			}
			return state;
		}),
	setStep: (step) => set({step: step}),
	showAffiliateModal: false,
	setShowAffiliateModal: (show) => set({showAffiliateModal: show}),
	user: {} as User,
	setUser: (user) =>
		set(
			produce((state) => {
				state.user = user;
			})
		),
}));
