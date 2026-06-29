import {
 Building2,
 PencilRuler,
 HardHat,
 ClipboardList
} from "lucide-react";

export default function Services() {

 return (

<section id="servicos" className="py-24 bg-gray-100">

<div className="container mx-auto">

<h2 className="text-4xl font-bold mb-10">
Serviços
</h2>

<div className="grid md:grid-cols-4 gap-8">

<div className="bg-white p-6 rounded-xl shadow">
<Building2 />
<h3>Construção Civil</h3>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<PencilRuler />
<h3>Projetos</h3>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<HardHat />
<h3>Fiscalização</h3>
</div>

<div className="bg-white p-6 rounded-xl shadow">
<ClipboardList />
<h3>Consultoria</h3>
</div>

</div>

</div>

</section>

 );
}