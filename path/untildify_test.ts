import { test } from "https://deno.land/std/testing/mod.ts";
import {
  assertNotEquals,
  assertEquals
} from "https://deno.land/std/testing/asserts.ts";
import { untildify } from "./untildify.ts";

test(function replaceTilde() {
  assertNotEquals(untildify("~"), "~");
  assertNotEquals(untildify("~/test"), "~/test");
});

test(function keepTilde() {
  assertEquals(untildify("~test"), "~test");
  assertEquals(untildify("~abc"), "~abc");
  assertEquals(untildify("/~"), "/~");
});
