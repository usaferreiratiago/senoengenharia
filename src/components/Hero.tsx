export default function Hero() {
  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/images/hero.jpg')",
      }}
    >
      <div className="bg-black/60 p-10 rounded-xl text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Seno Engenharia
        </h1>

        <p className="text-xl">
          Projetos, Construções e Soluções de Engenharia
        </p>
      </div>
    </section>
  );
}