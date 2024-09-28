import {auth} from "@/auth";
import LoginForm from "@/components/auth/login-form";
import {redirect} from "next/navigation";

export default async function Login() {
	
	return (
		<div className="max-w-lg w-full space-y-7 px-4">
			<LoginForm />
		</div>
	);
}
