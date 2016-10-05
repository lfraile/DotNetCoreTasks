import ma = require('vsts-task-lib/mock-answer');
import tmrm = require('vsts-task-lib/mock-run');
import path = require('path');

let taskPath = path.join(__dirname, '..', 'restore-dotnet.js');
let tmr: tmrm.TaskMockRunner = new tmrm.TaskMockRunner(taskPath);

tmr.setInput('projectPath', '/foo');

let a: ma.TaskLibAnswers = <ma.TaskLibAnswers>{
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