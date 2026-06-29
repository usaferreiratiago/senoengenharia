import { useForm } from "react-hook-form";

export default function Contact() {

 const { register, handleSubmit } = useForm();

 function onSubmit(data:any){
   console.log(data);
 }

 return (
<section id="contato" className="py-24 bg-gray-100">

<div className="container mx-auto">

<h2 className="text-4xl font-bold mb-8">
Contato
</h2>

<form
onSubmit={handleSubmit(onSubmit)}
className="space-y-4"
>

<input
{...register("nome")}
placeholder="Nome"
className="w-full p-4 border rounded"
/>

<input
{...register("email")}
placeholder="Email"
className="w-full p-4 border rounded"
/>

<textarea
{...register("mensagem")}
placeholder="Mensagem"
className="w-full p-4 border rounded"
/>

<button
className="bg-primary text-white px-8 py-3 rounded"
>
Enviar
</button>

</form>

</div>

</section>
 );
}