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
import * as parsec from '../../../parse/parsec';

suite('Parse_C_Func_Suite_Ext16', function () {
  this.timeout(120000);
  vscode.window.showInformationMessage('Start Parse_C_Func_Suite_Ext16');
  /**
  * @tc.number c_func_0740
  * @tc.name parseFunc_c_ext_0740
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::shared_ptr<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0740', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT000(std::shared_ptr<int> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT000');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::shared_ptr<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0740 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0741
  * @tc.name parseFunc_c_ext_0741
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::shared_ptr<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0741', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::shared_ptr<int> getT000();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT000');
      assert.strictEqual(funcList[0].returns, 'std::shared_ptr<int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0741 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0742
  * @tc.name parseFunc_c_ext_0742
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::shared_ptr<std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0742', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT001(std::shared_ptr<std::string> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT001');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::shared_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0742 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0743
  * @tc.name parseFunc_c_ext_0743
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::shared_ptr<std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0743', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::shared_ptr<std::string> getT001();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT001');
      assert.strictEqual(funcList[0].returns, 'std::shared_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0743 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0744
  * @tc.name parseFunc_c_ext_0744
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::shared_ptr<double> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0744', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT002(std::shared_ptr<double> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT002');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::shared_ptr<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0744 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0745
  * @tc.name parseFunc_c_ext_0745
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::shared_ptr<double> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0745', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::shared_ptr<double> getT002();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT002');
      assert.strictEqual(funcList[0].returns, 'std::shared_ptr<double>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0745 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0746
  * @tc.name parseFunc_c_ext_0746
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::unique_ptr<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0746', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT003(std::unique_ptr<int> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT003');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unique_ptr<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0746 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0747
  * @tc.name parseFunc_c_ext_0747
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::unique_ptr<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0747', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::unique_ptr<int> getT003();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT003');
      assert.strictEqual(funcList[0].returns, 'std::unique_ptr<int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0747 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0748
  * @tc.name parseFunc_c_ext_0748
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::unique_ptr<std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0748', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT004(std::unique_ptr<std::string> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT004');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unique_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0748 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0749
  * @tc.name parseFunc_c_ext_0749
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::unique_ptr<std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0749', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::unique_ptr<std::string> getT004();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT004');
      assert.strictEqual(funcList[0].returns, 'std::unique_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0749 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0750
  * @tc.name parseFunc_c_ext_0750
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::unique_ptr<char> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0750', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT005(std::unique_ptr<char> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT005');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::unique_ptr<char>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0750 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0751
  * @tc.name parseFunc_c_ext_0751
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::unique_ptr<char> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0751', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::unique_ptr<char> getT005();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT005');
      assert.strictEqual(funcList[0].returns, 'std::unique_ptr<char>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0751 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0752
  * @tc.name parseFunc_c_ext_0752
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::weak_ptr<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0752', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT006(std::weak_ptr<int> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT006');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::weak_ptr<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0752 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0753
  * @tc.name parseFunc_c_ext_0753
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::weak_ptr<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0753', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::weak_ptr<int> getT006();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT006');
      assert.strictEqual(funcList[0].returns, 'std::weak_ptr<int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0753 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0754
  * @tc.name parseFunc_c_ext_0754
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::weak_ptr<std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0754', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT007(std::weak_ptr<std::string> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT007');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::weak_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0754 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0755
  * @tc.name parseFunc_c_ext_0755
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::weak_ptr<std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0755', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::weak_ptr<std::string> getT007();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT007');
      assert.strictEqual(funcList[0].returns, 'std::weak_ptr<std::string>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0755 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0756
  * @tc.name parseFunc_c_ext_0756
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::optional<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0756', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT008(std::optional<int> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT008');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::optional<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0756 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0757
  * @tc.name parseFunc_c_ext_0757
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::optional<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0757', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::optional<int> getT008();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT008');
      assert.strictEqual(funcList[0].returns, 'std::optional<int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0757 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0758
  * @tc.name parseFunc_c_ext_0758
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::optional<std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0758', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT009(std::optional<std::string> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT009');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::optional<std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0758 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0759
  * @tc.name parseFunc_c_ext_0759
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::optional<std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0759', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::optional<std::string> getT009();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT009');
      assert.strictEqual(funcList[0].returns, 'std::optional<std::string>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0759 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0760
  * @tc.name parseFunc_c_ext_0760
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::optional<double> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0760', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT010(std::optional<double> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT010');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::optional<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0760 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0761
  * @tc.name parseFunc_c_ext_0761
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::optional<double> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0761', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::optional<double> getT010();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT010');
      assert.strictEqual(funcList[0].returns, 'std::optional<double>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0761 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0762
  * @tc.name parseFunc_c_ext_0762
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::optional<bool> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0762', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT011(std::optional<bool> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT011');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::optional<bool>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0762 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0763
  * @tc.name parseFunc_c_ext_0763
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::optional<bool> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0763', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::optional<bool> getT011();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT011');
      assert.strictEqual(funcList[0].returns, 'std::optional<bool>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0763 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0764
  * @tc.name parseFunc_c_ext_0764
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::variant<int, std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0764', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT012(std::variant<int, std::string> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT012');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::variant<int, std::string>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0764 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0765
  * @tc.name parseFunc_c_ext_0765
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::variant<int, std::string> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0765', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::variant<int, std::string> getT012();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT012');
      assert.strictEqual(funcList[0].returns, 'std::variant<int, std::string>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0765 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0766
  * @tc.name parseFunc_c_ext_0766
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::variant<double, bool> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0766', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT013(std::variant<double, bool> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT013');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::variant<double, bool>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0766 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0767
  * @tc.name parseFunc_c_ext_0767
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::variant<double, bool> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0767', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::variant<double, bool> getT013();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT013');
      assert.strictEqual(funcList[0].returns, 'std::variant<double, bool>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0767 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0768
  * @tc.name parseFunc_c_ext_0768
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::variant<int, float, double> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0768', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT014(std::variant<int, float, double> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT014');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::variant<int, float, double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0768 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0769
  * @tc.name parseFunc_c_ext_0769
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::variant<int, float, double> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0769', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::variant<int, float, double> getT014();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT014');
      assert.strictEqual(funcList[0].returns, 'std::variant<int, float, double>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0769 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0770
  * @tc.name parseFunc_c_ext_0770
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::string_view 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0770', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT015(std::string_view v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT015');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::string_view');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0770 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0771
  * @tc.name parseFunc_c_ext_0771
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::string_view 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0771', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::string_view getT015();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT015');
      assert.strictEqual(funcList[0].returns, 'std::string_view');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0771 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0772
  * @tc.name parseFunc_c_ext_0772
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::bitset<8> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0772', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT016(std::bitset<8> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT016');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::bitset<8>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0772 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0773
  * @tc.name parseFunc_c_ext_0773
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::bitset<8> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0773', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::bitset<8> getT016();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT016');
      assert.strictEqual(funcList[0].returns, 'std::bitset<8>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0773 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0774
  * @tc.name parseFunc_c_ext_0774
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::bitset<16> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0774', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT017(std::bitset<16> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT017');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::bitset<16>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0774 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0775
  * @tc.name parseFunc_c_ext_0775
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::bitset<16> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0775', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::bitset<16> getT017();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT017');
      assert.strictEqual(funcList[0].returns, 'std::bitset<16>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0775 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0776
  * @tc.name parseFunc_c_ext_0776
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::bitset<32> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0776', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT018(std::bitset<32> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT018');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::bitset<32>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0776 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0777
  * @tc.name parseFunc_c_ext_0777
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::bitset<32> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0777', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::bitset<32> getT018();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT018');
      assert.strictEqual(funcList[0].returns, 'std::bitset<32>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0777 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0778
  * @tc.name parseFunc_c_ext_0778
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::span<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0778', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT019(std::span<int> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT019');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::span<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0778 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0779
  * @tc.name parseFunc_c_ext_0779
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::span<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0779', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::span<int> getT019();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT019');
      assert.strictEqual(funcList[0].returns, 'std::span<int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0779 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0780
  * @tc.name parseFunc_c_ext_0780
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::span<double> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0780', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT020(std::span<double> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT020');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::span<double>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0780 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0781
  * @tc.name parseFunc_c_ext_0781
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::span<double> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0781', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::span<double> getT020();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT020');
      assert.strictEqual(funcList[0].returns, 'std::span<double>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0781 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0782
  * @tc.name parseFunc_c_ext_0782
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::atomic<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0782', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT021(std::atomic<int> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT021');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::atomic<int>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0782 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0783
  * @tc.name parseFunc_c_ext_0783
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::atomic<int> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0783', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::atomic<int> getT021();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT021');
      assert.strictEqual(funcList[0].returns, 'std::atomic<int>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0783 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0784
  * @tc.name parseFunc_c_ext_0784
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::atomic<bool> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0784', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT022(std::atomic<bool> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT022');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::atomic<bool>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0784 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0785
  * @tc.name parseFunc_c_ext_0785
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::atomic<bool> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0785', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::atomic<bool> getT022();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT022');
      assert.strictEqual(funcList[0].returns, 'std::atomic<bool>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0785 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0786
  * @tc.name parseFunc_c_ext_0786
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::atomic<long> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0786', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT023(std::atomic<long> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT023');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::atomic<long>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0786 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0787
  * @tc.name parseFunc_c_ext_0787
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::atomic<long> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0787', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::atomic<long> getT023();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT023');
      assert.strictEqual(funcList[0].returns, 'std::atomic<long>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0787 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0788
  * @tc.name parseFunc_c_ext_0788
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::basic_string<char> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0788', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT024(std::basic_string<char> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT024');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::basic_string<char>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0788 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0789
  * @tc.name parseFunc_c_ext_0789
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::basic_string<char> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0789', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::basic_string<char> getT024();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT024');
      assert.strictEqual(funcList[0].returns, 'std::basic_string<char>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0789 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0790
  * @tc.name parseFunc_c_ext_0790
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::basic_string<wchar_t> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0790', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT025(std::basic_string<wchar_t> v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT025');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::basic_string<wchar_t>');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0790 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0791
  * @tc.name parseFunc_c_ext_0791
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::basic_string<wchar_t> 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0791', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::basic_string<wchar_t> getT025();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT025');
      assert.strictEqual(funcList[0].returns, 'std::basic_string<wchar_t>');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0791 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0792
  * @tc.name parseFunc_c_ext_0792
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::byte 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0792', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT026(std::byte v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT026');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::byte');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0792 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0793
  * @tc.name parseFunc_c_ext_0793
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::byte 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0793', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::byte getT026();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT026');
      assert.strictEqual(funcList[0].returns, 'std::byte');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0793 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0794
  * @tc.name parseFunc_c_ext_0794
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::chrono::milliseconds 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0794', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT027(std::chrono::milliseconds v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT027');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::chrono::milliseconds');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0794 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0795
  * @tc.name parseFunc_c_ext_0795
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::chrono::milliseconds 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0795', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::chrono::milliseconds getT027();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT027');
      assert.strictEqual(funcList[0].returns, 'std::chrono::milliseconds');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0795 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0796
  * @tc.name parseFunc_c_ext_0796
  * @tc.desc h2dts parseFunction：类型覆盖-入参：std::chrono::seconds 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0796', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`void setT028(std::chrono::seconds v);`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'setT028');
      assert.strictEqual(funcList[0].returns, 'void');
      assert.strictEqual(funcList[0].parameters.length, 1);
      assert.strictEqual(funcList[0].parameters[0].type, 'std::chrono::seconds');
      assert.strictEqual(funcList[0].parameters[0].name, 'v');
          } catch (err) {
      assert.fail(`c_func_0796 执行异常: ${String(err)}`);
    }
  });

  /**
  * @tc.number c_func_0797
  * @tc.name parseFunc_c_ext_0797
  * @tc.desc h2dts parseFunction：类型覆盖-返回：std::chrono::seconds 的解析结果与性能。
  * @tc.size MediumTest
  * @tc.type Function
  * @tc.level Level 1
  */
  test('parseFunc_c_ext_0797', () => {
    try {
      let funcList: any;
            funcList = parsec.parseFunction(`std::chrono::seconds getT028();`);
      assert.ok(funcList);
      assert.strictEqual(funcList.length, 1);
      assert.strictEqual(funcList[0].name, 'getT028');
      assert.strictEqual(funcList[0].returns, 'std::chrono::seconds');
      assert.strictEqual(funcList[0].parameters.length, 0);
          } catch (err) {
      assert.fail(`c_func_0797 执行异常: ${String(err)}`);
    }
  });

});
