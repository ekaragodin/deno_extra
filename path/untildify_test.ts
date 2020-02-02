import { testing, asserts } from "../deps.ts";
import { untildify } from "./untildify.ts";

const { test } = testing;
const { assertNotEquals, assertEquals } = asserts;

test(function replaceTilde() {
  assertNotEquals(untildify("~"), "~");
  assertNotEquals(untildify("~/test"), "~/test");
});

test(function keepTilde() {
  assertEquals(untildify("~test"), "~test");
  assertEquals(untildify("~abc"), "~abc");
  assertEquals(untildify("/~"), "/~");
});
