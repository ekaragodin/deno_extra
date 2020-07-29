# Deno Extra Modules

[![Build Status](https://travis-ci.com/ekaragodin/deno_extra.svg?branch=master)](https://travis-ci.com/ekaragodin/deno_extra)
[![License](https://img.shields.io/github/license/ekaragodin/deno_extra.svg)](https://github.com/ekaragodin/deno_extra)

These modules do not have external dependencies except Deno standard modules.

## Documentation

### os

#### homeDir

```ts
import { homeDir } from "https://denopkg.com/ekaragodin/deno_extra@v1.2.0/os/mod.ts";

homeDir(); // /Users/ekaragodin
```

### path

#### untildify

Convert a tilde path to an absolute path. Requires allow-env permission.

```ts
import { untildify } from "https://denopkg.com/ekaragodin/deno_extra@v1.2.0/path/mod.ts";

untildify("~/src"); // /Users/ekaragodin/src
```

### process

#### exec

Spawns a shell and runs a command within that shell. Requires acces to Env on Windows.

```ts
import { exec } from "https://denopkg.com/ekaragodin/deno_extra@v1.2.0/process/mod.ts";

exec("ls -l");
```

## Contributing

Follow the [style guide](https://deno.land/style_guide.html).

## License

MIT © [Evgenii Karagodin](https://ekaragodin.com)
