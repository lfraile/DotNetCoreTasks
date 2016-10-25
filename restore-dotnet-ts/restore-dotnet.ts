import tl = require('vsts-task-lib/task');

async function run() {
    try {
       
        let dotNetPath = tl.which('dotnet');
        
        //let rc1: number = await tl.exec(dotNetPath, ['restore' , tl.getPathInput('projectPath', true,false)]); 
      
        let rc1: number = await tl.tool(dotNetPath).arg(['restore', tl.getPathInput('projectPath', true,false)]).exec(); 
tl.foo();
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
