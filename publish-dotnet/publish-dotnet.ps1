[CmdletBinding()]
param()
Set-StrictMode -Version 2

Trace-VstsEnteringInvocation $MyInvocation
try {    
  
    $pathToProjectJson = Get-VstsInput -Name projectPath -Require
    $destinationPath = Get-VstsInput -Name folderForPublish -Require
    
    Assert-VstsPath $pathToProjectJson

    Invoke-VstsTool -FileName "dotnet.exe" -Arguments " publish $pathToProjectJson -o $destinationPath" -RequireExitCodeZero
} 
catch{
    $ErrorMessage = $_.Exception.Message
    Write-VstsTaskError $ErrorMessage
    Write-VstsSetResult -Result Failed
}
finally {
    Trace-VstsLeavingInvocation $MyInvocation  
}
