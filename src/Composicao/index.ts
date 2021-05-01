export class Motor {
  public ligar(): void {
    console.log('ligando...');
  }

  public acelerar(): void {
    console.log('Acelerando....');
  }

  public parar(): void {
    console.log('Parando...');
  }
}

export class Carro {
  private readonly motor = new Motor();

  public ligar(): void {
    this.motor.ligar();
  }

  public acelerar(): void {
    this.motor.acelerar();
  }

  public parar(): void {
    this.motor.parar();
  }
}

const carro = new Carro();

carro.ligar();
carro.acelerar();
carro.parar();
