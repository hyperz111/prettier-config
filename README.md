# @hyperz111/prettier-config

[`prettier`](https://prettier.io/) configuration by [`@hyperz111`](https://github.com/hyperz111/).

> [!NOTE]
> Please read [configuration options](https://prettier.io/docs/options) & [shared configuration](https://prettier.io/docs/sharing-configurations) for more information about prettier configuration.

## Install

```text
npm install -D @hyperz111/prettier-config
```

## Usage

### JavaScript Config Based (`prettier.config.js`/`.prettierrc.js`).

If you use ES Module Syntax

```js
import config from "@hyperz111/prettier-config";

export default config;
```

If you use CommonJS Module Syntax

```js
const config = require("@hyperz111/prettier-config");

module.exports = config;
```

### JSON Configuration Based

Add this line in your `package.json`.

```json
{
  "prettier": "@hyperz111/prettier-config"
}
```

## Copyright

Copyright © 2025-Present [Hyper-Z11](https://github.com/hyperz111/). Licensed under [MIT License](https://opensource.org/license/mit/).
