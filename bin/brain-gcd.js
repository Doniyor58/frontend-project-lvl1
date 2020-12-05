#!/usr/bin/env node

import gameCycle from '../src/index.js';
import { condition, getParamsForGcdGame } from '../src/games/gcd.js';

gameCycle(condition, getParamsForGcdGame);

