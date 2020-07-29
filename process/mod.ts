export function getShell(): string[] {
  if (Deno.build.os === "windows") {
    return [Deno.env.get("ComSpec") || "cmd.exe", "/d", "/s", "/c"];
  }

  return ["/bin/sh", "-c"];
}

type ExecOptions = Omit<Deno.RunOptions, "cmd">;

/**
 * Spawns a shell and runs a command within that shell. Requires acces to Env on Windows.
 *
 * @param command The command to run, with space-separated arguments.
 * @param options
 */
export function exec(command: string, options?: ExecOptions) {
  return Deno.run({
    ...options,
    cmd: [...getShell(), command],
  });
}
