"use strict";
let tl = require('vsts-task-lib');

let cmd = 'dotnet';

let pathToProjectJson = tl.getPathInput('projectPath',true,false);
tl.exec(cmd,'build ' + pathToProjectJson).fail(function(err) {
    console.log(`##vso[task.logissue type=error;]${err}`);   
    tl.setResult(1,'Failed restoring the packages');
});   
