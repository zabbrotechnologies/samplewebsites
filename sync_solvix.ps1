$src = 'C:\Users\TUF\Documents\client-project\demo page(verhost)\public\projects\solvix'
$dest = 'C:\Users\TUF\Documents\client-project\demo page(verhost)\solvix'

if (-not (Test-Path $dest)) {
    New-Item -ItemType Directory -Path $dest -Force | Out-Null
}

Copy-Item -Path "$src\*" -Destination $dest -Recurse -Force
Write-Output "MIRROR_COMPLETE"

