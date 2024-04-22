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

#include "cjson/cJSON.h"
#include "common.h"

napi_value getCjsonChildOut2(napi_env env, napi_value childOut, cJSON *jsonChild)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    const char *tag = "[KH418_CJSON_Parse]";
    napi_value childTypeOut;
    status = napi_create_int32(env, jsonChild->type, &childTypeOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_int32 jsonChild->type", tag);
        return nullptr;
    }
    status = napi_set_named_property(env, childOut, "type", childTypeOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_set_named_property jsonChild->type", tag);
        return nullptr;
    }
    napi_value childValueintOut;
    status = napi_create_int32(env, jsonChild->valueint, &childValueintOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_int32 jsonChild->valueint", tag);
        return nullptr;
    }
    status = napi_set_named_property(env, childOut, "valueint", childValueintOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_set_named_property jsonChild->valueint", tag);
        return nullptr;
    }
    napi_value childValuedoubleOut;
    status = napi_create_double(env, jsonChild->valuedouble, &childValuedoubleOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_double jsonChild->valuedouble", tag);
        return nullptr;
    }
    status = napi_set_named_property(env, childOut, "valuedouble", childValuedoubleOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_set_named_property jsonChild->valuedouble", tag);
        return nullptr;
    }
    return childOut;
}

napi_value getCjsonChildOut(napi_env env, napi_value childOut, cJSON *jsonChild)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    const char *tag = "[KH418_CJSON_Parse]";
    // ����������child
    if (jsonChild != nullptr) {
        napi_value childValuestringOut;
        status = napi_create_string_utf8(env, jsonChild->valuestring == nullptr ? "" : jsonChild->valuestring,
                                         NAPI_AUTO_LENGTH, &childValuestringOut);
        if (status != napi_ok) {
            getErrMsg(status, env, extended_error_info, "napi_create_string_utf8 jsonChild->valuestring", tag);
            return nullptr;
        }
        status = napi_set_named_property(env, childOut, "valuestring", childValuestringOut);
        if (status != napi_ok) {
            getErrMsg(status, env, extended_error_info, "napi_set_named_property jsonChild->valuestring", tag);
            return nullptr;
        }
        napi_value childStringOut;
        status = napi_create_string_utf8(env, jsonChild->string == nullptr ? "" : jsonChild->string, NAPI_AUTO_LENGTH,
                                         &childStringOut);
        if (status != napi_ok) {
            getErrMsg(status, env, extended_error_info, "napi_create_string_utf8 jsonChild->string", tag);
            return nullptr;
        }
        status = napi_set_named_property(env, childOut, "string", childStringOut);
        if (status != napi_ok) {
            getErrMsg(status, env, extended_error_info, "napi_set_named_property jsonChild->string", tag);
            return nullptr;
        }
        childOut = getCjsonChildOut2(env, childOut, jsonChild);
    }
    return childOut;
}

napi_value getCjsonNextOut2(napi_env env, napi_value nextOut, cJSON *jsonNext)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    const char *tag = "[KH418_CJSON_Parse]";
    napi_value nextTypeOut;
    status = napi_create_int32(env, jsonNext->type, &nextTypeOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_int32 jsonNext->type", tag);
        return nullptr;
    }
    status = napi_set_named_property(env, nextOut, "type", nextTypeOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_set_named_property jsonNext->type", tag);
        return nullptr;
    }
    napi_value nextValueintOut;
    status = napi_create_int32(env, jsonNext->valueint, &nextValueintOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_int32 jsonNext->valueint", tag);
        return nullptr;
    }
    status = napi_set_named_property(env, nextOut, "valueint", nextValueintOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_set_named_property jsonNext->valueint", tag);
        return nullptr;
    }
    napi_value nextValuedoubleOut;
    status = napi_create_double(env, jsonNext->valuedouble, &nextValuedoubleOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_double jsonNext->valuedouble", tag);
        return nullptr;
    }
    status = napi_set_named_property(env, nextOut, "valuedouble", nextValuedoubleOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_set_named_property jsonNext->valuedouble", tag);
        return nullptr;
    }
    return nextOut;
}

napi_value getCjsonNextOut(napi_env env, napi_value nextOut, cJSON *jsonNext)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    const char *tag = "[KH418_CJSON_Parse]";
    // ����������next
    if (jsonNext != nullptr) {
        napi_value nextValuestringOut;
        status = napi_create_string_utf8(env, jsonNext->valuestring == nullptr ? "" : jsonNext->valuestring,
                                         NAPI_AUTO_LENGTH, &nextValuestringOut);
        if (status != napi_ok) {
            getErrMsg(status, env, extended_error_info, "napi_create_string_utf8 jsonNext->valuestring", tag);
            return nullptr;
        }
        status = napi_set_named_property(env, nextOut, "valuestring", nextValuestringOut);
        if (status != napi_ok) {
            getErrMsg(status, env, extended_error_info, "napi_set_named_property jsonNext->valuestring", tag);
            return nullptr;
        }
        napi_value nextStringOut;
        status = napi_create_string_utf8(env, jsonNext->string == nullptr ? "" : jsonNext->string, NAPI_AUTO_LENGTH,
                                         &nextStringOut);
        if (status != napi_ok) {
            getErrMsg(status, env, extended_error_info, "napi_create_string_utf8 jsonNext->string", tag);
            return nullptr;
        }
        status = napi_set_named_property(env, nextOut, "string", nextStringOut);
        if (status != napi_ok) {
            getErrMsg(status, env, extended_error_info, "napi_set_named_property jsonNext->string", tag);
            return nullptr;
        }
        nextOut = getCjsonNextOut2(env, nextOut, jsonNext);
    }
    return nextOut;
}

char *getCjsonparseInfo(napi_env env, napi_value objIn)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    const char *tag = "[KH418_CJSON_Parse]";
    /* [NAPI_GEN]: ��args�����л�ȡ��� */
    napi_valuetype valuetypevalue;
    /* [NAPI_GEN]: ��ȡ������ͣ���0�����
     * env: N-API�����ľ������ʾ��ǰ��������
     * value: Ҫ������͵�jsֵ
     * result: ��һ��ָ�룬ָ��napi_valuetypeö�ٵ�ֵ�������Ὣ����洢������
     */
    status = napi_typeof(env, objIn, &valuetypevalue);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_typeof", tag);
        return nullptr;
    }
    size_t strSize0 = 0;
    /* [NAPI_GEN]: napi_get_value_string_utf8���ڽ�Js�ַ���ת��ΪUTF-8�����C�ַ���
     * env: N-API�����ľ������ʾ��ǰ��������
     * value: Ҫת����JavaScript�ַ���
     * buf: ���ڴ洢������ַ������ָ��
     * bufsize: ��������С�����ֽ�Ϊ��λ
     * result: ת������ַ������ֽڳ���(����������ֹ��)������buf��NULL,�򷵻�����Ļ�������С(��������ֹ��)
     */
    /* [NAPI_GEN]: buf������NULLʱ�����ڻ�ȡ���軺������С*/
    status = napi_get_value_string_utf8(env, objIn, NULL, 0, &strSize0);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "get value string", tag);
        return nullptr;
    }
    char *valueIn = new char[strSize0 + 1];
    /* [NAPI_GEN]: ���ڻ�ȡ�ַ���*/
    status = napi_get_value_string_utf8(env, objIn, valueIn, strSize0 + 1, &strSize0);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "get value string", tag);
        delete[] valueIn;
        return nullptr;
    }
    return valueIn;
}

napi_value getCjsonparseOut1(napi_env env, cJSON *jsonNext, napi_value cJSON_ParseOut)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    const char *tag = "[KH418_CJSON_Parse]";
    napi_value nextOut;
    /* [NAPI_GEN]: ����ֵ�Ƕ���ʱ����Ҫʹ��napi_create_object����һ��js�Ķ�����js���뽻��
     * env: ��ǰ�����ľ��
     * result: һ��napi_value��ָ�룬��ָ�뽫������Ϊ�´�����js����
     */
    status = napi_create_object(env, &nextOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_object", tag);
        return nullptr;
    }
    nextOut = getCjsonNextOut(env, nextOut, jsonNext);
    /* [NAPI_GEN]: ����ֵ�Ƕ���ʱ����native��Ķ�������Ժ�ֵ��������napi_create_object�������Ķ������ս��ö��󷵻�js
     * env: ��ǰ�����ľ��
     * object: Ҫ�������Ե�js���󣬸ö�����������napi_create_object������
     * utf8name: ���Ե����ƣ���һ����UTF-8������ַ���
     * value: ���������ƹ�����ֵ�����ֵ�������κ�js���ͣ���һ����ֵ���ַ�������һ������ȣ�
     */
    status = napi_set_named_property(env, cJSON_ParseOut, "next", nextOut);
    if (status != napi_ok) {
        /* [NAPI_GEN]: ������*/
        getErrMsg(status, env, extended_error_info, "napi_set_named_property", tag);
        return nullptr;
    }
    napi_value prevOut;
    /* [NAPI_GEN]: ����ֵ�Ƕ���ʱ����Ҫʹ��napi_create_object����һ��js�Ķ�����js���뽻��
     * env: ��ǰ�����ľ��
     * result: һ��napi_value��ָ�룬��ָ�뽫������Ϊ�´�����js����
     */
    status = napi_create_object(env, &prevOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_object", tag);
        return nullptr;
    }
    /* [NAPI_GEN]: ����ֵ�Ƕ���ʱ����native��Ķ�������Ժ�ֵ��������napi_create_object�������Ķ������ս��ö��󷵻�js
     * env: ��ǰ�����ľ��
     * object: Ҫ�������Ե�js���󣬸ö�����������napi_create_object������
     * utf8name: ���Ե����ƣ���һ����UTF-8������ַ���
     * value: ���������ƹ�����ֵ�����ֵ�������κ�js���ͣ���һ����ֵ���ַ�������һ������ȣ�
     */
    status = napi_set_named_property(env, cJSON_ParseOut, "prev", prevOut);
    if (status != napi_ok) {
        /* [NAPI_GEN]: ������*/
        getErrMsg(status, env, extended_error_info, "napi_set_named_property", tag);
        return nullptr;
    }
    return cJSON_ParseOut;
}

napi_value getCjsonparseOut2(napi_env env, cJSON *json, cJSON *jsonChild, napi_value cJSON_ParseOut)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    const char *tag = "[KH418_CJSON_Parse]";
    napi_value childOut;
    /* [NAPI_GEN]: ����ֵ�Ƕ���ʱ����Ҫʹ��napi_create_object����һ��js�Ķ�����js���뽻��
     * env: ��ǰ�����ľ��
     * result: һ��napi_value��ָ�룬��ָ�뽫������Ϊ�´�����js����
     */
    status = napi_create_object(env, &childOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_object", tag);
        return nullptr;
    }
    childOut = getCjsonChildOut(env, childOut, jsonChild);
    /* [NAPI_GEN]:
     * ����ֵ�Ƕ���ʱ����native��Ķ�������Ժ�ֵ��������napi_create_object�������Ķ������ս��ö��󷵻�js env:
     * ��ǰ�����ľ�� object: Ҫ�������Ե�js���󣬸ö�����������napi_create_object������ utf8name:
     * ���Ե����ƣ���һ����UTF-8������ַ��� value:
     * ���������ƹ�����ֵ�����ֵ�������κ�js���ͣ���һ����ֵ���ַ�������һ������ȣ�
     */
    status = napi_set_named_property(env, cJSON_ParseOut, "child", childOut);
    if (status != napi_ok) {
        /* [NAPI_GEN]: ������*/
        getErrMsg(status, env, extended_error_info, "napi_set_named_property", tag);
        return nullptr;
    }
    napi_value typeOut;
    /* [NAPI_GEN]: ����ֵ��int32_t����ʱ��napi_create_int32 ����һ������32λ����(int32_t)��js��ֵ��Number������
     * env: ��ǰ�����ľ��
     * value: Ҫ׼����js��ֵ��int32_t��ֵ,�����Դ���1Ϊ��,��������ҵ�����ʱ�ɸ������������޸�
     * result: ָ��napi_value��ָ�룬���ָ��ᱻ����Ϊ�´�����js��ֵ����
     */
    status = napi_create_int32(env, json == nullptr ? 0 : json->type, &typeOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_int32", tag);
        return nullptr;
    }
    /* [NAPI_GEN]: ����ֵ�Ƕ���ʱ����native��Ķ�������Ժ�ֵ��������napi_create_object�������Ķ������ս��ö��󷵻�js
     * env: ��ǰ�����ľ��
     * object: Ҫ�������Ե�js���󣬸ö�����������napi_create_object������
     * utf8name: ���Ե����ƣ���һ����UTF-8������ַ���
     * value: ���������ƹ�����ֵ�����ֵ�������κ�js���ͣ���һ����ֵ���ַ�������һ������ȣ�
     */
    status = napi_set_named_property(env, cJSON_ParseOut, "type", typeOut);
    if (status != napi_ok) {
        /* [NAPI_GEN]: ������*/
        getErrMsg(status, env, extended_error_info, "napi_set_named_property", tag);
        return nullptr;
    }
    return cJSON_ParseOut;
}

napi_value getCjsonparseOut3(napi_env env, cJSON *json, napi_value cJSON_ParseOut)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    const char *tag = "[KH418_CJSON_Parse]";
    napi_value valuestringOut;
    /* [NAPI_GEN]:
     * ����ֵ���ַ���ʱ��napi_create_string_utf8������ԭ�������д���һ���µ�js�ַ������������������ṩ��UTF-8������ַ�������һ���ȼ۵�js�ַ���
     * env: ��ǰ�����ľ��
     * str: ָ����null��β��UTF-8�����C�ַ�����ָ�룬������valuestring�������û��ɸ��������޸�
     * length:
     * �ַ����ĳ��ȣ������Ǿ�����ֽ���������ʹ�������ֵNAPI_AUTO_LENGTH���ú����Լ����㳤��(�ٶ��ַ�����null��β)
     * result: ָ��napi_value��ָ�룬����ִ�гɹ������ָ�뽫ָ���´�����js�ַ���
     */
    status =
        napi_create_string_utf8(env, json == nullptr ? "" : (json->valuestring == nullptr ? "" : json->valuestring),
                                NAPI_AUTO_LENGTH, &valuestringOut);
    if (status != napi_ok) {
        /*������*/
        getErrMsg(status, env, extended_error_info, "napi_create_string_utf8", tag);
        return nullptr;
    }
    /* [NAPI_GEN]: ����ֵ�Ƕ���ʱ����native��Ķ�������Ժ�ֵ��������napi_create_object�������Ķ������ս��ö��󷵻�js
     * env: ��ǰ�����ľ��
     * object: Ҫ�������Ե�js���󣬸ö�����������napi_create_object������
     * utf8name: ���Ե����ƣ���һ����UTF-8������ַ���
     * value: ���������ƹ�����ֵ�����ֵ�������κ�js���ͣ���һ����ֵ���ַ�������һ������ȣ�
     */
    status = napi_set_named_property(env, cJSON_ParseOut, "valuestring", valuestringOut);
    if (status != napi_ok) {
        /* [NAPI_GEN]: ������*/
        getErrMsg(status, env, extended_error_info, "napi_set_named_property", tag);
        return nullptr;
    }
    napi_value valueintOut;
    /* [NAPI_GEN]: ����ֵ��int32_t����ʱ��napi_create_int32 ����һ������32λ����(int32_t)��js��ֵ��Number������
     * env: ��ǰ�����ľ��
     * value: Ҫ׼����js��ֵ��int32_t��ֵ,�����Դ���1Ϊ��,��������ҵ�����ʱ�ɸ������������޸�
     * result: ָ��napi_value��ָ�룬���ָ��ᱻ����Ϊ�´�����js��ֵ����
     */
    status = napi_create_int32(env, json == nullptr ? 0 : json->valueint, &valueintOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_int32", tag);
        return nullptr;
    }
    /* [NAPI_GEN]: ����ֵ�Ƕ���ʱ����native��Ķ�������Ժ�ֵ��������napi_create_object�������Ķ������ս��ö��󷵻�js
     * env: ��ǰ�����ľ��
     * object: Ҫ�������Ե�js���󣬸ö�����������napi_create_object������
     * utf8name: ���Ե����ƣ���һ����UTF-8������ַ���
     * value: ���������ƹ�����ֵ�����ֵ�������κ�js���ͣ���һ����ֵ���ַ�������һ������ȣ�
     */
    status = napi_set_named_property(env, cJSON_ParseOut, "valueint", valueintOut);
    if (status != napi_ok) {
        /* [NAPI_GEN]: ������*/
        getErrMsg(status, env, extended_error_info, "napi_set_named_property", tag);
        return nullptr;
    }
    return cJSON_ParseOut;
}

napi_value getCjsonparseOut4(napi_env env, cJSON *json, napi_value cJSON_ParseOut)
{
    napi_status status;
    const napi_extended_error_info *extended_error_info;
    const char *tag = "[KH418_CJSON_Parse]";
    napi_value valuedoubleOut;
    /* [NAPI_GEN]: ����ֵ��double����ʱ��napi_create_double ����һ������˫���ȸ�������js��ֵ��Number������
     * env: ��ǰ�����ľ��
     * value: Ҫ���ݸ�js��˫���ȸ�����ֵ,�����Դ���1.0Ϊ������������ҵ�����ʱ�ɸ������������޸�
     * result: ָ��napi_value��ָ�룬���ָ��ᱻ����Ϊ�´�����js��ֵ����
     */
    status = napi_create_double(env, json == nullptr ? 0 : json->valuedouble, &valuedoubleOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_double", tag);
        return nullptr;
    }
    /* [NAPI_GEN]: ����ֵ�Ƕ���ʱ����native��Ķ�������Ժ�ֵ��������napi_create_object�������Ķ������ս��ö��󷵻�js
     * env: ��ǰ�����ľ��
     * object: Ҫ�������Ե�js���󣬸ö�����������napi_create_object������
     * utf8name: ���Ե����ƣ���һ����UTF-8������ַ���
     * value: ���������ƹ�����ֵ�����ֵ�������κ�js���ͣ���һ����ֵ���ַ�������һ������ȣ�
     */
    status = napi_set_named_property(env, cJSON_ParseOut, "valuedouble", valuedoubleOut);
    if (status != napi_ok) {
        /* [NAPI_GEN]: ������*/
        getErrMsg(status, env, extended_error_info, "napi_set_named_property", tag);
        return nullptr;
    }
    napi_value stringOut;
    /* [NAPI_GEN]:
     * ����ֵ���ַ���ʱ��napi_create_string_utf8������ԭ�������д���һ���µ�js�ַ������������������ṩ��UTF-8������ַ�������һ���ȼ۵�js�ַ���
     * env: ��ǰ�����ľ��
     * str: ָ����null��β��UTF-8�����C�ַ�����ָ�룬������string�������û��ɸ��������޸�
     * length:
     * �ַ����ĳ��ȣ������Ǿ�����ֽ���������ʹ�������ֵNAPI_AUTO_LENGTH���ú����Լ����㳤��(�ٶ��ַ�����null��β)
     * result: ָ��napi_value��ָ�룬����ִ�гɹ������ָ�뽫ָ���´�����js�ַ���
     */
    status = napi_create_string_utf8(env, json == nullptr ? "" : (json->string == nullptr ? "" : json->string),
                                     NAPI_AUTO_LENGTH, &stringOut);
    if (status != napi_ok) {
        /*������*/
        getErrMsg(status, env, extended_error_info, "napi_create_string_utf8", tag);
        return nullptr;
    }
    /* [NAPI_GEN]: ����ֵ�Ƕ���ʱ����native��Ķ�������Ժ�ֵ��������napi_create_object�������Ķ������ս��ö��󷵻�js
     * env: ��ǰ�����ľ��
     * object: Ҫ�������Ե�js���󣬸ö�����������napi_create_object������
     * utf8name: ���Ե����ƣ���һ����UTF-8������ַ���
     * value: ���������ƹ�����ֵ�����ֵ�������κ�js���ͣ���һ����ֵ���ַ�������һ������ȣ�
     */
    status = napi_set_named_property(env, cJSON_ParseOut, "string", stringOut);
    if (status != napi_ok) {
        /* [NAPI_GEN]: ������*/
        getErrMsg(status, env, extended_error_info, "napi_set_named_property", tag);
        return nullptr;
    }
    return cJSON_ParseOut;
}

/* [NAPI_GEN]: ��ӦcJSON.h��: CJSON_PUBLIC(cJSON *) cJSON_Parse(const char *value);��napi������
 * param: name: string; type: const char * ����һ����ת�����ַ���
 * out: ���cJSON���л�֮����ַ���
 */
napi_value KH418_CJSON_Parse(napi_env env, napi_callback_info info)
{
    napi_status status;
    /* [NAPI_GEN]: Node.js����N-API�������ṩ�������չ��Ϣ�Ľṹ��,�ṹ����������ֶ�
     * error_message: һ��ָ�������ϸ�ַ�����ָ�룬�ṩ�˹��ڴ�����ı�����
     * engin_reserved: һ��������Js����ʹ�õ�ָ��
     * error_code: �����룬ָʾ�˴�������࣬����napi_pending_exception��ʾ��һ��JavaScript�쳣δ������
     * engine_error_code��һ�������ض��Ĵ����룬Ϊ����ʵ�ֱ��������庬��������ʹ�õ�JavaScript���档
     * error_message_len��������Ϣ�ַ����ĳ��ȡ�
     */
    const napi_extended_error_info *extended_error_info;
    /* [NAPI_GEN]: tag: ��־��ӡ��ǩ*/
    const char *tag = "[KH418_CJSON_Parse]";
    /* [NAPI_GEN]: get function param in*/
    /* [NAPI_GEN]: argc��js����Ĳ������� */
    size_t argc = 1;
    /* [NAPI_GEN]: args: һ������,����js����Ĳ��� */
    napi_value args[1] = {nullptr};
    /* [NAPI_GEN]: napi_get_cb_info���ڻ�ȡJS���øú���ʱ�����ݵĲ��������ղ����ĸ����Լ�'this'��ֵ
     * env: ��ǰ�����ľ��������ǰ��Node.js����
     * info: �ص���Ϣ���������ǰ�ص���������
     * argc: ָ��size_t��ָ�룬���Ӧ�����ɽ��ܵ���������������������ʱ����������ʵ�ʴ��ݵĲ�������
     * args: һ���㹻������飬���ڽ��մ��ݸ��ص�����������js����������Ĵ�СӦ������argc�����ֵһ����
     * this_arg: �������NULL,�򷵻�js�ص���this��ֵ
     * data: �������NULL,�򷵻���ص������������κο�ѡ���ݡ�ͨ�����ڴ����ڴ�������ʱָ���ľ�̬����
     */
    status = napi_get_cb_info(env, info, &argc, args, nullptr, nullptr);
    if (status != napi_ok) {
        /* [NAPI_GEN]: ������*/
        getErrMsg(status, env,extended_error_info, "napi_get_cb_info", tag);
        return nullptr;
    }
    napi_value obj = args[0];
    char *valueIn = getCjsonparseInfo(env, obj);
    // Todo: add business logic. ����ǰ�����Ϊ���������
    cJSON *json = cJSON_Parse(valueIn);
    if (json == nullptr) {
        return nullptr;
    }
    cJSON *jsonChild = nullptr;
    if (json != nullptr) {
        jsonChild = json->child;
    }
    cJSON *jsonNext = nullptr;
    if (jsonChild != nullptr) {
        jsonNext = jsonChild->next;
    }

    /* [NAPI_GEN]: function return value*/
    napi_value cJSON_ParseOut;
    /* [NAPI_GEN]: ����ֵ�Ƕ���ʱ����Ҫʹ��napi_create_object����һ��js�Ķ�����js���뽻��
     * env: ��ǰ�����ľ��
     * result: һ��napi_value��ָ�룬��ָ�뽫������Ϊ�´�����js����
     */
    status = napi_create_object(env, &cJSON_ParseOut);
    if (status != napi_ok) {
        getErrMsg(status, env, extended_error_info, "napi_create_object", tag);
        return nullptr;
    }

    cJSON_ParseOut = getCjsonparseOut1(env, jsonNext, cJSON_ParseOut);
    cJSON_ParseOut = getCjsonparseOut2(env, json, jsonChild, cJSON_ParseOut);
    cJSON_ParseOut = getCjsonparseOut3(env, json, cJSON_ParseOut);
    cJSON_ParseOut = getCjsonparseOut4(env, json, cJSON_ParseOut);

    cJSON_Delete(json);
    return cJSON_ParseOut;
}
