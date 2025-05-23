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

#include "common.h"
#include "javascriptapi.h"

void jsAbstractOpsInit(napi_property_descriptor **origDescPtr, size_t *len)
{
    napi_property_descriptor descToBeAppended[] = {
        {"testNapiCoerceToBool", nullptr, testNapiCoerceToBool, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"testNapiCoerceToNumber", nullptr, testNapiCoerceToNumber, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"testNapiCoerceToObject", nullptr, testNapiCoerceToObject, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"testNapiCoerceToString", nullptr, testNapiCoerceToString, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"testNapiTypeof", nullptr, testNapiTypeof, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"testNapiIsArray", nullptr, testNapiIsArray, nullptr, nullptr, nullptr, napi_default, nullptr},
        {"testNapiStrictEquals", nullptr, testNapiStrictEquals, nullptr, nullptr, nullptr, napi_default, nullptr}
    };

    // Allocate memory
    napi_property_descriptor *newDesc =
        (napi_property_descriptor *)malloc(sizeof(napi_property_descriptor) * *len + sizeof(descToBeAppended));
    if (newDesc == nullptr) {
        OH_LOG_Print(LOG_APP, LOG_ERROR, GLOBAL_RESMGR, "jsAbstractOpsInit", "Failed to allocated memory");
        return;
    }

    // Copy old properties & free memory
    for (size_t i = 0; i < *len; ++i) {
        newDesc[i] = (*origDescPtr)[i];
    }
    free(*origDescPtr);
    *origDescPtr = newDesc;

    // Copy new properties
    for (size_t i = 0; i < sizeof(descToBeAppended) / sizeof(napi_property_descriptor); ++i) {
        newDesc[*len + i] = descToBeAppended[i];
    }

    *len += sizeof(descToBeAppended) / sizeof(napi_property_descriptor);
}