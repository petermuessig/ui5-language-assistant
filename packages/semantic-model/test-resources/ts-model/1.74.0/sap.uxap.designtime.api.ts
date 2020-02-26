import { LibraryFile } from "@vscode-ui5/semantic-model/src/apiJson";

const api: LibraryFile = {
  "$schema-ref": "http://schemas.sap.com/sapui5/designtime/api.json/1.0",
  version: "1.74.0",
  library: "sap.uxap",
  symbols: [
    {
      kind: "namespace",
      name: "sap.uxap",
      basename: "uxap",
      resource: "sap/uxap/library.js",
      module: "sap/uxap/library",
      export: "",
      static: true,
      visibility: "public",
      description: "SAP UxAP"
    },
    {
      kind: "class",
      name: "sap.uxap.AnchorBar",
      basename: "AnchorBar",
      resource: "sap/uxap/AnchorBar.js",
      module: "sap/uxap/AnchorBar",
      export: "",
      static: true,
      visibility: "public",
      since: "1.26",
      extends: "sap.m.Toolbar",
      description:
        "Displays the titles of the sections and subsections in the {@link sap.uxap.ObjectPageLayout ObjectPageLayout} and allows the user to scroll to the respective content.\n\n<h3>Overview</h3>\n\nThe <code>AnchorBar</code> is internally generated as a menu in the <code>ObjectPageLayout</code>. It displays the sections and subsections and allows the user to directly scroll to the respective content by selecting them, while it remains visible at the top of the page (below the page header).",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "showPopover",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.",
            methods: ["getShowPopover", "setShowPopover"]
          },
          {
            name: "upperCase",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "Determines whether the Anchor bar items are displayed in upper case.",
            methods: ["getUpperCase", "setUpperCase"]
          },
          {
            name: "backgroundDesign",
            type: "sap.m.BackgroundDesign",
            defaultValue: null,
            group: "Appearance",
            visibility: "public",
            since: "1.58",
            description:
              "Determines the background color of the <code>AnchorBar</code>.\n\n<b>Note:</b> The default value of <code>backgroundDesign</code> property is null. If the property is not set, the color of the background is <code>@sapUiObjectHeaderBackground</code>, which depends on the specific theme.",
            methods: ["getBackgroundDesign", "setBackgroundDesign"]
          }
        ],
        aggregations: [
          {
            name: "_select",
            singularName: "_select",
            type: "sap.uxap.HierarchicalSelect",
            cardinality: "0..1",
            visibility: "hidden",
            methods: ["get_select", "destroy_select", "set_select"]
          },
          {
            name: "_scrollArrowLeft",
            singularName: "_scrollArrowLeft",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_scrollArrowLeft",
              "destroy_scrollArrowLeft",
              "set_scrollArrowLeft"
            ]
          },
          {
            name: "_scrollArrowRight",
            singularName: "_scrollArrowRight",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_scrollArrowRight",
              "destroy_scrollArrowRight",
              "set_scrollArrowRight"
            ]
          }
        ],
        associations: [
          {
            name: "selectedButton",
            singularName: "selectedButton",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "public",
            description:
              "The button that represents the Section being scrolled by the user.",
            methods: ["getSelectedButton", "setSelectedButton"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>AnchorBar</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.",
        references: [
          "{@link topic:370b67986497463187336fa130aebbf1 Anchor Bar}"
        ]
      },
      methods: [
        {
          name: "enhanceAccessibilityState",
          visibility: "protected",
          parameters: [
            {
              name: "oElement",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The Control that gets rendered by the RenderManager"
            },
            {
              name: "mAriaProps",
              type: "Object",
              optional: false,
              description: 'The mapping of "aria-" prefixed attributes'
            }
          ],
          description:
            "This method is a hook for the RenderManager that gets called during the rendering of child Controls. It allows to add, remove and update existing accessibility attributes (ARIA) of those controls."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.uxap.AnchorBar with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Toolbar.extend}."
        },
        {
          name: "getBackgroundDesign",
          visibility: "public",
          since: "1.58",
          returnValue: {
            type: "sap.m.BackgroundDesign",
            description: "Value of property <code>backgroundDesign</code>"
          },
          description:
            "Gets current value of property {@link #getBackgroundDesign backgroundDesign}.\n\nDetermines the background color of the <code>AnchorBar</code>.\n\n<b>Note:</b> The default value of <code>backgroundDesign</code> property is null. If the property is not set, the color of the background is <code>@sapUiObjectHeaderBackground</code>, which depends on the specific theme."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description: "Returns a metadata object for class sap.uxap.AnchorBar."
        },
        {
          name: "getScrollDelegate",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.core.delegate.ScrollEnablement",
            description:
              "The <code>sap.ui.core.delegate.ScrollEnablement</code> instance"
          },
          description:
            "Returns an sap.ui.core.delegate.ScrollEnablement object used to handle scrolling."
        },
        {
          name: "getSelectedButton",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID"
          },
          description:
            "ID of the element which is the current target of the association {@link #getSelectedButton selectedButton}, or <code>null</code>."
        },
        {
          name: "getShowPopover",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showPopover</code>"
          },
          description:
            "Gets current value of property {@link #getShowPopover showPopover}.\n\nDetermines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getUpperCase",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>upperCase</code>"
          },
          description:
            "Gets current value of property {@link #getUpperCase upperCase}.\n\nDetermines whether the Anchor bar items are displayed in upper case.\n\nDefault value is <code>false</code>."
        },
        {
          name: "scrollToSection",
          visibility: "public",
          "ui5-metamodel": true,
          parameters: [
            {
              name: "sId",
              type: "string",
              optional: false,
              description: "The Section ID to scroll to"
            },
            {
              name: "iDuration",
              type: "int",
              optional: false,
              description: "Scroll duration (in ms). Default value is 0."
            }
          ],
          description: "Scroll to a specific Section."
        },
        {
          name: "setBackgroundDesign",
          visibility: "public",
          since: "1.58",
          returnValue: {
            type: "sap.uxap.AnchorBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sBackgroundDesign",
              type: "sap.m.BackgroundDesign",
              optional: false,
              description:
                "New value for property <code>backgroundDesign</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.\n\nDetermines the background color of the <code>AnchorBar</code>.\n\n<b>Note:</b> The default value of <code>backgroundDesign</code> property is null. If the property is not set, the color of the background is <code>@sapUiObjectHeaderBackground</code>, which depends on the specific theme.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setSelectedButton",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.AnchorBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSelectedButton",
              type: "sap.ui.core.ID|sap.m.Button",
              optional: false,
              description:
                "ID of an element which becomes the new target of this selectedButton association; alternatively, an element instance may be given"
            }
          ],
          description:
            "Sets the associated {@link #getSelectedButton selectedButton}."
        },
        {
          name: "setShowPopover",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.AnchorBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowPopover",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showPopover</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowPopover showPopover}.\n\nDetermines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setUpperCase",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.AnchorBar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bUpperCase",
              type: "boolean",
              optional: false,
              description: "New value for property <code>upperCase</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getUpperCase upperCase}.\n\nDetermines whether the Anchor bar items are displayed in upper case.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.uxap.BlockBase",
      basename: "BlockBase",
      resource: "sap/uxap/BlockBase.js",
      module: "sap/uxap/BlockBase",
      export: "",
      static: true,
      visibility: "public",
      since: "1.26",
      extends: "sap.ui.core.Control",
      description:
        "The main element that holds the content that is displayed in an {@link sap.uxap.ObjectPageLayout ObjectPageLayout}, but not necessarily only there.\n\n<h3>Overview</h3>\n\nThe blocks give the flexibility to combine different content types.\n\nA block is a control that: <ul> <li>Has modes and a view associated to each mode. At rendering time, the view associated to the mode is rendered.</li> <li>Can use all view types for storing its internal control tree (XML, JS, JSON, HTML)</li> </ul>\n\nAs any UI5 view, the XML view can have a controller which automatically comes with a <code>this.oParentBlock</code> attribute (so that the controller can interact with the block). The <code>oParentBlock</code> is firstly available in <code>onParentBlockModeChange</code> method. If the controller implements the <code>onParentBlockModeChange</code> method, this method will be called with the <code>sMode</code> parameter when the view is used or reused by the block.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        metadataClass: "sap.uxap.BlockBaseMetadata",
        properties: [
          {
            name: "mode",
            type: "string",
            defaultValue: null,
            group: "Appearance",
            visibility: "public",
            description:
              "Determines the mode of the block. See {@link sap.uxap.ObjectPageSubSectionMode ObjectPageSubSectionMode}. When <code>BlockBase</code> is used inside an <code>ObjectPageLayout</code>, the <code>mode</code> property is inherited from the respective {@link sap.uxap.ObjectPageSubSection SubSection}. The <code>mode</code> property of <code>BlockBase</code> changes when the <code>mode</code> property of <code>ObjectPageSubSection</code> changes.",
            methods: ["getMode", "setMode"]
          },
          {
            name: "visible",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            description: "Determines the visibility of the block.",
            methods: ["getVisible", "setVisible"]
          },
          {
            name: "columnLayout",
            type: "sap.uxap.BlockBaseColumnLayout",
            defaultValue: "auto",
            group: "Behavior",
            visibility: "public",
            description:
              'Determines on how many columns the layout will be rendered. Allowed values are integers from 1 to 4 and "auto".',
            methods: ["getColumnLayout", "setColumnLayout"]
          },
          {
            name: "formAdjustment",
            type: "sap.uxap.BlockBaseFormAdjustment",
            defaultValue: "BlockColumns",
            group: "Behavior",
            visibility: "public",
            description:
              'Determines if the block should automatically adjust its inner forms. Allowed values are "BlockColumns" and "OneColumn" and "None". If the value is "BlockColumns", then the inner form will have as many columns as the colspan of its parent block. If the value is "OneColumn", the inner form will have exactly one column, regardless the colspan of its parent block. If the value is "None", no automatic adjustment of inner forms will be made and the form will keep its original column count.',
            methods: ["getFormAdjustment", "setFormAdjustment"]
          },
          {
            name: "showSubSectionMore",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            description:
              "Determines whether the show more button should be shown.\n\n<b>Note:</b> The property will take effect if the <code>BlockBase</code> is inside <code>ObjectPageSubSection</code> and would be ignored in case the <code>BlockBase</code> is nested inside another <code>BlockBase</code>.",
            methods: ["getShowSubSectionMore", "setShowSubSectionMore"]
          }
        ],
        aggregations: [
          {
            name: "mappings",
            singularName: "mapping",
            type: "sap.uxap.ModelMapping",
            cardinality: "0..n",
            visibility: "public",
            description: "Map external UI5 model and internal Block model",
            methods: [
              "getMappings",
              "destroyMappings",
              "insertMapping",
              "addMapping",
              "removeMapping",
              "indexOfMapping",
              "removeAllMappings"
            ]
          },
          {
            name: "_views",
            singularName: "view",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "hidden",
            description:
              "Internal aggregation that contains all views inside this Block",
            methods: [
              "get_views",
              "destroy_views",
              "insertView",
              "addView",
              "removeView",
              "indexOfView",
              "removeAll_views"
            ]
          }
        ],
        defaultAggregation: "mappings",
        associations: [
          {
            name: "selectedView",
            singularName: "selectedView",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "public",
            description:
              "The current view. Corresponds to the currently specified <code>mode</code> of the <code>sap.uxap.BlockBase<code>. Can be used as a getter for the internally created view.\n\n<b>Note:</b> As the views are created asynchronously, this association will be updated only after the view creation is completed. Applications that want to be notified when a view is created should subscribe to the <code>viewInit</code> event.",
            methods: ["getSelectedView", "setSelectedView"]
          }
        ],
        events: [
          {
            name: "viewInit",
            visibility: "public",
            since: "1.72",
            description: "Fired when an aggregated view is instantiated.",
            parameters: {
              view: {
                name: "view",
                type: "sap.ui.core.mvc.View",
                description: "The initialized view."
              }
            },
            methods: ["attachViewInit", "detachViewInit", "fireViewInit"]
          }
        ],
        designtime: "sap/uxap/designtime/BlockBase.designtime"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>BlockBase</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.",
        references: [
          "{@link topic:4527729576cb4a4888275b6935aad03a Block Base}",
          "{@link topic:2978f6064742456ebed31c5ccf4d051d Creating Blocks}"
        ]
      },
      events: [
        {
          name: "viewInit",
          visibility: "public",
          since: "1.72",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    view: {
                      name: "view",
                      type: "sap.ui.core.mvc.View",
                      optional: false,
                      description: "The initialized view."
                    }
                  }
                }
              }
            }
          ],
          description: "Fired when an aggregated view is instantiated."
        }
      ],
      methods: [
        {
          name: "addMapping",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.BlockBase",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oMapping",
              type: "sap.uxap.ModelMapping",
              optional: false,
              description: "The mapping to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some mapping to the aggregation {@link #getMappings mappings}."
        },
        {
          name: "attachViewInit",
          visibility: "public",
          since: "1.72",
          returnValue: {
            type: "sap.uxap.BlockBase",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.uxap.BlockBase</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:viewInit viewInit} event of this <code>sap.uxap.BlockBase</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.uxap.BlockBase</code> itself.\n\nFired when an aggregated view is instantiated."
        },
        {
          name: "createView",
          visibility: "protected",
          returnValue: {
            type: "*",
            description: "Promise"
          },
          parameters: [
            {
              name: "mParameter,",
              type: "*",
              optional: false,
              description: "the view metadata"
            },
            {
              name: "sMode,",
              type: "string",
              optional: false,
              description: "the mode associated with the view"
            }
          ],
          description: "Create view"
        },
        {
          name: "destroyMappings",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.BlockBase",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the mappings in the aggregation {@link #getMappings mappings}."
        },
        {
          name: "detachViewInit",
          visibility: "public",
          since: "1.72",
          returnValue: {
            type: "sap.uxap.BlockBase",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:viewInit viewInit} event of this <code>sap.uxap.BlockBase</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.uxap.BlockBase with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireViewInit",
          visibility: "protected",
          since: "1.72",
          returnValue: {
            type: "sap.uxap.BlockBase",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                view: {
                  name: "view",
                  type: "sap.ui.core.mvc.View",
                  optional: true,
                  description: "The initialized view."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:viewInit viewInit} to attached listeners."
        },
        {
          name: "getColumnLayout",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.BlockBaseColumnLayout",
            description: "Value of property <code>columnLayout</code>"
          },
          description:
            'Gets current value of property {@link #getColumnLayout columnLayout}.\n\nDetermines on how many columns the layout will be rendered. Allowed values are integers from 1 to 4 and "auto".\n\nDefault value is <code>auto</code>.'
        },
        {
          name: "getFormAdjustment",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.BlockBaseFormAdjustment",
            description: "Value of property <code>formAdjustment</code>"
          },
          description:
            'Gets current value of property {@link #getFormAdjustment formAdjustment}.\n\nDetermines if the block should automatically adjust its inner forms. Allowed values are "BlockColumns" and "OneColumn" and "None". If the value is "BlockColumns", then the inner form will have as many columns as the colspan of its parent block. If the value is "OneColumn", the inner form will have exactly one column, regardless the colspan of its parent block. If the value is "None", no automatic adjustment of inner forms will be made and the form will keep its original column count.\n\nDefault value is <code>BlockColumns</code>.'
        },
        {
          name: "getMappings",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ModelMapping[]"
          },
          description:
            "Gets content of aggregation {@link #getMappings mappings}.\n\nMap external UI5 model and internal Block model"
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description: "Returns a metadata object for class sap.uxap.BlockBase."
        },
        {
          name: "getMode",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>mode</code>"
          },
          description:
            "Gets current value of property {@link #getMode mode}.\n\nDetermines the mode of the block. See {@link sap.uxap.ObjectPageSubSectionMode ObjectPageSubSectionMode}. When <code>BlockBase</code> is used inside an <code>ObjectPageLayout</code>, the <code>mode</code> property is inherited from the respective {@link sap.uxap.ObjectPageSubSection SubSection}. The <code>mode</code> property of <code>BlockBase</code> changes when the <code>mode</code> property of <code>ObjectPageSubSection</code> changes."
        },
        {
          name: "getSelectedView",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID"
          },
          description:
            "ID of the element which is the current target of the association {@link #getSelectedView selectedView}, or <code>null</code>."
        },
        {
          name: "getShowSubSectionMore",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showSubSectionMore</code>"
          },
          description:
            "Gets current value of property {@link #getShowSubSectionMore showSubSectionMore}.\n\nDetermines whether the show more button should be shown.\n\n<b>Note:</b> The property will take effect if the <code>BlockBase</code> is inside <code>ObjectPageSubSection</code> and would be ignored in case the <code>BlockBase</code> is nested inside another <code>BlockBase</code>.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getVisible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>visible</code>"
          },
          description:
            "Gets current value of property {@link #getVisible visible}.\n\nDetermines the visibility of the block.\n\nDefault value is <code>true</code>."
        },
        {
          name: "indexOfMapping",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oMapping",
              type: "sap.uxap.ModelMapping",
              optional: false,
              description: "The mapping whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.uxap.ModelMapping</code> in the aggregation {@link #getMappings mappings}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertMapping",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.BlockBase",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oMapping",
              type: "sap.uxap.ModelMapping",
              optional: false,
              description:
                "The mapping to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the mapping should be inserted at; for a negative value of <code>iIndex</code>, the mapping is inserted at position 0; for a value greater than the current size of the aggregation, the mapping is inserted at the last position"
            }
          ],
          description:
            "Inserts a mapping into the aggregation {@link #getMappings mappings}."
        },
        {
          name: "removeAllMappings",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ModelMapping[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getMappings mappings}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeMapping",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ModelMapping",
            description: "The removed mapping or <code>null</code>"
          },
          parameters: [
            {
              name: "vMapping",
              type: "int|string|sap.uxap.ModelMapping",
              optional: false,
              description: "The mapping to remove or its index or id"
            }
          ],
          description:
            "Removes a mapping from the aggregation {@link #getMappings mappings}."
        },
        {
          name: "setColumnLayout",
          visibility: "public",
          parameters: [
            {
              name: "sLayout",
              type: "string",
              optional: false,
              description: "The column layout to apply to the control"
            }
          ],
          description: "Set the column layout for this particular block."
        },
        {
          name: "setFormAdjustment",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.BlockBase",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sFormAdjustment",
              type: "sap.uxap.BlockBaseFormAdjustment",
              optional: false,
              description: "New value for property <code>formAdjustment</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getFormAdjustment formAdjustment}.\n\nDetermines if the block should automatically adjust its inner forms. Allowed values are "BlockColumns" and "OneColumn" and "None". If the value is "BlockColumns", then the inner form will have as many columns as the colspan of its parent block. If the value is "OneColumn", the inner form will have exactly one column, regardless the colspan of its parent block. If the value is "None", no automatic adjustment of inner forms will be made and the form will keep its original column count.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>BlockColumns</code>.'
        },
        {
          name: "setMode",
          visibility: "public",
          returnValue: {
            type: "*",
            description: "this"
          },
          parameters: [
            {
              name: "sMode",
              type: "string",
              optional: false,
              description:
                "the mode to apply to the control (that should be synchronized with view declared)"
            }
          ],
          description: "Set the view mode for this particular block."
        },
        {
          name: "setSelectedView",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.BlockBase",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSelectedView",
              type: "sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description:
                "ID of an element which becomes the new target of this selectedView association; alternatively, an element instance may be given"
            }
          ],
          description:
            "Sets the associated {@link #getSelectedView selectedView}."
        },
        {
          name: "setShowSubSectionMore",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.BlockBase",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowSubSectionMore",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>showSubSectionMore</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowSubSectionMore showSubSectionMore}.\n\nDetermines whether the show more button should be shown.\n\n<b>Note:</b> The property will take effect if the <code>BlockBase</code> is inside <code>ObjectPageSubSection</code> and would be ignored in case the <code>BlockBase</code> is nested inside another <code>BlockBase</code>.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setVisible",
          visibility: "public",
          description: "Setter for the visibility of the block."
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.uxap.BlockBaseColumnLayout",
      basename: "BlockBaseColumnLayout",
      resource: "sap/uxap/library.js",
      module: "sap/uxap/library",
      export: "BlockBaseColumnLayout",
      static: true,
      visibility: "public",
      description:
        "Used by the <code>BlockBase</code> control to define how many columns should it be assigned by the <code>objectPageSubSection</code>. The allowed values can be auto (subsection assigned a number of columns based on the parent objectPageLayout subsectionLayout property), 1, 2, 3 or 4 (This may not be a valid value for some <code>subSectionLayout</code>, for example, asking for 3 columns in a 2 column layout would raise warnings).",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "datatype",
        basetype: "string",
        pattern: "^(auto|[1-4]{1})$"
      }
    },
    {
      kind: "enum",
      name: "sap.uxap.BlockBaseFormAdjustment",
      basename: "BlockBaseFormAdjustment",
      resource: "sap/uxap/library.js",
      module: "sap/uxap/library",
      export: "BlockBaseFormAdjustment",
      static: true,
      visibility: "public",
      description:
        "Used by the <code>BlockBase</code> control to define if it should do automatic adjustment of its nested forms.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "enum"
      },
      properties: [
        {
          name: "BlockColumns",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Any form within the block will be automatically adjusted to have as many columns as the colspan of its parent block."
        },
        {
          name: "None",
          visibility: "public",
          static: true,
          type: "string",
          description: "No automatic adjustment of forms."
        },
        {
          name: "OneColumn",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Any form within the block will be automatically adjusted to have only one column."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.uxap.BreadCrumbs",
      basename: "BreadCrumbs",
      resource: "sap/uxap/BreadCrumbs.js",
      module: "sap/uxap/BreadCrumbs",
      export: "",
      static: true,
      visibility: "public",
      since: "1.30",
      extends: "sap.ui.core.Control",
      description:
        "Represents the navigation steps up to the current location in the app.\n\n<h3>Overview</h3>\n\nThe <code>BreadCrumbs</code> control allows the users to quickly navigate to a previous location on the path that got them to the current location by choosing the displayed navigation steps.\n\nIt has two main modes of operation: <ul> <li>A trail of links followed by separators, when there's enough space for the control to fit on one line.</li> <li>A dropdown list with the links, when the trail of links wouldn't fit on one line.</li> </ul>",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "showCurrentLocation",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description:
              "Sets the visibility of the current/last element in the BreadCrumbs path.",
            methods: ["getShowCurrentLocation", "setShowCurrentLocation"]
          }
        ],
        aggregations: [
          {
            name: "links",
            singularName: "link",
            type: "sap.m.Link",
            cardinality: "0..n",
            visibility: "public",
            description:
              "A list of all the active link elements in the BreadCrumbs control.",
            methods: [
              "getLinks",
              "destroyLinks",
              "insertLink",
              "addLink",
              "removeLink",
              "indexOfLink",
              "removeAllLinks"
            ]
          },
          {
            name: "currentLocation",
            singularName: "currentLocation",
            type: "sap.m.Text",
            cardinality: "0..1",
            visibility: "public",
            description: "The current/last element in the BreadCrumbs path.",
            methods: [
              "getCurrentLocation",
              "destroyCurrentLocation",
              "setCurrentLocation"
            ]
          },
          {
            name: "_tubeIcon",
            singularName: "_tubeIcon",
            type: "sap.ui.core.Icon",
            cardinality: "0..1",
            visibility: "hidden",
            description:
              "An icon that is used as a separator after each link in the standard mode.",
            methods: ["get_tubeIcon", "destroy_tubeIcon", "set_tubeIcon"]
          },
          {
            name: "_overflowSelect",
            singularName: "_overflowSelect",
            type: "sap.m.Select",
            cardinality: "0..1",
            visibility: "hidden",
            description:
              "A select control which is used to display the BreadCrumbs content on smaller mobile devices or when there's not enough space for the control to fit on one line.",
            methods: [
              "get_overflowSelect",
              "destroy_overflowSelect",
              "set_overflowSelect"
            ]
          }
        ],
        defaultAggregation: "links"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>BreadCrumbs</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addLink",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.BreadCrumbs",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oLink",
              type: "sap.m.Link",
              optional: false,
              description: "The link to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some link to the aggregation {@link #getLinks links}."
        },
        {
          name: "destroyCurrentLocation",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.BreadCrumbs",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the currentLocation in the aggregation {@link #getCurrentLocation currentLocation}."
        },
        {
          name: "destroyLinks",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.BreadCrumbs",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the links in the aggregation {@link #getLinks links}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.uxap.BreadCrumbs with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getCurrentLocation",
          visibility: "public",
          returnValue: {
            type: "sap.m.Text"
          },
          description:
            "Gets content of aggregation {@link #getCurrentLocation currentLocation}.\n\nThe current/last element in the BreadCrumbs path."
        },
        {
          name: "getLinks",
          visibility: "public",
          returnValue: {
            type: "sap.m.Link[]"
          },
          description:
            "Gets content of aggregation {@link #getLinks links}.\n\nA list of all the active link elements in the BreadCrumbs control."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.uxap.BreadCrumbs."
        },
        {
          name: "getShowCurrentLocation",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showCurrentLocation</code>"
          },
          description:
            "Gets current value of property {@link #getShowCurrentLocation showCurrentLocation}.\n\nSets the visibility of the current/last element in the BreadCrumbs path.\n\nDefault value is <code>true</code>."
        },
        {
          name: "indexOfLink",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oLink",
              type: "sap.m.Link",
              optional: false,
              description: "The link whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.m.Link</code> in the aggregation {@link #getLinks links}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertLink",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.BreadCrumbs",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oLink",
              type: "sap.m.Link",
              optional: false,
              description: "The link to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the link should be inserted at; for a negative value of <code>iIndex</code>, the link is inserted at position 0; for a value greater than the current size of the aggregation, the link is inserted at the last position"
            }
          ],
          description:
            "Inserts a link into the aggregation {@link #getLinks links}."
        },
        {
          name: "removeAllLinks",
          visibility: "public",
          returnValue: {
            type: "sap.m.Link[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getLinks links}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeLink",
          visibility: "public",
          returnValue: {
            type: "sap.m.Link",
            description: "The removed link or <code>null</code>"
          },
          parameters: [
            {
              name: "vLink",
              type: "int|string|sap.m.Link",
              optional: false,
              description: "The link to remove or its index or id"
            }
          ],
          description:
            "Removes a link from the aggregation {@link #getLinks links}."
        },
        {
          name: "setCurrentLocation",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.BreadCrumbs",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oCurrentLocation",
              type: "sap.m.Text",
              optional: false,
              description: "The currentLocation to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getCurrentLocation currentLocation}."
        },
        {
          name: "setShowCurrentLocation",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.BreadCrumbs",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowCurrentLocation",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>showCurrentLocation</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowCurrentLocation showCurrentLocation}.\n\nSets the visibility of the current/last element in the BreadCrumbs path.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.uxap.HierarchicalSelect",
      basename: "HierarchicalSelect",
      resource: "sap/uxap/HierarchicalSelect.js",
      module: "sap/uxap/HierarchicalSelect",
      export: "",
      static: true,
      visibility: "public",
      since: "1.26",
      extends: "sap.m.Select",
      description:
        "A select that displays items on a hierarchy of 2 levels.\n\nIf a provided item has a custom data named <code>secondLevel</code>, then it will be displayed as a second level, otherwise it would be displayed as a first level.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "upperCase",
            type: "boolean",
            defaultValue: false,
            group: "Appearance",
            visibility: "public",
            description:
              "Determines whether the HierarchicalSelect items are displayed in upper case.",
            methods: ["getUpperCase", "setUpperCase"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>HierarchicalSelect</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.uxap.HierarchicalSelect with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Select.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.uxap.HierarchicalSelect."
        },
        {
          name: "getUpperCase",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>upperCase</code>"
          },
          description:
            "Gets current value of property {@link #getUpperCase upperCase}.\n\nDetermines whether the HierarchicalSelect items are displayed in upper case.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setUpperCase",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.HierarchicalSelect",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bUpperCase",
              type: "boolean",
              optional: false,
              description: "New value for property <code>upperCase</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getUpperCase upperCase}.\n\nDetermines whether the HierarchicalSelect items are displayed in upper case.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        }
      ]
    },
    {
      kind: "interface",
      name: "sap.uxap.IHeaderContent",
      basename: "IHeaderContent",
      resource: "sap/uxap/library.js",
      module: "sap/uxap/library",
      static: true,
      visibility: "public",
      since: "1.52",
      description:
        "Interface for controls that are eligible for the <code>headerContent</code> aggregation of the <code>{@link sap.uxap.ObjectPageLayout}</code>.\n\nControls that implement this interface: <ul> <li><code>{@link sap.uxap.ObjectPageHeaderContent}</code> - <code>ObjectPageLayout</code>'s classic header content</code></li> <li><code>{@link sap.uxap.ObjectPageDynamicHeaderContent}</code> - <code>ObjectPageLayout</code>'s dynamic header content</code></li> </ul>\n\nFor more information on the types of header available for the <code>{@link sap.uxap.ObjectPageLayout ObjectPageLayout}</code>, see {@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}.\n\nFor details regarding the differences and similarities between the available headers, see {@link topic:9c9d94fd28284539a9a5a57e9caf82a8 Object Page Headers Comparison}.",
      references: [
        "{@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}"
      ],
      "ui5-metamodel": true
    },
    {
      kind: "interface",
      name: "sap.uxap.IHeaderTitle",
      basename: "IHeaderTitle",
      resource: "sap/uxap/library.js",
      module: "sap/uxap/library",
      static: true,
      visibility: "public",
      since: "1.52",
      description:
        "Interface for controls that are eligible for the <code>headerTitle</code> aggregation of the <code>{@link sap.uxap.ObjectPageLayout}</code>.\n\nControls that implement this interface: <ul> <li><code>{@link sap.uxap.ObjectPageHeader}</code> - <code>ObjectPageLayout</code>'s classic header</code></li> <li><code>{@link sap.uxap.ObjectPageDynamicHeaderTitle}</code> - <code>ObjectPageLayout</code>'s dynamic header</code></li> </ul>\n\nFor more information on the types of header available for the <code>{@link sap.uxap.ObjectPageLayout ObjectPageLayout}</code>, see {@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}.\n\nFor details regarding the differences and similarities between the available headers, see {@link topic:9c9d94fd28284539a9a5a57e9caf82a8 Object Page Headers Comparison}.",
      references: [
        "{@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}"
      ],
      "ui5-metamodel": true
    },
    {
      kind: "enum",
      name: "sap.uxap.Importance",
      basename: "Importance",
      resource: "sap/uxap/library.js",
      module: "sap/uxap/library",
      export: "Importance",
      static: true,
      visibility: "public",
      since: "1.32.0",
      description:
        "Used by the <code>ObjectSectionBase</code> control to define the importance of the content contained in it.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "enum"
      },
      properties: [
        {
          name: "High",
          visibility: "public",
          static: true,
          type: "string",
          description: "High importance of the content."
        },
        {
          name: "Low",
          visibility: "public",
          static: true,
          type: "string",
          description: "Low importance of the content."
        },
        {
          name: "Medium",
          visibility: "public",
          static: true,
          type: "string",
          description: "Medium importance of the content."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.uxap.ModelMapping",
      basename: "ModelMapping",
      resource: "sap/uxap/ModelMapping.js",
      module: "sap/uxap/ModelMapping",
      export: "",
      static: true,
      visibility: "public",
      since: "1.26",
      extends: "sap.ui.core.Element",
      description:
        "Defines the entity that will be passed to the {@link sap.uxap.ObjectPageLayout}.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "externalModelName",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Determines the external model name.",
            methods: ["getExternalModelName", "setExternalModelName"]
          },
          {
            name: "internalModelName",
            type: "string",
            defaultValue: "Model",
            group: "Misc",
            visibility: "public",
            description: "Determines the internal model name.",
            methods: ["getInternalModelName", "setInternalModelName"]
          },
          {
            name: "externalPath",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Determines the external path.",
            methods: ["getExternalPath", "setExternalPath"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>ModelMapping</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.uxap.ModelMapping with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}."
        },
        {
          name: "getExternalModelName",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>externalModelName</code>"
          },
          description:
            "Gets current value of property {@link #getExternalModelName externalModelName}.\n\nDetermines the external model name."
        },
        {
          name: "getExternalPath",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>externalPath</code>"
          },
          description:
            "Gets current value of property {@link #getExternalPath externalPath}.\n\nDetermines the external path."
        },
        {
          name: "getInternalModelName",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>internalModelName</code>"
          },
          description:
            "Gets current value of property {@link #getInternalModelName internalModelName}.\n\nDetermines the internal model name.\n\nDefault value is <code>Model</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.uxap.ModelMapping."
        },
        {
          name: "setExternalModelName",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ModelMapping",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sExternalModelName",
              type: "string",
              optional: false,
              description:
                "New value for property <code>externalModelName</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getExternalModelName externalModelName}.\n\nDetermines the external model name.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setExternalPath",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ModelMapping",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sExternalPath",
              type: "string",
              optional: false,
              description: "New value for property <code>externalPath</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getExternalPath externalPath}.\n\nDetermines the external path.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setInternalModelName",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ModelMapping",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sInternalModelName",
              type: "string",
              optional: false,
              description:
                "New value for property <code>internalModelName</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getInternalModelName internalModelName}.\n\nDetermines the internal model name.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Model</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.uxap.ObjectPageAccessibleLandmarkInfo",
      basename: "ObjectPageAccessibleLandmarkInfo",
      resource: "sap/uxap/ObjectPageAccessibleLandmarkInfo.js",
      module: "sap/uxap/ObjectPageAccessibleLandmarkInfo",
      export: "",
      static: true,
      visibility: "public",
      since: "1.61",
      extends: "sap.ui.core.Element",
      description:
        "Settings for accessible landmarks which can be applied to the container elements of a <code>sap.uxap.ObjectPageLayout</code> control. These landmarks are used by assistive technologies (such as screenreaders) to provide a meaningful page overview.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "rootRole",
            type: "sap.ui.core.AccessibleLandmarkRole",
            defaultValue: "Main",
            group: "Misc",
            visibility: "public",
            description:
              "Landmark role of the root container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.",
            methods: ["getRootRole", "setRootRole"]
          },
          {
            name: "rootLabel",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "Texts which describe the landmark of the root container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.",
            methods: ["getRootLabel", "setRootLabel"]
          },
          {
            name: "contentRole",
            type: "sap.ui.core.AccessibleLandmarkRole",
            defaultValue: "None",
            group: "Misc",
            visibility: "public",
            description:
              "Landmark role of the content container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.",
            methods: ["getContentRole", "setContentRole"]
          },
          {
            name: "contentLabel",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "Texts which describe the landmark of the content container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.",
            methods: ["getContentLabel", "setContentLabel"]
          },
          {
            name: "navigationRole",
            type: "sap.ui.core.AccessibleLandmarkRole",
            defaultValue: "Navigation",
            group: "Misc",
            visibility: "public",
            description:
              "Landmark role of the navigation container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.",
            methods: ["getNavigationRole", "setNavigationRole"]
          },
          {
            name: "navigationLabel",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "Texts which describe the landmark of the navigation container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.",
            methods: ["getNavigationLabel", "setNavigationLabel"]
          },
          {
            name: "headerRole",
            type: "sap.ui.core.AccessibleLandmarkRole",
            defaultValue: "Banner",
            group: "Misc",
            visibility: "public",
            description:
              "Landmark role of the header container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.",
            methods: ["getHeaderRole", "setHeaderRole"]
          },
          {
            name: "headerLabel",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "Texts which describe the landmark of the header container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.",
            methods: ["getHeaderLabel", "setHeaderLabel"]
          },
          {
            name: "footerRole",
            type: "sap.ui.core.AccessibleLandmarkRole",
            defaultValue: "Region",
            group: "Misc",
            visibility: "public",
            description:
              "Landmark role of the footer container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.",
            methods: ["getFooterRole", "setFooterRole"]
          },
          {
            name: "footerLabel",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "Texts which describe the landmark of the header container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.",
            methods: ["getFooterLabel", "setFooterLabel"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new element, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new element"
          }
        ],
        description:
          "Constructor for a new <code>sap.uxap.ObjectPageAccessibleLandmarkInfo</code> element.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.uxap.ObjectPageAccessibleLandmarkInfo with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}."
        },
        {
          name: "getContentLabel",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>contentLabel</code>"
          },
          description:
            "Gets current value of property {@link #getContentLabel contentLabel}.\n\nTexts which describe the landmark of the content container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set."
        },
        {
          name: "getContentRole",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.AccessibleLandmarkRole",
            description: "Value of property <code>contentRole</code>"
          },
          description:
            "Gets current value of property {@link #getContentRole contentRole}.\n\nLandmark role of the content container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.\n\nDefault value is <code>None</code>."
        },
        {
          name: "getFooterLabel",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>footerLabel</code>"
          },
          description:
            "Gets current value of property {@link #getFooterLabel footerLabel}.\n\nTexts which describe the landmark of the header container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set."
        },
        {
          name: "getFooterRole",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.AccessibleLandmarkRole",
            description: "Value of property <code>footerRole</code>"
          },
          description:
            "Gets current value of property {@link #getFooterRole footerRole}.\n\nLandmark role of the footer container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.\n\nDefault value is <code>Region</code>."
        },
        {
          name: "getHeaderLabel",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>headerLabel</code>"
          },
          description:
            "Gets current value of property {@link #getHeaderLabel headerLabel}.\n\nTexts which describe the landmark of the header container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set."
        },
        {
          name: "getHeaderRole",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.AccessibleLandmarkRole",
            description: "Value of property <code>headerRole</code>"
          },
          description:
            "Gets current value of property {@link #getHeaderRole headerRole}.\n\nLandmark role of the header container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.\n\nDefault value is <code>Banner</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.uxap.ObjectPageAccessibleLandmarkInfo."
        },
        {
          name: "getNavigationLabel",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>navigationLabel</code>"
          },
          description:
            "Gets current value of property {@link #getNavigationLabel navigationLabel}.\n\nTexts which describe the landmark of the navigation container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set."
        },
        {
          name: "getNavigationRole",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.AccessibleLandmarkRole",
            description: "Value of property <code>navigationRole</code>"
          },
          description:
            "Gets current value of property {@link #getNavigationRole navigationRole}.\n\nLandmark role of the navigation container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.\n\nDefault value is <code>Navigation</code>."
        },
        {
          name: "getRootLabel",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>rootLabel</code>"
          },
          description:
            "Gets current value of property {@link #getRootLabel rootLabel}.\n\nTexts which describe the landmark of the root container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set."
        },
        {
          name: "getRootRole",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.AccessibleLandmarkRole",
            description: "Value of property <code>rootRole</code>"
          },
          description:
            "Gets current value of property {@link #getRootRole rootRole}.\n\nLandmark role of the root container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.\n\nDefault value is <code>Main</code>."
        },
        {
          name: "setContentLabel",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageAccessibleLandmarkInfo",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sContentLabel",
              type: "string",
              optional: false,
              description: "New value for property <code>contentLabel</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getContentLabel contentLabel}.\n\nTexts which describe the landmark of the content container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setContentRole",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageAccessibleLandmarkInfo",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sContentRole",
              type: "sap.ui.core.AccessibleLandmarkRole",
              optional: false,
              description: "New value for property <code>contentRole</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getContentRole contentRole}.\n\nLandmark role of the content container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>None</code>."
        },
        {
          name: "setFooterLabel",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageAccessibleLandmarkInfo",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sFooterLabel",
              type: "string",
              optional: false,
              description: "New value for property <code>footerLabel</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFooterLabel footerLabel}.\n\nTexts which describe the landmark of the header container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setFooterRole",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageAccessibleLandmarkInfo",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sFooterRole",
              type: "sap.ui.core.AccessibleLandmarkRole",
              optional: false,
              description: "New value for property <code>footerRole</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFooterRole footerRole}.\n\nLandmark role of the footer container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Region</code>."
        },
        {
          name: "setHeaderLabel",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageAccessibleLandmarkInfo",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sHeaderLabel",
              type: "string",
              optional: false,
              description: "New value for property <code>headerLabel</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHeaderLabel headerLabel}.\n\nTexts which describe the landmark of the header container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setHeaderRole",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageAccessibleLandmarkInfo",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sHeaderRole",
              type: "sap.ui.core.AccessibleLandmarkRole",
              optional: false,
              description: "New value for property <code>headerRole</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHeaderRole headerRole}.\n\nLandmark role of the header container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Banner</code>."
        },
        {
          name: "setNavigationLabel",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageAccessibleLandmarkInfo",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sNavigationLabel",
              type: "string",
              optional: false,
              description: "New value for property <code>navigationLabel</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getNavigationLabel navigationLabel}.\n\nTexts which describe the landmark of the navigation container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setNavigationRole",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageAccessibleLandmarkInfo",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sNavigationRole",
              type: "sap.ui.core.AccessibleLandmarkRole",
              optional: false,
              description: "New value for property <code>navigationRole</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getNavigationRole navigationRole}.\n\nLandmark role of the navigation container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Navigation</code>."
        },
        {
          name: "setRootLabel",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageAccessibleLandmarkInfo",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sRootLabel",
              type: "string",
              optional: false,
              description: "New value for property <code>rootLabel</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getRootLabel rootLabel}.\n\nTexts which describe the landmark of the root container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf not set (and a landmark different than <code>sap.ui.core.AccessibleLandmarkRole.None</code> is defined), no label is set.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setRootRole",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageAccessibleLandmarkInfo",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sRootRole",
              type: "sap.ui.core.AccessibleLandmarkRole",
              optional: false,
              description: "New value for property <code>rootRole</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getRootRole rootRole}.\n\nLandmark role of the root container of the corresponding <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf set to <code>sap.ui.core.AccessibleLandmarkRole.None</code>, no landmark will be added to the container.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Main</code>."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.uxap.ObjectPageConfigurationMode",
      basename: "ObjectPageConfigurationMode",
      resource: "sap/uxap/library.js",
      module: "sap/uxap/library",
      export: "ObjectPageConfigurationMode",
      static: true,
      visibility: "public",
      description:
        "Used by the <code>sap.uxap.component.Component</code> how to initialize the <code>ObjectPageLayout</code> sections and subsections.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "enum"
      },
      properties: [
        {
          name: "JsonModel",
          visibility: "public",
          static: true,
          type: "string",
          description: "Determines the JSON model."
        },
        {
          name: "JsonURL",
          visibility: "public",
          static: true,
          type: "string",
          description: "Determines the JSON URL."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.uxap.ObjectPageDynamicHeaderContent",
      basename: "ObjectPageDynamicHeaderContent",
      resource: "sap/uxap/ObjectPageDynamicHeaderContent.js",
      module: "sap/uxap/ObjectPageDynamicHeaderContent",
      export: "",
      static: true,
      visibility: "public",
      since: "1.52",
      extends: "sap.f.DynamicPageHeader",
      implements: ["sap.uxap.IHeaderContent"],
      description:
        "Header content for the dynamic header of the {@link sap.uxap.ObjectPageLayout}.\n\n<h3>Overview</h3>\n\nThe <code>ObjectPageDynamicHeaderContent</code> represents the movable part of the <code>ObjectPageLayout</code>'s dynamic header. It can contain any control and scrolls along with the content of the page until it disappears (collapsed header). When scrolled back to the top it becomes visible again (expanded header). It contains all the additional information of the object.\n\nDocumentation links: <ul> <li>{@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}</li> <li>{@link topic:6e340c119ddd4c778b315f65a0432420 Object Page Dynamic Header}</li> </ul>",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>ObjectPageDynamicHeaderContent</code>."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.uxap.ObjectPageDynamicHeaderContent with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.DynamicPageHeader.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.uxap.ObjectPageDynamicHeaderContent."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.uxap.ObjectPageDynamicHeaderTitle",
      basename: "ObjectPageDynamicHeaderTitle",
      resource: "sap/uxap/ObjectPageDynamicHeaderTitle.js",
      module: "sap/uxap/ObjectPageDynamicHeaderTitle",
      export: "",
      static: true,
      visibility: "public",
      since: "1.52",
      extends: "sap.f.DynamicPageTitle",
      implements: ["sap.uxap.IHeaderTitle"],
      description:
        "Represents the static part (header title) of the dynamic header of the {@link sap.uxap.ObjectPageLayout}.\n\n<h3>Overview</h3>\n\nThe <code>ObjectPageDynamicHeaderTitle</code> is used to represent the most important details of the displayed business object, such as the object title and actions that the user can perform.\n\n<b>Note:</b> The <code>ObjectPageDynamicHeaderTitle</code> is meant to be used inside the <code>ObjectPageLayout</code> control. Any other usage is not supported and can lead to unexpected behavior.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>ObjectPageDynamicHeaderTitle</code>.",
        references: [
          "{@link topic:6e340c119ddd4c778b315f65a0432420 Object Page Dynamic Header}",
          "{@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}",
          "{@link topic:9c9d94fd28284539a9a5a57e9caf82a8 Object Page Headers Comparison}"
        ]
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.uxap.ObjectPageDynamicHeaderTitle with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.DynamicPageTitle.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.uxap.ObjectPageDynamicHeaderTitle."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.uxap.ObjectPageHeader",
      basename: "ObjectPageHeader",
      resource: "sap/uxap/ObjectPageHeader.js",
      module: "sap/uxap/ObjectPageHeader",
      export: "",
      static: true,
      visibility: "public",
      since: "1.26",
      extends: "sap.ui.core.Control",
      implements: ["sap.uxap.IHeaderTitle"],
      description:
        "Represents the static part (header title) of the classic header of the {@link sap.uxap.ObjectPageLayout}.\n\n<h3>Overview</h3>\n\nThe <code>ObjectPageHeader</code> is used to display the basic information about a business object, such as title/description/picture, as well as a list of common actions.\n\n<b>Note:</b> The <code>ObjectPageHeader</code> is meant to be used inside the <code>ObjectPageLayout</code> control. Any other usage is not supported and can lead to unexpected behavior.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "objectImageURI",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              "The URL of the image, representing the business object",
            methods: ["getObjectImageURI", "setObjectImageURI"]
          },
          {
            name: "objectImageAlt",
            type: "string",
            defaultValue: "",
            group: "Misc",
            visibility: "public",
            description:
              "The text to be used for the Alt and Tooltip attribute of the image, supplied via the objectImageURI property",
            methods: ["getObjectImageAlt", "setObjectImageAlt"]
          },
          {
            name: "objectImageDensityAware",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "The value of densityAware for the image, supplied via the objectImageURI property. See sap.m.Image for more details on densityAware.",
            methods: [
              "getObjectImageDensityAware",
              "setObjectImageDensityAware"
            ]
          },
          {
            name: "objectTitle",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "The title of the object",
            methods: ["getObjectTitle", "setObjectTitle"]
          },
          {
            name: "objectSubtitle",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "The description of the object",
            methods: ["getObjectSubtitle", "setObjectSubtitle"]
          },
          {
            name: "objectImageShape",
            type: "sap.m.AvatarShape",
            defaultValue: "Square",
            group: "Appearance",
            visibility: "public",
            description:
              "Determines whether the picture should be displayed in a square or with a circle-shaped mask.",
            methods: ["getObjectImageShape", "setObjectImageShape"]
          },
          {
            name: "objectImageBackgroundColor",
            type: "sap.m.AvatarColor",
            defaultValue: "Accent6",
            group: "Appearance",
            visibility: "public",
            since: "1.73",
            description:
              "Determines the background color of the image placeholder or icon if valid icon URI is provided.",
            methods: [
              "getObjectImageBackgroundColor",
              "setObjectImageBackgroundColor"
            ]
          },
          {
            name: "isObjectIconAlwaysVisible",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "Determines whether the icon should always be visible or visible only when the header is snapped.",
            methods: [
              "getIsObjectIconAlwaysVisible",
              "setIsObjectIconAlwaysVisible"
            ]
          },
          {
            name: "isObjectTitleAlwaysVisible",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Determines whether the title should always be visible or visible only when the header is snapped.",
            methods: [
              "getIsObjectTitleAlwaysVisible",
              "setIsObjectTitleAlwaysVisible"
            ]
          },
          {
            name: "isObjectSubtitleAlwaysVisible",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Determines whether the subtitle should always be visible or visible only when the header is snapped.",
            methods: [
              "getIsObjectSubtitleAlwaysVisible",
              "setIsObjectSubtitleAlwaysVisible"
            ]
          },
          {
            name: "isActionAreaAlwaysVisible",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Determines whether the action buttons should always be visible or visible only when the header is snapped.",
            methods: [
              "getIsActionAreaAlwaysVisible",
              "setIsActionAreaAlwaysVisible"
            ]
          },
          {
            name: "headerDesign",
            type: "sap.uxap.ObjectPageHeaderDesign",
            defaultValue: "Light",
            group: "Misc",
            visibility: "public",
            description:
              "Determines the design of the header - Light or Dark. <b>Note: </b>This property is deprecated. It will continue to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.",
            deprecated: {
              since: "1.40.1"
            },
            methods: ["getHeaderDesign", "setHeaderDesign"]
          },
          {
            name: "showTitleSelector",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "When set to true, the selector arrow icon/image is shown and can be pressed.",
            methods: ["getShowTitleSelector", "setShowTitleSelector"]
          },
          {
            name: "markFavorite",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "Set the favorite state to true or false. The showMarkers property must be true for this property to take effect.",
            methods: ["getMarkFavorite", "setMarkFavorite"]
          },
          {
            name: "markFlagged",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "Set the flagged state to true or false. The showMarkers property must be true for this property to take effect.",
            methods: ["getMarkFlagged", "setMarkFlagged"]
          },
          {
            name: "showMarkers",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "Indicates if object page header title supports showing markers such as flagged and favorite.",
            methods: ["getShowMarkers", "setShowMarkers"]
          },
          {
            name: "markLocked",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description: "Set the locked state of the objectPageHeader.",
            methods: ["getMarkLocked", "setMarkLocked"]
          },
          {
            name: "showPlaceholder",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "Enables support of a placeholder image in case no image is specified or the URL of the provided image is invalid.",
            methods: ["getShowPlaceholder", "setShowPlaceholder"]
          },
          {
            name: "markChanges",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            since: "1.34.0",
            description:
              "Marks that there are unsaved changes in the objectPageHeader. The markChanges state cannot be used together with the markLocked state. If both are set to true, only the locked state will be displayed.",
            methods: ["getMarkChanges", "setMarkChanges"]
          }
        ],
        aggregations: [
          {
            name: "_breadCrumbs",
            singularName: "_breadCrumb",
            type: "sap.m.Breadcrumbs",
            cardinality: "0..1",
            visibility: "hidden",
            description:
              "Internal aggregation for the legacy breadCrumbsLinks.",
            methods: [
              "get_breadCrumbs",
              "destroy_breadCrumbs",
              "set_breadCrumbs"
            ]
          },
          {
            name: "breadcrumbs",
            singularName: "breadcrumb",
            type: "sap.m.Breadcrumbs",
            cardinality: "0..1",
            visibility: "public",
            since: "1.50",
            description:
              "The breadcrumbs displayed in the <code>ObjectPageHeader</code>. If this aggregation is set, the <code>breadCrumbsLinks</code> aggregation is omitted.",
            methods: ["getBreadcrumbs", "destroyBreadcrumbs", "setBreadcrumbs"]
          },
          {
            name: "breadCrumbsLinks",
            singularName: "breadCrumbLink",
            type: "sap.m.Link",
            cardinality: "0..n",
            visibility: "public",
            description:
              "A list of all the active link elements in the BreadCrumbs control.",
            deprecated: {
              since: "1.50",
              text: "use the <code>breadcrumbs</code> aggregation instead."
            },
            methods: [
              "getBreadCrumbsLinks",
              "destroyBreadCrumbsLinks",
              "insertBreadCrumbLink",
              "addBreadCrumbLink",
              "removeBreadCrumbLink",
              "indexOfBreadCrumbLink",
              "removeAllBreadCrumbsLinks"
            ]
          },
          {
            name: "_overflowButton",
            singularName: "_overflowButton",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "hidden",
            description:
              "Internal aggregation for the overflow button in the header.",
            methods: [
              "get_overflowButton",
              "destroy_overflowButton",
              "set_overflowButton"
            ]
          },
          {
            name: "_expandButton",
            singularName: "_expandButton",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "hidden",
            description: "Internal aggregation for the expand header button.",
            methods: [
              "get_expandButton",
              "destroy_expandButton",
              "set_expandButton"
            ]
          },
          {
            name: "_objectImage",
            singularName: "_objectImage",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "hidden",
            description: "Icon for the identifier line.",
            methods: [
              "get_objectImage",
              "destroy_objectImage",
              "set_objectImage"
            ]
          },
          {
            name: "_placeholder",
            singularName: "_placeholder",
            type: "sap.m.Avatar",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_placeholder",
              "destroy_placeholder",
              "set_placeholder"
            ]
          },
          {
            name: "_lockIconCont",
            singularName: "_lockIconCont",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_lockIconCont",
              "destroy_lockIconCont",
              "set_lockIconCont"
            ]
          },
          {
            name: "_lockIcon",
            singularName: "_lockIcon",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "hidden",
            methods: ["get_lockIcon", "destroy_lockIcon", "set_lockIcon"]
          },
          {
            name: "_titleArrowIconCont",
            singularName: "_titleArrowIconCont",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_titleArrowIconCont",
              "destroy_titleArrowIconCont",
              "set_titleArrowIconCont"
            ]
          },
          {
            name: "_titleArrowIcon",
            singularName: "_titleArrowIcon",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_titleArrowIcon",
              "destroy_titleArrowIcon",
              "set_titleArrowIcon"
            ]
          },
          {
            name: "_favIcon",
            singularName: "_favIcon",
            type: "sap.ui.core.Icon",
            cardinality: "0..1",
            visibility: "hidden",
            methods: ["get_favIcon", "destroy_favIcon", "set_favIcon"]
          },
          {
            name: "_flagIcon",
            singularName: "_flagIcon",
            type: "sap.ui.core.Icon",
            cardinality: "0..1",
            visibility: "hidden",
            methods: ["get_flagIcon", "destroy_flagIcon", "set_flagIcon"]
          },
          {
            name: "_overflowActionSheet",
            singularName: "_overflowActionSheet",
            type: "sap.m.ActionSheet",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_overflowActionSheet",
              "destroy_overflowActionSheet",
              "set_overflowActionSheet"
            ]
          },
          {
            name: "_changesIconCont",
            singularName: "_changesIconCont",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_changesIconCont",
              "destroy_changesIconCont",
              "set_changesIconCont"
            ]
          },
          {
            name: "_changesIcon",
            singularName: "_changesIcon",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_changesIcon",
              "destroy_changesIcon",
              "set_changesIcon"
            ]
          },
          {
            name: "_sideContentBtn",
            singularName: "_sideContentBtn",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_sideContentBtn",
              "destroy_sideContentBtn",
              "set_sideContentBtn"
            ]
          },
          {
            name: "navigationBar",
            singularName: "navigationBar",
            type: "sap.m.Bar",
            cardinality: "0..1",
            visibility: "public",
            description:
              "An instance of sap.m.Bar to be embedded in the header",
            methods: [
              "getNavigationBar",
              "destroyNavigationBar",
              "setNavigationBar"
            ]
          },
          {
            name: "actions",
            singularName: "action",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "List of actions that will be displayed in the header. You can use ObjectPageHeaderActionButton controls to achieve a different visual representation of the action buttons in the action bar and the action sheet (overflow menu). You can use ObjectPageHeaderLayoutData to display a visual separator.\n\n<b>Note:</b> If an action is placed inside the overflow area, an additional <code>bInOverflow</code> parameter is passed along with the <code>press</code> event to indicate that a popup shouldn't be opened from that action and a dialog should be used instead.",
            methods: [
              "getActions",
              "destroyActions",
              "insertAction",
              "addAction",
              "removeAction",
              "indexOfAction",
              "removeAllActions"
            ]
          },
          {
            name: "sideContentButton",
            singularName: "sideContentButton",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "public",
            since: "1.38.0",
            description:
              "A button that is used for opening the side content of the page or some additional content.",
            methods: [
              "getSideContentButton",
              "destroySideContentButton",
              "setSideContentButton"
            ]
          },
          {
            name: "titleSelectorTooltip",
            singularName: "titleSelectorTooltip",
            type: "sap.ui.core.TooltipBase",
            altTypes: ["string"],
            cardinality: "0..1",
            visibility: "public",
            since: "1.56",
            description:
              'A custom tooltip for the title selector button.\n\nThe custom tooltip will be visible if the <code>showTitleSelector</code> property is set to <code>true</code>.\n\n<b>Note:</b> If the aggregation is destroyed or set to invalid value, the default tooltip will be set. The default tooltip text is "Related options".',
            methods: [
              "getTitleSelectorTooltip",
              "destroyTitleSelectorTooltip",
              "setTitleSelectorTooltip"
            ]
          }
        ],
        defaultAggregation: "actions",
        events: [
          {
            name: "titleSelectorPress",
            visibility: "public",
            description:
              "The event is fired when the objectPage header title selector (down-arrow) is pressed",
            parameters: {
              domRef: {
                name: "domRef",
                type: "string",
                description:
                  "DOM reference of the title item's icon to be used for positioning."
              }
            },
            methods: [
              "attachTitleSelectorPress",
              "detachTitleSelectorPress",
              "fireTitleSelectorPress"
            ]
          },
          {
            name: "markLockedPress",
            visibility: "public",
            description: "The event is fired when the Locked button is pressed",
            parameters: {
              domRef: {
                name: "domRef",
                type: "string",
                description:
                  "DOM reference of the lock item's icon to be used for positioning."
              }
            },
            methods: [
              "attachMarkLockedPress",
              "detachMarkLockedPress",
              "fireMarkLockedPress"
            ]
          },
          {
            name: "markChangesPress",
            visibility: "public",
            description:
              "The event is fired when the unsaved changes button is pressed",
            parameters: {
              domRef: {
                name: "domRef",
                type: "string",
                since: "1.34.0",
                description:
                  "DOM reference of the changed item's icon to be used for positioning."
              }
            },
            methods: [
              "attachMarkChangesPress",
              "detachMarkChangesPress",
              "fireMarkChangesPress"
            ]
          }
        ],
        designtime: "sap/uxap/designtime/ObjectPageHeader.designtime"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>ObjectPageHeader</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.",
        references: [
          "{@link topic:0fecbce45e39406aa939bd25e89823f4 Object Page Classic Header}",
          "{@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}",
          "{@link topic:9c9d94fd28284539a9a5a57e9caf82a8 Object Page Headers Comparison}",
          "{@link fiori:https://experience.sap.com/fiori-design-web/snapping-header/ Object Page Header}",
          "{@link fiori:https://experience.sap.com/fiori-design-web/object-page/ UX Guidelines: Object Page}"
        ]
      },
      events: [
        {
          name: "markChangesPress",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    domRef: {
                      name: "domRef",
                      type: "string",
                      optional: false,
                      description:
                        "DOM reference of the changed item's icon to be used for positioning."
                    }
                  }
                }
              }
            }
          ],
          description:
            "The event is fired when the unsaved changes button is pressed"
        },
        {
          name: "markLockedPress",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    domRef: {
                      name: "domRef",
                      type: "string",
                      optional: false,
                      description:
                        "DOM reference of the lock item's icon to be used for positioning."
                    }
                  }
                }
              }
            }
          ],
          description: "The event is fired when the Locked button is pressed"
        },
        {
          name: "titleSelectorPress",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    domRef: {
                      name: "domRef",
                      type: "string",
                      optional: false,
                      description:
                        "DOM reference of the title item's icon to be used for positioning."
                    }
                  }
                }
              }
            }
          ],
          description:
            "The event is fired when the objectPage header title selector (down-arrow) is pressed"
        }
      ],
      methods: [
        {
          name: "addAction",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oAction",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The action to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some action to the aggregation {@link #getActions actions}."
        },
        {
          name: "addBreadCrumbLink",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oBreadCrumbLink",
              type: "sap.m.Link",
              optional: false,
              description:
                "The breadCrumbLink to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some breadCrumbLink to the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.",
          deprecated: {
            since: "1.50",
            text: "use the <code>breadcrumbs</code> aggregation instead."
          }
        },
        {
          name: "attachMarkChangesPress",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageHeader</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:markChangesPress markChangesPress} event of this <code>sap.uxap.ObjectPageHeader</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.uxap.ObjectPageHeader</code> itself.\n\nThe event is fired when the unsaved changes button is pressed"
        },
        {
          name: "attachMarkLockedPress",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageHeader</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:markLockedPress markLockedPress} event of this <code>sap.uxap.ObjectPageHeader</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.uxap.ObjectPageHeader</code> itself.\n\nThe event is fired when the Locked button is pressed"
        },
        {
          name: "attachTitleSelectorPress",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageHeader</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:titleSelectorPress titleSelectorPress} event of this <code>sap.uxap.ObjectPageHeader</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.uxap.ObjectPageHeader</code> itself.\n\nThe event is fired when the objectPage header title selector (down-arrow) is pressed"
        },
        {
          name: "destroyActions",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the actions in the aggregation {@link #getActions actions}."
        },
        {
          name: "destroyBreadcrumbs",
          visibility: "public",
          since: "1.50",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the breadcrumbs in the aggregation {@link #getBreadcrumbs breadcrumbs}."
        },
        {
          name: "destroyBreadCrumbsLinks",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the breadCrumbsLinks in the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.",
          deprecated: {
            since: "1.50",
            text: "use the <code>breadcrumbs</code> aggregation instead."
          }
        },
        {
          name: "destroyNavigationBar",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the navigationBar in the aggregation {@link #getNavigationBar navigationBar}."
        },
        {
          name: "destroySideContentButton",
          visibility: "public",
          since: "1.38.0",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the sideContentButton in the aggregation {@link #getSideContentButton sideContentButton}."
        },
        {
          name: "destroyTitleSelectorTooltip",
          visibility: "public",
          since: "1.56",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the titleSelectorTooltip in the aggregation {@link #getTitleSelectorTooltip titleSelectorTooltip}."
        },
        {
          name: "detachMarkChangesPress",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:markChangesPress markChangesPress} event of this <code>sap.uxap.ObjectPageHeader</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachMarkLockedPress",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:markLockedPress markLockedPress} event of this <code>sap.uxap.ObjectPageHeader</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachTitleSelectorPress",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:titleSelectorPress titleSelectorPress} event of this <code>sap.uxap.ObjectPageHeader</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.uxap.ObjectPageHeader with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireMarkChangesPress",
          visibility: "protected",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                domRef: {
                  name: "domRef",
                  type: "string",
                  optional: true,
                  description:
                    "DOM reference of the changed item's icon to be used for positioning."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:markChangesPress markChangesPress} to attached listeners."
        },
        {
          name: "fireMarkLockedPress",
          visibility: "protected",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                domRef: {
                  name: "domRef",
                  type: "string",
                  optional: true,
                  description:
                    "DOM reference of the lock item's icon to be used for positioning."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:markLockedPress markLockedPress} to attached listeners."
        },
        {
          name: "fireTitleSelectorPress",
          visibility: "protected",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                domRef: {
                  name: "domRef",
                  type: "string",
                  optional: true,
                  description:
                    "DOM reference of the title item's icon to be used for positioning."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:titleSelectorPress titleSelectorPress} to attached listeners."
        },
        {
          name: "getActions",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]"
          },
          description:
            "Gets content of aggregation {@link #getActions actions}.\n\nList of actions that will be displayed in the header. You can use ObjectPageHeaderActionButton controls to achieve a different visual representation of the action buttons in the action bar and the action sheet (overflow menu). You can use ObjectPageHeaderLayoutData to display a visual separator.\n\n<b>Note:</b> If an action is placed inside the overflow area, an additional <code>bInOverflow</code> parameter is passed along with the <code>press</code> event to indicate that a popup shouldn't be opened from that action and a dialog should be used instead."
        },
        {
          name: "getBreadcrumbs",
          visibility: "public",
          since: "1.50",
          returnValue: {
            type: "sap.m.Breadcrumbs"
          },
          description:
            "Gets content of aggregation {@link #getBreadcrumbs breadcrumbs}.\n\nThe breadcrumbs displayed in the <code>ObjectPageHeader</code>. If this aggregation is set, the <code>breadCrumbsLinks</code> aggregation is omitted."
        },
        {
          name: "getBreadCrumbsLinks",
          visibility: "public",
          returnValue: {
            type: "sap.m.Link[]"
          },
          description:
            "Gets content of aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.\n\nA list of all the active link elements in the BreadCrumbs control.",
          deprecated: {
            since: "1.50",
            text: "use the <code>breadcrumbs</code> aggregation instead."
          }
        },
        {
          name: "getHeaderDesign",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeaderDesign",
            description: "Value of property <code>headerDesign</code>"
          },
          description:
            "Gets current value of property {@link #getHeaderDesign headerDesign}.\n\nDetermines the design of the header - Light or Dark. <b>Note: </b>This property is deprecated. It will continue to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.\n\nDefault value is <code>Light</code>.",
          deprecated: {
            since: "1.40.1"
          }
        },
        {
          name: "getIsActionAreaAlwaysVisible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description:
              "Value of property <code>isActionAreaAlwaysVisible</code>"
          },
          description:
            "Gets current value of property {@link #getIsActionAreaAlwaysVisible isActionAreaAlwaysVisible}.\n\nDetermines whether the action buttons should always be visible or visible only when the header is snapped.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getIsObjectIconAlwaysVisible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description:
              "Value of property <code>isObjectIconAlwaysVisible</code>"
          },
          description:
            "Gets current value of property {@link #getIsObjectIconAlwaysVisible isObjectIconAlwaysVisible}.\n\nDetermines whether the icon should always be visible or visible only when the header is snapped.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getIsObjectSubtitleAlwaysVisible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description:
              "Value of property <code>isObjectSubtitleAlwaysVisible</code>"
          },
          description:
            "Gets current value of property {@link #getIsObjectSubtitleAlwaysVisible isObjectSubtitleAlwaysVisible}.\n\nDetermines whether the subtitle should always be visible or visible only when the header is snapped.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getIsObjectTitleAlwaysVisible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description:
              "Value of property <code>isObjectTitleAlwaysVisible</code>"
          },
          description:
            "Gets current value of property {@link #getIsObjectTitleAlwaysVisible isObjectTitleAlwaysVisible}.\n\nDetermines whether the title should always be visible or visible only when the header is snapped.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getMarkChanges",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>markChanges</code>"
          },
          description:
            "Gets current value of property {@link #getMarkChanges markChanges}.\n\nMarks that there are unsaved changes in the objectPageHeader. The markChanges state cannot be used together with the markLocked state. If both are set to true, only the locked state will be displayed.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getMarkFavorite",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>markFavorite</code>"
          },
          description:
            "Gets current value of property {@link #getMarkFavorite markFavorite}.\n\nSet the favorite state to true or false. The showMarkers property must be true for this property to take effect.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getMarkFlagged",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>markFlagged</code>"
          },
          description:
            "Gets current value of property {@link #getMarkFlagged markFlagged}.\n\nSet the flagged state to true or false. The showMarkers property must be true for this property to take effect.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getMarkLocked",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>markLocked</code>"
          },
          description:
            "Gets current value of property {@link #getMarkLocked markLocked}.\n\nSet the locked state of the objectPageHeader.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.uxap.ObjectPageHeader."
        },
        {
          name: "getNavigationBar",
          visibility: "public",
          returnValue: {
            type: "sap.m.Bar"
          },
          description:
            "Gets content of aggregation {@link #getNavigationBar navigationBar}.\n\nAn instance of sap.m.Bar to be embedded in the header"
        },
        {
          name: "getObjectImageAlt",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>objectImageAlt</code>"
          },
          description:
            "Gets current value of property {@link #getObjectImageAlt objectImageAlt}.\n\nThe text to be used for the Alt and Tooltip attribute of the image, supplied via the objectImageURI property\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "getObjectImageBackgroundColor",
          visibility: "public",
          since: "1.73",
          returnValue: {
            type: "sap.m.AvatarColor",
            description:
              "Value of property <code>objectImageBackgroundColor</code>"
          },
          description:
            "Gets current value of property {@link #getObjectImageBackgroundColor objectImageBackgroundColor}.\n\nDetermines the background color of the image placeholder or icon if valid icon URI is provided.\n\nDefault value is <code>Accent6</code>."
        },
        {
          name: "getObjectImageDensityAware",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description:
              "Value of property <code>objectImageDensityAware</code>"
          },
          description:
            "Gets current value of property {@link #getObjectImageDensityAware objectImageDensityAware}.\n\nThe value of densityAware for the image, supplied via the objectImageURI property. See sap.m.Image for more details on densityAware.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getObjectImageShape",
          visibility: "public",
          returnValue: {
            type: "sap.m.AvatarShape",
            description: "Value of property <code>objectImageShape</code>"
          },
          description:
            "Gets current value of property {@link #getObjectImageShape objectImageShape}.\n\nDetermines whether the picture should be displayed in a square or with a circle-shaped mask.\n\nDefault value is <code>Square</code>."
        },
        {
          name: "getObjectImageURI",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>objectImageURI</code>"
          },
          description:
            "Gets current value of property {@link #getObjectImageURI objectImageURI}.\n\nThe URL of the image, representing the business object"
        },
        {
          name: "getObjectSubtitle",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>objectSubtitle</code>"
          },
          description:
            "Gets current value of property {@link #getObjectSubtitle objectSubtitle}.\n\nThe description of the object"
        },
        {
          name: "getObjectTitle",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>objectTitle</code>"
          },
          description:
            "Gets current value of property {@link #getObjectTitle objectTitle}.\n\nThe title of the object"
        },
        {
          name: "getShowMarkers",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showMarkers</code>"
          },
          description:
            "Gets current value of property {@link #getShowMarkers showMarkers}.\n\nIndicates if object page header title supports showing markers such as flagged and favorite.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getShowPlaceholder",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showPlaceholder</code>"
          },
          description:
            "Gets current value of property {@link #getShowPlaceholder showPlaceholder}.\n\nEnables support of a placeholder image in case no image is specified or the URL of the provided image is invalid.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getShowTitleSelector",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showTitleSelector</code>"
          },
          description:
            "Gets current value of property {@link #getShowTitleSelector showTitleSelector}.\n\nWhen set to true, the selector arrow icon/image is shown and can be pressed.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getSideContentButton",
          visibility: "public",
          since: "1.38.0",
          returnValue: {
            type: "sap.m.Button"
          },
          description:
            "Gets content of aggregation {@link #getSideContentButton sideContentButton}.\n\nA button that is used for opening the side content of the page or some additional content."
        },
        {
          name: "getTitleSelectorTooltip",
          visibility: "public",
          since: "1.56",
          returnValue: {
            type: "sap.ui.core.TooltipBase|string"
          },
          description:
            'Gets content of aggregation {@link #getTitleSelectorTooltip titleSelectorTooltip}.\n\nA custom tooltip for the title selector button.\n\nThe custom tooltip will be visible if the <code>showTitleSelector</code> property is set to <code>true</code>.\n\n<b>Note:</b> If the aggregation is destroyed or set to invalid value, the default tooltip will be set. The default tooltip text is "Related options".'
        },
        {
          name: "indexOfAction",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oAction",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The action whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getActions actions}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfBreadCrumbLink",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oBreadCrumbLink",
              type: "sap.m.Link",
              optional: false,
              description: "The breadCrumbLink whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.m.Link</code> in the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}. and returns its index if found or -1 otherwise.",
          deprecated: {
            since: "1.50",
            text: "use the <code>breadcrumbs</code> aggregation instead."
          }
        },
        {
          name: "insertAction",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oAction",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The action to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the action should be inserted at; for a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted at the last position"
            }
          ],
          description:
            "Inserts a action into the aggregation {@link #getActions actions}."
        },
        {
          name: "insertBreadCrumbLink",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oBreadCrumbLink",
              type: "sap.m.Link",
              optional: false,
              description:
                "The breadCrumbLink to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the breadCrumbLink should be inserted at; for a negative value of <code>iIndex</code>, the breadCrumbLink is inserted at position 0; for a value greater than the current size of the aggregation, the breadCrumbLink is inserted at the last position"
            }
          ],
          description:
            "Inserts a breadCrumbLink into the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.",
          deprecated: {
            since: "1.50",
            text: "use the <code>breadcrumbs</code> aggregation instead."
          }
        },
        {
          name: "removeAction",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed action or <code>null</code>"
          },
          parameters: [
            {
              name: "vAction",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The action to remove or its index or id"
            }
          ],
          description:
            "Removes a action from the aggregation {@link #getActions actions}."
        },
        {
          name: "removeAllActions",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getActions actions}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllBreadCrumbsLinks",
          visibility: "public",
          returnValue: {
            type: "sap.m.Link[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.\n\nAdditionally, it unregisters them from the hosting UIArea.",
          deprecated: {
            since: "1.50",
            text: "use the <code>breadcrumbs</code> aggregation instead."
          }
        },
        {
          name: "removeBreadCrumbLink",
          visibility: "public",
          returnValue: {
            type: "sap.m.Link",
            description: "The removed breadCrumbLink or <code>null</code>"
          },
          parameters: [
            {
              name: "vBreadCrumbLink",
              type: "int|string|sap.m.Link",
              optional: false,
              description: "The breadCrumbLink to remove or its index or id"
            }
          ],
          description:
            "Removes a breadCrumbLink from the aggregation {@link #getBreadCrumbsLinks breadCrumbsLinks}.",
          deprecated: {
            since: "1.50",
            text: "use the <code>breadcrumbs</code> aggregation instead."
          }
        },
        {
          name: "setBreadcrumbs",
          visibility: "public",
          since: "1.50",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oBreadcrumbs",
              type: "sap.m.Breadcrumbs",
              optional: false,
              description: "The breadcrumbs to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getBreadcrumbs breadcrumbs}."
        },
        {
          name: "setHeaderDesign",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sHeaderDesign",
              type: "sap.uxap.ObjectPageHeaderDesign",
              optional: false,
              description: "New value for property <code>headerDesign</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHeaderDesign headerDesign}.\n\nDetermines the design of the header - Light or Dark. <b>Note: </b>This property is deprecated. It will continue to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Light</code>.",
          deprecated: {
            since: "1.40.1"
          }
        },
        {
          name: "setIsActionAreaAlwaysVisible",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bIsActionAreaAlwaysVisible",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>isActionAreaAlwaysVisible</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getIsActionAreaAlwaysVisible isActionAreaAlwaysVisible}.\n\nDetermines whether the action buttons should always be visible or visible only when the header is snapped.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setIsObjectIconAlwaysVisible",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bIsObjectIconAlwaysVisible",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>isObjectIconAlwaysVisible</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getIsObjectIconAlwaysVisible isObjectIconAlwaysVisible}.\n\nDetermines whether the icon should always be visible or visible only when the header is snapped.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setIsObjectSubtitleAlwaysVisible",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bIsObjectSubtitleAlwaysVisible",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>isObjectSubtitleAlwaysVisible</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getIsObjectSubtitleAlwaysVisible isObjectSubtitleAlwaysVisible}.\n\nDetermines whether the subtitle should always be visible or visible only when the header is snapped.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setIsObjectTitleAlwaysVisible",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bIsObjectTitleAlwaysVisible",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>isObjectTitleAlwaysVisible</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getIsObjectTitleAlwaysVisible isObjectTitleAlwaysVisible}.\n\nDetermines whether the title should always be visible or visible only when the header is snapped.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setMarkChanges",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bMarkChanges",
              type: "boolean",
              optional: false,
              description: "New value for property <code>markChanges</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getMarkChanges markChanges}.\n\nMarks that there are unsaved changes in the objectPageHeader. The markChanges state cannot be used together with the markLocked state. If both are set to true, only the locked state will be displayed.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setMarkFavorite",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bMarkFavorite",
              type: "boolean",
              optional: false,
              description: "New value for property <code>markFavorite</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getMarkFavorite markFavorite}.\n\nSet the favorite state to true or false. The showMarkers property must be true for this property to take effect.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setMarkFlagged",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bMarkFlagged",
              type: "boolean",
              optional: false,
              description: "New value for property <code>markFlagged</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getMarkFlagged markFlagged}.\n\nSet the flagged state to true or false. The showMarkers property must be true for this property to take effect.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setMarkLocked",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bMarkLocked",
              type: "boolean",
              optional: false,
              description: "New value for property <code>markLocked</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getMarkLocked markLocked}.\n\nSet the locked state of the objectPageHeader.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setNavigationBar",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oNavigationBar",
              type: "sap.m.Bar",
              optional: false,
              description: "The navigationBar to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getNavigationBar navigationBar}."
        },
        {
          name: "setObjectImageAlt",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sObjectImageAlt",
              type: "string",
              optional: false,
              description: "New value for property <code>objectImageAlt</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getObjectImageAlt objectImageAlt}.\n\nThe text to be used for the Alt and Tooltip attribute of the image, supplied via the objectImageURI property\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>empty string</code>."
        },
        {
          name: "setObjectImageBackgroundColor",
          visibility: "public",
          since: "1.73",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sObjectImageBackgroundColor",
              type: "sap.m.AvatarColor",
              optional: false,
              description:
                "New value for property <code>objectImageBackgroundColor</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getObjectImageBackgroundColor objectImageBackgroundColor}.\n\nDetermines the background color of the image placeholder or icon if valid icon URI is provided.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Accent6</code>."
        },
        {
          name: "setObjectImageDensityAware",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bObjectImageDensityAware",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>objectImageDensityAware</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getObjectImageDensityAware objectImageDensityAware}.\n\nThe value of densityAware for the image, supplied via the objectImageURI property. See sap.m.Image for more details on densityAware.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setObjectImageShape",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sObjectImageShape",
              type: "sap.m.AvatarShape",
              optional: false,
              description:
                "New value for property <code>objectImageShape</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getObjectImageShape objectImageShape}.\n\nDetermines whether the picture should be displayed in a square or with a circle-shaped mask.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Square</code>."
        },
        {
          name: "setObjectImageURI",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sObjectImageURI",
              type: "string",
              optional: false,
              description: "New value for property <code>objectImageURI</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getObjectImageURI objectImageURI}.\n\nThe URL of the image, representing the business object\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setObjectSubtitle",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sObjectSubtitle",
              type: "string",
              optional: false,
              description: "New value for property <code>objectSubtitle</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getObjectSubtitle objectSubtitle}.\n\nThe description of the object\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setObjectTitle",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sObjectTitle",
              type: "string",
              optional: false,
              description: "New value for property <code>objectTitle</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getObjectTitle objectTitle}.\n\nThe title of the object\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setShowMarkers",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowMarkers",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showMarkers</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowMarkers showMarkers}.\n\nIndicates if object page header title supports showing markers such as flagged and favorite.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setShowPlaceholder",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowPlaceholder",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showPlaceholder</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowPlaceholder showPlaceholder}.\n\nEnables support of a placeholder image in case no image is specified or the URL of the provided image is invalid.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setShowTitleSelector",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowTitleSelector",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>showTitleSelector</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowTitleSelector showTitleSelector}.\n\nWhen set to true, the selector arrow icon/image is shown and can be pressed.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setSideContentButton",
          visibility: "public",
          since: "1.38.0",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSideContentButton",
              type: "sap.m.Button",
              optional: false,
              description: "The sideContentButton to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getSideContentButton sideContentButton}."
        },
        {
          name: "setTitleSelectorTooltip",
          visibility: "public",
          since: "1.56",
          returnValue: {
            type: "sap.uxap.ObjectPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vTitleSelectorTooltip",
              type: "sap.ui.core.TooltipBase|string",
              optional: false,
              description: "The titleSelectorTooltip to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getTitleSelectorTooltip titleSelectorTooltip}."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.uxap.ObjectPageHeaderActionButton",
      basename: "ObjectPageHeaderActionButton",
      resource: "sap/uxap/ObjectPageHeaderActionButton.js",
      module: "sap/uxap/ObjectPageHeaderActionButton",
      export: "",
      static: true,
      visibility: "public",
      since: "1.26",
      extends: "sap.m.Button",
      implements: ["sap.m.IOverflowToolbarContent"],
      description:
        "A Button that is used in the <code>actions</code> aggregation of the {@link sap.uxap.ObjectPageHeader}.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "hideText",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Hide the button text when rendered into the headerTitle part of the ObjectPageLayout. This is useful if you want to display icons only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.",
            methods: ["getHideText", "setHideText"]
          },
          {
            name: "hideIcon",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "Hide the button icon when rendered into the headerTitle part of the ObjectPageLayout. This is useful if you want to display texts only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.",
            methods: ["getHideIcon", "setHideIcon"]
          },
          {
            name: "importance",
            type: "sap.uxap.Importance",
            defaultValue: "High",
            group: "Behavior",
            visibility: "public",
            since: "1.34.0",
            description: "Determines the order in which the button overflows.",
            methods: ["getImportance", "setImportance"]
          }
        ],
        designtime:
          "sap/uxap/designtime/ObjectPageHeaderActionButton.designtime"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>ObjectPageHeaderActionButton</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.uxap.ObjectPageHeaderActionButton with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.Button.extend}."
        },
        {
          name: "getHideIcon",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>hideIcon</code>"
          },
          description:
            "Gets current value of property {@link #getHideIcon hideIcon}.\n\nHide the button icon when rendered into the headerTitle part of the ObjectPageLayout. This is useful if you want to display texts only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getHideText",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>hideText</code>"
          },
          description:
            "Gets current value of property {@link #getHideText hideText}.\n\nHide the button text when rendered into the headerTitle part of the ObjectPageLayout. This is useful if you want to display icons only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getImportance",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "sap.uxap.Importance",
            description: "Value of property <code>importance</code>"
          },
          description:
            "Gets current value of property {@link #getImportance importance}.\n\nDetermines the order in which the button overflows.\n\nDefault value is <code>High</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.uxap.ObjectPageHeaderActionButton."
        },
        {
          name: "setHideIcon",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeaderActionButton",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bHideIcon",
              type: "boolean",
              optional: false,
              description: "New value for property <code>hideIcon</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHideIcon hideIcon}.\n\nHide the button icon when rendered into the headerTitle part of the ObjectPageLayout. This is useful if you want to display texts only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setHideText",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeaderActionButton",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bHideText",
              type: "boolean",
              optional: false,
              description: "New value for property <code>hideText</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHideText hideText}.\n\nHide the button text when rendered into the headerTitle part of the ObjectPageLayout. This is useful if you want to display icons only in the headerTitle part but still want to display text + icon in the actionSheet that appears when not enough space is available on the screen for displaying all actions.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setImportance",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "sap.uxap.ObjectPageHeaderActionButton",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sImportance",
              type: "sap.uxap.Importance",
              optional: false,
              description: "New value for property <code>importance</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getImportance importance}.\n\nDetermines the order in which the button overflows.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>High</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.uxap.ObjectPageHeaderContent",
      basename: "ObjectPageHeaderContent",
      resource: "sap/uxap/ObjectPageHeaderContent.js",
      module: "sap/uxap/ObjectPageHeaderContent",
      export: "",
      static: true,
      visibility: "public",
      since: "1.30",
      extends: "sap.ui.core.Control",
      implements: ["sap.uxap.IHeaderContent"],
      description:
        "Header content for the classic header of the {@link sap.uxap.ObjectPageLayout}.\n\n<h3>Overview</h3>\n\nThe <code>ObjectPageHeaderContent</code> represents the movable part of the <code>ObjectPageLayout</code>'s classic header. It can contain any control and scrolls along with the content of the page until it disappears (collapsed header). When scrolled back to the top it becomes visible again (expanded header). It contains all the additional information of the object.\n\nDocumentation links: <ul> <li>{@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}</li> <li>{@link topic:0fecbce45e39406aa939bd25e89823f4 Object Page Classic Header}</li> <li>{@link https://experience.sap.com/fiori-design-web/object-page/ UX Guidelines: Object Page}</li> </ul>",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "contentDesign",
            type: "sap.uxap.ObjectPageHeaderDesign",
            defaultValue: "Light",
            group: "Misc",
            visibility: "public",
            description:
              "Determines the design of the header - Light or Dark. <b>Note: </b>This property is deprecated. It will continue to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.",
            deprecated: {
              since: "1.40.1"
            },
            methods: ["getContentDesign", "setContentDesign"]
          }
        ],
        aggregations: [
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "The list of Objects of type sap.ui.core.Control.",
            methods: [
              "getContent",
              "destroyContent",
              "insertContent",
              "addContent",
              "removeContent",
              "indexOfContent",
              "removeAllContent"
            ]
          },
          {
            name: "_editHeaderButton",
            singularName: "_editHeaderButton",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "hidden",
            description: 'Internal aggregation for the "Edit Header" button.',
            methods: [
              "get_editHeaderButton",
              "destroy_editHeaderButton",
              "set_editHeaderButton"
            ]
          },
          {
            name: "_objectImage",
            singularName: "_objectImage",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_objectImage",
              "destroy_objectImage",
              "set_objectImage"
            ]
          },
          {
            name: "_placeholder",
            singularName: "_placeholder",
            type: "sap.m.Avatar",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_placeholder",
              "destroy_placeholder",
              "set_placeholder"
            ]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>ObjectPageHeaderContent</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.",
        references: [
          "{@link fiori:https://experience.sap.com/fiori-design-web/snapping-header/#header-content Object Page Header Content}"
        ]
      },
      methods: [
        {
          name: "addContent",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeaderContent",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some content to the aggregation {@link #getContent content}."
        },
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeaderContent",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the content in the aggregation {@link #getContent content}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.uxap.ObjectPageHeaderContent with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]"
          },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nThe list of Objects of type sap.ui.core.Control."
        },
        {
          name: "getContentDesign",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeaderDesign",
            description: "Value of property <code>contentDesign</code>"
          },
          description:
            "Gets current value of property {@link #getContentDesign contentDesign}.\n\nDetermines the design of the header - Light or Dark. <b>Note: </b>This property is deprecated. It will continue to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.\n\nDefault value is <code>Light</code>.",
          deprecated: {
            since: "1.40.1"
          }
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.uxap.ObjectPageHeaderContent."
        },
        {
          name: "indexOfContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertContent",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeaderContent",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The content to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position"
            }
          ],
          description:
            "Inserts a content into the aggregation {@link #getContent content}."
        },
        {
          name: "removeAllContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getContent content}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed content or <code>null</code>"
          },
          parameters: [
            {
              name: "vContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The content to remove or its index or id"
            }
          ],
          description:
            "Removes a content from the aggregation {@link #getContent content}."
        },
        {
          name: "setContentDesign",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeaderContent",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sContentDesign",
              type: "sap.uxap.ObjectPageHeaderDesign",
              optional: false,
              description: "New value for property <code>contentDesign</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getContentDesign contentDesign}.\n\nDetermines the design of the header - Light or Dark. <b>Note: </b>This property is deprecated. It will continue to work in the Blue Crystal theme, but it will not be taken into account for the Belize themes.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Light</code>.",
          deprecated: {
            since: "1.40.1"
          }
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.uxap.ObjectPageHeaderDesign",
      basename: "ObjectPageHeaderDesign",
      resource: "sap/uxap/library.js",
      module: "sap/uxap/library",
      export: "ObjectPageHeaderDesign",
      static: true,
      visibility: "public",
      description:
        "Used by the <code>ObjectPageHeader</code> control to define which design to use.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "enum"
      },
      properties: [
        {
          name: "Dark",
          visibility: "public",
          static: true,
          type: "string",
          description: "Dark theme for the <code>ObjectPageHeader</code>."
        },
        {
          name: "Light",
          visibility: "public",
          static: true,
          type: "string",
          description: "Light theme for the <code>ObjectPageHeader</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.uxap.ObjectPageHeaderLayoutData",
      basename: "ObjectPageHeaderLayoutData",
      resource: "sap/uxap/ObjectPageHeaderLayoutData.js",
      module: "sap/uxap/ObjectPageHeaderLayoutData",
      export: "",
      static: true,
      visibility: "public",
      since: "1.26",
      extends: "sap.ui.core.LayoutData",
      description:
        "A {@link sap.ui.core.LayoutData} element that can be added to controls used in the <code>headerContent</code> aggregation of the <code>ObjectPageLayout</code>.\n\n<b>Note:</b> This element is only taken into account when the <code>sap.uxap.ObjectPageLayout</code> control is used together with <code>sap.uxap.ObjectPageHeader</code> as value of <code>headerTitle</code>.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "visibleS",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "If this property is set the control will be visible (or not) in a small sized layout.",
            methods: ["getVisibleS", "setVisibleS"]
          },
          {
            name: "visibleM",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "If this property is set the control will be visible (or not) in a medium sized layout.",
            methods: ["getVisibleM", "setVisibleM"]
          },
          {
            name: "visibleL",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "If this property is set the control will be visible (or not) in a large sized layout.",
            methods: ["getVisibleL", "setVisibleL"]
          },
          {
            name: "showSeparatorBefore",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "If this property is set the control will display a separator before it.",
            methods: ["getShowSeparatorBefore", "setShowSeparatorBefore"]
          },
          {
            name: "showSeparatorAfter",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "If this property is set the control will display a separator after it.",
            methods: ["getShowSeparatorAfter", "setShowSeparatorAfter"]
          },
          {
            name: "width",
            type: "sap.ui.core.CSSSize",
            defaultValue: "auto",
            group: "Misc",
            visibility: "public",
            description:
              "If this property is set the control will take the provided size.",
            methods: ["getWidth", "setWidth"]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>ObjectPageHeaderLayoutData</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.uxap.ObjectPageHeaderLayoutData with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.LayoutData.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.uxap.ObjectPageHeaderLayoutData."
        },
        {
          name: "getShowSeparatorAfter",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showSeparatorAfter</code>"
          },
          description:
            "Gets current value of property {@link #getShowSeparatorAfter showSeparatorAfter}.\n\nIf this property is set the control will display a separator after it.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getShowSeparatorBefore",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showSeparatorBefore</code>"
          },
          description:
            "Gets current value of property {@link #getShowSeparatorBefore showSeparatorBefore}.\n\nIf this property is set the control will display a separator before it.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getVisibleL",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>visibleL</code>"
          },
          description:
            "Gets current value of property {@link #getVisibleL visibleL}.\n\nIf this property is set the control will be visible (or not) in a large sized layout.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getVisibleM",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>visibleM</code>"
          },
          description:
            "Gets current value of property {@link #getVisibleM visibleM}.\n\nIf this property is set the control will be visible (or not) in a medium sized layout.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getVisibleS",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>visibleS</code>"
          },
          description:
            "Gets current value of property {@link #getVisibleS visibleS}.\n\nIf this property is set the control will be visible (or not) in a small sized layout.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getWidth",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>width</code>"
          },
          description:
            "Gets current value of property {@link #getWidth width}.\n\nIf this property is set the control will take the provided size.\n\nDefault value is <code>auto</code>."
        },
        {
          name: "setShowSeparatorAfter",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeaderLayoutData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowSeparatorAfter",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>showSeparatorAfter</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowSeparatorAfter showSeparatorAfter}.\n\nIf this property is set the control will display a separator after it.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setShowSeparatorBefore",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeaderLayoutData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowSeparatorBefore",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>showSeparatorBefore</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowSeparatorBefore showSeparatorBefore}.\n\nIf this property is set the control will display a separator before it.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setVisibleL",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeaderLayoutData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bVisibleL",
              type: "boolean",
              optional: false,
              description: "New value for property <code>visibleL</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getVisibleL visibleL}.\n\nIf this property is set the control will be visible (or not) in a large sized layout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setVisibleM",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeaderLayoutData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bVisibleM",
              type: "boolean",
              optional: false,
              description: "New value for property <code>visibleM</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getVisibleM visibleM}.\n\nIf this property is set the control will be visible (or not) in a medium sized layout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setVisibleS",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeaderLayoutData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bVisibleS",
              type: "boolean",
              optional: false,
              description: "New value for property <code>visibleS</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getVisibleS visibleS}.\n\nIf this property is set the control will be visible (or not) in a small sized layout.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setWidth",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageHeaderLayoutData",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sWidth",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>width</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getWidth width}.\n\nIf this property is set the control will take the provided size.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>auto</code>."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.uxap.ObjectPageHeaderPictureShape",
      basename: "ObjectPageHeaderPictureShape",
      resource: "sap/uxap/library.js",
      module: "sap/uxap/library",
      export: "ObjectPageHeaderPictureShape",
      static: true,
      visibility: "public",
      description:
        "Used by the <code>ObjectPageHeader</code> control to define which shape to use for the image.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "enum"
      },
      properties: [
        {
          name: "Circle",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Circle shape for the images in the <code>ObjectPageHeader</code>."
        },
        {
          name: "Square",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Square shape for the images in the <code>ObjectPageHeader</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.uxap.ObjectPageLayout",
      basename: "ObjectPageLayout",
      resource: "sap/uxap/ObjectPageLayout.js",
      module: "sap/uxap/ObjectPageLayout",
      export: "",
      static: true,
      visibility: "public",
      since: "1.26",
      extends: "sap.ui.core.Control",
      description:
        "A layout that allows apps to easily display information related to a business object.\n\n<h3>Overview</h3>\n\nThe <code>ObjectPageLayout</code> layout is composed of a header (title and content), an optional anchor bar and block content wrapped in sections and subsections that structure the information.\n\n<h3>Structure</h3>\n\nAn <code>ObjectPageLayout</code> control is used to put together all parts of an Object page - Header, optional Anchor Bar and Sections/Subsections.\n\n<h4>Header</h4> The <code>ObjectPageLayout</code> implements the snapping header concept. This means that the upper part of the header (Header Title) always stays visible, while the lower part (Header Content) can scroll out of view.\n\nHeader Title is displayed at the top of the header and always remains visible above the scrollable content of the page. It contains the title and most prominent details of the object.\n\nThe Header Content scrolls along with the content of the page until it disappears (collapsed header). When scrolled back to the top it becomes visible again (expanded header). It contains all the additional information of the object.\n\n<h4>Anchor Bar</h4> The Anchor Bar is an automatically generated internal menu that shows the titles of the sections and subsections and allows the user to scroll to the respective section and subsection content.\n\n<h4>Sections, Subsections, Blocks</h4> The content of the page that appears bellow the header is composed of blocks structured into sections and subsections.\n\n<h3>Usage</h3> Use the <code>ObjectPageLayout</code> if: <ul> <li>The users need to see, edit, or create an item with all its details.</li> <li>Users need to get an overview of an object and interact with different parts of the object.</li> </ul>\n\n<h3>Responsive behavior</h3>\n\nThe <code>ObjectPageLayout</code> is responsive and adapts to all screen sizes.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "showAnchorBar",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Determines whether the Navigation bar (Anchor bar) is displayed.",
            methods: ["getShowAnchorBar", "setShowAnchorBar"]
          },
          {
            name: "showAnchorBarPopover",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Determines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.",
            methods: ["getShowAnchorBarPopover", "setShowAnchorBarPopover"]
          },
          {
            name: "upperCaseAnchorBar",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Determines whether the Anchor bar items are displayed in upper case.",
            methods: ["getUpperCaseAnchorBar", "setUpperCaseAnchorBar"]
          },
          {
            name: "backgroundDesignAnchorBar",
            type: "sap.m.BackgroundDesign",
            defaultValue: null,
            group: "Appearance",
            visibility: "public",
            since: "1.58",
            description:
              "Determines the background color of the <code>AnchorBar</code>.\n\n<b>Note:</b> The default value of <code>backgroundDesignAnchorBar</code> property is null. If the property is not set, the color of the background is <code>@sapUiObjectHeaderBackground</code>, which depends on the specific theme.",
            methods: [
              "getBackgroundDesignAnchorBar",
              "setBackgroundDesignAnchorBar"
            ]
          },
          {
            name: "height",
            type: "sap.ui.core.CSSSize",
            defaultValue: "100%",
            group: "Misc",
            visibility: "public",
            description: "Determines the height of the ObjectPage.",
            methods: ["getHeight", "setHeight"]
          },
          {
            name: "enableLazyLoading",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description: "Enable lazy loading for the Object page Subsections.",
            methods: ["getEnableLazyLoading", "setEnableLazyLoading"]
          },
          {
            name: "subSectionLayout",
            type: "sap.uxap.ObjectPageSubSectionLayout",
            defaultValue: "TitleOnTop",
            group: "Misc",
            visibility: "public",
            description:
              "Determines whether Subsection titles are displayed on top or to the left of the Subsection content.",
            methods: ["getSubSectionLayout", "setSubSectionLayout"]
          },
          {
            name: "sectionTitleLevel",
            type: "sap.ui.core.TitleLevel",
            defaultValue: "Auto",
            group: "Appearance",
            visibility: "public",
            since: "1.44.0",
            description:
              "Determines the ARIA level of the <code>ObjectPageSection</code> and <code>ObjectPageSubSection</code> titles. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.\n\n<br><b>Note:</b> <ul> <li>Defining a <code>sectionTitleLevel</code> will add <code>aria-level</code> attribute from 1 to 6 instead of changing the titles` HTML tag from H1 to H6. <br>For example: if <code>sectionTitleLevel</code> is <code>TitleLevel.H1</code>, it will result as aria-level of 1 added to the <code>ObjectPageSection</code> title. </li>\n\n<li> The <code>ObjectPageSubSection</code> title would have <code>aria-level</code> one level lower than the defined. For example: if <code>sectionTitleLevel</code> is <code>TitleLevel.H1</code>, it will result as aria-level of 2 added to the <code>ObjectPageSubSection</code> title.</li>\n\n<li> It is possible to define a <code>titleLevel</code> on <code>ObjectPageSection</code> or <code>ObjectPageSubSection</code> level. In this case the value of this property will be ignored. </li> </ul>",
            methods: ["getSectionTitleLevel", "setSectionTitleLevel"]
          },
          {
            name: "useIconTabBar",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            description:
              "Determines whether the navigation mode is tab-based instead of the default anchor bar. If enabled, the sections are displayed separately on each tab rather than having all of them visible at the same time.\n\n<b>Note:</b> Keep in mind that the <code>sap.m.IconTabBar</code> control is no longer used for the tab navigation mode.",
            methods: ["getUseIconTabBar", "setUseIconTabBar"]
          },
          {
            name: "showHeaderContent",
            type: "boolean",
            defaultValue: true,
            group: "Misc",
            visibility: "public",
            description:
              "Determines the visibility of the Header content (headerContent aggregation).",
            methods: ["getShowHeaderContent", "setShowHeaderContent"]
          },
          {
            name: "useTwoColumnsForLargeScreen",
            type: "boolean",
            defaultValue: false,
            group: "Appearance",
            visibility: "public",
            description:
              "Determines whether the to use two column layout for the L screen size.",
            methods: [
              "getUseTwoColumnsForLargeScreen",
              "setUseTwoColumnsForLargeScreen"
            ]
          },
          {
            name: "showTitleInHeaderContent",
            type: "boolean",
            defaultValue: false,
            group: "Appearance",
            visibility: "public",
            description:
              "Determines whether the title, image, markers and selectTitleArrow are shown in the Header content area.\n\n<b>Note</b>: This property is only taken into account if an instance of <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.</li>",
            methods: [
              "getShowTitleInHeaderContent",
              "setShowTitleInHeaderContent"
            ]
          },
          {
            name: "showOnlyHighImportance",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            since: "1.32.0",
            description:
              "Determines whether sections and subsections with importance Low and Medium are hidden even on large screens.",
            methods: ["getShowOnlyHighImportance", "setShowOnlyHighImportance"]
          },
          {
            name: "isChildPage",
            type: "boolean",
            defaultValue: false,
            group: "Appearance",
            visibility: "public",
            since: "1.34.0",
            description:
              "Determines whether the page is a child page and renders it with a different design. Child pages have an additional (darker/lighter) stripe on the left side of their header content area.\n\n<b>Note</b>: This property is only taken into account if an instance of <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.",
            methods: ["getIsChildPage", "setIsChildPage"]
          },
          {
            name: "alwaysShowContentHeader",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            since: "1.34.0",
            description:
              "Determines whether Header Content will always be expanded on desktop.\n\n<b>Note</b>: This property is only taken into account if an instance of <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.",
            methods: [
              "getAlwaysShowContentHeader",
              "setAlwaysShowContentHeader"
            ]
          },
          {
            name: "headerContentPinnable",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            since: "1.52",
            description:
              "Determines whether the Header Content area can be pinned.\n\nWhen set to <code>true</code>, a pin button is displayed within the Header Content area. The pin button allows the user to make the Header Content always visible at the top of the page above any scrollable content.\n\n<b>Note:</b> This property is only taken into account if an instance of <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is used for the <code>headerTitle</code> aggregation.",
            methods: ["getHeaderContentPinnable", "setHeaderContentPinnable"]
          },
          {
            name: "toggleHeaderOnTitleClick",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            since: "1.52",
            description:
              "Determines whether the user can switch between the expanded/collapsed states of the <code>sap.uxap.ObjectPageDynamicHeaderContent</code> by clicking on the <code>sap.uxap.ObjectPageDynamicHeaderTitle</code>. If set to <code>false</code>, the <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is not clickable and the application must provide other means for expanding/collapsing the <code>sap.uxap.ObjectPageDynamicHeaderContent</code>, if necessary.\n\n<b>Note:</b> This property is only taken into account if an instance of <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is used for the <code>headerTitle</code> aggregation.",
            methods: [
              "getToggleHeaderOnTitleClick",
              "setToggleHeaderOnTitleClick"
            ]
          },
          {
            name: "preserveHeaderStateOnScroll",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            since: "1.52",
            description:
              "Preserves the current header state when scrolling. For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.\n\n<b>Notes:</b> <ul><li>This property is only taken into account if an instance of <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is used for the <code>headerTitle</code> aggregation.</li> <li>Based on internal rules, the value of the property is not always taken into account - for example, when the control is rendered on tablet or mobile and the control`s title and header are with height larger than the given threshold.</li></ul>",
            methods: [
              "getPreserveHeaderStateOnScroll",
              "setPreserveHeaderStateOnScroll"
            ]
          },
          {
            name: "showEditHeaderButton",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            since: "1.34.0",
            description:
              "Determines whether an Edit button will be displayed in Header Content.\n\n<b>Note</b>: This property is only taken into account if an instance of <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.",
            methods: ["getShowEditHeaderButton", "setShowEditHeaderButton"]
          },
          {
            name: "flexEnabled",
            type: "boolean",
            defaultValue: false,
            group: "Misc",
            visibility: "public",
            since: "1.34.0",
            description:
              "Specifies whether the object page enables flexibility features, such as hiding and adding sections.<br> For more information about SAPUI5 flexibility, refer to the Developer Guide.",
            methods: ["getFlexEnabled", "setFlexEnabled"]
          },
          {
            name: "showFooter",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            since: "1.40",
            description: "Determines whether the footer is visible.",
            methods: ["getShowFooter", "setShowFooter"]
          }
        ],
        dnd: {
          draggable: false,
          droppable: true
        },
        aggregations: [
          {
            name: "sections",
            singularName: "section",
            type: "sap.uxap.ObjectPageSection",
            cardinality: "0..n",
            visibility: "public",
            description:
              "The sections that make up the Object page content area.",
            methods: [
              "getSections",
              "destroySections",
              "insertSection",
              "addSection",
              "removeSection",
              "indexOfSection",
              "removeAllSections"
            ]
          },
          {
            name: "headerTitle",
            singularName: "headerTitle",
            type: "sap.uxap.IHeaderTitle",
            cardinality: "0..1",
            visibility: "public",
            description:
              "Object page header title - the upper, always static, part of the Object page header.",
            methods: ["getHeaderTitle", "destroyHeaderTitle", "setHeaderTitle"]
          },
          {
            name: "headerContent",
            singularName: "headerContent",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "Object page header content - the dynamic part of the Object page header.",
            methods: [
              "getHeaderContent",
              "destroyHeaderContent",
              "insertHeaderContent",
              "addHeaderContent",
              "removeHeaderContent",
              "indexOfHeaderContent",
              "removeAllHeaderContent"
            ]
          },
          {
            name: "footer",
            singularName: "footer",
            type: "sap.m.IBar",
            cardinality: "0..1",
            visibility: "public",
            since: "1.40",
            description: "Object page floating footer.",
            methods: ["getFooter", "destroyFooter", "setFooter"]
          },
          {
            name: "landmarkInfo",
            singularName: "landmarkInfo",
            type: "sap.uxap.ObjectPageAccessibleLandmarkInfo",
            cardinality: "0..1",
            visibility: "public",
            since: "1.61",
            description:
              "Accessible landmark settings to be applied on the containers of the <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf not set, no landmarks will be written.",
            methods: [
              "getLandmarkInfo",
              "destroyLandmarkInfo",
              "setLandmarkInfo"
            ]
          },
          {
            name: "_anchorBar",
            singularName: "_anchorBar",
            type: "sap.uxap.AnchorBar",
            cardinality: "0..1",
            visibility: "hidden",
            description:
              "Internal aggregation to hold the reference to the AnchorBar.",
            methods: ["get_anchorBar", "destroy_anchorBar", "set_anchorBar"]
          },
          {
            name: "_iconTabBar",
            singularName: "_iconTabBar",
            type: "sap.m.IconTabBar",
            cardinality: "0..1",
            visibility: "hidden",
            description:
              "Internal aggregation to hold the reference to the IconTabBar.",
            methods: ["get_iconTabBar", "destroy_iconTabBar", "set_iconTabBar"]
          },
          {
            name: "_headerContent",
            singularName: "_headerContent",
            type: "sap.uxap.IHeaderContent",
            cardinality: "0..1",
            visibility: "hidden",
            description:
              "Internal aggregation to hold the reference to the IHeaderContent implementation.",
            methods: [
              "get_headerContent",
              "destroy_headerContent",
              "set_headerContent"
            ]
          },
          {
            name: "_customScrollBar",
            singularName: "_customScrollBar",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_customScrollBar",
              "destroy_customScrollBar",
              "set_customScrollBar"
            ]
          }
        ],
        defaultAggregation: "sections",
        associations: [
          {
            name: "selectedSection",
            singularName: "selectedSection",
            type: "sap.uxap.ObjectPageSection",
            cardinality: "0..1",
            visibility: "public",
            since: "1.44.0",
            description: "The section that is selected by default on load.",
            methods: ["getSelectedSection", "setSelectedSection"]
          }
        ],
        events: [
          {
            name: "toggleAnchorBar",
            visibility: "public",
            description:
              "The event is fired when the Anchor bar is switched from moving to fixed or the other way round.",
            parameters: {
              fixed: {
                name: "fixed",
                type: "boolean",
                description:
                  "False indicates that the Anchor bar has just detached from the Header and became part of the scrolling area. True means that the Anchor bar has just snapped to the Header."
              }
            },
            methods: [
              "attachToggleAnchorBar",
              "detachToggleAnchorBar",
              "fireToggleAnchorBar"
            ]
          },
          {
            name: "sectionChange",
            visibility: "public",
            since: "1.73",
            description:
              "Fired when the current section is changed by scrolling.",
            parameters: {
              section: {
                name: "section",
                type: "sap.uxap.ObjectPageSection",
                description: "The section which the layout is scrolled to."
              },
              subSection: {
                name: "subSection",
                type: "sap.uxap.ObjectPageSubSection",
                description: "The subsection which the layout is scrolled to."
              }
            },
            methods: [
              "attachSectionChange",
              "detachSectionChange",
              "fireSectionChange"
            ]
          },
          {
            name: "editHeaderButtonPress",
            visibility: "public",
            description:
              "The event is fired when the Edit Header button is pressed",
            methods: [
              "attachEditHeaderButtonPress",
              "detachEditHeaderButtonPress",
              "fireEditHeaderButtonPress"
            ]
          },
          {
            name: "navigate",
            visibility: "public",
            since: "1.40",
            description:
              "The event is fired when the selected section is changed using the navigation.",
            parameters: {
              section: {
                name: "section",
                type: "sap.uxap.ObjectPageSection",
                description: "The selected section object."
              },
              subSection: {
                name: "subSection",
                type: "sap.uxap.ObjectPageSubSection",
                description: "The selected subsection object."
              }
            },
            methods: ["attachNavigate", "detachNavigate", "fireNavigate"]
          }
        ],
        designtime: "sap/uxap/designtime/ObjectPageLayout.designtime"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>ObjectPageLayout</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.",
        references: [
          "{@link topic:2e61ab6c68a2480eb666c1927a707658 Object Page Layout}",
          "{@link topic:d2ef0099542d44dc868719d908e576d0 Object Page Headers}",
          "{@link topic:370b67986497463187336fa130aebbf1 Anchor Bar}",
          "{@link topic:4527729576cb4a4888275b6935aad03a Object Page Blocks}",
          "{@link topic:2978f6064742456ebed31c5ccf4d051d Creating Blocks}",
          "{@link topic:bc410e94e46540efa02857e15aae583f Object Page Scrolling}",
          "{@link fiori:https://experience.sap.com/fiori-design-web/object-page/ Object Page Layout}",
          "{@link fiori:https://experience.sap.com/fiori-design-web/snapping-header/ UX Guidelines: Object Page - Snapping Header}"
        ]
      },
      events: [
        {
          name: "editHeaderButtonPress",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false
                }
              }
            }
          ],
          description:
            "The event is fired when the Edit Header button is pressed"
        },
        {
          name: "navigate",
          visibility: "public",
          since: "1.40",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    section: {
                      name: "section",
                      type: "sap.uxap.ObjectPageSection",
                      optional: false,
                      description: "The selected section object."
                    },
                    subSection: {
                      name: "subSection",
                      type: "sap.uxap.ObjectPageSubSection",
                      optional: false,
                      description: "The selected subsection object."
                    }
                  }
                }
              }
            }
          ],
          description:
            "The event is fired when the selected section is changed using the navigation."
        },
        {
          name: "sectionChange",
          visibility: "public",
          since: "1.73",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    section: {
                      name: "section",
                      type: "sap.uxap.ObjectPageSection",
                      optional: false,
                      description:
                        "The section which the layout is scrolled to."
                    },
                    subSection: {
                      name: "subSection",
                      type: "sap.uxap.ObjectPageSubSection",
                      optional: false,
                      description:
                        "The subsection which the layout is scrolled to."
                    }
                  }
                }
              }
            }
          ],
          description: "Fired when the current section is changed by scrolling."
        },
        {
          name: "toggleAnchorBar",
          visibility: "public",
          parameters: [
            {
              name: "oControlEvent",
              type: "sap.ui.base.Event",
              parameterProperties: {
                getSource: {
                  name: "getSource",
                  type: "sap.ui.base.EventProvider",
                  optional: false
                },
                getParameters: {
                  name: "getParameters",
                  type: "object",
                  optional: false,
                  parameterProperties: {
                    fixed: {
                      name: "fixed",
                      type: "boolean",
                      optional: false,
                      description:
                        "False indicates that the Anchor bar has just detached from the Header and became part of the scrolling area. True means that the Anchor bar has just snapped to the Header."
                    }
                  }
                }
              }
            }
          ],
          description:
            "The event is fired when the Anchor bar is switched from moving to fixed or the other way round."
        }
      ],
      methods: [
        {
          name: "_resumeScroll",
          visibility: "restricted",
          description:
            "Un-sets the flag that deactivates scrolling requested with the <code>sap.uxap.ObjectPageLayout.prototype._scrollTo</code> function This flag is used by RTA for the purpose of postponing/resuming the auto-scrolling of the ObjectPage to its selected section so that the scrolling does not start before RTA operation fully completed"
        },
        {
          name: "_suppressScroll",
          visibility: "restricted",
          description:
            "Sets a flag to [temporarily] deactivate any scrolling requested with the <code>sap.uxap.ObjectPageLayout.prototype._scrollTo</code> function This flag is used by RTA for the purpose of postponing the auto-scrolling of the ObjectPage to its selected section so that the scrolling does not start before RTA operation fully completed"
        },
        {
          name: "_triggerVisibleSubSectionsEvents",
          visibility: "restricted",
          description:
            "Resets the internal information of which subsections are in view and immediately calls the layout calculation so that an event <code>subSectionEnteredViewPort</code> is fired for the subsections that are actually in view. Use this method after a change in bindings to the existing object, since it's layout might have changed and the app needs to react to the new subsections in view."
        },
        {
          name: "addHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oHeaderContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The headerContent to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some headerContent to the aggregation {@link #getHeaderContent headerContent}."
        },
        {
          name: "addSection",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSection",
              type: "sap.uxap.ObjectPageSection",
              optional: false,
              description: "The section to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some section to the aggregation {@link #getSections sections}."
        },
        {
          name: "attachEditHeaderButtonPress",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageLayout</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:editHeaderButtonPress editHeaderButtonPress} event of this <code>sap.uxap.ObjectPageLayout</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.uxap.ObjectPageLayout</code> itself.\n\nThe event is fired when the Edit Header button is pressed"
        },
        {
          name: "attachNavigate",
          visibility: "public",
          since: "1.40",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageLayout</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:navigate navigate} event of this <code>sap.uxap.ObjectPageLayout</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.uxap.ObjectPageLayout</code> itself.\n\nThe event is fired when the selected section is changed using the navigation."
        },
        {
          name: "attachSectionChange",
          visibility: "public",
          since: "1.73",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageLayout</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:sectionChange sectionChange} event of this <code>sap.uxap.ObjectPageLayout</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.uxap.ObjectPageLayout</code> itself.\n\nFired when the current section is changed by scrolling."
        },
        {
          name: "attachToggleAnchorBar",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oData",
              type: "object",
              optional: true,
              description:
                "An application-specific payload object that will be passed to the event handler along with the event object when firing the event"
            },
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object to call the event handler with. Defaults to this <code>sap.uxap.ObjectPageLayout</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:toggleAnchorBar toggleAnchorBar} event of this <code>sap.uxap.ObjectPageLayout</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.uxap.ObjectPageLayout</code> itself.\n\nThe event is fired when the Anchor bar is switched from moving to fixed or the other way round."
        },
        {
          name: "destroyFooter",
          visibility: "public",
          since: "1.40",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the footer in the aggregation {@link #getFooter footer}."
        },
        {
          name: "destroyHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the headerContent in the aggregation {@link #getHeaderContent headerContent}."
        },
        {
          name: "destroyHeaderTitle",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the headerTitle in the aggregation {@link #getHeaderTitle headerTitle}."
        },
        {
          name: "destroyLandmarkInfo",
          visibility: "public",
          since: "1.61",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the landmarkInfo in the aggregation {@link #getLandmarkInfo landmarkInfo}."
        },
        {
          name: "destroySections",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the sections in the aggregation {@link #getSections sections}."
        },
        {
          name: "detachEditHeaderButtonPress",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:editHeaderButtonPress editHeaderButtonPress} event of this <code>sap.uxap.ObjectPageLayout</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachNavigate",
          visibility: "public",
          since: "1.40",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:navigate navigate} event of this <code>sap.uxap.ObjectPageLayout</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachSectionChange",
          visibility: "public",
          since: "1.73",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:sectionChange sectionChange} event of this <code>sap.uxap.ObjectPageLayout</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachToggleAnchorBar",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "fnFunction",
              type: "function",
              optional: false,
              description: "The function to be called, when the event occurs"
            },
            {
              name: "oListener",
              type: "object",
              optional: true,
              description:
                "Context object on which the given function had to be called"
            }
          ],
          description:
            "Detaches event handler <code>fnFunction</code> from the {@link #event:toggleAnchorBar toggleAnchorBar} event of this <code>sap.uxap.ObjectPageLayout</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.uxap.ObjectPageLayout with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireEditHeaderButtonPress",
          visibility: "protected",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:editHeaderButtonPress editHeaderButtonPress} to attached listeners."
        },
        {
          name: "fireNavigate",
          visibility: "protected",
          since: "1.40",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                section: {
                  name: "section",
                  type: "sap.uxap.ObjectPageSection",
                  optional: true,
                  description: "The selected section object."
                },
                subSection: {
                  name: "subSection",
                  type: "sap.uxap.ObjectPageSubSection",
                  optional: true,
                  description: "The selected subsection object."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:navigate navigate} to attached listeners."
        },
        {
          name: "fireSectionChange",
          visibility: "protected",
          since: "1.73",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                section: {
                  name: "section",
                  type: "sap.uxap.ObjectPageSection",
                  optional: true,
                  description: "The section which the layout is scrolled to."
                },
                subSection: {
                  name: "subSection",
                  type: "sap.uxap.ObjectPageSubSection",
                  optional: true,
                  description: "The subsection which the layout is scrolled to."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:sectionChange sectionChange} to attached listeners."
        },
        {
          name: "fireToggleAnchorBar",
          visibility: "protected",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                fixed: {
                  name: "fixed",
                  type: "boolean",
                  optional: true,
                  description:
                    "False indicates that the Anchor bar has just detached from the Header and became part of the scrolling area. True means that the Anchor bar has just snapped to the Header."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:toggleAnchorBar toggleAnchorBar} to attached listeners."
        },
        {
          name: "getAlwaysShowContentHeader",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "boolean",
            description:
              "Value of property <code>alwaysShowContentHeader</code>"
          },
          description:
            "Gets current value of property {@link #getAlwaysShowContentHeader alwaysShowContentHeader}.\n\nDetermines whether Header Content will always be expanded on desktop.\n\n<b>Note</b>: This property is only taken into account if an instance of <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getBackgroundDesignAnchorBar",
          visibility: "public",
          since: "1.58",
          returnValue: {
            type: "sap.m.BackgroundDesign",
            description:
              "Value of property <code>backgroundDesignAnchorBar</code>"
          },
          description:
            "Gets current value of property {@link #getBackgroundDesignAnchorBar backgroundDesignAnchorBar}.\n\nDetermines the background color of the <code>AnchorBar</code>.\n\n<b>Note:</b> The default value of <code>backgroundDesignAnchorBar</code> property is null. If the property is not set, the color of the background is <code>@sapUiObjectHeaderBackground</code>, which depends on the specific theme."
        },
        {
          name: "getEnableLazyLoading",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>enableLazyLoading</code>"
          },
          description:
            "Gets current value of property {@link #getEnableLazyLoading enableLazyLoading}.\n\nEnable lazy loading for the Object page Subsections.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getFlexEnabled",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>flexEnabled</code>"
          },
          description:
            "Gets current value of property {@link #getFlexEnabled flexEnabled}.\n\nSpecifies whether the object page enables flexibility features, such as hiding and adding sections.<br> For more information about SAPUI5 flexibility, refer to the Developer Guide.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getFooter",
          visibility: "public",
          since: "1.40",
          returnValue: {
            type: "sap.m.IBar"
          },
          description:
            "Gets content of aggregation {@link #getFooter footer}.\n\nObject page floating footer."
        },
        {
          name: "getHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]"
          },
          description:
            "Gets content of aggregation {@link #getHeaderContent headerContent}.\n\nObject page header content - the dynamic part of the Object page header."
        },
        {
          name: "getHeaderContentPinnable",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>headerContentPinnable</code>"
          },
          description:
            "Gets current value of property {@link #getHeaderContentPinnable headerContentPinnable}.\n\nDetermines whether the Header Content area can be pinned.\n\nWhen set to <code>true</code>, a pin button is displayed within the Header Content area. The pin button allows the user to make the Header Content always visible at the top of the page above any scrollable content.\n\n<b>Note:</b> This property is only taken into account if an instance of <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is used for the <code>headerTitle</code> aggregation.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getHeaderTitle",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.IHeaderTitle"
          },
          description:
            "Gets content of aggregation {@link #getHeaderTitle headerTitle}.\n\nObject page header title - the upper, always static, part of the Object page header."
        },
        {
          name: "getHeight",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>height</code>"
          },
          description:
            "Gets current value of property {@link #getHeight height}.\n\nDetermines the height of the ObjectPage.\n\nDefault value is <code>100%</code>."
        },
        {
          name: "getIsChildPage",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>isChildPage</code>"
          },
          description:
            "Gets current value of property {@link #getIsChildPage isChildPage}.\n\nDetermines whether the page is a child page and renders it with a different design. Child pages have an additional (darker/lighter) stripe on the left side of their header content area.\n\n<b>Note</b>: This property is only taken into account if an instance of <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getLandmarkInfo",
          visibility: "public",
          since: "1.61",
          returnValue: {
            type: "sap.uxap.ObjectPageAccessibleLandmarkInfo"
          },
          description:
            "Gets content of aggregation {@link #getLandmarkInfo landmarkInfo}.\n\nAccessible landmark settings to be applied on the containers of the <code>sap.uxap.ObjectPageLayout</code> control.\n\nIf not set, no landmarks will be written."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.uxap.ObjectPageLayout."
        },
        {
          name: "getPreserveHeaderStateOnScroll",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "boolean",
            description:
              "Value of property <code>preserveHeaderStateOnScroll</code>"
          },
          description:
            "Gets current value of property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.\n\nPreserves the current header state when scrolling. For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.\n\n<b>Notes:</b> <ul><li>This property is only taken into account if an instance of <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is used for the <code>headerTitle</code> aggregation.</li> <li>Based on internal rules, the value of the property is not always taken into account - for example, when the control is rendered on tablet or mobile and the control`s title and header are with height larger than the given threshold.</li></ul>\n\nDefault value is <code>false</code>."
        },
        {
          name: "getScrollDelegate",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "object"
          },
          description:
            "Returns an sap.ui.core.delegate.ScrollEnablement object used to handle scrolling"
        },
        {
          name: "getScrollingSectionId",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "string"
          },
          description:
            "Returns the UI5 ID of the Section that is currently being scrolled."
        },
        {
          name: "getSections",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSection[]"
          },
          description:
            "Gets content of aggregation {@link #getSections sections}.\n\nThe sections that make up the Object page content area."
        },
        {
          name: "getSectionTitleLevel",
          visibility: "public",
          since: "1.44.0",
          returnValue: {
            type: "sap.ui.core.TitleLevel",
            description: "Value of property <code>sectionTitleLevel</code>"
          },
          description:
            "Gets current value of property {@link #getSectionTitleLevel sectionTitleLevel}.\n\nDetermines the ARIA level of the <code>ObjectPageSection</code> and <code>ObjectPageSubSection</code> titles. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.\n\n<br><b>Note:</b> <ul> <li>Defining a <code>sectionTitleLevel</code> will add <code>aria-level</code> attribute from 1 to 6 instead of changing the titles` HTML tag from H1 to H6. <br>For example: if <code>sectionTitleLevel</code> is <code>TitleLevel.H1</code>, it will result as aria-level of 1 added to the <code>ObjectPageSection</code> title. </li>\n\n<li> The <code>ObjectPageSubSection</code> title would have <code>aria-level</code> one level lower than the defined. For example: if <code>sectionTitleLevel</code> is <code>TitleLevel.H1</code>, it will result as aria-level of 2 added to the <code>ObjectPageSubSection</code> title.</li>\n\n<li> It is possible to define a <code>titleLevel</code> on <code>ObjectPageSection</code> or <code>ObjectPageSubSection</code> level. In this case the value of this property will be ignored. </li> </ul>\n\nDefault value is <code>Auto</code>."
        },
        {
          name: "getSelectedSection",
          visibility: "public",
          since: "1.44.0",
          returnValue: {
            type: "sap.ui.core.ID"
          },
          description:
            "ID of the element which is the current target of the association {@link #getSelectedSection selectedSection}, or <code>null</code>."
        },
        {
          name: "getShowAnchorBar",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showAnchorBar</code>"
          },
          description:
            "Gets current value of property {@link #getShowAnchorBar showAnchorBar}.\n\nDetermines whether the Navigation bar (Anchor bar) is displayed.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getShowAnchorBarPopover",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showAnchorBarPopover</code>"
          },
          description:
            "Gets current value of property {@link #getShowAnchorBarPopover showAnchorBarPopover}.\n\nDetermines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getShowEditHeaderButton",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showEditHeaderButton</code>"
          },
          description:
            "Gets current value of property {@link #getShowEditHeaderButton showEditHeaderButton}.\n\nDetermines whether an Edit button will be displayed in Header Content.\n\n<b>Note</b>: This property is only taken into account if an instance of <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getShowFooter",
          visibility: "public",
          since: "1.40",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showFooter</code>"
          },
          description:
            "Gets current value of property {@link #getShowFooter showFooter}.\n\nDetermines whether the footer is visible.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getShowHeaderContent",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showHeaderContent</code>"
          },
          description:
            "Gets current value of property {@link #getShowHeaderContent showHeaderContent}.\n\nDetermines the visibility of the Header content (headerContent aggregation).\n\nDefault value is <code>true</code>."
        },
        {
          name: "getShowOnlyHighImportance",
          visibility: "public",
          since: "1.32.0",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showOnlyHighImportance</code>"
          },
          description:
            "Gets current value of property {@link #getShowOnlyHighImportance showOnlyHighImportance}.\n\nDetermines whether sections and subsections with importance Low and Medium are hidden even on large screens.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getShowTitleInHeaderContent",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description:
              "Value of property <code>showTitleInHeaderContent</code>"
          },
          description:
            "Gets current value of property {@link #getShowTitleInHeaderContent showTitleInHeaderContent}.\n\nDetermines whether the title, image, markers and selectTitleArrow are shown in the Header content area.\n\n<b>Note</b>: This property is only taken into account if an instance of <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.</li>\n\nDefault value is <code>false</code>."
        },
        {
          name: "getSubSectionLayout",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSubSectionLayout",
            description: "Value of property <code>subSectionLayout</code>"
          },
          description:
            "Gets current value of property {@link #getSubSectionLayout subSectionLayout}.\n\nDetermines whether Subsection titles are displayed on top or to the left of the Subsection content.\n\nDefault value is <code>TitleOnTop</code>."
        },
        {
          name: "getToggleHeaderOnTitleClick",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "boolean",
            description:
              "Value of property <code>toggleHeaderOnTitleClick</code>"
          },
          description:
            "Gets current value of property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.\n\nDetermines whether the user can switch between the expanded/collapsed states of the <code>sap.uxap.ObjectPageDynamicHeaderContent</code> by clicking on the <code>sap.uxap.ObjectPageDynamicHeaderTitle</code>. If set to <code>false</code>, the <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is not clickable and the application must provide other means for expanding/collapsing the <code>sap.uxap.ObjectPageDynamicHeaderContent</code>, if necessary.\n\n<b>Note:</b> This property is only taken into account if an instance of <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is used for the <code>headerTitle</code> aggregation.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getUpperCaseAnchorBar",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>upperCaseAnchorBar</code>"
          },
          description:
            "Gets current value of property {@link #getUpperCaseAnchorBar upperCaseAnchorBar}.\n\nDetermines whether the Anchor bar items are displayed in upper case.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getUseIconTabBar",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>useIconTabBar</code>"
          },
          description:
            "Gets current value of property {@link #getUseIconTabBar useIconTabBar}.\n\nDetermines whether the navigation mode is tab-based instead of the default anchor bar. If enabled, the sections are displayed separately on each tab rather than having all of them visible at the same time.\n\n<b>Note:</b> Keep in mind that the <code>sap.m.IconTabBar</code> control is no longer used for the tab navigation mode.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getUseTwoColumnsForLargeScreen",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description:
              "Value of property <code>useTwoColumnsForLargeScreen</code>"
          },
          description:
            "Gets current value of property {@link #getUseTwoColumnsForLargeScreen useTwoColumnsForLargeScreen}.\n\nDetermines whether the to use two column layout for the L screen size.\n\nDefault value is <code>false</code>."
        },
        {
          name: "indexOfHeaderContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oHeaderContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The headerContent whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getHeaderContent headerContent}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfSection",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oSection",
              type: "sap.uxap.ObjectPageSection",
              optional: false,
              description: "The section whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.uxap.ObjectPageSection</code> in the aggregation {@link #getSections sections}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oHeaderContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The headerContent to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the headerContent should be inserted at; for a negative value of <code>iIndex</code>, the headerContent is inserted at position 0; for a value greater than the current size of the aggregation, the headerContent is inserted at the last position"
            }
          ],
          description:
            "Inserts a headerContent into the aggregation {@link #getHeaderContent headerContent}."
        },
        {
          name: "insertSection",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSection",
              type: "sap.uxap.ObjectPageSection",
              optional: false,
              description:
                "The section to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the section should be inserted at; for a negative value of <code>iIndex</code>, the section is inserted at position 0; for a value greater than the current size of the aggregation, the section is inserted at the last position"
            }
          ],
          description:
            "Inserts a section into the aggregation {@link #getSections sections}."
        },
        {
          name: "invalidate",
          visibility: "protected",
          parameters: [
            {
              name: "oOrigin",
              type: "sap.ui.base.ManagedObject",
              optional: true,
              description:
                "Child control for which the method was called</br> If the child is an instance of <code>sap.uxap.ObjectPageSection</code> that corresponds to an inactive tab, the invalidation will be suppressed (in iconTabBar mode)"
            }
          ],
          description: "This triggers rerendering of itself and its children."
        },
        {
          name: "removeAllHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getHeaderContent headerContent}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllSections",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSection[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getSections sections}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed headerContent or <code>null</code>"
          },
          parameters: [
            {
              name: "vHeaderContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The headerContent to remove or its index or id"
            }
          ],
          description:
            "Removes a headerContent from the aggregation {@link #getHeaderContent headerContent}."
        },
        {
          name: "removeSection",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSection",
            description: "The removed section or <code>null</code>"
          },
          parameters: [
            {
              name: "vSection",
              type: "int|string|sap.uxap.ObjectPageSection",
              optional: false,
              description: "The section to remove or its index or id"
            }
          ],
          description:
            "Removes a section from the aggregation {@link #getSections sections}."
        },
        {
          name: "scrollToSection",
          visibility: "public",
          "ui5-metamodel": true,
          parameters: [
            {
              name: "sId",
              type: "string",
              optional: false,
              description: "The Section ID to scroll to"
            },
            {
              name: "iDuration",
              type: "int",
              optional: false,
              description: "Scroll duration (in ms). Default value is 0"
            },
            {
              name: "iOffset",
              type: "int",
              optional: false,
              description: "Additional pixels to scroll"
            }
          ],
          description: "Scrolls the Object page to the given Section."
        },
        {
          name: "setAlwaysShowContentHeader",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bAlwaysShowContentHeader",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>alwaysShowContentHeader</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getAlwaysShowContentHeader alwaysShowContentHeader}.\n\nDetermines whether Header Content will always be expanded on desktop.\n\n<b>Note</b>: This property is only taken into account if an instance of <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setBackgroundDesignAnchorBar",
          visibility: "public",
          since: "1.58",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description: "<code>this</code> to allow method chaining"
          },
          parameters: [
            {
              name: "sBackgroundDesignAnchorBar",
              type: "sap.m.BackgroundDesign",
              optional: false,
              description:
                "new value of the <code>backgroundDesignAnchorBar</code>"
            }
          ],
          description:
            "Sets the value of the <code>backgroundDesignAnchorBar</code> property."
        },
        {
          name: "setEnableLazyLoading",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEnableLazyLoading",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>enableLazyLoading</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEnableLazyLoading enableLazyLoading}.\n\nEnable lazy loading for the Object page Subsections.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setFlexEnabled",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFlexEnabled",
              type: "boolean",
              optional: false,
              description: "New value for property <code>flexEnabled</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFlexEnabled flexEnabled}.\n\nSpecifies whether the object page enables flexibility features, such as hiding and adding sections.<br> For more information about SAPUI5 flexibility, refer to the Developer Guide.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setFooter",
          visibility: "public",
          since: "1.40",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFooter",
              type: "sap.m.IBar",
              optional: false,
              description: "The footer to set"
            }
          ],
          description: "Sets the aggregated {@link #getFooter footer}."
        },
        {
          name: "setHeaderContentPinnable",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bHeaderContentPinnable",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>headerContentPinnable</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHeaderContentPinnable headerContentPinnable}.\n\nDetermines whether the Header Content area can be pinned.\n\nWhen set to <code>true</code>, a pin button is displayed within the Header Content area. The pin button allows the user to make the Header Content always visible at the top of the page above any scrollable content.\n\n<b>Note:</b> This property is only taken into account if an instance of <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is used for the <code>headerTitle</code> aggregation.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setHeaderTitle",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oHeaderTitle",
              type: "sap.uxap.IHeaderTitle",
              optional: false,
              description: "The headerTitle to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getHeaderTitle headerTitle}."
        },
        {
          name: "setHeight",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sHeight",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>height</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHeight height}.\n\nDetermines the height of the ObjectPage.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>100%</code>."
        },
        {
          name: "setIsChildPage",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bIsChildPage",
              type: "boolean",
              optional: false,
              description: "New value for property <code>isChildPage</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getIsChildPage isChildPage}.\n\nDetermines whether the page is a child page and renders it with a different design. Child pages have an additional (darker/lighter) stripe on the left side of their header content area.\n\n<b>Note</b>: This property is only taken into account if an instance of <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setLandmarkInfo",
          visibility: "public",
          since: "1.61",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oLandmarkInfo",
              type: "sap.uxap.ObjectPageAccessibleLandmarkInfo",
              optional: false,
              description: "The landmarkInfo to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getLandmarkInfo landmarkInfo}."
        },
        {
          name: "setPreserveHeaderStateOnScroll",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bPreserveHeaderStateOnScroll",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>preserveHeaderStateOnScroll</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.\n\nPreserves the current header state when scrolling. For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.\n\n<b>Notes:</b> <ul><li>This property is only taken into account if an instance of <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is used for the <code>headerTitle</code> aggregation.</li> <li>Based on internal rules, the value of the property is not always taken into account - for example, when the control is rendered on tablet or mobile and the control`s title and header are with height larger than the given threshold.</li></ul>\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setSectionTitleLevel",
          visibility: "public",
          since: "1.44.0",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sSectionTitleLevel",
              type: "sap.ui.core.TitleLevel",
              optional: false,
              description:
                "New value for property <code>sectionTitleLevel</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSectionTitleLevel sectionTitleLevel}.\n\nDetermines the ARIA level of the <code>ObjectPageSection</code> and <code>ObjectPageSubSection</code> titles. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.\n\n<br><b>Note:</b> <ul> <li>Defining a <code>sectionTitleLevel</code> will add <code>aria-level</code> attribute from 1 to 6 instead of changing the titles` HTML tag from H1 to H6. <br>For example: if <code>sectionTitleLevel</code> is <code>TitleLevel.H1</code>, it will result as aria-level of 1 added to the <code>ObjectPageSection</code> title. </li>\n\n<li> The <code>ObjectPageSubSection</code> title would have <code>aria-level</code> one level lower than the defined. For example: if <code>sectionTitleLevel</code> is <code>TitleLevel.H1</code>, it will result as aria-level of 2 added to the <code>ObjectPageSubSection</code> title.</li>\n\n<li> It is possible to define a <code>titleLevel</code> on <code>ObjectPageSection</code> or <code>ObjectPageSubSection</code> level. In this case the value of this property will be ignored. </li> </ul>\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Auto</code>."
        },
        {
          name: "setSelectedSection",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description: "Returns <code>this</code> to allow method chaining"
          },
          parameters: [
            {
              name: "sId",
              type: "string|sap.uxap.ObjectPageSection",
              optional: false,
              description:
                "The ID or the section instance that should be selected Note that <code>null</code> or <code>undefined</code> are not valid arguments"
            }
          ],
          description:
            "Sets the section that should be selected.\n\nThe section can either be given by itself or by its id.\n\nNote that an argument of <code>null</code> will cause the first visible section be set as <code>selectedSection</code>. This is because the <code>sap.uxap.ObjectPageLayout</code> should always have one of its sections selected (unless it has 0 visible sections)."
        },
        {
          name: "setShowAnchorBar",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowAnchorBar",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showAnchorBar</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowAnchorBar showAnchorBar}.\n\nDetermines whether the Navigation bar (Anchor bar) is displayed.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setShowAnchorBarPopover",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowAnchorBarPopover",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>showAnchorBarPopover</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowAnchorBarPopover showAnchorBarPopover}.\n\nDetermines whether to show a Popover with Subsection links when clicking on Section links in the Anchor bar.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setShowEditHeaderButton",
          visibility: "public",
          since: "1.34.0",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowEditHeaderButton",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>showEditHeaderButton</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowEditHeaderButton showEditHeaderButton}.\n\nDetermines whether an Edit button will be displayed in Header Content.\n\n<b>Note</b>: This property is only taken into account if an instance of <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setShowFooter",
          visibility: "public",
          since: "1.40",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowFooter",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showFooter</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowFooter showFooter}.\n\nDetermines whether the footer is visible.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setShowHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowHeaderContent",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>showHeaderContent</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowHeaderContent showHeaderContent}.\n\nDetermines the visibility of the Header content (headerContent aggregation).\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setShowOnlyHighImportance",
          visibility: "public",
          since: "1.32.0",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowOnlyHighImportance",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>showOnlyHighImportance</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowOnlyHighImportance showOnlyHighImportance}.\n\nDetermines whether sections and subsections with importance Low and Medium are hidden even on large screens.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setShowTitleInHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowTitleInHeaderContent",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>showTitleInHeaderContent</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowTitleInHeaderContent showTitleInHeaderContent}.\n\nDetermines whether the title, image, markers and selectTitleArrow are shown in the Header content area.\n\n<b>Note</b>: This property is only taken into account if an instance of <code>sap.uxap.ObjectPageHeader</code> is used for the <code>headerTitle</code> aggregation.</li>\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setSubSectionLayout",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sSubSectionLayout",
              type: "sap.uxap.ObjectPageSubSectionLayout",
              optional: false,
              description:
                "New value for property <code>subSectionLayout</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSubSectionLayout subSectionLayout}.\n\nDetermines whether Subsection titles are displayed on top or to the left of the Subsection content.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>TitleOnTop</code>."
        },
        {
          name: "setToggleHeaderOnTitleClick",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bToggleHeaderOnTitleClick",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>toggleHeaderOnTitleClick</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.\n\nDetermines whether the user can switch between the expanded/collapsed states of the <code>sap.uxap.ObjectPageDynamicHeaderContent</code> by clicking on the <code>sap.uxap.ObjectPageDynamicHeaderTitle</code>. If set to <code>false</code>, the <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is not clickable and the application must provide other means for expanding/collapsing the <code>sap.uxap.ObjectPageDynamicHeaderContent</code>, if necessary.\n\n<b>Note:</b> This property is only taken into account if an instance of <code>sap.uxap.ObjectPageDynamicHeaderTitle</code> is used for the <code>headerTitle</code> aggregation.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setUpperCaseAnchorBar",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bUpperCaseAnchorBar",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>upperCaseAnchorBar</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getUpperCaseAnchorBar upperCaseAnchorBar}.\n\nDetermines whether the Anchor bar items are displayed in upper case.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setUseIconTabBar",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bUseIconTabBar",
              type: "boolean",
              optional: false,
              description: "New value for property <code>useIconTabBar</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getUseIconTabBar useIconTabBar}.\n\nDetermines whether the navigation mode is tab-based instead of the default anchor bar. If enabled, the sections are displayed separately on each tab rather than having all of them visible at the same time.\n\n<b>Note:</b> Keep in mind that the <code>sap.m.IconTabBar</code> control is no longer used for the tab navigation mode.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setUseTwoColumnsForLargeScreen",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bUseTwoColumnsForLargeScreen",
              type: "boolean",
              optional: false,
              description:
                "New value for property <code>useTwoColumnsForLargeScreen</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getUseTwoColumnsForLargeScreen useTwoColumnsForLargeScreen}.\n\nDetermines whether the to use two column layout for the L screen size.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.uxap.ObjectPageLazyLoader",
      basename: "ObjectPageLazyLoader",
      resource: "sap/uxap/ObjectPageLazyLoader.js",
      module: "sap/uxap/ObjectPageLazyLoader",
      export: "",
      static: true,
      visibility: "public",
      since: "1.38",
      extends: "sap.ui.core.Element",
      description:
        'A helper element that enables a "stashed-based" lazy loading approach for the content of the {@link sap.uxap.ObjectPageSubSection} control.\n\n<code>ObjectPageLazyLoader</code> is intended to be used in a declarative way only (for example, in a view) with the <code>stashed</code> property set to <code>true</code>, and is recommended to be used only once per subsection as its sole content.\n\n<code>ObjectPageLazyLoader</code> utilizes UI5\'s stashing mechanism and is a lightweight alternative to the native block-based Lazy Loading of the <code>ObjectPageLayout</code>. Wrapping the content of a subsection in an <code>ObjectPageLazyLoader</code> with <code>stashed=true</code> will make the content unstash automatically as the user scrolls.\n\n<b>Note:</b> Subsections are required to have an ID when used with <code>ObjectPageLazyLoader</code>.',
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        aggregations: [
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "Controls to be displayed after this element is unstashed",
            methods: [
              "getContent",
              "destroyContent",
              "insertContent",
              "addContent",
              "removeContent",
              "indexOfContent",
              "removeAllContent"
            ]
          }
        ],
        defaultAggregation: "content"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>ObjectPageLazyLoader</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addContent",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLazyLoader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some content to the aggregation {@link #getContent content}."
        },
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLazyLoader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the content in the aggregation {@link #getContent content}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.uxap.ObjectPageLazyLoader with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}."
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]"
          },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nControls to be displayed after this element is unstashed"
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.uxap.ObjectPageLazyLoader."
        },
        {
          name: "indexOfContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getContent content}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertContent",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageLazyLoader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The content to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the content should be inserted at; for a negative value of <code>iIndex</code>, the content is inserted at position 0; for a value greater than the current size of the aggregation, the content is inserted at the last position"
            }
          ],
          description:
            "Inserts a content into the aggregation {@link #getContent content}."
        },
        {
          name: "removeAllContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getContent content}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed content or <code>null</code>"
          },
          parameters: [
            {
              name: "vContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The content to remove or its index or id"
            }
          ],
          description:
            "Removes a content from the aggregation {@link #getContent content}."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.uxap.ObjectPageSection",
      basename: "ObjectPageSection",
      resource: "sap/uxap/ObjectPageSection.js",
      module: "sap/uxap/ObjectPageSection",
      export: "",
      static: true,
      visibility: "public",
      since: "1.26",
      extends: "sap.uxap.ObjectPageSectionBase",
      description:
        "Top-level information container of an {@link sap.uxap.ObjectPageLayout}.\n\nThe <code>ObjectPageSection</code>'s purpose is to aggregate subsections.\n\n<b>Note:</b> This control is intended to be used only as part of the <code>ObjectPageLayout</code>.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "showTitle",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            description:
              "Determines whether to display the Section title or not.",
            methods: ["getShowTitle", "setShowTitle"]
          },
          {
            name: "titleUppercase",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            description:
              "Determines whether the Section title is displayed in upper case.",
            methods: ["getTitleUppercase", "setTitleUppercase"]
          }
        ],
        aggregations: [
          {
            name: "subSections",
            singularName: "subSection",
            type: "sap.uxap.ObjectPageSubSection",
            cardinality: "0..n",
            visibility: "public",
            description: "The list of Subsections.",
            methods: [
              "getSubSections",
              "destroySubSections",
              "insertSubSection",
              "addSubSection",
              "removeSubSection",
              "indexOfSubSection",
              "removeAllSubSections"
            ]
          },
          {
            name: "ariaLabelledBy",
            singularName: "ariaLabelledBy",
            type: "sap.ui.core.InvisibleText",
            cardinality: "0..1",
            visibility: "hidden",
            description: "Screen Reader ariaLabelledBy",
            methods: [
              "getAriaLabelledBy",
              "destroyAriaLabelledBy",
              "setAriaLabelledBy"
            ]
          },
          {
            name: "_showHideAllButton",
            singularName: "_showHideAllButton",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_showHideAllButton",
              "destroy_showHideAllButton",
              "set_showHideAllButton"
            ]
          },
          {
            name: "_showHideButton",
            singularName: "_showHideButton",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_showHideButton",
              "destroy_showHideButton",
              "set_showHideButton"
            ]
          }
        ],
        defaultAggregation: "subSections",
        associations: [
          {
            name: "selectedSubSection",
            singularName: "selectedSubSection",
            type: "sap.uxap.ObjectPageSubSection",
            cardinality: "0..1",
            visibility: "public",
            description: "The most recently selected Subsection by the user.",
            methods: ["getSelectedSubSection", "setSelectedSubSection"]
          }
        ],
        designtime: "sap/uxap/designtime/ObjectPageSection.designtime"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>ObjectPageSection</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addSubSection",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSubSection",
              type: "sap.uxap.ObjectPageSubSection",
              optional: false,
              description:
                "The subSection to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some subSection to the aggregation {@link #getSubSections subSections}."
        },
        {
          name: "destroySubSections",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the subSections in the aggregation {@link #getSubSections subSections}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.uxap.ObjectPageSection with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.uxap.ObjectPageSectionBase.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.uxap.ObjectPageSection."
        },
        {
          name: "getSelectedSubSection",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID"
          },
          description:
            "ID of the element which is the current target of the association {@link #getSelectedSubSection selectedSubSection}, or <code>null</code>."
        },
        {
          name: "getShowTitle",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showTitle</code>"
          },
          description:
            "Gets current value of property {@link #getShowTitle showTitle}.\n\nDetermines whether to display the Section title or not.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getSubSections",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSubSection[]"
          },
          description:
            "Gets content of aggregation {@link #getSubSections subSections}.\n\nThe list of Subsections."
        },
        {
          name: "getTitleUppercase",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>titleUppercase</code>"
          },
          description:
            "Gets current value of property {@link #getTitleUppercase titleUppercase}.\n\nDetermines whether the Section title is displayed in upper case.\n\nDefault value is <code>true</code>."
        },
        {
          name: "indexOfSubSection",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oSubSection",
              type: "sap.uxap.ObjectPageSubSection",
              optional: false,
              description: "The subSection whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.uxap.ObjectPageSubSection</code> in the aggregation {@link #getSubSections subSections}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertSubSection",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSubSection",
              type: "sap.uxap.ObjectPageSubSection",
              optional: false,
              description:
                "The subSection to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the subSection should be inserted at; for a negative value of <code>iIndex</code>, the subSection is inserted at position 0; for a value greater than the current size of the aggregation, the subSection is inserted at the last position"
            }
          ],
          description:
            "Inserts a subSection into the aggregation {@link #getSubSections subSections}."
        },
        {
          name: "removeAllSubSections",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSubSection[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getSubSections subSections}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeSubSection",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSubSection",
            description: "The removed subSection or <code>null</code>"
          },
          parameters: [
            {
              name: "vSubSection",
              type: "int|string|sap.uxap.ObjectPageSubSection",
              optional: false,
              description: "The subSection to remove or its index or id"
            }
          ],
          description:
            "Removes a subSection from the aggregation {@link #getSubSections subSections}."
        },
        {
          name: "setSelectedSubSection",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSelectedSubSection",
              type: "sap.ui.core.ID|sap.uxap.ObjectPageSubSection",
              optional: false,
              description:
                "ID of an element which becomes the new target of this selectedSubSection association; alternatively, an element instance may be given"
            }
          ],
          description:
            "Sets the associated {@link #getSelectedSubSection selectedSubSection}."
        },
        {
          name: "setShowTitle",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bShowTitle",
              type: "boolean",
              optional: false,
              description: "New value for property <code>showTitle</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getShowTitle showTitle}.\n\nDetermines whether to display the Section title or not.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setTitleUppercase",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bTitleUppercase",
              type: "boolean",
              optional: false,
              description: "New value for property <code>titleUppercase</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getTitleUppercase titleUppercase}.\n\nDetermines whether the Section title is displayed in upper case.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.uxap.ObjectPageSectionBase",
      basename: "ObjectPageSectionBase",
      resource: "sap/uxap/ObjectPageSectionBase.js",
      module: "sap/uxap/ObjectPageSectionBase",
      export: "",
      abstract: true,
      static: true,
      visibility: "public",
      since: "1.26",
      extends: "sap.ui.core.Control",
      description:
        "An abstract container for sections and subsections in the {@link sap.uxap.ObjectPageLayout}.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "title",
            type: "string",
            defaultValue: null,
            group: "Appearance",
            visibility: "public",
            description: "Section Title",
            methods: ["getTitle", "setTitle"]
          },
          {
            name: "titleLevel",
            type: "sap.ui.core.TitleLevel",
            defaultValue: "Auto",
            group: "Appearance",
            visibility: "public",
            since: "1.44.0",
            description:
              "Determines the ARIA level of the <code>ObjectPageSectionBase</code> title. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.\n\n<b>Note:</b> Defining a <code>titleLevel</code> will add <code>aria-level</code> attribute from 1 to 6, instead of changing the <code>ObjectPageSectionBase</code> title HTML tag from H1 to H6. <br>For example: if <code>titleLevel</code> is <code>TitleLevel.H1</code>, it will result as aria-level of 1 added to the <code>ObjectPageSectionBase</code> title.",
            methods: ["getTitleLevel", "setTitleLevel"]
          },
          {
            name: "visible",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            description: "Invisible ObjectPageSectionBase are not rendered",
            methods: ["getVisible", "setVisible"]
          },
          {
            name: "importance",
            type: "sap.uxap.Importance",
            defaultValue: "High",
            group: "Behavior",
            visibility: "public",
            since: "1.32.0",
            description:
              "Determines whether the section will be hidden on low resolutions.",
            methods: ["getImportance", "setImportance"]
          }
        ],
        aggregations: [
          {
            name: "customAnchorBarButton",
            singularName: "customAnchorBarButton",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "public",
            description:
              "The custom button that will provide a link to the section in the ObjectPageLayout anchor bar. This button will be used as a custom template to be into the ObjectPageLayout anchorBar area, therefore property changes happening on this button template after the first rendering won't affect the actual button copy used in the anchorBar.\n\nIf you want to change some of the button properties, you would need to bind them to a model.",
            methods: [
              "getCustomAnchorBarButton",
              "destroyCustomAnchorBarButton",
              "setCustomAnchorBarButton"
            ]
          }
        ]
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>ObjectPageSectionBase</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "connectToModels",
          visibility: "public",
          "ui5-metamodel": true,
          description: "Explicitly ask to connect to the UI5 model tree"
        },
        {
          name: "destroyCustomAnchorBarButton",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSectionBase",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the customAnchorBarButton in the aggregation {@link #getCustomAnchorBarButton customAnchorBarButton}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.uxap.ObjectPageSectionBase with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getCustomAnchorBarButton",
          visibility: "public",
          returnValue: {
            type: "sap.m.Button"
          },
          description:
            "Gets content of aggregation {@link #getCustomAnchorBarButton customAnchorBarButton}.\n\nThe custom button that will provide a link to the section in the ObjectPageLayout anchor bar. This button will be used as a custom template to be into the ObjectPageLayout anchorBar area, therefore property changes happening on this button template after the first rendering won't affect the actual button copy used in the anchorBar.\n\nIf you want to change some of the button properties, you would need to bind them to a model."
        },
        {
          name: "getImportance",
          visibility: "public",
          since: "1.32.0",
          returnValue: {
            type: "sap.uxap.Importance",
            description: "Value of property <code>importance</code>"
          },
          description:
            "Gets current value of property {@link #getImportance importance}.\n\nDetermines whether the section will be hidden on low resolutions.\n\nDefault value is <code>High</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.uxap.ObjectPageSectionBase."
        },
        {
          name: "getTitle",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>title</code>"
          },
          description:
            "Gets current value of property {@link #getTitle title}.\n\nSection Title"
        },
        {
          name: "getTitleLevel",
          visibility: "public",
          since: "1.44.0",
          returnValue: {
            type: "sap.ui.core.TitleLevel",
            description: "Value of property <code>titleLevel</code>"
          },
          description:
            "Gets current value of property {@link #getTitleLevel titleLevel}.\n\nDetermines the ARIA level of the <code>ObjectPageSectionBase</code> title. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.\n\n<b>Note:</b> Defining a <code>titleLevel</code> will add <code>aria-level</code> attribute from 1 to 6, instead of changing the <code>ObjectPageSectionBase</code> title HTML tag from H1 to H6. <br>For example: if <code>titleLevel</code> is <code>TitleLevel.H1</code>, it will result as aria-level of 1 added to the <code>ObjectPageSectionBase</code> title.\n\nDefault value is <code>Auto</code>."
        },
        {
          name: "getVisible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>visible</code>"
          },
          description:
            "Gets current value of property {@link #getVisible visible}.\n\nInvisible ObjectPageSectionBase are not rendered\n\nDefault value is <code>true</code>."
        },
        {
          name: "setCustomAnchorBarButton",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSectionBase",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oCustomAnchorBarButton",
              type: "sap.m.Button",
              optional: false,
              description: "The customAnchorBarButton to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getCustomAnchorBarButton customAnchorBarButton}."
        },
        {
          name: "setImportance",
          visibility: "public",
          since: "1.32.0",
          returnValue: {
            type: "sap.uxap.ObjectPageSectionBase",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sImportance",
              type: "sap.uxap.Importance",
              optional: false,
              description: "New value for property <code>importance</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getImportance importance}.\n\nDetermines whether the section will be hidden on low resolutions.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>High</code>."
        },
        {
          name: "setTitle",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSectionBase",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sTitle",
              type: "string",
              optional: false,
              description: "New value for property <code>title</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getTitle title}.\n\nSection Title\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setTitleLevel",
          visibility: "public",
          since: "1.44.0",
          returnValue: {
            type: "sap.uxap.ObjectPageSectionBase",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sTitleLevel",
              type: "sap.ui.core.TitleLevel",
              optional: false,
              description: "New value for property <code>titleLevel</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getTitleLevel titleLevel}.\n\nDetermines the ARIA level of the <code>ObjectPageSectionBase</code> title. The ARIA level is used by assisting technologies, such as screen readers, to create a hierarchical site map for faster navigation.\n\n<b>Note:</b> Defining a <code>titleLevel</code> will add <code>aria-level</code> attribute from 1 to 6, instead of changing the <code>ObjectPageSectionBase</code> title HTML tag from H1 to H6. <br>For example: if <code>titleLevel</code> is <code>TitleLevel.H1</code>, it will result as aria-level of 1 added to the <code>ObjectPageSectionBase</code> title.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Auto</code>."
        },
        {
          name: "setVisible",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSectionBase",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bVisible",
              type: "boolean",
              optional: false,
              description: "New value for property <code>visible</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getVisible visible}.\n\nInvisible ObjectPageSectionBase are not rendered\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.uxap.ObjectPageSubSection",
      basename: "ObjectPageSubSection",
      resource: "sap/uxap/ObjectPageSubSection.js",
      module: "sap/uxap/ObjectPageSubSection",
      export: "",
      static: true,
      visibility: "public",
      since: "1.26",
      extends: "sap.uxap.ObjectPageSectionBase",
      description:
        'Second-level information container of an {@link sap.uxap.ObjectPageLayout}.\n\nAn <code>ObjectPageSubSection</code> may only be used within sections in the <code>ObjectPageLayout</code>. Subsections are used to display primary information in the <code>blocks</code> aggregation (always visible) and not-so-important information in the <code>moreBlocks</code> aggregation. The content in the <code>moreBlocks</code> aggregation is initially hidden, but may be accessed with a "See more" (...) button.\n\nAs of version 1.61, applications can enable auto-expand of the subsections to fit the sections container by adding the <code>sapUxAPObjectPageSubSectionFitContainer</code> class to the subsection. This is useful in situations where the sub-section contains a control that has “100%” height, for example, <code>sap.ui.table.Table</code> with <code>visibleRowCountMode</code> set to <code>Auto</code>.\n\n<b>Note:</b> This control is intended to be used only as part of the <code>ObjectPageLayout</code>.',
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "mode",
            type: "sap.uxap.ObjectPageSubSectionMode",
            defaultValue: "Collapsed",
            group: "Appearance",
            visibility: "public",
            description:
              "A mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant if these aggregations use Object page blocks.",
            methods: ["getMode", "setMode"]
          },
          {
            name: "titleUppercase",
            type: "boolean",
            defaultValue: false,
            group: "Appearance",
            visibility: "public",
            description:
              "Determines whether the Subsection title is displayed in upper case.",
            methods: ["getTitleUppercase", "setTitleUppercase"]
          }
        ],
        aggregations: [
          {
            name: "_grid",
            singularName: "_grid",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "hidden",
            description: "Internal grid aggregation",
            methods: ["get_grid", "destroy_grid", "set_grid"]
          },
          {
            name: "blocks",
            singularName: "block",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              'Controls to be displayed in the subsection\n\n<b>Note:</b> The SAP Fiori Design guidelines require that the <code>ObjectPageHeader</code>\'s content and the <code>ObjectPage</code>\'s subsection content are aligned vertically. When using {@link sap.ui.layout.form.Form}, {@link sap.m.Panel}, {@link sap.m.Table} and {@link sap.m.List} in the subsection content area of <code>ObjectPage</code>, if the content is not already aligned, you need to adjust their left text offset to achieve the vertical alignment. To do this, apply the <code>sapUxAPObjectPageSubSectionAlignContent</code> CSS class to them and set their <code>width</code> property to <code>auto</code> (if not set by default).\n\nDon\'t use the <code>sapUxAPObjectPageSubSectionAlignContent</code> CSS class in the following cases: <ul> <li>In combination with <code>ResponsiveLayout</code>, because <code>ResponsiveLayout</code> applies custom paddings. To align items with <code>sapUxAPObjectPageSubSectionAlignContent</code>, use <code>ColumnLayout</code>.</li> <li>If there are multiple controls in the same <code>ObjectPageSubSection</code>, because the CSS class interferes with their alignment.</li> </ul> Example:\n\n<pre>\n<code> &lt;Panel class="sapUxAPObjectPageSubSectionAlignContent" width="auto"&gt;&lt;/Panel&gt; </code>\n</pre>',
            methods: [
              "getBlocks",
              "destroyBlocks",
              "insertBlock",
              "addBlock",
              "removeBlock",
              "indexOfBlock",
              "removeAllBlocks"
            ]
          },
          {
            name: "moreBlocks",
            singularName: "moreBlock",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "Additional controls to display when the Show more / See all / (...) button is pressed",
            methods: [
              "getMoreBlocks",
              "destroyMoreBlocks",
              "insertMoreBlock",
              "addMoreBlock",
              "removeMoreBlock",
              "indexOfMoreBlock",
              "removeAllMoreBlocks"
            ]
          },
          {
            name: "actions",
            singularName: "action",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "Actions available for this subsection.\n\nAlthough this aggregation accepts type <code>sap.ui.core.Control</code>, it is strongly recommended to use only simple controls, such as buttons, so that the layout of the app is preserved.\n\n<b>Note:</b> Keep in mind that the controls set in the <code>actions</code> aggregation of <code>ObjectPageSubSection</code> do NOT have overflow behavior. If the available space is not enough, the controls will be displayed on more lines.",
            methods: [
              "getActions",
              "destroyActions",
              "insertAction",
              "addAction",
              "removeAction",
              "indexOfAction",
              "removeAllActions"
            ]
          }
        ],
        defaultAggregation: "blocks",
        designtime: "sap/uxap/designtime/ObjectPageSubSection.designtime"
      },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "sId",
            type: "string",
            optional: true,
            description:
              "ID for the new control, generated automatically if no ID is given"
          },
          {
            name: "mSettings",
            type: "object",
            optional: true,
            description: "Initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>ObjectPageSubSection</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "_setBorrowedTitleDomId",
          visibility: "restricted",
          parameters: [
            {
              name: "sId",
              type: "string",
              optional: false,
              description: "the ID of the DOM Element"
            }
          ],
          description: "Sets DOM ID of the Title borrowed from this SubSection"
        },
        {
          name: "addAction",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSubSection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oAction",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The action to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some action to the aggregation {@link #getActions actions}."
        },
        {
          name: "addBlock",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSubSection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oBlock",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The block to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some block to the aggregation {@link #getBlocks blocks}."
        },
        {
          name: "addMoreBlock",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSubSection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oMoreBlock",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The moreBlock to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some moreBlock to the aggregation {@link #getMoreBlocks moreBlocks}."
        },
        {
          name: "destroyActions",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSubSection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the actions in the aggregation {@link #getActions actions}."
        },
        {
          name: "destroyBlocks",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSubSection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the blocks in the aggregation {@link #getBlocks blocks}."
        },
        {
          name: "destroyMoreBlocks",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSubSection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the moreBlocks in the aggregation {@link #getMoreBlocks moreBlocks}."
        },
        {
          name: "extend",
          visibility: "public",
          static: true,
          returnValue: {
            type: "function",
            description: "Created class / constructor function"
          },
          parameters: [
            {
              name: "sClassName",
              type: "string",
              optional: false,
              description: "Name of the class being created"
            },
            {
              name: "oClassInfo",
              type: "object",
              optional: true,
              description: "Object literal with information about the class"
            },
            {
              name: "FNMetaImpl",
              type: "function",
              optional: true,
              description:
                "Constructor function for the metadata object; if not given, it defaults to the metadata implementation used by this class"
            }
          ],
          description:
            "Creates a new subclass of class sap.uxap.ObjectPageSubSection with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.uxap.ObjectPageSectionBase.extend}."
        },
        {
          name: "getActions",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]"
          },
          description:
            "Gets content of aggregation {@link #getActions actions}.\n\nActions available for this subsection.\n\nAlthough this aggregation accepts type <code>sap.ui.core.Control</code>, it is strongly recommended to use only simple controls, such as buttons, so that the layout of the app is preserved.\n\n<b>Note:</b> Keep in mind that the controls set in the <code>actions</code> aggregation of <code>ObjectPageSubSection</code> do NOT have overflow behavior. If the available space is not enough, the controls will be displayed on more lines."
        },
        {
          name: "getBlocks",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]"
          },
          description:
            'Gets content of aggregation {@link #getBlocks blocks}.\n\nControls to be displayed in the subsection\n\n<b>Note:</b> The SAP Fiori Design guidelines require that the <code>ObjectPageHeader</code>\'s content and the <code>ObjectPage</code>\'s subsection content are aligned vertically. When using {@link sap.ui.layout.form.Form}, {@link sap.m.Panel}, {@link sap.m.Table} and {@link sap.m.List} in the subsection content area of <code>ObjectPage</code>, if the content is not already aligned, you need to adjust their left text offset to achieve the vertical alignment. To do this, apply the <code>sapUxAPObjectPageSubSectionAlignContent</code> CSS class to them and set their <code>width</code> property to <code>auto</code> (if not set by default).\n\nDon\'t use the <code>sapUxAPObjectPageSubSectionAlignContent</code> CSS class in the following cases: <ul> <li>In combination with <code>ResponsiveLayout</code>, because <code>ResponsiveLayout</code> applies custom paddings. To align items with <code>sapUxAPObjectPageSubSectionAlignContent</code>, use <code>ColumnLayout</code>.</li> <li>If there are multiple controls in the same <code>ObjectPageSubSection</code>, because the CSS class interferes with their alignment.</li> </ul> Example:\n\n<pre>\n<code> &lt;Panel class="sapUxAPObjectPageSubSectionAlignContent" width="auto"&gt;&lt;/Panel&gt; </code>\n</pre>'
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.core.ElementMetadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.uxap.ObjectPageSubSection."
        },
        {
          name: "getMode",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSubSectionMode",
            description: "Value of property <code>mode</code>"
          },
          description:
            "Gets current value of property {@link #getMode mode}.\n\nA mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant if these aggregations use Object page blocks.\n\nDefault value is <code>Collapsed</code>."
        },
        {
          name: "getMoreBlocks",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]"
          },
          description:
            "Gets content of aggregation {@link #getMoreBlocks moreBlocks}.\n\nAdditional controls to display when the Show more / See all / (...) button is pressed"
        },
        {
          name: "getTitleUppercase",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>titleUppercase</code>"
          },
          description:
            "Gets current value of property {@link #getTitleUppercase titleUppercase}.\n\nDetermines whether the Subsection title is displayed in upper case.\n\nDefault value is <code>false</code>."
        },
        {
          name: "indexOfAction",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oAction",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The action whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getActions actions}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfBlock",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oBlock",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The block whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getBlocks blocks}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfMoreBlock",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oMoreBlock",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The moreBlock whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getMoreBlocks moreBlocks}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertAction",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSubSection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oAction",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The action to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the action should be inserted at; for a negative value of <code>iIndex</code>, the action is inserted at position 0; for a value greater than the current size of the aggregation, the action is inserted at the last position"
            }
          ],
          description:
            "Inserts a action into the aggregation {@link #getActions actions}."
        },
        {
          name: "insertBlock",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSubSection",
            description:
              "The <code>sap.uxap.ObjectPageSubSection</code> instance"
          },
          parameters: [
            {
              name: "oObject",
              type: "sap.uxap.BlockBase",
              optional: false,
              description: "The <code>sap.uxap.BlockBase</code> instance"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description: "The insertion index"
            }
          ],
          description:
            "Adds an <code>sap.uxap.BlockBase</code> instance to the <code>blocks</code> aggregation.\n\n<b>Note:</b> The <code>insertBlock</code> method is not supported by design. If used, it works as an <code>addBlock</code>, adding a single block to the end of the <code>blocks</code> aggregation."
        },
        {
          name: "insertMoreBlock",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSubSection",
            description:
              "The <code>sap.uxap.ObjectPageSubSection</code> instance"
          },
          parameters: [
            {
              name: "oObject",
              type: "sap.uxap.BlockBase",
              optional: false,
              description: "The <code>sap.uxap.BlockBase</code> instance"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description: "The insertion index"
            }
          ],
          description:
            "Adds an <code>sap.uxap.BlockBase</code> instance to the <code>moreBlocks</code> aggregation.\n\n<b>Note:</b> The <code>insertMoreBlock</code> method is not supported by design. If used, it works as an <code>addMoreBlock</code>, adding a single block to the end of the <code>moreBlocks</code> aggregation."
        },
        {
          name: "removeAction",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed action or <code>null</code>"
          },
          parameters: [
            {
              name: "vAction",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The action to remove or its index or id"
            }
          ],
          description:
            "Removes a action from the aggregation {@link #getActions actions}."
        },
        {
          name: "removeAllActions",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getActions actions}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllBlocks",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getBlocks blocks}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllMoreBlocks",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getMoreBlocks moreBlocks}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeBlock",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed block or <code>null</code>"
          },
          parameters: [
            {
              name: "vBlock",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The block to remove or its index or id"
            }
          ],
          description:
            "Removes a block from the aggregation {@link #getBlocks blocks}."
        },
        {
          name: "removeMoreBlock",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed moreBlock or <code>null</code>"
          },
          parameters: [
            {
              name: "vMoreBlock",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The moreBlock to remove or its index or id"
            }
          ],
          description:
            "Removes a moreBlock from the aggregation {@link #getMoreBlocks moreBlocks}."
        },
        {
          name: "setMode",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSubSection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sMode",
              type: "sap.uxap.ObjectPageSubSectionMode",
              optional: false,
              description: "New value for property <code>mode</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getMode mode}.\n\nA mode property that will be passed to the controls in the blocks and moreBlocks aggregations. Only relevant if these aggregations use Object page blocks.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Collapsed</code>."
        },
        {
          name: "setTitleUppercase",
          visibility: "public",
          returnValue: {
            type: "sap.uxap.ObjectPageSubSection",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bTitleUppercase",
              type: "boolean",
              optional: false,
              description: "New value for property <code>titleUppercase</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getTitleUppercase titleUppercase}.\n\nDetermines whether the Subsection title is displayed in upper case.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.uxap.ObjectPageSubSectionLayout",
      basename: "ObjectPageSubSectionLayout",
      resource: "sap/uxap/library.js",
      module: "sap/uxap/library",
      export: "ObjectPageSubSectionLayout",
      static: true,
      visibility: "public",
      description:
        "Used by the <code>ObjectPagSubSection</code> control to define which layout to apply.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "enum"
      },
      properties: [
        {
          name: "TitleOnLeft",
          visibility: "public",
          static: true,
          type: "string",
          description: "Title and actions on the left, inside the block area."
        },
        {
          name: "TitleOnTop",
          visibility: "public",
          static: true,
          type: "string",
          description: "Title and actions on top of the block area."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.uxap.ObjectPageSubSectionMode",
      basename: "ObjectPageSubSectionMode",
      resource: "sap/uxap/library.js",
      module: "sap/uxap/library",
      export: "ObjectPageSubSectionMode",
      static: true,
      visibility: "public",
      description:
        "Used by the <code>ObjectPageLayout</code> control to define which layout to use (either Collapsed or Expanded).",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "enum"
      },
      properties: [
        {
          name: "Collapsed",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Collapsed mode of display of the <code>ObjectPageLayout</code>."
        },
        {
          name: "Expanded",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Expanded mode of displaying the <code>ObjectPageLayout</code>."
        }
      ]
    }
  ]
};