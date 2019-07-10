/**
 * Convert a tilde path to an absolute path: ~/src -> /Users/ekaragodin/src.
 *
 * @param path
 */
export function untildify(path: string): string {
  return path.replace(/^~(?=$|\/|\\)/, Deno.homeDir());
}
