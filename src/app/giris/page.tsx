"use client";

import { z } from "zod";

import { Button } from "@/components/ui/button";
import { login, signup } from "./actions";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Logo } from "@/components/utils/logo";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { AnimatedInput as Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Header } from "@/components/custom/header";
import { Footer } from "@/components/custom/footer";
import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const formSchema = z.object({
	email: z
		.string()
		.email({
			message: "Lütfen geçerli bir e posta giriniz.",
		})
		.min(5),
	password: z.string().min(5, {
		message: "Lütfen şifrenizi 5 karakterden uzun giriniz.",
	}),
});

export default function LoginPage() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});
	return (
		<>
			<Header />

			<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
				<Alert variant="destructive">
					<AlertCircle className="h-4 w-4" />
					<AlertTitle>Dikkat</AlertTitle>
					<AlertDescription>
						Şuanda oluşturulan üyelikler silinecektir. Tam sürümün çıkmasını
						sosyal medya kanallarımızdan takip edin!
					</AlertDescription>
				</Alert>
				<div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8">
					<Card>
						<CardHeader>
							<CardTitle>
								Bilgisayar ve Teknoloji Kulübüne Hoş Geldin!
							</CardTitle>
							<CardDescription>
								Kulübümüzün sosyal medya uygulamamasına üye olmak için formu
								doldurun
							</CardDescription>
						</CardHeader>
						<CardContent>
							<Form {...form}>
								<form className="space-y-8">
									<FormField
										control={form.control}
										name="email"
										render={({ field }) => (
											<FormItem>
												<FormLabel>e posta</FormLabel>
												<FormControl>
													<Input placeholder="ornek@ornek.com" {...field} />
												</FormControl>
												<FormDescription>E mail adresiniz</FormDescription>
												<FormMessage />
											</FormItem>
										)}
									/>
									<FormField
										control={form.control}
										name="password"
										render={({ field }) => (
											<FormItem>
												<FormLabel>Şifre</FormLabel>
												<FormControl>
													<Input type="password" {...field} />
												</FormControl>
												<FormDescription>Şifreniz</FormDescription>
												<FormMessage />
											</FormItem>
										)}
									/>
									<div className="flex justify-between items-center space-y-2 space-x-2">
										<Button formAction={login} variant="first">
											Giriş Yap
											<BottomGradient />
										</Button>
										<Button formAction={signup} variant="shimmer">
											Üye Ol
											<BottomGradient />
										</Button>
									</div>
								</form>
							</Form>
						</CardContent>
					</Card>
				</div>
			</div>
			<Footer />
			{/*
			<div className="flex flex-col gap-16 items-center justify-center">
				<div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input">
					<h2 className="font-bold text-xl">
						Bilgisayar ve Teknoloji Kulübüne Hoş Geldin!
					</h2>
					<p className="text-sm max-w-sm mt-2">
						Kulübümüzün sosyal medya uygulamamasına üye olmak için formu
						doldurun
					</p>
					<div className="my-8">
						<Form {...form}>
							<form className="space-y-8">
								<FormField
									control={form.control}
									name="email"
									render={({ field }) => (
										<FormItem>
											<FormLabel>e posta</FormLabel>
											<FormControl>
												<Input placeholder="ornek@ornek.com" {...field} />
											</FormControl>
											<FormDescription>E mail adresiniz</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="password"
									render={({ field }) => (
										<FormItem>
											<FormLabel>Şifre</FormLabel>
											<FormControl>
												<Input type="password" {...field} />
											</FormControl>
											<FormDescription>Şifreniz</FormDescription>
											<FormMessage />
										</FormItem>
									)}
								/>
								<div className="flex justify-between items-center space-y-2 flex-col">
									<Button
										formAction={login}
										className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
									>
										Giriş Yap
										<BottomGradient />
									</Button>
									<Button
										formAction={signup}
										variant="shimmer"
										className="relative group/btn block w-full h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
									>
										Üye Ol
										<BottomGradient />
									</Button>
								</div>
							</form>
						</Form>
					</div>
				</div>
			</div>
			*/}
		</>
	);
}
const BottomGradient = () => {
	return (
		<>
			<span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
			<span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
		</>
	);
};

const LabelInputContainer = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<div className={cn("flex flex-col space-y-2 w-full", className)}>
			{children}
		</div>
	);
};
