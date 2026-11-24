/*
* Copyright (c) 2026 Shenzhen Kaihong Digital Industry Development Co., Ltd.
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import * as assert from 'assert';
import * as vscode from 'vscode';
import { transParseObj, generateFunctions } from '../../../gen/gendtscpp';
import { doParseTs } from '../../../parse/parsets';
import { runCompatSafe } from './stability_helpers';

suite('Stability_H2DTSCPP_CONVERT_COMBO_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_H2DTSCPP_CONVERT_COMBO_Part01.');

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0006_PERSON_AGE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0006_PERSON_AGE
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            Person["age"]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0006_person_age', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn163', returns: 'Person["age"]',
          parameters: [{ type: 'Person["age"]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias163', alias: 'Person["age"]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias163');
      assert.strictEqual(converted.types[0].alias, 'Person["age"]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn163');
      assert.strictEqual(converted.funcs[0].returns, "Person[\"age\"]",
        "h2dtscpp_convert_combo_0006_person_age type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Person[\"age\"]",
        "h2dtscpp_convert_combo_0006_person_age type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample163_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn163') || generated.napiCppContent.includes('typeFn163')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn163'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0006_person_age execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0007_PERSON_KEYOF_PERSON
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0007_PERSON_KEYOF_PERSON
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type Person[keyof Person];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0007_person_keyof_person', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass165', alias: '',
          variableList: [{ type: 'Person[keyof Person]', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass165');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Person[keyof Person]",
        "h2dtscpp_convert_combo_0007_person_keyof_person class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0007_person_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0008_PERSON_KEYOF_PERSON
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0008_PERSON_KEYOF_PERSON
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type Person[keyof
   *            Person]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0008_person_keyof_person', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun165', returns: 'Person[keyof Person]',
          parameters: [{ type: 'Person[keyof Person]', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun165');
      assert.strictEqual(converted.funcs[0].returns, "Person[keyof Person]",
        "h2dtscpp_convert_combo_0008_person_keyof_person global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Person[keyof Person]",
        "h2dtscpp_convert_combo_0008_person_keyof_person global param type convert convert output");
      const generated = generateFunctions(converted, 'sample165_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun165') || generated.napiCppContent.includes('globalRun165')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun165'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0008_person_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0009_PERSON_KEYOF_PERSON
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0009_PERSON_KEYOF_PERSON
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type Person[keyof Person];
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0009_person_keyof_person', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass165', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Person[keyof Person]',
            parameters: [{ type: 'Person[keyof Person]', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Person[keyof Person]",
        "h2dtscpp_convert_combo_0009_person_keyof_person class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Person[keyof Person]",
        "h2dtscpp_convert_combo_0009_person_keyof_person class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0009_person_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0010_PERSON_KEYOF_PERSON
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0010_PERSON_KEYOF_PERSON
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type Person[keyof
   *            Person]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0010_person_keyof_person', () => {
    try {
      const parsed = doParseTs('h2cpp165.ts', `
        function h2cpp165(p: Person[keyof Person]): Person[keyof Person] { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp165');
      assert.strictEqual(converted.funcs[0].returns, "Person[keyof Person]",
        "h2dtscpp_convert_combo_0010_person_keyof_person parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Person[keyof Person]",
        "h2dtscpp_convert_combo_0010_person_keyof_person parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp165.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp165') || generated.napiCppContent.includes('h2cpp165')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp165'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0010_person_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0011_PERSON_KEYOF_PERSON
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0011_PERSON_KEYOF_PERSON
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            Person[keyof Person]; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0011_person_keyof_person', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn165', returns: 'Person[keyof Person]',
          parameters: [{ type: 'Person[keyof Person]', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias165', alias: 'Person[keyof Person]', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias165');
      assert.strictEqual(converted.types[0].alias, 'Person[keyof Person]');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn165');
      assert.strictEqual(converted.funcs[0].returns, "Person[keyof Person]",
        "h2dtscpp_convert_combo_0011_person_keyof_person type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Person[keyof Person]",
        "h2dtscpp_convert_combo_0011_person_keyof_person type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample165_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn165') || generated.napiCppContent.includes('typeFn165')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn165'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0011_person_keyof_person execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0012_DOG_EXTENDS_ANIMAL_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0012_DOG_EXTENDS_ANIMAL_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type Dog extends Animal ?
   *            number : string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0012_dog_extends_animal_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass166', alias: '',
          variableList: [{ type: 'Dog extends Animal ? number : string', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass166');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Dog extends Animal ? number : string",
        "h2dtscpp_convert_combo_0012_dog_extends_animal_number_string class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0012_dog_extends_animal_number_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0013_DOG_EXTENDS_ANIMAL_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0013_DOG_EXTENDS_ANIMAL_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type Dog extends Animal ?
   *            number : string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0013_dog_extends_animal_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun166', returns: 'Dog extends Animal ? number : string',
          parameters: [{ type: 'Dog extends Animal ? number : string', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun166');
      assert.strictEqual(converted.funcs[0].returns, "Dog extends Animal ? number : string",
        "h2dtscpp_convert_combo_0013_dog_extends_animal_number_string global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Dog extends Animal ? number : string",
        "h2dtscpp_convert_combo_0013_dog_extends_animal_number_string global param type convert convert output");
      const generated = generateFunctions(converted, 'sample166_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun166') || generated.napiCppContent.includes('globalRun166')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun166'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0013_dog_extends_animal_number_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0014_DOG_EXTENDS_ANIMAL_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0014_DOG_EXTENDS_ANIMAL_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type Dog extends Animal ?
   *            number : string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0014_dog_extends_animal_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass166', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Dog extends Animal ? number : string',
            parameters: [{ type: 'Dog extends Animal ? number : string', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Dog extends Animal ? number : string",
        "h2dtscpp_convert_combo_0014_dog_extends_animal_number_string class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "Dog extends Animal ? number : string",
        "h2dtscpp_convert_combo_0014_dog_extends_animal_number_string class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0014_dog_extends_animal_number_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0015_DOG_EXTENDS_ANIMAL_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0015_DOG_EXTENDS_ANIMAL_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type Dog extends
   *            Animal ? number : string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0015_dog_extends_animal_number_string', () => {
    try {
      const parsed = doParseTs('h2cpp166.ts', `
        function h2cpp166(p: Dog extends Animal ? number : string):
        Dog extends Animal ? number : string { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp166');
      assert.strictEqual(converted.funcs[0].returns, "Dog extends Animal ? number : string",
        "h2dtscpp_convert_combo_0015_dog_extends_animal_number_string parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Dog extends Animal ? number : string",
        "h2dtscpp_convert_combo_0015_dog_extends_animal_number_string parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp166.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp166') || generated.napiCppContent.includes('h2cpp166')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp166'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0015_dog_extends_animal_number_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0016_DOG_EXTENDS_ANIMAL_NUMBER_STRING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0016_DOG_EXTENDS_ANIMAL_NUMBER_STRING
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type Dog
   *            extends Animal ? number : string; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0016_dog_extends_animal_number_string', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn166', returns: 'Dog extends Animal ? number : string',
          parameters: [{ type: 'Dog extends Animal ? number : string', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias166', alias: 'Dog extends Animal ? number : string', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias166');
      assert.strictEqual(converted.types[0].alias, 'Dog extends Animal ? number : string');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn166');
      assert.strictEqual(converted.funcs[0].returns, "Dog extends Animal ? number : string",
        "h2dtscpp_convert_combo_0016_dog_extends_animal_number_string type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Dog extends Animal ? number : string",
        "h2dtscpp_convert_combo_0016_dog_extends_animal_number_string type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample166_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn166') || generated.napiCppContent.includes('typeFn166')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn166'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0016_dog_extends_animal_number_string execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0017_T_EXTENDS_NUMBER_IDLABEL_36D2C4
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0017_T_EXTENDS_NUMBER_IDLABEL_36D2C4
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type T extends number ?
   *            IdLabel : NameLabel; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0017_t_extends_number_idlabel_36d2c4', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass167', alias: '',
          variableList: [{ type: 'T extends number ? IdLabel : NameLabel', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass167');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "T extends number ? IdLabel : NameLabel",
        "h2dtscpp_convert_combo_0017_t_extends_number_idlabel_36d2c4 class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0017_t_extends_number_idlabel_36d2c4 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0018_T_EXTENDS_NUMBER_IDLABEL_36D2C4
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0018_T_EXTENDS_NUMBER_IDLABEL_36D2C4
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type T extends number ?
   *            IdLabel : NameLabel; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0018_t_extends_number_idlabel_36d2c4', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun167', returns: 'T extends number ? IdLabel : NameLabel',
          parameters: [{ type: 'T extends number ? IdLabel : NameLabel', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun167');
      assert.strictEqual(converted.funcs[0].returns, "T extends number ? IdLabel : NameLabel",
        "h2dtscpp_convert_combo_0018_t_extends_number_idlabel_36d2c4 global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "T extends number ? IdLabel : NameLabel",
        "h2dtscpp_convert_combo_0018_t_extends_number_idlabel_36d2c4 global param type convert convert output");
      const generated = generateFunctions(converted, 'sample167_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun167') || generated.napiCppContent.includes('globalRun167')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun167'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0018_t_extends_number_idlabel_36d2c4 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0019_T_EXTENDS_NUMBER_IDLABEL_36D2C4
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0019_T_EXTENDS_NUMBER_IDLABEL_36D2C4
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type T extends number ?
   *            IdLabel : NameLabel; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0019_t_extends_number_idlabel_36d2c4', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass167', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'T extends number ? IdLabel : NameLabel',
            parameters: [{ type: 'T extends number ? IdLabel : NameLabel', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "T extends number ? IdLabel : NameLabel",
        "h2dtscpp_convert_combo_0019_t_extends_number_idlabel_36d2c4 class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type,
        "T extends number ? IdLabel : NameLabel",
        "h2dtscpp_convert_combo_0019_t_extends_number_idlabel_36d2c4 class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0019_t_extends_number_idlabel_36d2c4 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0020_T_EXTENDS_NUMBER_IDLABEL_36D2C4
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0020_T_EXTENDS_NUMBER_IDLABEL_36D2C4
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type T extends number
   *            ? IdLabel : NameLabel; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0020_t_extends_number_idlabel_36d2c4', () => {
    try {
      const parsed = doParseTs('h2cpp167.ts', `function h2cpp167(p: T extends number ? IdLabel : NameLabel):
        T extends number ? IdLabel : NameLabel { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp167');
      assert.strictEqual(converted.funcs[0].returns, "T extends number ? IdLabel : NameLabel",
        "h2dtscpp_convert_combo_0020_t_extends_number_idlabel_36d2c4 parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "T extends number ? IdLabel : NameLabel",
        "h2dtscpp_convert_combo_0020_t_extends_number_idlabel_36d2c4 parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp167.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp167') || generated.napiCppContent.includes('h2cpp167')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp167'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0020_t_extends_number_idlabel_36d2c4 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0021_T_EXTENDS_NUMBER_IDLABEL_36D2C4
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0021_T_EXTENDS_NUMBER_IDLABEL_36D2C4
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type T
   *            extends number ? IdLabel : NameLabel; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0021_t_extends_number_idlabel_36d2c4', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn167', returns: 'T extends number ? IdLabel : NameLabel',
          parameters: [{ type: 'T extends number ? IdLabel : NameLabel', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias167', alias: 'T extends number ? IdLabel : NameLabel', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias167');
      assert.strictEqual(converted.types[0].alias, 'T extends number ? IdLabel : NameLabel');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn167');
      assert.strictEqual(converted.funcs[0].returns, "T extends number ? IdLabel : NameLabel",
        "h2dtscpp_convert_combo_0021_t_extends_number_idlabel_36d2c4 type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "T extends number ? IdLabel : NameLabel",
        "h2dtscpp_convert_combo_0021_t_extends_number_idlabel_36d2c4 type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample167_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn167') || generated.napiCppContent.includes('typeFn167')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn167'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0021_t_extends_number_idlabel_36d2c4 execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0022_WORLD
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0022_WORLD
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type "world"; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0022_world', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass169', alias: '',
          variableList: [{ type: '"world"', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass169');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "\"world\"",
        "h2dtscpp_convert_combo_0022_world class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0022_world execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0023_WORLD
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0023_WORLD
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type "world"; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0023_world', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun169', returns: '"world"',
          parameters: [{ type: '"world"', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun169');
      assert.strictEqual(converted.funcs[0].returns, "\"world\"",
        "h2dtscpp_convert_combo_0023_world global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"world\"",
        "h2dtscpp_convert_combo_0023_world global param type convert convert output");
      const generated = generateFunctions(converted, 'sample169_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun169') || generated.napiCppContent.includes('globalRun169')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun169'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0023_world execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0024_WORLD
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0024_WORLD
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type "world"; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0024_world', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass169', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: '"world"',
            parameters: [{ type: '"world"', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "\"world\"",
        "h2dtscpp_convert_combo_0024_world class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "\"world\"",
        "h2dtscpp_convert_combo_0024_world class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0024_world execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0025_WORLD
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0025_WORLD
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type "world";
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0025_world', () => {
    try {
      const parsed = doParseTs('h2cpp169.ts', `function h2cpp169(p: "world"): "world" { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp169');
      assert.strictEqual(converted.funcs[0].returns, "\"world\"",
        "h2dtscpp_convert_combo_0025_world parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"world\"",
        "h2dtscpp_convert_combo_0025_world parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp169.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp169') || generated.napiCppContent.includes('h2cpp169')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp169'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0025_world execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0026_WORLD
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0026_WORLD
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            "world"; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0026_world', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn169', returns: '"world"',
          parameters: [{ type: '"world"', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias169', alias: '"world"', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias169');
      assert.strictEqual(converted.types[0].alias, '"world"');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn169');
      assert.strictEqual(converted.funcs[0].returns, "\"world\"",
        "h2dtscpp_convert_combo_0026_world type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "\"world\"",
        "h2dtscpp_convert_combo_0026_world type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample169_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn169') || generated.napiCppContent.includes('typeFn169')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn169'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0026_world execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0027_UPPERCASE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0027_UPPERCASE_GREETING
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type Uppercase<Greeting>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0027_uppercase_greeting', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass173', alias: '',
          variableList: [{ type: 'Uppercase<Greeting>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass173');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Uppercase<Greeting>",
        "h2dtscpp_convert_combo_0027_uppercase_greeting class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0027_uppercase_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0028_UPPERCASE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0028_UPPERCASE_GREETING
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type Uppercase<Greeting>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0028_uppercase_greeting', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun173', returns: 'Uppercase<Greeting>',
          parameters: [{ type: 'Uppercase<Greeting>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun173');
      assert.strictEqual(converted.funcs[0].returns, "Uppercase<Greeting>",
        "h2dtscpp_convert_combo_0028_uppercase_greeting global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Uppercase<Greeting>",
        "h2dtscpp_convert_combo_0028_uppercase_greeting global param type convert convert output");
      const generated = generateFunctions(converted, 'sample173_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun173') || generated.napiCppContent.includes('globalRun173')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun173'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0028_uppercase_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0029_UPPERCASE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0029_UPPERCASE_GREETING
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type Uppercase<Greeting>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0029_uppercase_greeting', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass173', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Uppercase<Greeting>',
            parameters: [{ type: 'Uppercase<Greeting>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Uppercase<Greeting>",
        "h2dtscpp_convert_combo_0029_uppercase_greeting class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Uppercase<Greeting>",
        "h2dtscpp_convert_combo_0029_uppercase_greeting class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0029_uppercase_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0030_UPPERCASE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0030_UPPERCASE_GREETING
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type
   *            Uppercase<Greeting>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0030_uppercase_greeting', () => {
    try {
      const parsed = doParseTs('h2cpp173.ts', `
        function h2cpp173(p: Uppercase<Greeting>): Uppercase<Greeting> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp173');
      assert.strictEqual(converted.funcs[0].returns, "Uppercase<Greeting>",
        "h2dtscpp_convert_combo_0030_uppercase_greeting parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Uppercase<Greeting>",
        "h2dtscpp_convert_combo_0030_uppercase_greeting parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp173.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp173') || generated.napiCppContent.includes('h2cpp173')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp173'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0030_uppercase_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0031_UPPERCASE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0031_UPPERCASE_GREETING
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            Uppercase<Greeting>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0031_uppercase_greeting', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn173', returns: 'Uppercase<Greeting>',
          parameters: [{ type: 'Uppercase<Greeting>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias173', alias: 'Uppercase<Greeting>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias173');
      assert.strictEqual(converted.types[0].alias, 'Uppercase<Greeting>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn173');
      assert.strictEqual(converted.funcs[0].returns, "Uppercase<Greeting>",
        "h2dtscpp_convert_combo_0031_uppercase_greeting type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Uppercase<Greeting>",
        "h2dtscpp_convert_combo_0031_uppercase_greeting type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample173_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn173') || generated.napiCppContent.includes('typeFn173')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn173'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0031_uppercase_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0032_LOWERCASE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0032_LOWERCASE_GREETING
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type Lowercase<Greeting>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0032_lowercase_greeting', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass174', alias: '',
          variableList: [{ type: 'Lowercase<Greeting>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass174');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Lowercase<Greeting>",
        "h2dtscpp_convert_combo_0032_lowercase_greeting class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0032_lowercase_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0033_LOWERCASE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0033_LOWERCASE_GREETING
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type Lowercase<Greeting>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0033_lowercase_greeting', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun174', returns: 'Lowercase<Greeting>',
          parameters: [{ type: 'Lowercase<Greeting>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun174');
      assert.strictEqual(converted.funcs[0].returns, "Lowercase<Greeting>",
        "h2dtscpp_convert_combo_0033_lowercase_greeting global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Lowercase<Greeting>",
        "h2dtscpp_convert_combo_0033_lowercase_greeting global param type convert convert output");
      const generated = generateFunctions(converted, 'sample174_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun174') || generated.napiCppContent.includes('globalRun174')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun174'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0033_lowercase_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0034_LOWERCASE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0034_LOWERCASE_GREETING
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type Lowercase<Greeting>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0034_lowercase_greeting', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass174', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Lowercase<Greeting>',
            parameters: [{ type: 'Lowercase<Greeting>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Lowercase<Greeting>",
        "h2dtscpp_convert_combo_0034_lowercase_greeting class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Lowercase<Greeting>",
        "h2dtscpp_convert_combo_0034_lowercase_greeting class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0034_lowercase_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0035_LOWERCASE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0035_LOWERCASE_GREETING
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type
   *            Lowercase<Greeting>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0035_lowercase_greeting', () => {
    try {
      const parsed = doParseTs('h2cpp174.ts', `
        function h2cpp174(p: Lowercase<Greeting>): Lowercase<Greeting> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp174');
      assert.strictEqual(converted.funcs[0].returns, "Lowercase<Greeting>",
        "h2dtscpp_convert_combo_0035_lowercase_greeting parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Lowercase<Greeting>",
        "h2dtscpp_convert_combo_0035_lowercase_greeting parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp174.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp174') || generated.napiCppContent.includes('h2cpp174')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp174'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0035_lowercase_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0036_LOWERCASE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0036_LOWERCASE_GREETING
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            Lowercase<Greeting>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0036_lowercase_greeting', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn174', returns: 'Lowercase<Greeting>',
          parameters: [{ type: 'Lowercase<Greeting>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias174', alias: 'Lowercase<Greeting>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias174');
      assert.strictEqual(converted.types[0].alias, 'Lowercase<Greeting>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn174');
      assert.strictEqual(converted.funcs[0].returns, "Lowercase<Greeting>",
        "h2dtscpp_convert_combo_0036_lowercase_greeting type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Lowercase<Greeting>",
        "h2dtscpp_convert_combo_0036_lowercase_greeting type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample174_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn174') || generated.napiCppContent.includes('typeFn174')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn174'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0036_lowercase_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0037_CAPITALIZE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0037_CAPITALIZE_GREETING
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type Capitalize<Greeting>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0037_capitalize_greeting', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass175', alias: '',
          variableList: [{ type: 'Capitalize<Greeting>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass175');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Capitalize<Greeting>",
        "h2dtscpp_convert_combo_0037_capitalize_greeting class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0037_capitalize_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0038_CAPITALIZE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0038_CAPITALIZE_GREETING
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type
   *            Capitalize<Greeting>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0038_capitalize_greeting', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun175', returns: 'Capitalize<Greeting>',
          parameters: [{ type: 'Capitalize<Greeting>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun175');
      assert.strictEqual(converted.funcs[0].returns, "Capitalize<Greeting>",
        "h2dtscpp_convert_combo_0038_capitalize_greeting global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Capitalize<Greeting>",
        "h2dtscpp_convert_combo_0038_capitalize_greeting global param type convert convert output");
      const generated = generateFunctions(converted, 'sample175_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun175') || generated.napiCppContent.includes('globalRun175')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun175'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0038_capitalize_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0039_CAPITALIZE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0039_CAPITALIZE_GREETING
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type Capitalize<Greeting>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0039_capitalize_greeting', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass175', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Capitalize<Greeting>',
            parameters: [{ type: 'Capitalize<Greeting>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Capitalize<Greeting>",
        "h2dtscpp_convert_combo_0039_capitalize_greeting class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Capitalize<Greeting>",
        "h2dtscpp_convert_combo_0039_capitalize_greeting class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0039_capitalize_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0040_CAPITALIZE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0040_CAPITALIZE_GREETING
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type
   *            Capitalize<Greeting>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0040_capitalize_greeting', () => {
    try {
      const parsed = doParseTs('h2cpp175.ts', `
        function h2cpp175(p: Capitalize<Greeting>): Capitalize<Greeting> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp175');
      assert.strictEqual(converted.funcs[0].returns, "Capitalize<Greeting>",
        "h2dtscpp_convert_combo_0040_capitalize_greeting parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Capitalize<Greeting>",
        "h2dtscpp_convert_combo_0040_capitalize_greeting parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp175.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp175') || generated.napiCppContent.includes('h2cpp175')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp175'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0040_capitalize_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0041_CAPITALIZE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0041_CAPITALIZE_GREETING
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            Capitalize<Greeting>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0041_capitalize_greeting', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn175', returns: 'Capitalize<Greeting>',
          parameters: [{ type: 'Capitalize<Greeting>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias175', alias: 'Capitalize<Greeting>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias175');
      assert.strictEqual(converted.types[0].alias, 'Capitalize<Greeting>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn175');
      assert.strictEqual(converted.funcs[0].returns, "Capitalize<Greeting>",
        "h2dtscpp_convert_combo_0041_capitalize_greeting type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Capitalize<Greeting>",
        "h2dtscpp_convert_combo_0041_capitalize_greeting type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample175_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn175') || generated.napiCppContent.includes('typeFn175')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn175'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0041_capitalize_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0042_UNCAPITALIZE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0042_UNCAPITALIZE_GREETING
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type Uncapitalize<Greeting>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0042_uncapitalize_greeting', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass176', alias: '',
          variableList: [{ type: 'Uncapitalize<Greeting>', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass176');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Uncapitalize<Greeting>",
        "h2dtscpp_convert_combo_0042_uncapitalize_greeting class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0042_uncapitalize_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0043_UNCAPITALIZE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0043_UNCAPITALIZE_GREETING
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type
   *            Uncapitalize<Greeting>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0043_uncapitalize_greeting', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun176', returns: 'Uncapitalize<Greeting>',
          parameters: [{ type: 'Uncapitalize<Greeting>', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun176');
      assert.strictEqual(converted.funcs[0].returns, "Uncapitalize<Greeting>",
        "h2dtscpp_convert_combo_0043_uncapitalize_greeting global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Uncapitalize<Greeting>",
        "h2dtscpp_convert_combo_0043_uncapitalize_greeting global param type convert convert output");
      const generated = generateFunctions(converted, 'sample176_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun176') || generated.napiCppContent.includes('globalRun176')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun176'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0043_uncapitalize_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0044_UNCAPITALIZE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0044_UNCAPITALIZE_GREETING
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type Uncapitalize<Greeting>;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0044_uncapitalize_greeting', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass176', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Uncapitalize<Greeting>',
            parameters: [{ type: 'Uncapitalize<Greeting>', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Uncapitalize<Greeting>",
        "h2dtscpp_convert_combo_0044_uncapitalize_greeting class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Uncapitalize<Greeting>",
        "h2dtscpp_convert_combo_0044_uncapitalize_greeting class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0044_uncapitalize_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0045_UNCAPITALIZE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0045_UNCAPITALIZE_GREETING
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type
   *            Uncapitalize<Greeting>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0045_uncapitalize_greeting', () => {
    try {
      const parsed = doParseTs('h2cpp176.ts', `
        function h2cpp176(p: Uncapitalize<Greeting>): Uncapitalize<Greeting> { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp176');
      assert.strictEqual(converted.funcs[0].returns, "Uncapitalize<Greeting>",
        "h2dtscpp_convert_combo_0045_uncapitalize_greeting parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Uncapitalize<Greeting>",
        "h2dtscpp_convert_combo_0045_uncapitalize_greeting parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp176.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp176') || generated.napiCppContent.includes('h2cpp176')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp176'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0045_uncapitalize_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0046_UNCAPITALIZE_GREETING
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0046_UNCAPITALIZE_GREETING
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            Uncapitalize<Greeting>; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0046_uncapitalize_greeting', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn176', returns: 'Uncapitalize<Greeting>',
          parameters: [{ type: 'Uncapitalize<Greeting>', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias176', alias: 'Uncapitalize<Greeting>', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias176');
      assert.strictEqual(converted.types[0].alias, 'Uncapitalize<Greeting>');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn176');
      assert.strictEqual(converted.funcs[0].returns, "Uncapitalize<Greeting>",
        "h2dtscpp_convert_combo_0046_uncapitalize_greeting type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Uncapitalize<Greeting>",
        "h2dtscpp_convert_combo_0046_uncapitalize_greeting type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample176_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn176') || generated.napiCppContent.includes('typeFn176')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn176'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0046_uncapitalize_greeting execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0047_DATE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0047_DATE
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type Date; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0047_date', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass189', alias: '',
          variableList: [{ type: 'Date', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass189');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Date",
        "h2dtscpp_convert_combo_0047_date class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0047_date execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0048_DATE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0048_DATE
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type Date; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0048_date', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun189', returns: 'Date',
          parameters: [{ type: 'Date', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun189');
      assert.strictEqual(converted.funcs[0].returns, "Date",
        "h2dtscpp_convert_combo_0048_date global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Date",
        "h2dtscpp_convert_combo_0048_date global param type convert convert output");
      const generated = generateFunctions(converted, 'sample189_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun189') || generated.napiCppContent.includes('globalRun189')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun189'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0048_date execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0049_DATE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0049_DATE
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type Date; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0049_date', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass189', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Date',
            parameters: [{ type: 'Date', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Date",
        "h2dtscpp_convert_combo_0049_date class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Date",
        "h2dtscpp_convert_combo_0049_date class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0049_date execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0050_DATE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0050_DATE
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type Date; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0050_date', () => {
    try {
      const parsed = doParseTs('h2cpp189.ts', `function h2cpp189(p: Date): Date { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp189');
      assert.strictEqual(converted.funcs[0].returns, "Date",
        "h2dtscpp_convert_combo_0050_date parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Date",
        "h2dtscpp_convert_combo_0050_date parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp189.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp189') || generated.napiCppContent.includes('h2cpp189')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp189'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0050_date execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0051_DATE
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0051_DATE
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type Date;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0051_date', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn189', returns: 'Date',
          parameters: [{ type: 'Date', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias189', alias: 'Date', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias189');
      assert.strictEqual(converted.types[0].alias, 'Date');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn189');
      assert.strictEqual(converted.funcs[0].returns, "Date",
        "h2dtscpp_convert_combo_0051_date type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Date",
        "h2dtscpp_convert_combo_0051_date type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample189_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn189') || generated.napiCppContent.includes('typeFn189')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn189'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0051_date execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0052_REGEXP
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0052_REGEXP
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type RegExp; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0052_regexp', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass190', alias: '',
          variableList: [{ type: 'RegExp', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass190');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "RegExp",
        "h2dtscpp_convert_combo_0052_regexp class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0052_regexp execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0053_REGEXP
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0053_REGEXP
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type RegExp; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0053_regexp', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun190', returns: 'RegExp',
          parameters: [{ type: 'RegExp', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun190');
      assert.strictEqual(converted.funcs[0].returns, "RegExp",
        "h2dtscpp_convert_combo_0053_regexp global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "RegExp",
        "h2dtscpp_convert_combo_0053_regexp global param type convert convert output");
      const generated = generateFunctions(converted, 'sample190_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun190') || generated.napiCppContent.includes('globalRun190')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun190'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0053_regexp execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0006_ERROR
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0006_ERROR
   * @tc.desc   Stability convert h2dtscpp/combo: class-method convert; type Error; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0006_error', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass191', alias: '',
          variableList: [],
          functionList: [{ type: 'function', name: 'run', returns: 'Error',
            parameters: [{ type: 'Error', name: 'param', arraySize: 0, arraySizeList: [] }]
          }]
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.ok(converted.classes[0].functionList.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].name, 'run');
      assert.strictEqual(converted.classes[0].functionList[0].returns, "Error",
        "h2dtscpp_convert_combo_0006_error class method return type convert convert output");
      assert.ok(converted.classes[0].functionList[0].parameters.length >= 1);
      assert.strictEqual(converted.classes[0].functionList[0].parameters[0].type, "Error",
        "h2dtscpp_convert_combo_0006_error class method param type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0006_error execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0007_ERROR
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0007_ERROR
   * @tc.desc   Stability convert h2dtscpp/combo: parse-convert-gen pipeline; type Error;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0007_error', () => {
    try {
      const parsed = doParseTs('h2cpp191.ts', `function h2cpp191(p: Error): Error { return p; }`);
      assert.ok(parsed !== undefined && typeof parsed === 'object', "parse result must be object");
      const converted = transParseObj(parsed);
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'h2cpp191');
      assert.strictEqual(converted.funcs[0].returns, "Error",
        "h2dtscpp_convert_combo_0007_error parse return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Error",
        "h2dtscpp_convert_combo_0007_error parse param type convert convert output");
      const generated = generateFunctions(converted, 'h2cpp191.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('h2cpp191') || generated.napiCppContent.includes('h2cpp191')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('h2cpp191'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0007_error execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0008_ERROR
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0008_ERROR
   * @tc.desc   Stability convert h2dtscpp/combo: type-alias and global-function convert; type
   *            Error; strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0008_error', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'typeFn191', returns: 'Error',
          parameters: [{ type: 'Error', name: 'p', arraySize: 0, arraySizeList: [] }]
        }],
        types: [{ name: 'Alias191', alias: 'Error', members: [], functions: [], types: []
        }]
      });
      assert.ok(Array.isArray(converted.types) && converted.types.length >= 1);
      assert.strictEqual(converted.types[0].name, 'Alias191');
      assert.strictEqual(converted.types[0].alias, 'Error');
      assert.ok(Array.isArray(converted.types[0].types));
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'typeFn191');
      assert.strictEqual(converted.funcs[0].returns, "Error",
        "h2dtscpp_convert_combo_0008_error type fn return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Error",
        "h2dtscpp_convert_combo_0008_error type fn param type convert convert output");
      const generated = generateFunctions(converted, 'sample191_type.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('typeFn191') || generated.napiCppContent.includes('typeFn191')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('typeFn191'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0008_error execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0009_UINT8ARRAY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0009_UINT8ARRAY
   * @tc.desc   Stability convert h2dtscpp/combo: class-field convert; type Uint8Array; strictEqual
   *            convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0009_uint8array', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'SampleClass192', alias: '',
          variableList: [{ type: 'Uint8Array', name: 'value', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.ok(converted.classes.length >= 1);
      assert.strictEqual(converted.classes[0].name, 'SampleClass192');
      assert.ok(converted.classes[0].variableList.length >= 1);
      assert.strictEqual(converted.classes[0].variableList[0].name, 'value');
      assert.strictEqual(converted.classes[0].variableList[0].type, "Uint8Array",
        "h2dtscpp_convert_combo_0009_uint8array class var type convert convert output");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0009_uint8array execution error: ${err}`);
    }
  });

  /**
   * @tc.name   SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0010_UINT8ARRAY
   * @tc.number SUB_NAPI_H2DTSCPP_CONVERT_COMBO_0010_UINT8ARRAY
   * @tc.desc   Stability convert h2dtscpp/combo: global-function convert; type Uint8Array;
   *            strictEqual convert output.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('h2dtscpp_convert_combo_0010_uint8array', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [],
        funcs: [{ type: 'function', name: 'globalRun192', returns: 'Uint8Array',
          parameters: [{ type: 'Uint8Array', name: 'gparam', arraySize: 0, arraySizeList: [] }]
        }],
        types: []
      });
      assert.ok(converted.funcs.length >= 1);
      assert.strictEqual(converted.funcs[0].name, 'globalRun192');
      assert.strictEqual(converted.funcs[0].returns, "Uint8Array",
        "h2dtscpp_convert_combo_0010_uint8array global return type convert convert output");
      assert.ok(converted.funcs[0].parameters.length >= 1);
      assert.strictEqual(converted.funcs[0].parameters[0].type, "Uint8Array",
        "h2dtscpp_convert_combo_0010_uint8array global param type convert convert output");
      const generated = generateFunctions(converted, 'sample192_global.d.ts');
      assert.ok(generated !== undefined && typeof generated === 'object');
      assert.strictEqual(typeof generated.napiHContent, "string", "napiH must be string");
      assert.ok(generated.napiHContent.length > 0, "napiH must be non-empty");
      assert.strictEqual(typeof generated.napiCppContent, "string", "napiCpp must be string");
      assert.ok((generated.napiHContent.includes('globalRun192') || generated.napiCppContent.includes('globalRun192')),
        "gen must reference function");
      assert.strictEqual((generated.napiHContent + generated.napiCppContent).includes('globalRun192'), true,
        "gen must reference function");
    } catch (err) {
      assert.fail(`h2dtscpp_convert_combo_0010_uint8array execution error: ${err}`);
    }
  });
});
