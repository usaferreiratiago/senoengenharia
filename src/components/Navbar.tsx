import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <img
          src="/logo.png"
          alt="Seno Engenharia"
          className="h-16"
        />

        <nav className="hidden md:flex gap-8">
          <a href="#sobre">Sobre</a>
          <a href="#servicos">Serviços</a>
          <a href="#projetos">Projetos</a>
          <a href="#contato">Contato</a>
        </nav>

        <Menu className="md:hidden" />
      </div>
    </header>
  );
}