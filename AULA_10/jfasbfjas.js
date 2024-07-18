class Jogador {
    constructor(nome, vida, mana, nivel, roupa, dano, energia) {
        this.nome = nome;
        this.vida = vida;
        this.mana = mana;
        this.nivel = nivel;
        this.roupa = roupa;
        this.dano = dano;
        this.energia = energia;
    }
}

class Elfo extends Jogador {
    constructor(nome, vida, mana, nivel, dano, energia) {
        super(nome, vida, mana, nivel, null, dano, energia); // 'roupa' é null para elfo
    }

    mover() {
        if (this.energia > 25) {
            console.log("O elfo está subindo paredes e deslizando como Legolas!");
        } else {
            console.log("O elfo está muito cansado, aguarde um momento.");
        }
    }

    atacar() {
        console.log("O elfo está atacando com sua habilidade de arco e flecha!");
    }

    comunicar() {
        console.log("kha'oel si'sa law'bu");
    }
}

// Criando uma instância de Elfo
const jogadorPrincipal = new Elfo("Laber", 100, 100, 30, 25, 75);

// Chamando os métodos corretamente (adicionando parênteses após o nome do método)
jogadorPrincipal.mover();
jogadorPrincipal.atacar();
jogadorPrincipal.comunicar();