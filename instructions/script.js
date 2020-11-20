var el = document.getElementById("text");
var i = 0;

function counter() {
    var content = `Queerness and queer theory offer us an ideal lens through which to understand and critique
    the progressivist teleology that drives the production of contemporary technology. Just as
    failure offers us a way to think outside the compulsion toward progress through technological
    production (Nunes 2011; Menkman 2011), queer theory has for decades worked to critique
    the demands of biological reproduction under compulsory heterosexuality and the drive
    toward a future that is inaccessible to queer forms of life.
    This connection between queerness and failure is embodied in a wide range of theoretical
    practices sand intellectual histories reaching back to the start of the twentieth century. As literary
    
    theorist, Heather Love, notes in her work on loss and the politics of queer history, “same-
    sex desire is marked by a long history of association with failure, impossibility and loss,” such
    
    that “homosexuality and homosexuals serve as scapegoats for the failures and impossibilities
    of desire itself” (2009: 21). Queerness here is marked by failure in that it not only exists
    outside a given norm, but cannot be made legible or useful to a given society. For early queer
    theorist, Guy Hocquenghem, it is capitalism that marks the homosexual as failed, where fail -
    ure is understood as an incapacity for proper reproductive love. Without a clear connection
    between sociality, relationality, family, sex, desire, and consumption as afforded to heterosexual
    reproduction, homosexuality cannot be made productive to capital and is re-territorialized
    as a failed state of being (Hocquenghem 1993 [1972]: 93–112). For literary scholars such as
    Lee Edelman, the queer subject has always been epistemologically bound to negativity,
    occupying the space of the social order’s death drive, an irrecuperable excess whose ethical
    value lies in “accepting its figural status as resistance to the viability of the social while insisting
    on the inextricability of such resistance from every social structure” (2004: 3). Queerness
    here is marked by its own illegibility to the social order, a social order that Edelman identifies
    as reproductive futurism. Indeed, this illegibility is its very value. For Edelman, we must resist
    the legibility of a secure political identity lest we lose the radical difference that queerness
    offers. Refusing this move away from the political, Jack Halberstam (2011) has taken up the
    radical potential of queer failure to suggest that living within failure and refusing the terms
    of success pushed onto us by capitalism, patriarchy, heteronormativity, neoliberalism, and
    other compulsory norms might allow for new ways of being in the world that need not
    disavow the possibility of a political imaginary, that may indeed form the basis for a politics
    of refusal. Failure here becomes a radical practice, one that is not without a future but instead
    reimagines how that future might come into being.
    Simply put, queer theory has, for decades, engaged in the difficult and at times contradictory
    task of marking a political identity bound by a refusal to be made useful or productive.
    Deploying queer theory in this way asks us to think through failure as not only a disruptive`;
    var content2 = `<div>To compute queerly, then, is to acknowledge, embrace, and enact
    a practice of radical technological failure. It is to engage in critical unmaking: to make central
    those externalities—exploits, bugs, breakdown, abuse, and misuse—of our digital culture that,
    while pervasive, we nonetheless disavow. To compute in this way is to work against the
    neoliberal drive toward the capture and exploitation of the self by technology; to work
    against the demands of pervasive visibility by means of always-on devices, against the quanti -
    fication of affect, leisure, and solitude for the purpose of value extraction; and to disrupt
    the fantasy that technology—through the aggregation and quantification of data—allows us
    access to some unmediated truth</div>`;

    var list = `
Embrace: <br>
critical unmaking <br>
technological failure<br>
exploits<br>
bugs<br>
abuse<br>
misuse<br>
glitch<br>
break<br>
iterate<br>
fail<br>
Subvert<br>
Interfere<br>
Overwhelm<br>
Non norm<br>
Challenge user<br>
situate/spatialize<br>
Transform<br>
Personify<br>
Hide<br>
Hack<br>
Lay bare material function/expose<br>
to make visible through a queer critical practice the values that structure our technology.<br>`


    var list2 = `
Embrace: <br>
critical unmaking <br>
technological failure<br>
exploits<br>
bugs<br>
abuse<br>
Overwhelm<br>
misuse<br>
glitch<br>
break<br>
iterate<br>
fail<br>
Subvert<br>
Interfere<br>
Non norm<br>
Challenge user<br>
situate/spatialize<br>
Transform<br>
Hack<br>
Personify<br>
Hide<br>

Lay bare material function/expose<br>
to make visible through a queer critical practice the values that structure our technology.<br>`

    // if (i & 1) {
    //     document.getElementById("text").insertAdjacentHTML("afterbegin", content);
    // } else {
    //     document.getElementById("text").insertAdjacentHTML("beforeend", content2);
    // }

    document.getElementById("text").insertAdjacentHTML("beforeend", list);
    // document.getElementById("text").insertAdjacentHTML("beforeend", content2);
    i++;
    if (i <= 200) {
        setTimeout(counter, 200);
    }
}
counter();