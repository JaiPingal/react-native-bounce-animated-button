#ifdef __cplusplus
#import "react-native-bounce-animated-button.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
#import "RNBounceAnimatedButtonSpec.h"

@interface BounceAnimatedButton : NSObject <NativeBounceAnimatedButtonSpec>
#else
#import <React/RCTBridgeModule.h>

@interface BounceAnimatedButton : NSObject <RCTBridgeModule>
#endif

@end
