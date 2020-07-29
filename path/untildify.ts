import { homeDir } from "../os/mod.ts";

/**
 * Convert a tilde path to an absolute path: ~/src -> /Users/ekaragodin/src.
 * Requires allow-env permission.
 *
 * @param path
 */
export function untildify(path: string): string {
  return path.replace(/^~(?=$|\/|\\)/, homeDir());
}
