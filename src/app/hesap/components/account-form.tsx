"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useCallback, useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import type { User } from "@supabase/supabase-js";
import Avatar from "./avatar";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const profileSchema = z.object({
	full_name: z
		.string()
		.min(2, {
			message: "İsminiz en az 2 harften oluşmalı.",
		})
		.max(50, {
			message: "İsminiz en çok 50 harften oluşmalı.",
		}),
	username: z
		.string()
		.min(2, {
			message: "Kullanıcı adınız en az 2 harften oluşmalı.",
		})
		.max(50, {
			message: "Kullanıcı adınız en çok 50 harften oluşmalı.",
		})
		.toLowerCase()
		.trim(),
	website: z.string().url({
		message: "Geçerli bir website adresi giriniz.",
	}),
	role: z
		.string()
		.min(2, {
			message: "Rolünüz en az 2 harften oluşmalı",
		})
		.max(50, {
			message: "Rolünüz en çok 50 harften oluşmalı",
		}),
	department: z
		.string()
		.min(2, {
			message: "Bölümünüz en az 2 harften oluşmalı",
		})
		.max(50, {
			message: "Bölümünüz en çok 50 harften oluşmalı",
		}),
	avatar_url: z.string(),
});

export default function AccountForm({ user }: { user: User | null }) {
	const supabase = createClient();
	const [loading, setLoading] = useState(true);

	const form = useForm<z.infer<typeof profileSchema>>({
		resolver: zodResolver(profileSchema),
		defaultValues: {
			full_name: "",
			username: "",
			website: "",
			role: "",
			department: "",
			avatar_url: "",
		},
	});

	const getUserProfile = async () => {
		const { data, error } = await supabase
			.from("profiles")
			.select("full_name, username, website, role, department, avatar_url")
			.eq("id", user?.id)
			.single();

		if (error) {
			console.error(error);
		} else {
			form.reset(data); // Gelen verilerle formu doldur
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		getUserProfile();
	}, []);

	const updateProfile = async ({
		full_name,
		username,
		website,
		role,
		department,
		avatar_url,
	}: {
		full_name: string | null;
		username: string | null;
		website: string | null;
		role: string | null;
		department: string | null;
		avatar_url: string | null;
	}) => {
		try {
			setLoading(true);

			const { error } = await supabase.from("profiles").upsert({
				id: user?.id as string,
				full_name,
				username,
				website,
				role,
				department,
				avatar_url,
				updated_at: new Date().toISOString(),
			});
			if (error) throw error;
			alert("Profile updated!");
		} catch (error) {
			alert("Error updating the data!");
		} finally {
			setLoading(false);
		}
	};

	const onSubmit = (values: z.infer<typeof profileSchema>) => {
		updateProfile({
			full_name: values.full_name,
			username: values.username,
			website: values.website,
			role: values.role,
			department: values.department,
			avatar_url: values.avatar_url,
		});
	};

	return (
		<div className="max-w-lg px-12 mx-auto mt-10">
			<div>
				<Form {...form}>
					<Input disabled value={user?.email} />
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
						<FormField
							control={form.control}
							name="full_name"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Adınız:</FormLabel>
									<FormControl>
										<Input placeholder="Emre" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="username"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Kullanıcı adınız</FormLabel>
									<FormControl>
										<Input placeholder="emre" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="website"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Web Siteniz</FormLabel>
									<FormControl>
										<Input placeholder="btkbilecik.vercel.app" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="role"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Rolünüz</FormLabel>
									<FormControl>
										<Input placeholder="Ön-Yüz Geliştiricisi" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="department"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Bölümünüz</FormLabel>
									<FormControl>
										<Input
											placeholder="İstatistik ve Bilgisayar Bilimleri"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>

						<Button type="submit" disabled={loading}>
							{loading ? "Yükleniyor..." : "Güncelle"}
						</Button>
					</form>
				</Form>
			</div>
		</div>
	);
}
