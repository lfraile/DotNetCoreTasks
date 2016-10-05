"use strict";
const tmrm = require('vsts-task-lib/mock-run');
const path = require('path');
let taskPath = path.join(__dirname, '..', 'restore-dotnet.js');
let tmr = new tmrm.TaskMockRunner(taskPath);
tmr.setInput('projectPath', '/foo');
let a = {
    "which": {
        "dotnet": "echo"
    },
    "exec": {
        "echo restore /foo": {
            "code": 0,
            "stdout": "atool output here",
            "stderr": "atool with this stderr output"
        }
    }
};
tmr.setAnswers(a);
tmr.run();
//# sourceMappingURL=success.js.map