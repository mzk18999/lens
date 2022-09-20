/**
 * Copyright (c) OpenLens Authors. All rights reserved.
 * Licensed under MIT License. See LICENSE in root directory for more information.
 */
import { getInjectable } from "@ogre-tools/injectable";
import userStoreInjectable from "../../common/user-store/user-store.injectable";
import { beforeFrameStartsInjectionToken } from "../before-frame-starts/before-frame-starts-injection-token";
import initDefaultUpdateChannelInjectableInjectable from "../vars/default-update-channel/init.injectable";

const initUserStoreInjectable = getInjectable({
  id: "init-user-store",
  instantiate: (di) => {
    const userStore = di.inject(userStoreInjectable);

    return {
      run: () => userStore.load(),
      runAfter: di.inject(initDefaultUpdateChannelInjectableInjectable),
    };
  },
  injectionToken: beforeFrameStartsInjectionToken,
});

export default initUserStoreInjectable;
