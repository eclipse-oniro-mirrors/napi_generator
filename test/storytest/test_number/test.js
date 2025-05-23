/*
* Copyright (c) 2022 Shenzhen Kaihong Digital Industry Development Co., Ltd. 
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
const test = require("./out/build/Release/napitest")
var assert = require("assert");

describe('number first cases', function () {
    // 测试：function fun1(v: number): number;
    it('test fun1', function () {
        let ret = test.fun1(18);
        assert.deepStrictEqual(ret, 0);
    });

    // 测试：function fun2(v1: number, v2: number[]): number[];
    it('test fun2', function () {
        let ret = test.fun2(18, [18, 20]);
        assert.deepStrictEqual(ret, []);
    });

    // 测试：function fun3(v1: Array<number>, v2: number): Array<number>;
    it('test fun3', function () {
        let ret = test.fun3([18, 20], 20);
        assert.deepStrictEqual(ret, []);
    });

    // 测试：function fun4(v: { [key: string]: number }): number;
    it('test fun4', function () {
        let ret = test.fun4({ 'isTrue': 18, 'isExit': 20 });
        assert.deepStrictEqual(ret, 0);
    });

    // 测试：function fun5(v1: Map<string, number>, v2: number): number;
    it('test fun5', function () {
        let ret = test.fun5({ 'isTrue': 18, 'isExit': 20 }, 18);
        assert.deepStrictEqual(ret, 0);
    });

    function asynFun1(err, ret) {
        assert.strictEqual(err.code, 0)
        assert.deepStrictEqual(ret, 0)
    }

    function def1(ret) {
        assert.deepStrictEqual(ret, 0);
    }

    // 测试：function fun6(v1: number, callback: AsyncCallback<number>): void;
    it('test fun6_callback', function () {
        test.fun6(15, asynFun1);
        test.fun6(15).then(def1);
    });

    // 测试：function fun6(v1: number): Promise<number>;
    it('test fun6_promise', function () {
        let promiseObj = test.fun6(15);
        promiseObj.then(ret => { def1(ret) });
    });
});

describe('number second cases', function () {
    function asynFun2(err, ret) {
        assert.deepStrictEqual(err.code, 0)
        assert.deepStrictEqual(ret, [])
    }

    function def2(ret) {
        assert.deepStrictEqual(ret, []);
    }

    // 测试：function fun7(v: number, v1: AsyncCallback<Array<number>>): void;
    it('test fun7_callback', function () {
        test.fun7(15, asynFun2);
        test.fun7(15).then(def2);
    });
    
    // 测试：function fun7(v: number): Promise<Array<number>>;
    it('test fun7_promise', function () {
        let promiseObj = test.fun7(15);
        promiseObj.then(ret => { def2(ret) });
    }); 

    function cb1(ret) {
        assert.deepStrictEqual(ret, 0)
    }

    // 测试：function fun9(v1: number, callback: Callback<number>): void;
    it('test fun9', function () {
        test.fun9(15, cb1);
    });

    // 测试：function fun10(v1: Test): Test;
    it('test fun10', function () {
        let ret = test.fun10({ age: 18, height: [20, 20], width: [18, 18] });
        assert.deepStrictEqual(typeof ret, 'object');
        assert.strictEqual(ret.age,0)
        assert.deepStrictEqual(ret.height,[])
        assert.deepStrictEqual(ret.width,[])
    });
});