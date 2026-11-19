import test from 'node:test';import assert from 'node:assert/strict';import {safeName,detectType,validateFiles} from '../src/validation.js';
test('sanitizes filenames',()=>assert.equal(safeName('../my file.pdf'),'my_file.pdf'));
test('detects PDF signature',async()=>assert.equal(await detectType(Buffer.from('%PDF-1.5\n')),'pdf'));
test('rejects unsupported tool',async()=>assert.rejects(()=>validateFiles('unlisted',[])));
test('rejects empty uploads',async()=>assert.rejects(()=>validateFiles('word-to-pdf',[])));
