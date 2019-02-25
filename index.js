const readLine = require('readline-sync');

function start () {
    const content = {};

    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();

    function askAndReturnSearchTerm () {
        return readLine.question('Digite um termo para ser pesquisado no Wikipedia:');
    }

    function askAndReturnPrefix () {
        const prefix = ['Quem e?', 'O que?', 'A historia de'];
        const selectedPrefix = readLine.keyInSelect(prefix);

        return prefix[selectedPrefix];
    };

    console.log(content);
}

start();