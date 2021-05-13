new Vue({
    el: "#app",
    data: {
        depences: [],
        gains: [],
        montant: 0,
        libelle: '',
        price: 0,
        positif: true,
    },
    methods: {
        addDep: function() {
            if (this.price.length && this.libelle.length) {
                this.depences.push({ libelle: this.libelle, montant: this.price });
                this.montant -= parseInt(this.price);
                this.price = '';
                this.libelle = '';
                if (this.montant < 0) {
                    this.positif = false;
                }
            }
        },
        addEntr: function(index) {
            if (this.price.length && this.libelle.length) {
                this.gains.push({ libelle: this.libelle, montant: this.price });
                this.montant += parseInt(this.price);
                this.price = '';
                this.libelle = '';
                if (this.montant >= 0) {
                    this.positif = true;
                }
            }
        },
        removeDep: function(item, index) {
            this.montant += parseInt(item.montant);
            this.depences.splice(index, 1);
            if (this.montant >= 0) {
                this.positif = true;
            }
        },
        removeEnt: function(item, index) {
            this.montant -= parseInt(item.montant);
            this.gains.splice(index, 1);
            if (this.montant < 0) {
                this.positif = false;
            }
        }
    },
    computed: {
        classObject: function() {
            return !this.positif ? 'negative' : 'positive';
        }
    }
});