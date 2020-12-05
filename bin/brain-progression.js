#!/usr/bin/env node

import gameCycle from '../src/index.js';
import { condition, getParamsForProgressionGame } from '../src/games/progression.js';

gameCycle(condition, getParamsForProgressionGame);

