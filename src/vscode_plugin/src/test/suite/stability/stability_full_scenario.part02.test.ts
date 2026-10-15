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
import { transCkey2Dtskey, transParseObj, generateFunctions } from '../../../gen/gendtscpp';
import { transTskey2Ckey } from '../../../gen/gendts';
import { doParseTs } from '../../../parse/parsets';
import * as parsec from '../../../parse/parsec';
}

suite('Stability_Full_Scenario_Part02', function() {
  this.timeout(600000);
  vscode.window.showInformationMessage('Start Stability_Full_Scenario_Part01.');

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_025
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_025
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type Callback<string[]>;
   *            strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_025', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen24', alias: '',
          variableList: [{ type: 'Callback<string[]>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::vector<std::string>)>",
        "stability_scenario_h2dtscpp_type_025 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_24.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_026
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_026
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type Callback<boolean[]>;
   *            strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_026', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_25.ts', `
        function scen25(p: Callback<boolean[]>): Callback<boolean[]> { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::vector<bool>)>",
        "stability_scenario_dts2cpp_type_026_param convert output");
      const generated = generateFunctions(converted, 'scen_25.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario Callback<boolean[]>: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_026
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_026
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::vector<short>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_026', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_25(std::vector<short> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_026 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_026 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_026
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_026
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type Callback<boolean[]>;
   *            strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_026', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen25', alias: '',
          variableList: [{ type: 'Callback<boolean[]>', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::vector<bool>)>",
        "stability_scenario_h2dtscpp_type_026 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_25.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_027
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_027
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type (p0:number)=>number;
   *            strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_027', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_26.ts', `
        function scen26(p: (p0:number)=>number): (p0:number)=>number { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(double)>",
        "stability_scenario_dts2cpp_type_027_param convert output");
      const generated = generateFunctions(converted, 'scen_26.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:number)=>number: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_027
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_027
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::vector<uint8_t>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_027', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_26(std::vector<uint8_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_027 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_027 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_027
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_027
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type (p0:number)=>number;
   *            strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_027', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen26', alias: '',
          variableList: [{ type: '(p0:number)=>number', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(double)>",
        "stability_scenario_h2dtscpp_type_027 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_26.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_028
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_028
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type (p0:string)=>number;
   *            strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_028', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_27.ts', `
        function scen27(p: (p0:string)=>number): (p0:string)=>number { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::string)>",
        "stability_scenario_dts2cpp_type_028_param convert output");
      const generated = generateFunctions(converted, 'scen_27.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:string)=>number: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_028
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_028
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::vector<uint16_t>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_028', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_27(std::vector<uint16_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_028 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_028 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_028
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_028
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type (p0:string)=>number;
   *            strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_028', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen27', alias: '',
          variableList: [{ type: '(p0:string)=>number', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(std::string)>",
        "stability_scenario_h2dtscpp_type_028 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_27.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_029
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_029
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type (p0:boolean)=>number;
   *            strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_029', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_28.ts', `
        function scen28(p: (p0:boolean)=>number): (p0:boolean)=>number { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool)>",
        "stability_scenario_dts2cpp_type_029_param convert output");
      const generated = generateFunctions(converted, 'scen_28.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:boolean)=>number: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_029
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_029
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::vector<uint32_t>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_029', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_28(std::vector<uint32_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_029 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_029 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_029
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_029
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type (p0:boolean)=>number;
   *            strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_029', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen28', alias: '',
          variableList: [{ type: '(p0:boolean)=>number', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(bool)>",
        "stability_scenario_h2dtscpp_type_029 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_28.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_030
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_030
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type (p0:number)=>string;
   *            strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_030', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_29.ts', `
        function scen29(p: (p0:number)=>string): (p0:number)=>string { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double)>",
        "stability_scenario_dts2cpp_type_030_param convert output");
      const generated = generateFunctions(converted, 'scen_29.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:number)=>string: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_030
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_030
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::vector<uint64_t>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_030', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_29(std::vector<uint64_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_030 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_030 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_030
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_030
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type (p0:number)=>string;
   *            strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_030', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen29', alias: '',
          variableList: [{ type: '(p0:number)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(double)>",
        "stability_scenario_h2dtscpp_type_030 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_29.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_031
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_031
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type (p0:string)=>string;
   *            strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_031', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_30.ts', `
        function scen30(p: (p0:string)=>string): (p0:string)=>string { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::string)>",
        "stability_scenario_dts2cpp_type_031_param convert output");
      const generated = generateFunctions(converted, 'scen_30.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:string)=>string: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_031
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_031
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::vector<int8_t>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_031', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_30(std::vector<int8_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_031 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_031 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_031
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_031
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type (p0:string)=>string;
   *            strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_031', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen30', alias: '',
          variableList: [{ type: '(p0:string)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(std::string)>",
        "stability_scenario_h2dtscpp_type_031 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_30.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_032
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_032
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type (p0:boolean)=>string;
   *            strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_032', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_31.ts', `
        function scen31(p: (p0:boolean)=>string): (p0:boolean)=>string { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(bool)>",
        "stability_scenario_dts2cpp_type_032_param convert output");
      const generated = generateFunctions(converted, 'scen_31.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:boolean)=>string: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_032
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_032
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::vector<int16_t>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_032', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_31(std::vector<int16_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_032 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_032 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_032
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_032
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type (p0:boolean)=>string;
   *            strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_032', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen31', alias: '',
          variableList: [{ type: '(p0:boolean)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(bool)>",
        "stability_scenario_h2dtscpp_type_032 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_31.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_033
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_033
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type (p0:number)=>boolean;
   *            strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_033', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_32.ts', `
        function scen32(p: (p0:number)=>boolean): (p0:number)=>boolean { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double)>",
        "stability_scenario_dts2cpp_type_033_param convert output");
      const generated = generateFunctions(converted, 'scen_32.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:number)=>boolean: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_033
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_033
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::vector<int32_t>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_033', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_32(std::vector<int32_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_033 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_033 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_033
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_033
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type (p0:number)=>boolean;
   *            strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_033', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen32', alias: '',
          variableList: [{ type: '(p0:number)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double)>",
        "stability_scenario_h2dtscpp_type_033 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_32.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_034
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_034
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type (p0:string)=>boolean;
   *            strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_034', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_33.ts', `
        function scen33(p: (p0:string)=>boolean): (p0:string)=>boolean { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(std::string)>",
        "stability_scenario_dts2cpp_type_034_param convert output");
      const generated = generateFunctions(converted, 'scen_33.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:string)=>boolean: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_034
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_034
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::vector<int64_t>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_034', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_33(std::vector<int64_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_034 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_034 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_034
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_034
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type (p0:string)=>boolean;
   *            strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_034', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen33', alias: '',
          variableList: [{ type: '(p0:string)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(std::string)>",
        "stability_scenario_h2dtscpp_type_034 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_33.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_035
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_035
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type (p0:boolean)=>boolean;
   *            strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_035', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_34.ts', `
        function scen34(p: (p0:boolean)=>boolean): (p0:boolean)=>boolean { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool)>",
        "stability_scenario_dts2cpp_type_035_param convert output");
      const generated = generateFunctions(converted, 'scen_34.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:boolean)=>boolean: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_035
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_035
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::vector<unsigned>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_035', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_34(std::vector<unsigned> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_035 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_035 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_035
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_035
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type (p0:boolean)=>boolean;
   *            strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_035', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen34', alias: '',
          variableList: [{ type: '(p0:boolean)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(bool)>",
        "stability_scenario_h2dtscpp_type_035 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_34.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_036
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_036
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type (p0:number)=>void;
   *            strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_036', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_35.ts', `
        function scen35(p: (p0:number)=>void): (p0:number)=>void { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(double)>",
        "stability_scenario_dts2cpp_type_036_param convert output");
      const generated = generateFunctions(converted, 'scen_35.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:number)=>void: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_036
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_036
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::vector<bool>; strictEqual
   *            parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_036', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_35(std::vector<bool> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_036 convert output non-empty");
      assert.strictEqual(converted, "Array<boolean>", "stability_scenario_h2dts_type_036 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_036
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_036
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type (p0:number)=>void;
   *            strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_036', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen35', alias: '',
          variableList: [{ type: '(p0:number)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(double)>",
        "stability_scenario_h2dtscpp_type_036 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_35.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_037
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_037
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type (p0:string)=>void;
   *            strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_037', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_36.ts', `
        function scen36(p: (p0:string)=>void): (p0:string)=>void { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(std::string)>",
        "stability_scenario_dts2cpp_type_037_param convert output");
      const generated = generateFunctions(converted, 'scen_36.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:string)=>void: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_037
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_037
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::vector<char>; strictEqual
   *            parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_037', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_36(std::vector<char> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_037 convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "stability_scenario_h2dts_type_037 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_037
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_037
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type (p0:string)=>void;
   *            strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_037', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen36', alias: '',
          variableList: [{ type: '(p0:string)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(std::string)>",
        "stability_scenario_h2dtscpp_type_037 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_36.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_038
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_038
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type (p0:boolean)=>void;
   *            strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_038', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_37.ts', `
        function scen37(p: (p0:boolean)=>void): (p0:boolean)=>void { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<void(bool)>",
        "stability_scenario_dts2cpp_type_038_param convert output");
      const generated = generateFunctions(converted, 'scen_37.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:boolean)=>void: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_038
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_038
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::vector<wchar_t>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_038', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_37(std::vector<wchar_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_038 convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "stability_scenario_h2dts_type_038 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_038
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_038
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type (p0:boolean)=>void;
   *            strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_038', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen37', alias: '',
          variableList: [{ type: '(p0:boolean)=>void', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<void(bool)>",
        "stability_scenario_h2dtscpp_type_038 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_37.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_039
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_039
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type
   *            (p0:number,p1:number)=>number; strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_039', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_38.ts', `
        function scen38(p: (p0:number,p1:number)=>number): (p0:number,p1:number)=>number { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(double, double)>",
        "stability_scenario_dts2cpp_type_039_param convert output");
      const generated = generateFunctions(converted, 'scen_38.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:number,p1:number)=>number: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_039
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_039
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::vector<char8_t>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_039', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_38(std::vector<char8_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_039 convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "stability_scenario_h2dts_type_039 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_039
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_039
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type
   *            (p0:number,p1:number)=>number; strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_039', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen38', alias: '',
          variableList: [{ type: '(p0:number,p1:number)=>number', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(double, double)>",
        "stability_scenario_h2dtscpp_type_039 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_38.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_040
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_040
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type
   *            (p0:number,p1:boolean)=>number; strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_040', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_39.ts', `
        function scen39(p: (p0:number,p1:boolean)=>number): (p0:number,p1:boolean)=>number { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(double, bool)>",
        "stability_scenario_dts2cpp_type_040_param convert output");
      const generated = generateFunctions(converted, 'scen_39.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:number,p1:boolean)=>number: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_040
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_040
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::vector<char16_t>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_040', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_39(std::vector<char16_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_040 convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "stability_scenario_h2dts_type_040 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_040
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_040
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type
   *            (p0:number,p1:boolean)=>number; strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_040', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen39', alias: '',
          variableList: [{ type: '(p0:number,p1:boolean)=>number', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(double, bool)>",
        "stability_scenario_h2dtscpp_type_040 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_39.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_041
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_041
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type
   *            (p0:string,p1:string)=>number; strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_041', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_40.ts', `
        function scen40(p: (p0:string,p1:string)=>number): (p0:string,p1:string)=>number { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(std::string, std::string)>",
        "stability_scenario_dts2cpp_type_041_param convert output");
      const generated = generateFunctions(converted, 'scen_40.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:string,p1:string)=>number: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_041
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_041
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::vector<char32_t>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_041', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_40(std::vector<char32_t> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_041 convert output non-empty");
      assert.strictEqual(converted, "Array<string>", "stability_scenario_h2dts_type_041 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_041
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_041
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type
   *            (p0:string,p1:string)=>number; strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_041', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen40', alias: '',
          variableList: [{ type: '(p0:string,p1:string)=>number', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(std::string, std::string)>",
        "stability_scenario_h2dtscpp_type_041 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_40.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_042
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_042
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type
   *            (p0:boolean,p1:number)=>number; strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_042', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_41.ts', `
        function scen41(p: (p0:boolean,p1:number)=>number): (p0:boolean,p1:number)=>number { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool, double)>",
        "stability_scenario_dts2cpp_type_042_param convert output");
      const generated = generateFunctions(converted, 'scen_41.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:boolean,p1:number)=>number: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_042
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_042
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::array<int, 10>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_042', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_41(std::array<int, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_042 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_042 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_042
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_042
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type
   *            (p0:boolean,p1:number)=>number; strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_042', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen41', alias: '',
          variableList: [{ type: '(p0:boolean,p1:number)=>number', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(bool, double)>",
        "stability_scenario_h2dtscpp_type_042 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_41.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_043
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_043
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type
   *            (p0:boolean,p1:boolean)=>number; strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_043', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_42.ts', `
        function scen42(p: (p0:boolean,p1:boolean)=>number): (p0:boolean,p1:boolean)=>number { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<double(bool, bool)>",
        "stability_scenario_dts2cpp_type_043_param convert output");
      const generated = generateFunctions(converted, 'scen_42.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:boolean,p1:boolean)=>number: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_043
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_043
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::array<size_t, 10>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_043', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_42(std::array<size_t, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_043 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_043 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_043
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_043
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type
   *            (p0:boolean,p1:boolean)=>number; strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_043', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen42', alias: '',
          variableList: [{ type: '(p0:boolean,p1:boolean)=>number', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<double(bool, bool)>",
        "stability_scenario_h2dtscpp_type_043 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_42.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_044
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_044
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type
   *            (p0:number,p1:number)=>string; strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_044', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_43.ts', `
        function scen43(p: (p0:number,p1:number)=>string): (p0:number,p1:number)=>string { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double, double)>",
        "stability_scenario_dts2cpp_type_044_param convert output");
      const generated = generateFunctions(converted, 'scen_43.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:number,p1:number)=>string: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_044
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_044
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::array<double, 10>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_044', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_43(std::array<double, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_044 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_044 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_044
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_044
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type
   *            (p0:number,p1:number)=>string; strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_044', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen43', alias: '',
          variableList: [{ type: '(p0:number,p1:number)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(double, double)>",
        "stability_scenario_h2dtscpp_type_044 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_43.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_045
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_045
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type
   *            (p0:number,p1:boolean)=>string; strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_045', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_44.ts', `
        function scen44(p: (p0:number,p1:boolean)=>string): (p0:number,p1:boolean)=>string { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(double, bool)>",
        "stability_scenario_dts2cpp_type_045_param convert output");
      const generated = generateFunctions(converted, 'scen_44.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:number,p1:boolean)=>string: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_045
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_045
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::array<float, 10>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_045', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_44(std::array<float, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_045 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_045 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_045
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_045
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type
   *            (p0:number,p1:boolean)=>string; strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_045', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen44', alias: '',
          variableList: [{ type: '(p0:number,p1:boolean)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(double, bool)>",
        "stability_scenario_h2dtscpp_type_045 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_44.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_046
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_046
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type
   *            (p0:string,p1:string)=>string; strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_046', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_45.ts', `
        function scen45(p: (p0:string,p1:string)=>string): (p0:string,p1:string)=>string { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(std::string, std::string)>",
        "stability_scenario_dts2cpp_type_046_param convert output");
      const generated = generateFunctions(converted, 'scen_45.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:string,p1:string)=>string: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_046
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_046
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::array<long, 10>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_046', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_45(std::array<long, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_046 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_046 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_046
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_046
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type
   *            (p0:string,p1:string)=>string; strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_046', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen45', alias: '',
          variableList: [{ type: '(p0:string,p1:string)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type,
        "std::function<std::string(std::string, std::string)>",
        "stability_scenario_h2dtscpp_type_046 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_45.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_047
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_047
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type
   *            (p0:boolean,p1:number)=>string; strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_047', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_46.ts', `
        function scen46(p: (p0:boolean,p1:number)=>string): (p0:boolean,p1:number)=>string { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(bool, double)>",
        "stability_scenario_dts2cpp_type_047_param convert output");
      const generated = generateFunctions(converted, 'scen_46.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:boolean,p1:number)=>string: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_047
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_047
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::array<short, 10>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_047', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_46(std::array<short, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_047 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_047 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_047
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_047
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type
   *            (p0:boolean,p1:number)=>string; strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_047', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen46', alias: '',
          variableList: [{ type: '(p0:boolean,p1:number)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(bool, double)>",
        "stability_scenario_h2dtscpp_type_047 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_46.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_048
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_048
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type
   *            (p0:boolean,p1:boolean)=>string; strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_048', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_47.ts', `
        function scen47(p: (p0:boolean,p1:boolean)=>string): (p0:boolean,p1:boolean)=>string { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<std::string(bool, bool)>",
        "stability_scenario_dts2cpp_type_048_param convert output");
      const generated = generateFunctions(converted, 'scen_47.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:boolean,p1:boolean)=>string: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_048
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_048
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::array<uint8_t, 10>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_048', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_47(std::array<uint8_t, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_048 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_048 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_048
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_048
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type
   *            (p0:boolean,p1:boolean)=>string; strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_048', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen47', alias: '',
          variableList: [{ type: '(p0:boolean,p1:boolean)=>string', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<std::string(bool, bool)>",
        "stability_scenario_h2dtscpp_type_048 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_47.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_049
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_049
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type
   *            (p0:number,p1:number)=>boolean; strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_049', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_48.ts', `
        function scen48(p: (p0:number,p1:number)=>boolean): (p0:number,p1:number)=>boolean { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double, double)>",
        "stability_scenario_dts2cpp_type_049_param convert output");
      const generated = generateFunctions(converted, 'scen_48.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:number,p1:number)=>boolean: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_049
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_049
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::array<uint16_t, 10>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_049', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_48(std::array<uint16_t, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_049 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_049 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_049
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_049
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type
   *            (p0:number,p1:number)=>boolean; strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_049', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen48', alias: '',
          variableList: [{ type: '(p0:number,p1:number)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double, double)>",
        "stability_scenario_h2dtscpp_type_049 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_48.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_050
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_050
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type
   *            (p0:number,p1:boolean)=>boolean; strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_050', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_49.ts', `
        function scen49(p: (p0:number,p1:boolean)=>boolean): (p0:number,p1:boolean)=>boolean { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(double, bool)>",
        "stability_scenario_dts2cpp_type_050_param convert output");
      const generated = generateFunctions(converted, 'scen_49.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:number,p1:boolean)=>boolean: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_050
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_050
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::array<uint32_t, 10>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_050', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_49(std::array<uint32_t, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_050 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_050 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_050
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_050
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type
   *            (p0:number,p1:boolean)=>boolean; strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_050', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen49', alias: '',
          variableList: [{ type: '(p0:number,p1:boolean)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(double, bool)>",
        "stability_scenario_h2dtscpp_type_050 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_49.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_051
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_051
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type
   *            (p0:string,p1:string)=>boolean; strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_051', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_50.ts', `
        function scen50(p: (p0:string,p1:string)=>boolean): (p0:string,p1:string)=>boolean { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(std::string, std::string)>",
        "stability_scenario_dts2cpp_type_051_param convert output");
      const generated = generateFunctions(converted, 'scen_50.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:string,p1:string)=>boolean: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_051
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_051
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::array<uint64_t, 10>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_051', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_50(std::array<uint64_t, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_051 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_051 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_051
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTSCPP_TYPE_051
   * @tc.desc   Stability scenario h2dtscpp: ParseObj-to-gen pipeline type
   *            (p0:string,p1:string)=>boolean; strictEqual field/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dtscpp_type_051', () => {
    try {
      const converted = transParseObj({
        enums: [], unions: [], structs: [],
        classes: [{ name: 'Scen50', alias: '',
          variableList: [{ type: '(p0:string,p1:string)=>boolean', name: 'v', arraySize: 0, arraySizeList: [] }],
          functionList: []
        }],
        funcs: [], types: []
      });
      assert.strictEqual(converted.classes[0].variableList[0].type, "std::function<bool(std::string, std::string)>",
        "stability_scenario_h2dtscpp_type_051 type convert convert output");
      const generated = generateFunctions(converted, 'scen_cpp_50.d.ts');
      assert.ok(generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('h2dtscpp type scenario: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_052
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_DTS2CPP_TYPE_052
   * @tc.desc   Stability scenario dts2cpp: parse-convert-gen pipeline type
   *            (p0:boolean,p1:number)=>boolean; strictEqual convert/gen.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_dts2cpp_type_052', () => {
    try {
      const converted = transParseObj(doParseTs('scen_dts_51.ts', `
        function scen51(p: (p0:boolean,p1:number)=>boolean): (p0:boolean,p1:number)=>boolean { return p; }`));
      assert.strictEqual(converted.funcs[0].parameters[0].type, "std::function<bool(bool, double)>",
        "stability_scenario_dts2cpp_type_052_param convert output");
      const generated = generateFunctions(converted, 'scen_51.d.ts');
      assert.ok(converted.funcs.length >= 1 && generated && typeof generated.napiHContent === 'string');
    } catch (err) {
      assert.fail('dts2cpp type scenario (p0:boolean,p1:number)=>boolean: ' + String(err));
    }
  });

  /**
   * @tc.name   SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_052
   * @tc.number SUB_NAPI_STABILITY_SCENARIO_H2DTS_TYPE_052
   * @tc.desc   Stability scenario h2dts: parse+convert pipeline type std::array<int8_t, 10>;
   *            strictEqual parse/convert.
   * @tc.type   FUNCTION
   * @tc.size   MEDIUMTEST
   * @tc.level  LEVEL0
   */
  test('stability_scenario_h2dts_type_052', () => {
    try {
      const r = parsec.parseFunction(`void scen_h2_51(std::array<int8_t, 10> p);`);
      assert.ok(Array.isArray(r));
      assert.ok(r.length >= 1 && r[0].parameters && r[0].parameters.length >= 1);
      const converted = transTskey2Ckey(r[0].parameters[0].type);
      assert.ok(typeof converted === 'string' && converted.length > 0,
        "stability_scenario_h2dts_type_052 convert output non-empty");
      assert.strictEqual(converted, "Array<number>", "stability_scenario_h2dts_type_052 convert output");
    } catch (err) {
      assert.fail('h2dts type scenario: ' + String(err));
    }
  });
});
