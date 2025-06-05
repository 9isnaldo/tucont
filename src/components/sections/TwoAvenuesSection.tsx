
const TwoAvenuesSection = () => {
  return (
    <section className="py-24 px-4 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
          <span className="bg-gradient-to-r from-white via-blue-200 to-white bg-clip-text text-transparent">
            Toda empresa tem duas jornadas cruciais:
          </span>
          <br />
          <span className="bg-gradient-to-r from-orange-400 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
            A Avenida de Negócios e a Avenida Legal
          </span>
        </h2>
        <p className="text-xl text-blue-200 max-w-4xl mx-auto leading-relaxed">
          Enquanto outros cuidam apenas do compliance, nós <span className="font-semibold text-white">revolucionamos ambas as avenidas</span> 
          para criar o ecossistema completo do seu crescimento.
        </p>
      </div>
    </section>
  );
};

export default TwoAvenuesSection;
