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

// h2sa
export let proxyFuncTemplate = `[retType] [serviceName]Proxy::[funcName]([params])
{
    int retCode;
    MessageParcel data, reply;
    MessageOption option;
    data.WriteInterfaceToken(GetDescriptor());
    [writeData]
    retCode = Remote()->SendRequest([funcEnum], data, reply, option);
    retCode = reply.ReadInt32();
    if (retCode != ERR_OK) {
      // Todo 错误处理
    }

    [readReply]
}\n\n`;

export let stubInnerFuncTemplate = `ErrCode [serviceName]Stub::[funcName]Inner(MessageParcel &data, MessageParcel &reply)
{
    int retCode = ERR_OK;
    [readData]
    [writeReply]
    return retCode;
}
`;

export let serviceFuncImplTemplate = `[retType] [serviceName]Service::[funcName]([params])
{
    [retType] ret = [initRetvalue];
    // TODO: Invoke the business implementation
    return ret;
}
`;


// h2hdf
export let hdiServiceFuncTemplate = `int32_t [marcoName]InterfaceService::[functionName]([params])
{
    // [hdf-gen] TODO: Invoke the business implementation
    return HDF_SUCCESS;
}
`;

// h2dtscpp

// dts template
export let dtsFuncTemplate = `/* [NAPI_GEN]:对应[file_introduce_replace]中：[func_introduce_replace]方法的dts接口
* 输入: [input_introduce_replace]
* 输出: [func_return_replace]
*/
export const [func_name_replace]:([func_param_replace]) => [func_return_replace];
`

// napi方法的初始化
export let napiFuncInitTemplate = `// [NAPI_GEN]:方法注册后,js方法与native方法映射
    { "[func_name_replace]" , nullptr, [func_name_replace], nullptr, nullptr, nullptr, napi_default, nullptr },
`;

// napi方法定义
export let napiFuncHTemplate = `/* [NAPI_GEN]:对应[file_introduce_replace]中：[func_name_replace]的napi方法,
* 输入：[input_introduce_replace]
* 输出：[func_return_replace]
*/ 
napi_value [func_name_replace](napi_env env, napi_callback_info info);
`;

// napi方法体实现
export let napiFuncCppTemplate = `/* [NAPI_GEN]:对应[file_introduce_replace]中：[func_name_replace]的napi方法,
* 输入：[input_introduce_replace]
* 输出：[output_introduce_replace]
*/ 
napi_value [func_name_replace](napi_env env, napi_callback_info info)
{
  OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, "[func_name_replace]", "[func_name_replace] begins");
  napi_status status;
  /* [NAPI_GEN]: Node.js在其N-API中用来提供错误的扩展信息的结构体,结构体包含以下字段
   * error_message: 一个指向错误详细字符串的指针，提供了关于错误的文本描述
   * engin_reserved: 一个保留给Js引擎使用的指针
   * error_code: 错误码,指示了错误的种类,比如napi_pending_exception表示有一个JavaScript异常未被清理。
   * engine_error_code:一个引擎特定的错误码,为引擎实现保留,具体含义依赖于使用的JavaScript引擎。
   * error_message_len:错误消息字符串的长度。
   */
  const napi_extended_error_info *extended_error_info;
  /* [NAPI_GEN]: tag: 日志打印标签*/
  const char *tag = "[[get_error_msg_tag]]";
  /* [NAPI_GEN]: get function param in*/
  [func_getParam_replace]
  OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, "[func_name_replace]", "[func_name_replace] get return info begins");
  [func_return_replace]
}

`;

// napi方法返回值处理
export let napiFuncRetTemplate = `  // Todo: add business logic. 在这前后代码为框架所生成

  /* [NAPI_GEN]: function return value*/ 
  [return_replace]
  OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, "[func_name_replace]", "[func_name_replace] get return info ends");
  OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, "[func_name_replace]", "[func_name_replace] ends");
  return [return_name]Out;
`;

// napi方法返回值各种类型模板
export let uint32tRet =  `  napi_value [return_name_replace]Out;
  /* [NAPI_GEN]: 返回值是uint32_t类型时,napi_create_uint32创建一个包含32位无符号整数(uint32_t)的js数值对象
   * env: 当前环境的句柄
   * value: 要转换成js数值的uint32_t值,这里以传入1为例,用例新增业务代码时可根据自身需求修改
   * result: 指向napi_value的指针,函数执行成功后这个指针将指向新创建的js数值对象
   */
  status = napi_create_uint32(env, 1, &[return_name_replace]Out);
  if (status != napi_ok) {
      /*错误处理*/
      getErrMessage(status, env, extended_error_info, "napi_create_uint32", tag);
      return nullptr;
  }
`;

export let stringRet =  `  napi_value [return_name_replace]Out;
  /* [NAPI_GEN]: 返回值是字符串时,napi_create_string_utf8用于在原生代码中创建一个新的js字符串。这个函数会根据提供的UTF-8编码的字符串创建一个等价的js字符串
   * env: 当前环境的句柄
   * str: 指向以null结尾的UTF-8编码的C字符串的指针,这里以"[return_name_replace]"举例，用户可根据需求修改
   * length: 字符串的长度,可以是具体的字节数,或者使用特殊的值NAPI_AUTO_LENGTH来让函数自己计算长度(假定字符串以null结尾)
   * result: 指向napi_value的指针,函数执行成功后这个指针将指向新创建的js字符串
   */
  status = napi_create_string_utf8(env, "[return_name_replace]", NAPI_AUTO_LENGTH, &[return_name_replace]Out);
  if (status != napi_ok) {
      /*错误处理*/
      getErrMessage(status, env, extended_error_info, "napi_create_string_utf8", tag);
      return nullptr;
  }
`;

export let stringRetUtf16 =  `  napi_value [return_name_replace]Out;
  /* [NAPI_GEN]: 返回值是字符串时,napi_create_string_utf16用于在原生代码中创建一个新的js字符串。这个函数会根据提供的UTF-16编码的字符串创建一个等价的js字符串
   * env: 当前环境的句柄
   * str: 指向以null结尾的UTF-8编码的C字符串的指针,这里以"[return_name_replace]"举例，用户可根据需求修改
   * length: 字符串的长度,可以是具体的字节数,或者使用特殊的值NAPI_AUTO_LENGTH来让函数自己计算长度(假定字符串以null结尾)
   * result: 指向napi_value的指针,函数执行成功后这个指针将指向新创建的js字符串
   */
  status = napi_create_string_utf16(env, u"[return_name_replace]", NAPI_AUTO_LENGTH, &[return_name_replace]Out);
  if (status != napi_ok) {
      /*错误处理*/
      getErrMessage(status, env, extended_error_info, "napi_create_string_utf16", tag);
      return nullptr;
  }
`;

export let int64tRet =  `  napi_value [return_name_replace]Out;
  /* [NAPI_GEN]: 返回值是int64类型时,napi_create_int64创建一个包含64位整数(int64_t)的js数值对象
   * env: 当前环境的句柄
   * value: 要转换成js数值的int64_t值,这里以传入1为例,用例新增业务代码时可根据自身需求修改
   * result: 指向napi_value的指针,函数执行成功后这个指针将指向新创建的js数值对象
   */
  status = napi_create_int64(env, 1, &[return_name_replace]Out);
  if (status != napi_ok) {
      getErrMessage(status, env, extended_error_info, "napi_create_int64", tag);
      return nullptr;
  }
`;

export let int32tRet =  `  napi_value [return_name_replace]Out;
  /* [NAPI_GEN]: 返回值是int32_t类型时,napi_create_int32 创建一个包含32位整数(int32_t)的js数值(Number)对象
   * env: 当前环境的句柄
   * value: 要准换成js数值的int32_t的值,这里以传入1为例,用例新增业务代码时可根据自身需求修改
   * result: 指向napi_value的指针,这个指针会被设置为新创建的js数值对象
   */
  status = napi_create_int32(env, 1, &[return_name_replace]Out);
  if (status != napi_ok) {
      getErrMessage(status, env, extended_error_info, "napi_create_int32", tag);
      return nullptr;
  }
`;

export let doubleRet =  `  napi_value [return_name_replace]Out;
  /* [NAPI_GEN]: 返回值是double类型时,napi_create_double 创建一个包含双精度浮点数的js数值(Number)对象
   * env: 当前环境的句柄
   * value: 要传递给js的双精度浮点数值,这里以传入1.0为例，用例新增业务代码时可根据自身需求修改
   * result: 指向napi_value的指针,这个指针会被设置为新创建的js数值对象
   */
  status = napi_create_double(env, 1.0, &[return_name_replace]Out);
  if (status != napi_ok) {
      getErrMessage(status, env, extended_error_info, "napi_create_double", tag);
      return nullptr;
  }
`;

export let boolRet =  `  napi_value [return_name_replace]Out;
  /* [NAPI_GEN]: 返回值是bool类型时,napi_get_boolean创建一个表示布尔值的js Boolean对象
   * env: 当前环境的句柄
   * value: 希望表示的布尔值(C中的true或者false),这里以传入true为例,用例新增业务代码时可根据自身需求修改
   * result: 函数返回一个napi_value,它是对应于js Boolean对象的C语言表示
   */
  status = napi_get_boolean(env, true, &[return_name_replace]Out);
  if (status != napi_ok) {
      getErrMessage(status, env, extended_error_info, "napi_get_boolean", tag);
      return nullptr;
  }
`;

export let objectRet =  `  napi_value [return_name_replace]Out;
  /* [NAPI_GEN]: 返回值是对象时,需要使用napi_create_object创建一个js的对象与js代码交互
   * env: 当前环境的句柄
   * result: 一个napi_value的指针,该指针将被设置为新创建的js对象
   */
  status = napi_create_object(env, &[return_name_replace]Out);
  if (status != napi_ok) {
      getErrMessage(status, env, extended_error_info, "napi_create_object", tag);
      return nullptr;
  }
`;

export let objectTosetRet =  `  /* [NAPI_GEN]: 返回值是对象时,将native侧的对象的属性和值依次塞入napi_create_object创建出的对象，最终将该对象返回js
  * env: 当前环境的句柄
  * object: 要设置属性的js对象,该对象是由上文napi_create_object创建的
  * utf8name: 属性的名称,是一个以UTF-8编码的字符串
  * value: 与属性名称关联的值,这个值可以是任何js类型(如一个数值、字符串、另一个对象等)
  */
  status = napi_set_named_property(env, [set_objname_replace]Out, "[set_propname_replace]", [set_propvalue_replace]Out);
  if (status != napi_ok) {
     /* [NAPI_GEN]: 错误处理*/
     getErrMessage(status, env, extended_error_info, "napi_set_named_property", tag);
     return nullptr;
  }
`;

export let promiseRet =  `  napi_value [return_name_replace]Out;
  napi_deferred [return_name_replace]DeferedOut;
  /* [NAPI_GEN]: 创建一个空的promise对象
   * env: N-API环境的句柄,表示当前的上下文
   * promise: 用于接收创建的promise对象的指针
   * deferred: 用于接收deferred对象的指针
  */
  status = napi_create_promise(env, &[return_name_replace]Out, &[return_name_replace]DeferedOut);
  if (status != napi_ok) {
     /* [NAPI_GEN]: 错误处理*/
     getErrMessage(status, env, extended_error_info, "napi_create_promise", tag);
     return nullptr;
  }       
  // Todo: create async work here.
`;


// napi func的paramGen template
export let paramGenTemplate = `  napi_valuetype valuetype[param_name_replace];
  /* [NAPI_GEN]: 获取入参类型，第[param_index_replace]个入参
   * env: N-API环境的句柄,表示当前的上下文
   * value: 要检查类型的js值
   * result: 是一个指针,指向napi_valuetype枚举的值,函数会将结果存储在这里
   */
  status = napi_typeof(env, args[[param_index_replace]], &valuetype[param_name_replace]);
  if (status != napi_ok) {
      getErrMessage(status, env, extended_error_info, "napi_typeof", tag);
      return nullptr;
  }
  [getParam_replace]
`;

export let funcGetParamTemplate = `    /* [NAPI_GEN]: argc:js传入的参数个数 */
  size_t argc = [param_length];
  /* [NAPI_GEN]: args: 一个数组,保存js传入的参数 */
  napi_value args[[param_length]] = {nullptr};
  /* [NAPI_GEN]: napi_get_cb_info用于获取JS调用该函数时所传递的参数、接收参数的个数以及'this'的值
   * env: 当前环境的句柄,代表当前的Node.js环境
   * info: 回调信息句柄，代表当前回调的上下文
   * argc: 指向size_t的指针,最初应包含可接受的最大参数数量，函数返回时，它将包含实际传递的参数数量
   * args: 一个足够大的数组,用于接收传递给回调函数的所有js参数。数组的大小应至少与argc传入的值一样大。
   * this_arg: 如果不是NULL,则返回js回调中this的值
   * data: 如果不是NULL,则返回与回调函数关联的任何可选数据。通常用于传递在创建函数时指定的静态数据
   */
  status = napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
  if(status != napi_ok) {
      /* [NAPI_GEN]: 错误处理*/
      getErrMessage(status, env,extended_error_info, "napi_get_cb_info", tag);
      return nullptr;
  }
  /* [NAPI_GEN]: 从args数组中获取入参 */
  OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, "[func_name_replace]", "[func_name_replace] get param info begins");
  [getAllParam_replace]
  OH_LOG_Print(LOG_APP, LOG_INFO, LOG_PRINT_DOMAIN, "[func_name_replace]", "[func_name_replace] get param info ends");
`;

export let uint32tIn =  `  uint32_t [param_name_replace]In = 0;
  /* [NAPI_GEN]: napi_get_value_uint32将一个napi_value类型的js布尔值转换成一个C语言的uint32_t类型的数值，第[param_index_replace]个入参
   * env: N-API环境的句柄,表示当前的上下文
   * value:要转换的JavaScript值
   * result:指向 uint32_t 类型的指针，在这里函数将存储转换后的无符号整数
   */
  status = napi_get_value_uint32(env, args[[param_index_replace]], &[param_name_replace]In);
  if (status != napi_ok) {
      getErrMessage(status, env, extended_error_info, "napi_get_value_uint32", tag);
      return nullptr;
  }
`;

export let stringIn =  `  size_t strSize[param_index_replace] = 0;
  /* [NAPI_GEN]: napi_get_value_string_utf8用于将Js字符串转换为UTF-8编码的C字符串
   * env: N-API环境的句柄,表示当前的上下文
   * value: 要转换的JavaScript字符串
   * buf: 用于存储结果的字符数组的指针
   * bufsize: 缓冲区大小，以字节为单位
   * result: 转换后的字符串的字节长度(不包括空终止符)。若干buf是NULL,则返回所需的缓冲区大小(包括空终止符)
   */
  /* [NAPI_GEN]: buf参数是NULL时,用于获取所需缓冲区大小*/
  status = napi_get_value_string_utf8(env, args[[param_index_replace]], NULL, 0, &strSize[param_index_replace]);
  if (status != napi_ok) {
      getErrMessage(status, env, extended_error_info, "get value string", tag);
      return nullptr;
  }
  char *[param_name_replace]In = new char[strSize[param_index_replace] + 1];
  /* [NAPI_GEN]: 用于获取字符串*/
  status = napi_get_value_string_utf8(env, args[[param_index_replace]], [param_name_replace]In, strSize[param_index_replace] + 1, &strSize[param_index_replace]);
  if (status != napi_ok) {
      getErrMessage(status, env, extended_error_info, "get value string", tag);
      delete[] [param_name_replace]In;
      return nullptr;
  }
  // delete[] [param_name_replace]In;  // remember to delete memory 
`;

export let stringInUtf16 =  `  size_t strSize[param_index_replace] = 0;
  /* [NAPI_GEN]: napi_get_value_string_utf16用于将Js字符串转换为UTF-16编码的C字符串
   * env: N-API环境的句柄,表示当前的上下文
   * value: 要转换的JavaScript字符串
   * buf: 用于存储结果的字符数组的指针
   * bufsize: 缓冲区大小，以字节为单位
   * result: 转换后的字符串的字节长度(不包括空终止符)。若干buf是NULL,则返回所需的缓冲区大小(包括空终止符)
   */
  /* [NAPI_GEN]: buf参数是NULL时,用于获取所需缓冲区大小*/
  status = napi_get_value_string_utf16(env, args[[param_index_replace]], NULL, 0, &strSize[param_index_replace]);
  if (status != napi_ok) {
      getErrMessage(status, env, extended_error_info, "get value string", tag);
      return nullptr;
  }
  char16_t *[param_name_replace]In = new char16_t[strSize[param_index_replace] + 1];
  /* [NAPI_GEN]: 用于获取字符串*/
  status = napi_get_value_string_utf16(env, args[[param_index_replace]], [param_name_replace]In, strSize[param_index_replace] + 1, &strSize[param_index_replace]);
  if (status != napi_ok) {
      getErrMessage(status, env, extended_error_info, "get value string", tag);
      delete[] [param_name_replace]In;
      return nullptr;
  }
  // delete[] [param_name_replace]In;  // remember to delete memory 
`;

export let int64tIn =  `  int64_t [param_name_replace]In = 0;
  /* [NAPI_GEN]: napi_get_value_int64将一个 napi_value 类型的 js 布尔值转换成一个 C 语言的 int64_t 类型的数值
   * env: N-API环境的句柄,表示当前的上下文
   * value:要转换的JavaScript值
   * result:指向 int64_t 类型的指针，在这里函数将存储转换后的整数值
   */
  status = napi_get_value_int64(env, args[[param_index_replace]], &[param_name_replace]In);
  if (status != napi_ok) {
      getErrMessage(status, env, extended_error_info, "napi_get_value_int64", tag);
      return nullptr;
  }
`;

export let int32tIn =  `  int32_t [param_name_replace]In = 0;
  /* [NAPI_GEN]: napi_get_value_int32将一个 napi_value 类型的 js 数值转换成一个 C 语言的 int32_t 类型的数值
   * env: N-API环境的句柄,表示当前的上下文
   * value:要转换的JavaScript值
   * result:指向 int32_t 类型的指针，在这里函数将存储转换后的整数值
   */
  status = napi_get_value_int32(env, args[[param_index_replace]], &[param_name_replace]In);
  if (status != napi_ok) {
      /* [NAPI_GEN]: 错误处理*/
      getErrMessage(status, env, extended_error_info, "napi_get_value_int32", tag);
      return nullptr;
  }
`;

export let doubleIn =  `  double [param_name_replace]In = 0;
  /* [NAPI_GEN]: napi_get_value_double将一个 napi_value 类型的 js 数值转换成一个 C 语言的 double 类型的数值
   * env: N-API环境的句柄,表示当前的上下文
   * value:要转换的JavaScript值
   * result:指向 double 类型的指针，在这里函数将存储转换后的双精度浮点数
   */
  status = napi_get_value_double(env, args[[param_index_replace]], &[param_name_replace]In);
  if (status != napi_ok) {
      getErrMessage(status, env, extended_error_info, "napi_get_value_double", tag);
      return nullptr;
  }
`;

export let boolIn =  `  bool [param_name_replace]In = 0;
  /* [NAPI_GEN]: napi_get_value_bool将一个 napi_value 类型的 js 布尔值转换成一个 C 语言的 bool 类型的数值
   * env: N-API环境的句柄,表示当前的上下文
   * value:要转换的JavaScript值
   * result:指向 bool 类型的指针，在这里函数将存储转换后的布尔值
   */
  status = napi_get_value_bool(env, args[[param_index_replace]], &[param_name_replace]In);
  if (status != napi_ok) {
      getErrMessage(status, env, extended_error_info, "napi_get_value_bool", tag);
      return nullptr;
  }
`;

export let callbackIn =  `
  napi_value argv;
  // Todo: 创建要传递给回调函数的参数
  napi_value result;
  /**
  * env: napi_env 类型的环境变量
  * this_arg: 指向 JavaScript 对象的指针，表示回调函数中的 this 值。如果不需要递 this 值，则可以设置为 nullptr。
  * func: 指向 JavaScript 回调函数的指针。
  * argc: 传递给回调函数的参数数量。示例中传递了一个参数。
  * argv: 一个 napi_value 类型的数组，用于存储要传递给回调函数的参数。示例中传递了一个参数。
  
  * result: 指向返回值的指针。如果回调函数没有返回值，则可以设置为 nullptr。
  */
  napi_call_function(env, nullptr, args[[param_index_replace]], 1, &argv, result);
`;

// class与struct模板  class主体 放在xxxnapi.cpp中
export let classTemplate = `
// class napi框架主体 
// 这里构造函数都是默认无参构造函数，如果需要自定义构造函数，可以自行添加
[class_name_replace]::[class_name_replace]() {}
[class_name_replace]::~[class_name_replace]() { napi_delete_reference(env_, wrapper_); }
void [class_name_replace]::Destructor(napi_env env, void* nativeObject, [[maybe_unused]] void* finalize_hint)
{
  reinterpret_cast<[class_name_replace]*>(nativeObject)->~[class_name_replace]();
}
napi_value [class_name_replace]::New(napi_env env, napi_callback_info info)
{
  napi_value newTarget;
  napi_status status;
  // Check if the constructor was invoked with new.
  napi_get_new_target(env, info, &newTarget);
  if (newTarget != nullptr) {
    // Invoked as the constructor "new [class_name_replace]()".
    napi_value jsThis;
    // Retrieve the callback's context and arguments.
    status = napi_get_cb_info(env, info, nullptr, nullptr, &jsThis, nullptr);
    if (status != napi_ok) {
      getErrMessage(status, env, extended_error_info, "napi_get_cb_info", tag);
      return nullptr;
    }
    // Create the C++ object. 默认调用无参构造函数，如果需要自定义构造函数，可以自行添加
    [class_name_replace]* obj = new [class_name_replace]();
    obj->env_ = env;
    // Wrap the C++ object obj in the ArkTS object jsThis.
    status =napi_wrap(env, jsThis, reinterpret_cast<void*>(obj), [class_name_replace]::Destructor, nullptr, &obj->wrapper_);
    if (status != napi_ok) {
      getErrMessage(status, env, extended_error_info, "napi_wrap", tag);
      return nullptr;
    }
    delete obj;
    return jsThis;
  } else {
    OH_LOG_Print(LOG_APP, LOG_INFO, LOG_DOMAIN, "CLASS", "[class_name_replace] must be invoked as a constructor with 'new'");
    return nullptr;
  }
}
[class_property_get_set_replace]
[class_method_content_replace]
`

// class的声明，放在xxxnapi.h文件中   
export let classNapiHTemplate = `
class [class_name_replace] {
  public:
    static napi_value Init(napi_env env, napi_value exports);
    static void Destructor(napi_env env, void* nativeObject, void*finalize_hint);
  private:
    explicit [class_name_replace]();
    ~[class_name_replace]();
    static napi_value New(napi_env env, napi_callback_info info);
    // 属性的get set函数声明
    [class_property_get_set_declare]
    // 方法的声明
    [class_method_declare]
    // 变量的声明
    [class_variable_declare]
    napi_env env_;
    napi_ref wrapper_;
};
`

// 替换classNapiHTemplate模板中的内容
export let classMethodDeclareTemplate = `
    static napi_value [class_method_name_replace](napi_env env, napi_callback_info info);
`

// 成员方法无入参
export let classMethodNoParamTemplate = `
  napi_value jsThis;
  // 注释
  status = napi_get_cb_info(env, info, nullptr, nullptr, &jsThis, nullptr);
  if (status != napi_ok) {
    getErrMessage(status, env, extended_error_info, "napi_get_cb_info", tag);
    return nullptr;
  }
`

// 成员方法有入参
export let classMethodGetParamTemplate = `
  napi_value jsThis;
  size_t argc = [param_count_replace];
  napi_value args[[param_count_replace]];
  // 注释
  status = napi_get_cb_info(env, info, &argc, args, &jsThis, nullptr);
  if (status != napi_ok) {
     getErrMessage(status, env, extended_error_info, "napi_get_cb_info", tag);
     return nullptr;
  }
  [class_method_get_param]
`

// class的成员方法Napi实现 放在xxxnapi.cpp文件中  
export let classMethodTemplate = `
// [NAPI_GEN]:class成员函数的实现方法
napi_value [class_name_replace]::[class_method_name_replace](napi_env env, napi_callback_info info)
{
  [class_method_param_in]
  // Todo: business logic here.
  [class_name_replace]* obj;
  // 通过napi_unwrap将jsThis之前绑定的C++对象取出，并对其进行操作
  napi_unwrap(env, jsThis, reinterpret_cast<void**>(&obj));
  // Todo: you can get value from js and set value to C++.
  [class_method_return]
}
`
export let classPropertyGetTemplate = `
// [NAPI_GEN]:class成员变量的get方法
napi_value [class_name_replace]::Get[class_property_name_replace](napi_env env  napi_callback_info info)
{
  napi_value jsThis;
  napi_get_cb_info(env, info, nullptr, nullptr, &jsThis, nullptr);
  [class_name_replace]* obj;
  // Retrieve obj (the C++ object) previously wrapped in jsThis (the ArkTobject), and perform subsequent operations.
  napi_unwrap(env, jsThis, reinterpret_cast<void**>(&obj));
  // Todo:  get value from C++.
  // return value to js...
  [class_property_get]
}  
`;

export let classPropertySetTemplate = `
// [NAPI_GEN]:class成员变量的set方法
napi_value [class_name_replace]::Set[class_property_name_replace](napi_env env, napi_callback_info info)
{
  napi_value jsThis;
  napi_get_cb_info(env, info, nullptr, nullptr, &jsThis, nullptr);
  [class_name_replace]* obj;
  napi_unwrap(env, jsThis, reinterpret_cast<void**>());
  napi_value jsThis;
  size_t argc = 1;
  napi_value args[1];
  napi_get_cb_info(env, info, &argc, args, &jsThis, nullptr);
  [class_name_replace]* obj;
  napi_unwrap(env, jsThis, reinterpret_cast<void**>(&obj));
  // 例如： napi_get_value_int32(env, args[0], &obj->a);
  [class_property_set]
  // Todo: set value to C++.
  return nullptr;
}  
`; 

// 每个类的成员属性都对应一个get和set函数
export let classPropertyDeclareTemplate = `
    // [NAPI_GEN]:方法注册后,js与native的class属性映射get与set
    { [class_property_name_replace], 0, 0, Get[class_property_name_replace], Set[class_property_name_replace], 0, napi_default, 0 },
`;

export let classInitTemplate = `
  // Define properties and methods for a N-API object
  napi_property_descriptor [class_name_replace]Properties[] = {
    // 成员属性的get与set
    [class_property_replace]
     // 成员方法的调用
    [class_method_replace]
  };
  napi_value cons;
  // Define a js class 这里需要介绍class这个参数
  napi_define_class(env, "[class_name_replace]", NAPI_AUTO_LENGTH, New, nullptr,
    sizeof([class_name_replace]Properties) / sizeof([class_name_replace]Properties[0]), [class_name_replace]Properties, &cons);
  // Set the '[class_name_replace]' class on the exports object.
  napi_set_named_property(env, exports, "[class_name_replace]", cons);
`

// napi testAbility需要生成的方法模板
export let testAbilityFuncTemplate = `  /* [NAPI_GEN]:对应[file_introduce_replace]中：[test_case_name]的dts接口测试用例
  * 方法输入: [input_introduce_replace]
  * 方法输出: [func_return_replace]
  */
  it('[test_case_name]', 0, () => {
    // Defines a test case. This API supports three parameters: test case name, filter parameter, and test case function.
    hilog.info(0x0000, 'testTag', '%{public}s', 'it [test_case_name] begin');

    [func_direct_testCase]

    // Defines a variety of assertion methods, which are used to declare expected boolean conditions.
    // e.g. expect(result).assertEqual(2+3)
  })
`;
