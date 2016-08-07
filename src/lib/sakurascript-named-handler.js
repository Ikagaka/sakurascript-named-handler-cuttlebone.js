import {SakuraScript, SakuraScriptToken} from 'sakurascript';

export class SakuraScriptNamedHandler {
  constructor(named) {
    this._named = named;
  }

  get named() { return this._named; }

  execute(token) {
    const named = this.named;
    const scope = named.scope();
    const surface = scope.surface();
    const blimp = scope.blimp();
    if (token instanceof SakuraScriptToken.Scope) {
      named.scope(token.scope);
    } else if (token instanceof SakuraScriptToken.Surface) {
      scope.surface(token.surface);
    } else if (token instanceof SakuraScriptToken.SurfaceAlias) {
      scope.surface(token.surface_alias);
    } else if (token instanceof SakuraScriptToken.Balloon) {
      scope.blimp(token.balloon);
    } else if (token instanceof SakuraScriptToken.PlayAnimation) {
      surface.play(token.animation);
    } else if (token instanceof SakuraScriptToken.PlayAnimationWait) {
      surface.play(token.animation);
    } else if (token instanceof SakuraScriptToken.SimpleWait) {
      return true;
    } else if (token instanceof SakuraScriptToken.PreciseWait) {
      return true;
    } else if (token instanceof SakuraScriptToken.WaitFromBeginning) {
      return true;
    } else if (token instanceof SakuraScriptToken.ResetBeginning) {
      return true;
    } else if (token instanceof SakuraScriptToken.WaitAnimationEnd) {
      return true;
    } else if (token instanceof SakuraScriptToken.ToggleQuick) {
      return true;
    } else if (token instanceof SakuraScriptToken.ToggleSynchronize) {
      // TODO syncro section
    } else if (token instanceof SakuraScriptToken.TimeCritical) {
      // TODO set time critical to state model
    } else if (token instanceof SakuraScriptToken.WaitClick) {
      named.scope(0).blimp().showWait();
    } else if (token instanceof SakuraScriptToken.NoChoiceTimeout) {
      // TODO state
    } else if (token instanceof SakuraScriptToken.EventChoice) {
      // TODO state.has_choice = true;
      blimp.choice(token.text, token.event, ...token.references);
    } else if (token instanceof SakuraScriptToken.ReferencesChoice) {
      // TODO state.has_choice = true;
      blimp.choiceBegin(token.text, ...token.references);
    } else if (token instanceof SakuraScriptToken.ScriptChoice) {
      // TODO state.has_choice = true;
      blimp.choiceBegin(token.text, `script:${token.script}`);
    } else if (token instanceof SakuraScriptToken.OldReferenceChoice) {
      // TODO state.has_choice = true;
      blimp.choiceBegin(token.text, token.reference);
      blimp.br();
    } else if (token instanceof SakuraScriptToken.BeginEventChoice) {
      // TODO state.has_choice = true;
      blimp.choiceBegin(token.event, ...token.references);
    } else if (token instanceof SakuraScriptToken.BeginReferencesChoice) {
      // TODO state.has_choice = true;
      blimp.choiceBegin(...token.references);
    } else if (token instanceof SakuraScriptToken.BeginScriptChoice) {
      // TODO state.has_choice = true;
      blimp.choiceBegin(`script:${token.script}`);
    } else if (token instanceof SakuraScriptToken.EndChoice) {
      blimp.choiceEnd();
    } else if (token instanceof SakuraScriptToken.BeginEventAnchor) {
      blimp.anchorBegin(token.event, ...token.references);
    } else if (token instanceof SakuraScriptToken.BeginReferencesAnchor) {
      blimp.anchorBegin(...token.references);
    } else if (token instanceof SakuraScriptToken.BeginScriptAnchor) {
      blimp.anchorBegin(`script:${token.script}`);
    } else if (token instanceof SakuraScriptToken.EndAnchor) {
      blimp.anchorEnd();
    } else if (token instanceof SakuraScriptToken.LineBreak) {
      blimp.br();
    } else if (token instanceof SakuraScriptToken.HalfLineBreak) {
      blimp.br(0.5);
    } else if (token instanceof SakuraScriptToken.PercentLineBreak) {
      blimp.br(token.percent / 100);
    } else if (token instanceof SakuraScriptToken.ToggleNoAutoLineBreak) {
      // TODO cuttlebone not implemented
    } else if (token instanceof SakuraScriptToken.Location) {
      blimp.location(token.x, token.y);
    } else if (token instanceof SakuraScriptToken.Image) {
      // TODO cuttlebone not implemented
    } else if (token instanceof SakuraScriptToken.InlineImage) {
      // TODO cuttlebone not implemented
    } else if (token instanceof SakuraScriptToken.Font) {
      blimp.font(token.name, ...token.args);
    } else if (token instanceof SakuraScriptToken.BeFar) {
      // TODO cuttlebone not implemented
    } else if (token instanceof SakuraScriptToken.BeNear) {
      // TODO cuttlebone not implemented
    } else if (token instanceof SakuraScriptToken.Clear) {
      blimp.clear();
    } else if (token instanceof SakuraScriptToken.End) {
      surface.yenE();
    } else if (token instanceof SakuraScriptToken.OldChoiceEnd) {
      surface.yenE();
    } else if (token instanceof SakuraScriptToken.OpenCommunicateBox) {
      named.openCommunicateBox();
    } else if (token instanceof SakuraScriptToken.OpenTeachBox) {
      // TODO cuttlebone not implemented
    } else if (token instanceof SakuraScriptToken.Halt) {
      surface.yenE();
      return false;
    } else if (token instanceof SakuraScriptToken.Marker) {
      blimp.marker();
    } else if (token instanceof SakuraScriptToken.Char) {
      // TODO syncro
      blimp.talk(token.char);
    } else if (token instanceof SakuraScriptToken.Animation) {
      // TODO cuttlebone not implemented
    } else if (token instanceof SakuraScriptToken.Bind) {
      if (token.dress_up == null) {
        // TODO toggle
      } else if (token.dress_up){
        scope.bind(token.category, token.parts);
      } else {
        scope.unbind(token.category, token.parts);
      }
    } else if (token instanceof SakuraScriptToken.LockRepaint) {
      // TODO cuttlebone not implemented
    } else if (token instanceof SakuraScriptToken.UnlockRepaint) {
      // TODO cuttlebone not implemented
    } else if (token instanceof SakuraScriptToken.Move) {
      // TODO shell state
    } else if (token instanceof SakuraScriptToken.MoveAsync) {
      // TODO shell state
    } else if (token instanceof SakuraScriptToken.MoveAsyncCancel) {
      // TODO shell state
    } else if (token instanceof SakuraScriptToken.Raise) {
      return false;
    } else if (token instanceof SakuraScriptToken.Set) {
      // TODO
    } else if (token instanceof SakuraScriptToken.Open) {
      // TODO
    } else if (token instanceof SakuraScriptToken.Close) {
      // TODO
    } else if (token instanceof SakuraScriptToken.NotImplemented) {
      return true;
    } else {
      return false;
    }
    return true;
  }
}
