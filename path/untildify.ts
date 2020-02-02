function homeDir() {
  // compat for versions below 0.27
  return (Deno as any).homeDir ? (Deno as any).homeDir : Deno.dir("home");
}

/**
 * Convert a tilde path to an absolute path: ~/src -> /Users/ekaragodin/src.
 *
 * @param path
 */
export function untildify(path: string): string {
  return path.replace(/^~(?=$|\/|\\)/, homeDir());
}
