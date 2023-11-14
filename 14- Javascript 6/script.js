
function randomGen(){

    const array = [
        "„Říkáš: miluji déšť, když však prší, jdeš se schovat, abys nezmokl. Říkáš: miluji slunce, když však svítí, jdeš se schovat do stínu. Mám strach, že mi jednoho dne řekneš: miluji tě.",
        "„Když se stane něco špatného, pijete, abyste na to zapomněli; když se přihodí něco dobrého, pijete, abyste to oslavili; a když se nestane nic, pijete, aby se něco stalo.“",
        "„Skutečná hloupost pokaždé porazí umělou inteligenci.“",
        "„Přirozenou nevýhodou demokracie je, že těm, kdo to s ní myslí poctivě, nesmírně svazuje ruce, zatím co těm, kteří ji neberou vážně, umožňuje téměř vše.“",
        "„Mír neohrožují zbraně jako takové, ale lidé, kteří je konstruují, instalují a jsou ochotni je použít.“",
        "„Naučte se pravidlům, abyste je mohli správně porušovat.“",
        "„Láska k hudbě je znakem homosexuality.“",
        "„Ať se děje cokoliv, láska vydrží, láska věří, láska má naději, láska vytrvá. Láska nikdy nezanikne.“",
        "„Život je jako jízda na kole. Abyste udrželi balanc, musíte se neustále pohybovat dopředu.“",
        "„Kdo se nebojí života, nebojí se ani smrti.“"
    ]

    const randomGene = array[(Math.floor(Math.random() * (array.length)))];

    document.getElementById("outputGen").innerHTML = randomGene

    console.log(randomGene);

    

}

