import { notFound } from "next/navigation";
import { createClient } from "@/utils/supabase/client";

type UserProfile = {
	id: string;
	username: string;
	full_name: string | null;
	website: string | null;
	role: string | null;
	department: string | null;
	avatar_url: string | null;
};

async function getUserProfile(username: string): Promise<UserProfile | null> {
	const supabase = createClient();

	const { data: userProfile, error } = await supabase
		.from("profiles")
		.select("*")
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
			<h1>{profile.username}</h1>
			<p>{profile.full_name}</p>
			<p>{profile.website}</p>
		</div>
	);
}
