'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SakuraScriptNamedHandler = undefined;

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _sakurascript = require('sakurascript');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SakuraScriptNamedHandler = exports.SakuraScriptNamedHandler = function () {
  function SakuraScriptNamedHandler(named) {
    (0, _classCallCheck3.default)(this, SakuraScriptNamedHandler);

    this._named = named;
  }

  (0, _createClass3.default)(SakuraScriptNamedHandler, [{
    key: 'execute',
    value: function execute(token) {
      var named = this.named;
      var scope = named.scope();
      var surface = scope.surface();
      var blimp = scope.blimp();
      if (token instanceof _sakurascript.SakuraScriptToken.Scope) {
        named.scope(token.scope);
      } else if (token instanceof _sakurascript.SakuraScriptToken.Surface) {
        scope.surface(token.surface);
      } else if (token instanceof _sakurascript.SakuraScriptToken.SurfaceAlias) {
        scope.surface(token.surface_alias);
      } else if (token instanceof _sakurascript.SakuraScriptToken.Balloon) {
        scope.blimp(token.balloon);
      } else if (token instanceof _sakurascript.SakuraScriptToken.PlayAnimation) {
        surface.play(token.animation);
      } else if (token instanceof _sakurascript.SakuraScriptToken.PlayAnimationWait) {
        surface.play(token.animation);
      } else if (token instanceof _sakurascript.SakuraScriptToken.SimpleWait) {
        return true;
      } else if (token instanceof _sakurascript.SakuraScriptToken.PreciseWait) {
        return true;
      } else if (token instanceof _sakurascript.SakuraScriptToken.WaitFromBeginning) {
        return true;
      } else if (token instanceof _sakurascript.SakuraScriptToken.ResetBeginning) {
        return true;
      } else if (token instanceof _sakurascript.SakuraScriptToken.WaitAnimationEnd) {
        return true;
      } else if (token instanceof _sakurascript.SakuraScriptToken.ToggleQuick) {
        return true;
      } else if (token instanceof _sakurascript.SakuraScriptToken.ToggleSynchronize) {
        // TODO syncro section
      } else if (token instanceof _sakurascript.SakuraScriptToken.TimeCritical) {
        // TODO set time critical to state model
      } else if (token instanceof _sakurascript.SakuraScriptToken.WaitClick) {
        named.scope(0).blimp().showWait();
      } else if (token instanceof _sakurascript.SakuraScriptToken.NoChoiceTimeout) {
        // TODO state
      } else if (token instanceof _sakurascript.SakuraScriptToken.EventChoice) {
        // TODO state.has_choice = true;
        blimp.choice.apply(blimp, [token.text, token.event].concat((0, _toConsumableArray3.default)(token.references)));
      } else if (token instanceof _sakurascript.SakuraScriptToken.ReferencesChoice) {
        // TODO state.has_choice = true;
        blimp.choiceBegin.apply(blimp, [token.text].concat((0, _toConsumableArray3.default)(token.references)));
      } else if (token instanceof _sakurascript.SakuraScriptToken.ScriptChoice) {
        // TODO state.has_choice = true;
        blimp.choiceBegin(token.text, 'script:' + token.script);
      } else if (token instanceof _sakurascript.SakuraScriptToken.OldReferenceChoice) {
        // TODO state.has_choice = true;
        blimp.choiceBegin(token.text, token.reference);
        blimp.br();
      } else if (token instanceof _sakurascript.SakuraScriptToken.BeginEventChoice) {
        // TODO state.has_choice = true;
        blimp.choiceBegin.apply(blimp, [token.event].concat((0, _toConsumableArray3.default)(token.references)));
      } else if (token instanceof _sakurascript.SakuraScriptToken.BeginReferencesChoice) {
        // TODO state.has_choice = true;
        blimp.choiceBegin.apply(blimp, (0, _toConsumableArray3.default)(token.references));
      } else if (token instanceof _sakurascript.SakuraScriptToken.BeginScriptChoice) {
        // TODO state.has_choice = true;
        blimp.choiceBegin('script:' + token.script);
      } else if (token instanceof _sakurascript.SakuraScriptToken.EndChoice) {
        blimp.choiceEnd();
      } else if (token instanceof _sakurascript.SakuraScriptToken.BeginEventAnchor) {
        blimp.anchorBegin.apply(blimp, [token.event].concat((0, _toConsumableArray3.default)(token.references)));
      } else if (token instanceof _sakurascript.SakuraScriptToken.BeginReferencesAnchor) {
        blimp.anchorBegin.apply(blimp, (0, _toConsumableArray3.default)(token.references));
      } else if (token instanceof _sakurascript.SakuraScriptToken.BeginScriptAnchor) {
        blimp.anchorBegin('script:' + token.script);
      } else if (token instanceof _sakurascript.SakuraScriptToken.EndAnchor) {
        blimp.anchorEnd();
      } else if (token instanceof _sakurascript.SakuraScriptToken.LineBreak) {
        blimp.br();
      } else if (token instanceof _sakurascript.SakuraScriptToken.HalfLineBreak) {
        blimp.br(0.5);
      } else if (token instanceof _sakurascript.SakuraScriptToken.PercentLineBreak) {
        blimp.br(token.percent / 100);
      } else if (token instanceof _sakurascript.SakuraScriptToken.ToggleNoAutoLineBreak) {
        // TODO cuttlebone not implemented
      } else if (token instanceof _sakurascript.SakuraScriptToken.Location) {
        blimp.location(token.x, token.y);
      } else if (token instanceof _sakurascript.SakuraScriptToken.Image) {
        // TODO cuttlebone not implemented
      } else if (token instanceof _sakurascript.SakuraScriptToken.InlineImage) {
        // TODO cuttlebone not implemented
      } else if (token instanceof _sakurascript.SakuraScriptToken.Font) {
        blimp.font.apply(blimp, [token.name].concat((0, _toConsumableArray3.default)(token.args)));
      } else if (token instanceof _sakurascript.SakuraScriptToken.BeFar) {
        // TODO cuttlebone not implemented
      } else if (token instanceof _sakurascript.SakuraScriptToken.BeNear) {
        // TODO cuttlebone not implemented
      } else if (token instanceof _sakurascript.SakuraScriptToken.Clear) {
        blimp.clear();
      } else if (token instanceof _sakurascript.SakuraScriptToken.End) {
        surface.yenE();
      } else if (token instanceof _sakurascript.SakuraScriptToken.OldChoiceEnd) {
        surface.yenE();
      } else if (token instanceof _sakurascript.SakuraScriptToken.OpenCommunicateBox) {
        named.openCommunicateBox();
      } else if (token instanceof _sakurascript.SakuraScriptToken.OpenTeachBox) {
        // TODO cuttlebone not implemented
      } else if (token instanceof _sakurascript.SakuraScriptToken.Halt) {
        surface.yenE();
        return false;
      } else if (token instanceof _sakurascript.SakuraScriptToken.Marker) {
        blimp.marker();
      } else if (token instanceof _sakurascript.SakuraScriptToken.Char) {
        // TODO syncro
        blimp.talk(token.char);
      } else if (token instanceof _sakurascript.SakuraScriptToken.Animation) {
        // TODO cuttlebone not implemented
      } else if (token instanceof _sakurascript.SakuraScriptToken.Bind) {
        if (token.dress_up == null) {
          // TODO toggle
        } else if (token.dress_up) {
          scope.bind(token.category, token.parts);
        } else {
          scope.unbind(token.category, token.parts);
        }
      } else if (token instanceof _sakurascript.SakuraScriptToken.LockRepaint) {
        // TODO cuttlebone not implemented
      } else if (token instanceof _sakurascript.SakuraScriptToken.UnlockRepaint) {
        // TODO cuttlebone not implemented
      } else if (token instanceof _sakurascript.SakuraScriptToken.Move) {
        // TODO shell state
      } else if (token instanceof _sakurascript.SakuraScriptToken.MoveAsync) {
        // TODO shell state
      } else if (token instanceof _sakurascript.SakuraScriptToken.MoveAsyncCancel) {
        // TODO shell state
      } else if (token instanceof _sakurascript.SakuraScriptToken.Raise) {
        return false;
      } else if (token instanceof _sakurascript.SakuraScriptToken.Set) {
        // TODO
      } else if (token instanceof _sakurascript.SakuraScriptToken.Open) {
        // TODO
      } else if (token instanceof _sakurascript.SakuraScriptToken.Close) {
        // TODO
      } else if (token instanceof _sakurascript.SakuraScriptToken.NotImplemented) {
        return true;
      } else {
        return false;
      }
      return true;
    }
  }, {
    key: 'named',
    get: function get() {
      return this._named;
    }
  }]);
  return SakuraScriptNamedHandler;
}();
//# sourceMappingURL=sakurascript-named-handler.js.map
