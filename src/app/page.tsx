import ConsumptionMethod from "../components/consumption-method";

export default function Home() {


  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      {/* Texto "Seja Bem-Vindo" */}
      <div className='items-center text-center p-10'> 
      <h1 className="text-2xl font-bold mb-6">Seja Bem-Vindo!</h1>
      <p>Escolha como prefere aproveitar sua refeição.</p>
      <p>Estamos aqui para oferecer praticidade e sabor em cada detalhe!</p>
      </div>
        
      <ConsumptionMethod />
     
    </div>
  )
}
