import { asserts } from "../deps.ts";
import { untildify } from "./untildify.ts";

const { assertNotEquals, assertEquals } = asserts;

Deno.test("replaceTilde", function () {
  assertNotEquals(untildify("~"), "~");
  assertNotEquals(untildify("~/test"), "~/test");
});

Deno.test("keepTilde", function () {
  assertEquals(untildify("~test"), "~test");
  assertEquals(untildify("~abc"), "~abc");
  assertEquals(untildify("/~"), "/~");
});
