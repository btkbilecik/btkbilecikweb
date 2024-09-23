import { notFound } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import {
	Avatar as Avt,
	AvatarFallback,
	AvatarImage,
} from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/custom/header";
import { Footer } from "@/components/custom/footer";

type UserProfile = {
	username: string | null;
	full_name: string | null;
	website: string | null;
	role: string | null;
	department: string | null;
	biography: string | null;
	avatar_url: string | null;
};

async function getUserProfile(username: string): Promise<UserProfile | null> {
	const supabase = createClient();

	const { data: userProfile, error } = await supabase
		.from("profiles")
		.select(
			"full_name, username, website, role, department, biography, avatar_url",
		)
		.eq("username", username)
		.single();

	if (error || !userProfile) {
		return null;
	}

	return userProfile;
}

export default async function User({
	params,
}: { params: { username: string } }) {
	const profile = await getUserProfile(params.username);

	if (!profile) {
		notFound();
	}

	return (
		<div>
			<Header />
			<div className="max-w-3xl mx-auto min-h-screen px-4 sm:px-6 lg:px-8 pt-24 pb-10">
				<div className="flex items-center gap-x-3">
					<div className="shrink-0">
						<Avt className="shrink-0 size-16 rounded-full">
							<AvatarImage src={profile.avatar_url || ""} />
							<AvatarFallback>BTK</AvatarFallback>
						</Avt>
					</div>
					<div className="grow">
						<h1 className="text-lg font-medium text-gray-800 dark:text-neutral-200">
							<Badge variant="first">{profile.username}</Badge> -{" "}
							{profile.full_name}
						</h1>
						<p className="text-sm text-gray-600 dark:text-neutral-400">
							{profile.role}
						</p>
					</div>
				</div>
				<div className="mt-8">
					<div className="text-sm text-muted-foreground">
						{profile.biography}
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
