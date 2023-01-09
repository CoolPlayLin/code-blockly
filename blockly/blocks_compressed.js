// This file was modified by the xiaohong2022

/* eslint-disable */
(function (root, factory) {
     if (typeof define === "function" && define.amd) {
          // AMD
          define(["./blockly_compressed.js"], factory);
     } else if (typeof exports === "object") {
          // Node.js
          module.exports = factory(require("./blockly_compressed.js"));
     } else {
          // Browser
          var factoryExports = factory(root.Blockly);
          root.Blockly.libraryBlocks = factoryExports;
     }
})(this, function (__parent__) {
     var $ = __parent__.__namespace__;
     var module$exports$Blockly$libraryBlocks$variablesDynamic = {},
          module$contents$Blockly$libraryBlocks$variablesDynamic_ContextMenu =
               $.module$build$src$core$contextmenu,
          module$contents$Blockly$libraryBlocks$variablesDynamic_Extensions =
               $.module$build$src$core$extensions,
          module$contents$Blockly$libraryBlocks$variablesDynamic_Variables =
               $.module$build$src$core$variables,
          module$contents$Blockly$libraryBlocks$variablesDynamic_xml =
               $.module$build$src$core$utils$xml,
          module$contents$Blockly$libraryBlocks$variablesDynamic_BlockDefinition =
               Object,
          module$contents$Blockly$libraryBlocks$variablesDynamic_Msg =
               $.module$build$src$core$msg.Msg,
          module$contents$Blockly$libraryBlocks$variablesDynamic_createBlockDefinitionsFromJsonArray =
               $.module$build$src$core$common
                    .createBlockDefinitionsFromJsonArray,
          module$contents$Blockly$libraryBlocks$variablesDynamic_defineBlocks =
               $.module$build$src$core$common.defineBlocks;
     module$exports$Blockly$libraryBlocks$variablesDynamic.blocks =
          module$contents$Blockly$libraryBlocks$variablesDynamic_createBlockDefinitionsFromJsonArray(
               [
                    {
                         type: "variables_get_dynamic",
                         message0: "%1",
                         args0: [
                              {
                                   type: "field_variable",
                                   name: "VAR",
                                   variable: "%{BKY_VARIABLES_DEFAULT_NAME}",
                              },
                         ],
                         output: null,
                         style: "variable_dynamic_blocks",
                         helpUrl: "%{BKY_VARIABLES_GET_HELPURL}",
                         tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}",
                         extensions: [
                              "contextMenu_variableDynamicSetterGetter",
                         ],
                    },
                    {
                         type: "variables_set_dynamic",
                         message0: "%{BKY_VARIABLES_SET}",
                         args0: [
                              {
                                   type: "field_variable",
                                   name: "VAR",
                                   variable: "%{BKY_VARIABLES_DEFAULT_NAME}",
                              },
                              { type: "input_value", name: "VALUE" },
                         ],
                         previousStatement: null,
                         nextStatement: null,
                         style: "variable_dynamic_blocks",
                         tooltip: "%{BKY_VARIABLES_SET_TOOLTIP}",
                         helpUrl: "%{BKY_VARIABLES_SET_HELPURL}",
                         extensions: [
                              "contextMenu_variableDynamicSetterGetter",
                         ],
                    },
               ]
          );
     var module$contents$Blockly$libraryBlocks$variablesDynamic_CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN =
               {
                    customContextMenu: function (a) {
                         if (!this.isInFlyout) {
                              var b = this.getFieldValue("VAR");
                              var c = this.workspace.getVariableById(b).type;
                              if ("variables_get_dynamic" === this.type) {
                                   b = "variables_set_dynamic";
                                   var d =
                                        module$contents$Blockly$libraryBlocks$variablesDynamic_Msg.VARIABLES_GET_CREATE_SET;
                              } else
                                   (b = "variables_get_dynamic"),
                                        (d =
                                             module$contents$Blockly$libraryBlocks$variablesDynamic_Msg.VARIABLES_SET_CREATE_GET);
                              var e = {
                                   enabled:
                                        0 < this.workspace.remainingCapacity(),
                              };
                              const f = this.getField("VAR").getText();
                              e.text = d.replace("%1", f);
                              d =
                                   $.module$build$src$core$utils$xml.createElement(
                                        "field"
                                   );
                              d.setAttribute("name", "VAR");
                              d.setAttribute("variabletype", c);
                              d.appendChild(
                                   $.module$build$src$core$utils$xml.createTextNode(
                                        f
                                   )
                              );
                              c =
                                   $.module$build$src$core$utils$xml.createElement(
                                        "block"
                                   );
                              c.setAttribute("type", b);
                              c.appendChild(d);
                              e.callback =
                                   $.module$build$src$core$contextmenu.callbackFactory(
                                        this,
                                        c
                                   );
                              a.push(e);
                         } else if (
                              "variables_get_dynamic" === this.type ||
                              "variables_get_reporter_dynamic" === this.type
                         )
                              (b = {
                                   text: module$contents$Blockly$libraryBlocks$variablesDynamic_Msg.RENAME_VARIABLE,
                                   enabled: !0,
                                   callback:
                                        module$contents$Blockly$libraryBlocks$variablesDynamic_renameOptionCallbackFactory(
                                             this
                                        ),
                              }),
                                   (e = this.getField("VAR").getText()),
                                   (e = {
                                        text: module$contents$Blockly$libraryBlocks$variablesDynamic_Msg.DELETE_VARIABLE.replace(
                                             "%1",
                                             e
                                        ),
                                        enabled: !0,
                                        callback:
                                             module$contents$Blockly$libraryBlocks$variablesDynamic_deleteOptionCallbackFactory(
                                                  this
                                             ),
                                   }),
                                   a.unshift(b),
                                   a.unshift(e);
                    },
                    onchange: function (a) {
                         a = this.getFieldValue("VAR");
                         a = $.module$build$src$core$variables.getVariable(
                              this.workspace,
                              a
                         );
                         "variables_get_dynamic" === this.type
                              ? this.outputConnection.setCheck(a.type)
                              : this.getInput("VALUE").connection.setCheck(
                                     a.type
                                );
                    },
               },
          module$contents$Blockly$libraryBlocks$variablesDynamic_renameOptionCallbackFactory =
               function (a) {
                    return function () {
                         const b = a.workspace,
                              c = a.getField("VAR").getVariable();
                         $.module$build$src$core$variables.renameVariable(b, c);
                    };
               },
          module$contents$Blockly$libraryBlocks$variablesDynamic_deleteOptionCallbackFactory =
               function (a) {
                    return function () {
                         const b = a.workspace,
                              c = a.getField("VAR").getVariable();
                         b.deleteVariableById(c.getId());
                         b.refreshToolboxSelection();
                    };
               };
     $.module$build$src$core$extensions.registerMixin(
          "contextMenu_variableDynamicSetterGetter",
          module$contents$Blockly$libraryBlocks$variablesDynamic_CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN
     );
     module$contents$Blockly$libraryBlocks$variablesDynamic_defineBlocks(
          module$exports$Blockly$libraryBlocks$variablesDynamic.blocks
     );
     var module$exports$Blockly$libraryBlocks$variables = {},
          module$contents$Blockly$libraryBlocks$variables_ContextMenu =
               $.module$build$src$core$contextmenu,
          module$contents$Blockly$libraryBlocks$variables_Extensions =
               $.module$build$src$core$extensions,
          module$contents$Blockly$libraryBlocks$variables_Variables =
               $.module$build$src$core$variables,
          module$contents$Blockly$libraryBlocks$variables_xmlUtils =
               $.module$build$src$core$utils$xml,
          module$contents$Blockly$libraryBlocks$variables_BlockDefinition =
               Object,
          module$contents$Blockly$libraryBlocks$variables_Msg =
               $.module$build$src$core$msg.Msg,
          module$contents$Blockly$libraryBlocks$variables_createBlockDefinitionsFromJsonArray =
               $.module$build$src$core$common
                    .createBlockDefinitionsFromJsonArray,
          module$contents$Blockly$libraryBlocks$variables_defineBlocks =
               $.module$build$src$core$common.defineBlocks;
     module$exports$Blockly$libraryBlocks$variables.blocks =
          module$contents$Blockly$libraryBlocks$variables_createBlockDefinitionsFromJsonArray(
               [
                    {
                         type: "variables_get",
                         message0: "%1",
                         args0: [
                              {
                                   type: "field_variable",
                                   name: "VAR",
                                   variable: "%{BKY_VARIABLES_DEFAULT_NAME}",
                              },
                         ],
                         output: null,
                         style: "variable_blocks",
                         helpUrl: "%{BKY_VARIABLES_GET_HELPURL}",
                         tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}",
                         extensions: ["contextMenu_variableSetterGetter"],
                    },
                    {
                         type: "variables_set",
                         message0: "%{BKY_VARIABLES_SET}",
                         args0: [
                              {
                                   type: "field_variable",
                                   name: "VAR",
                                   variable: "%{BKY_VARIABLES_DEFAULT_NAME}",
                              },
                              { type: "input_value", name: "VALUE" },
                         ],
                         previousStatement: null,
                         nextStatement: null,
                         style: "variable_blocks",
                         tooltip: "%{BKY_VARIABLES_SET_TOOLTIP}",
                         helpUrl: "%{BKY_VARIABLES_SET_HELPURL}",
                         extensions: ["contextMenu_variableSetterGetter"],
                    },
               ]
          );
     var module$contents$Blockly$libraryBlocks$variables_CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN =
               {
                    customContextMenu: function (a) {
                         if (!this.isInFlyout) {
                              if ("variables_get" === this.type) {
                                   var b = "variables_set";
                                   var c =
                                        module$contents$Blockly$libraryBlocks$variables_Msg.VARIABLES_GET_CREATE_SET;
                              } else
                                   (b = "variables_get"),
                                        (c =
                                             module$contents$Blockly$libraryBlocks$variables_Msg.VARIABLES_SET_CREATE_GET);
                              var d = {
                                        enabled:
                                             0 <
                                             this.workspace.remainingCapacity(),
                                   },
                                   e = this.getField("VAR").getText();
                              d.text = c.replace("%1", e);
                              c =
                                   $.module$build$src$core$utils$xml.createElement(
                                        "field"
                                   );
                              c.setAttribute("name", "VAR");
                              c.appendChild(
                                   $.module$build$src$core$utils$xml.createTextNode(
                                        e
                                   )
                              );
                              e =
                                   $.module$build$src$core$utils$xml.createElement(
                                        "block"
                                   );
                              e.setAttribute("type", b);
                              e.appendChild(c);
                              d.callback =
                                   $.module$build$src$core$contextmenu.callbackFactory(
                                        this,
                                        e
                                   );
                              a.push(d);
                         } else if (
                              "variables_get" === this.type ||
                              "variables_get_reporter" === this.type
                         )
                              (b = {
                                   text: module$contents$Blockly$libraryBlocks$variables_Msg.RENAME_VARIABLE,
                                   enabled: !0,
                                   callback:
                                        module$contents$Blockly$libraryBlocks$variables_renameOptionCallbackFactory(
                                             this
                                        ),
                              }),
                                   (d = this.getField("VAR").getText()),
                                   (d = {
                                        text: module$contents$Blockly$libraryBlocks$variables_Msg.DELETE_VARIABLE.replace(
                                             "%1",
                                             d
                                        ),
                                        enabled: !0,
                                        callback:
                                             module$contents$Blockly$libraryBlocks$variables_deleteOptionCallbackFactory(
                                                  this
                                             ),
                                   }),
                                   a.unshift(b),
                                   a.unshift(d);
                    },
               },
          module$contents$Blockly$libraryBlocks$variables_renameOptionCallbackFactory =
               function (a) {
                    return function () {
                         const b = a.workspace,
                              c = a.getField("VAR").getVariable();
                         $.module$build$src$core$variables.renameVariable(b, c);
                    };
               },
          module$contents$Blockly$libraryBlocks$variables_deleteOptionCallbackFactory =
               function (a) {
                    return function () {
                         const b = a.workspace,
                              c = a.getField("VAR").getVariable();
                         b.deleteVariableById(c.getId());
                         b.refreshToolboxSelection();
                    };
               };
     $.module$build$src$core$extensions.registerMixin(
          "contextMenu_variableSetterGetter",
          module$contents$Blockly$libraryBlocks$variables_CUSTOM_CONTEXT_MENU_VARIABLE_GETTER_SETTER_MIXIN
     );
     module$contents$Blockly$libraryBlocks$variables_defineBlocks(
          module$exports$Blockly$libraryBlocks$variables.blocks
     );
     var module$exports$Blockly$libraryBlocks$texts = {},
          module$contents$Blockly$libraryBlocks$texts_Extensions =
               $.module$build$src$core$extensions,
          module$contents$Blockly$libraryBlocks$texts_Msg =
               $.module$build$src$core$msg.Msg,
          module$contents$Blockly$libraryBlocks$texts_xmlUtils =
               $.module$build$src$core$utils$xml,
          module$contents$Blockly$libraryBlocks$texts_Align =
               $.Align$$module$build$src$core$input,
          module$contents$Blockly$libraryBlocks$texts_BlockDefinition = Object,
          module$contents$Blockly$libraryBlocks$texts_ConnectionType =
               $.module$build$src$core$connection_type.ConnectionType,
          module$contents$Blockly$libraryBlocks$texts_FieldDropdown =
               $.module$build$src$core$field_dropdown.FieldDropdown,
          module$contents$Blockly$libraryBlocks$texts_FieldImage =
               $.FieldImage$$module$build$src$core$field_image,
          module$contents$Blockly$libraryBlocks$texts_FieldTextInput =
               $.FieldTextInput$$module$build$src$core$field_textinput,
          module$contents$Blockly$libraryBlocks$texts_Mutator =
               $.Mutator$$module$build$src$core$mutator,
          module$contents$Blockly$libraryBlocks$texts_createBlockDefinitionsFromJsonArray =
               $.module$build$src$core$common
                    .createBlockDefinitionsFromJsonArray,
          module$contents$Blockly$libraryBlocks$texts_defineBlocks =
               $.module$build$src$core$common.defineBlocks;
     module$exports$Blockly$libraryBlocks$texts.blocks =
          module$contents$Blockly$libraryBlocks$texts_createBlockDefinitionsFromJsonArray(
               [
                    {
                         type: "text",
                         message0: "%1",
                         args0: [
                              { type: "field_input", name: "TEXT", text: "" },
                         ],
                         output: "String",
                         style: "text_blocks",
                         helpUrl: "%{BKY_TEXT_TEXT_HELPURL}",
                         tooltip: "%{BKY_TEXT_TEXT_TOOLTIP}",
                         extensions: [
                              "text_quotes",
                              "parent_tooltip_when_inline",
                         ],
                    },
                    {
                         type: "text_multiline",
                         message0: "%1 %2",
                         args0: [
                              {
                                   type: "field_image",
                                   src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAdhgAAHYYBXaITgQAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMS42/U4J6AAAAP1JREFUOE+Vks0KQUEYhjmRIja4ABtZ2dm5A3t3Ia6AUm7CylYuQRaUhZSlLZJiQbFAyRnPN33y01HOW08z8873zpwzM4F3GWOCruvGIE4/rLaV+Nq1hVGMBqzhqlxgCys4wJA65xnogMHsQ5lujnYHTejBBCK2mE4abjCgMGhNxHgDFWjDSG07kdfVa2pZMf4ZyMAdWmpZMfYOsLiDMYMjlMB+K613QISRhTnITnsYg5yUd0DETmEoMlkFOeIT/A58iyK5E18BuTBfgYXfwNJv4P9/oEBerLylOnRhygmGdPpTTBZAPkde61lbQe4moWUvYUZYLfUNftIY4zwA5X2Z9AYnQrEAAAAASUVORK5CYII=",
                                   width: 12,
                                   height: 17,
                                   alt: "\u00b6",
                              },
                              {
                                   type: "field_multilinetext",
                                   name: "TEXT",
                                   text: "",
                              },
                         ],
                         output: "String",
                         style: "text_blocks",
                         helpUrl: "%{BKY_TEXT_TEXT_HELPURL}",
                         tooltip: "%{BKY_TEXT_TEXT_TOOLTIP}",
                         extensions: ["parent_tooltip_when_inline"],
                    },
                    {
                         type: "text_join",
                         message0: "",
                         output: "String",
                         style: "text_blocks",
                         helpUrl: "%{BKY_TEXT_JOIN_HELPURL}",
                         tooltip: "%{BKY_TEXT_JOIN_TOOLTIP}",
                         mutator: "text_join_mutator",
                    },
                    {
                         type: "text_create_join_container",
                         message0: "%{BKY_TEXT_CREATE_JOIN_TITLE_JOIN} %1 %2",
                         args0: [
                              { type: "input_dummy" },
                              { type: "input_statement", name: "STACK" },
                         ],
                         style: "text_blocks",
                         tooltip: "%{BKY_TEXT_CREATE_JOIN_TOOLTIP}",
                         enableContextMenu: !1,
                    },
                    {
                         type: "text_create_join_item",
                         message0: "%{BKY_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM}",
                         previousStatement: null,
                         nextStatement: null,
                         style: "text_blocks",
                         tooltip: "%{BKY_TEXT_CREATE_JOIN_ITEM_TOOLTIP}",
                         enableContextMenu: !1,
                    },
                    {
                         type: "text_append",
                         message0: "%{BKY_TEXT_APPEND_TITLE}",
                         args0: [
                              {
                                   type: "field_variable",
                                   name: "VAR",
                                   variable: "%{BKY_TEXT_APPEND_VARIABLE}",
                              },
                              { type: "input_value", name: "TEXT" },
                         ],
                         previousStatement: null,
                         nextStatement: null,
                         style: "text_blocks",
                         extensions: ["text_append_tooltip"],
                    },
                    {
                         type: "text_length",
                         message0: "%{BKY_TEXT_LENGTH_TITLE}",
                         args0: [
                              {
                                   type: "input_value",
                                   name: "VALUE",
                                   check: ["String", "Array"],
                              },
                         ],
                         output: "Number",
                         style: "text_blocks",
                         tooltip: "%{BKY_TEXT_LENGTH_TOOLTIP}",
                         helpUrl: "%{BKY_TEXT_LENGTH_HELPURL}",
                    },
                    {
                         type: "text_isEmpty",
                         message0: "%{BKY_TEXT_ISEMPTY_TITLE}",
                         args0: [
                              {
                                   type: "input_value",
                                   name: "VALUE",
                                   check: ["String", "Array"],
                              },
                         ],
                         output: "Boolean",
                         style: "text_blocks",
                         tooltip: "%{BKY_TEXT_ISEMPTY_TOOLTIP}",
                         helpUrl: "%{BKY_TEXT_ISEMPTY_HELPURL}",
                    },
                    {
                         type: "text_indexOf",
                         message0: "%{BKY_TEXT_INDEXOF_TITLE}",
                         args0: [
                              {
                                   type: "input_value",
                                   name: "VALUE",
                                   check: "String",
                              },
                              {
                                   type: "field_dropdown",
                                   name: "END",
                                   options: [
                                        [
                                             "%{BKY_TEXT_INDEXOF_OPERATOR_FIRST}",
                                             "FIRST",
                                        ],
                                        [
                                             "%{BKY_TEXT_INDEXOF_OPERATOR_LAST}",
                                             "LAST",
                                        ],
                                   ],
                              },
                              {
                                   type: "input_value",
                                   name: "FIND",
                                   check: "String",
                              },
                         ],
                         output: "Number",
                         style: "text_blocks",
                         helpUrl: "%{BKY_TEXT_INDEXOF_HELPURL}",
                         inputsInline: !0,
                         extensions: ["text_indexOf_tooltip"],
                    },
                    {
                         type: "text_charAt",
                         message0: "%{BKY_TEXT_CHARAT_TITLE}",
                         args0: [
                              {
                                   type: "input_value",
                                   name: "VALUE",
                                   check: "String",
                              },
                              {
                                   type: "field_dropdown",
                                   name: "WHERE",
                                   options: [
                                        [
                                             "%{BKY_TEXT_CHARAT_FROM_START}",
                                             "FROM_START",
                                        ],
                                        [
                                             "%{BKY_TEXT_CHARAT_FROM_END}",
                                             "FROM_END",
                                        ],
                                        ["%{BKY_TEXT_CHARAT_FIRST}", "FIRST"],
                                        ["%{BKY_TEXT_CHARAT_LAST}", "LAST"],
                                        ["%{BKY_TEXT_CHARAT_RANDOM}", "RANDOM"],
                                   ],
                              },
                         ],
                         output: "String",
                         style: "text_blocks",
                         helpUrl: "%{BKY_TEXT_CHARAT_HELPURL}",
                         inputsInline: !0,
                         mutator: "text_charAt_mutator",
                    },
               ]
          );
     module$exports$Blockly$libraryBlocks$texts.blocks.text_getSubstring = {
          init: function () {
               this.WHERE_OPTIONS_1 = [
                    [
                         module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_GET_SUBSTRING_START_FROM_START,
                         "FROM_START",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_GET_SUBSTRING_START_FROM_END,
                         "FROM_END",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_GET_SUBSTRING_START_FIRST,
                         "FIRST",
                    ],
               ];
               this.WHERE_OPTIONS_2 = [
                    [
                         module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_GET_SUBSTRING_END_FROM_START,
                         "FROM_START",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_GET_SUBSTRING_END_FROM_END,
                         "FROM_END",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_GET_SUBSTRING_END_LAST,
                         "LAST",
                    ],
               ];
               this.setHelpUrl(
                    module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_GET_SUBSTRING_HELPURL
               );
               this.setStyle("text_blocks");
               this.appendValueInput("STRING")
                    .setCheck("String")
                    .appendField(
                         module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_GET_SUBSTRING_INPUT_IN_TEXT
                    );
               this.appendDummyInput("AT1");
               this.appendDummyInput("AT2");
               module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_GET_SUBSTRING_TAIL &&
                    this.appendDummyInput("TAIL").appendField(
                         module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_GET_SUBSTRING_TAIL
                    );
               this.setInputsInline(!0);
               this.setOutput(!0, "String");
               this.updateAt_(1, !0);
               this.updateAt_(2, !0);
               this.setTooltip(
                    module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_GET_SUBSTRING_TOOLTIP
               );
          },
          mutationToDom: function () {
               const a =
                    $.module$build$src$core$utils$xml.createElement("mutation");
               var b =
                    this.getInput("AT1").type ===
                    $.module$build$src$core$connection_type.ConnectionType
                         .INPUT_VALUE;
               a.setAttribute("at1", b);
               b =
                    this.getInput("AT2").type ===
                    $.module$build$src$core$connection_type.ConnectionType
                         .INPUT_VALUE;
               a.setAttribute("at2", b);
               return a;
          },
          domToMutation: function (a) {
               const b = "true" === a.getAttribute("at1");
               a = "true" === a.getAttribute("at2");
               this.updateAt_(1, b);
               this.updateAt_(2, a);
          },
          updateAt_: function (a, b) {
               this.removeInput("AT" + a);
               this.removeInput("ORDINAL" + a, !0);
               b
                    ? (this.appendValueInput("AT" + a).setCheck("Number"),
                      module$contents$Blockly$libraryBlocks$texts_Msg.ORDINAL_NUMBER_SUFFIX &&
                           this.appendDummyInput("ORDINAL" + a).appendField(
                                module$contents$Blockly$libraryBlocks$texts_Msg.ORDINAL_NUMBER_SUFFIX
                           ))
                    : this.appendDummyInput("AT" + a);
               2 === a &&
                    module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_GET_SUBSTRING_TAIL &&
                    (this.removeInput("TAIL", !0),
                    this.appendDummyInput("TAIL").appendField(
                         module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_GET_SUBSTRING_TAIL
                    ));
               const c =
                    new module$contents$Blockly$libraryBlocks$texts_FieldDropdown(
                         this["WHERE_OPTIONS_" + a],
                         function (d) {
                              const e = "FROM_START" === d || "FROM_END" === d;
                              if (e !== b) {
                                   const f = this.getSourceBlock();
                                   f.updateAt_(a, e);
                                   f.setFieldValue(d, "WHERE" + a);
                                   return null;
                              }
                         }
                    );
               this.getInput("AT" + a).appendField(c, "WHERE" + a);
               1 === a &&
                    (this.moveInputBefore("AT1", "AT2"),
                    this.getInput("ORDINAL1") &&
                         this.moveInputBefore("ORDINAL1", "AT2"));
          },
     };
     module$exports$Blockly$libraryBlocks$texts.blocks.text_changeCase = {
          init: function () {
               const a = [
                    [
                         module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_CHANGECASE_OPERATOR_UPPERCASE,
                         "UPPERCASE",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_CHANGECASE_OPERATOR_LOWERCASE,
                         "LOWERCASE",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_CHANGECASE_OPERATOR_TITLECASE,
                         "TITLECASE",
                    ],
               ];
               this.setHelpUrl(
                    module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_CHANGECASE_HELPURL
               );
               this.setStyle("text_blocks");
               this.appendValueInput("TEXT")
                    .setCheck("String")
                    .appendField(
                         new module$contents$Blockly$libraryBlocks$texts_FieldDropdown(
                              a
                         ),
                         "CASE"
                    );
               this.setOutput(!0, "String");
               this.setTooltip(
                    module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_CHANGECASE_TOOLTIP
               );
          },
     };
     module$exports$Blockly$libraryBlocks$texts.blocks.text_trim = {
          init: function () {
               const a = [
                    [
                         module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_TRIM_OPERATOR_BOTH,
                         "BOTH",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_TRIM_OPERATOR_LEFT,
                         "LEFT",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_TRIM_OPERATOR_RIGHT,
                         "RIGHT",
                    ],
               ];
               this.setHelpUrl(
                    module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_TRIM_HELPURL
               );
               this.setStyle("text_blocks");
               this.appendValueInput("TEXT")
                    .setCheck("String")
                    .appendField(
                         new module$contents$Blockly$libraryBlocks$texts_FieldDropdown(
                              a
                         ),
                         "MODE"
                    );
               this.setOutput(!0, "String");
               this.setTooltip(
                    module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_TRIM_TOOLTIP
               );
          },
     };
     module$exports$Blockly$libraryBlocks$texts.blocks.text_print = {
          init: function () {
               this.jsonInit({
                    message0:
                         module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_PRINT_TITLE,
                    args0: [{ type: "input_value", name: "TEXT" }],
                    previousStatement: null,
                    nextStatement: null,
                    style: "text_blocks",
                    tooltip: module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_PRINT_TOOLTIP,
                    helpUrl: module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_PRINT_HELPURL,
               });
          },
     };
     var module$contents$Blockly$libraryBlocks$texts_TEXT_PROMPT_COMMON = {
          updateType_: function (a) {
               this.outputConnection.setCheck(
                    "NUMBER" === a ? "Number" : "String"
               );
          },
          mutationToDom: function () {
               const a =
                    $.module$build$src$core$utils$xml.createElement("mutation");
               a.setAttribute("type", this.getFieldValue("TYPE"));
               return a;
          },
          domToMutation: function (a) {
               this.updateType_(a.getAttribute("type"));
          },
     };
     module$exports$Blockly$libraryBlocks$texts.blocks.text_prompt_ext =
          Object.assign(
               {},
               module$contents$Blockly$libraryBlocks$texts_TEXT_PROMPT_COMMON,
               {
                    init: function () {
                         var a = [
                              [
                                   module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_PROMPT_TYPE_TEXT,
                                   "TEXT",
                              ],
                              [
                                   module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_PROMPT_TYPE_NUMBER,
                                   "NUMBER",
                              ],
                         ];
                         this.setHelpUrl(
                              module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_PROMPT_HELPURL
                         );
                         this.setStyle("text_blocks");
                         const b = this;
                         a =
                              new module$contents$Blockly$libraryBlocks$texts_FieldDropdown(
                                   a,
                                   function (c) {
                                        b.updateType_(c);
                                   }
                              );
                         this.appendValueInput("TEXT").appendField(a, "TYPE");
                         this.setOutput(!0, "String");
                         this.setTooltip(function () {
                              return "TEXT" === b.getFieldValue("TYPE")
                                   ? module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_PROMPT_TOOLTIP_TEXT
                                   : module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_PROMPT_TOOLTIP_NUMBER;
                         });
                    },
               }
          );
     module$exports$Blockly$libraryBlocks$texts.blocks.text_prompt =
          Object.assign(
               {},
               module$contents$Blockly$libraryBlocks$texts_TEXT_PROMPT_COMMON,
               {
                    init: function () {
                         this.mixin(
                              module$contents$Blockly$libraryBlocks$texts_QUOTE_IMAGE_MIXIN
                         );
                         var a = [
                              [
                                   module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_PROMPT_TYPE_TEXT,
                                   "TEXT",
                              ],
                              [
                                   module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_PROMPT_TYPE_NUMBER,
                                   "NUMBER",
                              ],
                         ];
                         const b = this;
                         this.setHelpUrl(
                              module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_PROMPT_HELPURL
                         );
                         this.setStyle("text_blocks");
                         a =
                              new module$contents$Blockly$libraryBlocks$texts_FieldDropdown(
                                   a,
                                   function (c) {
                                        b.updateType_(c);
                                   }
                              );
                         this.appendDummyInput()
                              .appendField(a, "TYPE")
                              .appendField(this.newQuote_(!0))
                              .appendField(
                                   new $.FieldTextInput$$module$build$src$core$field_textinput(
                                        ""
                                   ),
                                   "TEXT"
                              )
                              .appendField(this.newQuote_(!1));
                         this.setOutput(!0, "String");
                         this.setTooltip(function () {
                              return "TEXT" === b.getFieldValue("TYPE")
                                   ? module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_PROMPT_TOOLTIP_TEXT
                                   : module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_PROMPT_TOOLTIP_NUMBER;
                         });
                    },
               }
          );
     module$exports$Blockly$libraryBlocks$texts.blocks.text_count = {
          init: function () {
               this.jsonInit({
                    message0:
                         module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_COUNT_MESSAGE0,
                    args0: [
                         { type: "input_value", name: "SUB", check: "String" },
                         { type: "input_value", name: "TEXT", check: "String" },
                    ],
                    output: "Number",
                    inputsInline: !0,
                    style: "text_blocks",
                    tooltip: module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_COUNT_TOOLTIP,
                    helpUrl: module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_COUNT_HELPURL,
               });
          },
     };
     module$exports$Blockly$libraryBlocks$texts.blocks.text_replace = {
          init: function () {
               this.jsonInit({
                    message0:
                         module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_REPLACE_MESSAGE0,
                    args0: [
                         { type: "input_value", name: "FROM", check: "String" },
                         { type: "input_value", name: "TO", check: "String" },
                         { type: "input_value", name: "TEXT", check: "String" },
                    ],
                    output: "String",
                    inputsInline: !0,
                    style: "text_blocks",
                    tooltip: module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_REPLACE_TOOLTIP,
                    helpUrl: module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_REPLACE_HELPURL,
               });
          },
     };
     module$exports$Blockly$libraryBlocks$texts.blocks.text_reverse = {
          init: function () {
               this.jsonInit({
                    message0:
                         module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_REVERSE_MESSAGE0,
                    args0: [
                         { type: "input_value", name: "TEXT", check: "String" },
                    ],
                    output: "String",
                    inputsInline: !0,
                    style: "text_blocks",
                    tooltip: module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_REVERSE_TOOLTIP,
                    helpUrl: module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_REVERSE_HELPURL,
               });
          },
     };
     var module$contents$Blockly$libraryBlocks$texts_QUOTE_IMAGE_MIXIN = {
               QUOTE_IMAGE_LEFT_DATAURI:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC",
               QUOTE_IMAGE_RIGHT_DATAURI:
                    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==",
               QUOTE_IMAGE_WIDTH: 12,
               QUOTE_IMAGE_HEIGHT: 12,
               quoteField_: function (a) {
                    for (let b = 0, c; (c = this.inputList[b]); b++)
                         for (let d = 0, e; (e = c.fieldRow[d]); d++)
                              if (a === e.name) {
                                   c.insertFieldAt(d, this.newQuote_(!0));
                                   c.insertFieldAt(d + 2, this.newQuote_(!1));
                                   return;
                              }
                    console.warn(
                         'field named "' +
                              a +
                              '" not found in ' +
                              this.toDevString()
                    );
               },
               newQuote_: function (a) {
                    a = this.RTL ? !a : a;
                    return new $.FieldImage$$module$build$src$core$field_image(
                         a
                              ? this.QUOTE_IMAGE_LEFT_DATAURI
                              : this.QUOTE_IMAGE_RIGHT_DATAURI,
                         this.QUOTE_IMAGE_WIDTH,
                         this.QUOTE_IMAGE_HEIGHT,
                         a ? "\u201c" : "\u201d"
                    );
               },
          },
          module$contents$Blockly$libraryBlocks$texts_TEXT_QUOTES_EXTENSION =
               function () {
                    this.mixin(
                         module$contents$Blockly$libraryBlocks$texts_QUOTE_IMAGE_MIXIN
                    );
                    this.quoteField_("TEXT");
               },
          module$contents$Blockly$libraryBlocks$texts_TEXT_JOIN_MUTATOR_MIXIN =
               {
                    mutationToDom: function () {
                         const a =
                              $.module$build$src$core$utils$xml.createElement(
                                   "mutation"
                              );
                         a.setAttribute("items", this.itemCount_);
                         return a;
                    },
                    domToMutation: function (a) {
                         this.itemCount_ = parseInt(
                              a.getAttribute("items"),
                              10
                         );
                         this.updateShape_();
                    },
                    saveExtraState: function () {
                         return { itemCount: this.itemCount_ };
                    },
                    loadExtraState: function (a) {
                         this.itemCount_ = a.itemCount;
                         this.updateShape_();
                    },
                    decompose: function (a) {
                         const b = a.newBlock("text_create_join_container");
                         b.initSvg();
                         let c = b.getInput("STACK").connection;
                         for (let d = 0; d < this.itemCount_; d++) {
                              const e = a.newBlock("text_create_join_item");
                              e.initSvg();
                              c.connect(e.previousConnection);
                              c = e.nextConnection;
                         }
                         return b;
                    },
                    compose: function (a) {
                         var b = a.getInputTargetBlock("STACK");
                         for (a = []; b; )
                              b.isInsertionMarker() ||
                                   a.push(b.valueConnection_),
                                   (b = b.getNextBlock());
                         for (b = 0; b < this.itemCount_; b++) {
                              const c = this.getInput("ADD" + b).connection
                                   .targetConnection;
                              c && -1 === a.indexOf(c) && c.disconnect();
                         }
                         this.itemCount_ = a.length;
                         this.updateShape_();
                         for (b = 0; b < this.itemCount_; b++)
                              $.Mutator$$module$build$src$core$mutator.reconnect(
                                   a[b],
                                   this,
                                   "ADD" + b
                              );
                    },
                    saveConnections: function (a) {
                         a = a.getInputTargetBlock("STACK");
                         let b = 0;
                         for (; a; ) {
                              if (a.isInsertionMarker()) {
                                   a = a.getNextBlock();
                                   continue;
                              }
                              const c = this.getInput("ADD" + b);
                              a.valueConnection_ =
                                   c && c.connection.targetConnection;
                              a = a.getNextBlock();
                              b++;
                         }
                    },
                    updateShape_: function () {
                         this.itemCount_ && this.getInput("EMPTY")
                              ? this.removeInput("EMPTY")
                              : this.itemCount_ ||
                                this.getInput("EMPTY") ||
                                this.appendDummyInput("EMPTY")
                                     .appendField(this.newQuote_(!0))
                                     .appendField(this.newQuote_(!1));
                         for (var a = 0; a < this.itemCount_; a++)
                              if (!this.getInput("ADD" + a)) {
                                   const b = this.appendValueInput(
                                        "ADD" + a
                                   ).setAlign(
                                        $.Align$$module$build$src$core$input
                                             .RIGHT
                                   );
                                   0 === a &&
                                        b.appendField(
                                             module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_JOIN_TITLE_CREATEWITH
                                        );
                              }
                         for (
                              a = this.itemCount_;
                              this.getInput("ADD" + a);
                              a++
                         )
                              this.removeInput("ADD" + a);
                    },
               },
          module$contents$Blockly$libraryBlocks$texts_TEXT_JOIN_EXTENSION =
               function () {
                    this.mixin(
                         module$contents$Blockly$libraryBlocks$texts_QUOTE_IMAGE_MIXIN
                    );
                    this.itemCount_ = 2;
                    this.updateShape_();
                    this.setMutator(
                         new $.Mutator$$module$build$src$core$mutator(
                              ["text_create_join_item"],
                              this
                         )
                    );
               };
     $.module$build$src$core$extensions.register(
          "text_append_tooltip",
          $.module$build$src$core$extensions.buildTooltipWithFieldText(
               "%{BKY_TEXT_APPEND_TOOLTIP}",
               "VAR"
          )
     );
     var module$contents$Blockly$libraryBlocks$texts_TEXT_INDEXOF_TOOLTIP_EXTENSION =
               function () {
                    const a = this;
                    this.setTooltip(function () {
                         return module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_INDEXOF_TOOLTIP.replace(
                              "%1",
                              a.workspace.options.oneBasedIndex ? "0" : "-1"
                         );
                    });
               },
          module$contents$Blockly$libraryBlocks$texts_TEXT_CHARAT_MUTATOR_MIXIN =
               {
                    mutationToDom: function () {
                         const a =
                              $.module$build$src$core$utils$xml.createElement(
                                   "mutation"
                              );
                         a.setAttribute("at", !!this.isAt_);
                         return a;
                    },
                    domToMutation: function (a) {
                         a = "false" !== a.getAttribute("at");
                         this.updateAt_(a);
                    },
                    updateAt_: function (a) {
                         this.removeInput("AT", !0);
                         this.removeInput("ORDINAL", !0);
                         a &&
                              (this.appendValueInput("AT").setCheck("Number"),
                              module$contents$Blockly$libraryBlocks$texts_Msg.ORDINAL_NUMBER_SUFFIX &&
                                   this.appendDummyInput("ORDINAL").appendField(
                                        module$contents$Blockly$libraryBlocks$texts_Msg.ORDINAL_NUMBER_SUFFIX
                                   ));
                         module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_CHARAT_TAIL &&
                              (this.removeInput("TAIL", !0),
                              this.appendDummyInput("TAIL").appendField(
                                   module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_CHARAT_TAIL
                              ));
                         this.isAt_ = a;
                    },
               },
          module$contents$Blockly$libraryBlocks$texts_TEXT_CHARAT_EXTENSION =
               function () {
                    this.getField("WHERE").setValidator(function (b) {
                         b = "FROM_START" === b || "FROM_END" === b;
                         b !== this.isAt_ && this.getSourceBlock().updateAt_(b);
                    });
                    this.updateAt_(!0);
                    const a = this;
                    this.setTooltip(function () {
                         var b = a.getFieldValue("WHERE");
                         let c =
                              module$contents$Blockly$libraryBlocks$texts_Msg.TEXT_CHARAT_TOOLTIP;
                         ("FROM_START" === b || "FROM_END" === b) &&
                              (b =
                                   "FROM_START" === b
                                        ? module$contents$Blockly$libraryBlocks$texts_Msg.LISTS_INDEX_FROM_START_TOOLTIP
                                        : module$contents$Blockly$libraryBlocks$texts_Msg.LISTS_INDEX_FROM_END_TOOLTIP) &&
                              (c +=
                                   "  " +
                                   b.replace(
                                        "%1",
                                        a.workspace.options.oneBasedIndex
                                             ? "#1"
                                             : "#0"
                                   ));
                         return c;
                    });
               };
     $.module$build$src$core$extensions.register(
          "text_indexOf_tooltip",
          module$contents$Blockly$libraryBlocks$texts_TEXT_INDEXOF_TOOLTIP_EXTENSION
     );
     $.module$build$src$core$extensions.register(
          "text_quotes",
          module$contents$Blockly$libraryBlocks$texts_TEXT_QUOTES_EXTENSION
     );
     $.module$build$src$core$extensions.registerMutator(
          "text_join_mutator",
          module$contents$Blockly$libraryBlocks$texts_TEXT_JOIN_MUTATOR_MIXIN,
          module$contents$Blockly$libraryBlocks$texts_TEXT_JOIN_EXTENSION
     );
     $.module$build$src$core$extensions.registerMutator(
          "text_charAt_mutator",
          module$contents$Blockly$libraryBlocks$texts_TEXT_CHARAT_MUTATOR_MIXIN,
          module$contents$Blockly$libraryBlocks$texts_TEXT_CHARAT_EXTENSION
     );
     module$contents$Blockly$libraryBlocks$texts_defineBlocks(
          module$exports$Blockly$libraryBlocks$texts.blocks
     );
     var module$exports$Blockly$libraryBlocks$procedures = {},
          module$contents$Blockly$libraryBlocks$procedures_ContextMenu =
               $.module$build$src$core$contextmenu,
          module$contents$Blockly$libraryBlocks$procedures_Events =
               $.module$build$src$core$events$events,
          module$contents$Blockly$libraryBlocks$procedures_Procedures =
               $.module$build$src$core$procedures,
          module$contents$Blockly$libraryBlocks$procedures_Variables =
               $.module$build$src$core$variables,
          module$contents$Blockly$libraryBlocks$procedures_Xml =
               $.module$build$src$core$xml,
          module$contents$Blockly$libraryBlocks$procedures_xmlUtils =
               $.module$build$src$core$utils$xml,
          module$contents$Blockly$libraryBlocks$procedures_Align =
               $.Align$$module$build$src$core$input,
          module$contents$Blockly$libraryBlocks$procedures_BlockDefinition =
               Object,
          module$contents$Blockly$libraryBlocks$procedures_config =
               $.config$$module$build$src$core$config,
          module$contents$Blockly$libraryBlocks$procedures_FieldCheckbox =
               $.FieldCheckbox$$module$build$src$core$field_checkbox,
          module$contents$Blockly$libraryBlocks$procedures_FieldLabel =
               $.FieldLabel$$module$build$src$core$field_label,
          module$contents$Blockly$libraryBlocks$procedures_FieldTextInput =
               $.FieldTextInput$$module$build$src$core$field_textinput,
          module$contents$Blockly$libraryBlocks$procedures_Msg =
               $.module$build$src$core$msg.Msg,
          module$contents$Blockly$libraryBlocks$procedures_Mutator =
               $.Mutator$$module$build$src$core$mutator,
          module$contents$Blockly$libraryBlocks$procedures_Names =
               $.module$build$src$core$names.Names,
          module$contents$Blockly$libraryBlocks$procedures_defineBlocks =
               $.module$build$src$core$common.defineBlocks;
     module$exports$Blockly$libraryBlocks$procedures.blocks = {};
     var module$contents$Blockly$libraryBlocks$procedures_PROCEDURE_DEF_COMMON =
          {
               setStatements_: function (a) {
                    this.hasStatements_ !== a &&
                         (a
                              ? (this.appendStatementInput("STACK").appendField(
                                     module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_DEFNORETURN_DO
                                ),
                                this.getInput("RETURN") &&
                                     this.moveInputBefore("STACK", "RETURN"))
                              : this.removeInput("STACK", !0),
                         (this.hasStatements_ = a));
               },
               updateParams_: function () {
                    let a = "";
                    this.arguments_.length &&
                         (a =
                              module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_BEFORE_PARAMS +
                              " " +
                              this.arguments_.join(", "));
                    $.module$build$src$core$events$events.disable();
                    try {
                         this.setFieldValue(a, "PARAMS");
                    } finally {
                         $.module$build$src$core$events$events.enable();
                    }
               },
               mutationToDom: function (a) {
                    const b =
                         $.module$build$src$core$utils$xml.createElement(
                              "mutation"
                         );
                    a && b.setAttribute("name", this.getFieldValue("NAME"));
                    for (let c = 0; c < this.argumentVarModels_.length; c++) {
                         const d =
                                   $.module$build$src$core$utils$xml.createElement(
                                        "arg"
                                   ),
                              e = this.argumentVarModels_[c];
                         d.setAttribute("name", e.name);
                         d.setAttribute("varid", e.getId());
                         a &&
                              this.paramIds_ &&
                              d.setAttribute("paramId", this.paramIds_[c]);
                         b.appendChild(d);
                    }
                    this.hasStatements_ ||
                         b.setAttribute("statements", "false");
                    return b;
               },
               domToMutation: function (a) {
                    this.arguments_ = [];
                    this.argumentVarModels_ = [];
                    for (let c = 0, d; (d = a.childNodes[c]); c++)
                         if ("arg" === d.nodeName.toLowerCase()) {
                              const e = d.getAttribute("name");
                              var b =
                                   d.getAttribute("varid") ||
                                   d.getAttribute("varId");
                              this.arguments_.push(e);
                              b =
                                   $.module$build$src$core$variables.getOrCreateVariablePackage(
                                        this.workspace,
                                        b,
                                        e,
                                        ""
                                   );
                              null !== b
                                   ? this.argumentVarModels_.push(b)
                                   : console.log(
                                          `Failed to create a variable named "${e}", ignoring.`
                                     );
                         }
                    this.updateParams_();
                    $.module$build$src$core$procedures.mutateCallers(this);
                    this.setStatements_(
                         "false" !== a.getAttribute("statements")
                    );
               },
               saveExtraState: function () {
                    if (!this.argumentVarModels_.length && this.hasStatements_)
                         return null;
                    const a = Object.create(null);
                    if (this.argumentVarModels_.length) {
                         a.params = [];
                         for (
                              let b = 0;
                              b < this.argumentVarModels_.length;
                              b++
                         )
                              a.params.push({
                                   name: this.argumentVarModels_[b].name,
                                   id: this.argumentVarModels_[b].getId(),
                              });
                    }
                    this.hasStatements_ || (a.hasStatements = !1);
                    return a;
               },
               loadExtraState: function (a) {
                    this.arguments_ = [];
                    this.argumentVarModels_ = [];
                    if (a.params)
                         for (let c = 0; c < a.params.length; c++) {
                              var b = a.params[c];
                              b =
                                   $.module$build$src$core$variables.getOrCreateVariablePackage(
                                        this.workspace,
                                        b.id,
                                        b.name,
                                        ""
                                   );
                              this.arguments_.push(b.name);
                              this.argumentVarModels_.push(b);
                         }
                    this.updateParams_();
                    $.module$build$src$core$procedures.mutateCallers(this);
                    this.setStatements_(!1 === a.hasStatements ? !1 : !0);
               },
               decompose: function (a) {
                    const b =
                         $.module$build$src$core$utils$xml.createElement(
                              "block"
                         );
                    b.setAttribute("type", "procedures_mutatorcontainer");
                    var c =
                         $.module$build$src$core$utils$xml.createElement(
                              "statement"
                         );
                    c.setAttribute("name", "STACK");
                    b.appendChild(c);
                    for (let e = 0; e < this.arguments_.length; e++) {
                         const f =
                              $.module$build$src$core$utils$xml.createElement(
                                   "block"
                              );
                         f.setAttribute("type", "procedures_mutatorarg");
                         var d =
                              $.module$build$src$core$utils$xml.createElement(
                                   "field"
                              );
                         d.setAttribute("name", "NAME");
                         const g =
                              $.module$build$src$core$utils$xml.createTextNode(
                                   this.arguments_[e]
                              );
                         d.appendChild(g);
                         f.appendChild(d);
                         d =
                              $.module$build$src$core$utils$xml.createElement(
                                   "next"
                              );
                         f.appendChild(d);
                         c.appendChild(f);
                         c = d;
                    }
                    a = $.module$build$src$core$xml.domToBlock(b, a);
                    "procedures_defreturn" === this.type
                         ? a.setFieldValue(this.hasStatements_, "STATEMENTS")
                         : a.removeInput("STATEMENT_INPUT");
                    $.module$build$src$core$procedures.mutateCallers(this);
                    return a;
               },
               compose: function (a) {
                    this.arguments_ = [];
                    this.paramIds_ = [];
                    this.argumentVarModels_ = [];
                    let b = a.getInputTargetBlock("STACK");
                    for (; b && !b.isInsertionMarker(); ) {
                         var c = b.getFieldValue("NAME");
                         this.arguments_.push(c);
                         c = this.workspace.getVariable(c, "");
                         this.argumentVarModels_.push(c);
                         this.paramIds_.push(b.id);
                         b = b.nextConnection && b.nextConnection.targetBlock();
                    }
                    this.updateParams_();
                    $.module$build$src$core$procedures.mutateCallers(this);
                    a = a.getFieldValue("STATEMENTS");
                    if (
                         null !== a &&
                         ((a = "TRUE" === a), this.hasStatements_ !== a)
                    )
                         if (a)
                              this.setStatements_(!0),
                                   $.Mutator$$module$build$src$core$mutator.reconnect(
                                        this.statementConnection_,
                                        this,
                                        "STACK"
                                   ),
                                   (this.statementConnection_ = null);
                         else {
                              a = this.getInput("STACK").connection;
                              if (
                                   (this.statementConnection_ =
                                        a.targetConnection)
                              )
                                   (a = a.targetBlock()),
                                        a.unplug(),
                                        a.bumpNeighbours();
                              this.setStatements_(!1);
                         }
               },
               getVars: function () {
                    return this.arguments_;
               },
               getVarModels: function () {
                    return this.argumentVarModels_;
               },
               renameVarById: function (a, b) {
                    var c = this.workspace.getVariableById(a);
                    if ("" === c.type) {
                         c = c.name;
                         b = this.workspace.getVariableById(b);
                         var d = !1;
                         for (
                              let e = 0;
                              e < this.argumentVarModels_.length;
                              e++
                         )
                              this.argumentVarModels_[e].getId() === a &&
                                   ((this.arguments_[e] = b.name),
                                   (this.argumentVarModels_[e] = b),
                                   (d = !0));
                         d &&
                              (this.displayRenamedVar_(c, b.name),
                              $.module$build$src$core$procedures.mutateCallers(
                                   this
                              ));
                    }
               },
               updateVarName: function (a) {
                    const b = a.name;
                    let c = !1,
                         d;
                    for (let e = 0; e < this.argumentVarModels_.length; e++)
                         this.argumentVarModels_[e].getId() === a.getId() &&
                              ((d = this.arguments_[e]),
                              (this.arguments_[e] = b),
                              (c = !0));
                    c &&
                         (this.displayRenamedVar_(d, b),
                         $.module$build$src$core$procedures.mutateCallers(
                              this
                         ));
               },
               displayRenamedVar_: function (a, b) {
                    this.updateParams_();
                    if (this.mutator && this.mutator.isVisible()) {
                         const c = this.mutator.workspace_.getAllBlocks(!1);
                         for (let d = 0, e; (e = c[d]); d++)
                              "procedures_mutatorarg" === e.type &&
                                   $.module$build$src$core$names.Names.equals(
                                        a,
                                        e.getFieldValue("NAME")
                                   ) &&
                                   e.setFieldValue(b, "NAME");
                    }
               },
               customContextMenu: function (a) {
                    if (!this.isInFlyout) {
                         var b = { enabled: !0 },
                              c = this.getFieldValue("NAME");
                         b.text =
                              module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_CREATE_DO.replace(
                                   "%1",
                                   c
                              );
                         var d =
                              $.module$build$src$core$utils$xml.createElement(
                                   "mutation"
                              );
                         d.setAttribute("name", c);
                         for (c = 0; c < this.arguments_.length; c++) {
                              var e =
                                   $.module$build$src$core$utils$xml.createElement(
                                        "arg"
                                   );
                              e.setAttribute("name", this.arguments_[c]);
                              d.appendChild(e);
                         }
                         c =
                              $.module$build$src$core$utils$xml.createElement(
                                   "block"
                              );
                         c.setAttribute("type", this.callType_);
                         c.appendChild(d);
                         b.callback =
                              $.module$build$src$core$contextmenu.callbackFactory(
                                   this,
                                   c
                              );
                         a.push(b);
                         if (!this.isCollapsed())
                              for (
                                   b = 0;
                                   b < this.argumentVarModels_.length;
                                   b++
                              )
                                   (d = { enabled: !0 }),
                                        (c = this.argumentVarModels_[b]),
                                        (d.text =
                                             module$contents$Blockly$libraryBlocks$procedures_Msg.VARIABLES_SET_CREATE_GET.replace(
                                                  "%1",
                                                  c.name
                                             )),
                                        (c =
                                             $.module$build$src$core$variables.generateVariableFieldDom(
                                                  c
                                             )),
                                        (e =
                                             $.module$build$src$core$utils$xml.createElement(
                                                  "block"
                                             )),
                                        e.setAttribute("type", "variables_get"),
                                        e.appendChild(c),
                                        (d.callback =
                                             $.module$build$src$core$contextmenu.callbackFactory(
                                                  this,
                                                  e
                                             )),
                                        a.push(d);
                    }
               },
          };
     module$exports$Blockly$libraryBlocks$procedures.blocks.procedures_defnoreturn =
          Object.assign(
               {},
               module$contents$Blockly$libraryBlocks$procedures_PROCEDURE_DEF_COMMON,
               {
                    init: function () {
                         var a =
                              $.module$build$src$core$procedures.findLegalName(
                                   "",
                                   this
                              );
                         a =
                              new $.FieldTextInput$$module$build$src$core$field_textinput(
                                   a,
                                   $.module$build$src$core$procedures.rename
                              );
                         a.setSpellcheck(!1);
                         this.appendDummyInput()
                              .appendField(
                                   module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_DEFNORETURN_TITLE
                              )
                              .appendField(a, "NAME")
                              .appendField("", "PARAMS");
                         this.setMutator(
                              new $.Mutator$$module$build$src$core$mutator(
                                   ["procedures_mutatorarg"],
                                   this
                              )
                         );
                         (this.workspace.options.comments ||
                              (this.workspace.options.parentWorkspace &&
                                   this.workspace.options.parentWorkspace
                                        .options.comments)) &&
                              module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_DEFNORETURN_COMMENT &&
                              this.setCommentText(
                                   module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_DEFNORETURN_COMMENT
                              );
                         this.setStyle("procedure_blocks");
                         this.setTooltip(
                              module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_DEFNORETURN_TOOLTIP
                         );
                         this.setHelpUrl(
                              module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_DEFNORETURN_HELPURL
                         );
                         this.arguments_ = [];
                         this.argumentVarModels_ = [];
                         this.setStatements_(!0);
                         this.statementConnection_ = null;
                         this.setPreviousStatement(true, null);
                         this.setNextStatement(true, null);
                    },
                    getProcedureDef: function () {
                         return [
                              this.getFieldValue("NAME"),
                              this.arguments_,
                              !1,
                         ];
                    },
                    callType_: "procedures_callnoreturn",
               }
          );
     module$exports$Blockly$libraryBlocks$procedures.blocks.procedures_defreturn =
          Object.assign(
               {},
               module$contents$Blockly$libraryBlocks$procedures_PROCEDURE_DEF_COMMON,
               {
                    init: function () {
                         var a =
                              $.module$build$src$core$procedures.findLegalName(
                                   "",
                                   this
                              );
                         a =
                              new $.FieldTextInput$$module$build$src$core$field_textinput(
                                   a,
                                   $.module$build$src$core$procedures.rename
                              );
                         a.setSpellcheck(!1);
                         this.appendDummyInput()
                              .appendField(
                                   module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_DEFRETURN_TITLE
                              )
                              .appendField(a, "NAME")
                              .appendField("", "PARAMS");
                         this.appendValueInput("RETURN")
                              .setAlign(
                                   $.Align$$module$build$src$core$input.RIGHT
                              )
                              .appendField(
                                   module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_DEFRETURN_RETURN
                              );
                         this.setMutator(
                              new $.Mutator$$module$build$src$core$mutator(
                                   ["procedures_mutatorarg"],
                                   this
                              )
                         );
                         (this.workspace.options.comments ||
                              (this.workspace.options.parentWorkspace &&
                                   this.workspace.options.parentWorkspace
                                        .options.comments)) &&
                              module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_DEFRETURN_COMMENT &&
                              this.setCommentText(
                                   module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_DEFRETURN_COMMENT
                              );
                         this.setStyle("procedure_blocks");
                         this.setTooltip(
                              module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_DEFRETURN_TOOLTIP
                         );
                         this.setHelpUrl(
                              module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_DEFRETURN_HELPURL
                         );
                         this.arguments_ = [];
                         this.argumentVarModels_ = [];
                         this.setStatements_(!0);
                         this.statementConnection_ = null;
                         // 可嵌入code//你这是修改完了吗
                         this.setPreviousStatement(true, null);
                         this.setNextStatement(true, null);
                    },
                    getProcedureDef: function () {
                         return [
                              this.getFieldValue("NAME"),
                              this.arguments_,
                              !0,
                         ];
                    },
                    callType_: "procedures_callreturn",
               }
          );
     module$exports$Blockly$libraryBlocks$procedures.blocks.procedures_mutatorcontainer =
          {
               init: function () {
                    this.appendDummyInput().appendField(
                         module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_MUTATORCONTAINER_TITLE
                    );
                    this.appendStatementInput("STACK");
                    this.appendDummyInput("STATEMENT_INPUT")
                         .appendField(
                              module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_ALLOW_STATEMENTS
                         )
                         .appendField(
                              new $.FieldCheckbox$$module$build$src$core$field_checkbox(
                                   "TRUE"
                              ),
                              "STATEMENTS"
                         );
                    this.setStyle("procedure_blocks");
                    this.setTooltip(
                         module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_MUTATORCONTAINER_TOOLTIP
                    );
                    this.contextMenu = !1;
               },
          };
     module$exports$Blockly$libraryBlocks$procedures.blocks.procedures_mutatorarg =
          {
               init: function () {
                    const a =
                         new $.FieldTextInput$$module$build$src$core$field_textinput(
                              $.module$build$src$core$procedures.DEFAULT_ARG,
                              this.validator_
                         );
                    a.oldShowEditorFn_ = a.showEditor_;
                    a.showEditor_ = function () {
                         this.createdVariables_ = [];
                         this.oldShowEditorFn_();
                    };
                    this.appendDummyInput()
                         .appendField(
                              module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_MUTATORARG_TITLE
                         )
                         .appendField(a, "NAME");
                    this.setPreviousStatement(!0);
                    this.setNextStatement(!0);
                    this.setStyle("procedure_blocks");
                    this.setTooltip(
                         module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_MUTATORARG_TOOLTIP
                    );
                    this.contextMenu = !1;
                    a.onFinishEditing_ = this.deleteIntermediateVars_;
                    a.createdVariables_ = [];
                    a.onFinishEditing_("x");
               },
               validator_: function (a) {
                    var b = this.getSourceBlock();
                    const c =
                         $.Mutator$$module$build$src$core$mutator.findParentWs(
                              b.workspace
                         );
                    a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
                    if (!a) return null;
                    const d = (
                              b.workspace.targetWorkspace || b.workspace
                         ).getAllBlocks(!1),
                         e = a.toLowerCase();
                    for (let f = 0; f < d.length; f++) {
                         if (d[f].id === this.getSourceBlock().id) continue;
                         const g = d[f].getFieldValue("NAME");
                         if (g && g.toLowerCase() === e) return null;
                    }
                    if (b.isInFlyout) return a;
                    (b = c.getVariable(a, "")) &&
                         b.name !== a &&
                         c.renameVariableById(b.getId(), a);
                    b ||
                         ((b = c.createVariable(a, "")) &&
                              this.createdVariables_ &&
                              this.createdVariables_.push(b));
                    return a;
               },
               deleteIntermediateVars_: function (a) {
                    const b =
                         $.Mutator$$module$build$src$core$mutator.findParentWs(
                              this.getSourceBlock().workspace
                         );
                    if (b)
                         for (
                              let c = 0;
                              c < this.createdVariables_.length;
                              c++
                         ) {
                              const d = this.createdVariables_[c];
                              d.name !== a && b.deleteVariableById(d.getId());
                         }
               },
          };
     var module$contents$Blockly$libraryBlocks$procedures_PROCEDURE_CALL_COMMON =
          {
               getProcedureCall: function () {
                    return this.getFieldValue("NAME");
               },
               renameProcedure: function (a, b) {
                    $.module$build$src$core$names.Names.equals(
                         a,
                         this.getProcedureCall()
                    ) &&
                         (this.setFieldValue(b, "NAME"),
                         this.setTooltip(
                              (this.outputConnection
                                   ? module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_CALLRETURN_TOOLTIP
                                   : module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_CALLNORETURN_TOOLTIP
                              ).replace("%1", b)
                         ));
               },
               setProcedureParameters_: function (a, b) {
                    var c = $.module$build$src$core$procedures.getDefinition(
                              this.getProcedureCall(),
                              this.workspace
                         ),
                         d = c && c.mutator && c.mutator.isVisible();
                    d
                         ? this.setCollapsed(!1)
                         : ((this.quarkConnections_ = {}),
                           (this.quarkIds_ = null));
                    if (a.join("\n") === this.arguments_.join("\n"))
                         this.quarkIds_ = b;
                    else {
                         if (b.length !== a.length)
                              throw RangeError(
                                   "paramNames and paramIds must be the same length."
                              );
                         this.quarkIds_ ||
                              ((this.quarkConnections_ = {}),
                              (this.quarkIds_ = []));
                         c = this.rendered;
                         this.rendered = !1;
                         for (let f = 0; f < this.arguments_.length; f++) {
                              var e = this.getInput("ARG" + f);
                              e &&
                                   ((e = e.connection.targetConnection),
                                   (this.quarkConnections_[this.quarkIds_[f]] =
                                        e),
                                   d &&
                                        e &&
                                        -1 === b.indexOf(this.quarkIds_[f]) &&
                                        (e.disconnect(),
                                        e.getSourceBlock().bumpNeighbours()));
                         }
                         this.arguments_ = [].concat(a);
                         this.argumentVarModels_ = [];
                         for (a = 0; a < this.arguments_.length; a++)
                              (d =
                                   $.module$build$src$core$variables.getOrCreateVariablePackage(
                                        this.workspace,
                                        null,
                                        this.arguments_[a],
                                        ""
                                   )),
                                   this.argumentVarModels_.push(d);
                         this.updateShape_();
                         if ((this.quarkIds_ = b))
                              for (b = 0; b < this.arguments_.length; b++)
                                   (a = this.quarkIds_[b]),
                                        a in this.quarkConnections_ &&
                                             ($.Mutator$$module$build$src$core$mutator.reconnect(
                                                  this.quarkConnections_[a],
                                                  this,
                                                  "ARG" + b
                                             ) ||
                                                  delete this.quarkConnections_[
                                                       a
                                                  ]);
                         (this.rendered = c) && this.render();
                    }
               },
               updateShape_: function () {
                    for (var a = 0; a < this.arguments_.length; a++) {
                         var b = this.getField("ARGNAME" + a);
                         if (b) {
                              $.module$build$src$core$events$events.disable();
                              try {
                                   b.setValue(this.arguments_[a]);
                              } finally {
                                   $.module$build$src$core$events$events.enable();
                              }
                         } else
                              (b =
                                   new $.FieldLabel$$module$build$src$core$field_label(
                                        this.arguments_[a]
                                   )),
                                   this.appendValueInput("ARG" + a)
                                        .setAlign(
                                             $
                                                  .Align$$module$build$src$core$input
                                                  .RIGHT
                                        )
                                        .appendField(b, "ARGNAME" + a)
                                        .init();
                    }
                    for (
                         a = this.arguments_.length;
                         this.getInput("ARG" + a);
                         a++
                    )
                         this.removeInput("ARG" + a);
                    if ((a = this.getInput("TOPROW")))
                         this.arguments_.length
                              ? this.getField("WITH") ||
                                (a.appendField(
                                     module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_CALL_BEFORE_PARAMS,
                                     "WITH"
                                ),
                                a.init())
                              : this.getField("WITH") && a.removeField("WITH");
               },
               mutationToDom: function () {
                    const a =
                         $.module$build$src$core$utils$xml.createElement(
                              "mutation"
                         );
                    a.setAttribute("name", this.getProcedureCall());
                    for (let b = 0; b < this.arguments_.length; b++) {
                         const c =
                              $.module$build$src$core$utils$xml.createElement(
                                   "arg"
                              );
                         c.setAttribute("name", this.arguments_[b]);
                         a.appendChild(c);
                    }
                    return a;
               },
               domToMutation: function (a) {
                    var b = a.getAttribute("name");
                    this.renameProcedure(this.getProcedureCall(), b);
                    b = [];
                    const c = [];
                    for (let d = 0, e; (e = a.childNodes[d]); d++)
                         "arg" === e.nodeName.toLowerCase() &&
                              (b.push(e.getAttribute("name")),
                              c.push(e.getAttribute("paramId")));
                    this.setProcedureParameters_(b, c);
               },
               saveExtraState: function () {
                    const a = Object.create(null);
                    a.name = this.getProcedureCall();
                    this.arguments_.length && (a.params = this.arguments_);
                    return a;
               },
               loadExtraState: function (a) {
                    this.renameProcedure(this.getProcedureCall(), a.name);
                    if ((a = a.params)) {
                         const b = [];
                         b.length = a.length;
                         b.fill(null);
                         this.setProcedureParameters_(a, b);
                    }
               },
               getVars: function () {
                    return this.arguments_;
               },
               getVarModels: function () {
                    return this.argumentVarModels_;
               },
               onchange: function (a) {
                    if (
                         this.workspace &&
                         !this.workspace.isFlyout &&
                         a.recordUndo
                    )
                         if (
                              a.type ===
                                   $.module$build$src$core$events$events
                                        .BLOCK_CREATE &&
                              -1 !== a.ids.indexOf(this.id)
                         ) {
                              var b = this.getProcedureCall();
                              b =
                                   $.module$build$src$core$procedures.getDefinition(
                                        b,
                                        this.workspace
                                   );
                              !b ||
                                   (b.type === this.defType_ &&
                                        JSON.stringify(b.getVars()) ===
                                             JSON.stringify(this.arguments_)) ||
                                   (b = null);
                              if (!b) {
                                   $.module$build$src$core$events$events.setGroup(
                                        a.group
                                   );
                                   a =
                                        $.module$build$src$core$utils$xml.createElement(
                                             "xml"
                                        );
                                   b =
                                        $.module$build$src$core$utils$xml.createElement(
                                             "block"
                                        );
                                   b.setAttribute("type", this.defType_);
                                   var c = this.getRelativeToSurfaceXY(),
                                        d =
                                             c.y +
                                             2 *
                                                  $
                                                       .config$$module$build$src$core$config
                                                       .snapRadius;
                                   b.setAttribute(
                                        "x",
                                        c.x +
                                             $
                                                  .config$$module$build$src$core$config
                                                  .snapRadius *
                                                  (this.RTL ? -1 : 1)
                                   );
                                   b.setAttribute("y", d);
                                   c = this.mutationToDom();
                                   b.appendChild(c);
                                   c =
                                        $.module$build$src$core$utils$xml.createElement(
                                             "field"
                                        );
                                   c.setAttribute("name", "NAME");
                                   d = this.getProcedureCall();
                                   const e =
                                        $.module$build$src$core$procedures.findLegalName(
                                             d,
                                             this
                                        );
                                   d !== e && this.renameProcedure(d, e);
                                   c.appendChild(
                                        $.module$build$src$core$utils$xml.createTextNode(
                                             d
                                        )
                                   );
                                   b.appendChild(c);
                                   a.appendChild(b);
                                   $.module$build$src$core$xml.domToWorkspace(
                                        a,
                                        this.workspace
                                   );
                                   $.module$build$src$core$events$events.setGroup(
                                        !1
                                   );
                              }
                         } else
                              a.type ===
                              $.module$build$src$core$events$events.BLOCK_DELETE
                                   ? ((b = this.getProcedureCall()),
                                     $.module$build$src$core$procedures.getDefinition(
                                          b,
                                          this.workspace
                                     ) ||
                                          ($.module$build$src$core$events$events.setGroup(
                                               a.group
                                          ),
                                          this.dispose(!0),
                                          $.module$build$src$core$events$events.setGroup(
                                               !1
                                          )))
                                   : a.type ===
                                          $.module$build$src$core$events$events
                                               .CHANGE &&
                                     "disabled" === a.element &&
                                     ((b = this.getProcedureCall()),
                                     (b =
                                          $.module$build$src$core$procedures.getDefinition(
                                               b,
                                               this.workspace
                                          )) &&
                                          b.id === a.blockId &&
                                          ((b =
                                               $.module$build$src$core$events$events.getGroup()) &&
                                               console.log(
                                                    "Saw an existing group while responding to a definition change"
                                               ),
                                          $.module$build$src$core$events$events.setGroup(
                                               a.group
                                          ),
                                          a.newValue
                                               ? ((this.previousEnabledState_ =
                                                      this.isEnabled()),
                                                 this.setEnabled(!1))
                                               : this.setEnabled(
                                                      this.previousEnabledState_
                                                 ),
                                          $.module$build$src$core$events$events.setGroup(
                                               b
                                          )));
               },
               customContextMenu: function (a) {
                    if (this.workspace.isMovable()) {
                         var b = { enabled: !0 };
                         b.text =
                              module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_HIGHLIGHT_DEF;
                         var c = this.getProcedureCall(),
                              d = this.workspace;
                         b.callback = function () {
                              const e =
                                   $.module$build$src$core$procedures.getDefinition(
                                        c,
                                        d
                                   );
                              e && (d.centerOnBlock(e.id), e.select());
                         };
                         a.push(b);
                    }
               },
          };
     module$exports$Blockly$libraryBlocks$procedures.blocks.procedures_callnoreturn =
          Object.assign(
               {},
               module$contents$Blockly$libraryBlocks$procedures_PROCEDURE_CALL_COMMON,
               {
                    init: function () {
                         this.appendDummyInput("TOPROW").appendField(
                              "",
                              "NAME"
                         );
                         this.setPreviousStatement(!0);
                         this.setNextStatement(!0);
                         this.setStyle("procedure_blocks");
                         this.setHelpUrl(
                              module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_CALLNORETURN_HELPURL
                         );
                         this.arguments_ = [];
                         this.argumentVarModels_ = [];
                         this.quarkConnections_ = {};
                         this.quarkIds_ = null;
                         this.previousEnabledState_ = !0;
                    },
                    defType_: "procedures_defnoreturn",
               }
          );
     module$exports$Blockly$libraryBlocks$procedures.blocks.procedures_callreturn =
          Object.assign(
               {},
               module$contents$Blockly$libraryBlocks$procedures_PROCEDURE_CALL_COMMON,
               {
                    init: function () {
                         this.appendDummyInput("TOPROW").appendField(
                              "",
                              "NAME"
                         );
                         this.setOutput(!0);
                         this.setStyle("procedure_blocks");
                         this.setHelpUrl(
                              module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_CALLRETURN_HELPURL
                         );
                         this.arguments_ = [];
                         this.argumentVarModels_ = [];
                         this.quarkConnections_ = {};
                         this.quarkIds_ = null;
                         this.previousEnabledState_ = !0;
                    },
                    defType_: "procedures_defreturn",
               }
          );
     module$exports$Blockly$libraryBlocks$procedures.blocks.procedures_ifreturn =
          {
               init: function () {
                    this.appendValueInput("CONDITION")
                         .setCheck("Boolean")
                         .appendField(
                              module$contents$Blockly$libraryBlocks$procedures_Msg.CONTROLS_IF_MSG_IF
                         );
                    this.appendValueInput("VALUE").appendField(
                         module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_DEFRETURN_RETURN
                    );
                    this.setInputsInline(!0);
                    this.setPreviousStatement(!0);
                    this.setNextStatement(!0);
                    this.setStyle("procedure_blocks");
                    this.setTooltip(
                         module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_IFRETURN_TOOLTIP
                    );
                    this.setHelpUrl(
                         module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_IFRETURN_HELPURL
                    );
                    this.hasReturnValue_ = !0;
               },
               mutationToDom: function () {
                    const a =
                         $.module$build$src$core$utils$xml.createElement(
                              "mutation"
                         );
                    a.setAttribute("value", Number(this.hasReturnValue_));
                    return a;
               },
               domToMutation: function (a) {
                    this.hasReturnValue_ = "1" === a.getAttribute("value");
                    this.hasReturnValue_ ||
                         (this.removeInput("VALUE"),
                         this.appendDummyInput("VALUE").appendField(
                              module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_DEFRETURN_RETURN
                         ));
               },
               onchange: function (a) {
                    if (
                         !(
                              (this.workspace.isDragging &&
                                   this.workspace.isDragging()) ||
                              a.type !==
                                   $.module$build$src$core$events$events
                                        .BLOCK_MOVE
                         )
                    ) {
                         var b = !1,
                              c = this;
                         do {
                              if (-1 !== this.FUNCTION_TYPES.indexOf(c.type)) {
                                   b = !0;
                                   break;
                              }
                              c = c.getSurroundParent();
                         } while (c);
                         b
                              ? ("procedures_defnoreturn" === c.type &&
                                this.hasReturnValue_
                                     ? (this.removeInput("VALUE"),
                                       this.appendDummyInput(
                                            "VALUE"
                                       ).appendField(
                                            module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_DEFRETURN_RETURN
                                       ),
                                       (this.hasReturnValue_ = !1))
                                     : "procedures_defreturn" !== c.type ||
                                       this.hasReturnValue_ ||
                                       (this.removeInput("VALUE"),
                                       this.appendValueInput(
                                            "VALUE"
                                       ).appendField(
                                            module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_DEFRETURN_RETURN
                                       ),
                                       (this.hasReturnValue_ = !0)),
                                this.setWarningText(null))
                              : this.setWarningText(
                                     module$contents$Blockly$libraryBlocks$procedures_Msg.PROCEDURES_IFRETURN_WARNING
                                );
                         this.isInFlyout ||
                              ((c =
                                   $.module$build$src$core$events$events.getGroup()),
                              $.module$build$src$core$events$events.setGroup(
                                   a.group
                              ),
                              this.setEnabled(b),
                              $.module$build$src$core$events$events.setGroup(
                                   c
                              ));
                    }
               },
               FUNCTION_TYPES: [
                    "procedures_defnoreturn",
                    "procedures_defreturn",
               ],
          };
     module$contents$Blockly$libraryBlocks$procedures_defineBlocks(
          module$exports$Blockly$libraryBlocks$procedures.blocks
     );
     var module$exports$Blockly$libraryBlocks$math = {},
          module$contents$Blockly$libraryBlocks$math_Extensions =
               $.module$build$src$core$extensions,
          module$contents$Blockly$libraryBlocks$math_FieldDropdown =
               $.module$build$src$core$field_dropdown,
          module$contents$Blockly$libraryBlocks$math_xmlUtils =
               $.module$build$src$core$utils$xml,
          module$contents$Blockly$libraryBlocks$math_BlockDefinition = Object,
          module$contents$Blockly$libraryBlocks$math_createBlockDefinitionsFromJsonArray =
               $.module$build$src$core$common
                    .createBlockDefinitionsFromJsonArray,
          module$contents$Blockly$libraryBlocks$math_defineBlocks =
               $.module$build$src$core$common.defineBlocks;
     module$exports$Blockly$libraryBlocks$math.blocks =
          module$contents$Blockly$libraryBlocks$math_createBlockDefinitionsFromJsonArray(
               [
                    {
                         type: "math_number",
                         message0: "%1",
                         args0: [
                              { type: "field_number", name: "NUM", value: 0 },
                         ],
                         output: "Number",
                         helpUrl: "%{BKY_MATH_NUMBER_HELPURL}",
                         style: "math_blocks",
                         tooltip: "%{BKY_MATH_NUMBER_TOOLTIP}",
                         extensions: ["parent_tooltip_when_inline"],
                    },
                    {
                         type: "math_arithmetic",
                         message0: "%1 %2 %3",
                         args0: [
                              {
                                   type: "input_value",
                                   name: "A",
                                   check: "Number",
                              },
                              {
                                   type: "field_dropdown",
                                   name: "OP",
                                   options: [
                                        ["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"],
                                        [
                                             "%{BKY_MATH_SUBTRACTION_SYMBOL}",
                                             "MINUS",
                                        ],
                                        [
                                             "%{BKY_MATH_MULTIPLICATION_SYMBOL}",
                                             "MULTIPLY",
                                        ],
                                        [
                                             "%{BKY_MATH_DIVISION_SYMBOL}",
                                             "DIVIDE",
                                        ],
                                        ["%{BKY_MATH_POWER_SYMBOL}", "POWER"],
                                   ],
                              },
                              {
                                   type: "input_value",
                                   name: "B",
                                   check: "Number",
                              },
                         ],
                         inputsInline: !0,
                         output: "Number",
                         style: "math_blocks",
                         helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}",
                         extensions: ["math_op_tooltip"],
                    },
                    {
                         type: "math_single",
                         message0: "%1 %2",
                         args0: [
                              {
                                   type: "field_dropdown",
                                   name: "OP",
                                   options: [
                                        ["%{BKY_MATH_SINGLE_OP_ROOT}", "ROOT"],
                                        [
                                             "%{BKY_MATH_SINGLE_OP_ABSOLUTE}",
                                             "ABS",
                                        ],
                                        ["-", "NEG"],
                                        ["ln", "LN"],
                                        ["log10", "LOG10"],
                                        ["e^", "EXP"],
                                        ["10^", "POW10"],
                                   ],
                              },
                              {
                                   type: "input_value",
                                   name: "NUM",
                                   check: "Number",
                              },
                         ],
                         output: "Number",
                         style: "math_blocks",
                         helpUrl: "%{BKY_MATH_SINGLE_HELPURL}",
                         extensions: ["math_op_tooltip"],
                    },
                    {
                         type: "math_trig",
                         message0: "%1 %2",
                         args0: [
                              {
                                   type: "field_dropdown",
                                   name: "OP",
                                   options: [
                                        ["%{BKY_MATH_TRIG_SIN}", "SIN"],
                                        ["%{BKY_MATH_TRIG_COS}", "COS"],
                                        ["%{BKY_MATH_TRIG_TAN}", "TAN"],
                                        ["%{BKY_MATH_TRIG_ASIN}", "ASIN"],
                                        ["%{BKY_MATH_TRIG_ACOS}", "ACOS"],
                                        ["%{BKY_MATH_TRIG_ATAN}", "ATAN"],
                                   ],
                              },
                              {
                                   type: "input_value",
                                   name: "NUM",
                                   check: "Number",
                              },
                         ],
                         output: "Number",
                         style: "math_blocks",
                         helpUrl: "%{BKY_MATH_TRIG_HELPURL}",
                         extensions: ["math_op_tooltip"],
                    },
                    {
                         type: "math_constant",
                         message0: "%1",
                         args0: [
                              {
                                   type: "field_dropdown",
                                   name: "CONSTANT",
                                   options: [
                                        ["\u03c0", "PI"],
                                        ["e", "E"],
                                        ["\u03c6", "GOLDEN_RATIO"],
                                        ["sqrt(2)", "SQRT2"],
                                        ["sqrt(\u00bd)", "SQRT1_2"],
                                        ["\u221e", "INFINITY"],
                                   ],
                              },
                         ],
                         output: "Number",
                         style: "math_blocks",
                         tooltip: "%{BKY_MATH_CONSTANT_TOOLTIP}",
                         helpUrl: "%{BKY_MATH_CONSTANT_HELPURL}",
                    },
                    {
                         type: "math_number_property",
                         message0: "%1 %2",
                         args0: [
                              {
                                   type: "input_value",
                                   name: "NUMBER_TO_CHECK",
                                   check: "Number",
                              },
                              {
                                   type: "field_dropdown",
                                   name: "PROPERTY",
                                   options: [
                                        ["%{BKY_MATH_IS_EVEN}", "EVEN"],
                                        ["%{BKY_MATH_IS_ODD}", "ODD"],
                                        ["%{BKY_MATH_IS_PRIME}", "PRIME"],
                                        ["%{BKY_MATH_IS_WHOLE}", "WHOLE"],
                                        ["%{BKY_MATH_IS_POSITIVE}", "POSITIVE"],
                                        ["%{BKY_MATH_IS_NEGATIVE}", "NEGATIVE"],
                                        [
                                             "%{BKY_MATH_IS_DIVISIBLE_BY}",
                                             "DIVISIBLE_BY",
                                        ],
                                   ],
                              },
                         ],
                         inputsInline: !0,
                         output: "Boolean",
                         style: "math_blocks",
                         tooltip: "%{BKY_MATH_IS_TOOLTIP}",
                         mutator: "math_is_divisibleby_mutator",
                    },
                    {
                         type: "math_change",
                         message0: "%{BKY_MATH_CHANGE_TITLE}",
                         args0: [
                              {
                                   type: "field_variable",
                                   name: "VAR",
                                   variable: "%{BKY_MATH_CHANGE_TITLE_ITEM}",
                              },
                              {
                                   type: "input_value",
                                   name: "DELTA",
                                   check: "Number",
                              },
                         ],
                         previousStatement: null,
                         nextStatement: null,
                         style: "variable_blocks",
                         helpUrl: "%{BKY_MATH_CHANGE_HELPURL}",
                         extensions: ["math_change_tooltip"],
                    },
                    {
                         type: "math_round",
                         message0: "%1 %2",
                         args0: [
                              {
                                   type: "field_dropdown",
                                   name: "OP",
                                   options: [
                                        [
                                             "%{BKY_MATH_ROUND_OPERATOR_ROUND}",
                                             "ROUND",
                                        ],
                                        [
                                             "%{BKY_MATH_ROUND_OPERATOR_ROUNDUP}",
                                             "ROUNDUP",
                                        ],
                                        [
                                             "%{BKY_MATH_ROUND_OPERATOR_ROUNDDOWN}",
                                             "ROUNDDOWN",
                                        ],
                                   ],
                              },
                              {
                                   type: "input_value",
                                   name: "NUM",
                                   check: "Number",
                              },
                         ],
                         output: "Number",
                         style: "math_blocks",
                         helpUrl: "%{BKY_MATH_ROUND_HELPURL}",
                         tooltip: "%{BKY_MATH_ROUND_TOOLTIP}",
                    },
                    {
                         type: "math_on_list",
                         message0: "%1 %2",
                         args0: [
                              {
                                   type: "field_dropdown",
                                   name: "OP",
                                   options: [
                                        [
                                             "%{BKY_MATH_ONLIST_OPERATOR_SUM}",
                                             "SUM",
                                        ],
                                        [
                                             "%{BKY_MATH_ONLIST_OPERATOR_MIN}",
                                             "MIN",
                                        ],
                                        [
                                             "%{BKY_MATH_ONLIST_OPERATOR_MAX}",
                                             "MAX",
                                        ],
                                        [
                                             "%{BKY_MATH_ONLIST_OPERATOR_AVERAGE}",
                                             "AVERAGE",
                                        ],
                                        [
                                             "%{BKY_MATH_ONLIST_OPERATOR_MEDIAN}",
                                             "MEDIAN",
                                        ],
                                        [
                                             "%{BKY_MATH_ONLIST_OPERATOR_MODE}",
                                             "MODE",
                                        ],
                                        [
                                             "%{BKY_MATH_ONLIST_OPERATOR_STD_DEV}",
                                             "STD_DEV",
                                        ],
                                        [
                                             "%{BKY_MATH_ONLIST_OPERATOR_RANDOM}",
                                             "RANDOM",
                                        ],
                                   ],
                              },
                              {
                                   type: "input_value",
                                   name: "LIST",
                                   check: "Array",
                              },
                         ],
                         output: "Number",
                         style: "math_blocks",
                         helpUrl: "%{BKY_MATH_ONLIST_HELPURL}",
                         mutator: "math_modes_of_list_mutator",
                         extensions: ["math_op_tooltip"],
                    },
                    {
                         type: "math_modulo",
                         message0: "%{BKY_MATH_MODULO_TITLE}",
                         args0: [
                              {
                                   type: "input_value",
                                   name: "DIVIDEND",
                                   check: "Number",
                              },
                              {
                                   type: "input_value",
                                   name: "DIVISOR",
                                   check: "Number",
                              },
                         ],
                         inputsInline: !0,
                         output: "Number",
                         style: "math_blocks",
                         tooltip: "%{BKY_MATH_MODULO_TOOLTIP}",
                         helpUrl: "%{BKY_MATH_MODULO_HELPURL}",
                    },
                    {
                         type: "math_constrain",
                         message0: "%{BKY_MATH_CONSTRAIN_TITLE}",
                         args0: [
                              {
                                   type: "input_value",
                                   name: "VALUE",
                                   check: "Number",
                              },
                              {
                                   type: "input_value",
                                   name: "LOW",
                                   check: "Number",
                              },
                              {
                                   type: "input_value",
                                   name: "HIGH",
                                   check: "Number",
                              },
                         ],
                         inputsInline: !0,
                         output: "Number",
                         style: "math_blocks",
                         tooltip: "%{BKY_MATH_CONSTRAIN_TOOLTIP}",
                         helpUrl: "%{BKY_MATH_CONSTRAIN_HELPURL}",
                    },
                    {
                         type: "math_random_int",
                         message0: "%{BKY_MATH_RANDOM_INT_TITLE}",
                         args0: [
                              {
                                   type: "input_value",
                                   name: "FROM",
                                   check: "Number",
                              },
                              {
                                   type: "input_value",
                                   name: "TO",
                                   check: "Number",
                              },
                         ],
                         inputsInline: !0,
                         output: "Number",
                         style: "math_blocks",
                         tooltip: "%{BKY_MATH_RANDOM_INT_TOOLTIP}",
                         helpUrl: "%{BKY_MATH_RANDOM_INT_HELPURL}",
                    },
                    {
                         type: "math_random_float",
                         message0: "%{BKY_MATH_RANDOM_FLOAT_TITLE_RANDOM}",
                         output: "Number",
                         style: "math_blocks",
                         tooltip: "%{BKY_MATH_RANDOM_FLOAT_TOOLTIP}",
                         helpUrl: "%{BKY_MATH_RANDOM_FLOAT_HELPURL}",
                    },
                    {
                         type: "math_atan2",
                         message0: "%{BKY_MATH_ATAN2_TITLE}",
                         args0: [
                              {
                                   type: "input_value",
                                   name: "X",
                                   check: "Number",
                              },
                              {
                                   type: "input_value",
                                   name: "Y",
                                   check: "Number",
                              },
                         ],
                         inputsInline: !0,
                         output: "Number",
                         style: "math_blocks",
                         tooltip: "%{BKY_MATH_ATAN2_TOOLTIP}",
                         helpUrl: "%{BKY_MATH_ATAN2_HELPURL}",
                    },
               ]
          );
     var module$contents$Blockly$libraryBlocks$math_TOOLTIPS_BY_OP = {
          ADD: "%{BKY_MATH_ARITHMETIC_TOOLTIP_ADD}",
          MINUS: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MINUS}",
          MULTIPLY: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MULTIPLY}",
          DIVIDE: "%{BKY_MATH_ARITHMETIC_TOOLTIP_DIVIDE}",
          POWER: "%{BKY_MATH_ARITHMETIC_TOOLTIP_POWER}",
          ROOT: "%{BKY_MATH_SINGLE_TOOLTIP_ROOT}",
          ABS: "%{BKY_MATH_SINGLE_TOOLTIP_ABS}",
          NEG: "%{BKY_MATH_SINGLE_TOOLTIP_NEG}",
          LN: "%{BKY_MATH_SINGLE_TOOLTIP_LN}",
          LOG10: "%{BKY_MATH_SINGLE_TOOLTIP_LOG10}",
          EXP: "%{BKY_MATH_SINGLE_TOOLTIP_EXP}",
          POW10: "%{BKY_MATH_SINGLE_TOOLTIP_POW10}",
          SIN: "%{BKY_MATH_TRIG_TOOLTIP_SIN}",
          COS: "%{BKY_MATH_TRIG_TOOLTIP_COS}",
          TAN: "%{BKY_MATH_TRIG_TOOLTIP_TAN}",
          ASIN: "%{BKY_MATH_TRIG_TOOLTIP_ASIN}",
          ACOS: "%{BKY_MATH_TRIG_TOOLTIP_ACOS}",
          ATAN: "%{BKY_MATH_TRIG_TOOLTIP_ATAN}",
          SUM: "%{BKY_MATH_ONLIST_TOOLTIP_SUM}",
          MIN: "%{BKY_MATH_ONLIST_TOOLTIP_MIN}",
          MAX: "%{BKY_MATH_ONLIST_TOOLTIP_MAX}",
          AVERAGE: "%{BKY_MATH_ONLIST_TOOLTIP_AVERAGE}",
          MEDIAN: "%{BKY_MATH_ONLIST_TOOLTIP_MEDIAN}",
          MODE: "%{BKY_MATH_ONLIST_TOOLTIP_MODE}",
          STD_DEV: "%{BKY_MATH_ONLIST_TOOLTIP_STD_DEV}",
          RANDOM: "%{BKY_MATH_ONLIST_TOOLTIP_RANDOM}",
     };
     $.module$build$src$core$extensions.register(
          "math_op_tooltip",
          $.module$build$src$core$extensions.buildTooltipForDropdown(
               "OP",
               module$contents$Blockly$libraryBlocks$math_TOOLTIPS_BY_OP
          )
     );
     var module$contents$Blockly$libraryBlocks$math_IS_DIVISIBLEBY_MUTATOR_MIXIN =
               {
                    mutationToDom: function () {
                         const a =
                                   $.module$build$src$core$utils$xml.createElement(
                                        "mutation"
                                   ),
                              b =
                                   "DIVISIBLE_BY" ===
                                   this.getFieldValue("PROPERTY");
                         a.setAttribute("divisor_input", b);
                         return a;
                    },
                    domToMutation: function (a) {
                         a = "true" === a.getAttribute("divisor_input");
                         this.updateShape_(a);
                    },
                    updateShape_: function (a) {
                         const b = this.getInput("DIVISOR");
                         a
                              ? b ||
                                this.appendValueInput("DIVISOR").setCheck(
                                     "Number"
                                )
                              : b && this.removeInput("DIVISOR");
                    },
               },
          module$contents$Blockly$libraryBlocks$math_IS_DIVISIBLE_MUTATOR_EXTENSION =
               function () {
                    this.getField("PROPERTY").setValidator(function (a) {
                         a = "DIVISIBLE_BY" === a;
                         this.getSourceBlock().updateShape_(a);
                    });
               };
     $.module$build$src$core$extensions.registerMutator(
          "math_is_divisibleby_mutator",
          module$contents$Blockly$libraryBlocks$math_IS_DIVISIBLEBY_MUTATOR_MIXIN,
          module$contents$Blockly$libraryBlocks$math_IS_DIVISIBLE_MUTATOR_EXTENSION
     );
     $.module$build$src$core$extensions.register(
          "math_change_tooltip",
          $.module$build$src$core$extensions.buildTooltipWithFieldText(
               "%{BKY_MATH_CHANGE_TOOLTIP}",
               "VAR"
          )
     );
     var module$contents$Blockly$libraryBlocks$math_LIST_MODES_MUTATOR_MIXIN = {
               updateType_: function (a) {
                    "MODE" === a
                         ? this.outputConnection.setCheck("Array")
                         : this.outputConnection.setCheck("Number");
               },
               mutationToDom: function () {
                    const a =
                         $.module$build$src$core$utils$xml.createElement(
                              "mutation"
                         );
                    a.setAttribute("op", this.getFieldValue("OP"));
                    return a;
               },
               domToMutation: function (a) {
                    this.updateType_(a.getAttribute("op"));
               },
          },
          module$contents$Blockly$libraryBlocks$math_LIST_MODES_MUTATOR_EXTENSION =
               function () {
                    this.getField("OP").setValidator(
                         function (a) {
                              this.updateType_(a);
                         }.bind(this)
                    );
               };
     $.module$build$src$core$extensions.registerMutator(
          "math_modes_of_list_mutator",
          module$contents$Blockly$libraryBlocks$math_LIST_MODES_MUTATOR_MIXIN,
          module$contents$Blockly$libraryBlocks$math_LIST_MODES_MUTATOR_EXTENSION
     );
     module$contents$Blockly$libraryBlocks$math_defineBlocks(
          module$exports$Blockly$libraryBlocks$math.blocks
     );
     var module$exports$Blockly$libraryBlocks$loops = {},
          module$contents$Blockly$libraryBlocks$loops_ContextMenu =
               $.module$build$src$core$contextmenu,
          module$contents$Blockly$libraryBlocks$loops_Events =
               $.module$build$src$core$events$events,
          module$contents$Blockly$libraryBlocks$loops_Extensions =
               $.module$build$src$core$extensions,
          module$contents$Blockly$libraryBlocks$loops_Variables =
               $.module$build$src$core$variables,
          module$contents$Blockly$libraryBlocks$loops_xmlUtils =
               $.module$build$src$core$utils$xml,
          module$contents$Blockly$libraryBlocks$loops_BlockDefinition = Object,
          module$contents$Blockly$libraryBlocks$loops_Msg =
               $.module$build$src$core$msg.Msg,
          module$contents$Blockly$libraryBlocks$loops_createBlockDefinitionsFromJsonArray =
               $.module$build$src$core$common
                    .createBlockDefinitionsFromJsonArray,
          module$contents$Blockly$libraryBlocks$loops_defineBlocks =
               $.module$build$src$core$common.defineBlocks;
     module$exports$Blockly$libraryBlocks$loops.blocks =
          module$contents$Blockly$libraryBlocks$loops_createBlockDefinitionsFromJsonArray(
               [
                    {
                         type: "controls_repeat_ext",
                         message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
                         args0: [
                              {
                                   type: "input_value",
                                   name: "TIMES",
                                   check: "Number",
                              },
                         ],
                         message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
                         args1: [{ type: "input_statement", name: "DO" }],
                         previousStatement: null,
                         nextStatement: null,
                         style: "loop_blocks",
                         tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
                         helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}",
                    },
                    {
                         type: "controls_repeat",
                         message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
                         args0: [
                              {
                                   type: "field_number",
                                   name: "TIMES",
                                   value: 10,
                                   min: 0,
                                   precision: 1,
                              },
                         ],
                         message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
                         args1: [{ type: "input_statement", name: "DO" }],
                         previousStatement: null,
                         nextStatement: null,
                         style: "loop_blocks",
                         tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
                         helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}",
                    },
                    {
                         type: "controls_whileUntil",
                         message0: "%1 %2",
                         args0: [
                              {
                                   type: "field_dropdown",
                                   name: "MODE",
                                   options: [
                                        [
                                             "%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_WHILE}",
                                             "WHILE",
                                        ],
                                        [
                                             "%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL}",
                                             "UNTIL",
                                        ],
                                   ],
                              },
                              {
                                   type: "input_value",
                                   name: "BOOL",
                                   check: "Boolean",
                              },
                         ],
                         message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
                         args1: [{ type: "input_statement", name: "DO" }],
                         previousStatement: null,
                         nextStatement: null,
                         style: "loop_blocks",
                         helpUrl: "%{BKY_CONTROLS_WHILEUNTIL_HELPURL}",
                         extensions: ["controls_whileUntil_tooltip"],
                    },
                    {
                         type: "controls_for",
                         message0: "%{BKY_CONTROLS_FOR_TITLE}",
                         args0: [
                              {
                                   type: "field_variable",
                                   name: "VAR",
                                   variable: null,
                              },
                              {
                                   type: "input_value",
                                   name: "FROM",
                                   check: "Number",
                                   align: "RIGHT",
                              },
                              {
                                   type: "input_value",
                                   name: "TO",
                                   check: "Number",
                                   align: "RIGHT",
                              },
                              {
                                   type: "input_value",
                                   name: "BY",
                                   check: "Number",
                                   align: "RIGHT",
                              },
                         ],
                         message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
                         args1: [{ type: "input_statement", name: "DO" }],
                         inputsInline: !0,
                         previousStatement: null,
                         nextStatement: null,
                         style: "loop_blocks",
                         helpUrl: "%{BKY_CONTROLS_FOR_HELPURL}",
                         extensions: [
                              "contextMenu_newGetVariableBlock",
                              "controls_for_tooltip",
                         ],
                    },
                    {
                         type: "controls_forEach",
                         message0: "%{BKY_CONTROLS_FOREACH_TITLE}",
                         args0: [
                              {
                                   type: "field_variable",
                                   name: "VAR",
                                   variable: null,
                              },
                              {
                                   type: "input_value",
                                   name: "LIST",
                                   check: "Array",
                              },
                         ],
                         message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
                         args1: [{ type: "input_statement", name: "DO" }],
                         previousStatement: null,
                         nextStatement: null,
                         style: "loop_blocks",
                         helpUrl: "%{BKY_CONTROLS_FOREACH_HELPURL}",
                         extensions: [
                              "contextMenu_newGetVariableBlock",
                              "controls_forEach_tooltip",
                         ],
                    },
                    {
                         type: "controls_flow_statements",
                         message0: "%1",
                         args0: [
                              {
                                   type: "field_dropdown",
                                   name: "FLOW",
                                   options: [
                                        [
                                             "%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK}",
                                             "BREAK",
                                        ],
                                        [
                                             "%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE}",
                                             "CONTINUE",
                                        ],
                                   ],
                              },
                         ],
                         previousStatement: null,
                         style: "loop_blocks",
                         helpUrl: "%{BKY_CONTROLS_FLOW_STATEMENTS_HELPURL}",
                         suppressPrefixSuffix: !0,
                         extensions: [
                              "controls_flow_tooltip",
                              "controls_flow_in_loop_check",
                         ],
                    },
               ]
          );
     var module$contents$Blockly$libraryBlocks$loops_WHILE_UNTIL_TOOLTIPS = {
          WHILE: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE}",
          UNTIL: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL}",
     };
     $.module$build$src$core$extensions.register(
          "controls_whileUntil_tooltip",
          $.module$build$src$core$extensions.buildTooltipForDropdown(
               "MODE",
               module$contents$Blockly$libraryBlocks$loops_WHILE_UNTIL_TOOLTIPS
          )
     );
     var module$contents$Blockly$libraryBlocks$loops_BREAK_CONTINUE_TOOLTIPS = {
          BREAK: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK}",
          CONTINUE: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE}",
     };
     $.module$build$src$core$extensions.register(
          "controls_flow_tooltip",
          $.module$build$src$core$extensions.buildTooltipForDropdown(
               "FLOW",
               module$contents$Blockly$libraryBlocks$loops_BREAK_CONTINUE_TOOLTIPS
          )
     );
     var module$contents$Blockly$libraryBlocks$loops_CUSTOM_CONTEXT_MENU_CREATE_VARIABLES_GET_MIXIN =
          {
               customContextMenu: function (a) {
                    if (!this.isInFlyout) {
                         var b = this.getField("VAR").getVariable(),
                              c = b.name;
                         if (!this.isCollapsed() && null !== c) {
                              const d = { enabled: !0 };
                              d.text =
                                   module$contents$Blockly$libraryBlocks$loops_Msg.VARIABLES_SET_CREATE_GET.replace(
                                        "%1",
                                        c
                                   );
                              b =
                                   $.module$build$src$core$variables.generateVariableFieldDom(
                                        b
                                   );
                              c =
                                   $.module$build$src$core$utils$xml.createElement(
                                        "block"
                                   );
                              c.setAttribute("type", "variables_get");
                              c.appendChild(b);
                              d.callback =
                                   $.module$build$src$core$contextmenu.callbackFactory(
                                        this,
                                        c
                                   );
                              a.push(d);
                         }
                    }
               },
          };
     $.module$build$src$core$extensions.registerMixin(
          "contextMenu_newGetVariableBlock",
          module$contents$Blockly$libraryBlocks$loops_CUSTOM_CONTEXT_MENU_CREATE_VARIABLES_GET_MIXIN
     );
     $.module$build$src$core$extensions.register(
          "controls_for_tooltip",
          $.module$build$src$core$extensions.buildTooltipWithFieldText(
               "%{BKY_CONTROLS_FOR_TOOLTIP}",
               "VAR"
          )
     );
     $.module$build$src$core$extensions.register(
          "controls_forEach_tooltip",
          $.module$build$src$core$extensions.buildTooltipWithFieldText(
               "%{BKY_CONTROLS_FOREACH_TOOLTIP}",
               "VAR"
          )
     );
     module$exports$Blockly$libraryBlocks$loops.loopTypes = new Set([
          "controls_repeat",
          "controls_repeat_ext",
          "controls_forEach",
          "controls_for",
          "controls_whileUntil",
     ]);
     var module$contents$Blockly$libraryBlocks$loops_CONTROL_FLOW_IN_LOOP_CHECK_MIXIN =
          {
               getSurroundLoop: function () {
                    let a = this;
                    do {
                         if (
                              module$exports$Blockly$libraryBlocks$loops.loopTypes.has(
                                   a.type
                              )
                         )
                              return a;
                         a = a.getSurroundParent();
                    } while (a);
                    return null;
               },
               onchange: function (a) {
                    if (
                         this.workspace.isDragging &&
                         !this.workspace.isDragging() &&
                         a.type ===
                              $.module$build$src$core$events$events.BLOCK_MOVE
                    ) {
                         var b = this.getSurroundLoop(this);
                         this.setWarningText(
                              b
                                   ? null
                                   : module$contents$Blockly$libraryBlocks$loops_Msg.CONTROLS_FLOW_STATEMENTS_WARNING
                         );
                         if (!this.isInFlyout) {
                              const c =
                                   $.module$build$src$core$events$events.getGroup();
                              $.module$build$src$core$events$events.setGroup(
                                   a.group
                              );
                              this.setEnabled(b);
                              $.module$build$src$core$events$events.setGroup(c);
                         }
                    }
               },
          };
     $.module$build$src$core$extensions.registerMixin(
          "controls_flow_in_loop_check",
          module$contents$Blockly$libraryBlocks$loops_CONTROL_FLOW_IN_LOOP_CHECK_MIXIN
     );
     module$contents$Blockly$libraryBlocks$loops_defineBlocks(
          module$exports$Blockly$libraryBlocks$loops.blocks
     );
     var module$exports$Blockly$libraryBlocks$logic = {},
          module$contents$Blockly$libraryBlocks$logic_Events =
               $.module$build$src$core$events$events,
          module$contents$Blockly$libraryBlocks$logic_Extensions =
               $.module$build$src$core$extensions,
          module$contents$Blockly$libraryBlocks$logic_xmlUtils =
               $.module$build$src$core$utils$xml,
          module$contents$Blockly$libraryBlocks$logic_BlockDefinition = Object,
          module$contents$Blockly$libraryBlocks$logic_Msg =
               $.module$build$src$core$msg.Msg,
          module$contents$Blockly$libraryBlocks$logic_Mutator =
               $.Mutator$$module$build$src$core$mutator,
          module$contents$Blockly$libraryBlocks$logic_createBlockDefinitionsFromJsonArray =
               $.module$build$src$core$common
                    .createBlockDefinitionsFromJsonArray,
          module$contents$Blockly$libraryBlocks$logic_defineBlocks =
               $.module$build$src$core$common.defineBlocks;
     module$exports$Blockly$libraryBlocks$logic.blocks =
          module$contents$Blockly$libraryBlocks$logic_createBlockDefinitionsFromJsonArray(
               [
                    {
                         type: "logic_boolean",
                         message0: "%1",
                         args0: [
                              {
                                   type: "field_dropdown",
                                   name: "BOOL",
                                   options: [
                                        ["%{BKY_LOGIC_BOOLEAN_TRUE}", "TRUE"],
                                        ["%{BKY_LOGIC_BOOLEAN_FALSE}", "FALSE"],
                                   ],
                              },
                         ],
                         output: "Boolean",
                         style: "logic_blocks",
                         tooltip: "%{BKY_LOGIC_BOOLEAN_TOOLTIP}",
                         helpUrl: "%{BKY_LOGIC_BOOLEAN_HELPURL}",
                    },
                    {
                         type: "controls_if",
                         message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
                         args0: [
                              {
                                   type: "input_value",
                                   name: "IF0",
                                   check: "Boolean",
                              },
                         ],
                         message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
                         args1: [{ type: "input_statement", name: "DO0" }],
                         previousStatement: null,
                         nextStatement: null,
                         style: "loop_blocks",
                         helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
                         suppressPrefixSuffix: !0,
                         mutator: "controls_if_mutator",
                         extensions: ["controls_if_tooltip"],
                    },
                    {
                         type: "controls_ifelse",
                         message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
                         args0: [
                              {
                                   type: "input_value",
                                   name: "IF0",
                                   check: "Boolean",
                              },
                         ],
                         message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
                         args1: [{ type: "input_statement", name: "DO0" }],
                         message2: "%{BKY_CONTROLS_IF_MSG_ELSE} %1",
                         args2: [{ type: "input_statement", name: "ELSE" }],
                         previousStatement: null,
                         nextStatement: null,
                         style: "loop_blocks",
                         tooltip: "%{BKYCONTROLS_IF_TOOLTIP_2}",
                         helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
                         suppressPrefixSuffix: !0,
                         extensions: ["controls_if_tooltip"],
                    },
                    {
                         type: "logic_compare",
                         message0: "%1 %2 %3",
                         args0: [
                              { type: "input_value", name: "A" },
                              {
                                   type: "field_dropdown",
                                   name: "OP",
                                   options: [
                                        ["=", "EQ"],
                                        ["\u2260", "NEQ"],
                                        ["\u200f<", "LT"],
                                        ["\u200f\u2264", "LTE"],
                                        ["\u200f>", "GT"],
                                        ["\u200f\u2265", "GTE"],
                                   ],
                              },
                              { type: "input_value", name: "B" },
                         ],
                         inputsInline: !0,
                         output: "Boolean",
                         style: "logic_blocks",
                         helpUrl: "%{BKY_LOGIC_COMPARE_HELPURL}",
                         extensions: ["logic_compare", "logic_op_tooltip"],
                    },
                    {
                         type: "logic_operation",
                         message0: "%1 %2 %3",
                         args0: [
                              {
                                   type: "input_value",
                                   name: "A",
                                   check: "Boolean",
                              },
                              {
                                   type: "field_dropdown",
                                   name: "OP",
                                   options: [
                                        ["%{BKY_LOGIC_OPERATION_AND}", "AND"],
                                        ["%{BKY_LOGIC_OPERATION_OR}", "OR"],
                                   ],
                              },
                              {
                                   type: "input_value",
                                   name: "B",
                                   check: "Boolean",
                              },
                         ],
                         inputsInline: !0,
                         output: "Boolean",
                         style: "logic_blocks",
                         helpUrl: "%{BKY_LOGIC_OPERATION_HELPURL}",
                         extensions: ["logic_op_tooltip"],
                    },
                    {
                         type: "logic_negate",
                         message0: "%{BKY_LOGIC_NEGATE_TITLE}",
                         args0: [
                              {
                                   type: "input_value",
                                   name: "BOOL",
                                   check: "Boolean",
                              },
                         ],
                         output: "Boolean",
                         style: "logic_blocks",
                         tooltip: "%{BKY_LOGIC_NEGATE_TOOLTIP}",
                         helpUrl: "%{BKY_LOGIC_NEGATE_HELPURL}",
                    },
                    {
                         type: "logic_null",
                         message0: "%{BKY_LOGIC_NULL}",
                         output: null,
                         style: "logic_blocks",
                         tooltip: "%{BKY_LOGIC_NULL_TOOLTIP}",
                         helpUrl: "%{BKY_LOGIC_NULL_HELPURL}",
                    },
                    {
                         type: "logic_ternary",
                         message0: "%{BKY_LOGIC_TERNARY_CONDITION} %1",
                         args0: [
                              {
                                   type: "input_value",
                                   name: "IF",
                                   check: "Boolean",
                              },
                         ],
                         message1: "%{BKY_LOGIC_TERNARY_IF_TRUE} %1",
                         args1: [{ type: "input_value", name: "THEN" }],
                         message2: "%{BKY_LOGIC_TERNARY_IF_FALSE} %1",
                         args2: [{ type: "input_value", name: "ELSE" }],
                         output: null,
                         style: "logic_blocks",
                         tooltip: "%{BKY_LOGIC_TERNARY_TOOLTIP}",
                         helpUrl: "%{BKY_LOGIC_TERNARY_HELPURL}",
                         extensions: ["logic_ternary"],
                    },
                    {
                         type: "controls_if_if",
                         message0: "%{BKY_CONTROLS_IF_IF_TITLE_IF}",
                         nextStatement: null,
                         enableContextMenu: !1,
                         style: "loop_blocks",
                         tooltip: "%{BKY_CONTROLS_IF_IF_TOOLTIP}",
                    },
                    {
                         type: "controls_if_elseif",
                         message0: "%{BKY_CONTROLS_IF_ELSEIF_TITLE_ELSEIF}",
                         previousStatement: null,
                         nextStatement: null,
                         enableContextMenu: !1,
                         style: "loop_blocks",
                         tooltip: "%{BKY_CONTROLS_IF_ELSEIF_TOOLTIP}",
                    },
                    {
                         type: "controls_if_else",
                         message0: "%{BKY_CONTROLS_IF_ELSE_TITLE_ELSE}",
                         previousStatement: null,
                         enableContextMenu: !1,
                         style: "loop_blocks",
                         tooltip: "%{BKY_CONTROLS_IF_ELSE_TOOLTIP}",
                    },
               ]
          );
     var module$contents$Blockly$libraryBlocks$logic_TOOLTIPS_BY_OP = {
          EQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}",
          NEQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}",
          LT: "%{BKY_LOGIC_COMPARE_TOOLTIP_LT}",
          LTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}",
          GT: "%{BKY_LOGIC_COMPARE_TOOLTIP_GT}",
          GTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}",
          AND: "%{BKY_LOGIC_OPERATION_TOOLTIP_AND}",
          OR: "%{BKY_LOGIC_OPERATION_TOOLTIP_OR}",
     };
     $.module$build$src$core$extensions.register(
          "logic_op_tooltip",
          $.module$build$src$core$extensions.buildTooltipForDropdown(
               "OP",
               module$contents$Blockly$libraryBlocks$logic_TOOLTIPS_BY_OP
          )
     );
     var module$contents$Blockly$libraryBlocks$logic_CONTROLS_IF_MUTATOR_MIXIN =
          {
               elseifCount_: 0,
               elseCount_: 0,
               mutationToDom: function () {
                    if (!this.elseifCount_ && !this.elseCount_) return null;
                    const a =
                         $.module$build$src$core$utils$xml.createElement(
                              "mutation"
                         );
                    this.elseifCount_ &&
                         a.setAttribute("elseif", this.elseifCount_);
                    this.elseCount_ && a.setAttribute("else", 1);
                    return a;
               },
               domToMutation: function (a) {
                    this.elseifCount_ =
                         parseInt(a.getAttribute("elseif"), 10) || 0;
                    this.elseCount_ = parseInt(a.getAttribute("else"), 10) || 0;
                    this.rebuildShape_();
               },
               saveExtraState: function () {
                    if (!this.elseifCount_ && !this.elseCount_) return null;
                    const a = Object.create(null);
                    this.elseifCount_ && (a.elseIfCount = this.elseifCount_);
                    this.elseCount_ && (a.hasElse = !0);
                    return a;
               },
               loadExtraState: function (a) {
                    this.elseifCount_ = a.elseIfCount || 0;
                    this.elseCount_ = a.hasElse ? 1 : 0;
                    this.updateShape_();
               },
               decompose: function (a) {
                    const b = a.newBlock("controls_if_if");
                    b.initSvg();
                    let c = b.nextConnection;
                    for (let d = 1; d <= this.elseifCount_; d++) {
                         const e = a.newBlock("controls_if_elseif");
                         e.initSvg();
                         c.connect(e.previousConnection);
                         c = e.nextConnection;
                    }
                    this.elseCount_ &&
                         ((a = a.newBlock("controls_if_else")),
                         a.initSvg(),
                         c.connect(a.previousConnection));
                    return b;
               },
               compose: function (a) {
                    a = a.nextConnection.targetBlock();
                    this.elseCount_ = this.elseifCount_ = 0;
                    const b = [null],
                         c = [null];
                    let d = null;
                    for (; a; ) {
                         if (!a.isInsertionMarker())
                              switch (a.type) {
                                   case "controls_if_elseif":
                                        this.elseifCount_++;
                                        b.push(a.valueConnection_);
                                        c.push(a.statementConnection_);
                                        break;
                                   case "controls_if_else":
                                        this.elseCount_++;
                                        d = a.statementConnection_;
                                        break;
                                   default:
                                        throw TypeError(
                                             "Unknown block type: " + a.type
                                        );
                              }
                         a = a.getNextBlock();
                    }
                    this.updateShape_();
                    this.reconnectChildBlocks_(b, c, d);
               },
               saveConnections: function (a) {
                    a = a.nextConnection.targetBlock();
                    let b = 1;
                    for (; a; ) {
                         if (!a.isInsertionMarker())
                              switch (a.type) {
                                   case "controls_if_elseif":
                                        var c = this.getInput("IF" + b);
                                        const d = this.getInput("DO" + b);
                                        a.valueConnection_ =
                                             c && c.connection.targetConnection;
                                        a.statementConnection_ =
                                             d && d.connection.targetConnection;
                                        b++;
                                        break;
                                   case "controls_if_else":
                                        c = this.getInput("ELSE");
                                        a.statementConnection_ =
                                             c && c.connection.targetConnection;
                                        break;
                                   default:
                                        throw TypeError(
                                             "Unknown block type: " + a.type
                                        );
                              }
                         a = a.getNextBlock();
                    }
               },
               rebuildShape_: function () {
                    const a = [null],
                         b = [null];
                    let c = null;
                    this.getInput("ELSE") &&
                         (c =
                              this.getInput("ELSE").connection
                                   .targetConnection);
                    for (let d = 1; this.getInput("IF" + d); d++) {
                         const e = this.getInput("IF" + d),
                              f = this.getInput("DO" + d);
                         a.push(e.connection.targetConnection);
                         b.push(f.connection.targetConnection);
                    }
                    this.updateShape_();
                    this.reconnectChildBlocks_(a, b, c);
               },
               updateShape_: function () {
                    this.getInput("ELSE") && this.removeInput("ELSE");
                    for (var a = 1; this.getInput("IF" + a); a++)
                         this.removeInput("IF" + a), this.removeInput("DO" + a);
                    for (a = 1; a <= this.elseifCount_; a++)
                         this.appendValueInput("IF" + a)
                              .setCheck("Boolean")
                              .appendField(
                                   module$contents$Blockly$libraryBlocks$logic_Msg.CONTROLS_IF_MSG_ELSEIF
                              ),
                              this.appendStatementInput("DO" + a).appendField(
                                   module$contents$Blockly$libraryBlocks$logic_Msg.CONTROLS_IF_MSG_THEN
                              );
                    this.elseCount_ &&
                         this.appendStatementInput("ELSE").appendField(
                              module$contents$Blockly$libraryBlocks$logic_Msg.CONTROLS_IF_MSG_ELSE
                         );
               },
               reconnectChildBlocks_: function (a, b, c) {
                    for (let d = 1; d <= this.elseifCount_; d++)
                         $.Mutator$$module$build$src$core$mutator.reconnect(
                              a[d],
                              this,
                              "IF" + d
                         ),
                              $.Mutator$$module$build$src$core$mutator.reconnect(
                                   b[d],
                                   this,
                                   "DO" + d
                              );
                    $.Mutator$$module$build$src$core$mutator.reconnect(
                         c,
                         this,
                         "ELSE"
                    );
               },
          };
     $.module$build$src$core$extensions.registerMutator(
          "controls_if_mutator",
          module$contents$Blockly$libraryBlocks$logic_CONTROLS_IF_MUTATOR_MIXIN,
          null,
          ["controls_if_elseif", "controls_if_else"]
     );
     var module$contents$Blockly$libraryBlocks$logic_CONTROLS_IF_TOOLTIP_EXTENSION =
          function () {
               this.setTooltip(
                    function () {
                         if (this.elseifCount_ || this.elseCount_) {
                              if (!this.elseifCount_ && this.elseCount_)
                                   return module$contents$Blockly$libraryBlocks$logic_Msg.CONTROLS_IF_TOOLTIP_2;
                              if (this.elseifCount_ && !this.elseCount_)
                                   return module$contents$Blockly$libraryBlocks$logic_Msg.CONTROLS_IF_TOOLTIP_3;
                              if (this.elseifCount_ && this.elseCount_)
                                   return module$contents$Blockly$libraryBlocks$logic_Msg.CONTROLS_IF_TOOLTIP_4;
                         } else
                              return module$contents$Blockly$libraryBlocks$logic_Msg.CONTROLS_IF_TOOLTIP_1;
                         return "";
                    }.bind(this)
               );
          };
     $.module$build$src$core$extensions.register(
          "controls_if_tooltip",
          module$contents$Blockly$libraryBlocks$logic_CONTROLS_IF_TOOLTIP_EXTENSION
     );
     var module$contents$Blockly$libraryBlocks$logic_LOGIC_COMPARE_ONCHANGE_MIXIN =
               {
                    onchange: function (a) {
                         this.prevBlocks_ || (this.prevBlocks_ = [null, null]);
                         var b = this.getInputTargetBlock("A");
                         const c = this.getInputTargetBlock("B");
                         b &&
                              c &&
                              !this.workspace.connectionChecker.doTypeChecks(
                                   b.outputConnection,
                                   c.outputConnection
                              ) &&
                              ($.module$build$src$core$events$events.setGroup(
                                   a.group
                              ),
                              (a = this.prevBlocks_[0]),
                              a !== b &&
                                   (b.unplug(),
                                   !a ||
                                        a.isDisposed() ||
                                        a.isShadow() ||
                                        this.getInput("A").connection.connect(
                                             a.outputConnection
                                        )),
                              (b = this.prevBlocks_[1]),
                              b !== c &&
                                   (c.unplug(),
                                   !b ||
                                        b.isDisposed() ||
                                        b.isShadow() ||
                                        this.getInput("B").connection.connect(
                                             b.outputConnection
                                        )),
                              this.bumpNeighbours(),
                              $.module$build$src$core$events$events.setGroup(
                                   !1
                              ));
                         this.prevBlocks_[0] = this.getInputTargetBlock("A");
                         this.prevBlocks_[1] = this.getInputTargetBlock("B");
                    },
               },
          module$contents$Blockly$libraryBlocks$logic_LOGIC_COMPARE_EXTENSION =
               function () {
                    this.mixin(
                         module$contents$Blockly$libraryBlocks$logic_LOGIC_COMPARE_ONCHANGE_MIXIN
                    );
               };
     $.module$build$src$core$extensions.register(
          "logic_compare",
          module$contents$Blockly$libraryBlocks$logic_LOGIC_COMPARE_EXTENSION
     );
     var module$contents$Blockly$libraryBlocks$logic_LOGIC_TERNARY_ONCHANGE_MIXIN =
          {
               prevParentConnection_: null,
               onchange: function (a) {
                    const b = this.getInputTargetBlock("THEN"),
                         c = this.getInputTargetBlock("ELSE"),
                         d = this.outputConnection.targetConnection;
                    if ((b || c) && d)
                         for (let e = 0; 2 > e; e++) {
                              const f = 1 === e ? b : c;
                              f &&
                                   !f.workspace.connectionChecker.doTypeChecks(
                                        f.outputConnection,
                                        d
                                   ) &&
                                   ($.module$build$src$core$events$events.setGroup(
                                        a.group
                                   ),
                                   d === this.prevParentConnection_
                                        ? (this.unplug(),
                                          d.getSourceBlock().bumpNeighbours())
                                        : (f.unplug(), f.bumpNeighbours()),
                                   $.module$build$src$core$events$events.setGroup(
                                        !1
                                   ));
                         }
                    this.prevParentConnection_ = d;
               },
          };
     $.module$build$src$core$extensions.registerMixin(
          "logic_ternary",
          module$contents$Blockly$libraryBlocks$logic_LOGIC_TERNARY_ONCHANGE_MIXIN
     );
     module$contents$Blockly$libraryBlocks$logic_defineBlocks(
          module$exports$Blockly$libraryBlocks$logic.blocks
     );
     var module$exports$Blockly$libraryBlocks$lists = {},
          module$contents$Blockly$libraryBlocks$lists_xmlUtils =
               $.module$build$src$core$utils$xml,
          module$contents$Blockly$libraryBlocks$lists_Xml =
               $.module$build$src$core$xml,
          module$contents$Blockly$libraryBlocks$lists_Align =
               $.Align$$module$build$src$core$input,
          module$contents$Blockly$libraryBlocks$lists_BlockDefinition = Object,
          module$contents$Blockly$libraryBlocks$lists_ConnectionType =
               $.module$build$src$core$connection_type.ConnectionType,
          module$contents$Blockly$libraryBlocks$lists_FieldDropdown =
               $.module$build$src$core$field_dropdown.FieldDropdown,
          module$contents$Blockly$libraryBlocks$lists_Msg =
               $.module$build$src$core$msg.Msg,
          module$contents$Blockly$libraryBlocks$lists_Mutator =
               $.Mutator$$module$build$src$core$mutator,
          module$contents$Blockly$libraryBlocks$lists_createBlockDefinitionsFromJsonArray =
               $.module$build$src$core$common
                    .createBlockDefinitionsFromJsonArray,
          module$contents$Blockly$libraryBlocks$lists_defineBlocks =
               $.module$build$src$core$common.defineBlocks;
     module$exports$Blockly$libraryBlocks$lists.blocks =
          module$contents$Blockly$libraryBlocks$lists_createBlockDefinitionsFromJsonArray(
               [
                    {
                         type: "lists_create_empty",
                         message0: "%{BKY_LISTS_CREATE_EMPTY_TITLE}",
                         output: "Array",
                         style: "list_blocks",
                         tooltip: "%{BKY_LISTS_CREATE_EMPTY_TOOLTIP}",
                         helpUrl: "%{BKY_LISTS_CREATE_EMPTY_HELPURL}",
                    },
                    {
                         type: "lists_repeat",
                         message0: "%{BKY_LISTS_REPEAT_TITLE}",
                         args0: [
                              { type: "input_value", name: "ITEM" },
                              {
                                   type: "input_value",
                                   name: "NUM",
                                   check: "Number",
                              },
                         ],
                         output: "Array",
                         style: "list_blocks",
                         tooltip: "%{BKY_LISTS_REPEAT_TOOLTIP}",
                         helpUrl: "%{BKY_LISTS_REPEAT_HELPURL}",
                    },
                    {
                         type: "lists_reverse",
                         message0: "%{BKY_LISTS_REVERSE_MESSAGE0}",
                         args0: [
                              {
                                   type: "input_value",
                                   name: "LIST",
                                   check: "Array",
                              },
                         ],
                         output: "Array",
                         inputsInline: !0,
                         style: "list_blocks",
                         tooltip: "%{BKY_LISTS_REVERSE_TOOLTIP}",
                         helpUrl: "%{BKY_LISTS_REVERSE_HELPURL}",
                    },
                    {
                         type: "lists_isEmpty",
                         message0: "%{BKY_LISTS_ISEMPTY_TITLE}",
                         args0: [
                              {
                                   type: "input_value",
                                   name: "VALUE",
                                   check: ["String", "Array"],
                              },
                         ],
                         output: "Boolean",
                         style: "list_blocks",
                         tooltip: "%{BKY_LISTS_ISEMPTY_TOOLTIP}",
                         helpUrl: "%{BKY_LISTS_ISEMPTY_HELPURL}",
                    },
                    {
                         type: "lists_length",
                         message0: "%{BKY_LISTS_LENGTH_TITLE}",
                         args0: [
                              {
                                   type: "input_value",
                                   name: "VALUE",
                                   check: ["String", "Array"],
                              },
                         ],
                         output: "Number",
                         style: "list_blocks",
                         tooltip: "%{BKY_LISTS_LENGTH_TOOLTIP}",
                         helpUrl: "%{BKY_LISTS_LENGTH_HELPURL}",
                    },
               ]
          );
     module$exports$Blockly$libraryBlocks$lists.blocks.lists_create_with = {
          init: function () {
               this.setHelpUrl(
                    module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_CREATE_WITH_HELPURL
               );
               this.setStyle("list_blocks");
               this.itemCount_ = 3;
               this.updateShape_();
               this.setOutput(!0, "Array");
               this.setMutator(
                    new $.Mutator$$module$build$src$core$mutator(
                         ["lists_create_with_item"],
                         this
                    )
               );
               this.setTooltip(
                    module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_CREATE_WITH_TOOLTIP
               );
          },
          mutationToDom: function () {
               const a =
                    $.module$build$src$core$utils$xml.createElement("mutation");
               a.setAttribute("items", this.itemCount_);
               return a;
          },
          domToMutation: function (a) {
               this.itemCount_ = parseInt(a.getAttribute("items"), 10);
               this.updateShape_();
          },
          saveExtraState: function () {
               return { itemCount: this.itemCount_ };
          },
          loadExtraState: function (a) {
               this.itemCount_ = a.itemCount;
               this.updateShape_();
          },
          decompose: function (a) {
               const b = a.newBlock("lists_create_with_container");
               b.initSvg();
               let c = b.getInput("STACK").connection;
               for (let d = 0; d < this.itemCount_; d++) {
                    const e = a.newBlock("lists_create_with_item");
                    e.initSvg();
                    c.connect(e.previousConnection);
                    c = e.nextConnection;
               }
               return b;
          },
          compose: function (a) {
               var b = a.getInputTargetBlock("STACK");
               for (a = []; b; )
                    b.isInsertionMarker() || a.push(b.valueConnection_),
                         (b = b.getNextBlock());
               for (b = 0; b < this.itemCount_; b++) {
                    const c = this.getInput("ADD" + b).connection
                         .targetConnection;
                    c && -1 === a.indexOf(c) && c.disconnect();
               }
               this.itemCount_ = a.length;
               this.updateShape_();
               for (b = 0; b < this.itemCount_; b++)
                    $.Mutator$$module$build$src$core$mutator.reconnect(
                         a[b],
                         this,
                         "ADD" + b
                    );
          },
          saveConnections: function (a) {
               a = a.getInputTargetBlock("STACK");
               let b = 0;
               for (; a; ) {
                    if (a.isInsertionMarker()) {
                         a = a.getNextBlock();
                         continue;
                    }
                    const c = this.getInput("ADD" + b);
                    a.valueConnection_ = c && c.connection.targetConnection;
                    a = a.getNextBlock();
                    b++;
               }
          },
          updateShape_: function () {
               this.itemCount_ && this.getInput("EMPTY")
                    ? this.removeInput("EMPTY")
                    : this.itemCount_ ||
                      this.getInput("EMPTY") ||
                      this.appendDummyInput("EMPTY").appendField(
                           module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_CREATE_EMPTY_TITLE
                      );
               for (var a = 0; a < this.itemCount_; a++)
                    if (!this.getInput("ADD" + a)) {
                         const b = this.appendValueInput("ADD" + a).setAlign(
                              $.Align$$module$build$src$core$input.RIGHT
                         );
                         0 === a &&
                              b.appendField(
                                   module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_CREATE_WITH_INPUT_WITH
                              );
                    }
               for (a = this.itemCount_; this.getInput("ADD" + a); a++)
                    this.removeInput("ADD" + a);
          },
     };
     module$exports$Blockly$libraryBlocks$lists.blocks.lists_create_with_container =
          {
               init: function () {
                    this.setStyle("list_blocks");
                    this.appendDummyInput().appendField(
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD
                    );
                    this.appendStatementInput("STACK");
                    this.setTooltip(
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP
                    );
                    this.contextMenu = !1;
               },
          };
     module$exports$Blockly$libraryBlocks$lists.blocks.lists_create_with_item =
          {
               init: function () {
                    this.setStyle("list_blocks");
                    this.appendDummyInput().appendField(
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_CREATE_WITH_ITEM_TITLE
                    );
                    this.setPreviousStatement(!0);
                    this.setNextStatement(!0);
                    this.setTooltip(
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_CREATE_WITH_ITEM_TOOLTIP
                    );
                    this.contextMenu = !1;
               },
          };
     module$exports$Blockly$libraryBlocks$lists.blocks.lists_indexOf = {
          init: function () {
               const a = [
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_INDEX_OF_FIRST,
                         "FIRST",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_INDEX_OF_LAST,
                         "LAST",
                    ],
               ];
               this.setHelpUrl(
                    module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_INDEX_OF_HELPURL
               );
               this.setStyle("list_blocks");
               this.setOutput(!0, "Number");
               this.appendValueInput("VALUE")
                    .setCheck("Array")
                    .appendField(
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_INDEX_OF_INPUT_IN_LIST
                    );
               this.appendValueInput("FIND").appendField(
                    new module$contents$Blockly$libraryBlocks$lists_FieldDropdown(
                         a
                    ),
                    "END"
               );
               this.setInputsInline(!0);
               const b = this;
               this.setTooltip(function () {
                    return module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_INDEX_OF_TOOLTIP.replace(
                         "%1",
                         b.workspace.options.oneBasedIndex ? "0" : "-1"
                    );
               });
          },
     };
     module$exports$Blockly$libraryBlocks$lists.blocks.lists_getIndex = {
          init: function () {
               var a = [
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_GET,
                         "GET",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_GET_REMOVE,
                         "GET_REMOVE",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_REMOVE,
                         "REMOVE",
                    ],
               ];
               this.WHERE_OPTIONS = [
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_FROM_START,
                         "FROM_START",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_FROM_END,
                         "FROM_END",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_FIRST,
                         "FIRST",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_LAST,
                         "LAST",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_RANDOM,
                         "RANDOM",
                    ],
               ];
               this.setHelpUrl(
                    module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_HELPURL
               );
               this.setStyle("list_blocks");
               a =
                    new module$contents$Blockly$libraryBlocks$lists_FieldDropdown(
                         a,
                         function (c) {
                              c = "REMOVE" === c;
                              this.getSourceBlock().updateStatement_(c);
                         }
                    );
               this.appendValueInput("VALUE")
                    .setCheck("Array")
                    .appendField(
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_INPUT_IN_LIST
                    );
               this.appendDummyInput()
                    .appendField(a, "MODE")
                    .appendField("", "SPACE");
               this.appendDummyInput("AT");
               module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_TAIL &&
                    this.appendDummyInput("TAIL").appendField(
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_TAIL
                    );
               this.setInputsInline(!0);
               this.setOutput(!0);
               this.updateAt_(!0);
               const b = this;
               this.setTooltip(function () {
                    const c = b.getFieldValue("MODE"),
                         d = b.getFieldValue("WHERE");
                    let e = "";
                    switch (c + " " + d) {
                         case "GET FROM_START":
                         case "GET FROM_END":
                              e =
                                   module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_TOOLTIP_GET_FROM;
                              break;
                         case "GET FIRST":
                              e =
                                   module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_TOOLTIP_GET_FIRST;
                              break;
                         case "GET LAST":
                              e =
                                   module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_TOOLTIP_GET_LAST;
                              break;
                         case "GET RANDOM":
                              e =
                                   module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM;
                              break;
                         case "GET_REMOVE FROM_START":
                         case "GET_REMOVE FROM_END":
                              e =
                                   module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM;
                              break;
                         case "GET_REMOVE FIRST":
                              e =
                                   module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST;
                              break;
                         case "GET_REMOVE LAST":
                              e =
                                   module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST;
                              break;
                         case "GET_REMOVE RANDOM":
                              e =
                                   module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM;
                              break;
                         case "REMOVE FROM_START":
                         case "REMOVE FROM_END":
                              e =
                                   module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM;
                              break;
                         case "REMOVE FIRST":
                              e =
                                   module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST;
                              break;
                         case "REMOVE LAST":
                              e =
                                   module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST;
                              break;
                         case "REMOVE RANDOM":
                              e =
                                   module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM;
                    }
                    if ("FROM_START" === d || "FROM_END" === d)
                         e +=
                              "  " +
                              ("FROM_START" === d
                                   ? module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_INDEX_FROM_START_TOOLTIP
                                   : module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_INDEX_FROM_END_TOOLTIP
                              ).replace(
                                   "%1",
                                   b.workspace.options.oneBasedIndex
                                        ? "#1"
                                        : "#0"
                              );
                    return e;
               });
          },
          mutationToDom: function () {
               const a =
                    $.module$build$src$core$utils$xml.createElement("mutation");
               a.setAttribute("statement", !this.outputConnection);
               const b =
                    this.getInput("AT").type ===
                    $.module$build$src$core$connection_type.ConnectionType
                         .INPUT_VALUE;
               a.setAttribute("at", b);
               return a;
          },
          domToMutation: function (a) {
               const b = "true" === a.getAttribute("statement");
               this.updateStatement_(b);
               a = "false" !== a.getAttribute("at");
               this.updateAt_(a);
          },
          saveExtraState: function () {
               return this.outputConnection ? null : { isStatement: !0 };
          },
          loadExtraState: function (a) {
               a.isStatement
                    ? this.updateStatement_(!0)
                    : "string" === typeof a &&
                      this.domToMutation(
                           $.module$build$src$core$xml.textToDom(a)
                      );
          },
          updateStatement_: function (a) {
               a !== !this.outputConnection &&
                    (this.unplug(!0, !0),
                    a
                         ? (this.setOutput(!1),
                           this.setPreviousStatement(!0),
                           this.setNextStatement(!0))
                         : (this.setPreviousStatement(!1),
                           this.setNextStatement(!1),
                           this.setOutput(!0)));
          },
          updateAt_: function (a) {
               this.removeInput("AT");
               this.removeInput("ORDINAL", !0);
               a
                    ? (this.appendValueInput("AT").setCheck("Number"),
                      module$contents$Blockly$libraryBlocks$lists_Msg.ORDINAL_NUMBER_SUFFIX &&
                           this.appendDummyInput("ORDINAL").appendField(
                                module$contents$Blockly$libraryBlocks$lists_Msg.ORDINAL_NUMBER_SUFFIX
                           ))
                    : this.appendDummyInput("AT");
               const b =
                    new module$contents$Blockly$libraryBlocks$lists_FieldDropdown(
                         this.WHERE_OPTIONS,
                         function (c) {
                              const d = "FROM_START" === c || "FROM_END" === c;
                              if (d !== a) {
                                   const e = this.getSourceBlock();
                                   e.updateAt_(d);
                                   e.setFieldValue(c, "WHERE");
                                   return null;
                              }
                         }
                    );
               this.getInput("AT").appendField(b, "WHERE");
               module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_TAIL &&
                    this.moveInputBefore("TAIL", null);
          },
     };
     module$exports$Blockly$libraryBlocks$lists.blocks.lists_setIndex = {
          init: function () {
               const a = [
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_SET_INDEX_SET,
                         "SET",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_SET_INDEX_INSERT,
                         "INSERT",
                    ],
               ];
               this.WHERE_OPTIONS = [
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_FROM_START,
                         "FROM_START",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_FROM_END,
                         "FROM_END",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_FIRST,
                         "FIRST",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_LAST,
                         "LAST",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_INDEX_RANDOM,
                         "RANDOM",
                    ],
               ];
               this.setHelpUrl(
                    module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_SET_INDEX_HELPURL
               );
               this.setStyle("list_blocks");
               this.appendValueInput("LIST")
                    .setCheck("Array")
                    .appendField(
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_SET_INDEX_INPUT_IN_LIST
                    );
               this.appendDummyInput()
                    .appendField(
                         new module$contents$Blockly$libraryBlocks$lists_FieldDropdown(
                              a
                         ),
                         "MODE"
                    )
                    .appendField("", "SPACE");
               this.appendDummyInput("AT");
               this.appendValueInput("TO").appendField(
                    module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_SET_INDEX_INPUT_TO
               );
               this.setInputsInline(!0);
               this.setPreviousStatement(!0);
               this.setNextStatement(!0);
               this.setTooltip(
                    module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_SET_INDEX_TOOLTIP
               );
               this.updateAt_(!0);
               const b = this;
               this.setTooltip(function () {
                    const c = b.getFieldValue("MODE"),
                         d = b.getFieldValue("WHERE");
                    let e = "";
                    switch (c + " " + d) {
                         case "SET FROM_START":
                         case "SET FROM_END":
                              e =
                                   module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_SET_INDEX_TOOLTIP_SET_FROM;
                              break;
                         case "SET FIRST":
                              e =
                                   module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_SET_INDEX_TOOLTIP_SET_FIRST;
                              break;
                         case "SET LAST":
                              e =
                                   module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_SET_INDEX_TOOLTIP_SET_LAST;
                              break;
                         case "SET RANDOM":
                              e =
                                   module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM;
                              break;
                         case "INSERT FROM_START":
                         case "INSERT FROM_END":
                              e =
                                   module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM;
                              break;
                         case "INSERT FIRST":
                              e =
                                   module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST;
                              break;
                         case "INSERT LAST":
                              e =
                                   module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST;
                              break;
                         case "INSERT RANDOM":
                              e =
                                   module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM;
                    }
                    if ("FROM_START" === d || "FROM_END" === d)
                         e +=
                              "  " +
                              module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_INDEX_FROM_START_TOOLTIP.replace(
                                   "%1",
                                   b.workspace.options.oneBasedIndex
                                        ? "#1"
                                        : "#0"
                              );
                    return e;
               });
          },
          mutationToDom: function () {
               const a =
                         $.module$build$src$core$utils$xml.createElement(
                              "mutation"
                         ),
                    b =
                         this.getInput("AT").type ===
                         $.module$build$src$core$connection_type.ConnectionType
                              .INPUT_VALUE;
               a.setAttribute("at", b);
               return a;
          },
          domToMutation: function (a) {
               a = "false" !== a.getAttribute("at");
               this.updateAt_(a);
          },
          saveExtraState: function () {
               return null;
          },
          loadExtraState: function () {},
          updateAt_: function (a) {
               this.removeInput("AT");
               this.removeInput("ORDINAL", !0);
               a
                    ? (this.appendValueInput("AT").setCheck("Number"),
                      module$contents$Blockly$libraryBlocks$lists_Msg.ORDINAL_NUMBER_SUFFIX &&
                           this.appendDummyInput("ORDINAL").appendField(
                                module$contents$Blockly$libraryBlocks$lists_Msg.ORDINAL_NUMBER_SUFFIX
                           ))
                    : this.appendDummyInput("AT");
               const b =
                    new module$contents$Blockly$libraryBlocks$lists_FieldDropdown(
                         this.WHERE_OPTIONS,
                         function (c) {
                              const d = "FROM_START" === c || "FROM_END" === c;
                              if (d !== a) {
                                   const e = this.getSourceBlock();
                                   e.updateAt_(d);
                                   e.setFieldValue(c, "WHERE");
                                   return null;
                              }
                         }
                    );
               this.moveInputBefore("AT", "TO");
               this.getInput("ORDINAL") &&
                    this.moveInputBefore("ORDINAL", "TO");
               this.getInput("AT").appendField(b, "WHERE");
          },
     };
     module$exports$Blockly$libraryBlocks$lists.blocks.lists_getSublist = {
          init: function () {
               this.WHERE_OPTIONS_1 = [
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_SUBLIST_START_FROM_START,
                         "FROM_START",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_SUBLIST_START_FROM_END,
                         "FROM_END",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_SUBLIST_START_FIRST,
                         "FIRST",
                    ],
               ];
               this.WHERE_OPTIONS_2 = [
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_SUBLIST_END_FROM_START,
                         "FROM_START",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_SUBLIST_END_FROM_END,
                         "FROM_END",
                    ],
                    [
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_SUBLIST_END_LAST,
                         "LAST",
                    ],
               ];
               this.setHelpUrl(
                    module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_SUBLIST_HELPURL
               );
               this.setStyle("list_blocks");
               this.appendValueInput("LIST")
                    .setCheck("Array")
                    .appendField(
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_SUBLIST_INPUT_IN_LIST
                    );
               this.appendDummyInput("AT1");
               this.appendDummyInput("AT2");
               module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_SUBLIST_TAIL &&
                    this.appendDummyInput("TAIL").appendField(
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_SUBLIST_TAIL
                    );
               this.setInputsInline(!0);
               this.setOutput(!0, "Array");
               this.updateAt_(1, !0);
               this.updateAt_(2, !0);
               this.setTooltip(
                    module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_SUBLIST_TOOLTIP
               );
          },
          mutationToDom: function () {
               const a =
                    $.module$build$src$core$utils$xml.createElement("mutation");
               var b =
                    this.getInput("AT1").type ===
                    $.module$build$src$core$connection_type.ConnectionType
                         .INPUT_VALUE;
               a.setAttribute("at1", b);
               b =
                    this.getInput("AT2").type ===
                    $.module$build$src$core$connection_type.ConnectionType
                         .INPUT_VALUE;
               a.setAttribute("at2", b);
               return a;
          },
          domToMutation: function (a) {
               const b = "true" === a.getAttribute("at1");
               a = "true" === a.getAttribute("at2");
               this.updateAt_(1, b);
               this.updateAt_(2, a);
          },
          saveExtraState: function () {
               return null;
          },
          loadExtraState: function () {},
          updateAt_: function (a, b) {
               this.removeInput("AT" + a);
               this.removeInput("ORDINAL" + a, !0);
               b
                    ? (this.appendValueInput("AT" + a).setCheck("Number"),
                      module$contents$Blockly$libraryBlocks$lists_Msg.ORDINAL_NUMBER_SUFFIX &&
                           this.appendDummyInput("ORDINAL" + a).appendField(
                                module$contents$Blockly$libraryBlocks$lists_Msg.ORDINAL_NUMBER_SUFFIX
                           ))
                    : this.appendDummyInput("AT" + a);
               const c =
                    new module$contents$Blockly$libraryBlocks$lists_FieldDropdown(
                         this["WHERE_OPTIONS_" + a],
                         function (d) {
                              const e = "FROM_START" === d || "FROM_END" === d;
                              if (e !== b) {
                                   const f = this.getSourceBlock();
                                   f.updateAt_(a, e);
                                   f.setFieldValue(d, "WHERE" + a);
                                   return null;
                              }
                         }
                    );
               this.getInput("AT" + a).appendField(c, "WHERE" + a);
               1 === a &&
                    (this.moveInputBefore("AT1", "AT2"),
                    this.getInput("ORDINAL1") &&
                         this.moveInputBefore("ORDINAL1", "AT2"));
               module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_GET_SUBLIST_TAIL &&
                    this.moveInputBefore("TAIL", null);
          },
     };
     module$exports$Blockly$libraryBlocks$lists.blocks.lists_sort = {
          init: function () {
               this.jsonInit({
                    message0: "%{BKY_LISTS_SORT_TITLE}",
                    args0: [
                         {
                              type: "field_dropdown",
                              name: "TYPE",
                              options: [
                                   [
                                        "%{BKY_LISTS_SORT_TYPE_NUMERIC}",
                                        "NUMERIC",
                                   ],
                                   ["%{BKY_LISTS_SORT_TYPE_TEXT}", "TEXT"],
                                   [
                                        "%{BKY_LISTS_SORT_TYPE_IGNORECASE}",
                                        "IGNORE_CASE",
                                   ],
                              ],
                         },
                         {
                              type: "field_dropdown",
                              name: "DIRECTION",
                              options: [
                                   ["%{BKY_LISTS_SORT_ORDER_ASCENDING}", "1"],
                                   ["%{BKY_LISTS_SORT_ORDER_DESCENDING}", "-1"],
                              ],
                         },
                         { type: "input_value", name: "LIST", check: "Array" },
                    ],
                    output: "Array",
                    style: "list_blocks",
                    tooltip: "%{BKY_LISTS_SORT_TOOLTIP}",
                    helpUrl: "%{BKY_LISTS_SORT_HELPURL}",
               });
          },
     };
     module$exports$Blockly$libraryBlocks$lists.blocks.lists_split = {
          init: function () {
               const a = this,
                    b =
                         new module$contents$Blockly$libraryBlocks$lists_FieldDropdown(
                              [
                                   [
                                        module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_SPLIT_LIST_FROM_TEXT,
                                        "SPLIT",
                                   ],
                                   [
                                        module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_SPLIT_TEXT_FROM_LIST,
                                        "JOIN",
                                   ],
                              ],
                              function (c) {
                                   a.updateType_(c);
                              }
                         );
               this.setHelpUrl(
                    module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_SPLIT_HELPURL
               );
               this.setStyle("list_blocks");
               this.appendValueInput("INPUT")
                    .setCheck("String")
                    .appendField(b, "MODE");
               this.appendValueInput("DELIM")
                    .setCheck("String")
                    .appendField(
                         module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_SPLIT_WITH_DELIMITER
                    );
               this.setInputsInline(!0);
               this.setOutput(!0, "Array");
               this.setTooltip(function () {
                    const c = a.getFieldValue("MODE");
                    if ("SPLIT" === c)
                         return module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_SPLIT_TOOLTIP_SPLIT;
                    if ("JOIN" === c)
                         return module$contents$Blockly$libraryBlocks$lists_Msg.LISTS_SPLIT_TOOLTIP_JOIN;
                    throw Error("Unknown mode: " + c);
               });
          },
          updateType_: function (a) {
               if (this.getFieldValue("MODE") !== a) {
                    const b = this.getInput("INPUT").connection;
                    b.setShadowDom(null);
                    const c = b.targetBlock();
                    c &&
                         (b.disconnect(),
                         c.isShadow() ? c.dispose() : this.bumpNeighbours());
               }
               "SPLIT" === a
                    ? (this.outputConnection.setCheck("Array"),
                      this.getInput("INPUT").setCheck("String"))
                    : (this.outputConnection.setCheck("String"),
                      this.getInput("INPUT").setCheck("Array"));
          },
          mutationToDom: function () {
               const a =
                    $.module$build$src$core$utils$xml.createElement("mutation");
               a.setAttribute("mode", this.getFieldValue("MODE"));
               return a;
          },
          domToMutation: function (a) {
               this.updateType_(a.getAttribute("mode"));
          },
          saveExtraState: function () {
               return null;
          },
          loadExtraState: function () {},
     };
     module$contents$Blockly$libraryBlocks$lists_defineBlocks(
          module$exports$Blockly$libraryBlocks$lists.blocks
     );
     var module$exports$Blockly$libraryBlocks$colour = {},
          module$contents$Blockly$libraryBlocks$colour_BlockDefinition = Object,
          module$contents$Blockly$libraryBlocks$colour_createBlockDefinitionsFromJsonArray =
               $.module$build$src$core$common
                    .createBlockDefinitionsFromJsonArray,
          module$contents$Blockly$libraryBlocks$colour_defineBlocks =
               $.module$build$src$core$common.defineBlocks;
     module$exports$Blockly$libraryBlocks$colour.blocks =
          module$contents$Blockly$libraryBlocks$colour_createBlockDefinitionsFromJsonArray(
               [
                    {
                         type: "colour_picker",
                         message0: "%1",
                         args0: [
                              {
                                   type: "field_colour",
                                   name: "COLOUR",
                                   colour: "#ff0000",
                              },
                         ],
                         output: "Colour",
                         helpUrl: "%{BKY_COLOUR_PICKER_HELPURL}",
                         style: "colour_blocks",
                         tooltip: "%{BKY_COLOUR_PICKER_TOOLTIP}",
                         extensions: ["parent_tooltip_when_inline"],
                    },
                    {
                         type: "colour_random",
                         message0: "%{BKY_COLOUR_RANDOM_TITLE}",
                         output: "Colour",
                         helpUrl: "%{BKY_COLOUR_RANDOM_HELPURL}",
                         style: "colour_blocks",
                         tooltip: "%{BKY_COLOUR_RANDOM_TOOLTIP}",
                    },
                    {
                         type: "colour_rgb",
                         message0:
                              "%{BKY_COLOUR_RGB_TITLE} %{BKY_COLOUR_RGB_RED} %1 %{BKY_COLOUR_RGB_GREEN} %2 %{BKY_COLOUR_RGB_BLUE} %3",
                         args0: [
                              {
                                   type: "input_value",
                                   name: "RED",
                                   check: "Number",
                                   align: "RIGHT",
                              },
                              {
                                   type: "input_value",
                                   name: "GREEN",
                                   check: "Number",
                                   align: "RIGHT",
                              },
                              {
                                   type: "input_value",
                                   name: "BLUE",
                                   check: "Number",
                                   align: "RIGHT",
                              },
                         ],
                         output: "Colour",
                         helpUrl: "%{BKY_COLOUR_RGB_HELPURL}",
                         style: "colour_blocks",
                         tooltip: "%{BKY_COLOUR_RGB_TOOLTIP}",
                    },
                    {
                         type: "colour_blend",
                         message0:
                              "%{BKY_COLOUR_BLEND_TITLE} %{BKY_COLOUR_BLEND_COLOUR1} %1 %{BKY_COLOUR_BLEND_COLOUR2} %2 %{BKY_COLOUR_BLEND_RATIO} %3",
                         args0: [
                              {
                                   type: "input_value",
                                   name: "COLOUR1",
                                   check: "Colour",
                                   align: "RIGHT",
                              },
                              {
                                   type: "input_value",
                                   name: "COLOUR2",
                                   check: "Colour",
                                   align: "RIGHT",
                              },
                              {
                                   type: "input_value",
                                   name: "RATIO",
                                   check: "Number",
                                   align: "RIGHT",
                              },
                         ],
                         output: "Colour",
                         helpUrl: "%{BKY_COLOUR_BLEND_HELPURL}",
                         style: "colour_blocks",
                         tooltip: "%{BKY_COLOUR_BLEND_TOOLTIP}",
                    },
               ]
          );
     module$contents$Blockly$libraryBlocks$colour_defineBlocks(
          module$exports$Blockly$libraryBlocks$colour.blocks
     );
     var module$exports$Blockly$libraryBlocks = {},
          module$contents$Blockly$libraryBlocks_BlockDefinition = Object;
     module$exports$Blockly$libraryBlocks.colour =
          module$exports$Blockly$libraryBlocks$colour;
     module$exports$Blockly$libraryBlocks.lists =
          module$exports$Blockly$libraryBlocks$lists;
     module$exports$Blockly$libraryBlocks.logic =
          module$exports$Blockly$libraryBlocks$logic;
     module$exports$Blockly$libraryBlocks.loops =
          module$exports$Blockly$libraryBlocks$loops;
     module$exports$Blockly$libraryBlocks.math =
          module$exports$Blockly$libraryBlocks$math;
     module$exports$Blockly$libraryBlocks.procedures =
          module$exports$Blockly$libraryBlocks$procedures;
     module$exports$Blockly$libraryBlocks.texts =
          module$exports$Blockly$libraryBlocks$texts;
     module$exports$Blockly$libraryBlocks.variables =
          module$exports$Blockly$libraryBlocks$variables;
     module$exports$Blockly$libraryBlocks.variablesDynamic =
          module$exports$Blockly$libraryBlocks$variablesDynamic;
     module$exports$Blockly$libraryBlocks.blocks = Object.assign(
          {},
          module$exports$Blockly$libraryBlocks$colour.blocks,
          module$exports$Blockly$libraryBlocks$lists.blocks,
          module$exports$Blockly$libraryBlocks$logic.blocks,
          module$exports$Blockly$libraryBlocks$loops.blocks,
          module$exports$Blockly$libraryBlocks$math.blocks,
          module$exports$Blockly$libraryBlocks$procedures.blocks,
          module$exports$Blockly$libraryBlocks$variables.blocks,
          module$exports$Blockly$libraryBlocks$variablesDynamic.blocks
     );
     module$exports$Blockly$libraryBlocks.__namespace__ = $;
     return module$exports$Blockly$libraryBlocks;
});

//# sourceMappingURL=blocks_compressed.js.map
