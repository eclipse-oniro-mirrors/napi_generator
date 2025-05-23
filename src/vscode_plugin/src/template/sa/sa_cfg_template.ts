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

export let serviceCfgTemplate: FileTemp = {
  name: '[serviceName]_service.cfg',
  content: `{
    "services" : [{
            "name" : "[lowServiceName]service",
            "path" : ["/system/bin/sa_main", "/system/profile/[lowServiceName]service_sa.xml"],
            "uid" : "system",
            "gid" : ["system", "shell"]
        }
    ]
}
`
};