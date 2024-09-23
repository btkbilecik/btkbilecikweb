import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Bilgisayar ve Teknoloji Kulübü";
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = "image/png";

export default async function Image() {
	const logoSrc = await fetch(new URL("./logo.png", import.meta.url))
		.then((res) => res.arrayBuffer())
		.then((buffer) => {
			const base64Flag = "data:image/png;base64,";
			const base64String = arrayBufferToBase64(buffer);
			return base64Flag + base64String;
		});
	function arrayBufferToBase64(buffer: ArrayBuffer): string {
		let binary = "";
		const bytes = new Uint8Array(buffer);
		const len = bytes.byteLength;
		for (let i = 0; i < len; i++) {
			binary += String.fromCharCode(bytes[i]);
		}
		return btoa(binary);
	}

	return new ImageResponse(
		<div
			style={{
				fontSize: 64,
				background: "black",
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: "#6256CA",
			}}
		>
			{/* biome-ignore lint/a11y/useAltText: <explanation> */}
			<img src={logoSrc} height="100" />
			Bilgisayar ve Teknoloji Kulübü
		</div>,
	);
}
