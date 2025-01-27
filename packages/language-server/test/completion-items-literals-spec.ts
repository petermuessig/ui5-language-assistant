import { beforeAll, describe, it, beforeEach } from "vitest";import { map, uniq } from "lodash";
import { CompletionItemKind } from "vscode-languageserver";
import { UI5SemanticModel } from "@ui5-language-assistant/semantic-model-types";
import { generateModel } from "@ui5-language-assistant/test-utils";
import { generate } from "@ui5-language-assistant/semantic-model";
import { getSuggestions, getTextInRange } from "./completion-items-utils";
import chai from "chai";

const deepEqualInAnyOrder = require("deep-equal-in-any-order");
chai.use(deepEqualInAnyOrder);
const { expect } = chai;
describe("the UI5 language assistant Code Completion Services", () => {
  let ui5SemanticModel: UI5SemanticModel;
  beforeAll(async () => {
    //TODO: use 1.71.x
    ui5SemanticModel = await generateModel({
      version: "1.74.0",
      modelGenerator: generate,
    });
  });

  it("will get completion values for boolean value", () => {
    const xmlSnippet = `<mvc:View 
                          xmlns:mvc="sap.ui.core.mvc" 
                          xmlns="sap.m"
                          busy="⇶">`;
    const suggestions = getSuggestions(xmlSnippet, ui5SemanticModel);
    const suggestionsDetails = map(suggestions, (suggestion) => ({
      label: suggestion.label,
      replacedText: getTextInRange(xmlSnippet, suggestion.textEdit?.range),
      newText: suggestion.textEdit?.newText,
    }));
    const suggestionKinds = uniq(
      map(suggestions, (suggestion) => suggestion.kind)
    );

    expect(suggestionsDetails).to.deep.equalInAnyOrder([
      { label: "false", replacedText: `""`, newText: `"false"` },
      { label: "true", replacedText: `""`, newText: `"true"` },
    ]);

    expect(suggestionKinds).to.deep.equal([CompletionItemKind.Constant]);
  });

  it("will get completion values for UI5 boolean value when the cursor is in the middle of a name", () => {
    const xmlSnippet = `<mvc:View 
                          xmlns:mvc="sap.ui.core.mvc" 
                          xmlns="sap.m"
                          busy="t⇶a">`;
    const suggestions = getSuggestions(xmlSnippet, ui5SemanticModel);
    const suggestionsDetails = map(suggestions, (suggestion) => ({
      label: suggestion.label,
      replacedText: getTextInRange(xmlSnippet, suggestion.textEdit?.range),
      newText: suggestion.textEdit?.newText,
    }));
    const suggestionKinds = uniq(
      map(suggestions, (suggestion) => suggestion.kind)
    );

    expect(suggestionsDetails).to.deep.equalInAnyOrder([
      { label: "true", replacedText: `"ta"`, newText: `"true"` },
    ]);

    expect(suggestionKinds).to.deep.equal([CompletionItemKind.Constant]);
  });
});
