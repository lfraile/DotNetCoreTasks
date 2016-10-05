"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const tl = require('vsts-task-lib/task');
function run() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let dotNetPath = tl.which('dotnet');
            // this one works in node and agent execution but mocha tests throws an exception on this line, probably I'm failing to mock it? I would like to use this one in tests and real
            let rc1 = yield tl.exec(dotNetPath, ['restore', tl.getPathInput('projectPath', true, false)]);
        }
        catch (err) {
            tl.setResult(tl.TaskResult.Failed, err.message);
        }
    });
}
run();
//# sourceMappingURL=restore-dotnet.js.map