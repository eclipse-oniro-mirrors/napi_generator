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
#ifndef IMPL_NODEISAYHELLO_H
#define IMPL_NODEISAYHELLO_H

#include <string>
#include <memory>

namespace napitest {
class NodeISayHello;
class NodeISayHello {
public:
    void SayHello(std::string& from, std::string& to, uint32_t& sayType);
    void SayHi(std::string& from, std::string& to, uint32_t& sayType);
    void SayHelloWithResponse(std::string& from, std::string& to, uint32_t& sayType);
};
std::string FuncTest(bool& v);
}
#endif // IMPL_NODEISAYHELLO_H