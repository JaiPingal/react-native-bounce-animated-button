#include <jni.h>
#include "react-native-bounce-animated-button.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_bounceanimatedbutton_BounceAnimatedButtonModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return bounceanimatedbutton::multiply(a, b);
}
