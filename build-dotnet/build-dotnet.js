"use strict";
var tl = require('vsts-task-lib');

var cmd = 'dotnet';

var pathToProjectJson = tl.getPathInput('projectPath',true,false);

tl.exec(cmd,'build ' + pathToProjectJson).then().fail(function(err) {
    console.log(`##vso[task.logissue type=error;]${err}`);   
    tl.setResult(1,'Failed restoring the packages');
});   
