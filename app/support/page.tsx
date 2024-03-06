"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SupportFormSchema } from "@/definitions/schemas";
import { Support } from "@/definitions/support";
import { useRouter } from "next/navigation";

const types = [
	{ id: 1, label: "バグ報告" },
	{ id: 2, label: "要望" },
	{ id: 3, label: "その他" },
]

const Page = () => {
	const { register, handleSubmit, formState: { errors } } = useForm<Support>({ resolver: zodResolver(SupportFormSchema) });
	const router = useRouter();
	const submit = async(data:Support) => {
		await fetch("/api/support", {
			headers: {
				'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify(data),
		})
		router.replace("/support/complete")
	}

	return (
		<div className="text-center w-2/3">
			<form onSubmit={ handleSubmit(submit) } className="flex flex-col rounded-lg border border-gray-200  dark:border-gray-800 dark:bg-gray-950">
				<div className="m-4 flex">
					<label className="w-1/6">名前 :</label>
					<input className="bg-gray-800 w-1/3" type="text" {...register("name")}></input>
				</div>
				{errors.name && <p className="">{errors.name.message}</p>}
				<div className="m-4 flex">
					<label className="w-1/6">問い合わせ種類 :</label>
					<select className="bg-gray-800 w-1/3" {...register("type")}>
						<option value="">選択してください</option>
						{types.map((item) => (
							<option key={item.id} value={item.id}>{item.label}</option>
						))}
					</select>
				</div>
				{errors.type && <p>{errors.type.message}</p>}
				<div className="m-4 flex align-top">
					<label className="w-1/6">内容 :</label>
					<textarea className="bg-gray-800 w-2/3 h-96" {...register("content")}></textarea>
				</div>
				{errors.content && <label>{errors.content.message}</label>}
				<div>
					<button type="submit" className="m-4 border w-20">送信</button>
				</div>
			</form>
		</div>
	)
}

export default Page;