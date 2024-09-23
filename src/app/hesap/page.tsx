import { createClient } from "@/utils/supabase/server";
import AccountForm from "./components/account-form";

export default async function Profile() {
	const supabase = createClient();

	const {
		data: { user },
	} = await supabase.auth.getUser();

	return (
		<div>
			<AccountForm user={user} />
		</div>
	);
}
