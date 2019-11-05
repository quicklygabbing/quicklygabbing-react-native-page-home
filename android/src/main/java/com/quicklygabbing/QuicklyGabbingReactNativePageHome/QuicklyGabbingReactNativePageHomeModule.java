package com.quicklygabbing.QuicklyGabbingReactNativePageHome;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class QuicklyGabbingReactNativePageHomeModule extends ReactContextBaseJavaModule {
  public QuicklyGabbingReactNativePageHomeModule(ReactApplicationContext reactContext) {
    super(reactContext);
  }

  @Override
  public String getName() {
    return "QuicklyGabbingReactNativePageHome";
  }
}