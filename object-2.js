
let vente = {
    client: "berlin",
    produit: "téléphone",
    valeur: 5
}

vente.marque = "iphone";
delete vente.produit;
console.log(vente);