"use strict";
const tmrm = require('vsts-task-lib/mock-run');
const path = require('path');
let taskPath = path.join(__dirname, '..', 'restore-dotnet.js');
let tmr = new tmrm.TaskMockRunner(taskPath);
tmr.setInput('projectPath', '/foo');
// provide answers for task mock
let a = {
    "which": {
        "dotnet": "/mocked/tools/dotnet"
    },
    "exec": {
        "/mocked/tools/dotnet restore /foo": {
            "code": 1,
            "stdout": "dotnet output",
            "stderr": "dotnet with this stderr output"
        }
    }
};
tmr.setAnswers(a);
tmr.run();
//# sourceMappingURL=failrc.js.map