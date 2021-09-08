var cartaMagic = {
    nome : "Colosso di Darksteel",
    costoMana : {
        tutteLeTerre: 8,
        terraPianura: 0,
        terraAcqua: 0,
        terraPalude: 0,
        terraForesta: 0,
        terraRossa: 0,
    },
    tipoCarta: 'Creatura Artefatto',
    tipoCreatura: 'Golem',

    espansione : {
        numeroEspansione: 10,
        nome: '',
        rarità: 'rara',
    },
    

    costoManaCarta : 
    function() {
        var sum = 0;
        for(let mana in this.costoMana){
            sum += this.costoMana[mana];
        }
        return sum
    },



};