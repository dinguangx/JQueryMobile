package org.dylan.contacts;

import org.apache.cordova.Config;
import org.apache.cordova.DroidGap;
import android.os.Bundle;

public class MainActivity extends DroidGap {
	/** Called when the activity is first created. */
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.loadUrl(Config.getStartUrl());
	}
}
