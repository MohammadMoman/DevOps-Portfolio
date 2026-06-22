$version = if ($env:APP_VERSION) { $env:APP_VERSION } else { 'v1.0.0' }
$buildDate = if ($env:APP_BUILD_DATE) { $env:APP_BUILD_DATE } else { 'Not set' }
$commitHash = if ($env:APP_COMMIT_SHA) { $env:APP_COMMIT_SHA } else { 'local' }
$environment = if ($env:APP_ENVIRONMENT) { $env:APP_ENVIRONMENT } else { 'Development' }

function Convert-ToJsString($value) {
  return ($value -replace '\\', '\\' -replace "'", "\'")
}

$content = @"
window.__BUILD_INFO__ = {
  version: '$(Convert-ToJsString $version)',
  buildDate: '$(Convert-ToJsString $buildDate)',
  commitHash: '$(Convert-ToJsString $commitHash)',
  environment: '$(Convert-ToJsString $environment)',
};
"@

Set-Content -Path 'src/config/build-info.js' -Value $content
