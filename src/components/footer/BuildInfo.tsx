// For BuildInfo (Vercel deploy info)
// -------------------------------------
// Relies on the following env variables
//
// VITE_COMMIT_SHA=\$VERCEL_GIT_COMMIT_SHA
// VITE_BUILD_DATE=\$(date -u +'%Y-%m-%dT%H:%M:%SZ')

function BuildInfo() {
  // Deploy info(Vercel)
  const mode = import.meta.env.MODE
  const commitSha = import.meta.env.VITE_COMMIT_SHA || 'Unknown commit'
  const buildDate = import.meta.env.VITE_BUILD_DATE || 'Unknown build date'

  console.log(mode)
  return (
    <>
      {mode === 'development'
        ? (
          <p className='text-xs text-gray-400'>
            Mode: {mode} - Commit: {commitSha} - Build: {buildDate}
          </p>
        ) : (
          <p className='text-xs text-gray-400'>
            Mode: {mode}
          </p>
        )

      }
    </>
  )

}


export { BuildInfo }
