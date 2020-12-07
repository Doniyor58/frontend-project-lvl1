#!/usr/bin/env node

import gameCycle from '../src/index.js';
import { condition, getParamsForCalculatorGame } from '../src/games/calculator.js';

gameCycle(condition, getParamsForCalculatorGame);
