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

import { FileTemp } from "../../datatype";

export let profileGnTemplate: FileTemp = {
  name: 'BUILD.gn',
  content: `import("//build/ohos.gni")
  import("//build/ohos/sa_profile/sa_profile.gni")
  
  ohos_sa_profile("[lowServiceName]service_sa_profile") {
    sources = [ "[serviceId].xml" ]
    
    part_name = "[lowServiceName]service_part"
  }
  `
};