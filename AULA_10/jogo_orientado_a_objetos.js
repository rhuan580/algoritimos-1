// 1 - Criar Classe abstrata (Ex. serVivo)

class Jogador{
    constructor(nome, vida,mana, nivel, roupa, dano, energia){
        this.nome = nome
        this.mana = mana
        this.vida = vida
        this.nivel = nivel
        this.roupa = roupa
        this.dano = dano
        this.energia = energia
        
class Elfo extends Jogador{
    constructor (nome, vida, mana, nivel, dano, energia)
    super(nome, vida, mana, nivel, dano, energia)
}
    }
    mover(){
        if (this.energia > 25) {
            console.log("O elfo subindo as parades e deslizando como o Légolas!");
        }else {
            console.log("O elfo está muito cansado, aguarde um momento");
        }
    }
    atacar(){
        console.log("O elfo está muito cansado, aguarde um momento");
    }
    comunicar(){
        console.log("kha'oel si'sa law'bu");
    }

}

const jogadorPrincipal = new Elfo("Laber", 100, 100, 30, 25, 75);
jogadorPrincipal.mover;
jogadorPrincipal.atacar;
jogadorPrincipal.comunicar;