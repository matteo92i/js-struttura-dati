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
        nunFineCollezione: 250,
    },

    textAbilita: [
        {
            abilitàPrincipale: 'Travolgere',
            abilitàSecondaria: 'il Colosso di Darksteel è indistruttibile',
            abiliàTerziaria: 'Se Colosso di Darksteel sta per essere messo in un cimitero...'
        }
    ],
    
    autoreCarta:{
        
        nome: 'Carl',
        surname: 'Critchol',

    },

    numcollezione: 208,
    attacco: 11,
    difesa: 11,



    costoManaCarta : 
    function() {
        var sum = 0;
        for(let mana in this.costoMana){
            sum += this.costoMana[mana];
        }
        return sum
    },



};