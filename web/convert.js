#!/usr/bin/env node

/*
 * Wire
 * Copyright (C) 2018 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

// @ts-check
const {load} = require('protobufjs');
const fs = require('fs');
const path = require('path');

const protoFile = path.join(__dirname, '..', 'proto', 'messages.proto');
const jsonFile = path.resolve(__dirname, 'messages.json');

load(protoFile)
  .then(Root => {
    const json = JSON.stringify(Root.toJSON()) + '\n';
    return fs.writeFileSync(jsonFile, json, {encoding: 'utf8'});
  });
