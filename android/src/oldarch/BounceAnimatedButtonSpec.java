package com.bounceanimatedbutton;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.Promise;

abstract class BounceAnimatedButtonSpec extends ReactContextBaseJavaModule {
  BounceAnimatedButtonSpec(ReactApplicationContext context) {
    super(context);
  }

  public abstract void multiply(double a, double b, Promise promise);
}
