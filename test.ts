#!/usr/bin/env deno --allow-all

import { runIfMain } from "https://deno.land/std/testing/mod.ts";
import "./path/test.ts";

runIfMain(import.meta);
