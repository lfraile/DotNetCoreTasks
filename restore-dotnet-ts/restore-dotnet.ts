import tl = require('vsts-task-lib/task');

async function run() {
    try {
       
        let dotNetPath = tl.which('dotnet');
        
        // this one works in node and agent execution but mocha tests throws an exception on this line, probably I'm failing to mock it? I would like to use this one in tests and real
        let rc1: number = await tl.exec(dotNetPath, ['restore' , tl.getPathInput('projectPath', true,false)]); 
        
        // this one does not work on node or agent (dot net raises an exception) but it works on mocha assertions with the exec mocked
        //let rc1: number = await tl.tool(dotNetPath).arg('restore ' + tl.getPathInput('projectPath', true,false)).exec(); 

        if(rc1 != 0){        
            console.log(`##vso[task.logissue type=error;]${rc1}`);   
            tl.setResult(tl.TaskResult.Failed,'Failed restoring the packages');
        }

    }
    catch (err) {
         tl.setResult(tl.TaskResult.Failed, err.message);
    }
}

run();
