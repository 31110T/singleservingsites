var example = ['head', 'body', 'etc', 'random', "something"];

textSequence(0);

function textSequence(i) {

    if (example.length > i) {
        setTimeout(function() {
            document.getElementById("sequence").innerHTML = example[i];
            textSequence(++i);
            document.getElementById("seq2").innerHTML = example[i];
        }, 60); // 1 second (in milliseconds)

    } else if (example.length == i) { // Loop
        textSequence(0);
    }

}