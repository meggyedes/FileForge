import test from 'node:test';import assert from 'node:assert/strict';import {sanitizeName,byteCount,validateOptions,makeHeader,flipBits} from '../public/corruption-utils.mjs';
test('sanitizes names',()=>assert.equal(sanitizeName('../demo.pdf'),'demo'));
test('size limit',()=>{assert.equal(byteCount(1,'MB'),1048576);assert.throws(()=>byteCount(101,'MB'))});
test('rejects unsupported extensions',()=>assert.throws(()=>validateOptions({name:'x',extension:'exe',size:1,unit:'KB',mode:'zeros',truncatePercent:30,intensity:20})));
test('signature',()=>assert.equal(makeHeader('pdf')[0],37));
test('flips',()=>{let b=new Uint8Array([0,0]);flipBits(b,100);assert.notDeepEqual([...b],[0,0])});
