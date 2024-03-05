import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const options = [
	{ id: 1, label: "バグ報告" },
	{ id: 2, label: "要望" },
	{ id: 3, label: "その他" },
]

const Page = () => {
	return (
		<form>
			<label>名前 :</label>
			<input type="text"></input>
			<label>問い合わせ種類 :</label>
			<select>
				{options.map((option) => (
					<option key={option.id} value={option.id}>{ option.label }</option>
				))}
			</select>
			<label>内容 :</label>
			<input type="text"></input>
		</form>
	)
}

export default Page;