import axios from "@/lib/axios";
import {getSession} from "next-auth/react";

async function getToken() {
	const session = await getSession();
	return session?.user.accessToken as string;
}

export async function updateBio(data: any) {
	const token = await getToken();

	return axios.post("/onboarding/bio", data, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}

export async function updateAvatar(data: FormData) {
	const token = await getToken();

	return axios.post("/onboarding/avatar", data, {
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "multipart/form-data",
		},
	});
}
