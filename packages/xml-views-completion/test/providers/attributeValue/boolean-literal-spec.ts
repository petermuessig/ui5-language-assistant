import { beforeAll, describe, it, beforeEach } from "vitest";import { forEach, map } from "lodash";
import { XMLAttribute, XMLElement } from "@xml-tools/ast";
import { UI5SemanticModel } from "@ui5-language-assistant/semantic-model-types";
import { generateModel } from "@ui5-language-assistant/test-utils";
import { generate } from "@ui5-language-assistant/semantic-model";
import { booleanSuggestions } from "../../../src/providers/attributeValue/boolean-literal";
import {
  UI5XMLViewCompletion,
  BooleanValueInXMLAttributeValueCompletion,
} from "../../../api";
import { testSuggestionsScenario } from "../../utils";
import chai from "chai";

const deepEqualInAnyOrder = require("deep-equal-in-any-order");
chai.use(deepEqualInAnyOrder);
const { expect } = chai;
describe("The ui5-language-assistant xml-views-completion", () => {
  let ui5SemanticModel: UI5SemanticModel;
  beforeAll(async () => {
    ui5SemanticModel = await generateModel({
      version: "1.74.0",
      modelGenerator: generate,
    });
  });

  describe("boolean values", () => {
    describe("applicable scenarios", () => {
      it("will suggest boolean values with no prefix provided", () => {
        const xmlSnippet = `
          <mvc:View
            xmlns:mvc="sap.ui.core.mvc"
            xmlns="sap.m"
            busy="⇶">
          </mvc:View>`;

        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeValue: [booleanSuggestions],
          },
          assertion: (suggestions) => {
            expectBooleanSuggestions(suggestions, "View");
            const suggestedValues = map(suggestions, (_) => _.ui5Node);
            expect(suggestedValues).to.deep.equalInAnyOrder([
              { kind: "BooleanValue", name: "false", value: false },
              { kind: "BooleanValue", name: "true", value: true },
            ]);
          },
        });
      });

      it("will suggest boolean values filtered by prefix", () => {
        const xmlSnippet = `
        <mvc:View
          xmlns:mvc="sap.ui.core.mvc"
          xmlns="sap.m"
          busy="t⇶">
        </mvc:View>`;

        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeValue: [booleanSuggestions],
          },
          assertion: (suggestions) => {
            expectBooleanSuggestions(suggestions, "View");
            const suggestedValues = map(suggestions, (_) => _.ui5Node);
            expect(suggestedValues).to.deep.equalInAnyOrder([
              { kind: "BooleanValue", name: "true", value: true },
            ]);
          },
        });
      });

      it("will not suggest any boolean values if none match the prefix", () => {
        const xmlSnippet = `
        <mvc:View
          xmlns:mvc="sap.ui.core.mvc"
          xmlns="sap.m"
          busy="aaa⇶">
        </mvc:View>`;

        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeValue: [booleanSuggestions],
          },
          assertion: (suggestions) => {
            expect(suggestions).to.be.empty;
          },
        });
      });
    });

    describe("non-applicable scenarios", () => {
      it("will not provide any suggestions when the property is not of boolean type", () => {
        const xmlSnippet = `
          <mvc:View
            xmlns:mvc="sap.ui.core.mvc"
            xmlns="sap.m"
            busyIndicatorSize="⇶">
          </mvc:View>`;

        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeValue: [booleanSuggestions],
          },
          assertion: (suggestions) => {
            expect(suggestions).to.be.empty;
          },
        });
      });

      it("will not provide any suggestions when it is not an attribute value completion", () => {
        const xmlSnippet = `
          <mvc:View
            xmlns:mvc="sap.ui.core.mvc"
            xmlns="sap.m">
            <List ⇶>
            </List>
          </mvc:View>`;

        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeValue: [booleanSuggestions],
          },
          assertion: (suggestions) => {
            expect(suggestions).to.be.empty;
          },
        });
      });

      it("will not provide any suggestions when the property type is undefined", () => {
        const xmlSnippet = `
          <mvc:View
            xmlns:mvc="sap.ui.core.mvc"
            xmlns="sap.m">
            <App homeIcon = "⇶">
            </App>
          </mvc:View>`;

        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeValue: [booleanSuggestions],
          },
          assertion: (suggestions) => {
            expect(suggestions).to.be.empty;
          },
        });
      });

      it("will not provide any suggestions when not inside a UI5 Class", () => {
        const xmlSnippet = `
          <mvc:View
            xmlns:mvc="sap.ui.core.mvc"
            xmlns="sap.m">
            <Bamba foo = "⇶">
            </Bamba>
          </mvc:View>`;

        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeValue: [booleanSuggestions],
          },
          assertion: (suggestions) => {
            expect(ui5SemanticModel.classes["sap.ui.core.mvc.Bamba"]).to.be
              .undefined;
            expect(suggestions).to.be.empty;
          },
        });
      });

      it("will not suggest any boolean values if the property is unknown", () => {
        const xmlSnippet = `
          <mvc:View
            xmlns:mvc="sap.ui.core.mvc"
            xmlns="sap.m">
            <List UNKNOWN = "⇶">
            </List>
          </mvc:View>`;

        testSuggestionsScenario({
          model: ui5SemanticModel,
          xmlText: xmlSnippet,
          providers: {
            attributeValue: [booleanSuggestions],
          },
          assertion: (suggestions) => {
            expect(suggestions).to.be.empty;
          },
        });
      });
    });
  });
});

function expectBooleanSuggestions(
  suggestions: UI5XMLViewCompletion[],
  expectedParentTag: string
): asserts suggestions is BooleanValueInXMLAttributeValueCompletion[] {
  forEach(suggestions, (_) => {
    expect(_.type).to.equal("BooleanValueInXMLAttributeValue");
    expect((_.astNode as XMLAttribute).key).to.equal("busy");
    expect((_.astNode.parent as XMLElement).name).to.equal(expectedParentTag);
  });
}
