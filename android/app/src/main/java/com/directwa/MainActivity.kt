package com.directwa

import android.os.Bundle; 
import com.facebook.react.ReactActivity

// react-native-splash-screen >= 0.3.1
import org.devio.rn.splashscreen.SplashScreen;
// import org.devio.rn.splashscreen.SplashScreenReactPackage;

import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate

class MainActivity : ReactActivity() {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  override fun getMainComponentName(): String = "DirectWA"

  /**
   * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
   * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
   */
  override fun createReactActivityDelegate(): ReactActivityDelegate =
      DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)

  override fun onCreate(savedInstanceState: Bundle?) {
    SplashScreen.show(this);
    super.onCreate(savedInstanceState)
  }
}
