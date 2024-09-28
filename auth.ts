import NextAuth, {type DefaultSession} from "next-auth";
import {authConfig} from "./auth.config";

declare module "next-auth" {
	/**
	 * Returned by `auth`, `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
	 */
	interface Session {
		user: {
			id: number;
			firstName: string;
			lastName: string;
			username: string;
			email: string;
			phoneNumber: string;
			bio: string;
			roles: Array<string>;
			enabled: boolean;
			activated: boolean;
			status: string;
			createdAt: string;
			expireIn: string | number;
			accessToken: string;
			refreshToken: string;
			onboarding: {
				id: number;
				stage1: boolean;
				stage2: boolean;
				stage3: boolean;
				stage4: boolean;
			};
		} & DefaultSession["user"];
	}
}

export const {handlers, signIn, signOut, auth, unstable_update} = NextAuth({
	...authConfig,
});
