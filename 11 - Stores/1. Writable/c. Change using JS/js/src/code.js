// European Union Public License version 1.2
// Copyright © 2020 Rick Beerendonk

import { name } from './stores.js';

setInterval(() => name.set(new Date(), 1000));
