import { LibraryFile } from "../../../src/apiJson";

export const api: LibraryFile = {
  "$schema-ref": "http://schemas.sap.com/sapui5/designtime/api.json/1.0",
  version: "1.60.14",
  symbols: [
    {
      kind: "namespace",
      name: "sap.f",
      basename: "f",
      resource: "sap/f/library.js",
      module: "sap/f/library",
      export: "",
      static: true,
      visibility: "public",
      description:
        "SAPUI5 library with controls specialized for SAP Fiori apps."
    },
    {
      kind: "class",
      name: "sap.f.Avatar",
      basename: "Avatar",
      resource: "sap/f/Avatar.js",
      module: "sap/f/Avatar",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46",
      extends: "sap.ui.core.Control",
      description:
        "An image-like control that has different display options for representing images, initials, and icons.\n\n<h3>Overview</h3>\n\nThe <code>Avatar</code> control allows the usage of different content, shapes, and sizes depending on the use case.\n\nThe content types that can be displayed are either images, icons, or initials. The shape can be circular or square. There are several predefined sizes, as well as an option to set a custom size.\n\n<h3>Usage</h3>\n\nUp to two Latin letters can be displayed as initials in an <code>Avatar</code>. If there are more than two letters, or if there's a non-Latin character present, a default image placeholder will be created.\n\nThere are two options for how the displayed image can fit inside the available area: <ul> <li>Cover - the image is scaled to cover all of the available area</li> <li>Contain - the image is scaled as large as possible while both its height and width fit inside the avalable area</li> </ul> <b>Note:</b> To set a custom size for the <code>Avatar</code>, you have to choose the <code>Custom</code> value for the <code>displaySize</code> property. Then, you have to set both the <code>customDisplaySize</code> and <code>customFontSize</code> properties.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "src",
            type: "sap.ui.core.URI",
            defaultValue: null,
            group: "Data",
            visibility: "public",
            description: "Determines the path to the desired image or icon.",
            methods: ["getSrc", "setSrc"]
          },
          {
            name: "initials",
            type: "string",
            defaultValue: null,
            group: "Data",
            visibility: "public",
            description: "Defines the displayed initials.",
            methods: ["getInitials", "setInitials"]
          },
          {
            name: "displayShape",
            type: "sap.f.AvatarShape",
            defaultValue: "Circle",
            group: "Appearance",
            visibility: "public",
            description: "Defines the shape of the <code>Avatar</code>.",
            methods: ["getDisplayShape", "setDisplayShape"]
          },
          {
            name: "displaySize",
            type: "sap.f.AvatarSize",
            defaultValue: "S",
            group: "Appearance",
            visibility: "public",
            description:
              "Sets a predefined display size of the <code>Avatar</code>.",
            methods: ["getDisplaySize", "setDisplaySize"]
          },
          {
            name: "customDisplaySize",
            type: "sap.ui.core.CSSSize",
            defaultValue: "3rem",
            group: "Appearance",
            visibility: "public",
            description:
              "Specifies custom display size of the <code>Avatar</code>.\n\n<b>Note:</b> It takes effect if the <code>displaySize</code> property is set to <code>Custom</code>.",
            methods: ["getCustomDisplaySize", "setCustomDisplaySize"]
          },
          {
            name: "customFontSize",
            type: "sap.ui.core.CSSSize",
            defaultValue: "1.125rem",
            group: "Appearance",
            visibility: "public",
            description:
              "Specifies custom font size of the <code>Avatar</code>.\n\n<b>Note:</b> It takes effect if the <code>displaySize</code> property is set to <code>Custom</code>.",
            methods: ["getCustomFontSize", "setCustomFontSize"]
          },
          {
            name: "imageFitType",
            type: "sap.f.AvatarImageFitType",
            defaultValue: "Cover",
            group: "Appearance",
            visibility: "public",
            description:
              "Specifies how an image would fit in the <code>Avatar</code>.",
            methods: ["getImageFitType", "setImageFitType"]
          }
        ],
        aggregations: [
          {
            name: "detailBox",
            singularName: "detailBox",
            type: "sap.m.LightBox",
            cardinality: "0..1",
            visibility: "public",
            since: "1.48",
            bindable: true,
            description:
              "A <code>sap.m.LightBox</code> instance, that will be opened automatically when the user interacts with the <code>Avatar</code> control.\n\nThe <code>press</code> event will still be fired.",
            methods: [
              "getDetailBox",
              "destroyDetailBox",
              "setDetailBox",
              "bindDetailBox",
              "unbindDetailBox"
            ]
          }
        ],
        associations: [
          {
            name: "ariaDescribedBy",
            singularName: "ariaDescribedBy",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "Association to controls / ids which describe this control (see WAI-ARIA attribute aria-describedby).",
            methods: [
              "getAriaDescribedBy",
              "addAriaDescribedBy",
              "removeAriaDescribedBy",
              "removeAllAriaDescribedBy"
            ]
          },
          {
            name: "ariaLabelledBy",
            singularName: "ariaLabelledBy",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "Association to controls / ids which label this control (see WAI-ARIA attribute aria-labelledBy).",
            methods: [
              "getAriaLabelledBy",
              "addAriaLabelledBy",
              "removeAriaLabelledBy",
              "removeAllAriaLabelledBy"
            ]
          }
        ],
        events: [
          {
            name: "press",
            visibility: "public",
            description: "Fired when the user selects the control.",
            methods: ["attachPress", "detachPress", "firePress"]
          }
        ],
        designtime: "sap/f/designtime/Avatar.designtime"
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
          "Constructor for a new <code>Avatar</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.",
        references: [
          "{@link fiori:https://experience.sap.com/fiori-design-web/avatar/ Avatar}"
        ]
      },
      events: [
        {
          name: "press",
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
          description: "Fired when the user selects the control."
        }
      ],
      methods: [
        {
          name: "addAriaDescribedBy",
          visibility: "public",
          returnValue: {
            type: "sap.f.Avatar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vAriaDescribedBy",
              type: "sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description:
                "The ariaDescribedBy to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some ariaDescribedBy into the association {@link #getAriaDescribedBy ariaDescribedBy}."
        },
        {
          name: "addAriaLabelledBy",
          visibility: "public",
          returnValue: {
            type: "sap.f.Avatar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "vAriaLabelledBy",
              type: "sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description:
                "The ariaLabelledBy to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some ariaLabelledBy into the association {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "attachPress",
          visibility: "public",
          returnValue: {
            type: "sap.f.Avatar",
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
                "Context object to call the event handler with. Defaults to this <code>sap.f.Avatar</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.f.Avatar</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.Avatar</code> itself.\n\nFired when the user selects the control."
        },
        {
          name: "bindDetailBox",
          visibility: "public",
          since: "1.48",
          returnValue: {
            type: "sap.f.Avatar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oBindingInfo",
              type: "object",
              optional: false,
              description: "The binding information"
            }
          ],
          description:
            "Binds aggregation {@link #getDetailBox detailBox} to model data.\n\nSee {@link sap.ui.base.ManagedObject#bindAggregation ManagedObject.bindAggregation} for a detailed description of the possible properties of <code>oBindingInfo</code>."
        },
        {
          name: "destroyDetailBox",
          visibility: "public",
          since: "1.48",
          returnValue: {
            type: "sap.f.Avatar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the detailBox in the aggregation {@link #getDetailBox detailBox}."
        },
        {
          name: "detachPress",
          visibility: "public",
          returnValue: {
            type: "sap.f.Avatar",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.f.Avatar</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.Avatar with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "firePress",
          visibility: "protected",
          returnValue: {
            type: "sap.f.Avatar",
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
            "Fires event {@link #event:press press} to attached listeners."
        },
        {
          name: "getAriaDescribedBy",
          visibility: "public",
          returnValue: { type: "sap.ui.core.ID[]" },
          description:
            "Returns array of IDs of the elements which are the current targets of the association {@link #getAriaDescribedBy ariaDescribedBy}."
        },
        {
          name: "getAriaLabelledBy",
          visibility: "public",
          returnValue: { type: "sap.ui.core.ID[]" },
          description:
            "Returns array of IDs of the elements which are the current targets of the association {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "getCustomDisplaySize",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>customDisplaySize</code>"
          },
          description:
            "Gets current value of property {@link #getCustomDisplaySize customDisplaySize}.\n\nSpecifies custom display size of the <code>Avatar</code>.\n\n<b>Note:</b> It takes effect if the <code>displaySize</code> property is set to <code>Custom</code>.\n\nDefault value is <code>3rem</code>."
        },
        {
          name: "getCustomFontSize",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.CSSSize",
            description: "Value of property <code>customFontSize</code>"
          },
          description:
            "Gets current value of property {@link #getCustomFontSize customFontSize}.\n\nSpecifies custom font size of the <code>Avatar</code>.\n\n<b>Note:</b> It takes effect if the <code>displaySize</code> property is set to <code>Custom</code>.\n\nDefault value is <code>1.125rem</code>."
        },
        {
          name: "getDetailBox",
          visibility: "public",
          since: "1.48",
          returnValue: { type: "sap.m.LightBox" },
          description:
            "Gets content of aggregation {@link #getDetailBox detailBox}.\n\nA <code>sap.m.LightBox</code> instance, that will be opened automatically when the user interacts with the <code>Avatar</code> control.\n\nThe <code>press</code> event will still be fired."
        },
        {
          name: "getDisplayShape",
          visibility: "public",
          returnValue: {
            type: "sap.f.AvatarShape",
            description: "Value of property <code>displayShape</code>"
          },
          description:
            "Gets current value of property {@link #getDisplayShape displayShape}.\n\nDefines the shape of the <code>Avatar</code>.\n\nDefault value is <code>Circle</code>."
        },
        {
          name: "getDisplaySize",
          visibility: "public",
          returnValue: {
            type: "sap.f.AvatarSize",
            description: "Value of property <code>displaySize</code>"
          },
          description:
            "Gets current value of property {@link #getDisplaySize displaySize}.\n\nSets a predefined display size of the <code>Avatar</code>.\n\nDefault value is <code>S</code>."
        },
        {
          name: "getImageFitType",
          visibility: "public",
          returnValue: {
            type: "sap.f.AvatarImageFitType",
            description: "Value of property <code>imageFitType</code>"
          },
          description:
            "Gets current value of property {@link #getImageFitType imageFitType}.\n\nSpecifies how an image would fit in the <code>Avatar</code>.\n\nDefault value is <code>Cover</code>."
        },
        {
          name: "getInitials",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>initials</code>"
          },
          description:
            "Gets current value of property {@link #getInitials initials}.\n\nDefines the displayed initials."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description: "Returns a metadata object for class sap.f.Avatar."
        },
        {
          name: "getSrc",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.URI",
            description: "Value of property <code>src</code>"
          },
          description:
            "Gets current value of property {@link #getSrc src}.\n\nDetermines the path to the desired image or icon."
        },
        {
          name: "removeAllAriaDescribedBy",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls in the association named {@link #getAriaDescribedBy ariaDescribedBy}."
        },
        {
          name: "removeAllAriaLabelledBy",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls in the association named {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "removeAriaDescribedBy",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID",
            description: "The removed ariaDescribedBy or <code>null</code>"
          },
          parameters: [
            {
              name: "vAriaDescribedBy",
              type: "int|sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description:
                "The ariaDescribedBy to be removed or its index or ID"
            }
          ],
          description:
            "Removes an ariaDescribedBy from the association named {@link #getAriaDescribedBy ariaDescribedBy}."
        },
        {
          name: "removeAriaLabelledBy",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.ID",
            description: "The removed ariaLabelledBy or <code>null</code>"
          },
          parameters: [
            {
              name: "vAriaLabelledBy",
              type: "int|sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description: "The ariaLabelledBy to be removed or its index or ID"
            }
          ],
          description:
            "Removes an ariaLabelledBy from the association named {@link #getAriaLabelledBy ariaLabelledBy}."
        },
        {
          name: "setCustomDisplaySize",
          visibility: "public",
          returnValue: {
            type: "sap.f.Avatar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sCustomDisplaySize",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description:
                "New value for property <code>customDisplaySize</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getCustomDisplaySize customDisplaySize}.\n\nSpecifies custom display size of the <code>Avatar</code>.\n\n<b>Note:</b> It takes effect if the <code>displaySize</code> property is set to <code>Custom</code>.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>3rem</code>."
        },
        {
          name: "setCustomFontSize",
          visibility: "public",
          returnValue: {
            type: "sap.f.Avatar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sCustomFontSize",
              type: "sap.ui.core.CSSSize",
              optional: false,
              description: "New value for property <code>customFontSize</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getCustomFontSize customFontSize}.\n\nSpecifies custom font size of the <code>Avatar</code>.\n\n<b>Note:</b> It takes effect if the <code>displaySize</code> property is set to <code>Custom</code>.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>1.125rem</code>."
        },
        {
          name: "setDetailBox",
          visibility: "public",
          since: "1.48",
          returnValue: {
            type: "object",
            description: "<code>this</code> for chaining"
          },
          parameters: [
            {
              name: "oLightBox",
              type: "sap.m.LightBox|undefined",
              optional: false,
              description:
                "Instance of the <code>LightBox</code> control or undefined"
            }
          ],
          description: "Sets the <code>detailBox</code> aggregation."
        },
        {
          name: "setDisplayShape",
          visibility: "public",
          returnValue: {
            type: "sap.f.Avatar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sDisplayShape",
              type: "sap.f.AvatarShape",
              optional: false,
              description: "New value for property <code>displayShape</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getDisplayShape displayShape}.\n\nDefines the shape of the <code>Avatar</code>.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Circle</code>."
        },
        {
          name: "setDisplaySize",
          visibility: "public",
          returnValue: {
            type: "sap.f.Avatar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sDisplaySize",
              type: "sap.f.AvatarSize",
              optional: false,
              description: "New value for property <code>displaySize</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getDisplaySize displaySize}.\n\nSets a predefined display size of the <code>Avatar</code>.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>S</code>."
        },
        {
          name: "setImageFitType",
          visibility: "public",
          returnValue: {
            type: "sap.f.Avatar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sImageFitType",
              type: "sap.f.AvatarImageFitType",
              optional: false,
              description: "New value for property <code>imageFitType</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getImageFitType imageFitType}.\n\nSpecifies how an image would fit in the <code>Avatar</code>.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Cover</code>."
        },
        {
          name: "setInitials",
          visibility: "public",
          returnValue: {
            type: "sap.f.Avatar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sInitials",
              type: "string",
              optional: false,
              description: "New value for property <code>initials</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getInitials initials}.\n\nDefines the displayed initials.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "setSrc",
          visibility: "public",
          returnValue: {
            type: "sap.f.Avatar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sSrc",
              type: "sap.ui.core.URI",
              optional: false,
              description: "New value for property <code>src</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getSrc src}.\n\nDetermines the path to the desired image or icon.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        },
        {
          name: "unbindDetailBox",
          visibility: "public",
          since: "1.48",
          returnValue: {
            type: "sap.f.Avatar",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Unbinds aggregation {@link #getDetailBox detailBox} from model data."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.f.AvatarImageFitType",
      basename: "AvatarImageFitType",
      resource: "sap/f/library.js",
      module: "sap/f/library",
      export: "AvatarImageFitType",
      static: true,
      visibility: "public",
      since: "1.46",
      description:
        "Types of image size and position that determine how an image fits in the {@link sap.f.Avatar} control area.",
      "ui5-metamodel": true,
      properties: [
        {
          name: "Contain",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "The image is scaled to the largest size so that both its width and height can fit in the control area."
        },
        {
          name: "Cover",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "The image is scaled to be large enough so that the control area is completely covered."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.f.AvatarShape",
      basename: "AvatarShape",
      resource: "sap/f/library.js",
      module: "sap/f/library",
      export: "AvatarShape",
      static: true,
      visibility: "public",
      since: "1.46",
      description: "Types of shape for the {@link sap.f.Avatar} control.",
      "ui5-metamodel": true,
      properties: [
        {
          name: "Circle",
          visibility: "public",
          static: true,
          type: "string",
          description: "Circular shape."
        },
        {
          name: "Square",
          visibility: "public",
          static: true,
          type: "string",
          description: "Square shape."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.f.AvatarSize",
      basename: "AvatarSize",
      resource: "sap/f/library.js",
      module: "sap/f/library",
      export: "AvatarSize",
      static: true,
      visibility: "public",
      since: "1.46",
      description: "Predefined sizes for the {@link sap.f.Avatar} control.",
      "ui5-metamodel": true,
      properties: [
        {
          name: "Custom",
          visibility: "public",
          static: true,
          type: "string",
          description: "Custom size"
        },
        {
          name: "L",
          visibility: "public",
          static: true,
          type: "string",
          description: "Control size - 5rem Font size - 2rem"
        },
        {
          name: "M",
          visibility: "public",
          static: true,
          type: "string",
          description: "Control size - 4rem Font size - 1.625rem"
        },
        {
          name: "S",
          visibility: "public",
          static: true,
          type: "string",
          description: "Control size - 3rem Font size - 1.125rem"
        },
        {
          name: "XL",
          visibility: "public",
          static: true,
          type: "string",
          description: "Control size - 7rem Font size - 2.75rem"
        },
        {
          name: "XS",
          visibility: "public",
          static: true,
          type: "string",
          description: "Control size - 2rem Font size - 0.75rem"
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.f.AvatarType",
      basename: "AvatarType",
      resource: "sap/f/library.js",
      module: "sap/f/library",
      export: "AvatarType",
      static: true,
      visibility: "public",
      since: "1.46",
      description:
        "Types of {@link sap.f.Avatar} based on the displayed content.",
      "ui5-metamodel": true,
      properties: [
        {
          name: "Icon",
          visibility: "public",
          static: true,
          type: "string",
          description: "The displayed content is an icon."
        },
        {
          name: "Image",
          visibility: "public",
          static: true,
          type: "string",
          description: "The displayed content is an image."
        },
        {
          name: "Initials",
          visibility: "public",
          static: true,
          type: "string",
          description: "The displayed content is initials."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.DynamicPage",
      basename: "DynamicPage",
      resource: "sap/f/DynamicPage.js",
      module: "sap/f/DynamicPage",
      export: "",
      static: true,
      visibility: "public",
      since: "1.42",
      extends: "sap.ui.core.Control",
      description:
        "A layout control, representing a web page, consisting of a title, header with dynamic behavior, a content area, and an optional floating footer.\n\n<h3>Overview</h3>\n\nThe control consist of several components:\n\n<ul><li>{@link sap.f.DynamicPageTitle DynamicPageTitle} - consists of a heading on the left side, content in the middle, and actions on the right. The displayed content changes based on the current mode of the {@link sap.f.DynamicPageHeader DynamicPageHeader}.</li> <li>{@link sap.f.DynamicPageHeader DynamicPageHeader} - a generic container, which can contain a single layout control and does not care about the content alignment and responsiveness. The header works in two modes - expanded and snapped and its behavior can be adjusted with the help of different properties.</li> <li>Content area - a generic container, which can have a single UI5 layout control and does not care about the content alignment and responsiveness.</li> <li>Footer - positioned at the bottom with a small offset and used for additional actions, the footer floats above the content. It can be any {@link sap.m.IBar} control.</li></ul>\n\n<h3>Usage</h3>\n\nUse the <code>DynamicPage</code> if you need to have a title, that is always visible and a header, that has configurable Expanding/Snapping functionality. If you don't need the Expanding/Snapping functionality it is better to use the {@link sap.m.Page} as a lighter control.\n\n<ul><b>Notes:</b> <li>If you're displaying a {@link sap.m.FlexBox} with non-adaptive content (doesn't stretch to fill the available space), it is recommended to set the <code>fitContainer</code> property of the {@link sap.m.FlexBox FlexBox} to <code>false</code>.</li> <li>If you are displaying a {@link sap.ui.table.Table}, keep in mind that it is non-adaptive and may cause unpredicted behavior for the <code>DynamicPage</code> on smaller screen sizes, such as mobile.</li> <li>Snapping of the {@link sap.f.DynamicPageTitle DynamicPageTitle} is not supported in the following case: When the <code>DynamicPage</code> has a scroll bar, the control usually scrolls to the snapping point - the point, where the {@link sap.f.DynamicPageHeader DynamicPageHeader} is scrolled out completely. However, when there is a scroll bar, but not enough content to reach the snapping point, the snapping is not possible using scrolling.</li> <li>When using {@link sap.ui.layout.form.Form}, {@link sap.m.Panel}, {@link sap.m.Table} and {@link sap.m.List} controls in the content of <code>DynamicPage</code>, you need to adjust their left text offset if you want to achieve vertical alignment between the <code>sap.f.DynamicPageHeader</code>`s content and <code>DynamicPage</code>`s content. For more information, see the documentation for the <code>content</code> aggregation.</li></ul>\n\n<h3>Responsive Behavior</h3>\n\nThe responsive behavior of the <code>DynamicPage</code> depends on the behavior of the content that is displayed. To adjust the <code>DynamicPage</code> content padding, the <code>sapUiContentPadding</code>, <code>sapUiNoContentPadding</code>, and <code>sapUiResponsiveContentPadding</code> CSS classes can be used.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "preserveHeaderStateOnScroll",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            description:
              "Preserves the current header state when scrolling. For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.\n\n<b>Note:</b> Based on internal rules, the value of the property is not always taken into account - for example, when the control is rendered on tablet or mobile and the control`s title and header are with height larger than the given threshold.",
            methods: [
              "getPreserveHeaderStateOnScroll",
              "setPreserveHeaderStateOnScroll"
            ]
          },
          {
            name: "headerExpanded",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description:
              "Determines whether the header is expanded.\n\nThe header can be also expanded/collapsed by user interaction, which requires the property to be internally mutated by the control to reflect the changed state.\n\n<b>Note:</b> As of version 1.48, you can initialize the control in collapsed header state by setting this property to <code>false</code>.",
            methods: ["getHeaderExpanded", "setHeaderExpanded"]
          },
          {
            name: "toggleHeaderOnTitleClick",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description:
              "Determines whether the user can switch between the expanded/collapsed states of the <code>DynamicPageHeader</code> by clicking on the <code>DynamicPageTitle</code> or by using the expand/collapse visual indicators, positioned at the bottom of the <code>DynamicPageTitle</code> and the <code>DynamicPageHeader</code>. If set to <code>false</code>, the <code>DynamicPageTitle</code> is not clickable, the visual indicators are not available and the application must provide other means for expanding/collapsing the <code>DynamicPageHeader</code>, if necessary.\n\n<b>Note: </b> This property is taken into account only if a non-empty <code>header</code> aggregation is provided.",
            methods: [
              "getToggleHeaderOnTitleClick",
              "setToggleHeaderOnTitleClick"
            ]
          },
          {
            name: "showFooter",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            description: "Determines whether the footer is visible.",
            methods: ["getShowFooter", "setShowFooter"]
          },
          {
            name: "fitContent",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            description:
              "Optimizes <code>DynamicPage</code> responsiveness on small screens and behavior when expanding/collapsing the <code>DynamicPageHeader</code>.\n\n<b>Note:</b> It is recommended to use this property when displaying content of adaptive controls that stretch to fill the available space. Such controls may be {@link sap.ui.table.Table} and {@link sap.ui.table.AnalyticalTable} depending on their settings.",
            methods: ["getFitContent", "setFitContent"]
          }
        ],
        aggregations: [
          {
            name: "title",
            singularName: "title",
            type: "sap.f.DynamicPageTitle",
            cardinality: "0..1",
            visibility: "public",
            description: "<code>DynamicPage</code> title.",
            methods: ["getTitle", "destroyTitle", "setTitle"]
          },
          {
            name: "header",
            singularName: "header",
            type: "sap.f.DynamicPageHeader",
            cardinality: "0..1",
            visibility: "public",
            description: "<code>DynamicPage</code> header.",
            methods: ["getHeader", "destroyHeader", "setHeader"]
          },
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "public",
            description:
              "<code>DynamicPage</code> content.\n\n<b>Note: </b> You can change the default paddings by adding the following CSS classes: <ul> <li><code>sapUiContentPadding</code></li> <li><code>sapUiNoContentPadding</code></li> <li><code>sapUiResponsiveContentPadding</code></li> </ul> For more information, see {@link topic:c71f6df62dae47ca8284310a6f5fc80a Using Container Content Padding CSS Classes}.\n\n<b>Note:</b> The SAP Fiori Design guidelines require that the <code>DynamicPageHeader</code>'s content and the <code>DynamicPage</code>'s content are aligned vertically. When using {@link sap.ui.layout.form.Form}, {@link sap.m.Panel}, {@link sap.m.Table} and {@link sap.m.List} in the content area of <code>DynamicPage</code>, if the content is not already aligned, you need to adjust their left text offset to achieve the vertical alignment. To do this, apply the <code>sapFDynamicPageAlignContent</code> CSS class to them and set their <code>width</code> property to <code>auto</code> (if not set by default).\n\nExample:\n\n<pre>\n<code> &lt;Panel class=“sapFDynamicPageAlignContent” width=“auto”&gt;&lt;/Panel&gt; </code>\n</pre>\n\nPlease keep in mind that the alignment is not possible in the following cases: <ul> <li> When the controls are placed in an {@link sap.ui.layout.Grid} or other layout controls that use <code>overflow:hidden</code> CSS property</li> <li> In case any of the following CSS classes is applied to <code>DynamicPage</code>: <code>sapUiContentPadding</code>, <code>sapUiNoContentPadding</code> or <code>sapUiResponsiveContentPadding</code></li> </ul>",
            methods: ["getContent", "destroyContent", "setContent"]
          },
          {
            name: "footer",
            singularName: "footer",
            type: "sap.m.IBar",
            cardinality: "0..1",
            visibility: "public",
            description: "<code>DynamicPage</code> floating footer.",
            methods: ["getFooter", "destroyFooter", "setFooter"]
          },
          {
            name: "_scrollBar",
            singularName: "_scrollBar",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "hidden",
            description:
              "<code>DynamicPage</code> custom <code>ScrollBar</code>.",
            methods: ["get_scrollBar", "destroy_scrollBar", "set_scrollBar"]
          }
        ],
        designtime: "sap/f/designtime/DynamicPage.designtime"
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
          "Constructor for a new <code>DynamicPage</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.",
        references: [
          "{@link fiori:https://experience.sap.com/fiori-design-web/dynamic-page-layout/ Dynamic Page}"
        ]
      },
      methods: [
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the content in the aggregation {@link #getContent content}."
        },
        {
          name: "destroyFooter",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the footer in the aggregation {@link #getFooter footer}."
        },
        {
          name: "destroyHeader",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the header in the aggregation {@link #getHeader header}."
        },
        {
          name: "destroyTitle",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the title in the aggregation {@link #getTitle title}."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.DynamicPage with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control" },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\n<code>DynamicPage</code> content.\n\n<b>Note: </b> You can change the default paddings by adding the following CSS classes: <ul> <li><code>sapUiContentPadding</code></li> <li><code>sapUiNoContentPadding</code></li> <li><code>sapUiResponsiveContentPadding</code></li> </ul> For more information, see {@link topic:c71f6df62dae47ca8284310a6f5fc80a Using Container Content Padding CSS Classes}.\n\n<b>Note:</b> The SAP Fiori Design guidelines require that the <code>DynamicPageHeader</code>'s content and the <code>DynamicPage</code>'s content are aligned vertically. When using {@link sap.ui.layout.form.Form}, {@link sap.m.Panel}, {@link sap.m.Table} and {@link sap.m.List} in the content area of <code>DynamicPage</code>, if the content is not already aligned, you need to adjust their left text offset to achieve the vertical alignment. To do this, apply the <code>sapFDynamicPageAlignContent</code> CSS class to them and set their <code>width</code> property to <code>auto</code> (if not set by default).\n\nExample:\n\n<pre>\n<code> &lt;Panel class=“sapFDynamicPageAlignContent” width=“auto”&gt;&lt;/Panel&gt; </code>\n</pre>\n\nPlease keep in mind that the alignment is not possible in the following cases: <ul> <li> When the controls are placed in an {@link sap.ui.layout.Grid} or other layout controls that use <code>overflow:hidden</code> CSS property</li> <li> In case any of the following CSS classes is applied to <code>DynamicPage</code>: <code>sapUiContentPadding</code>, <code>sapUiNoContentPadding</code> or <code>sapUiResponsiveContentPadding</code></li> </ul>"
        },
        {
          name: "getFitContent",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>fitContent</code>"
          },
          description:
            "Gets current value of property {@link #getFitContent fitContent}.\n\nOptimizes <code>DynamicPage</code> responsiveness on small screens and behavior when expanding/collapsing the <code>DynamicPageHeader</code>.\n\n<b>Note:</b> It is recommended to use this property when displaying content of adaptive controls that stretch to fill the available space. Such controls may be {@link sap.ui.table.Table} and {@link sap.ui.table.AnalyticalTable} depending on their settings.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getFooter",
          visibility: "public",
          returnValue: { type: "sap.m.IBar" },
          description:
            "Gets content of aggregation {@link #getFooter footer}.\n\n<code>DynamicPage</code> floating footer."
        },
        {
          name: "getHeader",
          visibility: "public",
          returnValue: { type: "sap.f.DynamicPageHeader" },
          description:
            "Gets content of aggregation {@link #getHeader header}.\n\n<code>DynamicPage</code> header."
        },
        {
          name: "getHeaderExpanded",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>headerExpanded</code>"
          },
          description:
            "Gets current value of property {@link #getHeaderExpanded headerExpanded}.\n\nDetermines whether the header is expanded.\n\nThe header can be also expanded/collapsed by user interaction, which requires the property to be internally mutated by the control to reflect the changed state.\n\n<b>Note:</b> As of version 1.48, you can initialize the control in collapsed header state by setting this property to <code>false</code>.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description: "Returns a metadata object for class sap.f.DynamicPage."
        },
        {
          name: "getPreserveHeaderStateOnScroll",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description:
              "Value of property <code>preserveHeaderStateOnScroll</code>"
          },
          description:
            "Gets current value of property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.\n\nPreserves the current header state when scrolling. For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.\n\n<b>Note:</b> Based on internal rules, the value of the property is not always taken into account - for example, when the control is rendered on tablet or mobile and the control`s title and header are with height larger than the given threshold.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getShowFooter",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showFooter</code>"
          },
          description:
            "Gets current value of property {@link #getShowFooter showFooter}.\n\nDetermines whether the footer is visible.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getTitle",
          visibility: "public",
          returnValue: { type: "sap.f.DynamicPageTitle" },
          description:
            "Gets content of aggregation {@link #getTitle title}.\n\n<code>DynamicPage</code> title."
        },
        {
          name: "getToggleHeaderOnTitleClick",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description:
              "Value of property <code>toggleHeaderOnTitleClick</code>"
          },
          description:
            "Gets current value of property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.\n\nDetermines whether the user can switch between the expanded/collapsed states of the <code>DynamicPageHeader</code> by clicking on the <code>DynamicPageTitle</code> or by using the expand/collapse visual indicators, positioned at the bottom of the <code>DynamicPageTitle</code> and the <code>DynamicPageHeader</code>. If set to <code>false</code>, the <code>DynamicPageTitle</code> is not clickable, the visual indicators are not available and the application must provide other means for expanding/collapsing the <code>DynamicPageHeader</code>, if necessary.\n\n<b>Note: </b> This property is taken into account only if a non-empty <code>header</code> aggregation is provided.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setContent",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content to set"
            }
          ],
          description: "Sets the aggregated {@link #getContent content}."
        },
        {
          name: "setFitContent",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bFitContent",
              type: "boolean",
              optional: false,
              description: "New value for property <code>fitContent</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getFitContent fitContent}.\n\nOptimizes <code>DynamicPage</code> responsiveness on small screens and behavior when expanding/collapsing the <code>DynamicPageHeader</code>.\n\n<b>Note:</b> It is recommended to use this property when displaying content of adaptive controls that stretch to fill the available space. Such controls may be {@link sap.ui.table.Table} and {@link sap.ui.table.AnalyticalTable} depending on their settings.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setFooter",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPage",
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
          name: "setHeader",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oHeader",
              type: "sap.f.DynamicPageHeader",
              optional: false,
              description: "The header to set"
            }
          ],
          description: "Sets the aggregated {@link #getHeader header}."
        },
        {
          name: "setHeaderExpanded",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bHeaderExpanded",
              type: "boolean",
              optional: false,
              description: "New value for property <code>headerExpanded</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHeaderExpanded headerExpanded}.\n\nDetermines whether the header is expanded.\n\nThe header can be also expanded/collapsed by user interaction, which requires the property to be internally mutated by the control to reflect the changed state.\n\n<b>Note:</b> As of version 1.48, you can initialize the control in collapsed header state by setting this property to <code>false</code>.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setPreserveHeaderStateOnScroll",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPage",
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
            "Sets a new value for property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.\n\nPreserves the current header state when scrolling. For example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.\n\n<b>Note:</b> Based on internal rules, the value of the property is not always taken into account - for example, when the control is rendered on tablet or mobile and the control`s title and header are with height larger than the given threshold.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setShowFooter",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPage",
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
          name: "setTitle",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oTitle",
              type: "sap.f.DynamicPageTitle",
              optional: false,
              description: "The title to set"
            }
          ],
          description: "Sets the aggregated {@link #getTitle title}."
        },
        {
          name: "setToggleHeaderOnTitleClick",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPage",
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
            "Sets a new value for property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.\n\nDetermines whether the user can switch between the expanded/collapsed states of the <code>DynamicPageHeader</code> by clicking on the <code>DynamicPageTitle</code> or by using the expand/collapse visual indicators, positioned at the bottom of the <code>DynamicPageTitle</code> and the <code>DynamicPageHeader</code>. If set to <code>false</code>, the <code>DynamicPageTitle</code> is not clickable, the visual indicators are not available and the application must provide other means for expanding/collapsing the <code>DynamicPageHeader</code>, if necessary.\n\n<b>Note: </b> This property is taken into account only if a non-empty <code>header</code> aggregation is provided.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.DynamicPageHeader",
      basename: "DynamicPageHeader",
      resource: "sap/f/DynamicPageHeader.js",
      module: "sap/f/DynamicPageHeader",
      export: "",
      static: true,
      visibility: "public",
      since: "1.42",
      extends: "sap.ui.core.Control",
      description:
        "Header of the {@link sap.f.DynamicPage}.\n\n<h3>Overview</h3>\n\nThe <code>DynamicPageHeader</code> control is part of the {@link sap.f.DynamicPage} family and is used to serve as header of the {@link sap.f.DynamicPage DynamicPage}.\n\n<h3>Usage</h3>\n\nThe <code>DynamicPageHeader</code> can hold any layout control and has two states - expanded and collapsed (snapped). The switching between these states happens when:\n\n<ul><li>the user scrolls below its bottom margin</li> <li>the user clicks on the {@link sap.f.DynamicPageTitle DynamicPageTitle}</li> <li>through the {@link sap.f.DynamicPage DynamicPage} property <code>headerExpanded</code></li></ul>\n\n<h3>Responsive Behavior</h3>\n\nThe responsive behavior of the <code>DynamicPageHeader</code> depends on the behavior of the content that is displayed.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "pinnable",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            description: "Determines whether the header is pinnable.",
            methods: ["getPinnable", "setPinnable"]
          },
          {
            name: "backgroundDesign",
            type: "sap.m.BackgroundDesign",
            defaultValue: null,
            group: "Appearance",
            visibility: "public",
            since: "1.58",
            description:
              "Determines the background color of the <code>DynamicPageHeader</code>.\n\n<b>Note:</b> The default value of <code>backgroundDesign</code> property is null. If the property is not set, the color of the background is <code>@sapUiObjectHeaderBackground</code>, which depends on the specific theme.",
            methods: ["getBackgroundDesign", "setBackgroundDesign"]
          }
        ],
        aggregations: [
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "The content of the header.",
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
            name: "_pinButton",
            singularName: "_pinButton",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "hidden",
            description: "The pin/unpin button in the header.",
            methods: ["get_pinButton", "destroy_pinButton", "set_pinButton"]
          },
          {
            name: "_collapseButton",
            singularName: "_collapseButton",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "hidden",
            description: "Visual indication for expanding/collapsing.",
            methods: [
              "get_collapseButton",
              "destroy_collapseButton",
              "set_collapseButton"
            ]
          }
        ],
        defaultAggregation: "content",
        designtime: "sap/f/designtime/DynamicPageHeader.designtime"
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
          "Constructor for a new <code>DynamicPageHeader</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      methods: [
        {
          name: "addContent",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPageHeader",
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
            type: "sap.f.DynamicPageHeader",
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.DynamicPageHeader with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
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
            "Gets current value of property {@link #getBackgroundDesign backgroundDesign}.\n\nDetermines the background color of the <code>DynamicPageHeader</code>.\n\n<b>Note:</b> The default value of <code>backgroundDesign</code> property is null. If the property is not set, the color of the background is <code>@sapUiObjectHeaderBackground</code>, which depends on the specific theme."
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nThe content of the header."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.DynamicPageHeader."
        },
        {
          name: "getPinnable",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>pinnable</code>"
          },
          description:
            "Gets current value of property {@link #getPinnable pinnable}.\n\nDetermines whether the header is pinnable.\n\nDefault value is <code>true</code>."
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
            type: "sap.f.DynamicPageHeader",
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
          name: "setBackgroundDesign",
          visibility: "public",
          since: "1.58",
          returnValue: {
            type: "sap.f.DynamicPageHeader",
            description: "<code>this</code> to allow method chaining"
          },
          parameters: [
            {
              name: "sBackgroundDesign",
              type: "sap.m.BackgroundDesign",
              optional: false,
              description: "new value of the <code>backgroundDesign</code>"
            }
          ],
          description:
            "Sets the value of the <code>backgroundDesign</code> property."
        },
        {
          name: "setPinnable",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPageHeader",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bPinnable",
              type: "boolean",
              optional: false,
              description: "New value for property <code>pinnable</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getPinnable pinnable}.\n\nDetermines whether the header is pinnable.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.DynamicPageTitle",
      basename: "DynamicPageTitle",
      resource: "sap/f/DynamicPageTitle.js",
      module: "sap/f/DynamicPageTitle",
      export: "",
      static: true,
      visibility: "public",
      since: "1.42",
      extends: "sap.ui.core.Control",
      description:
        "Title of the {@link sap.f.DynamicPage}.\n\n<h3>Overview</h3>\n\nThe <code>DynamicPageTitle</code> control is part of the {@link sap.f.DynamicPage} family and is used to serve as title of the {@link sap.f.DynamicPage DynamicPage}.\n\n<h3>Usage</h3>\n\nThe <code>DynamicPageTitle</code> can hold any control and displays the most important information regarding the object that will always remain visible while scrolling.\n\n<b>Note:</b> The <code>actions</code> aggregation accepts any UI5 control, but it`s recommended to use controls, suitable for {@link sap.m.Toolbar} and {@link sap.m.OverflowToolbar}.\n\nIf the <code>toggleHeaderOnTitleClick</code> property of the {@link sap.f.DynamicPage DynamicPage} is set to <code>true</code>, the user can switch between the expanded/collapsed states of the {@link sap.f.DynamicPageHeader DynamicPageHeader} by clicking on the <code>DynamicPageTitle</code> or by using the expand/collapse visual indicators, positioned at the bottom of the <code>DynamicPageTitle</code> and the <code>DynamicPageHeader</code>.\n\nIf set to <code>false</code>, the <code>DynamicPageTitle</code> is not clickable, the visual indicators are not available, and the app must provide other means for expanding/collapsing the <code>DynamicPageHeader</code>, if necessary.\n\n<h3>Responsive Behavior</h3>\n\nThe responsive behavior of the <code>DynamicPageTitle</code> depends on the behavior of the content that is displayed.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "primaryArea",
            type: "sap.f.DynamicPageTitleArea",
            defaultValue: "Begin",
            group: "Appearance",
            visibility: "public",
            since: "1.50",
            description:
              "Determines which of the <code>DynamicPageTitle</code> areas (Begin, Middle) is primary.\n\n<b>Note:</b> The primary area is shrinking at lower rate, remaining visible as much as it can.",
            deprecated: {
              since: "1.54",
              text:
                "Please use the <code>areaShrinkRatio</code> property instead. The value of <code>areaShrinkRatio</code> must be set in <code>Heading:Content:Actions</code> format where Heading, Content and Actions are numbers greater than or equal to 0. The greater value a section has the faster it shrinks when the screen size is being reduced.\n\n<code>primaryArea=Begin</code> can be achieved by setting a low number for the Heading area to <code>areaShrinkRatio</code>, for example <code>1:1.6:1.6</code>.\n\n<code>primaryArea=Middle</code> can be achieved by setting a low number for the Content area to <code>areaShrinkRatio</code>, for example <code>1.6:1:1.6</code>."
            },
            methods: ["getPrimaryArea", "setPrimaryArea"]
          },
          {
            name: "areaShrinkRatio",
            type: "sap.f.DynamicPageTitleShrinkRatio",
            defaultValue: "1:1.6:1.6",
            group: "Appearance",
            visibility: "public",
            since: "1.54",
            description:
              "Assigns shrinking ratio to the <code>DynamicPageTitle</code> areas (Heading, Content, Actions). The greater value a section has the faster it shrinks when the screen size is being reduced.\n\nThe value must be set in <code>Heading:Content:Actions</code> format where Title, Content and Actions are numbers greater than or equal to 0. If set to 0, the respective area will not shrink.\n\nFor example, if <code>2:7:1</code> is set, the Content area will shrink seven times faster than the Actions area. So, when all three areas have width of 500px and the available space is reduced by 100px the Title area will reduced by 20px, the Content area - by 70px and the Actions area - by 10px.\n\nIf all the areas have assigned values greater than 1, the numbers are scaled so that at least one of them is equal to 1. For example, value of <code>2:4:8</code> is equal to <code>1:2:4</code>.\n\n<Note:> When this property is set the <code>primaryArea</code> property has no effect.",
            methods: ["getAreaShrinkRatio", "setAreaShrinkRatio"]
          },
          {
            name: "backgroundDesign",
            type: "sap.m.BackgroundDesign",
            defaultValue: null,
            group: "Appearance",
            visibility: "public",
            since: "1.58",
            description:
              "Determines the background color of the <code>DynamicPageTitle</code>.\n\n<b>Note:</b> The default value of <code>backgroundDesign</code> property is null. If the property is not set, the color of the background is <code>@sapUiObjectHeaderBackground</code>, which depends on the specific theme.",
            methods: ["getBackgroundDesign", "setBackgroundDesign"]
          }
        ],
        aggregations: [
          {
            name: "heading",
            singularName: "heading",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "public",
            description:
              "The <code>heading</code> is positioned in the <code>DynamicPageTitle</code> left area and is displayed in both expanded and collapsed (snapped) states of the header. Use this aggregation to display a title (or any other UI5 control that serves as a heading) that has to be present in both expanded and collapsed states of the header.\n\n<b>Note:</b> <code>heading</code> is mutually exclusive with <code>snappedHeading</code> and <code>expandedHeading</code>. If <code>heading</code> is provided, both <code>snappedHeading</code> and <code>expandedHeading</code> are ignored. <code>heading</code> is useful when the content of <code>snappedHeading</code> and <code>expandedHeading</code> needs to be the same as it replaces them both.",
            methods: ["getHeading", "destroyHeading", "setHeading"]
          },
          {
            name: "snappedHeading",
            singularName: "snappedHeading",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "public",
            since: "1.52",
            description:
              "The <code>snappedHeading</code> is positioned in the <code>DynamicPageTitle</code> left area and is displayed when the header is in collapsed (snapped) state only. Use this aggregation to display a title (or any other UI5 control that serves as a heading) that has to be present in collapsed state only.\n\n<b>Note:</b> In order for <code>snappedHeading</code> to be taken into account, <code>heading</code> has to be empty. Combine <code>snappedHeading</code> with <code>expandedHeading</code> to switch content when the header switches state.",
            methods: [
              "getSnappedHeading",
              "destroySnappedHeading",
              "setSnappedHeading"
            ]
          },
          {
            name: "expandedHeading",
            singularName: "expandedHeading",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "public",
            since: "1.52",
            description:
              "The <code>expandedHeading</code> is positioned in the <code>DynamicPageTitle</code> left area and is displayed when the header is in expanded state only. Use this aggregation to display a title (or any other UI5 control that serves as a heading) that has to be present in expanded state only.\n\n<b>Note:</b> In order for <code>expandedHeading</code> to be taken into account, <code>heading</code> has to be empty. Combine <code>expandedHeading</code> with <code>snappedHeading</code> to switch content when the header switches state.",
            methods: [
              "getExpandedHeading",
              "destroyExpandedHeading",
              "setExpandedHeading"
            ]
          },
          {
            name: "actions",
            singularName: "action",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "The <code>DynamicPageTitle</code> actions. <br><b>Note:</b> The <code>actions</code> aggregation accepts any UI5 control, but it`s recommended to use controls, suitable for {@link sap.m.Toolbar} and {@link sap.m.OverflowToolbar}.",
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
            name: "navigationActions",
            singularName: "navigationAction",
            type: "sap.m.Button",
            cardinality: "0..n",
            visibility: "public",
            since: "1.52",
            description:
              "The <code>DynamicPageTitle</code> navigation actions.\n\n<b>Note:</b> The <code>navigationActions</code> position depends on the control size. If the control size is 1280px or bigger, they are rendered right next to the <code>actions</code>. Otherwise, they are rendered in the top-right area, above the <code>actions</code>. If a large number of elements(buttons) are used, there could be visual degradations as the space for the <code>navigationActions</code> is limited.",
            methods: [
              "getNavigationActions",
              "destroyNavigationActions",
              "insertNavigationAction",
              "addNavigationAction",
              "removeNavigationAction",
              "indexOfNavigationAction",
              "removeAllNavigationActions"
            ]
          },
          {
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            since: "1.50",
            description:
              "The content is positioned in the <code>DynamicPageTitle</code> middle area and displayed in both expanded and collapsed (snapped) states.",
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
            name: "snappedContent",
            singularName: "snappedContent",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "The content that is displayed in the <code>DynamicPageTitle</code> in collapsed (snapped) state.",
            methods: [
              "getSnappedContent",
              "destroySnappedContent",
              "insertSnappedContent",
              "addSnappedContent",
              "removeSnappedContent",
              "indexOfSnappedContent",
              "removeAllSnappedContent"
            ]
          },
          {
            name: "expandedContent",
            singularName: "expandedContent",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "The content that is displayed in the <code>DynamicPageTitle</code> in expanded state.",
            methods: [
              "getExpandedContent",
              "destroyExpandedContent",
              "insertExpandedContent",
              "addExpandedContent",
              "removeExpandedContent",
              "indexOfExpandedContent",
              "removeAllExpandedContent"
            ]
          },
          {
            name: "breadcrumbs",
            singularName: "breadcrumb",
            type: "sap.m.IBreadcrumbs",
            cardinality: "0..1",
            visibility: "public",
            since: "1.52",
            description:
              "The breadcrumbs displayed in the <code>DynamicPageTitle</code> top-left area.",
            methods: ["getBreadcrumbs", "destroyBreadcrumbs", "setBreadcrumbs"]
          },
          {
            name: "_actionsToolbar",
            singularName: "_actionsToolbar",
            type: "sap.m.OverflowToolbar",
            cardinality: "0..1",
            visibility: "hidden",
            description:
              "Internal <code>OverflowToolbar</code> for the <code>DynamicPageTitle</code> actions.",
            methods: [
              "get_actionsToolbar",
              "destroy_actionsToolbar",
              "set_actionsToolbar"
            ]
          },
          {
            name: "_navActionsToolbar",
            singularName: "_navActionsToolbar",
            type: "sap.m.Toolbar",
            cardinality: "0..1",
            visibility: "hidden",
            since: "1.52",
            description:
              "Internal <code>Toolbar</code> for the <code>DynamicPageTitle</code> navigation actions.",
            methods: [
              "get_navActionsToolbar",
              "destroy_navActionsToolbar",
              "set_navActionsToolbar"
            ]
          },
          {
            name: "_navActionsToolbarSeparator",
            singularName: "_navActionsToolbarSeparator",
            type: "sap.m.ToolbarSeparator",
            cardinality: "0..1",
            visibility: "hidden",
            since: "1.52",
            description:
              "Internal <code>ToolbarSeparator</code> to separate the <code>actions</code> and <code>navigationActions</code>.",
            methods: [
              "get_navActionsToolbarSeparator",
              "destroy_navActionsToolbarSeparator",
              "set_navActionsToolbarSeparator"
            ]
          },
          {
            name: "_expandButton",
            singularName: "_expandButton",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "hidden",
            since: "1.52",
            description: "Visual indication for expanding.",
            methods: [
              "get_expandButton",
              "destroy_expandButton",
              "set_expandButton"
            ]
          },
          {
            name: "_focusSpan",
            singularName: "_focusSpan",
            type: "sap.ui.core.HTML",
            cardinality: "0..1",
            visibility: "hidden",
            since: "1.60",
            description:
              "Internal span tag for correct representation of the accessibility requirements. Upon focus, the <code>DynamicPageTitle</code> control has the focus outline, but the <code>_focusSpan</code> is the real focused DOM element.",
            methods: ["get_focusSpan", "destroy_focusSpan", "set_focusSpan"]
          }
        ],
        events: [
          {
            name: "stateChange",
            visibility: "public",
            since: "1.54",
            description:
              "Fired when the title state (expanded/collapsed) is toggled by user interaction. For example, scrolling, title clicking/tapping, using expand/collapse button.\n\nAlso fired when the developer toggles the title state by programmatically changing the scroll position of the scrollbar of <code>DynamicPage</code>.",
            parameters: {
              isExpanded: {
                name: "isExpanded",
                type: "boolean",
                description:
                  "Whether the title was expanded (true) or collapsed (false)."
              }
            },
            methods: [
              "attachStateChange",
              "detachStateChange",
              "fireStateChange"
            ]
          }
        ],
        designtime: "sap/f/designtime/DynamicPageTitle.designtime"
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
          "Constructor for a new <code>DynamicPageTitle</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "stateChange",
          visibility: "public",
          since: "1.54",
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
                    isExpanded: {
                      name: "isExpanded",
                      type: "boolean",
                      optional: false,
                      description:
                        "Whether the title was expanded (true) or collapsed (false)."
                    }
                  }
                }
              }
            }
          ],
          description:
            "Fired when the title state (expanded/collapsed) is toggled by user interaction. For example, scrolling, title clicking/tapping, using expand/collapse button.\n\nAlso fired when the developer toggles the title state by programmatically changing the scroll position of the scrollbar of <code>DynamicPage</code>."
        }
      ],
      methods: [
        {
          name: "addAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
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
          name: "addContent",
          visibility: "public",
          since: "1.50",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
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
          name: "addExpandedContent",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oExpandedContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The expandedContent to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some expandedContent to the aggregation {@link #getExpandedContent expandedContent}."
        },
        {
          name: "addNavigationAction",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oNavigationAction",
              type: "sap.m.Button",
              optional: false,
              description:
                "The navigationAction to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some navigationAction to the aggregation {@link #getNavigationActions navigationActions}."
        },
        {
          name: "addSnappedContent",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSnappedContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The snappedContent to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some snappedContent to the aggregation {@link #getSnappedContent snappedContent}."
        },
        {
          name: "attachStateChange",
          visibility: "public",
          since: "1.54",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
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
                "Context object to call the event handler with. Defaults to this <code>sap.f.DynamicPageTitle</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:stateChange stateChange} event of this <code>sap.f.DynamicPageTitle</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.DynamicPageTitle</code> itself.\n\nFired when the title state (expanded/collapsed) is toggled by user interaction. For example, scrolling, title clicking/tapping, using expand/collapse button.\n\nAlso fired when the developer toggles the title state by programmatically changing the scroll position of the scrollbar of <code>DynamicPage</code>."
        },
        {
          name: "destroyActions",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the actions in the aggregation {@link #getActions actions}."
        },
        {
          name: "destroyBreadcrumbs",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the breadcrumbs in the aggregation {@link #getBreadcrumbs breadcrumbs}."
        },
        {
          name: "destroyContent",
          visibility: "public",
          since: "1.50",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the content in the aggregation {@link #getContent content}."
        },
        {
          name: "destroyExpandedContent",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the expandedContent in the aggregation {@link #getExpandedContent expandedContent}."
        },
        {
          name: "destroyExpandedHeading",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the expandedHeading in the aggregation {@link #getExpandedHeading expandedHeading}."
        },
        {
          name: "destroyHeading",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the heading in the aggregation {@link #getHeading heading}."
        },
        {
          name: "destroyNavigationActions",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the navigationActions in the aggregation {@link #getNavigationActions navigationActions}."
        },
        {
          name: "destroySnappedContent",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the snappedContent in the aggregation {@link #getSnappedContent snappedContent}."
        },
        {
          name: "destroySnappedHeading",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the snappedHeading in the aggregation {@link #getSnappedHeading snappedHeading}."
        },
        {
          name: "detachStateChange",
          visibility: "public",
          since: "1.54",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:stateChange stateChange} event of this <code>sap.f.DynamicPageTitle</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.DynamicPageTitle with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireStateChange",
          visibility: "protected",
          since: "1.54",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                isExpanded: {
                  name: "isExpanded",
                  type: "boolean",
                  optional: true,
                  description:
                    "Whether the title was expanded (true) or collapsed (false)."
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:stateChange stateChange} to attached listeners."
        },
        {
          name: "getActions",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getActions actions}.\n\nThe <code>DynamicPageTitle</code> actions. <br><b>Note:</b> The <code>actions</code> aggregation accepts any UI5 control, but it`s recommended to use controls, suitable for {@link sap.m.Toolbar} and {@link sap.m.OverflowToolbar}."
        },
        {
          name: "getAreaShrinkRatio",
          visibility: "public",
          since: "1.54",
          returnValue: {
            type: "sap.f.DynamicPageTitleShrinkRatio",
            description: "Value of property <code>areaShrinkRatio</code>"
          },
          description:
            "Gets current value of property {@link #getAreaShrinkRatio areaShrinkRatio}.\n\nAssigns shrinking ratio to the <code>DynamicPageTitle</code> areas (Heading, Content, Actions). The greater value a section has the faster it shrinks when the screen size is being reduced.\n\nThe value must be set in <code>Heading:Content:Actions</code> format where Title, Content and Actions are numbers greater than or equal to 0. If set to 0, the respective area will not shrink.\n\nFor example, if <code>2:7:1</code> is set, the Content area will shrink seven times faster than the Actions area. So, when all three areas have width of 500px and the available space is reduced by 100px the Title area will reduced by 20px, the Content area - by 70px and the Actions area - by 10px.\n\nIf all the areas have assigned values greater than 1, the numbers are scaled so that at least one of them is equal to 1. For example, value of <code>2:4:8</code> is equal to <code>1:2:4</code>.\n\n<Note:> When this property is set the <code>primaryArea</code> property has no effect.\n\nDefault value is <code>1:1.6:1.6</code>."
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
            "Gets current value of property {@link #getBackgroundDesign backgroundDesign}.\n\nDetermines the background color of the <code>DynamicPageTitle</code>.\n\n<b>Note:</b> The default value of <code>backgroundDesign</code> property is null. If the property is not set, the color of the background is <code>@sapUiObjectHeaderBackground</code>, which depends on the specific theme."
        },
        {
          name: "getBreadcrumbs",
          visibility: "public",
          since: "1.52",
          returnValue: { type: "sap.m.IBreadcrumbs" },
          description:
            "Gets content of aggregation {@link #getBreadcrumbs breadcrumbs}.\n\nThe breadcrumbs displayed in the <code>DynamicPageTitle</code> top-left area."
        },
        {
          name: "getContent",
          visibility: "public",
          since: "1.50",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nThe content is positioned in the <code>DynamicPageTitle</code> middle area and displayed in both expanded and collapsed (snapped) states."
        },
        {
          name: "getExpandedContent",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getExpandedContent expandedContent}.\n\nThe content that is displayed in the <code>DynamicPageTitle</code> in expanded state."
        },
        {
          name: "getExpandedHeading",
          visibility: "public",
          since: "1.52",
          returnValue: { type: "sap.ui.core.Control" },
          description:
            "Gets content of aggregation {@link #getExpandedHeading expandedHeading}.\n\nThe <code>expandedHeading</code> is positioned in the <code>DynamicPageTitle</code> left area and is displayed when the header is in expanded state only. Use this aggregation to display a title (or any other UI5 control that serves as a heading) that has to be present in expanded state only.\n\n<b>Note:</b> In order for <code>expandedHeading</code> to be taken into account, <code>heading</code> has to be empty. Combine <code>expandedHeading</code> with <code>snappedHeading</code> to switch content when the header switches state."
        },
        {
          name: "getHeading",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control" },
          description:
            "Gets content of aggregation {@link #getHeading heading}.\n\nThe <code>heading</code> is positioned in the <code>DynamicPageTitle</code> left area and is displayed in both expanded and collapsed (snapped) states of the header. Use this aggregation to display a title (or any other UI5 control that serves as a heading) that has to be present in both expanded and collapsed states of the header.\n\n<b>Note:</b> <code>heading</code> is mutually exclusive with <code>snappedHeading</code> and <code>expandedHeading</code>. If <code>heading</code> is provided, both <code>snappedHeading</code> and <code>expandedHeading</code> are ignored. <code>heading</code> is useful when the content of <code>snappedHeading</code> and <code>expandedHeading</code> needs to be the same as it replaces them both."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.DynamicPageTitle."
        },
        {
          name: "getNavigationActions",
          visibility: "public",
          since: "1.52",
          returnValue: { type: "sap.m.Button[]" },
          description:
            "Gets content of aggregation {@link #getNavigationActions navigationActions}.\n\nThe <code>DynamicPageTitle</code> navigation actions.\n\n<b>Note:</b> The <code>navigationActions</code> position depends on the control size. If the control size is 1280px or bigger, they are rendered right next to the <code>actions</code>. Otherwise, they are rendered in the top-right area, above the <code>actions</code>. If a large number of elements(buttons) are used, there could be visual degradations as the space for the <code>navigationActions</code> is limited."
        },
        {
          name: "getPrimaryArea",
          visibility: "public",
          since: "1.50",
          returnValue: {
            type: "sap.f.DynamicPageTitleArea",
            description: "Value of property <code>primaryArea</code>"
          },
          description:
            "Gets current value of property {@link #getPrimaryArea primaryArea}.\n\nDetermines which of the <code>DynamicPageTitle</code> areas (Begin, Middle) is primary.\n\n<b>Note:</b> The primary area is shrinking at lower rate, remaining visible as much as it can.\n\nDefault value is <code>Begin</code>.",
          deprecated: {
            since: "1.54",
            text:
              "Please use the <code>areaShrinkRatio</code> property instead. The value of <code>areaShrinkRatio</code> must be set in <code>Heading:Content:Actions</code> format where Heading, Content and Actions are numbers greater than or equal to 0. The greater value a section has the faster it shrinks when the screen size is being reduced.\n\n<code>primaryArea=Begin</code> can be achieved by setting a low number for the Heading area to <code>areaShrinkRatio</code>, for example <code>1:1.6:1.6</code>.\n\n<code>primaryArea=Middle</code> can be achieved by setting a low number for the Content area to <code>areaShrinkRatio</code>, for example <code>1.6:1:1.6</code>."
          }
        },
        {
          name: "getSnappedContent",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getSnappedContent snappedContent}.\n\nThe content that is displayed in the <code>DynamicPageTitle</code> in collapsed (snapped) state."
        },
        {
          name: "getSnappedHeading",
          visibility: "public",
          since: "1.52",
          returnValue: { type: "sap.ui.core.Control" },
          description:
            "Gets content of aggregation {@link #getSnappedHeading snappedHeading}.\n\nThe <code>snappedHeading</code> is positioned in the <code>DynamicPageTitle</code> left area and is displayed when the header is in collapsed (snapped) state only. Use this aggregation to display a title (or any other UI5 control that serves as a heading) that has to be present in collapsed state only.\n\n<b>Note:</b> In order for <code>snappedHeading</code> to be taken into account, <code>heading</code> has to be empty. Combine <code>snappedHeading</code> with <code>expandedHeading</code> to switch content when the header switches state."
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
          name: "indexOfContent",
          visibility: "public",
          since: "1.50",
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
          name: "indexOfExpandedContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oExpandedContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The expandedContent whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getExpandedContent expandedContent}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfNavigationAction",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oNavigationAction",
              type: "sap.m.Button",
              optional: false,
              description: "The navigationAction whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.m.Button</code> in the aggregation {@link #getNavigationActions navigationActions}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfSnappedContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oSnappedContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The snappedContent whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getSnappedContent snappedContent}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
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
          name: "insertContent",
          visibility: "public",
          since: "1.50",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
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
          name: "insertExpandedContent",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oExpandedContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The expandedContent to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the expandedContent should be inserted at; for a negative value of <code>iIndex</code>, the expandedContent is inserted at position 0; for a value greater than the current size of the aggregation, the expandedContent is inserted at the last position"
            }
          ],
          description:
            "Inserts a expandedContent into the aggregation {@link #getExpandedContent expandedContent}."
        },
        {
          name: "insertNavigationAction",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oNavigationAction",
              type: "sap.m.Button",
              optional: false,
              description:
                "The navigationAction to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the navigationAction should be inserted at; for a negative value of <code>iIndex</code>, the navigationAction is inserted at position 0; for a value greater than the current size of the aggregation, the navigationAction is inserted at the last position"
            }
          ],
          description:
            "Inserts a navigationAction into the aggregation {@link #getNavigationActions navigationActions}."
        },
        {
          name: "insertSnappedContent",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSnappedContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The snappedContent to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the snappedContent should be inserted at; for a negative value of <code>iIndex</code>, the snappedContent is inserted at position 0; for a value greater than the current size of the aggregation, the snappedContent is inserted at the last position"
            }
          ],
          description:
            "Inserts a snappedContent into the aggregation {@link #getSnappedContent snappedContent}."
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
          name: "removeAllContent",
          visibility: "public",
          since: "1.50",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getContent content}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllExpandedContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getExpandedContent expandedContent}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllNavigationActions",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.m.Button[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getNavigationActions navigationActions}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllSnappedContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getSnappedContent snappedContent}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeContent",
          visibility: "public",
          since: "1.50",
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
          name: "removeExpandedContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed expandedContent or <code>null</code>"
          },
          parameters: [
            {
              name: "vExpandedContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The expandedContent to remove or its index or id"
            }
          ],
          description:
            "Removes a expandedContent from the aggregation {@link #getExpandedContent expandedContent}."
        },
        {
          name: "removeNavigationAction",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.m.Button",
            description: "The removed navigationAction or <code>null</code>"
          },
          parameters: [
            {
              name: "vNavigationAction",
              type: "int|string|sap.m.Button",
              optional: false,
              description: "The navigationAction to remove or its index or id"
            }
          ],
          description:
            "Removes a navigationAction from the aggregation {@link #getNavigationActions navigationActions}."
        },
        {
          name: "removeSnappedContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed snappedContent or <code>null</code>"
          },
          parameters: [
            {
              name: "vSnappedContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The snappedContent to remove or its index or id"
            }
          ],
          description:
            "Removes a snappedContent from the aggregation {@link #getSnappedContent snappedContent}."
        },
        {
          name: "setAreaShrinkRatio",
          visibility: "public",
          since: "1.54",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description: "<code>this</code> to allow method chaining"
          },
          parameters: [
            {
              name: "sAreaShrinkRatio",
              type: "sap.f.DynamicPageTitleShrinkRatio",
              optional: false,
              description: "new value of the <code>areaShrinkRatio</code>"
            }
          ],
          description:
            "Sets the value of the <code>areaShrinkRatio</code> property."
        },
        {
          name: "setBackgroundDesign",
          visibility: "public",
          since: "1.58",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description: "<code>this</code> to allow method chaining"
          },
          parameters: [
            {
              name: "sBackgroundDesign",
              type: "sap.m.BackgroundDesign",
              optional: false,
              description: "new value of the <code>backgroundDesign</code>"
            }
          ],
          description:
            "Sets the value of the <code>backgroundDesign</code> property."
        },
        {
          name: "setBreadcrumbs",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oBreadcrumbs",
              type: "sap.m.IBreadcrumbs",
              optional: false,
              description: "The breadcrumbs to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getBreadcrumbs breadcrumbs}."
        },
        {
          name: "setExpandedHeading",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oExpandedHeading",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The expandedHeading to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getExpandedHeading expandedHeading}."
        },
        {
          name: "setHeading",
          visibility: "public",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oHeading",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The heading to set"
            }
          ],
          description: "Sets the aggregated {@link #getHeading heading}."
        },
        {
          name: "setPrimaryArea",
          visibility: "public",
          since: "1.50",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sPrimaryArea",
              type: "sap.f.DynamicPageTitleArea",
              optional: false,
              description: "New value for property <code>primaryArea</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getPrimaryArea primaryArea}.\n\nDetermines which of the <code>DynamicPageTitle</code> areas (Begin, Middle) is primary.\n\n<b>Note:</b> The primary area is shrinking at lower rate, remaining visible as much as it can.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Begin</code>.",
          deprecated: {
            since: "1.54",
            text:
              "Please use the <code>areaShrinkRatio</code> property instead. The value of <code>areaShrinkRatio</code> must be set in <code>Heading:Content:Actions</code> format where Heading, Content and Actions are numbers greater than or equal to 0. The greater value a section has the faster it shrinks when the screen size is being reduced.\n\n<code>primaryArea=Begin</code> can be achieved by setting a low number for the Heading area to <code>areaShrinkRatio</code>, for example <code>1:1.6:1.6</code>.\n\n<code>primaryArea=Middle</code> can be achieved by setting a low number for the Content area to <code>areaShrinkRatio</code>, for example <code>1.6:1:1.6</code>."
          }
        },
        {
          name: "setSnappedHeading",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.f.DynamicPageTitle",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSnappedHeading",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The snappedHeading to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getSnappedHeading snappedHeading}."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.f.DynamicPageTitleArea",
      basename: "DynamicPageTitleArea",
      resource: "sap/f/library.js",
      module: "sap/f/library",
      export: "DynamicPageTitleArea",
      static: true,
      visibility: "public",
      since: "1.50",
      description:
        "Defines the areas within the <code>sap.f.DynamicPageTitle</code>.",
      deprecated: { since: "1.54" },
      "ui5-metamodel": true,
      properties: [
        {
          name: "Begin",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "The area includes the <code>heading</code>, <code>expandedContent</code> and <code>snappedContent</code> aggregations, positioned in the beginning area of the {@link sap.f.DynamicPageTitle}."
        },
        {
          name: "Middle",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "The area includes the <code>content</code> aggregation, positioned in the middle part of the {@link sap.f.DynamicPageTitle}."
        }
      ]
    },
    {
      kind: "namespace",
      name: "sap.f.DynamicPageTitleShrinkRatio",
      basename: "DynamicPageTitleShrinkRatio",
      resource: "sap/f/library.js",
      module: "sap/f/library",
      export: "DynamicPageTitleShrinkRatio",
      static: true,
      visibility: "public",
      since: "1.54",
      description:
        "A string type that represents the shrink ratios of the areas within the <code>sap.f.DynamicPageTitle</code>.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "datatype",
        basetype: "string",
        pattern:
          "^(([0-9]\\d*)(\\.\\d)?:([0-9]\\d*)(\\.\\d)?:([0-9]\\d*)(\\.\\d)?)$"
      }
    },
    {
      kind: "class",
      name: "sap.f.FlexibleColumnLayout",
      basename: "FlexibleColumnLayout",
      resource: "sap/f/FlexibleColumnLayout.js",
      module: "sap/f/FlexibleColumnLayout",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46",
      extends: "sap.ui.core.Control",
      description:
        "Implements the master-detail-detail paradigm by displaying up to three pages in separate columns.\n\n<h3>Overview</h3>\n\nThe control is logically similar to {@link sap.m.SplitContainer} with the difference that it capable of handling three columns (referred to as <code>Begin</code>, <code>Mid</code> and <code>End</code>) rather than two (<code>Master</code>, <code>Detail</code>). The width of the three columns is variable.\n\nThere are several possible layouts that can be changed either with the control's API, or by the user with the help of layout arrows.\n\nInternally the control makes use of three instances of {@link sap.m.NavContainer}, thus forming the three columns.\n\n<h3>Usage</h3>\n\nUse this control for applications that need to display several logical levels of related information side by side (e.g. list of items, item, sub-item, etc.). The control is flexible in a sense that the application can focus the user's attention on one particular column by making it larger or even fullscreen.\n\nThe columns are accessible with the <code>beginColumnPages</code>, <code>midColumnPages</code> and <code>endColumnPages</code> aggregations.\n\nThe relative sizes and the visibility of the three columns are determined based on the value of the {@link sap.f.LayoutType layout} property.\n\nChanges to the layout due to user interaction are communicated to the app with the <code>stateChange</code> event.\n\n<ul><b>Notes:</b> <li>To easily implement the recommended UX design of a <code>sap.f.FlexibleColumnLayout</code>-based app, you can use the <code>sap.f.FlexibleColumnLayoutSemanticHelper</code> class.</li> <li>To facilitate the navigation and view loading, you can use the {@link sap.f.routing.Router} </li></ul>\n\n<h3>Responsive Behavior</h3>\n\nThe control automatically displays the maximum possible number of columns based on the device size and current <code>layout</code>. The app does not need to take into consideration the current device/screen size, but only to add content to the columns and change the value of the <code>layout</code> property.\n\nFor detailed information, see {@link sap.f.LayoutType LayoutType} enumeration.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "layout",
            type: "sap.f.LayoutType",
            defaultValue: "OneColumn",
            group: "Misc",
            visibility: "public",
            description:
              "Determines the layout of the control - number of visible columns and their relative sizes.\n\nFor more details, see {@link topic:3b9f760da5b64adf8db7f95247879086 Types of Layout} in the documentation.",
            methods: ["getLayout", "setLayout"]
          },
          {
            name: "defaultTransitionNameBeginColumn",
            type: "string",
            defaultValue: "slide",
            group: "Appearance",
            visibility: "public",
            description:
              "Determines the type of the transition/animation to apply for the <code>Begin</code> column when <code>to()</code> is called without defining the transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>flip</code>, <code>show</code>, and the names of any registered custom transitions.",
            methods: [
              "getDefaultTransitionNameBeginColumn",
              "setDefaultTransitionNameBeginColumn"
            ]
          },
          {
            name: "defaultTransitionNameMidColumn",
            type: "string",
            defaultValue: "slide",
            group: "Appearance",
            visibility: "public",
            description:
              "Determines the type of the transition/animation to apply for the <code>Mid</code> column when <code>to()</code> is called without defining the transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>flip</code>, <code>show</code>, and the names of any registered custom transitions.",
            methods: [
              "getDefaultTransitionNameMidColumn",
              "setDefaultTransitionNameMidColumn"
            ]
          },
          {
            name: "defaultTransitionNameEndColumn",
            type: "string",
            defaultValue: "slide",
            group: "Appearance",
            visibility: "public",
            description:
              "Determines the type of the transition/animation to apply for the <code>End</code> column when <code>to()</code> is called without defining the transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>flip</code>, <code>show</code>, and the names of any registered custom transitions.",
            methods: [
              "getDefaultTransitionNameEndColumn",
              "setDefaultTransitionNameEndColumn"
            ]
          },
          {
            name: "backgroundDesign",
            type: "sap.m.BackgroundDesign",
            defaultValue: "Transparent",
            group: "Appearance",
            visibility: "public",
            since: "1.54",
            description:
              "Specifies the background color of the content. The visualization of the different options depends on the used theme.",
            methods: ["getBackgroundDesign", "setBackgroundDesign"]
          }
        ],
        aggregations: [
          {
            name: "beginColumnPages",
            singularName: "beginColumnPage",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "The content entities between which the <code>FlexibleColumnLayout</code> navigates in the <code>Begin</code> column.\n\nThese should be any control with page semantics. These aggregated controls will receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}.",
            methods: [
              "getBeginColumnPages",
              "destroyBeginColumnPages",
              "insertBeginColumnPage",
              "addBeginColumnPage",
              "removeBeginColumnPage",
              "indexOfBeginColumnPage",
              "removeAllBeginColumnPages"
            ]
          },
          {
            name: "midColumnPages",
            singularName: "midColumnPage",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "The content entities between which the <code>FlexibleColumnLayout</code> navigates in the <code>Mid</code> column.\n\nThese should be any control with page semantics. These aggregated controls will receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}.",
            methods: [
              "getMidColumnPages",
              "destroyMidColumnPages",
              "insertMidColumnPage",
              "addMidColumnPage",
              "removeMidColumnPage",
              "indexOfMidColumnPage",
              "removeAllMidColumnPages"
            ]
          },
          {
            name: "endColumnPages",
            singularName: "endColumnPage",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "The content entities between which the <code>FlexibleColumnLayout</code> navigates in the <code>End</code> column.\n\nThese should be any control with page semantics. These aggregated controls will receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}.",
            methods: [
              "getEndColumnPages",
              "destroyEndColumnPages",
              "insertEndColumnPage",
              "addEndColumnPage",
              "removeEndColumnPage",
              "indexOfEndColumnPage",
              "removeAllEndColumnPages"
            ]
          },
          {
            name: "_beginColumnNav",
            singularName: "_beginColumnNav",
            type: "sap.m.NavContainer",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_beginColumnNav",
              "destroy_beginColumnNav",
              "set_beginColumnNav"
            ]
          },
          {
            name: "_midColumnNav",
            singularName: "_midColumnNav",
            type: "sap.m.NavContainer",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_midColumnNav",
              "destroy_midColumnNav",
              "set_midColumnNav"
            ]
          },
          {
            name: "_endColumnNav",
            singularName: "_endColumnNav",
            type: "sap.m.NavContainer",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_endColumnNav",
              "destroy_endColumnNav",
              "set_endColumnNav"
            ]
          },
          {
            name: "_beginColumnBackArrow",
            singularName: "_beginColumnBackArrow",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_beginColumnBackArrow",
              "destroy_beginColumnBackArrow",
              "set_beginColumnBackArrow"
            ]
          },
          {
            name: "_midColumnForwardArrow",
            singularName: "_midColumnForwardArrow",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_midColumnForwardArrow",
              "destroy_midColumnForwardArrow",
              "set_midColumnForwardArrow"
            ]
          },
          {
            name: "_midColumnBackArrow",
            singularName: "_midColumnBackArrow",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_midColumnBackArrow",
              "destroy_midColumnBackArrow",
              "set_midColumnBackArrow"
            ]
          },
          {
            name: "_endColumnForwardArrow",
            singularName: "_endColumnForwardArrow",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "hidden",
            methods: [
              "get_endColumnForwardArrow",
              "destroy_endColumnForwardArrow",
              "set_endColumnForwardArrow"
            ]
          }
        ],
        associations: [
          {
            name: "initialBeginColumnPage",
            singularName: "initialBeginColumnPage",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "public",
            description:
              "Sets the initial <code>Begin</code> column page, which is displayed on application launch.",
            methods: ["getInitialBeginColumnPage", "setInitialBeginColumnPage"]
          },
          {
            name: "initialMidColumnPage",
            singularName: "initialMidColumnPage",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "public",
            description:
              "Sets the initial <code>Mid</code> column page, which is displayed on application launch.",
            methods: ["getInitialMidColumnPage", "setInitialMidColumnPage"]
          },
          {
            name: "initialEndColumnPage",
            singularName: "initialEndColumnPage",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "public",
            description:
              "Sets the initial <code>End</code> column page, which is displayed on application launch.",
            methods: ["getInitialEndColumnPage", "setInitialEndColumnPage"]
          }
        ],
        events: [
          {
            name: "stateChange",
            visibility: "public",
            description:
              "Fired when there is a change in the <code>layout</code> property or in the maximum number of columns that can be displayed at once. <br/></br> <ul>The interactions that may lead to a state change are: <li>the property <code>layout</code> was changed indirectly by the user clicking a layout arrow</li> <li>the user resized the browser beyond a breakpoint, thus changing the maximum number of columns that can be displayed at once.</li></ul> <br/><br/> <b>Note: </b>The event is suppressed while the control has zero width and will be fired the first time it gets a non-zero width",
            parameters: {
              layout: {
                name: "layout",
                type: "sap.f.LayoutType",
                description: "The value of the <code>layout</code> property"
              },
              maxColumnsCount: {
                name: "maxColumnsCount",
                type: "int",
                description:
                  "The maximum number of columns that can be displayed at once based on the available screen size and control settings.\n\n<ul>Possible values are: <li>3 for browser size of 1280px or more</li> <li>2 for browser size between 960px and 1280px</li> <li>1 for browser size less than 960px</li></ul>"
              },
              isNavigationArrow: {
                name: "isNavigationArrow",
                type: "boolean",
                description:
                  "Indicates whether the layout changed as a result of the user clicking a layout arrow"
              },
              isResize: {
                name: "isResize",
                type: "boolean",
                description:
                  "Indicates whether the maximum number of columns that can be displayed at once changed"
              }
            },
            methods: [
              "attachStateChange",
              "detachStateChange",
              "fireStateChange"
            ]
          },
          {
            name: "beginColumnNavigate",
            visibility: "public",
            description:
              "Fires when navigation between two pages in the <code>Begin</code> column has been triggered. The transition (if any) to the new page has not started yet. This event can be aborted by the application with preventDefault(), which means that there will be no navigation.",
            parameters: {
              from: {
                name: "from",
                type: "sap.ui.core.Control",
                description:
                  "The page, which was displayed before the current navigation."
              },
              fromId: {
                name: "fromId",
                type: "string",
                description:
                  "The ID of the page, which was displayed before the current navigation."
              },
              to: {
                name: "to",
                type: "sap.ui.core.Control",
                description:
                  "The page, which will be displayed after the current navigation."
              },
              toId: {
                name: "toId",
                type: "string",
                description:
                  "The ID of the page, which will be displayed after the current navigation."
              },
              firstTime: {
                name: "firstTime",
                type: "boolean",
                description:
                  'Determines whether the "to" page (more precisely: a control with the ID of the page, which is currently being navigated to) has not been displayed/navigated to before.'
              },
              isTo: {
                name: "isTo",
                type: "boolean",
                description:
                  "Determines whether this is a forward navigation, triggered by to()."
              },
              isBack: {
                name: "isBack",
                type: "boolean",
                description:
                  "Determines whether this is a back navigation, triggered by back()."
              },
              isBackToTop: {
                name: "isBackToTop",
                type: "boolean",
                description:
                  "Determines whether this is a navigation to the root page, triggered by backToTop()."
              },
              isBackToPage: {
                name: "isBackToPage",
                type: "boolean",
                description:
                  "Determines whether this was a navigation to a specific page, triggered by backToPage()."
              },
              direction: {
                name: "direction",
                type: "string",
                description:
                  'Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".'
              }
            },
            methods: [
              "attachBeginColumnNavigate",
              "detachBeginColumnNavigate",
              "fireBeginColumnNavigate"
            ]
          },
          {
            name: "afterBeginColumnNavigate",
            visibility: "public",
            description:
              "Fires when navigation between two pages in the <code>Begin</code> column has completed.\n\nNOTE: In case of animated transitions this event is fired with some delay after the navigate event.",
            parameters: {
              from: {
                name: "from",
                type: "sap.ui.core.Control",
                description:
                  "The page, which had been displayed before navigation."
              },
              fromId: {
                name: "fromId",
                type: "string",
                description:
                  "The ID of the page, which had been displayed before navigation."
              },
              to: {
                name: "to",
                type: "sap.ui.core.Control",
                description:
                  "The page, which is now displayed after navigation."
              },
              toId: {
                name: "toId",
                type: "string",
                description:
                  "The ID of the page, which is now displayed after navigation."
              },
              firstTime: {
                name: "firstTime",
                type: "boolean",
                description:
                  'Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to) has not been displayed/navigated to before.'
              },
              isTo: {
                name: "isTo",
                type: "boolean",
                description:
                  "Determines whether was a forward navigation, triggered by to()."
              },
              isBack: {
                name: "isBack",
                type: "boolean",
                description:
                  "Determines whether this was a back navigation, triggered by back()."
              },
              isBackToTop: {
                name: "isBackToTop",
                type: "boolean",
                description:
                  "Determines whether this was a navigation to the root page, triggered by backToTop()."
              },
              isBackToPage: {
                name: "isBackToPage",
                type: "boolean",
                description:
                  "Determines whether this was a navigation to a specific page, triggered by backToPage()."
              },
              direction: {
                name: "direction",
                type: "string",
                description:
                  'Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".'
              }
            },
            methods: [
              "attachAfterBeginColumnNavigate",
              "detachAfterBeginColumnNavigate",
              "fireAfterBeginColumnNavigate"
            ]
          },
          {
            name: "midColumnNavigate",
            visibility: "public",
            description:
              "Fires when navigation between two pages in the <code>Mid</code> column has been triggered. The transition (if any) to the new page has not started yet. This event can be aborted by the application with preventDefault(), which means that there will be no navigation.",
            parameters: {
              from: {
                name: "from",
                type: "sap.ui.core.Control",
                description:
                  "The page, which was displayed before the current navigation."
              },
              fromId: {
                name: "fromId",
                type: "string",
                description:
                  "The ID of the page, which was displayed before the current navigation."
              },
              to: {
                name: "to",
                type: "sap.ui.core.Control",
                description:
                  "The page, which will be displayed after the current navigation."
              },
              toId: {
                name: "toId",
                type: "string",
                description:
                  "The ID of the page, which will be displayed after the current navigation."
              },
              firstTime: {
                name: "firstTime",
                type: "boolean",
                description:
                  'Determines whether the "to" page (more precisely: a control with the ID of the page, which is currently being navigated to) has not been displayed/navigated to before.'
              },
              isTo: {
                name: "isTo",
                type: "boolean",
                description:
                  "Determines whether this is a forward navigation, triggered by to()."
              },
              isBack: {
                name: "isBack",
                type: "boolean",
                description:
                  "Determines whether this is a back navigation, triggered by back()."
              },
              isBackToTop: {
                name: "isBackToTop",
                type: "boolean",
                description:
                  "Determines whether this is a navigation to the root page, triggered by backToTop()."
              },
              isBackToPage: {
                name: "isBackToPage",
                type: "boolean",
                description:
                  "Determines whether this was a navigation to a specific page, triggered by backToPage()."
              },
              direction: {
                name: "direction",
                type: "string",
                description:
                  'Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".'
              }
            },
            methods: [
              "attachMidColumnNavigate",
              "detachMidColumnNavigate",
              "fireMidColumnNavigate"
            ]
          },
          {
            name: "afterMidColumnNavigate",
            visibility: "public",
            description:
              "Fires when navigation between two pages in the <code>Mid</code> column has completed.\n\nNOTE: In case of animated transitions this event is fired with some delay after the navigate event.",
            parameters: {
              from: {
                name: "from",
                type: "sap.ui.core.Control",
                description:
                  "The page, which had been displayed before navigation."
              },
              fromId: {
                name: "fromId",
                type: "string",
                description:
                  "The ID of the page, which had been displayed before navigation."
              },
              to: {
                name: "to",
                type: "sap.ui.core.Control",
                description:
                  "The page, which is now displayed after navigation."
              },
              toId: {
                name: "toId",
                type: "string",
                description:
                  "The ID of the page, which is now displayed after navigation."
              },
              firstTime: {
                name: "firstTime",
                type: "boolean",
                description:
                  'Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to) has not been displayed/navigated to before.'
              },
              isTo: {
                name: "isTo",
                type: "boolean",
                description:
                  "Determines whether was a forward navigation, triggered by to()."
              },
              isBack: {
                name: "isBack",
                type: "boolean",
                description:
                  "Determines whether this was a back navigation, triggered by back()."
              },
              isBackToTop: {
                name: "isBackToTop",
                type: "boolean",
                description:
                  "Determines whether this was a navigation to the root page, triggered by backToTop()."
              },
              isBackToPage: {
                name: "isBackToPage",
                type: "boolean",
                description:
                  "Determines whether this was a navigation to a specific page, triggered by backToPage()."
              },
              direction: {
                name: "direction",
                type: "string",
                description:
                  'Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".'
              }
            },
            methods: [
              "attachAfterMidColumnNavigate",
              "detachAfterMidColumnNavigate",
              "fireAfterMidColumnNavigate"
            ]
          },
          {
            name: "endColumnNavigate",
            visibility: "public",
            description:
              "Fires when navigation between two pages in the <code>End</code> column has been triggered. The transition (if any) to the new page has not started yet. This event can be aborted by the application with preventDefault(), which means that there will be no navigation.",
            parameters: {
              from: {
                name: "from",
                type: "sap.ui.core.Control",
                description:
                  "The page, which was displayed before the current navigation."
              },
              fromId: {
                name: "fromId",
                type: "string",
                description:
                  "The ID of the page, which was displayed before the current navigation."
              },
              to: {
                name: "to",
                type: "sap.ui.core.Control",
                description:
                  "The page, which will be displayed after the current navigation."
              },
              toId: {
                name: "toId",
                type: "string",
                description:
                  "The ID of the page, which will be displayed after the current navigation."
              },
              firstTime: {
                name: "firstTime",
                type: "boolean",
                description:
                  'Determines whether the "to" page (more precisely: a control with the ID of the page, which is currently being navigated to) has not been displayed/navigated to before.'
              },
              isTo: {
                name: "isTo",
                type: "boolean",
                description:
                  "Determines whether this is a forward navigation, triggered by to()."
              },
              isBack: {
                name: "isBack",
                type: "boolean",
                description:
                  "Determines whether this is a back navigation, triggered by back()."
              },
              isBackToTop: {
                name: "isBackToTop",
                type: "boolean",
                description:
                  "Determines whether this is a navigation to the root page, triggered by backToTop()."
              },
              isBackToPage: {
                name: "isBackToPage",
                type: "boolean",
                description:
                  "Determines whether this was a navigation to a specific page, triggered by backToPage()."
              },
              direction: {
                name: "direction",
                type: "string",
                description:
                  'Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".'
              }
            },
            methods: [
              "attachEndColumnNavigate",
              "detachEndColumnNavigate",
              "fireEndColumnNavigate"
            ]
          },
          {
            name: "afterEndColumnNavigate",
            visibility: "public",
            description:
              "Fires when navigation between two pages in the <code>End</code> column has completed.\n\nNOTE: In case of animated transitions this event is fired with some delay after the navigate event.",
            parameters: {
              from: {
                name: "from",
                type: "sap.ui.core.Control",
                description:
                  "The page, which had been displayed before navigation."
              },
              fromId: {
                name: "fromId",
                type: "string",
                description:
                  "The ID of the page, which had been displayed before navigation."
              },
              to: {
                name: "to",
                type: "sap.ui.core.Control",
                description:
                  "The page, which is now displayed after navigation."
              },
              toId: {
                name: "toId",
                type: "string",
                description:
                  "The ID of the page, which is now displayed after navigation."
              },
              firstTime: {
                name: "firstTime",
                type: "boolean",
                description:
                  'Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to) has not been displayed/navigated to before.'
              },
              isTo: {
                name: "isTo",
                type: "boolean",
                description:
                  "Determines whether was a forward navigation, triggered by to()."
              },
              isBack: {
                name: "isBack",
                type: "boolean",
                description:
                  "Determines whether this was a back navigation, triggered by back()."
              },
              isBackToTop: {
                name: "isBackToTop",
                type: "boolean",
                description:
                  "Determines whether this was a navigation to the root page, triggered by backToTop()."
              },
              isBackToPage: {
                name: "isBackToPage",
                type: "boolean",
                description:
                  "Determines whether this was a navigation to a specific page, triggered by backToPage()."
              },
              direction: {
                name: "direction",
                type: "string",
                description:
                  'Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".'
              }
            },
            methods: [
              "attachAfterEndColumnNavigate",
              "detachAfterEndColumnNavigate",
              "fireAfterEndColumnNavigate"
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
          "Constructor for a new <code>sap.f.FlexibleColumnLayout</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.",
        references: [
          "{@link topic:59a0e11712e84a648bb990a1dba76bc7 Flexible Column Layout}",
          "{@link fiori:https://experience.sap.com/fiori-design-web/flexible-column-layout/ Flexible Column Layout}"
        ]
      },
      events: [
        {
          name: "afterBeginColumnNavigate",
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
                    from: {
                      name: "from",
                      type: "sap.ui.core.Control",
                      optional: false,
                      description:
                        "The page, which had been displayed before navigation."
                    },
                    fromId: {
                      name: "fromId",
                      type: "string",
                      optional: false,
                      description:
                        "The ID of the page, which had been displayed before navigation."
                    },
                    to: {
                      name: "to",
                      type: "sap.ui.core.Control",
                      optional: false,
                      description:
                        "The page, which is now displayed after navigation."
                    },
                    toId: {
                      name: "toId",
                      type: "string",
                      optional: false,
                      description:
                        "The ID of the page, which is now displayed after navigation."
                    },
                    firstTime: {
                      name: "firstTime",
                      type: "boolean",
                      optional: false,
                      description:
                        'Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to) has not been displayed/navigated to before.'
                    },
                    isTo: {
                      name: "isTo",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether was a forward navigation, triggered by to()."
                    },
                    isBack: {
                      name: "isBack",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether this was a back navigation, triggered by back()."
                    },
                    isBackToTop: {
                      name: "isBackToTop",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether this was a navigation to the root page, triggered by backToTop()."
                    },
                    isBackToPage: {
                      name: "isBackToPage",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether this was a navigation to a specific page, triggered by backToPage()."
                    },
                    direction: {
                      name: "direction",
                      type: "string",
                      optional: false,
                      description:
                        'Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".'
                    }
                  }
                }
              }
            }
          ],
          description:
            "Fires when navigation between two pages in the <code>Begin</code> column has completed.\n\nNOTE: In case of animated transitions this event is fired with some delay after the navigate event."
        },
        {
          name: "afterEndColumnNavigate",
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
                    from: {
                      name: "from",
                      type: "sap.ui.core.Control",
                      optional: false,
                      description:
                        "The page, which had been displayed before navigation."
                    },
                    fromId: {
                      name: "fromId",
                      type: "string",
                      optional: false,
                      description:
                        "The ID of the page, which had been displayed before navigation."
                    },
                    to: {
                      name: "to",
                      type: "sap.ui.core.Control",
                      optional: false,
                      description:
                        "The page, which is now displayed after navigation."
                    },
                    toId: {
                      name: "toId",
                      type: "string",
                      optional: false,
                      description:
                        "The ID of the page, which is now displayed after navigation."
                    },
                    firstTime: {
                      name: "firstTime",
                      type: "boolean",
                      optional: false,
                      description:
                        'Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to) has not been displayed/navigated to before.'
                    },
                    isTo: {
                      name: "isTo",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether was a forward navigation, triggered by to()."
                    },
                    isBack: {
                      name: "isBack",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether this was a back navigation, triggered by back()."
                    },
                    isBackToTop: {
                      name: "isBackToTop",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether this was a navigation to the root page, triggered by backToTop()."
                    },
                    isBackToPage: {
                      name: "isBackToPage",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether this was a navigation to a specific page, triggered by backToPage()."
                    },
                    direction: {
                      name: "direction",
                      type: "string",
                      optional: false,
                      description:
                        'Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".'
                    }
                  }
                }
              }
            }
          ],
          description:
            "Fires when navigation between two pages in the <code>End</code> column has completed.\n\nNOTE: In case of animated transitions this event is fired with some delay after the navigate event."
        },
        {
          name: "afterMidColumnNavigate",
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
                    from: {
                      name: "from",
                      type: "sap.ui.core.Control",
                      optional: false,
                      description:
                        "The page, which had been displayed before navigation."
                    },
                    fromId: {
                      name: "fromId",
                      type: "string",
                      optional: false,
                      description:
                        "The ID of the page, which had been displayed before navigation."
                    },
                    to: {
                      name: "to",
                      type: "sap.ui.core.Control",
                      optional: false,
                      description:
                        "The page, which is now displayed after navigation."
                    },
                    toId: {
                      name: "toId",
                      type: "string",
                      optional: false,
                      description:
                        "The ID of the page, which is now displayed after navigation."
                    },
                    firstTime: {
                      name: "firstTime",
                      type: "boolean",
                      optional: false,
                      description:
                        'Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to) has not been displayed/navigated to before.'
                    },
                    isTo: {
                      name: "isTo",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether was a forward navigation, triggered by to()."
                    },
                    isBack: {
                      name: "isBack",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether this was a back navigation, triggered by back()."
                    },
                    isBackToTop: {
                      name: "isBackToTop",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether this was a navigation to the root page, triggered by backToTop()."
                    },
                    isBackToPage: {
                      name: "isBackToPage",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether this was a navigation to a specific page, triggered by backToPage()."
                    },
                    direction: {
                      name: "direction",
                      type: "string",
                      optional: false,
                      description:
                        'Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".'
                    }
                  }
                }
              }
            }
          ],
          description:
            "Fires when navigation between two pages in the <code>Mid</code> column has completed.\n\nNOTE: In case of animated transitions this event is fired with some delay after the navigate event."
        },
        {
          name: "beginColumnNavigate",
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
                    from: {
                      name: "from",
                      type: "sap.ui.core.Control",
                      optional: false,
                      description:
                        "The page, which was displayed before the current navigation."
                    },
                    fromId: {
                      name: "fromId",
                      type: "string",
                      optional: false,
                      description:
                        "The ID of the page, which was displayed before the current navigation."
                    },
                    to: {
                      name: "to",
                      type: "sap.ui.core.Control",
                      optional: false,
                      description:
                        "The page, which will be displayed after the current navigation."
                    },
                    toId: {
                      name: "toId",
                      type: "string",
                      optional: false,
                      description:
                        "The ID of the page, which will be displayed after the current navigation."
                    },
                    firstTime: {
                      name: "firstTime",
                      type: "boolean",
                      optional: false,
                      description:
                        'Determines whether the "to" page (more precisely: a control with the ID of the page, which is currently being navigated to) has not been displayed/navigated to before.'
                    },
                    isTo: {
                      name: "isTo",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether this is a forward navigation, triggered by to()."
                    },
                    isBack: {
                      name: "isBack",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether this is a back navigation, triggered by back()."
                    },
                    isBackToTop: {
                      name: "isBackToTop",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether this is a navigation to the root page, triggered by backToTop()."
                    },
                    isBackToPage: {
                      name: "isBackToPage",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether this was a navigation to a specific page, triggered by backToPage()."
                    },
                    direction: {
                      name: "direction",
                      type: "string",
                      optional: false,
                      description:
                        'Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".'
                    }
                  }
                }
              }
            }
          ],
          description:
            "Fires when navigation between two pages in the <code>Begin</code> column has been triggered. The transition (if any) to the new page has not started yet. This event can be aborted by the application with preventDefault(), which means that there will be no navigation."
        },
        {
          name: "endColumnNavigate",
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
                    from: {
                      name: "from",
                      type: "sap.ui.core.Control",
                      optional: false,
                      description:
                        "The page, which was displayed before the current navigation."
                    },
                    fromId: {
                      name: "fromId",
                      type: "string",
                      optional: false,
                      description:
                        "The ID of the page, which was displayed before the current navigation."
                    },
                    to: {
                      name: "to",
                      type: "sap.ui.core.Control",
                      optional: false,
                      description:
                        "The page, which will be displayed after the current navigation."
                    },
                    toId: {
                      name: "toId",
                      type: "string",
                      optional: false,
                      description:
                        "The ID of the page, which will be displayed after the current navigation."
                    },
                    firstTime: {
                      name: "firstTime",
                      type: "boolean",
                      optional: false,
                      description:
                        'Determines whether the "to" page (more precisely: a control with the ID of the page, which is currently being navigated to) has not been displayed/navigated to before.'
                    },
                    isTo: {
                      name: "isTo",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether this is a forward navigation, triggered by to()."
                    },
                    isBack: {
                      name: "isBack",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether this is a back navigation, triggered by back()."
                    },
                    isBackToTop: {
                      name: "isBackToTop",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether this is a navigation to the root page, triggered by backToTop()."
                    },
                    isBackToPage: {
                      name: "isBackToPage",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether this was a navigation to a specific page, triggered by backToPage()."
                    },
                    direction: {
                      name: "direction",
                      type: "string",
                      optional: false,
                      description:
                        'Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".'
                    }
                  }
                }
              }
            }
          ],
          description:
            "Fires when navigation between two pages in the <code>End</code> column has been triggered. The transition (if any) to the new page has not started yet. This event can be aborted by the application with preventDefault(), which means that there will be no navigation."
        },
        {
          name: "midColumnNavigate",
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
                    from: {
                      name: "from",
                      type: "sap.ui.core.Control",
                      optional: false,
                      description:
                        "The page, which was displayed before the current navigation."
                    },
                    fromId: {
                      name: "fromId",
                      type: "string",
                      optional: false,
                      description:
                        "The ID of the page, which was displayed before the current navigation."
                    },
                    to: {
                      name: "to",
                      type: "sap.ui.core.Control",
                      optional: false,
                      description:
                        "The page, which will be displayed after the current navigation."
                    },
                    toId: {
                      name: "toId",
                      type: "string",
                      optional: false,
                      description:
                        "The ID of the page, which will be displayed after the current navigation."
                    },
                    firstTime: {
                      name: "firstTime",
                      type: "boolean",
                      optional: false,
                      description:
                        'Determines whether the "to" page (more precisely: a control with the ID of the page, which is currently being navigated to) has not been displayed/navigated to before.'
                    },
                    isTo: {
                      name: "isTo",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether this is a forward navigation, triggered by to()."
                    },
                    isBack: {
                      name: "isBack",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether this is a back navigation, triggered by back()."
                    },
                    isBackToTop: {
                      name: "isBackToTop",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether this is a navigation to the root page, triggered by backToTop()."
                    },
                    isBackToPage: {
                      name: "isBackToPage",
                      type: "boolean",
                      optional: false,
                      description:
                        "Determines whether this was a navigation to a specific page, triggered by backToPage()."
                    },
                    direction: {
                      name: "direction",
                      type: "string",
                      optional: false,
                      description:
                        'Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".'
                    }
                  }
                }
              }
            }
          ],
          description:
            "Fires when navigation between two pages in the <code>Mid</code> column has been triggered. The transition (if any) to the new page has not started yet. This event can be aborted by the application with preventDefault(), which means that there will be no navigation."
        },
        {
          name: "stateChange",
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
                    layout: {
                      name: "layout",
                      type: "sap.f.LayoutType",
                      optional: false,
                      description:
                        "The value of the <code>layout</code> property"
                    },
                    maxColumnsCount: {
                      name: "maxColumnsCount",
                      type: "int",
                      optional: false,
                      description:
                        "The maximum number of columns that can be displayed at once based on the available screen size and control settings.\n\n<ul>Possible values are: <li>3 for browser size of 1280px or more</li> <li>2 for browser size between 960px and 1280px</li> <li>1 for browser size less than 960px</li></ul>"
                    },
                    isNavigationArrow: {
                      name: "isNavigationArrow",
                      type: "boolean",
                      optional: false,
                      description:
                        "Indicates whether the layout changed as a result of the user clicking a layout arrow"
                    },
                    isResize: {
                      name: "isResize",
                      type: "boolean",
                      optional: false,
                      description:
                        "Indicates whether the maximum number of columns that can be displayed at once changed"
                    }
                  }
                }
              }
            }
          ],
          description:
            "Fired when there is a change in the <code>layout</code> property or in the maximum number of columns that can be displayed at once. <br/></br> <ul>The interactions that may lead to a state change are: <li>the property <code>layout</code> was changed indirectly by the user clicking a layout arrow</li> <li>the user resized the browser beyond a breakpoint, thus changing the maximum number of columns that can be displayed at once.</li></ul> <br/><br/> <b>Note: </b>The event is suppressed while the control has zero width and will be fired the first time it gets a non-zero width"
        }
      ],
      methods: [
        {
          name: "addBeginColumnPage",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oBeginColumnPage",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The beginColumnPage to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some beginColumnPage to the aggregation {@link #getBeginColumnPages beginColumnPages}."
        },
        {
          name: "addEndColumnPage",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oEndColumnPage",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The endColumnPage to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some endColumnPage to the aggregation {@link #getEndColumnPages endColumnPages}."
        },
        {
          name: "addMidColumnPage",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oMidColumnPage",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The midColumnPage to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some midColumnPage to the aggregation {@link #getMidColumnPages midColumnPages}."
        },
        {
          name: "attachAfterBeginColumnNavigate",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
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
                "Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:afterBeginColumnNavigate afterBeginColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.\n\nFires when navigation between two pages in the <code>Begin</code> column has completed.\n\nNOTE: In case of animated transitions this event is fired with some delay after the navigate event."
        },
        {
          name: "attachAfterEndColumnNavigate",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
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
                "Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:afterEndColumnNavigate afterEndColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.\n\nFires when navigation between two pages in the <code>End</code> column has completed.\n\nNOTE: In case of animated transitions this event is fired with some delay after the navigate event."
        },
        {
          name: "attachAfterMidColumnNavigate",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
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
                "Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:afterMidColumnNavigate afterMidColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.\n\nFires when navigation between two pages in the <code>Mid</code> column has completed.\n\nNOTE: In case of animated transitions this event is fired with some delay after the navigate event."
        },
        {
          name: "attachBeginColumnNavigate",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
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
                "Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:beginColumnNavigate beginColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.\n\nFires when navigation between two pages in the <code>Begin</code> column has been triggered. The transition (if any) to the new page has not started yet. This event can be aborted by the application with preventDefault(), which means that there will be no navigation."
        },
        {
          name: "attachEndColumnNavigate",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
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
                "Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:endColumnNavigate endColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.\n\nFires when navigation between two pages in the <code>End</code> column has been triggered. The transition (if any) to the new page has not started yet. This event can be aborted by the application with preventDefault(), which means that there will be no navigation."
        },
        {
          name: "attachMidColumnNavigate",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
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
                "Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:midColumnNavigate midColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.\n\nFires when navigation between two pages in the <code>Mid</code> column has been triggered. The transition (if any) to the new page has not started yet. This event can be aborted by the application with preventDefault(), which means that there will be no navigation."
        },
        {
          name: "attachStateChange",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
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
                "Context object to call the event handler with. Defaults to this <code>sap.f.FlexibleColumnLayout</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:stateChange stateChange} event of this <code>sap.f.FlexibleColumnLayout</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.FlexibleColumnLayout</code> itself.\n\nFired when there is a change in the <code>layout</code> property or in the maximum number of columns that can be displayed at once. <br/></br> <ul>The interactions that may lead to a state change are: <li>the property <code>layout</code> was changed indirectly by the user clicking a layout arrow</li> <li>the user resized the browser beyond a breakpoint, thus changing the maximum number of columns that can be displayed at once.</li></ul> <br/><br/> <b>Note: </b>The event is suppressed while the control has zero width and will be fired the first time it gets a non-zero width"
        },
        {
          name: "backToPage",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description: "The <code>sap.f.FlexibleColumnLayout</code> instance"
          },
          parameters: [
            {
              name: "sPageId",
              type: "string",
              optional: false,
              description:
                "The screen to which is being navigated to. The ID or the control itself can be given."
            },
            {
              name: "oBackData",
              type: "object",
              optional: false,
              description:
                "This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as backData property. (the original data from the to() navigation will still be available as data property).\n\nIn scenarios, where the entity triggering the navigation can't or shouldn't directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data. For back navigation this can be used, for example, when returning from a detail page to transfer any settings done there.\n\nWhen the transitionParameters object is used, this data object must also be given (either as object or as null) in order to have a proper parameter order."
            },
            {
              name: "oTransitionParameters",
              type: "object",
              optional: false,
              description:
                'This optional object can give additional information to the transition function, like the DOM element, which triggered the transition or the desired transition duration. The animation type can NOT be selected here - it is always the inverse of the "to" navigation.\n\nIn order to use the transitionParameters property, the data property must be used (at least "null" must be given) for a proper parameter order.\n\nNOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.'
            }
          ],
          description:
            'Navigates back to a page in the <code>FlexibleColumnLayout</code>. Columns are scanned for the page in the following order: <code>Begin</code>, <code>Mid</code>, <code>End</code>.\n\nCalling this navigation method, first triggers the (cancelable) navigate event on the SplitContainer, then the beforeHide pseudo event on the source page, beforeFirstShow (if applicable), and beforeShow on the target page. Later, after the transition has completed, the afterShow pseudo event is triggered on the target page and afterHide - on the page, which has been left. The given backData object is available in the beforeFirstShow, beforeShow, and afterShow event objects as data property. The original "data" object from the "to" navigation is also available in these event objects.'
        },
        {
          name: "backToTopBeginColumn",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description: "The <code>sap.f.FlexibleColumnLayout</code> instance"
          },
          parameters: [
            {
              name: "oBackData",
              type: "object",
              optional: false,
              description:
                'This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)\n\nIn scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data. For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.\n\nWhen the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.'
            },
            {
              name: "oTransitionParameters",
              type: "object",
              optional: false,
              description:
                'This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration. The animation type can NOT be selected here - it is always the inverse of the "to" navigation.\n\nIn order to use the transitionParameters property, the data property must be used (at least "null" must be given) for a proper parameter order.\n\nNOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.'
            }
          ],
          description:
            'Navigates back to the initial/top level of Begin column (this is the element aggregated as "initialPage", or the first added element). NOTE: If already on the initial page, nothing happens. The transition effect which had been used to get to the current page is inverted and used for this navigation.'
        },
        {
          name: "backToTopEndColumn",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description: "The <code>sap.f.FlexibleColumnLayout</code> instance"
          },
          parameters: [
            {
              name: "oBackData",
              type: "object",
              optional: false,
              description:
                'This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)\n\nIn scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data. For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.\n\nWhen the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.'
            },
            {
              name: "oTransitionParameters",
              type: "object",
              optional: false,
              description:
                'This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration. The animation type can NOT be selected here - it is always the inverse of the "to" navigation.\n\nIn order to use the transitionParameters property, the data property must be used (at least "null" must be given) for a proper parameter order.\n\nNOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.'
            }
          ],
          description:
            'Navigates back to the initial/top level of End column (this is the element aggregated as "initialPage", or the first added element). NOTE: If already on the initial page, nothing happens. The transition effect which had been used to get to the current page is inverted and used for this navigation.'
        },
        {
          name: "backToTopMidColumn",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description: "The <code>sap.f.FlexibleColumnLayout</code> instance"
          },
          parameters: [
            {
              name: "oBackData",
              type: "object",
              optional: false,
              description:
                'This optional object can carry any payload data which should be made available to the target page of the back navigation. The event on the target page will contain this data object as "backData" property. (The original data from the "to()" navigation will still be available as "data" property.)\n\nIn scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data. For back navigation this can be used e.g. when returning from a detail page to transfer any settings done there.\n\nWhen the "transitionParameters" object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.'
            },
            {
              name: "oTransitionParameters",
              type: "object",
              optional: false,
              description:
                'This optional object can give additional information to the transition function, like the DOM element which triggered the transition or the desired transition duration. The animation type can NOT be selected here - it is always the inverse of the "to" navigation.\n\nIn order to use the transitionParameters property, the data property must be used (at least "null" must be given) for a proper parameter order.\n\nNOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition.'
            }
          ],
          description:
            'Navigates back to the initial/top level of Mid column (this is the element aggregated as "initialPage", or the first added element). NOTE: If already on the initial page, nothing happens. The transition effect which had been used to get to the current page is inverted and used for this navigation.'
        },
        {
          name: "destroyBeginColumnPages",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the beginColumnPages in the aggregation {@link #getBeginColumnPages beginColumnPages}."
        },
        {
          name: "destroyEndColumnPages",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the endColumnPages in the aggregation {@link #getEndColumnPages endColumnPages}."
        },
        {
          name: "destroyMidColumnPages",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the midColumnPages in the aggregation {@link #getMidColumnPages midColumnPages}."
        },
        {
          name: "detachAfterBeginColumnNavigate",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:afterBeginColumnNavigate afterBeginColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachAfterEndColumnNavigate",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:afterEndColumnNavigate afterEndColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachAfterMidColumnNavigate",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:afterMidColumnNavigate afterMidColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachBeginColumnNavigate",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:beginColumnNavigate beginColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachEndColumnNavigate",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:endColumnNavigate endColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachMidColumnNavigate",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:midColumnNavigate midColumnNavigate} event of this <code>sap.f.FlexibleColumnLayout</code>.\n\nThe passed function and listener object must match the ones used for event registration."
        },
        {
          name: "detachStateChange",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:stateChange stateChange} event of this <code>sap.f.FlexibleColumnLayout</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.FlexibleColumnLayout with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "fireAfterBeginColumnNavigate",
          visibility: "protected",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                from: {
                  name: "from",
                  type: "sap.ui.core.Control",
                  optional: true,
                  description:
                    "The page, which had been displayed before navigation."
                },
                fromId: {
                  name: "fromId",
                  type: "string",
                  optional: true,
                  description:
                    "The ID of the page, which had been displayed before navigation."
                },
                to: {
                  name: "to",
                  type: "sap.ui.core.Control",
                  optional: true,
                  description:
                    "The page, which is now displayed after navigation."
                },
                toId: {
                  name: "toId",
                  type: "string",
                  optional: true,
                  description:
                    "The ID of the page, which is now displayed after navigation."
                },
                firstTime: {
                  name: "firstTime",
                  type: "boolean",
                  optional: true,
                  description:
                    'Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to) has not been displayed/navigated to before.'
                },
                isTo: {
                  name: "isTo",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether was a forward navigation, triggered by to()."
                },
                isBack: {
                  name: "isBack",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether this was a back navigation, triggered by back()."
                },
                isBackToTop: {
                  name: "isBackToTop",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether this was a navigation to the root page, triggered by backToTop()."
                },
                isBackToPage: {
                  name: "isBackToPage",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether this was a navigation to a specific page, triggered by backToPage()."
                },
                direction: {
                  name: "direction",
                  type: "string",
                  optional: true,
                  description:
                    'Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".'
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:afterBeginColumnNavigate afterBeginColumnNavigate} to attached listeners."
        },
        {
          name: "fireAfterEndColumnNavigate",
          visibility: "protected",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                from: {
                  name: "from",
                  type: "sap.ui.core.Control",
                  optional: true,
                  description:
                    "The page, which had been displayed before navigation."
                },
                fromId: {
                  name: "fromId",
                  type: "string",
                  optional: true,
                  description:
                    "The ID of the page, which had been displayed before navigation."
                },
                to: {
                  name: "to",
                  type: "sap.ui.core.Control",
                  optional: true,
                  description:
                    "The page, which is now displayed after navigation."
                },
                toId: {
                  name: "toId",
                  type: "string",
                  optional: true,
                  description:
                    "The ID of the page, which is now displayed after navigation."
                },
                firstTime: {
                  name: "firstTime",
                  type: "boolean",
                  optional: true,
                  description:
                    'Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to) has not been displayed/navigated to before.'
                },
                isTo: {
                  name: "isTo",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether was a forward navigation, triggered by to()."
                },
                isBack: {
                  name: "isBack",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether this was a back navigation, triggered by back()."
                },
                isBackToTop: {
                  name: "isBackToTop",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether this was a navigation to the root page, triggered by backToTop()."
                },
                isBackToPage: {
                  name: "isBackToPage",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether this was a navigation to a specific page, triggered by backToPage()."
                },
                direction: {
                  name: "direction",
                  type: "string",
                  optional: true,
                  description:
                    'Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".'
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:afterEndColumnNavigate afterEndColumnNavigate} to attached listeners."
        },
        {
          name: "fireAfterMidColumnNavigate",
          visibility: "protected",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                from: {
                  name: "from",
                  type: "sap.ui.core.Control",
                  optional: true,
                  description:
                    "The page, which had been displayed before navigation."
                },
                fromId: {
                  name: "fromId",
                  type: "string",
                  optional: true,
                  description:
                    "The ID of the page, which had been displayed before navigation."
                },
                to: {
                  name: "to",
                  type: "sap.ui.core.Control",
                  optional: true,
                  description:
                    "The page, which is now displayed after navigation."
                },
                toId: {
                  name: "toId",
                  type: "string",
                  optional: true,
                  description:
                    "The ID of the page, which is now displayed after navigation."
                },
                firstTime: {
                  name: "firstTime",
                  type: "boolean",
                  optional: true,
                  description:
                    'Whether the "to" page (more precisely: a control with the ID of the page, which has been navigated to) has not been displayed/navigated to before.'
                },
                isTo: {
                  name: "isTo",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether was a forward navigation, triggered by to()."
                },
                isBack: {
                  name: "isBack",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether this was a back navigation, triggered by back()."
                },
                isBackToTop: {
                  name: "isBackToTop",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether this was a navigation to the root page, triggered by backToTop()."
                },
                isBackToPage: {
                  name: "isBackToPage",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether this was a navigation to a specific page, triggered by backToPage()."
                },
                direction: {
                  name: "direction",
                  type: "string",
                  optional: true,
                  description:
                    'Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".'
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:afterMidColumnNavigate afterMidColumnNavigate} to attached listeners."
        },
        {
          name: "fireBeginColumnNavigate",
          visibility: "protected",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                from: {
                  name: "from",
                  type: "sap.ui.core.Control",
                  optional: true,
                  description:
                    "The page, which was displayed before the current navigation."
                },
                fromId: {
                  name: "fromId",
                  type: "string",
                  optional: true,
                  description:
                    "The ID of the page, which was displayed before the current navigation."
                },
                to: {
                  name: "to",
                  type: "sap.ui.core.Control",
                  optional: true,
                  description:
                    "The page, which will be displayed after the current navigation."
                },
                toId: {
                  name: "toId",
                  type: "string",
                  optional: true,
                  description:
                    "The ID of the page, which will be displayed after the current navigation."
                },
                firstTime: {
                  name: "firstTime",
                  type: "boolean",
                  optional: true,
                  description:
                    'Determines whether the "to" page (more precisely: a control with the ID of the page, which is currently being navigated to) has not been displayed/navigated to before.'
                },
                isTo: {
                  name: "isTo",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether this is a forward navigation, triggered by to()."
                },
                isBack: {
                  name: "isBack",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether this is a back navigation, triggered by back()."
                },
                isBackToTop: {
                  name: "isBackToTop",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether this is a navigation to the root page, triggered by backToTop()."
                },
                isBackToPage: {
                  name: "isBackToPage",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether this was a navigation to a specific page, triggered by backToPage()."
                },
                direction: {
                  name: "direction",
                  type: "string",
                  optional: true,
                  description:
                    'Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".'
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:beginColumnNavigate beginColumnNavigate} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "fireEndColumnNavigate",
          visibility: "protected",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                from: {
                  name: "from",
                  type: "sap.ui.core.Control",
                  optional: true,
                  description:
                    "The page, which was displayed before the current navigation."
                },
                fromId: {
                  name: "fromId",
                  type: "string",
                  optional: true,
                  description:
                    "The ID of the page, which was displayed before the current navigation."
                },
                to: {
                  name: "to",
                  type: "sap.ui.core.Control",
                  optional: true,
                  description:
                    "The page, which will be displayed after the current navigation."
                },
                toId: {
                  name: "toId",
                  type: "string",
                  optional: true,
                  description:
                    "The ID of the page, which will be displayed after the current navigation."
                },
                firstTime: {
                  name: "firstTime",
                  type: "boolean",
                  optional: true,
                  description:
                    'Determines whether the "to" page (more precisely: a control with the ID of the page, which is currently being navigated to) has not been displayed/navigated to before.'
                },
                isTo: {
                  name: "isTo",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether this is a forward navigation, triggered by to()."
                },
                isBack: {
                  name: "isBack",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether this is a back navigation, triggered by back()."
                },
                isBackToTop: {
                  name: "isBackToTop",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether this is a navigation to the root page, triggered by backToTop()."
                },
                isBackToPage: {
                  name: "isBackToPage",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether this was a navigation to a specific page, triggered by backToPage()."
                },
                direction: {
                  name: "direction",
                  type: "string",
                  optional: true,
                  description:
                    'Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".'
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:endColumnNavigate endColumnNavigate} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "fireMidColumnNavigate",
          visibility: "protected",
          returnValue: {
            type: "boolean",
            description: "Whether or not to prevent the default action"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                from: {
                  name: "from",
                  type: "sap.ui.core.Control",
                  optional: true,
                  description:
                    "The page, which was displayed before the current navigation."
                },
                fromId: {
                  name: "fromId",
                  type: "string",
                  optional: true,
                  description:
                    "The ID of the page, which was displayed before the current navigation."
                },
                to: {
                  name: "to",
                  type: "sap.ui.core.Control",
                  optional: true,
                  description:
                    "The page, which will be displayed after the current navigation."
                },
                toId: {
                  name: "toId",
                  type: "string",
                  optional: true,
                  description:
                    "The ID of the page, which will be displayed after the current navigation."
                },
                firstTime: {
                  name: "firstTime",
                  type: "boolean",
                  optional: true,
                  description:
                    'Determines whether the "to" page (more precisely: a control with the ID of the page, which is currently being navigated to) has not been displayed/navigated to before.'
                },
                isTo: {
                  name: "isTo",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether this is a forward navigation, triggered by to()."
                },
                isBack: {
                  name: "isBack",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether this is a back navigation, triggered by back()."
                },
                isBackToTop: {
                  name: "isBackToTop",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether this is a navigation to the root page, triggered by backToTop()."
                },
                isBackToPage: {
                  name: "isBackToPage",
                  type: "boolean",
                  optional: true,
                  description:
                    "Determines whether this was a navigation to a specific page, triggered by backToPage()."
                },
                direction: {
                  name: "direction",
                  type: "string",
                  optional: true,
                  description:
                    'Determines how the navigation was triggered, possible values are "to", "back", "backToPage", and "backToTop".'
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:midColumnNavigate midColumnNavigate} to attached listeners.\n\nListeners may prevent the default action of this event by using the <code>preventDefault</code>-method on the event object."
        },
        {
          name: "fireStateChange",
          visibility: "protected",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "mParameters",
              type: "object",
              optional: true,
              parameterProperties: {
                layout: {
                  name: "layout",
                  type: "sap.f.LayoutType",
                  optional: true,
                  description: "The value of the <code>layout</code> property"
                },
                maxColumnsCount: {
                  name: "maxColumnsCount",
                  type: "int",
                  optional: true,
                  description:
                    "The maximum number of columns that can be displayed at once based on the available screen size and control settings.\n\n<ul>Possible values are: <li>3 for browser size of 1280px or more</li> <li>2 for browser size between 960px and 1280px</li> <li>1 for browser size less than 960px</li></ul>"
                },
                isNavigationArrow: {
                  name: "isNavigationArrow",
                  type: "boolean",
                  optional: true,
                  description:
                    "Indicates whether the layout changed as a result of the user clicking a layout arrow"
                },
                isResize: {
                  name: "isResize",
                  type: "boolean",
                  optional: true,
                  description:
                    "Indicates whether the maximum number of columns that can be displayed at once changed"
                }
              },
              description: "Parameters to pass along with the event"
            }
          ],
          description:
            "Fires event {@link #event:stateChange stateChange} to attached listeners."
        },
        {
          name: "getBackgroundDesign",
          visibility: "public",
          since: "1.54",
          returnValue: {
            type: "sap.m.BackgroundDesign",
            description: "Value of property <code>backgroundDesign</code>"
          },
          description:
            "Gets current value of property {@link #getBackgroundDesign backgroundDesign}.\n\nSpecifies the background color of the content. The visualization of the different options depends on the used theme.\n\nDefault value is <code>Transparent</code>."
        },
        {
          name: "getBeginColumnPages",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getBeginColumnPages beginColumnPages}.\n\nThe content entities between which the <code>FlexibleColumnLayout</code> navigates in the <code>Begin</code> column.\n\nThese should be any control with page semantics. These aggregated controls will receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}."
        },
        {
          name: "getCurrentBeginColumnPage",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The UI5 control in the Begin column"
          },
          description: "Returns the currently displayed Begin column page."
        },
        {
          name: "getCurrentEndColumnPage",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The UI5 control in the End column"
          },
          description: "Returns the currently displayed End column page."
        },
        {
          name: "getCurrentMidColumnPage",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The UI5 control in the Mid column"
          },
          description: "Returns the currently displayed Mid column page."
        },
        {
          name: "getDefaultTransitionNameBeginColumn",
          visibility: "public",
          returnValue: {
            type: "string",
            description:
              "Value of property <code>defaultTransitionNameBeginColumn</code>"
          },
          description:
            "Gets current value of property {@link #getDefaultTransitionNameBeginColumn defaultTransitionNameBeginColumn}.\n\nDetermines the type of the transition/animation to apply for the <code>Begin</code> column when <code>to()</code> is called without defining the transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>flip</code>, <code>show</code>, and the names of any registered custom transitions.\n\nDefault value is <code>slide</code>."
        },
        {
          name: "getDefaultTransitionNameEndColumn",
          visibility: "public",
          returnValue: {
            type: "string",
            description:
              "Value of property <code>defaultTransitionNameEndColumn</code>"
          },
          description:
            "Gets current value of property {@link #getDefaultTransitionNameEndColumn defaultTransitionNameEndColumn}.\n\nDetermines the type of the transition/animation to apply for the <code>End</code> column when <code>to()</code> is called without defining the transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>flip</code>, <code>show</code>, and the names of any registered custom transitions.\n\nDefault value is <code>slide</code>."
        },
        {
          name: "getDefaultTransitionNameMidColumn",
          visibility: "public",
          returnValue: {
            type: "string",
            description:
              "Value of property <code>defaultTransitionNameMidColumn</code>"
          },
          description:
            "Gets current value of property {@link #getDefaultTransitionNameMidColumn defaultTransitionNameMidColumn}.\n\nDetermines the type of the transition/animation to apply for the <code>Mid</code> column when <code>to()</code> is called without defining the transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>flip</code>, <code>show</code>, and the names of any registered custom transitions.\n\nDefault value is <code>slide</code>."
        },
        {
          name: "getEndColumnPages",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getEndColumnPages endColumnPages}.\n\nThe content entities between which the <code>FlexibleColumnLayout</code> navigates in the <code>End</code> column.\n\nThese should be any control with page semantics. These aggregated controls will receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}."
        },
        {
          name: "getInitialBeginColumnPage",
          visibility: "public",
          returnValue: { type: "sap.ui.core.ID" },
          description:
            "ID of the element which is the current target of the association {@link #getInitialBeginColumnPage initialBeginColumnPage}, or <code>null</code>."
        },
        {
          name: "getInitialEndColumnPage",
          visibility: "public",
          returnValue: { type: "sap.ui.core.ID" },
          description:
            "ID of the element which is the current target of the association {@link #getInitialEndColumnPage initialEndColumnPage}, or <code>null</code>."
        },
        {
          name: "getInitialMidColumnPage",
          visibility: "public",
          returnValue: { type: "sap.ui.core.ID" },
          description:
            "ID of the element which is the current target of the association {@link #getInitialMidColumnPage initialMidColumnPage}, or <code>null</code>."
        },
        {
          name: "getLayout",
          visibility: "public",
          returnValue: {
            type: "sap.f.LayoutType",
            description: "Value of property <code>layout</code>"
          },
          description:
            "Gets current value of property {@link #getLayout layout}.\n\nDetermines the layout of the control - number of visible columns and their relative sizes.\n\nFor more details, see {@link topic:3b9f760da5b64adf8db7f95247879086 Types of Layout} in the documentation.\n\nDefault value is <code>OneColumn</code>."
        },
        {
          name: "getMaxColumnsCount",
          visibility: "public",
          returnValue: {
            type: "number",
            description: "The maximum number of columns"
          },
          description:
            "Returns the maximum number of columns that can be displayed at once based on the control width"
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.FlexibleColumnLayout."
        },
        {
          name: "getMidColumnPages",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getMidColumnPages midColumnPages}.\n\nThe content entities between which the <code>FlexibleColumnLayout</code> navigates in the <code>Mid</code> column.\n\nThese should be any control with page semantics. These aggregated controls will receive navigation events like {@link sap.m.NavContainerChild#beforeShow beforeShow}, they are documented in the pseudo interface {@link sap.m.NavContainerChild sap.m.NavContainerChild}."
        },
        {
          name: "indexOfBeginColumnPage",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oBeginColumnPage",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The beginColumnPage whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getBeginColumnPages beginColumnPages}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfEndColumnPage",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oEndColumnPage",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The endColumnPage whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getEndColumnPages endColumnPages}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfMidColumnPage",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oMidColumnPage",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The midColumnPage whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getMidColumnPages midColumnPages}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertBeginColumnPage",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oBeginColumnPage",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The beginColumnPage to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the beginColumnPage should be inserted at; for a negative value of <code>iIndex</code>, the beginColumnPage is inserted at position 0; for a value greater than the current size of the aggregation, the beginColumnPage is inserted at the last position"
            }
          ],
          description:
            "Inserts a beginColumnPage into the aggregation {@link #getBeginColumnPages beginColumnPages}."
        },
        {
          name: "insertEndColumnPage",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oEndColumnPage",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The endColumnPage to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the endColumnPage should be inserted at; for a negative value of <code>iIndex</code>, the endColumnPage is inserted at position 0; for a value greater than the current size of the aggregation, the endColumnPage is inserted at the last position"
            }
          ],
          description:
            "Inserts a endColumnPage into the aggregation {@link #getEndColumnPages endColumnPages}."
        },
        {
          name: "insertMidColumnPage",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oMidColumnPage",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The midColumnPage to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the midColumnPage should be inserted at; for a negative value of <code>iIndex</code>, the midColumnPage is inserted at position 0; for a value greater than the current size of the aggregation, the midColumnPage is inserted at the last position"
            }
          ],
          description:
            "Inserts a midColumnPage into the aggregation {@link #getMidColumnPages midColumnPages}."
        },
        {
          name: "removeAllBeginColumnPages",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getBeginColumnPages beginColumnPages}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllEndColumnPages",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getEndColumnPages endColumnPages}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllMidColumnPages",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getMidColumnPages midColumnPages}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeBeginColumnPage",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed beginColumnPage or <code>null</code>"
          },
          parameters: [
            {
              name: "vBeginColumnPage",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The beginColumnPage to remove or its index or id"
            }
          ],
          description:
            "Removes a beginColumnPage from the aggregation {@link #getBeginColumnPages beginColumnPages}."
        },
        {
          name: "removeEndColumnPage",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed endColumnPage or <code>null</code>"
          },
          parameters: [
            {
              name: "vEndColumnPage",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The endColumnPage to remove or its index or id"
            }
          ],
          description:
            "Removes a endColumnPage from the aggregation {@link #getEndColumnPages endColumnPages}."
        },
        {
          name: "removeMidColumnPage",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed midColumnPage or <code>null</code>"
          },
          parameters: [
            {
              name: "vMidColumnPage",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The midColumnPage to remove or its index or id"
            }
          ],
          description:
            "Removes a midColumnPage from the aggregation {@link #getMidColumnPages midColumnPages}."
        },
        {
          name: "setBackgroundDesign",
          visibility: "public",
          since: "1.54",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
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
            "Sets a new value for property {@link #getBackgroundDesign backgroundDesign}.\n\nSpecifies the background color of the content. The visualization of the different options depends on the used theme.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Transparent</code>."
        },
        {
          name: "setDefaultTransitionNameBeginColumn",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sDefaultTransitionNameBeginColumn",
              type: "string",
              optional: false,
              description:
                "New value for property <code>defaultTransitionNameBeginColumn</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getDefaultTransitionNameBeginColumn defaultTransitionNameBeginColumn}.\n\nDetermines the type of the transition/animation to apply for the <code>Begin</code> column when <code>to()</code> is called without defining the transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>flip</code>, <code>show</code>, and the names of any registered custom transitions.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>slide</code>."
        },
        {
          name: "setDefaultTransitionNameEndColumn",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sDefaultTransitionNameEndColumn",
              type: "string",
              optional: false,
              description:
                "New value for property <code>defaultTransitionNameEndColumn</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getDefaultTransitionNameEndColumn defaultTransitionNameEndColumn}.\n\nDetermines the type of the transition/animation to apply for the <code>End</code> column when <code>to()</code> is called without defining the transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>flip</code>, <code>show</code>, and the names of any registered custom transitions.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>slide</code>."
        },
        {
          name: "setDefaultTransitionNameMidColumn",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sDefaultTransitionNameMidColumn",
              type: "string",
              optional: false,
              description:
                "New value for property <code>defaultTransitionNameMidColumn</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getDefaultTransitionNameMidColumn defaultTransitionNameMidColumn}.\n\nDetermines the type of the transition/animation to apply for the <code>Mid</code> column when <code>to()</code> is called without defining the transition to use. The default is <code>slide</code>, other options are <code>fade</code>, <code>flip</code>, <code>show</code>, and the names of any registered custom transitions.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>slide</code>."
        },
        {
          name: "setInitialBeginColumnPage",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oInitialBeginColumnPage",
              type: "sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description:
                "ID of an element which becomes the new target of this initialBeginColumnPage association; alternatively, an element instance may be given"
            }
          ],
          description:
            "Sets the associated {@link #getInitialBeginColumnPage initialBeginColumnPage}."
        },
        {
          name: "setInitialEndColumnPage",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oInitialEndColumnPage",
              type: "sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description:
                "ID of an element which becomes the new target of this initialEndColumnPage association; alternatively, an element instance may be given"
            }
          ],
          description:
            "Sets the associated {@link #getInitialEndColumnPage initialEndColumnPage}."
        },
        {
          name: "setInitialMidColumnPage",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oInitialMidColumnPage",
              type: "sap.ui.core.ID|sap.ui.core.Control",
              optional: false,
              description:
                "ID of an element which becomes the new target of this initialMidColumnPage association; alternatively, an element instance may be given"
            }
          ],
          description:
            "Sets the associated {@link #getInitialMidColumnPage initialMidColumnPage}."
        },
        {
          name: "setLayout",
          visibility: "public",
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sLayout",
              type: "sap.f.LayoutType",
              optional: false,
              description: "New value for property <code>layout</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getLayout layout}.\n\nDetermines the layout of the control - number of visible columns and their relative sizes.\n\nFor more details, see {@link topic:3b9f760da5b64adf8db7f95247879086 Types of Layout} in the documentation.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>OneColumn</code>."
        },
        {
          name: "to",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description: "The <code>sap.f.FlexibleColumnLayout</code> instance"
          },
          parameters: [
            {
              name: "sPageId",
              type: "string",
              optional: false,
              description:
                "The screen to which we are navigating to. The ID or the control itself can be given."
            },
            {
              name: "sTransitionName",
              type: "string",
              optional: false,
              description:
                'The type of the transition/animation to apply. This parameter can be omitted; then the default value is "slide" (horizontal movement from the right). Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.\n\nNone of the standard transitions is currently making use of any given transition parameters.'
            },
            {
              name: "oData",
              type: "object",
              optional: false,
              description:
                'This optional object can carry any payload data which should be made available to the target page. The beforeShow event on the target page will contain this data object as data property.\n\nUse case: in scenarios where the entity triggering the navigation can or should not directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.\n\nWhen the transitionParameters object is used, this "data" object must also be given (either as object or as null) in order to have a proper parameter order.'
            },
            {
              name: "oTransitionParameters",
              type: "object",
              optional: false,
              description:
                'This optional object can contain additional information for the transition function, like the DOM element which triggered the transition or the desired transition duration.\n\nFor a proper parameter order, the "data" parameter must be given when the transitionParameters parameter is used (it can be given as "null").\n\nNOTE: It depends on the transition function how the object should be structured and which parameters are actually used to influence the transition. The "show", "slide" and "fade" transitions do not use any parameter.'
            }
          ],
          description:
            "Navigates to the given page inside the FlexibleColumnLayout. Columns are scanned for the page in the following order: <code>Begin</code>, <code>Mid</code>, <code>End</code>."
        },
        {
          name: "toBeginColumnPage",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description: "The <code>sap.f.FlexibleColumnLayout</code> instance"
          },
          parameters: [
            {
              name: "sPageId",
              type: "string",
              optional: false,
              description:
                "The screen to which drilldown should happen. The ID or the control itself can be given."
            },
            {
              name: "sTransitionName",
              type: "string",
              optional: false,
              description:
                'The type of the transition/animation to apply. This parameter can be omitted; then the default value is "slide" (horizontal movement from the right). Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.\n\nNone of the standard transitions is currently making use of any given transition parameters.'
            },
            {
              name: "oData",
              type: "object",
              optional: false,
              description:
                "This optional object can carry any payload data which should be made available to the target page. The beforeShow event on the target page will contain this data object as data property.\n\nUse case: in scenarios where the entity triggering the navigation can't or shouldn't directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.\n\nWhen the transitionParameters object is used, this data object must also be given (either as object or as null) in order to have a proper parameter order."
            },
            {
              name: "oTransitionParameters",
              type: "object",
              optional: false,
              description:
                'This optional object can contain additional information for the transition function, like the DOM element, which triggered the transition or the desired transition duration.\n\nFor a proper parameter order, the data parameter must be given when the transitionParameters parameter is used (it can be given as "null").\n\nNOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition. The "show", "slide" and "fade" transitions do not use any parameter.'
            }
          ],
          description: "Navigates to a given Begin column page."
        },
        {
          name: "toEndColumnPage",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description: "The <code>sap.f.FlexibleColumnLayout</code> instance"
          },
          parameters: [
            {
              name: "sPageId",
              type: "string",
              optional: false,
              description:
                "The screen to which drilldown should happen. The ID or the control itself can be given."
            },
            {
              name: "sTransitionName",
              type: "string",
              optional: false,
              description:
                'The type of the transition/animation to apply. This parameter can be omitted; then the default value is "slide" (horizontal movement from the right). Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.\n\nNone of the standard transitions is currently making use of any given transition parameters.'
            },
            {
              name: "oData",
              type: "object",
              optional: false,
              description:
                "This optional object can carry any payload data which should be made available to the target page. The beforeShow event on the target page will contain this data object as data property.\n\nUse case: in scenarios where the entity triggering the navigation can't or shouldn't directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.\n\nWhen the transitionParameters object is used, this data object must also be given (either as object or as null) in order to have a proper parameter order."
            },
            {
              name: "oTransitionParameters",
              type: "object",
              optional: false,
              description:
                'This optional object can contain additional information for the transition function, like the DOM element, which triggered the transition or the desired transition duration.\n\nFor a proper parameter order, the data parameter must be given when the transitionParameters parameter is used (it can be given as "null").\n\nNOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition. The "show", "slide" and "fade" transitions do not use any parameter.'
            }
          ],
          description: "Navigates to a given End column page."
        },
        {
          name: "toMidColumnPage",
          visibility: "public",
          "ui5-metamodel": true,
          returnValue: {
            type: "sap.f.FlexibleColumnLayout",
            description: "The <code>sap.f.FlexibleColumnLayout</code> instance"
          },
          parameters: [
            {
              name: "sPageId",
              type: "string",
              optional: false,
              description:
                "The screen to which drilldown should happen. The ID or the control itself can be given."
            },
            {
              name: "sTransitionName",
              type: "string",
              optional: false,
              description:
                'The type of the transition/animation to apply. This parameter can be omitted; then the default value is "slide" (horizontal movement from the right). Other options are: "fade", "flip", and "show" and the names of any registered custom transitions.\n\nNone of the standard transitions is currently making use of any given transition parameters.'
            },
            {
              name: "oData",
              type: "object",
              optional: false,
              description:
                "This optional object can carry any payload data which should be made available to the target page. The beforeShow event on the target page will contain this data object as data property.\n\nUse case: in scenarios where the entity triggering the navigation can't or shouldn't directly initialize the target page, it can fill this object and the target page itself (or a listener on it) can take over the initialization, using the given data.\n\nWhen the transitionParameters object is used, this data object must also be given (either as object or as null) in order to have a proper parameter order."
            },
            {
              name: "oTransitionParameters",
              type: "object",
              optional: false,
              description:
                'This optional object can contain additional information for the transition function, like the DOM element, which triggered the transition or the desired transition duration.\n\nFor a proper parameter order, the data parameter must be given when the transitionParameters parameter is used (it can be given as "null").\n\nNOTE: it depends on the transition function how the object should be structured and which parameters are actually used to influence the transition. The "show", "slide" and "fade" transitions do not use any parameter.'
            }
          ],
          description: "Navigates to a given Mid column page."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.FlexibleColumnLayoutSemanticHelper",
      basename: "FlexibleColumnLayoutSemanticHelper",
      resource: "sap/f/FlexibleColumnLayoutSemanticHelper.js",
      module: "sap/f/FlexibleColumnLayoutSemanticHelper",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46.0",
      description:
        "Helper class, facilitating the implementation of the recommended UX design of a <code>sap.f.FlexibleColumnLayout</code>-based app.\n\n<b>Note:</b> Using this class is not mandatory in order to build an app with <code>sap.f.FlexibleColumnLayout</code>, but exists for convenience only.\n\n<ul>The usage of <code>sap.f.FlexibleColumnLayoutSemanticHelper</code> revolves around two main methods: <li><code>getCurrentUIState</code>Suggests which action buttons to show in each <code>sap.f.FlexibleColumnLayout</code> column, based on the current control state (number and visibility of columns, layout, etc..)</li> <li><code>getNextUIState</code>Suggests which <code>layout</code> to use when navigating to another view level (e.g. from one view to two views).</li></ul>\n\nSample usage of the class:\n\n<pre>\n<code>\n var helper = sap.f.FlexibleColumnLayoutSemanticHelper.getInstanceFor(myFlexibleColumnLayout);\n helper.getCurrentUIState();\n helper.getNextUIState(2);\n helper.getNextUIState(0);\n</code>\n</pre>\n\nCalling <code>getCurrentUIState()</code> will return information which action buttons (Close, FullScreen, ExitFullScreen) must be currently shown in which column, according to UX guidelines, as well as to what layout clicking them should lead.\n\nCalling <code>getNextUIState(2)</code> will return information about the expected layout and action buttons if the application should display three views (master-detail-detail), based on the current state.\n\nSimilarly, calling <code>getNextUIState(0)</code> will return information about the expected layout and action buttons if the application should display the initial view only (master), based on the current state.\n\nFor more information, see {@link sap.f.FlexibleColumnLayoutSemanticHelper#getCurrentUIState} and {@link sap.f.FlexibleColumnLayoutSemanticHelper#getNextUIState}",
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "oFlexibleColumnLayout",
            type: "sap.f.FlexibleColumnLayout",
            optional: false,
            description:
              "The <code>sap.f.FlexibleColumnLayout</code> object whose state will be manipulated."
          },
          {
            name: "oSettings",
            type: "object",
            optional: false,
            parameterProperties: {
              defaultTwoColumnLayoutType: {
                name: "defaultTwoColumnLayoutType",
                type: "sap.f.LayoutType",
                optional: false,
                description:
                  "Determines what two-column layout type will be suggested by default: <code>sap.f.LayoutType.TwoColumnsBeginExpanded</code> (default) or <code>sap.f.LayoutType.TwoColumnsMidExpanded</code>."
              },
              defaultThreeColumnLayoutType: {
                name: "defaultThreeColumnLayoutType",
                type: "sap.f.LayoutType",
                optional: false,
                description:
                  "Determines what three-column layout type will be suggested by default: <code>sap.f.LayoutType.ThreeColumnsMidExpanded</code> (default) or <code>sap.f.LayoutType.ThreeColumnsEndExpanded</code>."
              },
              maxColumnsCount: {
                name: "maxColumnsCount",
                type: "int",
                optional: false,
                description:
                  "Determines the maximum number of columns that will be displayed side by side.\n\n<ul>Possible values:\n\n<li>Value of <code>1</code> only single-column layouts will be suggested.</li>\n\n<li>Value of <code>2</code> Up to 2-column layouts will be suggested.</li>\n\n<li>Value of <code>3</code> (default) - Up to 3-column layouts will be suggested.</li></ul>"
              },
              initialColumnsCount: {
                name: "initialColumnsCount",
                type: "int",
                optional: false,
                description:
                  "Determines whether a single-column or a 2-column layout will be suggested for logical level 0.\n\n<ul>Possible values:\n\n<li>Value of <code>1</code> (default) - A single-column layout will be suggested for logical level 0.</li>\n\n<li>Value of <code>2</code> - A 2-column layout will be suggested for logical level 0.</li></ul>"
              },
              mode: {
                name: "mode",
                type: "string",
                optional: false,
                description:
                  "<b>Deprecated as of version 1.50</b>, use <code>maxColumnsCount</code> param instead.\n\nDetermines the suggested layout types: <code>Normal</code> (3-column layouts), <code>MasterDetail</code> (2-column layouts for the first two pages, all other pages will open in fullscreen), and <code>SingleColumn</code> (one page at a time only)."
              }
            },
            description: "Determines the rules that will be used by the helper."
          }
        ],
        description:
          "Constructor for an sap.f.FlexibleColumnLayoutSemanticHelper."
      },
      methods: [
        {
          name: "getCurrentUIState",
          visibility: "public",
          returnValue: {
            type: "Object",
            description: "The object describing the current UI state"
          },
          description:
            'Returns an object, describing the current state of the control and the expected action buttons for each column.\n\n<ul>The returned object has the following structure: <li>layout - the value of the <code>layout</code> property</li> <li>maxColumnsCount - the maximum number of columns that can be displayed at once based on the control width. See {@link sap.f.FlexibleColumnLayout#getMaxColumnsCount}</li> <li>columnsSizes - an object with fields <code>beginColumn, midColumn, endColumn</code>, representing the relative percentage sizes of the three columns as integers</li> <li>columnsVisibility - an object with fields <code>beginColumn, midColumn, endColumn</code>, representing the visibility of the three columns</li> <li>isFullScreen - <code>true</code> if only one column is visible at the moment, <code>false</code> otherwise <b>Note:</b> This may be due to small screen size (phone) or due to a layout, for which a single column takes up the whole width</li> <li>isLogicallyFullScreen - <code>true</code> if the current <code>layout</code> is one of the following: <code>sap.f.LayoutType.OneColumn, sap.f.LayoutType.MidColumnFullScreen, sap.f.LayoutType.EndColumnFullScreen</code>, <code>false</code> otherwise <b>Note:</b> While <code>isFullScreen</code> can be <code>true</code> for any layout, due to small screen size, <code>isLogicallyFullScreen</code> will only be <code>true</code> for the layout values, listed above.</li> <li>actionButtonsInfo - an object with fields <code>midColumn, endColumn</code>, each containing an object, telling whether action buttons should be shown in the <code>mid</code> and <code>end</code> columns, and what value of the <code>layout</code> property should be set upon clicking these buttons. Each of these objects has the following fields: <code>closeColumn, fullScreen, exitFullScreen</code>. If <code>null</code>, then the respective action button should not be shown, otherwise provides the value of <code>layout</code> property for the action button.</li></ul>\n\nExample value:\n\n<pre>\n <code>\n {\n\t   "layout":"ThreeColumnsMidExpanded",\n\t   "maxColumnsCount":3,\n\t   "columnsSizes":{\n\t\t  "beginColumn":25,\n\t\t  "midColumn":50,\n\t\t  "endColumn":25\n\t   },\n\t   "columnsVisibility":{\n\t\t  "beginColumn":true,\n\t\t  "midColumn":true,\n\t\t  "endColumn":true\n\t   },\n\t   "isFullScreen":false,\n\t   "isLogicallyFullScreen":false,\n\t   "actionButtonsInfo":{\n\t\t  "midColumn":{\n\t\t\t "fullScreen":null,\n\t\t\t "exitFullScreen":null,\n\t\t\t "closeColumn":null\n\t\t  },\n\t\t  "endColumn":{\n\t\t\t "fullScreen":"EndColumnFullScreen",\n\t\t\t "exitFullScreen":null,\n\t\t\t "closeColumn":"TwoColumnsBeginExpanded"\n\t\t  }\n\t   }\n\t}\n </code>\n </pre>'
        },
        {
          name: "getDefaultLayouts",
          visibility: "public",
          returnValue: {
            type: "Object",
            description:
              "The object describing the default layout types for the different numbers of columns"
          },
          description:
            "Returns the default layout types for the different numbers of columns.\n\n<ul>The returned object has the following fields: <li>defaultLayoutType - the layout that will be suggested by default when only 1 column needs to be shown</li> <li>defaultTwoColumnLayoutType - the layout that will be suggested by default when 2 columns have to be shown side by side</li> <li>defaultThreeColumnLayoutType - the layout that will be suggested by default when 3 columns have to be shown side by side</li></ul>"
        },
        {
          name: "getInstanceFor",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.f.FlexibleColumnLayoutSemanticHelper",
            description:
              "The <code>sap.f.FlexibleColumnLayoutSemanticHelper</code> instance"
          },
          parameters: [
            {
              name: "oFlexibleColumnLayout",
              type: "sap.f.FlexibleColumnLayout",
              optional: false,
              description:
                "The <code>sap.f.FlexibleColumnLayout</code> object to get a semantic helper instance for"
            },
            {
              name: "oSettings",
              type: "object",
              optional: true,
              description:
                "An optional settings object to be used when creating the instance. <b>Note:</b> will be considered only for the first <code>getInstanceFor</code> call for the given <code>sap.f.FlexibleColumnLayout</code> object."
            }
          ],
          description:
            "Returns an instance of the <code>sap.f.FlexibleColumnLayoutSemanticHelper</code> class for a given <code>sap.f.FlexibleColumnLayout</code> object."
        },
        {
          name: "getNextUIState",
          visibility: "public",
          returnValue: {
            type: "Object",
            description: "The object describing the next UI state"
          },
          parameters: [
            {
              name: "iNextLevel",
              type: "int",
              optional: false,
              description:
                "the view level that should be represented. 0 means initial (master only), 1 - master-detail, 2 - master-detail-detail, 3 and above - subsequent views"
            }
          ],
          description:
            "Returns an object, describing the state that the control will have after navigating to a different view level.\n\nAbout the format of return value, see: {@link sap.f.FlexibleColumnLayoutSemanticHelper#getCurrentUIState}"
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.GridList",
      basename: "GridList",
      resource: "sap/f/GridList.js",
      module: "sap/f/GridList",
      export: "",
      static: true,
      visibility: "public",
      since: "1.60",
      extends: "sap.m.ListBase",
      implements: [
        "{sap.ui.layout.cssgrid.IGridConfigurable}",
        "sap.ui.layout.cssgrid.IGridConfigurable"
      ],
      description:
        "A list-based control with grid layout capabilities.\n\n<h3>Overview</h3>\n\nThe control is based on {@link sap.m.ListBase} and adds the flexibility to configure different grid layouts. The layout used is based on the CSS display grid and the control has a default configuration.\n\nWith <code>customLayout</code> aggregation it is possible to use: <ul> <li>Predefined simple grid layouts such as {@link sap.ui.layout.cssgrid.GridBoxLayout GridBoxLayout}</li> <li>Flexible grid layouts, such as {@link sap.ui.layout.cssgrid.GridBasicLayout GridBasicLayout} or {@link sap.ui.layout.cssgrid.GridResponsiveLayout GridResponsiveLayout} which reveal the native-browser CSS display grid APIs. For more information, see {@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout MDN web docs: CSS Grid Layout}</li> </ul>\n\nEvery item can override its size by specifying the number of columns and/or rows it will take in the grid. This is done using {@link sap.ui.layout.cssgrid.GridItemLayoutData GridItemLayoutData}.\n\n<h3>Usage</h3>\n\nFor general cases, use the default grid configuration of the <code>GridList</code>. For Box case (equal sized items), use <code>customLayout</code> aggregation with {@link sap.ui.layout.cssgrid.GridBoxLayout GridBoxLayout} For Grids which need different configurations based on available width, use <code>customLayout</code> aggregation with {@link sap.ui.layout.cssgrid.GridResponsiveLayout GridResponsiveLayout} To set a specific position to an item or define its dimensions in the grid, pass <code>layoutData</code> of type {@link sap.ui.layout.cssgrid.GridItemLayoutData GridItemLayoutData}\n\n<i>When to use</i> <ul> <li>If {@link sap.m.ListBase} features are required and the items must be positioned in a grid layout</li> </ul>\n\n<i>When not to use</i> <ul> <li>If a list layout is required, use {@link sap.m.List} instead. <li>If only the layout is required, use {@link sap.ui.layout.cssgrid.CSSGrid} instead. </ul>\n\n<h3>Current Limitations</h3> <ul> <li>No support for IE11.</li> <li>No support for Edge version 15.</li> </ul>",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        aggregations: [
          {
            name: "customLayout",
            singularName: "customLayout",
            type: "sap.ui.layout.cssgrid.GridLayoutBase",
            cardinality: "0..1",
            visibility: "public",
            description: "Defines a custom grid layout",
            methods: [
              "getCustomLayout",
              "destroyCustomLayout",
              "setCustomLayout"
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
          "Constructor for a new GridList.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.",
        references: [
          "{@link topic:32d4b9c2b981425dbc374d3e9d5d0c2e Grid Controls}",
          "{@link https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout MDN web docs: CSS Grid Layout}"
        ]
      },
      methods: [
        {
          name: "destroyCustomLayout",
          visibility: "public",
          returnValue: {
            type: "sap.f.GridList",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the customLayout in the aggregation {@link #getCustomLayout customLayout}."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.GridList with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.m.ListBase.extend}."
        },
        {
          name: "getCustomLayout",
          visibility: "public",
          returnValue: { type: "sap.ui.layout.cssgrid.GridLayoutBase" },
          description:
            "Gets content of aggregation {@link #getCustomLayout customLayout}.\n\nDefines a custom grid layout"
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description: "Returns a metadata object for class sap.f.GridList."
        },
        {
          name: "setCustomLayout",
          visibility: "public",
          returnValue: {
            type: "sap.f.GridList",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oCustomLayout",
              type: "sap.ui.layout.cssgrid.GridLayoutBase",
              optional: false,
              description: "The customLayout to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getCustomLayout customLayout}."
        }
      ]
    },
    {
      kind: "enum",
      name: "sap.f.LayoutType",
      basename: "LayoutType",
      resource: "sap/f/library.js",
      module: "sap/f/library",
      export: "LayoutType",
      static: true,
      visibility: "public",
      since: "1.46",
      description:
        'Layouts, representing the number of columns to be displayed and their relative widths for a {@link sap.f.FlexibleColumnLayout} control.\n\nEach layout has a predefined ratio for the three columns, depending on device size. Based on the device and layout, some columns are hidden. For more information, refer to the ratios (in %) for each value, listed below: (dash "-" means non-accessible columns).\n\n<b>Note:</b> Please note that on a phone device, due to the limited screen size, only one column can be displayed at a time. For all two-column layouts, this column is the <code>Mid</code> column, and for all three-column layouts - the <code>End</code> column, even though the respective column may be hidden on desktop and tablet for that particular layout. Therefore some of the names (such as <code>ThreeColumnsMidExpandedEndHidden</code> for example) are representative of the desktop scenario only.\n\nFor more information, see {@link topic:3b9f760da5b64adf8db7f95247879086 Types of Layout} in the documentation.',
      "ui5-metamodel": true,
      properties: [
        {
          name: "EndColumnFullScreen",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Desktop: -/-/100 only the End column is displayed\n\nTablet: -/-/100 only the End column is displayed\n\nPhone: -/-/100 only the End column is displayed\n\nUse to display a detail-detail page only, when the user should focus entirely on it."
        },
        {
          name: "MidColumnFullScreen",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Desktop: -/100/- only the Mid column is displayed\n\nTablet: -/100/- only the Mid column is displayed\n\nPhone: -/100/- only the Mid column is displayed\n\nUse to display a detail page only, when the user should focus entirely on it."
        },
        {
          name: "OneColumn",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Desktop: 100/-/- only the Begin column is displayed\n\nTablet: 100/-/- only the Begin column is displayed\n\nPhone: 100/-/- only the Begin column is displayed\n\nUse to start with a master page."
        },
        {
          name: "ThreeColumnsBeginExpandedEndHidden",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Desktop: 67/33/0 Begin (expanded) and Mid columns are displayed, End is accessible by layout arrows\n\nTablet: 67/33/0 Begin (expanded) and Mid columns are displayed, End is accessible by layout arrows\n\nPhone: -/-/100 only the End column is displayed\n\nUse to display the master and detail pages when the user should focus on the master. The detail-detail is still loaded and easily accessible with layout arrows."
        },
        {
          name: "ThreeColumnsEndExpanded",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Desktop: 25/25/50 Begin, Mid and End (expanded) columns are displayed\n\nTablet: 0/33/67 Mid and End (expanded) columns are displayed, Begin is accessible by layout arrows\n\nPhone: -/-/100 (only the End column is displayed)\n\nUse to display all three pages (master, detail, detail-detail) when the user should focus on the detail-detail."
        },
        {
          name: "ThreeColumnsMidExpanded",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Desktop: 25/50/25 Begin, Mid (expanded) and End columns are displayed\n\nTablet: 0/67/33 Mid (expanded) and End columns are displayed, Begin is accessible by a layout arrow\n\nPhone: -/-/100 only the End column is displayed\n\nUse to display all three pages (master, detail, detail-detail) when the user should focus on the detail."
        },
        {
          name: "ThreeColumnsMidExpandedEndHidden",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Desktop: 33/67/0 Begin and Mid (expanded) columns are displayed, End is accessible by a layout arrow\n\nTablet: 33/67/0 Begin and Mid (expanded) columns are displayed, End is accessible by a layout arrow\n\nPhone: -/-/100 only the End column is displayed\n\nUse to display the master and detail pages when the user should focus on the detail. The detail-detail is still loaded and easily accessible with a layout arrow."
        },
        {
          name: "TwoColumnsBeginExpanded",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Desktop: 67/33/- Begin (expanded) and Mid columns are displayed\n\nTablet: 67/33/- Begin (expanded) and Mid columns are displayed\n\nPhone: -/100/- only the Mid column is displayed\n\nUse to display both a master and a detail page when the user should focus on the master page."
        },
        {
          name: "TwoColumnsMidExpanded",
          visibility: "public",
          static: true,
          type: "string",
          description:
            "Desktop: 33/67/- Begin and Mid (expanded) columns are displayed\n\nTablet: 33/67/- Begin and Mid (expanded) columns are displayed\n\nPhone: -/100/- only the Mid column is displayed\n\nUse to display both a master and a detail page when the user should focus on the detail page."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.routing.Router",
      basename: "Router",
      resource: "sap/f/routing/Router.js",
      module: "sap/f/routing/Router",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46",
      extends: "sap.ui.core.routing.Router",
      description:
        "See {@link sap.ui.core.routing.Router} for the constructor arguments.\n\nThe <code>sap.f.routing.Router</code> is intended to be used with {@link sap.f.FlexibleColumnLayout} as a root control.\n\nThe difference to the {@link sap.ui.core.routing.Router} are the properties viewLevel, transition and transitionParameters you can specify in every Route or Target created by this router.\n\nAdditionally, the <code>layout</code> property can be specified in every Route, in which case it will be applied to the root control.",
      "ui5-metadata": { stereotype: "object" },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "oRoutes",
            type: "object|object[]",
            optional: true,
            description:
              "may contain many Route configurations as {@link sap.ui.core.routing.Route#constructor}."
          },
          {
            name: "oOwner",
            type: "sap.ui.core.UIComponent",
            optional: true,
            description:
              "the Component of all the views that will be created by this Router, will get forwarded to the {@link sap.ui.core.routing.Views#constructor}. If you are using the componentMetadata to define your routes you should skip this parameter."
          },
          {
            name: "oTargetsConfig",
            type: "object",
            optional: true,
            description:
              "the target configuration, see {@link sap.f.routing.Targets#constructor} documentation (the options object)."
          }
        ],
        description: "Instantiates a <code>sap.f.routing.Router</code>."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.routing.Router with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.routing.Router.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.routing.Router."
        },
        {
          name: "getTargetHandler",
          visibility: "public",
          returnValue: {
            type: "sap.f.routing.TargetHandler",
            description: "the TargetHandler instance"
          },
          description: "Returns the TargetHandler instance."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.routing.TargetHandler",
      basename: "TargetHandler",
      resource: "sap/f/routing/TargetHandler.js",
      module: "sap/f/routing/TargetHandler",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46",
      extends: "sap.ui.base.Object",
      "ui5-metadata": { stereotype: "object" },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "closeDialogs",
            type: "boolean",
            optional: false,
            description:
              "the default is true - will close all open dialogs before navigating, if set to true. If set to false it will just navigate without closing dialogs."
          }
        ],
        description:
          "Instantiates a TargetHandler, a class used for closing dialogs and showing transitions in NavContainers when targets are displayed.<br/> <b>You should not create an own instance of this class.</b> It will be created when using {@link sap.f.routing.Router} or {@link sap.f.routing.Targets}. You may use the {@link #setCloseDialogs} function to specify if dialogs should be closed on displaying other views."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.routing.TargetHandler with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.base.Object.extend}."
        },
        {
          name: "getCloseDialogs",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "a flag indication if dialogs will be closed"
          },
          description: "Gets if a navigation should close dialogs"
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.routing.TargetHandler."
        },
        {
          name: "setCloseDialogs",
          visibility: "public",
          returnValue: {
            type: "sap.f.routing.TargetHandler",
            description: "for chaining"
          },
          parameters: [
            {
              name: "bCloseDialogs",
              type: "boolean",
              optional: false,
              description: "close dialogs if true"
            }
          ],
          description: "Sets if a navigation should close dialogs"
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.routing.Targets",
      basename: "Targets",
      resource: "sap/f/routing/Targets.js",
      module: "sap/f/routing/Targets",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46",
      extends: "sap.ui.core.routing.Targets",
      "ui5-metadata": { stereotype: "object" },
      constructor: {
        visibility: "public",
        parameters: [
          {
            name: "oOptions",
            type: "object",
            optional: false,
            parameterProperties: {
              views: {
                name: "views",
                type: "sap.ui.core.routing.Views",
                optional: false,
                description:
                  "the views instance will create the views of all the targets defined, so if 2 targets have the same viewName, the same instance of the view will be displayed."
              },
              config: {
                name: "config",
                type: "object",
                optional: true,
                parameterProperties: {
                  rootView: {
                    name: "rootView",
                    type: "string",
                    optional: true,
                    description:
                      'The id of the rootView - This should be the id of the view that contains the control with the controlId since the control will be retrieved by calling the {@link sap.ui.core.mvc.View#byId} function of the rootView. If you are using a component and add the routing.targets <b>do not set this parameter</b>, since the component will set the rootView to the view created by the {@link sap.ui.core.UIComponent#createContent} function. If you specify the "parent" property of a target, the control will not be searched in the root view but in the view Created by the parent (see parent documentation).'
                  },
                  async: {
                    name: "async",
                    type: "boolean",
                    optional: true,
                    defaultValue: false,
                    description:
                      "Whether the views which are created through this Targets are loaded asyncly. This option can be set only when the Targets is used standalone without the involvement of a Router. Otherwise the async option is inherited from the Router."
                  }
                },
                description:
                  'this config allows all the values oOptions.targets.anyName allows, these will be the default values for properties used in the target.<br/> For example if you are only using xmlViews in your app you can specify viewType="XML" so you don\'t have to repeat this in every target.<br/> If a target specifies viewType="JS", the JS will be stronger than the XML here is an example.\n\n<pre>\n<code>\n{\n    config: {\n        viewType : "XML"\n    }\n    targets : {\n        xmlTarget : {\n            ...\n        },\n        jsTarget : {\n            viewType : "JS"\n            ...\n        }\n    }\n}\n</code>\n</pre> Then the effective config that will be used looks like this: <pre>\n<code>\n{\n    xmlTarget : {\n        // coming from the defaults\n        viewType : "XML"\n        ...\n    },\n    jsTarget : {\n       // XML is overwritten by the "JS" of the targets property\n       viewType : "JS"\n      ...\n    }\n}\n</code>\n</pre>'
              },
              targets: {
                name: "targets",
                type: "object",
                optional: false,
                parameterProperties: {
                  anyName: {
                    name: "anyName",
                    type: "object",
                    optional: false,
                    parameterProperties: {
                      viewName: {
                        name: "viewName",
                        type: "string",
                        optional: false,
                        description:
                          'The name of a view that will be created. To place the view into a Control use the controlAggregation and controlId. Views will only be created once per viewName. <pre>\n<code>\n{\n    targets: {\n        // If display("masterWelcome") is called, the master view will be placed in the \'MasterPages\' of a control with the id splitContainter\n        masterWelcome: {\n            viewName: "Welcome",\n            controlId: "splitContainer",\n            controlAggregation: "masterPages"\n        },\n        // If display("detailWelcome") is called after the masterWelcome, the view will be removed from the master pages and added to the detail pages, since the same instance is used. Also the controls inside of the view will have the same state.\n        detailWelcome: {\n            // same view here, that\'s why the same instance is used\n            viewName: "Welcome",\n            controlId: "splitContainer",\n            controlAggregation: "detailPages"\n        }\n    }\n}\n</code>\n</pre>\n\nIf you want to have a second instance of the welcome view you can use the following:\n\n<pre>\n<code>\n// Some code you execute before you display the taget named \'detailWelcome\':\nvar oView = sap.ui.view(({ viewName : "Welcome", type : sap.ui.core.mvc.ViewType.XML});\noTargets.getViews().setView("WelcomeWithAlias", oView)\n\n{\n    targets: {\n        // If display("masterWelcome") is called, the master viewName will be placed in the \'MasterPages\' of a control with the id splitContainter\n        masterWelcome: {\n            viewName: "Welcome",\n            controlId: "splitContainer",\n            controlAggregation: "masterPages"\n        },\n        // If display("detailWelcome") is called after the masterWelcome, a second instance with an own controller instance will be added in the detail pages.\n        detailWelcome: {\n            // same viewName here, that\'s why the same instance is used\n            viewName: "WelcomeWithAlias",\n            controlId: "splitContainer",\n            controlAggregation: "detailPages"\n        }\n    }\n}\n</code>\n</pre>'
                      },
                      viewType: {
                        name: "viewType",
                        type: "string",
                        optional: true,
                        description:
                          "The type of the view that is going to be created. These are the supported types: {@link sap.ui.core.mvc.ViewType}. You always have to provide a viewType except if you are using {@link sap.ui.core.routing.Views#setView}."
                      },
                      viewPath: {
                        name: "viewPath",
                        type: "string",
                        optional: true,
                        description:
                          'A prefix that will be prepended in front of the viewName.<br/> <b>Example:</b> viewName is set to "myView" and viewPath is set to "myApp" - the created viewName will be "myApp.myView".'
                      },
                      viewId: {
                        name: "viewId",
                        type: "string",
                        optional: true,
                        description:
                          "The id of the created view. This is will be prefixed with the id of the component set to the views instance provided in oOptions.views. For details see {@link sap.ui.core.routing.Views#getView}."
                      },
                      targetParent: {
                        name: "targetParent",
                        type: "string",
                        optional: true,
                        description:
                          "The id of the parent of the controlId - This should be the id of the view that contains your controlId, since the target control will be retrieved by calling the {@link sap.ui.core.mvc.View#byId} function of the targetParent. By default, this will be the view created by a component, so you do not have to provide this parameter. If you are using children, the view created by the parent of the child is taken. You only need to specify this, if you are not using a Targets instance created by a component and you should give the id of root view of your application to this property."
                      },
                      controlId: {
                        name: "controlId",
                        type: "string",
                        optional: true,
                        description:
                          "The id of the control where you want to place the view created by this target. The view of the target will be put into this container Control, using the controlAggregation property. You have to specify both properties or the target will not be able to place itself. An example for containers are {@link sap.ui.ux3.Shell} with the aggregation 'content' or a {@link sap.m.NavContainer} with the aggregation 'pages'."
                      },
                      controlAggregation: {
                        name: "controlAggregation",
                        type: "string",
                        optional: true,
                        description:
                          "The name of an aggregation of the controlId, that contains views. Eg: a {@link sap.m.NavContainer} has an aggregation 'pages', another Example is the {@link sap.ui.ux3.Shell} it has 'content'."
                      },
                      clearControlAggregation: {
                        name: "clearControlAggregation",
                        type: "boolean",
                        optional: true,
                        description:
                          "Defines a boolean that can be passed to specify if the aggregation should be cleared - all items will be removed - before adding the View to it. When using a {@link sap.ui.ux3.Shell} this should be true. For a {@link sap.m.NavContainer} it should be false. When you use the {@link sap.f.routing.Router} the default will be false."
                      },
                      parent: {
                        name: "parent",
                        type: "string",
                        optional: true,
                        description:
                          "A reference to another target, using the name of the target. If you display a target that has a parent, the parent will also be displayed. Also the control you specify with the controlId parameter, will be searched inside of the view of the parent not in the rootView, provided in the config. The control will be searched using the byId function of a view. When it is not found, the global id is checked. <br/> The main usecase for the parent property is placing a view inside a smaller container of a view, which is also created by targets. This is useful for lazy loading views, only if the user really navigates to this part of your application. <br/> <b>Example:</b> Our aim is to lazy load a tab of an IconTabBar (a control that displays a view initially and when a user clicks on it the view changes). It's a perfect candidate to lazy load something inside of it. <br/> <b>Example app structure:</b><br/> We have a rootView that is returned by the createContent function of our UIComponent. This view contains an sap.m.App control with the id 'myApp' <pre>\n<code>\n&lt;View xmlns=\"sap.m\"&gt;\n    &lt;App id=\"myApp\"/&gt;\n&lt;/View&gt;\n</code>\n</pre> an xml view called 'Detail' <pre>\n<code>\n&lt;View xmlns=\"sap.m\"&gt;\n    &lt;IconTabBar&gt;\n        &lt;items&gt;\n            &lt;IconTabFilter&gt;\n                &lt;!-- content of our first tab --&gt;\n            &lt;IconTabFilter&gt;\n            &lt;IconTabFilter id=\"mySecondTab\"&gt;\n                &lt;!-- nothing here, since we will lazy load this one with a target --&gt;\n            &lt;IconTabFilter&gt;\n        &lt;/items&gt;\n    &lt;/IconTabBar&gt;\n&lt;/View&gt;\n</code>\n</pre> and a view called 'SecondTabContent', this one contains our content we want to have lazy loaded. Now we need to create our Targets instance with a config matching our app: <pre>\n<code>\n    new Targets({\n        //Creates our views except for root, we created this one before - when using a component you\n        views: new Views(),\n        config: {\n            // all of our views have that type\n            viewType: 'XML',\n            // a reference to the app control in the rootView created by our UIComponent\n            controlId: 'myApp',\n            // An app has a pages aggregation where the views need to be put into\n            controlAggregation: 'pages'\n        },\n        targets: {\n            detail: {\n                viewName: 'Detail'\n            },\n            secondTabContent: {\n                // A reference to the detail target defined above\n                parent: 'detail',\n                // A reference to the second Tab container in the Detail view. Here the target does not look in the rootView, it looks in the Parent view (Detail).\n                controlId: 'mySecondTab',\n                // An IconTabFilter has an aggregation called content so we need to overwrite the pages set in the config as default.\n                controlAggregation: 'content',\n                // A view containing the content\n                viewName: 'SecondTabContent'\n            }\n        }\n    });\n</code>\n</pre>\n\nNow if we call <code> oTargets.display(\"secondTabContent\") </code>, 2 views will be created: Detail and SecondTabContent. The 'Detail' view will be put into the pages aggregation of the App. And afterwards the 'SecondTabContent' view will be put into the content Aggregation of the second IconTabFilter. So a parent will always be created before the target referencing it."
                      },
                      viewLevel: {
                        name: "viewLevel",
                        type: "int",
                        optional: true,
                        description:
                          "If you are having an application that has a logical order of views (eg: a create account process, first provide user data, then review and confirm them). You always want to show a backwards transition if a navigation from the confirm to the userData page takes place. Therefore you may use the viewLevel. The viewLevel has to be an integer. The user data page should have a lower number than the confirm page. These levels should represent the user process of your application and they do not have to match the container structure of your Targets. If the user navigates between views with the same viewLevel, a forward transition is taken. If you pass a direction into the display function, the viewLevel will be ignored.<br/> <b>Example:</b></br> <pre>\n<code>\n    {\n        targets: {\n            startPage: {\n                viewLevel: 0\n                // more properties\n            },\n            userData: {\n                viewLevel: 1\n                // more properties\n            },\n            confirmRegistration: {\n                viewLevel: 2\n                // more properties\n            },\n            settings: {\n                //no view level here\n            }\n        }\n    }\n</code>\n</pre>\n\nCurrently the 'userData' target is displayed. <ul> <li> If we navigate to 'startPage' the navContainer will show a backwards navigation, since the viewLevel is lower. </li> <li> If we navigate to 'userData' the navContainer will show a forwards navigation, since the viewLevel is higher. </li> <li> If we navigate to 'settings' the navContainer will show a forwards navigation, since the viewLevel is not defined and cannot be compared. </li> </ul>"
                      },
                      transition: {
                        name: "transition",
                        type: "string",
                        optional: true,
                        description:
                          "define which transition of the {@link sap.m.NavContainer} will be applied when navigating. If it is not defined, the nav container will take its default transition."
                      },
                      transitionParameters: {
                        name: "transitionParameters",
                        type: "string",
                        optional: true,
                        description:
                          "define the transitionParameters of the {@link sap.m.NavContainer}"
                      }
                    },
                    description:
                      'a new target, the key severs as a name. An example: <pre>\n<code>\n{\n    targets: {\n        welcome: {\n            viewName: "Welcome",\n            viewType: "XML",\n            ....\n            // Other target parameters\n        },\n        goodbye: {\n            viewName: "Bye",\n            viewType: "JS",\n            ....\n            // Other target parameters\n        }\n    }\n}\n</code>\n</pre>\n\nThis will create two targets named \'welcome\' and \'goodbye\' you can display both of them or one of them using the {@link #display} function.'
                  }
                },
                description: "One or multiple targets in a map."
              }
            }
          }
        ],
        description:
          "Provides a convenient way for placing views into the correct containers of your application. The sap.f extension of Targets also handles the triggering of page navigation when the target control is a {@link sap.f.FlexibleColumnLayout}. Other controls are also allowed, but the extra parameters viewLevel, transition and transitionParameters are ignored and it will behave like {@link sap.ui.core.routing.Targets}. When a target is displayed, dialogs will be closed. To change this use {@link #getTargetHandler} and {@link sap.f.routing.TargetHandler#setCloseDialogs}."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.routing.Targets with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.routing.Targets.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.routing.Targets."
        },
        {
          name: "getTargetHandler",
          visibility: "public",
          returnValue: {
            type: "sap.f.routing.TargetHandler",
            description: "the TargetHandler instance"
          },
          description: "Returns the TargetHandler instance."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.AddAction",
      basename: "AddAction",
      resource: "sap/f/semantic/AddAction.js",
      module: "sap/f/semantic/AddAction",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.f.semantic.SemanticButton",
      description:
        "A semantic-specific button, eligible for the <code>addAction</code> aggregation of the {@link sap.f.semantic.SemanticPage} to be placed in its title.",
      "ui5-metamodel": true,
      "ui5-metadata": { stereotype: "element" },
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
            description: "Custom initial settings for the new control"
          }
        ],
        description: "Constructor for a new <code>AddAction</code>."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.AddAction with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.AddAction."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.CloseAction",
      basename: "CloseAction",
      resource: "sap/f/semantic/CloseAction.js",
      module: "sap/f/semantic/CloseAction",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.f.semantic.SemanticButton",
      description:
        "A semantic-specific button, eligible for the <code>closeAction</code> aggregation of the {@link sap.f.semantic.SemanticPage} to be placed in its title.",
      "ui5-metamodel": true,
      "ui5-metadata": { stereotype: "element" },
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
            description: "Custom initial settings for the new control"
          }
        ],
        description: "Constructor for a new <code>CloseAction</code>."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.CloseAction with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.CloseAction."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.CopyAction",
      basename: "CopyAction",
      resource: "sap/f/semantic/CopyAction.js",
      module: "sap/f/semantic/CopyAction",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.f.semantic.SemanticButton",
      description:
        "A semantic-specific button, eligible for the <code>copyAction</code> aggregation of the {@link sap.f.semantic.SemanticPage} to be placed in its title.",
      "ui5-metamodel": true,
      "ui5-metadata": { stereotype: "element" },
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
            description: "Custom initial settings for the new control"
          }
        ],
        description: "Constructor for a new <code>CopyAction</code>."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.CopyAction with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.CopyAction."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.DeleteAction",
      basename: "DeleteAction",
      resource: "sap/f/semantic/DeleteAction.js",
      module: "sap/f/semantic/DeleteAction",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.f.semantic.SemanticButton",
      description:
        "A semantic-specific button, eligible for the <code>deleteAction</code> aggregation of the {@link sap.f.semantic.SemanticPage} to be placed in its title.",
      "ui5-metamodel": true,
      "ui5-metadata": { stereotype: "element" },
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
            description: "Custom initial settings for the new control"
          }
        ],
        description: "Constructor for a new <code>DeleteAction</code>."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.DeleteAction with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.DeleteAction."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.DiscussInJamAction",
      basename: "DiscussInJamAction",
      resource: "sap/f/semantic/DiscussInJamAction.js",
      module: "sap/f/semantic/DiscussInJamAction",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.f.semantic.SemanticButton",
      description:
        "A semantic-specific button, eligible for the <code>discussInJamAction</code> aggregation of the {@link sap.f.semantic.SemanticPage} to be placed in the share menu within its title.",
      "ui5-metamodel": true,
      "ui5-metadata": { stereotype: "element" },
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
            description: "Custom initial settings for the new control"
          }
        ],
        description: "Constructor for a new <code>DiscussInJamAction</code>."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.DiscussInJamAction with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.DiscussInJamAction."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.EditAction",
      basename: "EditAction",
      resource: "sap/f/semantic/EditAction.js",
      module: "sap/f/semantic/EditAction",
      export: "",
      static: true,
      visibility: "public",
      since: "1.50",
      extends: "sap.f.semantic.SemanticButton",
      description:
        "A semantic-specific button, eligible for the <code>editAction</code> aggregation of the {@link sap.f.semantic.SemanticPage} to be placed in its title.",
      "ui5-metamodel": true,
      "ui5-metadata": { stereotype: "element" },
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
            description: "Custom initial settings for the new control"
          }
        ],
        description: "Constructor for a new <code>EditAction</code>."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.EditAction with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.EditAction."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.ExitFullScreenAction",
      basename: "ExitFullScreenAction",
      resource: "sap/f/semantic/ExitFullScreenAction.js",
      module: "sap/f/semantic/ExitFullScreenAction",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.f.semantic.SemanticButton",
      description:
        "A semantic-specific button, eligible for the <code>exitFullScreenAction</code> aggregation of the {@link sap.f.semantic.SemanticPage} to be placed in its title.",
      "ui5-metamodel": true,
      "ui5-metadata": { stereotype: "element" },
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
            description: "Custom initial settings for the new control"
          }
        ],
        description: "Constructor for a new <code>ExitFullScreenAction</code>."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.ExitFullScreenAction with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.ExitFullScreenAction."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.FavoriteAction",
      basename: "FavoriteAction",
      resource: "sap/f/semantic/FavoriteAction.js",
      module: "sap/f/semantic/FavoriteAction",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.f.semantic.SemanticToggleButton",
      description:
        "A semantic-specific button, eligible for the <code>favoriteAction</code> aggregation of the {@link sap.f.semantic.SemanticPage} to be placed in its title.",
      "ui5-metamodel": true,
      "ui5-metadata": { stereotype: "element" },
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
            description: "Custom initial settings for the new control"
          }
        ],
        description: "Constructor for a new <code>FavoriteAction</code>."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.FavoriteAction with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticToggleButton.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.FavoriteAction."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.FlagAction",
      basename: "FlagAction",
      resource: "sap/f/semantic/FlagAction.js",
      module: "sap/f/semantic/FlagAction",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.f.semantic.SemanticToggleButton",
      description:
        "A semantic-specific button, eligible for the <code>flagAction</code> aggregation of the {@link sap.f.semantic.SemanticPage} to be placed in its title.",
      "ui5-metamodel": true,
      "ui5-metadata": { stereotype: "element" },
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
            description: "Custom initial settings for the new control"
          }
        ],
        description: "Constructor for a new <code>FlagAction</code>."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.FlagAction with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticToggleButton.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.FlagAction."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.FooterMainAction",
      basename: "FooterMainAction",
      resource: "sap/f/semantic/FooterMainAction.js",
      module: "sap/f/semantic/FooterMainAction",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.f.semantic.MainAction",
      description:
        "A semantic-specific button, eligible for the <code>footerMainAction</code> aggregation of the {@link sap.f.semantic.SemanticPage} to be placed in its footer.",
      "ui5-metamodel": true,
      "ui5-metadata": { stereotype: "element" },
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
            description: "Custom initial settings for the new control"
          }
        ],
        description: "Constructor for a new <code>FooterMainAction</code>."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.FooterMainAction with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.MainAction.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.FooterMainAction."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.FullScreenAction",
      basename: "FullScreenAction",
      resource: "sap/f/semantic/FullScreenAction.js",
      module: "sap/f/semantic/FullScreenAction",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.f.semantic.SemanticButton",
      description:
        "A semantic-specific button, eligible for the <code>fullScreenAction</code> aggregation of the {@link sap.f.semantic.SemanticPage} to be placed in its title.",
      "ui5-metamodel": true,
      "ui5-metadata": { stereotype: "element" },
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
            description: "Custom initial settings for the new control"
          }
        ],
        description: "Constructor for a new <code>FullScreenAction</code>."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.FullScreenAction with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.FullScreenAction."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.MainAction",
      basename: "MainAction",
      resource: "sap/f/semantic/MainAction.js",
      module: "sap/f/semantic/MainAction",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.f.semantic.SemanticButton",
      description:
        "Serves as a base class for the {@link sap.f.semantic.TitleMainAction} and {@link sap.f.semantic.FooterMainAction} controls.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "text",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description: "Defines <code>MainAction</code> text",
            methods: ["getText", "setText"]
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
            description: "Custom initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new MainAction.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.MainAction with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.MainAction."
        },
        {
          name: "getText",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>text</code>"
          },
          description:
            "Gets current value of property {@link #getText text}.\n\nDefines <code>MainAction</code> text"
        },
        {
          name: "setText",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.MainAction",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sText",
              type: "string",
              optional: false,
              description: "New value for property <code>text</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getText text}.\n\nDefines <code>MainAction</code> text\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.MessagesIndicator",
      basename: "MessagesIndicator",
      resource: "sap/f/semantic/MessagesIndicator.js",
      module: "sap/f/semantic/MessagesIndicator",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.f.semantic.SemanticButton",
      description:
        "A semantic-specific button, eligible for the <code>messagesIndicator</code> aggregation of the {@link sap.f.semantic.SemanticPage} to be placed in its footer.",
      "ui5-metamodel": true,
      "ui5-metadata": { stereotype: "element" },
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
            description: "Custom initial settings for the new control"
          }
        ],
        description: "Constructor for a new <code>MessagesIndicator</code>."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.MessagesIndicator with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.MessagesIndicator."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.NegativeAction",
      basename: "NegativeAction",
      resource: "sap/f/semantic/NegativeAction.js",
      module: "sap/f/semantic/NegativeAction",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.f.semantic.SemanticButton",
      description:
        "A semantic-specific button, eligible for the <code>negativeAction</code> aggregation of the {@link sap.f.semantic.SemanticPage} to be placed in its footer.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "text",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              'Defines <code>NegativeAction</code> text. <b>Note:</b> the default text is "Reject"',
            methods: ["getText", "setText"]
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
            description: "Custom initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>NegativeAction</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.NegativeAction with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.NegativeAction."
        },
        {
          name: "getText",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>text</code>"
          },
          description:
            'Gets current value of property {@link #getText text}.\n\nDefines <code>NegativeAction</code> text. <b>Note:</b> the default text is "Reject"'
        },
        {
          name: "setText",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.NegativeAction",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sText",
              type: "string",
              optional: false,
              description: "New value for property <code>text</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getText text}.\n\nDefines <code>NegativeAction</code> text. <b>Note:</b> the default text is "Reject"\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.'
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.PositiveAction",
      basename: "PositiveAction",
      resource: "sap/f/semantic/PositiveAction.js",
      module: "sap/f/semantic/PositiveAction",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.f.semantic.SemanticButton",
      description:
        "A semantic-specific button, eligible for the <code>positiveAction</code> aggregation of the {@link sap.f.semantic.SemanticPage} to be placed in its footer.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "text",
            type: "string",
            defaultValue: null,
            group: "Misc",
            visibility: "public",
            description:
              'Defines <code>PositiveAction</code> text. <b>Note:</b> the default text is "Accept"',
            methods: ["getText", "setText"]
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
            description: "Custom initial settings for the new control"
          }
        ],
        description:
          "Constructor for a new <code>PositiveAction</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.PositiveAction with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.PositiveAction."
        },
        {
          name: "getText",
          visibility: "public",
          returnValue: {
            type: "string",
            description: "Value of property <code>text</code>"
          },
          description:
            'Gets current value of property {@link #getText text}.\n\nDefines <code>PositiveAction</code> text. <b>Note:</b> the default text is "Accept"'
        },
        {
          name: "setText",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.PositiveAction",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sText",
              type: "string",
              optional: false,
              description: "New value for property <code>text</code>"
            }
          ],
          description:
            'Sets a new value for property {@link #getText text}.\n\nDefines <code>PositiveAction</code> text. <b>Note:</b> the default text is "Accept"\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.'
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.PrintAction",
      basename: "PrintAction",
      resource: "sap/f/semantic/PrintAction.js",
      module: "sap/f/semantic/PrintAction",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.f.semantic.SemanticButton",
      description:
        "A semantic-specific button, eligible for the <code>printAction</code> aggregation of the {@link sap.f.semantic.SemanticPage} to be placed in the share menu within its title.",
      "ui5-metamodel": true,
      "ui5-metadata": { stereotype: "element" },
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
            description: "Custom initial settings for the new control"
          }
        ],
        description: "Constructor for a new <code>PrintAction</code>."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.PrintAction with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.PrintAction."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.SemanticButton",
      basename: "SemanticButton",
      resource: "sap/f/semantic/SemanticButton.js",
      module: "sap/f/semantic/SemanticButton",
      export: "",
      abstract: true,
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.f.semantic.SemanticControl",
      description:
        "A base class for the available semantic actions, such as {@link sap.f.semantic.AddAction AddAction}, {@link sap.f.semantic.CloseAction CloseAction}, etc.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "enabled",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description:
              "Determines whether the <code>SemanticButton</code> is enabled.",
            methods: ["getEnabled", "setEnabled"]
          }
        ],
        events: [
          {
            name: "press",
            visibility: "public",
            description:
              "Fired when the user selects the <code>SemanticButton</code>.",
            methods: ["attachPress", "detachPress", "firePress"]
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
          "Constructor for a new <code>SemanticButton</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
      },
      events: [
        {
          name: "press",
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
            "Fired when the user selects the <code>SemanticButton</code>."
        }
      ],
      methods: [
        {
          name: "attachPress",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticButton",
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
                "Context object to call the event handler with. Defaults to this <code>sap.f.semantic.SemanticButton</code> itself"
            }
          ],
          description:
            "Attaches event handler <code>fnFunction</code> to the {@link #event:press press} event of this <code>sap.f.semantic.SemanticButton</code>.\n\nWhen called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener</code> if specified, otherwise it will be bound to this <code>sap.f.semantic.SemanticButton</code> itself.\n\nFired when the user selects the <code>SemanticButton</code>."
        },
        {
          name: "detachPress",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticButton",
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
            "Detaches event handler <code>fnFunction</code> from the {@link #event:press press} event of this <code>sap.f.semantic.SemanticButton</code>.\n\nThe passed function and listener object must match the ones used for event registration."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.SemanticButton with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticControl.extend}."
        },
        {
          name: "firePress",
          visibility: "protected",
          returnValue: {
            type: "sap.f.semantic.SemanticButton",
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
            "Fires event {@link #event:press press} to attached listeners."
        },
        {
          name: "getEnabled",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>enabled</code>"
          },
          description:
            "Gets current value of property {@link #getEnabled enabled}.\n\nDetermines whether the <code>SemanticButton</code> is enabled.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.SemanticButton."
        },
        {
          name: "setEnabled",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticButton",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bEnabled",
              type: "boolean",
              optional: false,
              description: "New value for property <code>enabled</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getEnabled enabled}.\n\nDetermines whether the <code>SemanticButton</code> is enabled.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.SemanticControl",
      basename: "SemanticControl",
      resource: "sap/f/semantic/SemanticControl.js",
      module: "sap/f/semantic/SemanticControl",
      export: "",
      abstract: true,
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.ui.core.Element",
      description:
        "The base class for the {@link sap.f.semantic.SemanticButton}.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "visible",
            type: "boolean",
            defaultValue: true,
            group: "Appearance",
            visibility: "public",
            description:
              "Determines whether the <code>SemanticControl</code> is visible.",
            methods: ["getVisible", "setVisible"]
          }
        ],
        aggregations: [
          {
            name: "_control",
            singularName: "_control",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "hidden",
            description: "Hidden aggregation.",
            methods: ["get_control", "destroy_control", "set_control"]
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
          "Constructor for a new <code>SemanticControl</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.SemanticControl with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Element.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.SemanticControl."
        },
        {
          name: "getVisible",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>visible</code>"
          },
          description:
            "Gets current value of property {@link #getVisible visible}.\n\nDetermines whether the <code>SemanticControl</code> is visible.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setVisible",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticControl",
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
            "Sets a new value for property {@link #getVisible visible}.\n\nDetermines whether the <code>SemanticControl</code> is visible.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.SemanticPage",
      basename: "SemanticPage",
      resource: "sap/f/semantic/SemanticPage.js",
      module: "sap/f/semantic/SemanticPage",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.ui.core.Control",
      description:
        "An enhanced {@link sap.f.DynamicPage}, that contains controls with semantic-specific meaning.\n\n<h3>Overview</h3>\n\nContent specified in the <code>sap.f.semantic.SemanticPage</code> aggregations is automatically positioned in dedicated sections of the title or the footer of the page, depending on the control's semantics.\n\nThe actions in the <code>SemanticPage</code> title are grouped to text actions or icon actions. When an aggregation is set, the actions appear in the following predefined order (from left to right):\n\n<ul>Text actions: <li>The main semantic text action - <code>titleMainAction</code></li> <li>Any custom text actions - <code>titleCustomTextActions</code></li> <li>The semantic text actions - <code>editAction</code>, <code>deleteAction</code>, <code>copyAction</code> and <code>addAction</code></li></ul>\n\n<ul>Icon actions: <li>Any custom icon actions - <code>titleCustomIconActions</code></li> <li>The simple semantic icon actions - <code>favoriteAction</code> and <code>flagAction</code></li> <li>The share menu semantic icon actions as a drop-down list with the following order: <ul><li><code>sendEmailAction</code></li> <li><code>discussInJamAction</code></li> <li><code>shareInJamAction</code></li> <li><code>sendMessageAction</code></li> <li><code>printAction</code></li> <li>Any <code>customShareActions</code></li></ul></li> <li>The navigation semantic actions - <code>fullScreenAction</code>, <code>exitFullScreenAction</code>, and <code>closeAction</li></code></ul>\n\nThe actions in the <code>SemanticPage</code> footer are positioned either on its left or right area and have the following predefined order:\n\n<ul>Footer left area: <li>The semantic text action - <code>messagesIndicator</code></li> <li>The semantic label - <code>draftIndicator</code></li></ul>\n\n<ul>Footer right area: <li>The main semantic text action - <code>footerMainAction</code></li> <li>The semantic text actions - <code>positiveAction</code> and <code>negativeAction</code></li> <li>Any custom text actions - <code>footerCustomActions</code></li></ul>\n\n<h3>Usage</h3>\n\nUsing the <code>SemanticPage</code> facilitates the implementation of the SAP Fiori 2.0 design guidelines.\n\n<h3>Responsive behavior</h3>\n\nThe responsive behavior of the <code>SemanticPage</code> depends on the behavior of the content that is displayed. To adjust the <code>SemanticPage</code> content padding, the <code>sapUiContentPadding</code>, <code>sapUiNoContentPadding</code>, and <code>sapUiResponsiveContentPadding</code> CSS classes can be used.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "control",
        properties: [
          {
            name: "headerExpanded",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description:
              "Determines whether the header is expanded.\n\nThe header can be also expanded/collapsed by user interaction, which requires the property to be internally mutated by the control to reflect the changed state.\n\n<b>Note:</b> Please be aware, that initially collapsed header state is not supported, so <code>headerExpanded</code> should not be set to <code>false</code> when initializing the control.",
            methods: ["getHeaderExpanded", "setHeaderExpanded"]
          },
          {
            name: "headerPinnable",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description: "Determines whether the header is pinnable.",
            methods: ["getHeaderPinnable", "setHeaderPinnable"]
          },
          {
            name: "preserveHeaderStateOnScroll",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            description:
              "Preserves the current header state when scrolling.\n\nFor example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.\n\n<b>Note:</b> Based on internal rules, the value of the property is not always taken into account - for example, when the control is rendered on tablet or mobile and the title and the header are with height larger than a given threshold.",
            methods: [
              "getPreserveHeaderStateOnScroll",
              "setPreserveHeaderStateOnScroll"
            ]
          },
          {
            name: "toggleHeaderOnTitleClick",
            type: "boolean",
            defaultValue: true,
            group: "Behavior",
            visibility: "public",
            description:
              "Determines whether the user can switch between the expanded/collapsed states of the header by clicking on the title.\n\nIf set to <code>false</code>, the title is not clickable and the application must provide other means for expanding/collapsing the header, if necessary.",
            methods: [
              "getToggleHeaderOnTitleClick",
              "setToggleHeaderOnTitleClick"
            ]
          },
          {
            name: "showFooter",
            type: "boolean",
            defaultValue: false,
            group: "Behavior",
            visibility: "public",
            description: "Determines whether the footer is visible.",
            methods: ["getShowFooter", "setShowFooter"]
          },
          {
            name: "titlePrimaryArea",
            type: "sap.f.DynamicPageTitleArea",
            defaultValue: "Begin",
            group: "Appearance",
            visibility: "public",
            since: "1.52",
            description:
              "Determines which of the title areas (Begin, Middle) is primary.\n\n<b>Note:</b> The primary area is shrinking at a lower rate, remaining visible as long as it can.",
            deprecated: {
              since: "1.58",
              text:
                "Please use the <code>titleAreaShrinkRatio</code> property instead. The value of <code>titleAreaShrinkRatio</code> must be set in <code>Heading:Content:Actions</code> format where Heading, Content and Actions are numbers greater than or equal to 0. The greater value a section has the faster it shrinks when the screen size is being reduced.\n\n<code>titlePrimaryArea=Begin</code> can be achieved by setting a low number for the Heading area to <code>titleAreaShrinkRatio</code>, for example <code>1:1.6:1.6</code>.\n\n<code>titlePrimaryArea=Middle</code> can be achieved by setting a low number for the Content area to <code>titleAreaShrinkRatio</code>, for example <code>1.6:1:1.6</code>."
            },
            methods: ["getTitlePrimaryArea", "setTitlePrimaryArea"]
          },
          {
            name: "titleAreaShrinkRatio",
            type: "sap.f.DynamicPageTitleShrinkRatio",
            defaultValue: "1:1.6:1.6",
            group: "Appearance",
            visibility: "public",
            since: "1.58",
            description:
              "Assigns shrinking ratio to the <code>SemanticPage</code> title areas (Heading, Content, Actions). The greater value a section has the faster it shrinks when the screen size is being reduced.\n\nThe value must be set in <code>Heading:Content:Actions</code> format where Title, Content and Actions are numbers greater than or equal to 0. If set to 0, the respective area will not shrink.\n\nFor example, if <code>2:7:1</code> is set, the Content area will shrink seven times faster than the Actions area. So, when all three areas have width of 500px and the available space is reduced by 100px the Title area will be reduced by 20px, the Content area - by 70px and the Actions area - by 10px.\n\nIf all the areas have assigned values greater than 1, the numbers are scaled so that at least one of them is equal to 1. For example, value of <code>2:4:8</code> is equal to <code>1:2:4</code>.\n\n<Note:> When this property is set the <code>titlePrimaryArea</code> property has no effect.",
            methods: ["getTitleAreaShrinkRatio", "setTitleAreaShrinkRatio"]
          }
        ],
        aggregations: [
          {
            name: "titleHeading",
            singularName: "titleHeading",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "public",
            description:
              "The <code>SemanticPage</code> heading.\n\nA typical usage is the <code>sap.m.Title</code> or any other UI5 control, that serves as a heading for an object.\n\n<b>Note:</b> The control will be placed in the title`s leftmost area.",
            methods: [
              "getTitleHeading",
              "destroyTitleHeading",
              "setTitleHeading"
            ]
          },
          {
            name: "titleExpandedHeading",
            singularName: "titleExpandedHeading",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "public",
            since: "1.58",
            description:
              "The <code>titleExpandedHeading</code> is positioned in the <code>SemanticPage</code> title left area and is displayed when the header is in expanded state only. Use this aggregation to display a title (or any other UI5 control that serves as a heading) that has to be present in expanded state only.\n\n<b>Note:</b> In order for <code>titleExpandedHeading</code> to be taken into account, <code>titleHeading</code> has to be empty. Combine <code>titleExpandedHeading</code> with <code>titleSnappedHeading</code> to switch content when the header switches state.",
            methods: [
              "getTitleExpandedHeading",
              "destroyTitleExpandedHeading",
              "setTitleExpandedHeading"
            ]
          },
          {
            name: "titleSnappedHeading",
            singularName: "titleSnappedHeading",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "public",
            since: "1.58",
            description:
              "The <code>titleSnappedHeading</code> is positioned in the <code>SemanticPage</code> title left area and is displayed when the header is in collapsed (snapped) state only. Use this aggregation to display a title (or any other UI5 control that serves as a heading) that has to be present in collapsed state only.\n\n<b>Note:</b> In order for <code>titleSnappedHeading</code> to be taken into account, <code>titleHeading</code> has to be empty. Combine <code>titleSnappedHeading</code> with <code>titleExpandedHeading</code> to switch content when the header switches state.",
            methods: [
              "getTitleSnappedHeading",
              "destroyTitleSnappedHeading",
              "setTitleSnappedHeading"
            ]
          },
          {
            name: "titleBreadcrumbs",
            singularName: "titleBreadcrumb",
            type: "sap.m.IBreadcrumbs",
            cardinality: "0..1",
            visibility: "public",
            since: "1.52",
            description:
              "The <code>SemanticPage</code> breadcrumbs.\n\nA typical usage is the <code>sap.m.Breadcrumbs</code> control or any other UI5 control, that implements the <code>sap.m.IBreadcrumbs</code> interface.\n\n<b>Note:</b> The control will be placed in the title`s top-left area.",
            methods: [
              "getTitleBreadcrumbs",
              "destroyTitleBreadcrumbs",
              "setTitleBreadcrumbs"
            ]
          },
          {
            name: "titleSnappedContent",
            singularName: "titleSnappedContent",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "The content, displayed in the title, when the header is in collapsed state.\n\n<b>Note:</b> The controls will be placed in the title`s left area, under the <code>titleHeading</code> aggregation.",
            methods: [
              "getTitleSnappedContent",
              "destroyTitleSnappedContent",
              "insertTitleSnappedContent",
              "addTitleSnappedContent",
              "removeTitleSnappedContent",
              "indexOfTitleSnappedContent",
              "removeAllTitleSnappedContent"
            ]
          },
          {
            name: "titleExpandedContent",
            singularName: "titleExpandedContent",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description:
              "The content,displayed in the title, when the header is in expanded state.\n\n<b>Note:</b> The controls will be placed in the title`s left area, under the <code>titleHeading</code> aggregation.",
            methods: [
              "getTitleExpandedContent",
              "destroyTitleExpandedContent",
              "insertTitleExpandedContent",
              "addTitleExpandedContent",
              "removeTitleExpandedContent",
              "indexOfTitleExpandedContent",
              "removeAllTitleExpandedContent"
            ]
          },
          {
            name: "titleContent",
            singularName: "titleContent",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            since: "1.52",
            description:
              "The content, displayed in the title.\n\n<b>Note:</b> The controls will be placed in the middle area.",
            methods: [
              "getTitleContent",
              "destroyTitleContent",
              "insertTitleContent",
              "addTitleContent",
              "removeTitleContent",
              "indexOfTitleContent",
              "removeAllTitleContent"
            ]
          },
          {
            name: "titleMainAction",
            singularName: "titleMainAction",
            type: "sap.f.semantic.TitleMainAction",
            cardinality: "0..1",
            visibility: "public",
            description:
              "A semantic-specific button which is placed in the <code>SemanticPage</code> title as first action.",
            methods: [
              "getTitleMainAction",
              "destroyTitleMainAction",
              "setTitleMainAction"
            ]
          },
          {
            name: "editAction",
            singularName: "editAction",
            type: "sap.f.semantic.EditAction",
            cardinality: "0..1",
            visibility: "public",
            since: "1.50",
            description:
              "A semantic-specific button which is placed in the <code>TextActions</code> area of the <code>SemanticPage</code> title.",
            methods: ["getEditAction", "destroyEditAction", "setEditAction"]
          },
          {
            name: "deleteAction",
            singularName: "deleteAction",
            type: "sap.f.semantic.DeleteAction",
            cardinality: "0..1",
            visibility: "public",
            description:
              "A semantic-specific button which is placed in the <code>TextActions</code> area of the <code>SemanticPage</code> title.",
            methods: [
              "getDeleteAction",
              "destroyDeleteAction",
              "setDeleteAction"
            ]
          },
          {
            name: "copyAction",
            singularName: "copyAction",
            type: "sap.f.semantic.CopyAction",
            cardinality: "0..1",
            visibility: "public",
            description:
              "A semantic-specific button which is placed in the <code>TextActions</code> area of the <code>SemanticPage</code> title.",
            methods: ["getCopyAction", "destroyCopyAction", "setCopyAction"]
          },
          {
            name: "addAction",
            singularName: "addAction",
            type: "sap.f.semantic.AddAction",
            cardinality: "0..1",
            visibility: "public",
            description:
              "A semantic-specific button which is placed in the <code>TextActions</code> area of the <code>SemanticPage</code> title.",
            methods: ["getAddAction", "destroyAddAction", "setAddAction"]
          },
          {
            name: "flagAction",
            singularName: "flagAction",
            type: "sap.f.semantic.FlagAction",
            cardinality: "0..1",
            visibility: "public",
            description:
              "A semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title.",
            methods: ["getFlagAction", "destroyFlagAction", "setFlagAction"]
          },
          {
            name: "favoriteAction",
            singularName: "favoriteAction",
            type: "sap.f.semantic.FavoriteAction",
            cardinality: "0..1",
            visibility: "public",
            description:
              "A semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title.",
            methods: [
              "getFavoriteAction",
              "destroyFavoriteAction",
              "setFavoriteAction"
            ]
          },
          {
            name: "fullScreenAction",
            singularName: "fullScreenAction",
            type: "sap.f.semantic.FullScreenAction",
            cardinality: "0..1",
            visibility: "public",
            description:
              "A semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title.",
            methods: [
              "getFullScreenAction",
              "destroyFullScreenAction",
              "setFullScreenAction"
            ]
          },
          {
            name: "exitFullScreenAction",
            singularName: "exitFullScreenAction",
            type: "sap.f.semantic.ExitFullScreenAction",
            cardinality: "0..1",
            visibility: "public",
            description:
              "A semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title.",
            methods: [
              "getExitFullScreenAction",
              "destroyExitFullScreenAction",
              "setExitFullScreenAction"
            ]
          },
          {
            name: "closeAction",
            singularName: "closeAction",
            type: "sap.f.semantic.CloseAction",
            cardinality: "0..1",
            visibility: "public",
            description:
              "A semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title.",
            methods: ["getCloseAction", "destroyCloseAction", "setCloseAction"]
          },
          {
            name: "titleCustomTextActions",
            singularName: "titleCustomTextAction",
            type: "sap.m.Button",
            cardinality: "0..n",
            visibility: "public",
            description:
              "The <code>titleCustomTextActions</code> are placed in the <code>TextActions</code> area of the <code>SemanticPage</code> title, right before the semantic text action.",
            methods: [
              "getTitleCustomTextActions",
              "destroyTitleCustomTextActions",
              "insertTitleCustomTextAction",
              "addTitleCustomTextAction",
              "removeTitleCustomTextAction",
              "indexOfTitleCustomTextAction",
              "removeAllTitleCustomTextActions"
            ]
          },
          {
            name: "titleCustomIconActions",
            singularName: "titleCustomIconAction",
            type: "sap.m.OverflowToolbarButton",
            cardinality: "0..n",
            visibility: "public",
            description:
              "The <code>titleCustomIconActions</code> are placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title, right before the semantic icon action.",
            methods: [
              "getTitleCustomIconActions",
              "destroyTitleCustomIconActions",
              "insertTitleCustomIconAction",
              "addTitleCustomIconAction",
              "removeTitleCustomIconAction",
              "indexOfTitleCustomIconAction",
              "removeAllTitleCustomIconActions"
            ]
          },
          {
            name: "headerContent",
            singularName: "headerContent",
            type: "sap.ui.core.Control",
            cardinality: "0..n",
            visibility: "public",
            description: "The header content.",
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
            name: "content",
            singularName: "content",
            type: "sap.ui.core.Control",
            cardinality: "0..1",
            visibility: "public",
            description:
              "The <code>SemanticPage</code> content.\n\n<b>Note:</b> The SAP Fiori Design guidelines require that the <code>SemanticPage</code>'s header content and the <code>SemanticPage</code>'s content are aligned vertically. When using {@link sap.ui.layout.form.Form}, {@link sap.m.Panel}, {@link sap.m.Table} and {@link sap.m.List} in the content area of <code>SemanticPage</code>, if the content is not already aligned, you need to adjust their left text offset to achieve the vertical alignment. To do this, apply the <code>sapFSemanticPageAlignContent</code> CSS class to them and set their <code>width</code> property to <code>auto</code> (if not set by default).\n\nExample:\n\n<pre>\n<code> &lt;Panel class=“sapFSemanticPageAlignContent” width=“auto”&gt;&lt;/Panel&gt; </code>\n</pre>\n\nPlease keep in mind that the alignment is not possible when the controls are placed in a {@link sap.ui.layout.Grid} or in other layout controls that use <code>overflow:hidden</code> CSS property.",
            methods: ["getContent", "destroyContent", "setContent"]
          },
          {
            name: "footerMainAction",
            singularName: "footerMainAction",
            type: "sap.f.semantic.FooterMainAction",
            cardinality: "0..1",
            visibility: "public",
            description:
              "A semantic-specific button which is placed in the <code>FooterRight</code> area of the <code>SemanticPage</code> footer with default text value set to <code>Save</code>.",
            methods: [
              "getFooterMainAction",
              "destroyFooterMainAction",
              "setFooterMainAction"
            ]
          },
          {
            name: "messagesIndicator",
            singularName: "messagesIndicator",
            type: "sap.f.semantic.MessagesIndicator",
            cardinality: "0..1",
            visibility: "public",
            description:
              "A semantic-specific button which is placed in the <code>FooterLeft</code> area of the <code>SemanticPage</code> footer as a first action.",
            methods: [
              "getMessagesIndicator",
              "destroyMessagesIndicator",
              "setMessagesIndicator"
            ]
          },
          {
            name: "draftIndicator",
            singularName: "draftIndicator",
            type: "sap.m.DraftIndicator",
            cardinality: "0..1",
            visibility: "public",
            description:
              "A semantic-specific button which is placed in the <code>FooterLeft</code> area of the <code>SemanticPage</code> footer as a second action.",
            methods: [
              "getDraftIndicator",
              "destroyDraftIndicator",
              "setDraftIndicator"
            ]
          },
          {
            name: "positiveAction",
            singularName: "positiveAction",
            type: "sap.f.semantic.PositiveAction",
            cardinality: "0..1",
            visibility: "public",
            description:
              "A semantic-specific button which is placed in the <code>FooterRight</code> area of the <code>SemanticPage</code> footer with default text value set to <code>Accept</code>.",
            methods: [
              "getPositiveAction",
              "destroyPositiveAction",
              "setPositiveAction"
            ]
          },
          {
            name: "negativeAction",
            singularName: "negativeAction",
            type: "sap.f.semantic.NegativeAction",
            cardinality: "0..1",
            visibility: "public",
            description:
              "A semantic-specific button which is placed in the <code>FooterRight</code> area of the <code>SemanticPage</code> footer with default text value set to <code>Reject</code>.",
            methods: [
              "getNegativeAction",
              "destroyNegativeAction",
              "setNegativeAction"
            ]
          },
          {
            name: "footerCustomActions",
            singularName: "footerCustomAction",
            type: "sap.m.Button",
            cardinality: "0..n",
            visibility: "public",
            description:
              "The <code>footerCustomActions</code> are placed in the <code>FooterRight</code> area of the <code>SemanticPage</code> footer, right after the semantic footer actions.\n\n<b>Note:</b> Buttons that are part of this aggregation will always have their <code>type</code> property set to <code>Transparent</code> by design.",
            methods: [
              "getFooterCustomActions",
              "destroyFooterCustomActions",
              "insertFooterCustomAction",
              "addFooterCustomAction",
              "removeFooterCustomAction",
              "indexOfFooterCustomAction",
              "removeAllFooterCustomActions"
            ]
          },
          {
            name: "discussInJamAction",
            singularName: "discussInJamAction",
            type: "sap.f.semantic.DiscussInJamAction",
            cardinality: "0..1",
            visibility: "public",
            description:
              "A semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.",
            methods: [
              "getDiscussInJamAction",
              "destroyDiscussInJamAction",
              "setDiscussInJamAction"
            ]
          },
          {
            name: "saveAsTileAction",
            singularName: "saveAsTileAction",
            type: "sap.m.Button",
            cardinality: "0..1",
            visibility: "public",
            description:
              "A button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.",
            methods: [
              "getSaveAsTileAction",
              "destroySaveAsTileAction",
              "setSaveAsTileAction"
            ]
          },
          {
            name: "shareInJamAction",
            singularName: "shareInJamAction",
            type: "sap.f.semantic.ShareInJamAction",
            cardinality: "0..1",
            visibility: "public",
            description:
              "A semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.",
            methods: [
              "getShareInJamAction",
              "destroyShareInJamAction",
              "setShareInJamAction"
            ]
          },
          {
            name: "sendMessageAction",
            singularName: "sendMessageAction",
            type: "sap.f.semantic.SendMessageAction",
            cardinality: "0..1",
            visibility: "public",
            description:
              "A semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.",
            methods: [
              "getSendMessageAction",
              "destroySendMessageAction",
              "setSendMessageAction"
            ]
          },
          {
            name: "sendEmailAction",
            singularName: "sendEmailAction",
            type: "sap.f.semantic.SendEmailAction",
            cardinality: "0..1",
            visibility: "public",
            description:
              "A semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.",
            methods: [
              "getSendEmailAction",
              "destroySendEmailAction",
              "setSendEmailAction"
            ]
          },
          {
            name: "printAction",
            singularName: "printAction",
            type: "sap.f.semantic.PrintAction",
            cardinality: "0..1",
            visibility: "public",
            description:
              "A semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title.",
            methods: ["getPrintAction", "destroyPrintAction", "setPrintAction"]
          },
          {
            name: "customShareActions",
            singularName: "customShareAction",
            type: "sap.m.Button",
            cardinality: "0..n",
            visibility: "public",
            description:
              "The <code>customShareActions</code> are placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title, right after the semantic actions.",
            methods: [
              "getCustomShareActions",
              "destroyCustomShareActions",
              "insertCustomShareAction",
              "addCustomShareAction",
              "removeCustomShareAction",
              "indexOfCustomShareAction",
              "removeAllCustomShareActions"
            ]
          },
          {
            name: "_dynamicPage",
            singularName: "_dynamicPage",
            type: "sap.f.DynamicPage",
            cardinality: "0..1",
            visibility: "hidden",
            description:
              "The aggregation holds <code>DynamicPage</code>, used internally.",
            methods: [
              "get_dynamicPage",
              "destroy_dynamicPage",
              "set_dynamicPage"
            ]
          }
        ],
        defaultAggregation: "content",
        designtime: "sap/f/designtime/SemanticPage.designtime"
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
          "Constructor for a new <code>SemanticPage</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object.",
        references: [
          "{@link topic:47dc86847f7a426a8e557167cf523bda Semantic Page}",
          "{@link topic:84f3d52f492648d5b594e4f45dca7727 Semantic Pages}",
          "{@link topic:4a97a07ec8f5441d901994d82eaab1f5 Semantic Page (sap.m)}",
          "{@link fiori:https://experience.sap.com/fiori-design-web/semantic-page/ Semantic Page}"
        ]
      },
      methods: [
        {
          name: "addCustomShareAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oCustomShareAction",
              type: "sap.m.Button",
              optional: false,
              description:
                "The customShareAction to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some customShareAction to the aggregation {@link #getCustomShareActions customShareActions}."
        },
        {
          name: "addFooterCustomAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFooterCustomAction",
              type: "sap.m.Button",
              optional: false,
              description:
                "The footerCustomAction to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some footerCustomAction to the aggregation {@link #getFooterCustomActions footerCustomActions}."
        },
        {
          name: "addHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
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
          name: "addTitleContent",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oTitleContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The titleContent to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some titleContent to the aggregation {@link #getTitleContent titleContent}."
        },
        {
          name: "addTitleCustomIconAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oTitleCustomIconAction",
              type: "sap.m.OverflowToolbarButton",
              optional: false,
              description:
                "The titleCustomIconAction to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some titleCustomIconAction to the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}."
        },
        {
          name: "addTitleCustomTextAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oTitleCustomTextAction",
              type: "sap.m.Button",
              optional: false,
              description:
                "The titleCustomTextAction to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some titleCustomTextAction to the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}."
        },
        {
          name: "addTitleExpandedContent",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oTitleExpandedContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The titleExpandedContent to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some titleExpandedContent to the aggregation {@link #getTitleExpandedContent titleExpandedContent}."
        },
        {
          name: "addTitleSnappedContent",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oTitleSnappedContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The titleSnappedContent to add; if empty, nothing is inserted"
            }
          ],
          description:
            "Adds some titleSnappedContent to the aggregation {@link #getTitleSnappedContent titleSnappedContent}."
        },
        {
          name: "destroyAddAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the addAction in the aggregation {@link #getAddAction addAction}."
        },
        {
          name: "destroyCloseAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the closeAction in the aggregation {@link #getCloseAction closeAction}."
        },
        {
          name: "destroyContent",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the content in the aggregation {@link #getContent content}."
        },
        {
          name: "destroyCopyAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the copyAction in the aggregation {@link #getCopyAction copyAction}."
        },
        {
          name: "destroyCustomShareActions",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the customShareActions in the aggregation {@link #getCustomShareActions customShareActions}."
        },
        {
          name: "destroyDeleteAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the deleteAction in the aggregation {@link #getDeleteAction deleteAction}."
        },
        {
          name: "destroyDiscussInJamAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the discussInJamAction in the aggregation {@link #getDiscussInJamAction discussInJamAction}."
        },
        {
          name: "destroyDraftIndicator",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the draftIndicator in the aggregation {@link #getDraftIndicator draftIndicator}."
        },
        {
          name: "destroyEditAction",
          visibility: "public",
          since: "1.50",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the editAction in the aggregation {@link #getEditAction editAction}."
        },
        {
          name: "destroyExitFullScreenAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the exitFullScreenAction in the aggregation {@link #getExitFullScreenAction exitFullScreenAction}."
        },
        {
          name: "destroyFavoriteAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the favoriteAction in the aggregation {@link #getFavoriteAction favoriteAction}."
        },
        {
          name: "destroyFlagAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the flagAction in the aggregation {@link #getFlagAction flagAction}."
        },
        {
          name: "destroyFooterCustomActions",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the footerCustomActions in the aggregation {@link #getFooterCustomActions footerCustomActions}."
        },
        {
          name: "destroyFooterMainAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the footerMainAction in the aggregation {@link #getFooterMainAction footerMainAction}."
        },
        {
          name: "destroyFullScreenAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the fullScreenAction in the aggregation {@link #getFullScreenAction fullScreenAction}."
        },
        {
          name: "destroyHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the headerContent in the aggregation {@link #getHeaderContent headerContent}."
        },
        {
          name: "destroyMessagesIndicator",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the messagesIndicator in the aggregation {@link #getMessagesIndicator messagesIndicator}."
        },
        {
          name: "destroyNegativeAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the negativeAction in the aggregation {@link #getNegativeAction negativeAction}."
        },
        {
          name: "destroyPositiveAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the positiveAction in the aggregation {@link #getPositiveAction positiveAction}."
        },
        {
          name: "destroyPrintAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the printAction in the aggregation {@link #getPrintAction printAction}."
        },
        {
          name: "destroySaveAsTileAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the saveAsTileAction in the aggregation {@link #getSaveAsTileAction saveAsTileAction}."
        },
        {
          name: "destroySendEmailAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the sendEmailAction in the aggregation {@link #getSendEmailAction sendEmailAction}."
        },
        {
          name: "destroySendMessageAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the sendMessageAction in the aggregation {@link #getSendMessageAction sendMessageAction}."
        },
        {
          name: "destroyShareInJamAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the shareInJamAction in the aggregation {@link #getShareInJamAction shareInJamAction}."
        },
        {
          name: "destroyTitleBreadcrumbs",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the titleBreadcrumbs in the aggregation {@link #getTitleBreadcrumbs titleBreadcrumbs}."
        },
        {
          name: "destroyTitleContent",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the titleContent in the aggregation {@link #getTitleContent titleContent}."
        },
        {
          name: "destroyTitleCustomIconActions",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the titleCustomIconActions in the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}."
        },
        {
          name: "destroyTitleCustomTextActions",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the titleCustomTextActions in the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}."
        },
        {
          name: "destroyTitleExpandedContent",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the titleExpandedContent in the aggregation {@link #getTitleExpandedContent titleExpandedContent}."
        },
        {
          name: "destroyTitleExpandedHeading",
          visibility: "public",
          since: "1.58",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the titleExpandedHeading in the aggregation {@link #getTitleExpandedHeading titleExpandedHeading}."
        },
        {
          name: "destroyTitleHeading",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the titleHeading in the aggregation {@link #getTitleHeading titleHeading}."
        },
        {
          name: "destroyTitleMainAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the titleMainAction in the aggregation {@link #getTitleMainAction titleMainAction}."
        },
        {
          name: "destroyTitleSnappedContent",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys all the titleSnappedContent in the aggregation {@link #getTitleSnappedContent titleSnappedContent}."
        },
        {
          name: "destroyTitleSnappedHeading",
          visibility: "public",
          since: "1.58",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          description:
            "Destroys the titleSnappedHeading in the aggregation {@link #getTitleSnappedHeading titleSnappedHeading}."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.SemanticPage with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.ui.core.Control.extend}."
        },
        {
          name: "getAddAction",
          visibility: "public",
          returnValue: { type: "sap.f.semantic.AddAction" },
          description:
            "Gets content of aggregation {@link #getAddAction addAction}.\n\nA semantic-specific button which is placed in the <code>TextActions</code> area of the <code>SemanticPage</code> title."
        },
        {
          name: "getCloseAction",
          visibility: "public",
          returnValue: { type: "sap.f.semantic.CloseAction" },
          description:
            "Gets content of aggregation {@link #getCloseAction closeAction}.\n\nA semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title."
        },
        {
          name: "getContent",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control" },
          description:
            "Gets content of aggregation {@link #getContent content}.\n\nThe <code>SemanticPage</code> content.\n\n<b>Note:</b> The SAP Fiori Design guidelines require that the <code>SemanticPage</code>'s header content and the <code>SemanticPage</code>'s content are aligned vertically. When using {@link sap.ui.layout.form.Form}, {@link sap.m.Panel}, {@link sap.m.Table} and {@link sap.m.List} in the content area of <code>SemanticPage</code>, if the content is not already aligned, you need to adjust their left text offset to achieve the vertical alignment. To do this, apply the <code>sapFSemanticPageAlignContent</code> CSS class to them and set their <code>width</code> property to <code>auto</code> (if not set by default).\n\nExample:\n\n<pre>\n<code> &lt;Panel class=“sapFSemanticPageAlignContent” width=“auto”&gt;&lt;/Panel&gt; </code>\n</pre>\n\nPlease keep in mind that the alignment is not possible when the controls are placed in a {@link sap.ui.layout.Grid} or in other layout controls that use <code>overflow:hidden</code> CSS property."
        },
        {
          name: "getCopyAction",
          visibility: "public",
          returnValue: { type: "sap.f.semantic.CopyAction" },
          description:
            "Gets content of aggregation {@link #getCopyAction copyAction}.\n\nA semantic-specific button which is placed in the <code>TextActions</code> area of the <code>SemanticPage</code> title."
        },
        {
          name: "getCustomShareActions",
          visibility: "public",
          returnValue: { type: "sap.m.Button[]" },
          description:
            "Gets content of aggregation {@link #getCustomShareActions customShareActions}.\n\nThe <code>customShareActions</code> are placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title, right after the semantic actions."
        },
        {
          name: "getDeleteAction",
          visibility: "public",
          returnValue: { type: "sap.f.semantic.DeleteAction" },
          description:
            "Gets content of aggregation {@link #getDeleteAction deleteAction}.\n\nA semantic-specific button which is placed in the <code>TextActions</code> area of the <code>SemanticPage</code> title."
        },
        {
          name: "getDiscussInJamAction",
          visibility: "public",
          returnValue: { type: "sap.f.semantic.DiscussInJamAction" },
          description:
            "Gets content of aggregation {@link #getDiscussInJamAction discussInJamAction}.\n\nA semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title."
        },
        {
          name: "getDraftIndicator",
          visibility: "public",
          returnValue: { type: "sap.m.DraftIndicator" },
          description:
            "Gets content of aggregation {@link #getDraftIndicator draftIndicator}.\n\nA semantic-specific button which is placed in the <code>FooterLeft</code> area of the <code>SemanticPage</code> footer as a second action."
        },
        {
          name: "getEditAction",
          visibility: "public",
          since: "1.50",
          returnValue: { type: "sap.f.semantic.EditAction" },
          description:
            "Gets content of aggregation {@link #getEditAction editAction}.\n\nA semantic-specific button which is placed in the <code>TextActions</code> area of the <code>SemanticPage</code> title."
        },
        {
          name: "getExitFullScreenAction",
          visibility: "public",
          returnValue: { type: "sap.f.semantic.ExitFullScreenAction" },
          description:
            "Gets content of aggregation {@link #getExitFullScreenAction exitFullScreenAction}.\n\nA semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title."
        },
        {
          name: "getFavoriteAction",
          visibility: "public",
          returnValue: { type: "sap.f.semantic.FavoriteAction" },
          description:
            "Gets content of aggregation {@link #getFavoriteAction favoriteAction}.\n\nA semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title."
        },
        {
          name: "getFlagAction",
          visibility: "public",
          returnValue: { type: "sap.f.semantic.FlagAction" },
          description:
            "Gets content of aggregation {@link #getFlagAction flagAction}.\n\nA semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title."
        },
        {
          name: "getFooterCustomActions",
          visibility: "public",
          returnValue: { type: "sap.m.Button[]" },
          description:
            "Gets content of aggregation {@link #getFooterCustomActions footerCustomActions}.\n\nThe <code>footerCustomActions</code> are placed in the <code>FooterRight</code> area of the <code>SemanticPage</code> footer, right after the semantic footer actions.\n\n<b>Note:</b> Buttons that are part of this aggregation will always have their <code>type</code> property set to <code>Transparent</code> by design."
        },
        {
          name: "getFooterMainAction",
          visibility: "public",
          returnValue: { type: "sap.f.semantic.FooterMainAction" },
          description:
            "Gets content of aggregation {@link #getFooterMainAction footerMainAction}.\n\nA semantic-specific button which is placed in the <code>FooterRight</code> area of the <code>SemanticPage</code> footer with default text value set to <code>Save</code>."
        },
        {
          name: "getFullScreenAction",
          visibility: "public",
          returnValue: { type: "sap.f.semantic.FullScreenAction" },
          description:
            "Gets content of aggregation {@link #getFullScreenAction fullScreenAction}.\n\nA semantic-specific button which is placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title."
        },
        {
          name: "getHeaderContent",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getHeaderContent headerContent}.\n\nThe header content."
        },
        {
          name: "getHeaderExpanded",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>headerExpanded</code>"
          },
          description:
            "Gets current value of property {@link #getHeaderExpanded headerExpanded}.\n\nDetermines whether the header is expanded.\n\nThe header can be also expanded/collapsed by user interaction, which requires the property to be internally mutated by the control to reflect the changed state.\n\n<b>Note:</b> Please be aware, that initially collapsed header state is not supported, so <code>headerExpanded</code> should not be set to <code>false</code> when initializing the control.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getHeaderPinnable",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>headerPinnable</code>"
          },
          description:
            "Gets current value of property {@link #getHeaderPinnable headerPinnable}.\n\nDetermines whether the header is pinnable.\n\nDefault value is <code>true</code>."
        },
        {
          name: "getMessagesIndicator",
          visibility: "public",
          returnValue: { type: "sap.f.semantic.MessagesIndicator" },
          description:
            "Gets content of aggregation {@link #getMessagesIndicator messagesIndicator}.\n\nA semantic-specific button which is placed in the <code>FooterLeft</code> area of the <code>SemanticPage</code> footer as a first action."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.SemanticPage."
        },
        {
          name: "getNegativeAction",
          visibility: "public",
          returnValue: { type: "sap.f.semantic.NegativeAction" },
          description:
            "Gets content of aggregation {@link #getNegativeAction negativeAction}.\n\nA semantic-specific button which is placed in the <code>FooterRight</code> area of the <code>SemanticPage</code> footer with default text value set to <code>Reject</code>."
        },
        {
          name: "getPositiveAction",
          visibility: "public",
          returnValue: { type: "sap.f.semantic.PositiveAction" },
          description:
            "Gets content of aggregation {@link #getPositiveAction positiveAction}.\n\nA semantic-specific button which is placed in the <code>FooterRight</code> area of the <code>SemanticPage</code> footer with default text value set to <code>Accept</code>."
        },
        {
          name: "getPreserveHeaderStateOnScroll",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description:
              "Value of property <code>preserveHeaderStateOnScroll</code>"
          },
          description:
            "Gets current value of property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.\n\nPreserves the current header state when scrolling.\n\nFor example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.\n\n<b>Note:</b> Based on internal rules, the value of the property is not always taken into account - for example, when the control is rendered on tablet or mobile and the title and the header are with height larger than a given threshold.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getPrintAction",
          visibility: "public",
          returnValue: { type: "sap.f.semantic.PrintAction" },
          description:
            "Gets content of aggregation {@link #getPrintAction printAction}.\n\nA semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title."
        },
        {
          name: "getSaveAsTileAction",
          visibility: "public",
          returnValue: { type: "sap.m.Button" },
          description:
            "Gets content of aggregation {@link #getSaveAsTileAction saveAsTileAction}.\n\nA button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title."
        },
        {
          name: "getSendEmailAction",
          visibility: "public",
          returnValue: { type: "sap.f.semantic.SendEmailAction" },
          description:
            "Gets content of aggregation {@link #getSendEmailAction sendEmailAction}.\n\nA semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title."
        },
        {
          name: "getSendMessageAction",
          visibility: "public",
          returnValue: { type: "sap.f.semantic.SendMessageAction" },
          description:
            "Gets content of aggregation {@link #getSendMessageAction sendMessageAction}.\n\nA semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title."
        },
        {
          name: "getShareInJamAction",
          visibility: "public",
          returnValue: { type: "sap.f.semantic.ShareInJamAction" },
          description:
            "Gets content of aggregation {@link #getShareInJamAction shareInJamAction}.\n\nA semantic-specific button which is placed in the <code>ShareMenu</code> area of the <code>SemanticPage</code> title."
        },
        {
          name: "getShowFooter",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>showFooter</code>"
          },
          description:
            "Gets current value of property {@link #getShowFooter showFooter}.\n\nDetermines whether the footer is visible.\n\nDefault value is <code>false</code>."
        },
        {
          name: "getTitleAreaShrinkRatio",
          visibility: "public",
          since: "1.58",
          returnValue: {
            type: "sap.f.DynamicPageTitleShrinkRatio",
            description: "Value of property <code>titleAreaShrinkRatio</code>"
          },
          description:
            "Gets current value of property {@link #getTitleAreaShrinkRatio titleAreaShrinkRatio}.\n\nAssigns shrinking ratio to the <code>SemanticPage</code> title areas (Heading, Content, Actions). The greater value a section has the faster it shrinks when the screen size is being reduced.\n\nThe value must be set in <code>Heading:Content:Actions</code> format where Title, Content and Actions are numbers greater than or equal to 0. If set to 0, the respective area will not shrink.\n\nFor example, if <code>2:7:1</code> is set, the Content area will shrink seven times faster than the Actions area. So, when all three areas have width of 500px and the available space is reduced by 100px the Title area will be reduced by 20px, the Content area - by 70px and the Actions area - by 10px.\n\nIf all the areas have assigned values greater than 1, the numbers are scaled so that at least one of them is equal to 1. For example, value of <code>2:4:8</code> is equal to <code>1:2:4</code>.\n\n<Note:> When this property is set the <code>titlePrimaryArea</code> property has no effect.\n\nDefault value is <code>1:1.6:1.6</code>."
        },
        {
          name: "getTitleBreadcrumbs",
          visibility: "public",
          since: "1.52",
          returnValue: { type: "sap.m.IBreadcrumbs" },
          description:
            "Gets content of aggregation {@link #getTitleBreadcrumbs titleBreadcrumbs}.\n\nThe <code>SemanticPage</code> breadcrumbs.\n\nA typical usage is the <code>sap.m.Breadcrumbs</code> control or any other UI5 control, that implements the <code>sap.m.IBreadcrumbs</code> interface.\n\n<b>Note:</b> The control will be placed in the title`s top-left area."
        },
        {
          name: "getTitleContent",
          visibility: "public",
          since: "1.52",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getTitleContent titleContent}.\n\nThe content, displayed in the title.\n\n<b>Note:</b> The controls will be placed in the middle area."
        },
        {
          name: "getTitleCustomIconActions",
          visibility: "public",
          returnValue: { type: "sap.m.OverflowToolbarButton[]" },
          description:
            "Gets content of aggregation {@link #getTitleCustomIconActions titleCustomIconActions}.\n\nThe <code>titleCustomIconActions</code> are placed in the <code>IconActions</code> area of the <code>SemanticPage</code> title, right before the semantic icon action."
        },
        {
          name: "getTitleCustomTextActions",
          visibility: "public",
          returnValue: { type: "sap.m.Button[]" },
          description:
            "Gets content of aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.\n\nThe <code>titleCustomTextActions</code> are placed in the <code>TextActions</code> area of the <code>SemanticPage</code> title, right before the semantic text action."
        },
        {
          name: "getTitleExpandedContent",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getTitleExpandedContent titleExpandedContent}.\n\nThe content,displayed in the title, when the header is in expanded state.\n\n<b>Note:</b> The controls will be placed in the title`s left area, under the <code>titleHeading</code> aggregation."
        },
        {
          name: "getTitleExpandedHeading",
          visibility: "public",
          since: "1.58",
          returnValue: { type: "sap.ui.core.Control" },
          description:
            "Gets content of aggregation {@link #getTitleExpandedHeading titleExpandedHeading}.\n\nThe <code>titleExpandedHeading</code> is positioned in the <code>SemanticPage</code> title left area and is displayed when the header is in expanded state only. Use this aggregation to display a title (or any other UI5 control that serves as a heading) that has to be present in expanded state only.\n\n<b>Note:</b> In order for <code>titleExpandedHeading</code> to be taken into account, <code>titleHeading</code> has to be empty. Combine <code>titleExpandedHeading</code> with <code>titleSnappedHeading</code> to switch content when the header switches state."
        },
        {
          name: "getTitleHeading",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control" },
          description:
            "Gets content of aggregation {@link #getTitleHeading titleHeading}.\n\nThe <code>SemanticPage</code> heading.\n\nA typical usage is the <code>sap.m.Title</code> or any other UI5 control, that serves as a heading for an object.\n\n<b>Note:</b> The control will be placed in the title`s leftmost area."
        },
        {
          name: "getTitleMainAction",
          visibility: "public",
          returnValue: { type: "sap.f.semantic.TitleMainAction" },
          description:
            "Gets content of aggregation {@link #getTitleMainAction titleMainAction}.\n\nA semantic-specific button which is placed in the <code>SemanticPage</code> title as first action."
        },
        {
          name: "getTitlePrimaryArea",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.f.DynamicPageTitleArea",
            description: "Value of property <code>titlePrimaryArea</code>"
          },
          description:
            "Gets current value of property {@link #getTitlePrimaryArea titlePrimaryArea}.\n\nDetermines which of the title areas (Begin, Middle) is primary.\n\n<b>Note:</b> The primary area is shrinking at a lower rate, remaining visible as long as it can.\n\nDefault value is <code>Begin</code>.",
          deprecated: {
            since: "1.58",
            text:
              "Please use the <code>titleAreaShrinkRatio</code> property instead. The value of <code>titleAreaShrinkRatio</code> must be set in <code>Heading:Content:Actions</code> format where Heading, Content and Actions are numbers greater than or equal to 0. The greater value a section has the faster it shrinks when the screen size is being reduced.\n\n<code>titlePrimaryArea=Begin</code> can be achieved by setting a low number for the Heading area to <code>titleAreaShrinkRatio</code>, for example <code>1:1.6:1.6</code>.\n\n<code>titlePrimaryArea=Middle</code> can be achieved by setting a low number for the Content area to <code>titleAreaShrinkRatio</code>, for example <code>1.6:1:1.6</code>."
          }
        },
        {
          name: "getTitleSnappedContent",
          visibility: "public",
          returnValue: { type: "sap.ui.core.Control[]" },
          description:
            "Gets content of aggregation {@link #getTitleSnappedContent titleSnappedContent}.\n\nThe content, displayed in the title, when the header is in collapsed state.\n\n<b>Note:</b> The controls will be placed in the title`s left area, under the <code>titleHeading</code> aggregation."
        },
        {
          name: "getTitleSnappedHeading",
          visibility: "public",
          since: "1.58",
          returnValue: { type: "sap.ui.core.Control" },
          description:
            "Gets content of aggregation {@link #getTitleSnappedHeading titleSnappedHeading}.\n\nThe <code>titleSnappedHeading</code> is positioned in the <code>SemanticPage</code> title left area and is displayed when the header is in collapsed (snapped) state only. Use this aggregation to display a title (or any other UI5 control that serves as a heading) that has to be present in collapsed state only.\n\n<b>Note:</b> In order for <code>titleSnappedHeading</code> to be taken into account, <code>titleHeading</code> has to be empty. Combine <code>titleSnappedHeading</code> with <code>titleExpandedHeading</code> to switch content when the header switches state."
        },
        {
          name: "getToggleHeaderOnTitleClick",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description:
              "Value of property <code>toggleHeaderOnTitleClick</code>"
          },
          description:
            "Gets current value of property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.\n\nDetermines whether the user can switch between the expanded/collapsed states of the header by clicking on the title.\n\nIf set to <code>false</code>, the title is not clickable and the application must provide other means for expanding/collapsing the header, if necessary.\n\nDefault value is <code>true</code>."
        },
        {
          name: "indexOfCustomShareAction",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oCustomShareAction",
              type: "sap.m.Button",
              optional: false,
              description: "The customShareAction whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.m.Button</code> in the aggregation {@link #getCustomShareActions customShareActions}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfFooterCustomAction",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oFooterCustomAction",
              type: "sap.m.Button",
              optional: false,
              description: "The footerCustomAction whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.m.Button</code> in the aggregation {@link #getFooterCustomActions footerCustomActions}. and returns its index if found or -1 otherwise."
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
          name: "indexOfTitleContent",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oTitleContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The titleContent whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getTitleContent titleContent}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfTitleCustomIconAction",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oTitleCustomIconAction",
              type: "sap.m.OverflowToolbarButton",
              optional: false,
              description: "The titleCustomIconAction whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.m.OverflowToolbarButton</code> in the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfTitleCustomTextAction",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oTitleCustomTextAction",
              type: "sap.m.Button",
              optional: false,
              description: "The titleCustomTextAction whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.m.Button</code> in the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfTitleExpandedContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oTitleExpandedContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The titleExpandedContent whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getTitleExpandedContent titleExpandedContent}. and returns its index if found or -1 otherwise."
        },
        {
          name: "indexOfTitleSnappedContent",
          visibility: "public",
          returnValue: {
            type: "int",
            description:
              "The index of the provided control in the aggregation if found, or -1 otherwise"
          },
          parameters: [
            {
              name: "oTitleSnappedContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The titleSnappedContent whose index is looked for"
            }
          ],
          description:
            "Checks for the provided <code>sap.ui.core.Control</code> in the aggregation {@link #getTitleSnappedContent titleSnappedContent}. and returns its index if found or -1 otherwise."
        },
        {
          name: "insertCustomShareAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oCustomShareAction",
              type: "sap.m.Button",
              optional: false,
              description:
                "The customShareAction to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the customShareAction should be inserted at; for a negative value of <code>iIndex</code>, the customShareAction is inserted at position 0; for a value greater than the current size of the aggregation, the customShareAction is inserted at the last position"
            }
          ],
          description:
            "Inserts a customShareAction into the aggregation {@link #getCustomShareActions customShareActions}."
        },
        {
          name: "insertFooterCustomAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFooterCustomAction",
              type: "sap.m.Button",
              optional: false,
              description:
                "The footerCustomAction to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the footerCustomAction should be inserted at; for a negative value of <code>iIndex</code>, the footerCustomAction is inserted at position 0; for a value greater than the current size of the aggregation, the footerCustomAction is inserted at the last position"
            }
          ],
          description:
            "Inserts a footerCustomAction into the aggregation {@link #getFooterCustomActions footerCustomActions}."
        },
        {
          name: "insertHeaderContent",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
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
          name: "insertTitleContent",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oTitleContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The titleContent to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the titleContent should be inserted at; for a negative value of <code>iIndex</code>, the titleContent is inserted at position 0; for a value greater than the current size of the aggregation, the titleContent is inserted at the last position"
            }
          ],
          description:
            "Inserts a titleContent into the aggregation {@link #getTitleContent titleContent}."
        },
        {
          name: "insertTitleCustomIconAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oTitleCustomIconAction",
              type: "sap.m.OverflowToolbarButton",
              optional: false,
              description:
                "The titleCustomIconAction to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the titleCustomIconAction should be inserted at; for a negative value of <code>iIndex</code>, the titleCustomIconAction is inserted at position 0; for a value greater than the current size of the aggregation, the titleCustomIconAction is inserted at the last position"
            }
          ],
          description:
            "Inserts a titleCustomIconAction into the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}."
        },
        {
          name: "insertTitleCustomTextAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oTitleCustomTextAction",
              type: "sap.m.Button",
              optional: false,
              description:
                "The titleCustomTextAction to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the titleCustomTextAction should be inserted at; for a negative value of <code>iIndex</code>, the titleCustomTextAction is inserted at position 0; for a value greater than the current size of the aggregation, the titleCustomTextAction is inserted at the last position"
            }
          ],
          description:
            "Inserts a titleCustomTextAction into the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}."
        },
        {
          name: "insertTitleExpandedContent",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oTitleExpandedContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The titleExpandedContent to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the titleExpandedContent should be inserted at; for a negative value of <code>iIndex</code>, the titleExpandedContent is inserted at position 0; for a value greater than the current size of the aggregation, the titleExpandedContent is inserted at the last position"
            }
          ],
          description:
            "Inserts a titleExpandedContent into the aggregation {@link #getTitleExpandedContent titleExpandedContent}."
        },
        {
          name: "insertTitleSnappedContent",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oTitleSnappedContent",
              type: "sap.ui.core.Control",
              optional: false,
              description:
                "The titleSnappedContent to insert; if empty, nothing is inserted"
            },
            {
              name: "iIndex",
              type: "int",
              optional: false,
              description:
                "The <code>0</code>-based index the titleSnappedContent should be inserted at; for a negative value of <code>iIndex</code>, the titleSnappedContent is inserted at position 0; for a value greater than the current size of the aggregation, the titleSnappedContent is inserted at the last position"
            }
          ],
          description:
            "Inserts a titleSnappedContent into the aggregation {@link #getTitleSnappedContent titleSnappedContent}."
        },
        {
          name: "removeAllCustomShareActions",
          visibility: "public",
          returnValue: {
            type: "sap.m.Button[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getCustomShareActions customShareActions}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllFooterCustomActions",
          visibility: "public",
          returnValue: {
            type: "sap.m.Button[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getFooterCustomActions footerCustomActions}.\n\nAdditionally, it unregisters them from the hosting UIArea."
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
          name: "removeAllTitleContent",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getTitleContent titleContent}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllTitleCustomIconActions",
          visibility: "public",
          returnValue: {
            type: "sap.m.OverflowToolbarButton[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllTitleCustomTextActions",
          visibility: "public",
          returnValue: {
            type: "sap.m.Button[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllTitleExpandedContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getTitleExpandedContent titleExpandedContent}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeAllTitleSnappedContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control[]",
            description: "An array of the removed elements (might be empty)"
          },
          description:
            "Removes all the controls from the aggregation {@link #getTitleSnappedContent titleSnappedContent}.\n\nAdditionally, it unregisters them from the hosting UIArea."
        },
        {
          name: "removeCustomShareAction",
          visibility: "public",
          returnValue: {
            type: "sap.m.Button",
            description: "The removed customShareAction or <code>null</code>"
          },
          parameters: [
            {
              name: "vCustomShareAction",
              type: "int|string|sap.m.Button",
              optional: false,
              description: "The customShareAction to remove or its index or id"
            }
          ],
          description:
            "Removes a customShareAction from the aggregation {@link #getCustomShareActions customShareActions}."
        },
        {
          name: "removeFooterCustomAction",
          visibility: "public",
          returnValue: {
            type: "sap.m.Button",
            description: "The removed footerCustomAction or <code>null</code>"
          },
          parameters: [
            {
              name: "vFooterCustomAction",
              type: "int|string|sap.m.Button",
              optional: false,
              description: "The footerCustomAction to remove or its index or id"
            }
          ],
          description:
            "Removes a footerCustomAction from the aggregation {@link #getFooterCustomActions footerCustomActions}."
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
          name: "removeTitleContent",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed titleContent or <code>null</code>"
          },
          parameters: [
            {
              name: "vTitleContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description: "The titleContent to remove or its index or id"
            }
          ],
          description:
            "Removes a titleContent from the aggregation {@link #getTitleContent titleContent}."
        },
        {
          name: "removeTitleCustomIconAction",
          visibility: "public",
          returnValue: {
            type: "sap.m.OverflowToolbarButton",
            description:
              "The removed titleCustomIconAction or <code>null</code>"
          },
          parameters: [
            {
              name: "vTitleCustomIconAction",
              type: "int|string|sap.m.OverflowToolbarButton",
              optional: false,
              description:
                "The titleCustomIconAction to remove or its index or id"
            }
          ],
          description:
            "Removes a titleCustomIconAction from the aggregation {@link #getTitleCustomIconActions titleCustomIconActions}."
        },
        {
          name: "removeTitleCustomTextAction",
          visibility: "public",
          returnValue: {
            type: "sap.m.Button",
            description:
              "The removed titleCustomTextAction or <code>null</code>"
          },
          parameters: [
            {
              name: "vTitleCustomTextAction",
              type: "int|string|sap.m.Button",
              optional: false,
              description:
                "The titleCustomTextAction to remove or its index or id"
            }
          ],
          description:
            "Removes a titleCustomTextAction from the aggregation {@link #getTitleCustomTextActions titleCustomTextActions}."
        },
        {
          name: "removeTitleExpandedContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed titleExpandedContent or <code>null</code>"
          },
          parameters: [
            {
              name: "vTitleExpandedContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description:
                "The titleExpandedContent to remove or its index or id"
            }
          ],
          description:
            "Removes a titleExpandedContent from the aggregation {@link #getTitleExpandedContent titleExpandedContent}."
        },
        {
          name: "removeTitleSnappedContent",
          visibility: "public",
          returnValue: {
            type: "sap.ui.core.Control",
            description: "The removed titleSnappedContent or <code>null</code>"
          },
          parameters: [
            {
              name: "vTitleSnappedContent",
              type: "int|string|sap.ui.core.Control",
              optional: false,
              description:
                "The titleSnappedContent to remove or its index or id"
            }
          ],
          description:
            "Removes a titleSnappedContent from the aggregation {@link #getTitleSnappedContent titleSnappedContent}."
        },
        {
          name: "setAddAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oAddAction",
              type: "sap.f.semantic.AddAction",
              optional: false,
              description: "The addAction to set"
            }
          ],
          description: "Sets the aggregated {@link #getAddAction addAction}."
        },
        {
          name: "setCloseAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oCloseAction",
              type: "sap.f.semantic.CloseAction",
              optional: false,
              description: "The closeAction to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getCloseAction closeAction}."
        },
        {
          name: "setContent",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oContent",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The content to set"
            }
          ],
          description: "Sets the aggregated {@link #getContent content}."
        },
        {
          name: "setCopyAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oCopyAction",
              type: "sap.f.semantic.CopyAction",
              optional: false,
              description: "The copyAction to set"
            }
          ],
          description: "Sets the aggregated {@link #getCopyAction copyAction}."
        },
        {
          name: "setDeleteAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oDeleteAction",
              type: "sap.f.semantic.DeleteAction",
              optional: false,
              description: "The deleteAction to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getDeleteAction deleteAction}."
        },
        {
          name: "setDiscussInJamAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oDiscussInJamAction",
              type: "sap.f.semantic.DiscussInJamAction",
              optional: false,
              description: "The discussInJamAction to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getDiscussInJamAction discussInJamAction}."
        },
        {
          name: "setDraftIndicator",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oDraftIndicator",
              type: "sap.m.DraftIndicator",
              optional: false,
              description: "The draftIndicator to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getDraftIndicator draftIndicator}."
        },
        {
          name: "setEditAction",
          visibility: "public",
          since: "1.50",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oEditAction",
              type: "sap.f.semantic.EditAction",
              optional: false,
              description: "The editAction to set"
            }
          ],
          description: "Sets the aggregated {@link #getEditAction editAction}."
        },
        {
          name: "setExitFullScreenAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oExitFullScreenAction",
              type: "sap.f.semantic.ExitFullScreenAction",
              optional: false,
              description: "The exitFullScreenAction to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getExitFullScreenAction exitFullScreenAction}."
        },
        {
          name: "setFavoriteAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFavoriteAction",
              type: "sap.f.semantic.FavoriteAction",
              optional: false,
              description: "The favoriteAction to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getFavoriteAction favoriteAction}."
        },
        {
          name: "setFlagAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFlagAction",
              type: "sap.f.semantic.FlagAction",
              optional: false,
              description: "The flagAction to set"
            }
          ],
          description: "Sets the aggregated {@link #getFlagAction flagAction}."
        },
        {
          name: "setFooterMainAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFooterMainAction",
              type: "sap.f.semantic.FooterMainAction",
              optional: false,
              description: "The footerMainAction to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getFooterMainAction footerMainAction}."
        },
        {
          name: "setFullScreenAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oFullScreenAction",
              type: "sap.f.semantic.FullScreenAction",
              optional: false,
              description: "The fullScreenAction to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getFullScreenAction fullScreenAction}."
        },
        {
          name: "setHeaderExpanded",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bHeaderExpanded",
              type: "boolean",
              optional: false,
              description: "New value for property <code>headerExpanded</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHeaderExpanded headerExpanded}.\n\nDetermines whether the header is expanded.\n\nThe header can be also expanded/collapsed by user interaction, which requires the property to be internally mutated by the control to reflect the changed state.\n\n<b>Note:</b> Please be aware, that initially collapsed header state is not supported, so <code>headerExpanded</code> should not be set to <code>false</code> when initializing the control.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setHeaderPinnable",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bHeaderPinnable",
              type: "boolean",
              optional: false,
              description: "New value for property <code>headerPinnable</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getHeaderPinnable headerPinnable}.\n\nDetermines whether the header is pinnable.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        },
        {
          name: "setMessagesIndicator",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oMessagesIndicator",
              type: "sap.f.semantic.MessagesIndicator",
              optional: false,
              description: "The messagesIndicator to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getMessagesIndicator messagesIndicator}."
        },
        {
          name: "setNegativeAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oNegativeAction",
              type: "sap.f.semantic.NegativeAction",
              optional: false,
              description: "The negativeAction to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getNegativeAction negativeAction}."
        },
        {
          name: "setPositiveAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oPositiveAction",
              type: "sap.f.semantic.PositiveAction",
              optional: false,
              description: "The positiveAction to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getPositiveAction positiveAction}."
        },
        {
          name: "setPreserveHeaderStateOnScroll",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
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
            "Sets a new value for property {@link #getPreserveHeaderStateOnScroll preserveHeaderStateOnScroll}.\n\nPreserves the current header state when scrolling.\n\nFor example, if the user expands the header by clicking on the title and then scrolls down the page, the header will remain expanded.\n\n<b>Note:</b> Based on internal rules, the value of the property is not always taken into account - for example, when the control is rendered on tablet or mobile and the title and the header are with height larger than a given threshold.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        },
        {
          name: "setPrintAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oPrintAction",
              type: "sap.f.semantic.PrintAction",
              optional: false,
              description: "The printAction to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getPrintAction printAction}."
        },
        {
          name: "setSaveAsTileAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSaveAsTileAction",
              type: "sap.m.Button",
              optional: false,
              description: "The saveAsTileAction to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getSaveAsTileAction saveAsTileAction}."
        },
        {
          name: "setSendEmailAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSendEmailAction",
              type: "sap.f.semantic.SendEmailAction",
              optional: false,
              description: "The sendEmailAction to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getSendEmailAction sendEmailAction}."
        },
        {
          name: "setSendMessageAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oSendMessageAction",
              type: "sap.f.semantic.SendMessageAction",
              optional: false,
              description: "The sendMessageAction to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getSendMessageAction sendMessageAction}."
        },
        {
          name: "setShareInJamAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oShareInJamAction",
              type: "sap.f.semantic.ShareInJamAction",
              optional: false,
              description: "The shareInJamAction to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getShareInJamAction shareInJamAction}."
        },
        {
          name: "setShowFooter",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
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
          name: "setTitleAreaShrinkRatio",
          visibility: "public",
          since: "1.58",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sTitleAreaShrinkRatio",
              type: "sap.f.DynamicPageTitleShrinkRatio",
              optional: false,
              description:
                "New value for property <code>titleAreaShrinkRatio</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getTitleAreaShrinkRatio titleAreaShrinkRatio}.\n\nAssigns shrinking ratio to the <code>SemanticPage</code> title areas (Heading, Content, Actions). The greater value a section has the faster it shrinks when the screen size is being reduced.\n\nThe value must be set in <code>Heading:Content:Actions</code> format where Title, Content and Actions are numbers greater than or equal to 0. If set to 0, the respective area will not shrink.\n\nFor example, if <code>2:7:1</code> is set, the Content area will shrink seven times faster than the Actions area. So, when all three areas have width of 500px and the available space is reduced by 100px the Title area will be reduced by 20px, the Content area - by 70px and the Actions area - by 10px.\n\nIf all the areas have assigned values greater than 1, the numbers are scaled so that at least one of them is equal to 1. For example, value of <code>2:4:8</code> is equal to <code>1:2:4</code>.\n\n<Note:> When this property is set the <code>titlePrimaryArea</code> property has no effect.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>1:1.6:1.6</code>."
        },
        {
          name: "setTitleBreadcrumbs",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oTitleBreadcrumbs",
              type: "sap.m.IBreadcrumbs",
              optional: false,
              description: "The titleBreadcrumbs to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getTitleBreadcrumbs titleBreadcrumbs}."
        },
        {
          name: "setTitleExpandedHeading",
          visibility: "public",
          since: "1.58",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oTitleExpandedHeading",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The titleExpandedHeading to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getTitleExpandedHeading titleExpandedHeading}."
        },
        {
          name: "setTitleHeading",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oTitleHeading",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The titleHeading to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getTitleHeading titleHeading}."
        },
        {
          name: "setTitleMainAction",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oTitleMainAction",
              type: "sap.f.semantic.TitleMainAction",
              optional: false,
              description: "The titleMainAction to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getTitleMainAction titleMainAction}."
        },
        {
          name: "setTitlePrimaryArea",
          visibility: "public",
          since: "1.52",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "sTitlePrimaryArea",
              type: "sap.f.DynamicPageTitleArea",
              optional: false,
              description:
                "New value for property <code>titlePrimaryArea</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getTitlePrimaryArea titlePrimaryArea}.\n\nDetermines which of the title areas (Begin, Middle) is primary.\n\n<b>Note:</b> The primary area is shrinking at a lower rate, remaining visible as long as it can.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>Begin</code>.",
          deprecated: {
            since: "1.58",
            text:
              "Please use the <code>titleAreaShrinkRatio</code> property instead. The value of <code>titleAreaShrinkRatio</code> must be set in <code>Heading:Content:Actions</code> format where Heading, Content and Actions are numbers greater than or equal to 0. The greater value a section has the faster it shrinks when the screen size is being reduced.\n\n<code>titlePrimaryArea=Begin</code> can be achieved by setting a low number for the Heading area to <code>titleAreaShrinkRatio</code>, for example <code>1:1.6:1.6</code>.\n\n<code>titlePrimaryArea=Middle</code> can be achieved by setting a low number for the Content area to <code>titleAreaShrinkRatio</code>, for example <code>1.6:1:1.6</code>."
          }
        },
        {
          name: "setTitleSnappedHeading",
          visibility: "public",
          since: "1.58",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "oTitleSnappedHeading",
              type: "sap.ui.core.Control",
              optional: false,
              description: "The titleSnappedHeading to set"
            }
          ],
          description:
            "Sets the aggregated {@link #getTitleSnappedHeading titleSnappedHeading}."
        },
        {
          name: "setToggleHeaderOnTitleClick",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticPage",
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
            "Sets a new value for property {@link #getToggleHeaderOnTitleClick toggleHeaderOnTitleClick}.\n\nDetermines whether the user can switch between the expanded/collapsed states of the header by clicking on the title.\n\nIf set to <code>false</code>, the title is not clickable and the application must provide other means for expanding/collapsing the header, if necessary.\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>true</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.SemanticToggleButton",
      basename: "SemanticToggleButton",
      resource: "sap/f/semantic/SemanticToggleButton.js",
      module: "sap/f/semantic/SemanticToggleButton",
      export: "",
      abstract: true,
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.f.semantic.SemanticButton",
      description:
        "A base class for the {@link sap.f.semantic.FavoriteAction} and {@link sap.f.semantic.FlagAction}.",
      "ui5-metamodel": true,
      "ui5-metadata": {
        stereotype: "element",
        properties: [
          {
            name: "pressed",
            type: "boolean",
            defaultValue: false,
            group: "Data",
            visibility: "public",
            description:
              "Defines the <code>SemanticToggleButton</code> pressed state.\n\nThe property is set to <code>true</code> when the control is toggled (default is <code>false</code>).",
            methods: ["getPressed", "setPressed"]
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
          "Constructor for a new <code>SemanticToggleButton</code>.\n\nAccepts an object literal <code>mSettings</code> that defines initial property values, aggregated and associated objects as well as event handlers. See {@link sap.ui.base.ManagedObject#constructor} for a general description of the syntax of the settings object."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.SemanticToggleButton with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.SemanticToggleButton."
        },
        {
          name: "getPressed",
          visibility: "public",
          returnValue: {
            type: "boolean",
            description: "Value of property <code>pressed</code>"
          },
          description:
            "Gets current value of property {@link #getPressed pressed}.\n\nDefines the <code>SemanticToggleButton</code> pressed state.\n\nThe property is set to <code>true</code> when the control is toggled (default is <code>false</code>).\n\nDefault value is <code>false</code>."
        },
        {
          name: "setPressed",
          visibility: "public",
          returnValue: {
            type: "sap.f.semantic.SemanticToggleButton",
            description:
              "Reference to <code>this</code> in order to allow method chaining"
          },
          parameters: [
            {
              name: "bPressed",
              type: "boolean",
              optional: false,
              description: "New value for property <code>pressed</code>"
            }
          ],
          description:
            "Sets a new value for property {@link #getPressed pressed}.\n\nDefines the <code>SemanticToggleButton</code> pressed state.\n\nThe property is set to <code>true</code> when the control is toggled (default is <code>false</code>).\n\nWhen called with a value of <code>null</code> or <code>undefined</code>, the default value of the property will be restored.\n\nDefault value is <code>false</code>."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.SendEmailAction",
      basename: "SendEmailAction",
      resource: "sap/f/semantic/SendEmailAction.js",
      module: "sap/f/semantic/SendEmailAction",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.f.semantic.SemanticButton",
      description:
        "A semantic-specific button, eligible for the <code>sendEmailAction</code> aggregation of the {@link sap.f.semantic.SemanticPage} to be placed in the share menu within its title.",
      "ui5-metamodel": true,
      "ui5-metadata": { stereotype: "element" },
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
            description: "Custom initial settings for the new control"
          }
        ],
        description: "Constructor for a new <code>SendEmailAction</code>."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.SendEmailAction with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.SendEmailAction."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.SendMessageAction",
      basename: "SendMessageAction",
      resource: "sap/f/semantic/SendMessageAction.js",
      module: "sap/f/semantic/SendMessageAction",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.f.semantic.SemanticButton",
      description:
        "A semantic-specific button, eligible for the <code>sendMessageAction</code> aggregation of the {@link sap.f.semantic.SemanticPage} to be placed in the share menu within its title.",
      "ui5-metamodel": true,
      "ui5-metadata": { stereotype: "element" },
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
            description: "Custom initial settings for the new control"
          }
        ],
        description: "Constructor for a new <code>SendMessageAction</code>."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.SendMessageAction with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.SendMessageAction."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.ShareInJamAction",
      basename: "ShareInJamAction",
      resource: "sap/f/semantic/ShareInJamAction.js",
      module: "sap/f/semantic/ShareInJamAction",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.f.semantic.SemanticButton",
      description:
        "A semantic-specific button, eligible for the <code>shareInJamAction</code> aggregation of the {@link sap.f.semantic.SemanticPage} to be placed in the share menu within its title.",
      "ui5-metamodel": true,
      "ui5-metadata": { stereotype: "element" },
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
            description: "Custom initial settings for the new control"
          }
        ],
        description: "Constructor for a new <code>ShareInJamAction</code>."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.ShareInJamAction with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.SemanticButton.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.ShareInJamAction."
        }
      ]
    },
    {
      kind: "class",
      name: "sap.f.semantic.TitleMainAction",
      basename: "TitleMainAction",
      resource: "sap/f/semantic/TitleMainAction.js",
      module: "sap/f/semantic/TitleMainAction",
      export: "",
      static: true,
      visibility: "public",
      since: "1.46.0",
      extends: "sap.f.semantic.MainAction",
      description:
        "A semantic-specific button, eligible for the <code>titleMainAction</code> aggregation of the {@link sap.f.semantic.SemanticPage} to be placed in its title.",
      "ui5-metamodel": true,
      "ui5-metadata": { stereotype: "element" },
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
            description: "Custom initial settings for the new control"
          }
        ],
        description: "Constructor for a new <code>TitleMainAction</code>."
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
                "Constructor function for the metadata object; if not given, it defaults to <code>sap.ui.core.ElementMetadata</code>"
            }
          ],
          description:
            "Creates a new subclass of class sap.f.semantic.TitleMainAction with name <code>sClassName</code> and enriches it with the information contained in <code>oClassInfo</code>.\n\n<code>oClassInfo</code> might contain the same kind of information as described in {@link sap.f.semantic.MainAction.extend}."
        },
        {
          name: "getMetadata",
          visibility: "public",
          static: true,
          returnValue: {
            type: "sap.ui.base.Metadata",
            description: "Metadata object describing this class"
          },
          description:
            "Returns a metadata object for class sap.f.semantic.TitleMainAction."
        }
      ]
    }
  ]
};