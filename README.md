# Deno Extra Modules

[![Build Status](https://travis-ci.com/ekaragodin/deno_extra.svg?branch=master)](https://travis-ci.com/ekaragodin/deno_extra)
[![License](https://img.shields.io/github/license/ekaragodin/deno_extra.svg)](https://github.com/ekaragodin/deno_extra)

These modules do not have external dependencies except Deno standard modules.

## Documentation

### path

#### untildify

Convert a tilde path to an absolute path.

```ts
import { untildify } from "https://denopkg.com/ekaragodin/deno_extra@v1.0.1/path/mod.ts";

untildify("~/src"); // /Users/ekaragodin/src
```

## Contributing

Follow the [style guide](https://deno.land/style_guide.html).

## License

MIT © [Evgenii Karagodin](https://ekaragodin.com)
