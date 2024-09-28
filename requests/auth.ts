import axios from "@/lib/axios";

export function register(data: any) {
	return axios.post("/auth/register/user", data);
}

export function resendVerificationCode(email: string) {
	return axios.post("/auth/resend-token", {email: email});
}

export function verify(data: any) {
	return axios.post("/auth/verify", data);
}

export function login(data: any) {
	return axios.post("/auth/authenticate", data);
}

export function forgotPassword(data: any) {
	return axios.post("/auth/forgot-password", data);
}

export function verifyPasswordResetToken(data: any) {
	return axios.post("/auth/forgot-password/verify", data);
}

export function resetPassword(data: any) {
	return axios.post("/auth/reset-password", data);
}