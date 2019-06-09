#!/usr/bin/env ts-node

import test  from 'tstest'

import path from 'path'

import {
  jqFile,
  jqJson,
  jqString,
}           from './jq'

test('jqFile', async (t) => {
  const JSON_FILE = path.join(__dirname, '../tests/fixtures/test.json')
  const FILTER = '.test'
  const EXPECTED_OUTPUT = 'true'

  const output = await jqFile(FILTER, JSON_FILE)
  t.equal(output, EXPECTED_OUTPUT, 'should filter the file by jqFile')
})

test('jqJson', async (t) => {
  const JSON_OBJ = {
    json: 42,
  }
  const FILTER = '.json'
  const EXPECTED_OUTPUT = '42'

  const output = await jqJson(FILTER, JSON_OBJ)
  t.equal(output, EXPECTED_OUTPUT, 'should filter the file by jqJson')
})

test('jqString', async (t) => {
  const JSON_TEXT = '{ "json": 42 }'
  const FILTER = '.json'
  const EXPECTED_OUTPUT = '42'

  const output = await jqString(FILTER, JSON_TEXT)
  t.equal(output, EXPECTED_OUTPUT, 'should filter the file by jqString')
})
