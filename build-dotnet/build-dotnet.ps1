[CmdletBinding()]
param()
Set-StrictMode -Version 2

Trace-VstsEnteringInvocation $MyInvocation
try {    
  
    $pathToProjectJson = Get-VstsInput -Name projectPath -Require
    
    Assert-VstsPath $pathToProjectJson

    Invoke-VstsTool -FileName "dotnet.exe" -Arguments " build $pathToProjectJson" -RequireExitCodeZero
} 
catch{
    $ErrorMessage = $_.Exception.Message
    Write-VstsTaskError $ErrorMessage
    Write-VstsSetResult -Result Failed
}
finally {
    Trace-VstsLeavingInvocation $MyInvocation  
}
