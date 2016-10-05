"use strict";
let tl = require('vsts-task-lib');

const cmd = 'dotnet';

let pathToProjectJson = tl.getPathInput('projectPath',true,false);

tl.exec(cmd,'restore ' + pathToProjectJson).fail(function(err) {
    console.log(`##vso[task.logissue type=error;]${err}`);   
    tl.setResult(tl.TaskResult.Failed,'Failed restoring the packages');
});   
