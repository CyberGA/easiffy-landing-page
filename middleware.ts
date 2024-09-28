import {auth} from "./auth";

export default auth((req) => {
	if (!req.auth && req.nextUrl.pathname !== "/login") {
		const newUrl = new URL("/login", req.nextUrl.origin);
		return Response.redirect(newUrl);
	}

	const onboarding = req.auth?.user.onboarding;

	if (req.auth && (!onboarding?.stage1 || !onboarding.stage2)) {
		return hasCompletedOnboarding(req, onboarding);
	}
});

function hasCompletedOnboarding(req: any, onboarding: any) {
	if (
		req.auth &&
		!req.nextUrl.pathname.startsWith("/onboarding") &&
		!onboarding?.stage1
	) {
		return Response.redirect(
			new URL("/onboarding/bio", req.nextUrl.origin)
		);
	}

	if (
		req.auth &&
		!req.nextUrl.pathname.startsWith("/onboarding") &&
		!onboarding?.stage2
	) {
		return Response.redirect(
			new URL("/onboarding/avatar", req.nextUrl.origin)
		);
	}
}

export const config = {
	matcher: ["/onboarding/:path*", "/dashboard/:path*"],
};
