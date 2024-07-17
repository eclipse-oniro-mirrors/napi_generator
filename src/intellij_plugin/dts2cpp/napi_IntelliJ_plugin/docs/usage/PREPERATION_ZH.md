# 使用工具之前的准备

## 简介

本文主要介绍用户使用Napi生成工具之前需要做的准备工作。

## 准备

### 待转换的ts文件

待转换的@ohos.napitest.d.ts文件如下:

[@ohos.napitest.d.ts](https://gitee.com/openharmony/napi_generator/blob/master/test/dts2cpp/ts/@ohos.napitest.d.ts)

### 业务代码

业务代码用例如下：

serviceCode/NodeISayHello.h

```
#ifndef IMPL_NODEISAYHELLO_H
#define IMPL_NODEISAYHELLO_H

#include <string>
#include <memory>

namespace napitest {
class NodeISayHello;
class NodeISayHello {
public:
    void sayHello(std::string& from, std::string& to, uint32_t& sayType);
    void sayHi(std::string& from, std::string& to, uint32_t& sayType);
    void sayHelloWithResponse(std::string& from, std::string& to, uint32_t& sayType);
};
std::string funcTest(bool& v);
}
#endif // IMPL_NODEISAYHELLO_H
```

serviceCode/NodeISayHello.cpp

```
#include "NodeISayHello.h"
#include "../../../generatorCode/napitest.h"
#include "hilog/log.h"

#undef LOG_DOMAIN
#undef LOG_TAG
#define LOG_DOMAIN 0x3200  // 全局domain宏，标识业务领域
#define LOG_TAG "MY_TAG"   // 全局tag宏，标识模块日志tag
#define OH_LOG_INFO(type, ...) ((void)OH_LOG_Print((type), LOG_INFO, LOG_DOMAIN, LOG_TAG, __VA_ARGS__))

    namespace napitest {
  // 1. 打印from, to, enum sayType的值
  // 2. 调用注册的NodeISayHelloListenerSayHelloStart(info: SayInfo)方法
  //    工具提供的业务接口（回调） void NodeISayHello::SayHelloListenerSayHelloStartCallback(SayInfo& info)
  // 3. 调用注册的NodeISayHelloListenerSayHelloEnd(info: SayInfo)方法
  //    工具提供的业务接口（回调） void NodeISayHello::SayHelloListenerSayHelloEndCallback(SayInfo& info)
void NodeISayHello::sayHello(std::string& from, std::string& to, uint32_t& sayType)
{
    // 1.打印
    OH_LOG_INFO(LOG_APP, "NAPITEST_LOGI sayHello from=%{public}s", from.c_str());
    OH_LOG_INFO(LOG_APP, "NAPITEST_LOGI sayHello to=%{public}s", to.c_str());
    OH_LOG_INFO(LOG_APP, "NAPITEST_LOGI sayHello sayType=%{public}d", sayType);

    // 2.调用回调
    napitest::napitest_interface::SayInfo info1;
    info1.from = "js";
    uint32_t a = 99;
    info1.fromId.emplace(a);
    uint32_t b = 101;
    info1.toId.emplace(b);
    info1.to = "native";
    info1.content = "hello";
    info1.saidTime = "123456789";
    info1.isEnd = false;

    napitest::napitest_interface::SayInfo info2;
    info2.from = "native";
    uint32_t c = 101;
    info2.fromId.emplace(c);
    uint32_t d = 99;
    info2.toId.emplace(d);
    info2.to = "js";
    info2.content = "hi";
    info2.saidTime = "987654321";
    info2.isEnd = true;
    // 业务代码调用 onSayHelloStart callback
    OH_LOG_INFO(LOG_APP, "NAPITEST_LOGI NodeISayHelloListener_onSayHelloStartCallback begin");
    napitest::napitest_interface::NodeISayHello::listener_.NodeISayHelloListener_onSayHelloStartCallback(info1);
    OH_LOG_INFO(LOG_APP, "NAPITEST_LOGI NodeISayHelloListener_onSayHelloStartCallback end");
    // 业务代码调用 onSayHelloEnd callback
    OH_LOG_INFO(LOG_APP, "NAPITEST_LOGI NodeISayHelloListener_onSayHelloEndCallback begin");
    napitest::napitest_interface::NodeISayHello::listener_.NodeISayHelloListener_onSayHelloEndCallback(info2);
    OH_LOG_INFO(LOG_APP, "NAPITEST_LOGI NodeISayHelloListener_onSayHelloEndCallback end");
    return;
}

// 调用register注册的回调
void NodeISayHello::sayHi(std::string& from, std::string& to, uint32_t& sayType)
{
    // 1.打印
    OH_LOG_INFO(LOG_APP, "NAPITEST_LOGI sayHi from=%{public}s", from.c_str());
    OH_LOG_INFO(LOG_APP, "NAPITEST_LOGI sayHi to=%{public}s", to.c_str());
    OH_LOG_INFO(LOG_APP, "NAPITEST_LOGI sayHi sayType=%{public}d", sayType);
    // 2.调用回调
    napitest::napitest_interface::NodeISayHello *ptr = new napitest::napitest_interface::NodeISayHello();
    uint32_t callbackNum = 58;
    ptr->CallbackfuncCallback(callbackNum);
    delete ptr;
    return;
}

// 普通函数调用，返回str
std::string funcTest(bool& v)
{
    if (v) {
        return "true";
    } else {
        return "false";
    }
}

// 1.打印值：from, to 以及枚举enum SayType的值
// 2. 将回调值（0， "", "recv hello."）的值传回Js层
void NodeISayHello::sayHelloWithResponse(std::string& from, std::string& to, uint32_t& sayType)
{
    // 1.打印
    OH_LOG_INFO(LOG_APP, "NAPITEST_LOGI sayHelloWithResponse from=%{public}s", from.c_str());
    OH_LOG_INFO(LOG_APP, "NAPITEST_LOGI sayHelloWithResponse to=%{public}s", to.c_str());
    OH_LOG_INFO(LOG_APP, "NAPITEST_LOGI sayHelloWithResponse sayType=%{public}d", sayType);
    // 2.调用promise回调 (0, "", "recv hello.")
    napitest::napitest_interface::NodeISayHello *p = new  napitest::napitest_interface::NodeISayHello();
    // 调用工具接口将回调传回工具
    p->auto_interface_5SetCbValue(0, "no err", "recv hello.");
    delete p;
    return;
}
}
```