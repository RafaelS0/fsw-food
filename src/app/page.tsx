import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      {/* Texto "Seja Bem-Vindo" */}
      <div className='items-center text-center p-10'> 
      <h1 className="text-2xl font-bold mb-6">Seja Bem-Vindo!</h1>
      <p>Escolha como prefere aproveitar sua refeição.</p>
      <p>Estamos aqui para oferecer praticidade e sabor em cada detalhe!</p>
      </div>

      {/* Cards */}
      <div className="flex  gap-4 items-center">
        <Card className="border-radius-2">
          <CardContent className="flex items-center justify-center p-3">
            <Image src="/comer_aqui.png" alt="comer aqui" width={100} height={50} />
          </CardContent>
          <CardFooter>
            <Button className='rounded-full' variant="secondary" >Comer Aqui</Button>
          </CardFooter>
        </Card>

        <Card className="border-radius-2">
          <CardContent className="flex items-center justify-center p-3">
            <Image src="/para_levar.png" alt="para levar" width={100} height={50} />
          </CardContent>
          <CardFooter>
            <Button className='rounded-full' variant="secondary">Para levar</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
