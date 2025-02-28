export const jsonString = `{
		"name": "customers/C022n8w1u/policySchemas/chrome.devices.managedguest.IdleSettingsExtended",
		"policyDescription": "Idle settings.",
		"definition": {
			"messageType": [
				{
					"name": "IdleSettingsExtended",
					"field": [
						{
							"name": "lidCloseAction",
							"number": 1,
							"label": "LABEL_OPTIONAL",
							"type": "TYPE_ENUM",
							"typeName": "LidCloseActionEnum"
						},
						{
							"name": "idleDelayAc",
							"number": 2,
							"label": "LABEL_OPTIONAL",
							"type": "TYPE_MESSAGE",
							"typeName": "NullableDuration"
						},
						{
							"name": "idleWarningDelayAc",
							"number": 3,
							"label": "LABEL_OPTIONAL",
							"type": "TYPE_MESSAGE",
							"typeName": "NullableDuration"
						},
						{
							"name": "idleActionAc",
							"number": 4,
							"label": "LABEL_OPTIONAL",
							"type": "TYPE_ENUM",
							"typeName": "IdleActionAcEnum"
						},
						{
							"name": "screenDimDelayAc",
							"number": 5,
							"label": "LABEL_OPTIONAL",
							"type": "TYPE_MESSAGE",
							"typeName": "NullableDuration"
						},
						{
							"name": "screenOffDelayAc",
							"number": 6,
							"label": "LABEL_OPTIONAL",
							"type": "TYPE_MESSAGE",
							"typeName": "NullableDuration"
						},
						{
							"name": "screenLockDelayAc",
							"number": 7,
							"label": "LABEL_OPTIONAL",
							"type": "TYPE_MESSAGE",
							"typeName": "NullableDuration"
						},
						{
							"name": "idleDelayBattery",
							"number": 8,
							"label": "LABEL_OPTIONAL",
							"type": "TYPE_MESSAGE",
							"typeName": "NullableDuration"
						},
						{
							"name": "idleWarningDelayBattery",
							"number": 9,
							"label": "LABEL_OPTIONAL",
							"type": "TYPE_MESSAGE",
							"typeName": "NullableDuration"
						},
						{
							"name": "idleActionBattery",
							"number": 10,
							"label": "LABEL_OPTIONAL",
							"type": "TYPE_ENUM",
							"typeName": "IdleActionBatteryEnum"
						},
						{
							"name": "screenDimDelayBattery",
							"number": 11,
							"label": "LABEL_OPTIONAL",
							"type": "TYPE_MESSAGE",
							"typeName": "NullableDuration"
						},
						{
							"name": "screenOffDelayBattery",
							"number": 12,
							"label": "LABEL_OPTIONAL",
							"type": "TYPE_MESSAGE",
							"typeName": "NullableDuration"
						},
						{
							"name": "screenLockDelayBattery",
							"number": 13,
							"label": "LABEL_OPTIONAL",
							"type": "TYPE_MESSAGE",
							"typeName": "NullableDuration"
						},
						{
							"name": "lockOnSleepOrLidClose",
							"number": 14,
							"label": "LABEL_OPTIONAL",
							"type": "TYPE_ENUM",
							"typeName": "NullableBoolean"
						}
					]
				},
				{
					"name": "NullableDuration",
					"field": [
						{
							"name": "duration",
							"number": 1,
							"label": "LABEL_OPTIONAL",
							"type": "TYPE_INT64"
						}
					]
				}
			],
			"enumType": [
				{
					"name": "LidCloseActionEnum",
					"value": [
						{ "name": "LID_CLOSE_ACTION_ENUM_SLEEP", "number": 1 },
						{ "name": "LID_CLOSE_ACTION_ENUM_LOGOUT", "number": 2 },
						{
							"name": "LID_CLOSE_ACTION_ENUM_SHUTDOWN",
							"number": 3
						},
						{
							"name": "LID_CLOSE_ACTION_ENUM_DO_NOTHING",
							"number": 4
						}
					]
				},
				{
					"name": "IdleActionAcEnum",
					"value": [
						{ "name": "IDLE_ACTION_AC_ENUM_SLEEP", "number": 1 },
						{ "name": "IDLE_ACTION_AC_ENUM_LOGOUT", "number": 2 },
						{ "name": "IDLE_ACTION_AC_ENUM_SHUTDOWN", "number": 3 },
						{
							"name": "IDLE_ACTION_AC_ENUM_DO_NOTHING",
							"number": 4
						}
					]
				},
				{
					"name": "IdleActionBatteryEnum",
					"value": [
						{
							"name": "IDLE_ACTION_BATTERY_ENUM_SLEEP",
							"number": 1
						},
						{
							"name": "IDLE_ACTION_BATTERY_ENUM_LOGOUT",
							"number": 2
						},
						{
							"name": "IDLE_ACTION_BATTERY_ENUM_SHUTDOWN",
							"number": 3
						},
						{
							"name": "IDLE_ACTION_BATTERY_ENUM_DO_NOTHING",
							"number": 4
						}
					]
				},
				{
					"name": "NullableBoolean",
					"value": [
						{ "name": "UNSET", "number": 1 },
						{ "name": "FALSE", "number": 2 },
						{ "name": "TRUE", "number": 3 }
					]
				}
			]
		},
		"fieldDescriptions": [
			{
				"field": "lidCloseAction",
				"description": "Action on lid close. Selects the action the device should take when the lid is closed.",
				"knownValueDescriptions": [
					{
						"value": "LID_CLOSE_ACTION_ENUM_SLEEP",
						"description": "Sleep."
					},
					{
						"value": "LID_CLOSE_ACTION_ENUM_LOGOUT",
						"description": "Logout."
					},
					{
						"value": "LID_CLOSE_ACTION_ENUM_SHUTDOWN",
						"description": "Shutdown."
					},
					{
						"value": "LID_CLOSE_ACTION_ENUM_DO_NOTHING",
						"description": "Do nothing."
					}
				],
				"defaultValue": "LID_CLOSE_ACTION_ENUM_LOGOUT",
				"name": "Action on lid close.",
				"fieldDescription": "Selects the action the device should take when the lid is closed.",
				"fieldConstraints": {}
			},
			{
				"field": "idleDelayAc",
				"description": "AC idle delay in seconds. Enter zero to never take the idle action. Leave empty for system default.",
				"inputConstraint": "Duration policy field accepts Long integer as input. Duration policy field value has minimum value of 0 (unit in second).",
				"nestedFieldDescriptions": [
					{
						"field": "duration",
						"description": "Duration.",
						"fieldConstraints": {}
					}
				],
				"name": "AC idle delay in seconds.",
				"fieldDescription": "Enter zero to never take the idle action. Leave empty for system default.",
				"fieldConstraints": {
					"numericRangeConstraint": { "minimum": "0" }
				}
			},
			{
				"field": "idleWarningDelayAc",
				"description": "AC idle warning delay in seconds. The warning appears only if the idle action is logout or shutdown. Enter zero to never show an idle warning. Leave empty for system default.",
				"inputConstraint": "Duration policy field accepts Long integer as input. Duration policy field value has minimum value of 0 (unit in second).",
				"name": "AC idle warning delay in seconds.",
				"fieldDescription": "The warning appears only if the idle action is logout or shutdown. Enter zero to never show an idle warning. Leave empty for system default.",
				"fieldConstraints": {
					"numericRangeConstraint": { "minimum": "0" }
				}
			},
			{
				"field": "idleActionAc",
				"description": "AC idle action. Selects what action the device should take once it is considered idle when connected to power.",
				"knownValueDescriptions": [
					{
						"value": "IDLE_ACTION_AC_ENUM_SLEEP",
						"description": "Sleep."
					},
					{
						"value": "IDLE_ACTION_AC_ENUM_LOGOUT",
						"description": "Logout."
					},
					{
						"value": "IDLE_ACTION_AC_ENUM_SHUTDOWN",
						"description": "Shut down."
					},
					{
						"value": "IDLE_ACTION_AC_ENUM_DO_NOTHING",
						"description": "Do nothing."
					}
				],
				"defaultValue": "IDLE_ACTION_AC_ENUM_SLEEP",
				"name": "AC idle action.",
				"fieldDescription": "Selects what action the device should take once it is considered idle when connected to power.",
				"fieldConstraints": {}
			},
			{
				"field": "screenDimDelayAc",
				"description": "AC screen dim delay in seconds. Enter zero to never dim the screen. Leave empty for system default. Does not affect screen dim on lock screen.",
				"inputConstraint": "Duration policy field accepts Long integer as input. Duration policy field value has minimum value of 0 (unit in second).",
				"name": "AC screen dim delay in seconds.",
				"fieldDescription": "Enter zero to never dim the screen. Leave empty for system default. Does not affect screen dim on lock screen.",
				"fieldConstraints": {
					"numericRangeConstraint": { "minimum": "0" }
				}
			},
			{
				"field": "screenOffDelayAc",
				"description": "AC screen off delay in seconds. Enter zero to never turn off the screen. Leave empty for system default. Does not affect screen off on lock screen.",
				"inputConstraint": "Duration policy field accepts Long integer as input. Duration policy field value has minimum value of 0 (unit in second).",
				"name": "AC screen off delay in seconds.",
				"fieldDescription": "Enter zero to never turn off the screen. Leave empty for system default. Does not affect screen off on lock screen.",
				"fieldConstraints": {
					"numericRangeConstraint": { "minimum": "0" }
				}
			},
			{
				"field": "screenLockDelayAc",
				"description": "AC screen lock delay in seconds. Enter zero to never lock the screen on idle. Leave empty for system default.",
				"inputConstraint": "Duration policy field accepts Long integer as input. Duration policy field value has minimum value of 0 (unit in second).",
				"name": "AC screen lock delay in seconds.",
				"fieldDescription": "Enter zero to never lock the screen on idle. Leave empty for system default.",
				"fieldConstraints": {
					"numericRangeConstraint": { "minimum": "0" }
				}
			},
			{
				"field": "idleDelayBattery",
				"description": "Battery idle delay in seconds. Enter zero to never take the idle action. Other idle delays will be clamped to this one. Leave empty for system default.",
				"inputConstraint": "Duration policy field accepts Long integer as input. Duration policy field value has minimum value of 0 (unit in second).",
				"name": "Battery idle delay in seconds.",
				"fieldDescription": "Enter zero to never take the idle action. Other idle delays will be clamped to this one. Leave empty for system default.",
				"fieldConstraints": {
					"numericRangeConstraint": { "minimum": "0" }
				}
			},
			{
				"field": "idleWarningDelayBattery",
				"description": "Battery idle warning delay in seconds. The warning appears only if the idle action is logout or shutdown. Enter zero to never show an idle warning. Leave empty for system default.",
				"inputConstraint": "Duration policy field accepts Long integer as input. Duration policy field value has minimum value of 0 (unit in second).",
				"name": "Battery idle warning delay in seconds.",
				"fieldDescription": "The warning appears only if the idle action is logout or shutdown. Enter zero to never show an idle warning. Leave empty for system default.",
				"fieldConstraints": {
					"numericRangeConstraint": { "minimum": "0" }
				}
			},
			{
				"field": "idleActionBattery",
				"description": "Battery idle action. Selects what action the device should take once it is considered idle when connected to power.",
				"knownValueDescriptions": [
					{
						"value": "IDLE_ACTION_BATTERY_ENUM_SLEEP",
						"description": "Sleep."
					},
					{
						"value": "IDLE_ACTION_BATTERY_ENUM_LOGOUT",
						"description": "Logout."
					},
					{
						"value": "IDLE_ACTION_BATTERY_ENUM_SHUTDOWN",
						"description": "Shut down."
					},
					{
						"value": "IDLE_ACTION_BATTERY_ENUM_DO_NOTHING",
						"description": "Do nothing."
					}
				],
				"defaultValue": "IDLE_ACTION_BATTERY_ENUM_SLEEP",
				"name": "Battery idle action.",
				"fieldDescription": "Selects what action the device should take once it is considered idle when connected to power.",
				"fieldConstraints": {}
			},
			{
				"field": "screenDimDelayBattery",
				"description": "Battery screen dim delay in seconds. Enter zero to never dim the screen. Leave empty for system default. Does not affect screen dim on lock screen.",
				"inputConstraint": "Duration policy field accepts Long integer as input. Duration policy field value has minimum value of 0 (unit in second).",
				"name": "Battery screen dim delay in seconds.",
				"fieldDescription": "Enter zero to never dim the screen. Leave empty for system default. Does not affect screen dim on lock screen.",
				"fieldConstraints": {
					"numericRangeConstraint": { "minimum": "0" }
				}
			},
			{
				"field": "screenOffDelayBattery",
				"description": "Battery screen off delay in seconds. Enter zero to never turn off the screen. Leave empty for system default. Does not affect screen off on lock screen.",
				"inputConstraint": "Duration policy field accepts Long integer as input. Duration policy field value has minimum value of 0 (unit in second).",
				"name": "Battery screen off delay in seconds.",
				"fieldDescription": "Enter zero to never turn off the screen. Leave empty for system default. Does not affect screen off on lock screen.",
				"fieldConstraints": {
					"numericRangeConstraint": { "minimum": "0" }
				}
			},
			{
				"field": "screenLockDelayBattery",
				"description": "Battery screen lock delay in seconds. Enter zero to never lock the screen on idle. Leave empty for system default.",
				"inputConstraint": "Duration policy field accepts Long integer as input. Duration policy field value has minimum value of 0 (unit in second).",
				"name": "Battery screen lock delay in seconds.",
				"fieldDescription": "Enter zero to never lock the screen on idle. Leave empty for system default.",
				"fieldConstraints": {
					"numericRangeConstraint": { "minimum": "0" }
				}
			},
			{
				"field": "lockOnSleepOrLidClose",
				"description": "Lock screen on sleep or lid close. Before Chrome 106, only sleep will trigger locking. In Chrome 106+, sleep or lid close will trigger locking.",
				"knownValueDescriptions": [
					{
						"value": "UNSET",
						"description": "Allow user to configure."
					},
					{ "value": "TRUE", "description": "Lock screen." },
					{ "value": "FALSE", "description": "Don't lock screen." }
				],
				"defaultValue": "UNSET",
				"name": "Lock screen on sleep or lid close.",
				"fieldDescription": "Before Chrome 106, only sleep will trigger locking. In Chrome 106+, sleep or lid close will trigger locking.",
				"fieldConstraints": {}
			}
		],
		"supportUri": "https://support.google.com/chrome/a/answer/2657289?hl=en#idle_settings_extended",
		"schemaName": "chrome.devices.managedguest.IdleSettingsExtended",
		"validTargetResources": ["ORG_UNIT"],
		"policyApiLifecycle": { "policyApiLifecycleStage": "API_CURRENT" },
		"categoryTitle": "Power and shutdown",
		"supportedPlatforms": ["CHROME_OS"]
	}`;
