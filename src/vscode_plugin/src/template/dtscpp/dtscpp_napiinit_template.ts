/*
* Copyright (c) 2024 Shenzhen Kaihong Digital Industry Development Co., Ltd.
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

import { FileTemp } from "../../gen/datatype";

export let napiInitTemplate: FileTemp = {
  name: '[fileName]init.cpp',
  content: `#include "napi/native_api.h"
  #include <hilog/log.h>
  #include <string>
  #include "[fileName]napi.h"
  
  EXTERN_C_START
  
  /*[NAPI_GEN]:Init函数被定义用来初始化模块（比如设置导出的函数或对象）*/
  static napi_value Init(napi_env env, napi_value exports)
  {
      /* [NAPI_GEN]:napi_property_descriptor是Node.js中N-API的一个结构体，它用来描述一个对象的属性，这包括数据属性和访问器
       * 属性(通常是getter和setter函数), 这个结构体包含了以下字段
       * utf8name: 属性的名称，以 null 结尾的 UTF-8 字符串。
       * name: 可选，代替 utf8name 的 napi_value 类型的名称。这允许使用预先存在的 napi_value，可能是一个字符串或符号。
       * method: 如果这个属性是一个函数，这里会是一个指向原生函数的指针。
       * getter: 如果这个属性有一个 getter 函数，这里会是一个指向该 getter 原生函数的指针。
       * setter: 如果这个属性有一个 setter 函数，这里会是一个指向该 setter 原生函数的指针。
       * value: 如果这个属性是一个数据属性，这里会是一个 napi_value 表示属性的值。
       * attributes: 属性的描述符，指定属性是否可写（napi_writable）、可枚举（napi_enumerable）、可配置（napi_configurable）等。
       * data: 一个指针，指向与属性相关联的任何原生数据。这通常用于存储与 getter 和 setter 相关联的上下文信息。
       */
      napi_property_descriptor desc[] = {
      [init_replace]
      };
  
      /* [NAPI_GEN]:napi_define_properties 是一个N-API函数，它允许原生模块在 JavaScript 对象上定义新的属性。允许一次性定义多个属性。
       * 这个函数是在原生代码中定义对象形状的关键工具，可以用来向对象添加属性，包括数据属性和访问器属性（getter/setter）
       * env: N-API 环境句柄，代表当前的运行环境。
       * object: 一个 napi_value，指向你想要定义属性的对象。
       * property_count: 属性描述符数组中的元素数量，告知函数有多少个属性需要定义。
       * properties: 指向 napi_property_descriptor 结构体数组的指针，每个结构体描述了一个要定义的属性。
       */
      napi_define_properties(env, exports, sizeof(desc) / sizeof(desc[0]), desc);
      
      [class_init_replace]
      [struct_init_replace]
      
      return exports;
  }
  EXTERN_C_END
  static napi_module demoModule = {
      .nm_version = 1,
      .nm_flags = 0,
      .nm_filename = nullptr,
      .nm_register_func = Init,  /*[NAPI_GEN]:将初始化函数Init与模块关联起来*/
      .nm_modname = "entry",
      .nm_priv = ((void*)0),
      .reserved = { 0 },
  };
  
  extern "C" __attribute__((constructor)) void RegisterEntryModule(void)
  {
      /*[NAPI_GEN]:napi_module_register 宏被用来静态注册模块初始化函数，使得Node.js在加载模块时调用它。*/
      napi_module_register(&demoModule);
  }
  `
}