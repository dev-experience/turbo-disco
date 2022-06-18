const args = require('minimist')(process.argv.slice(2))
const functions = require('./functions');
const user = args['user'];
const repo = args['repo'];

async function main() {
    try { hello = require('./../../week1/helloworld.js') }
    catch (e) {
        if (e.code === "MODULE_NOT_FOUND") {
            console.log(`Searching for 'helloworld.js'... file cannot be found at expected place: https://github.com/${user}/${repo}/blob/hello/week1/helloworld.js`);
            await functions.throwError(`Searching for 'helloworld.js'... file cannot be found at expected place: https://github.com/${user}/${repo}/blob/hello/week1/helloworld.js`, user, repo)
        }
        else {
            console.log(`Searching for 'helloworld.js'... Error: '${e.message}'`);
            await functions.throwError(`Searching for 'helloworld.js'... Error: '${e.message}'`, user, repo)
        }
        process.exit(1)
    }

    let helloworld = hello()
    let test_output = "Hello World"

    if (helloworld != test_output) {
        console.log(`Got: "${helloworld}", was expecting: "${test_output}".`)
        await functions.throwError(`Got: '${helloworld}', was expecting: '${test_output}'.`, user, repo)
        process.exit(1)
    }

    console.info("Yay! 🎉🎉🎉🎉🎉🎉🎉🍾")
}

main();
