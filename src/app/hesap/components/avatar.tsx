"use client";
import type React from "react";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";
import {
	Avatar as Avt,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar";

export default function Avatar({
	uid,
	url,
	size,
	onUpload,
}: {
	uid: string | null;
	url: string | null;
	size: number;
	onUpload: (url: string) => void;
}) {
	const supabase = createClient();
	const [avatarUrl, setAvatarUrl] = useState<string | null>(url);
	const [uploading, setUploading] = useState(false);

	useEffect(() => {
		async function downloadImage(path: string) {
			try {
				const { data, error } = await supabase.storage
					.from("avatars")
					.download(path);
				if (error) {
					throw error;
				}

				const url = URL.createObjectURL(data);
				setAvatarUrl(url);
			} catch (error) {
				console.log("Hata resim yüklenemedi: ", error);
			}
		}

		if (url) downloadImage(url);
	}, [url, supabase]);

	const uploadAvatar: React.ChangeEventHandler<HTMLInputElement> = async (
		event,
	) => {
		try {
			setUploading(true);

			if (!event.target.files || event.target.files.length === 0) {
				throw new Error("Lütfen bir resim seçin!");
			}

			const file = event.target.files[0];
			const fileExt = file.name.split(".").pop();
			const filePath = `${uid}-${Math.random()}.${fileExt}`;

			const { error: uploadError } = await supabase.storage
				.from("avatars")
				.upload(filePath, file);

			if (uploadError) {
				throw uploadError;
			}

			onUpload(filePath);
		} catch (error) {
			alert("Hata! Lütfen bir resim seçin ve tekrar deneyin");
		} finally {
			setUploading(false);
		}
	};

	return (
		<div>
			{avatarUrl ? (
				<Avt>
					<AvatarImage src={avatarUrl} />
					<AvatarFallback>BTK</AvatarFallback>
				</Avt>
			) : (
				<Avt>
					<AvatarFallback>BTK</AvatarFallback>
				</Avt>
			)}
			<div style={{ width: size }}>
				<label className="button primary block" htmlFor="single">
					{uploading ? "Uploading ..." : "Upload"}
				</label>
				<input
					style={{
						visibility: "hidden",
						position: "absolute",
					}}
					type="file"
					id="single"
					accept="image/*"
					onChange={uploadAvatar}
					disabled={uploading}
				/>
			</div>
		</div>
	);
}
