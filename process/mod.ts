export function getShell(): string[] {
  if (Deno.build.os === "win") {
    return [Deno.env().ComSpec || "cmd.exe", "/d", "/s", "/c"];
  }

  return ["/bin/sh", "-c"];
}

type ExecOptions = Omit<Deno.RunOptions, "args">;

/**
 * Spawns a shell and runs a command within that shell. Requires acces to Env on Windows.
 *
 * @param command The command to run, with space-separated arguments.
 * @param options
 */
export function exec(command: string, options?: ExecOptions) {
  return Deno.run({
    ...options,
    args: [...getShell(), command]
  });
}
