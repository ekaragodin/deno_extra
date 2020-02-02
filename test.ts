#!/usr/bin/env -S deno --allow-all

import { testing } from "./deps.ts";
import "./path/test.ts";

testing.runIfMain(import.meta);
