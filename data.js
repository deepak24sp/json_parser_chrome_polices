export const jsonString = `{
		"name": "customers/C022n8w1u/policySchemas/chrome.devices.SignInKeyboard",
		"policyDescription": "Login screen keyboard.",
		"definition": {
			"messageType": [
				{
					"name": "SignInKeyboard",
					"field": [
						{
							"name": "loginScreenKeyboardSelections",
							"number": 1,
							"label": "LABEL_OPTIONAL",
							"type": "TYPE_MESSAGE",
							"typeName": "SignInKeyboards"
						}
					]
				},
				{
					"name": "SignInKeyboards",
					"field": [
						{
							"name": "selections",
							"number": 1,
							"label": "LABEL_OPTIONAL",
							"type": "TYPE_MESSAGE",
							"typeName": "KeyboardSelections"
						}
					]
				},
				{
					"name": "KeyboardSelections",
					"field": [
						{
							"name": "keyboardIds",
							"number": 1,
							"label": "LABEL_REPEATED",
							"type": "TYPE_STRING"
						}
					]
				}
			]
		},
		"fieldDescriptions": [
			{
				"field": "loginScreenKeyboardSelections",
				"description": "Controls which keyboards are available for ChromeOS devices when trying to sign in.",
				"nestedFieldDescriptions": [
					{
						"field": "selections",
						"description": "Sign in keyboard selections.",
						"nestedFieldDescriptions": [
							{
								"field": "keyboardIds",
								"description": "The list of ids for the available keyboard types the user can select at the login screen. The keyboards will appear in the same order as this list.",
								"knownValueDescriptions": [
									{
										"value": "xkb:be::fra",
										"description": "Belgian keyboard [French (France) - \u202aFran\u00e7ais (France)\u202c]."
									},
									{
										"value": "xkb:be::ger",
										"description": "Belgian keyboard [German (Germany) - \u202aDeutsch (Deutschland)\u202c]."
									},
									{
										"value": "xkb:be::nld",
										"description": "Belgian keyboard [Dutch - \u202aNederlands\u202c]."
									},
									{
										"value": "xkb:br::por",
										"description": "Brazilian keyboard."
									},
									{
										"value": "xkb:ca::fra",
										"description": "Canadian French keyboard."
									},
									{
										"value": "xkb:ca:eng:eng",
										"description": "Canadian English keyboard."
									},
									{
										"value": "xkb:ca:multix:fra",
										"description": "Canadian Multilingual keyboard [French (Canada) - \u202aFran\u00e7ais (Canada)\u202c]."
									},
									{
										"value": "xkb:ch::ger",
										"description": "Swiss keyboard [German (Switzerland) - \u202aDeutsch (Schweiz)\u202c]."
									},
									{
										"value": "xkb:ch:fr:fra",
										"description": "Swiss keyboard [French (Switzerland) - \u202aFran\u00e7ais (Suisse)\u202c]."
									},
									{
										"value": "xkb:cz::cze",
										"description": "Czech keyboard."
									},
									{
										"value": "xkb:cz:qwerty:cze",
										"description": "Czech QWERTY keyboard."
									},
									{
										"value": "xkb:de::ger",
										"description": "German keyboard."
									},
									{
										"value": "xkb:de:neo:ger",
										"description": "German NEO 2 keyboard."
									},
									{
										"value": "xkb:dk::dan",
										"description": "Danish keyboard."
									},
									{
										"value": "xkb:ee::est",
										"description": "Estonian keyboard."
									},
									{
										"value": "xkb:es::spa",
										"description": "Spanish keyboard."
									},
									{
										"value": "xkb:es:cat:cat",
										"description": "Catalan keyboard."
									},
									{
										"value": "xkb:fi::fin",
										"description": "Finnish keyboard."
									},
									{
										"value": "xkb:fr::fra",
										"description": "French keyboard."
									},
									{
										"value": "xkb:gb:dvorak:eng",
										"description": "UK Dvorak keyboard."
									},
									{
										"value": "xkb:gb:extd:eng",
										"description": "UK keyboard."
									},
									{
										"value": "xkb:hr::scr",
										"description": "Croatian keyboard."
									},
									{
										"value": "xkb:hu::hun",
										"description": "Hungarian keyboard."
									},
									{
										"value": "xkb:ie::ga",
										"description": "Irish keyboard."
									},
									{
										"value": "xkb:in::eng",
										"description": "Indian English keyboard."
									},
									{
										"value": "xkb:is::ice",
										"description": "Icelandic keyboard."
									},
									{
										"value": "xkb:it::ita",
										"description": "Italian keyboard."
									},
									{
										"value": "xkb:jp::jpn",
										"description": "Japanese keyboard."
									},
									{
										"value": "xkb:latam::spa",
										"description": "Latin American keyboard."
									},
									{
										"value": "xkb:lt::lit",
										"description": "Lithuanian keyboard."
									},
									{
										"value": "xkb:lv:apostrophe:lav",
										"description": "Latvian keyboard."
									},
									{
										"value": "xkb:mt::mlt",
										"description": "Maltese keyboard."
									},
									{
										"value": "xkb:no::nob",
										"description": "Norwegian keyboard."
									},
									{
										"value": "xkb:pk::eng",
										"description": " US keyboard [Pakistani]."
									},
									{
										"value": "xkb:pl::pol",
										"description": "Polish keyboard."
									},
									{
										"value": "xkb:pt::por",
										"description": "Portuguese keyboard."
									},
									{
										"value": "xkb:ro::rum",
										"description": "Romanian keyboard."
									},
									{
										"value": "xkb:ro:std:rum",
										"description": "Romanian Standard keyboard."
									},
									{
										"value": "xkb:se::swe",
										"description": "Swedish keyboard."
									},
									{
										"value": "xkb:si::slv",
										"description": "Slovenian keyboard."
									},
									{
										"value": "xkb:tr::tur",
										"description": "Turkish keyboard."
									},
									{
										"value": "xkb:us::eng",
										"description": "US keyboard."
									},
									{
										"value": "xkb:us::fil",
										"description": "US keyboard [Filipino]."
									},
									{
										"value": "xkb:us::ind",
										"description": "US keyboard [Indonesian - \u202aIndonesia\u202c]."
									},
									{
										"value": "xkb:us::msa",
										"description": "US keyboard [Malay - \u202aMelayu\u202c]."
									},
									{
										"value": "xkb:us:altgr-intl:eng",
										"description": "US Extended keyboard."
									},
									{
										"value": "xkb:us:colemak:eng",
										"description": "US Colemak keyboard."
									},
									{
										"value": "xkb:us:dvorak:eng",
										"description": "US Dvorak keyboard."
									},
									{
										"value": "xkb:us:dvp:eng",
										"description": "US Programmer Dvorak keyboard."
									},
									{
										"value": "xkb:us:intl:eng",
										"description": "US International keyboard."
									},
									{
										"value": "xkb:us:intl_pc:eng",
										"description": "US International PC keyboard."
									},
									{
										"value": "xkb:us:intl:nld",
										"description": "Netherlands keyboard."
									},
									{
										"value": "xkb:us:intl:por",
										"description": "US International keyboard [Portuguese (Brazil) - \u202aPortugu\u00eas (Brasil)\u202c]."
									},
									{
										"value": "xkb:us:workman-intl:eng",
										"description": "US Workman International keyboard."
									},
									{
										"value": "xkb:us:workman:eng",
										"description": "US Workman keyboard."
									},
									{
										"value": "xkb:za:gb:eng",
										"description": "UK keyboard [South African]."
									}
								],
								"name": "The list of ids for the available keyboard types the user can select at the login screen. The keyboards will appear in the same order as this list.",
								"fieldConstraints": {}
							}
						],
						"name": "Sign in keyboard selections.",
						"fieldConstraints": {}
					}
				],
				"name": "Controls which keyboards are available for ChromeOS devices when trying to sign in.",
				"fieldConstraints": {}
			}
		],
		"supportUri": "https://support.google.com/chrome/a/answer/1375678?hl=en#login_screen_input_methods",
		"schemaName": "chrome.devices.SignInKeyboard",
		"validTargetResources": ["ORG_UNIT"],
		"policyApiLifecycle": { "policyApiLifecycleStage": "API_CURRENT" },
		"categoryTitle": "Sign-in settings",
		"supportedPlatforms": ["CHROME_OS"]
        }`;
