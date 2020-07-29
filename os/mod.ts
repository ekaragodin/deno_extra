/**
 * Returns the string path of the current user's home directory.
 * Requires allow-env permission.
 */
export function homeDir(): string {
  // compatibility for versions below 0.27
  if ((Deno as any).homeDir) {
    return (Deno as any).homeDir;
  }

  // compatibility for versions below 1.2.1
  if ((Deno as any).dir) {
    return (Deno as any).dir("home");
  }

  // latest Deno doesn't have api for getting homedir
  let homeDir: string | undefined;
  switch (Deno.build.os) {
    case "windows":
      homeDir = Deno.env.get("USERPROFILE");
      if (!homeDir) {
        throw new Error("The environment variable `USERPROFILE` is empty");
      }
      return homeDir;
    case "linux":
    case "darwin":
      homeDir = Deno.env.get("HOME");
      if (!homeDir) {
        throw new Error("The environment variable `HOME` is empty");
      }
      return homeDir;
    default:
      throw new Error("Can not get homedir for unknown os");
  }
}
