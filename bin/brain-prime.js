#!/usr/bin/env node

import gameCycle from '../src/index.js';
import { condition, getParamsForPrimeGame } from '../src/games/prime.js';

gameCycle(condition, getParamsForPrimeGame);
