import { asserts } from "../deps.ts";
import { exec } from "./mod.ts";

const { assertEquals } = asserts;

Deno.test("execEcho", async function () {
  const process = exec("echo qwe", {
    stdout: "piped",
    stderr: "piped",
  });

  const { code } = await process.status();
  assertEquals(code, 0);

  const output = await process.output();
  assertEquals(new TextDecoder().decode(output).trim(), "qwe");

  const stderrOutput = await process.stderrOutput();
  assertEquals(new TextDecoder().decode(stderrOutput), "");

  process.close();
});
