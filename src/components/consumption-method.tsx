import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";
import Image from "next/image";
const consumptionMethod = () => {
    return ( 
  <div>
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

     );
}
 
export default consumptionMethod;