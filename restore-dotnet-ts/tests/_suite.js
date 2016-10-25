"use strict";
const path = require('path');
const assert = require('assert');
const ttm = require('vsts-task-lib/mock-test');
describe('Sample task tests', function () {
    before(() => {
    });
    after(() => {
    });
    it('Ejecuta correcto si dotnet devuelve 0', (done) => {
        let tp = path.join(__dirname, 'success.js');
        let tr = new ttm.MockTestRunner(tp);
        tr.run();
        assert(tr.succeeded, 'Dotnet ha funcionado');
        assert.equal(tr.invokedToolCount, 1);
        assert.equal(tr.warningIssues.length, 0, "No ha habido warnings");
        assert.equal(tr.errorIssues.length, 0, "No ha habido errores");
        assert(tr.stdout.indexOf('dotnet output') >= 0, "tool stdout");
        done();
    });
    it('Lanza fallo si dotnet devuelve 1', (done) => {
        this.timeout(1000);
        let tp = path.join(__dirname, 'failrc.js');
        let tr = new ttm.MockTestRunner(tp);
        tr.run();
        assert(!tr.succeeded, 'Dotnet ha fallado');
        assert.equal(tr.invokedToolCount, 1);
        assert.equal(tr.warningIssues, 0, "No ha habido warnings");
        assert.equal(tr.errorIssues.length, 1, "Ha ocurrido un error");
        assert.equal(tr.errorIssues[0], '/mocked/tools/dotnet failed with return code: 1', 'error issue output');
        assert(tr.stdout.indexOf('dotnet output') >= 0, "tool stdout");
        done();
    });
});
//# sourceMappingURL=_suite.js.map