import SelectType from "@/components/auth/register/select-type";
import Affiliate from "@/components/auth/register/affiliate";
import UserInfo from "@/components/auth/register/user-info";
import Password from "@/components/auth/register/password";

export default function Register() {
	return (
		<div className="max-w-lg w-full space-y-7 px-4">
			<SelectType />
			<Affiliate />
			<UserInfo />
			<Password />
		</div>
	);
}
