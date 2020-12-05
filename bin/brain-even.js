#!/usr/bin/env node

import gameCycle from '../src/index.js';
import { condition, getParamsForParityCheckGame } from '../src/games/parity-check.js';

gameCycle(condition, getParamsForParityCheckGame);
