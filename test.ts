#!/usr/bin/env deno --allow-all

import { testing } from "./deps.ts";
import "./path/test.ts";

testing.runIfMain(import.meta);
