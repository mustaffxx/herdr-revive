// What the test harness can do where it runs. Much of it stands in for agents,
// `hc` and `ps` with small shell scripts, runs `sh`, listens on Unix sockets or
// makes symlinks: none of that runs on Windows, where test/windows.test.js
// covers the same ground with Windows' own pieces instead.

export const WINDOWS = process.platform === "win32";

/** Options for a test that needs the POSIX harness: skipped on Windows, with why. */
export const POSIX_HARNESS = WINDOWS ? { skip: "needs the POSIX test harness (shell-script stand-ins, sh, Unix sockets or symlinks)" } : {};

/** Options for a test of Windows-only behavior. */
export const WINDOWS_ONLY = WINDOWS ? {} : { skip: "Windows only" };