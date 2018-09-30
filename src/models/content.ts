export class Content {

    private temperatura : string =  '0';
    private luminosidade : string = '0';


    constructor(temperatura : string , luminosidade : string){
        this.temperatura = temperatura;
        this.luminosidade = luminosidade;
    }


	public get getLuminosidade():string  {
		return this.luminosidade;
	}

  
	public set setLuminosidade(luminosidade: string ) {
		this.luminosidade = luminosidade;
	}


    public getTemperatura ():string{
        return this.temperatura;
    }

    public setTemperatura(temperatura:string){
        this.temperatura = temperatura ;
    }
}