const core = require('@actions/core');
const github = require('@actions/github');
const fs = require('fs');
const request = require('request');


try {
    const url = core.getInput('url');
    const file = core.getInput('file');
    const name = core.getInput('name');



    var fileContent = fs.readFileSync(file, 'utf8');

    request.post({
        url: url,
        body: {
            name: name,
            content: fileContent
        }
    }, function(error, response, body) {
        console.log(body);
    });


} catch (error) {
    core.setFailed(error.message);
}