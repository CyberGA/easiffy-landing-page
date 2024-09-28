import type {NextAuthConfig} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import axios from "./lib/axios";
import {randomBytes, randomUUID} from "crypto";
import {auth} from "./auth";

export const authConfig = {
	session: {
		strategy: "jwt",
		maxAge: 24 * 60 * 60,
		updateAge: 60 * 60,
		generateSessionToken: () => {
			return randomUUID?.() ?? randomBytes(32).toString("hex");
		},
	},
	providers: [
		Credentials({
			// You can specify which fields should be submitted, by adding keys to the `credentials` object.
			// e.g. domain, username, password, 2FA token, etc.
			credentials: {
				username: {},
				password: {},
			},
			authorize: async (credentials) => {
				const res = await axios.post("/auth/authenticate", credentials);

				const data = res.data;
				const onboarding = data?.onboarding;
				const token = data.token;
				const user = data.user;

				if (!user) {
					throw new Error("User not found.");
				}

				// return user object with the their profile data
				return {
					...user,
					...token,
					onboarding: onboarding,
				};
			},
		}),
	],
	callbacks: {
		authorized({auth, request: {nextUrl}}) {
			const isLoggedIn = !!auth?.user;

			if (isLoggedIn) return true;
		},
		jwt({token, user, trigger, session}) {
			if (trigger === "update" && session) {
				const user = session.user;

				token = {...token, ...user};
				return token;
			}

			return {...token, ...user};
		},
		session({session, token, user}) {
			return {
				...session,
				user: {
					...session.user,
					...token,
				},
			};
		},
	},
	pages: {
		signIn: "/login",
	},
} satisfies NextAuthConfig;
