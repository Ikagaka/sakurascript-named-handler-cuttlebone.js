import {SakuraScriptNamedHandler} from '../src/lib/sakurascript-named-handler';

import assert from 'power-assert';

/** @test {SakuraScriptNamedHandler} */
describe('SakuraScriptNamedHandler', function() {
  lazy('instance', function() { return new SakuraScriptNamedHandler() });
  /** @test {SakuraScriptNamedHandler#constructor} */
  context('constructor', function() {
    it('basic', function() { assert(this.instance instanceof SakuraScriptNamedHandler) });
  });
});
