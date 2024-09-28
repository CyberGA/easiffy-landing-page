import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function generateUsername(fullname: string): string {
	// Ensure the fullname has at least two parts (first and last name)
	const names = fullname.trim().split(" ");

	if (names.length < 2) {
		throw new Error(
			"Full name must contain at least two parts (first and last name)"
		);
	}

	const firstName = names[0].toLowerCase();
	const lastName = names[names.length - 1].toLowerCase();

	const randomNum = Math.floor(100000 + Math.random() * 900000); // Random 4-digit number

	const username = `${firstName}.${lastName}${randomNum}`;

	return username;
}

export function stringToHex(data: any) {
	const dataString = JSON.stringify(data);

	let hex = "";
	for (let i = 0; i < dataString.length; i++) {
		hex += dataString.charCodeAt(i).toString(16);
	}

	return hex;
}

export function hexToString(hex: any) {
	let string = "";
	for (let i = 0; i < hex.length; i += 2) {
		string += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
	}
	return JSON.parse(string);
}

export const MAX_FILE_SIZE = 5000000;
export const ACCEPTED_IMAGE_TYPES = [
	"image/jpeg",
	"image/jpg",
	"image/png",
	"image/webp",
];
