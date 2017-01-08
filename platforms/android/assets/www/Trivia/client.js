$(function () {
	
	// Initialise the game object on the HTML element with class 'wrapper'
	// Below is a list of all the questions and correct/incorrect answers in JSON format
	quiz = new TriviaQuiz($('.wrapper'), [
		{
			"question": "מה ההבדל בין הנדסה גנטית לביומימקרי?",
			"answers": [
				{ "text": "ביו-מימקרי עוסק בשינוי גנים של בעלי חיים ואילו הנדסה גנטית עוסקת בשינוי הגנים של צמחים", "correct": false },
				{ "text": "ביו-מימקרי הוא שמו המדעי של תחום ההנדסה הגנטית", "correct": false },
				{ "text": "ביו-מימקרי מחפש השראה ורעיונות בטבע בעוד הנדסה גנטית משנה את הטבע על ידי התערבות במבנה הגנטי של צמחים ושל בעלי חיים", "correct": true },
				{ "text": "ביו-מימקרי משתמש בכלים מן הטבע כדי לתכנן גנים חדשים בעוד הנדסה גנטית משנה את הטבע על ידי התערבות במבנה הגנטי של צמחים", "correct": false }
			]
		},
		{
			"question": "האם מדע הביומימיקרי הינו המצאה חדשה?",
			"answers": [
				{ "text":"מדע הביומימקרי הינו טכניקה שהשתמשו בה כבר במאה ה-16", "correct": true },
				{ "text": "מדע הביומימקרי הינו מדע חדש שנוסד על ידי חברות הייטק", "correct": false },
				{ "text": "הביומימקרי הומצא במאה ה-19 במהפכה התעשייתית", "correct": false },
				{ "text": "אין לדעת מתי הומצא מדע הביומימקרי", "correct": false }
			]
		},
		{
			"question": "באיזו שיטה משתמשים בביומימיקרי כדי לתכנן מוצרים המבוססים על הטבע?",
			"answers": [
				{ "text": "אין שיטה מיוחדת", "correct": false },
				{ "text": "חשיבת תכנון (Design thinking)", "correct": true },
				{ "text": "רישום פטנטים", "correct": false },
				{ "text": "חשיבה מסועפת ומתכנסת ", "correct": false }
			]
		},
		{
			"question": "מה היה הפיתוח הראשון בהשראת ביומימיקרי בשנת 1505?",
			"answers": [
				{ "text": "המצאת נורת החשמל", "correct": false },
				{ "text": "המצאת ההליקופטר", "correct": true },
				{ "text": "המצאת הטלפון", "correct": false },
				{ "text": "המצאת המכונית", "correct": false }
			]
		},
		{
			"question": "מי היה המדען הראשון שידוע שהשתמש בביומימקרי  להמצאותיו?",
			"answers": [
				{ "text": "אלכסנדר בל", "correct": false },
				{ "text": "מיכלאנג'לו", "correct": false },
				{ "text": "תומס אלווה אדיסון", "correct": false },
				{ "text": "ליאונרדו דה-וינצ'י", "correct": true }
			]
		},
		{
			"question": "מהו כלי המחקר שבו משתמשים כדי ללמוד מהטבע?",
			"answers": [
				{ "text": "תצפית", "correct": true },
				{ "text": "שאלונים", "correct": false },
				{ "text": "ראיונות עם אנשים", "correct": false },
				{ "text": "ויקיפדיה", "correct": false }
			]
		},
        {
			"question": "מהי דוגמה לפיתוח בתחום הביומימקרי?",
			"answers": [
				{ "text": "דגי קרפיון שגדלים לגודל מקסימלי בזמן קצר", "correct": false },
				{ "text": "עגבניות עמידות לקרה", "correct": false },
				{ "text": "רובוטים שהולכים כמו בני אדם", "correct": true },
				{ "text": "בננה בטעם שוקולד", "correct": false }
			]
		},
		{
			"question": "מה הקשר בין ביומימקרי לשימוש בחומרי דלק מזהמים?",
			"answers": [
				{ "text":"תחום הביומימקרי יכול לעזור בצמצום שימוש בחומרי דלק מזהמים כי בסביבת החיים בטבע אין שימוש בטמפרטורות גבוהות", "correct": true },
				{ "text": "תחום הביומימקרי יכול לעזור בצמצום שימוש בחומרי דלק מזהמים כי בסביבת החיים בטבע אין שימוש ברעלים והדברה", "correct": false },
				{ "text": "תחום הביומימיקרי יכול לזהם את הסביבה כי ההמצאות מבוססות על שימוש באנרגיה", "correct": false },
				{ "text": "אין קשר בין ביומימיקרי לחומרי דלק", "correct": false }
			]
		},
		{
			"question": "איזו המצאה הצליחו לייצר בהשראת כנפי הפרפר?",
			"answers": [
				{ "text": "הליקופטר", "correct": false },
				{ "text": "צבעים לבדים", "correct": true },
				{ "text": "מכונית", "correct": false },
				{ "text":  "רחפן", "correct": false }
			]
		},
		{
			"question": "איזו המצאה הצליחו לייצר בהשראת הצדפה הכחולה?",
			"answers": [
				{ "text": "נשימה תת מימית", "correct": false },
				{ "text": "דבקים חזקים ללא כימיקלים", "correct": true },
				{ "text": "מנגנון נעילה של דלת", "correct": false },
				{ "text": "דלק המורכב ממי ים ופלנקטון", "correct": false }
			]
		},
		{
			"question": "בהשראת איזה בעל חיים המציאו את קרם ההגנה המגן גם מהשמש וגם מחרקים?",
			"answers": [
				{ "text": "פיל", "correct": false },
				{ "text": "זברה", "correct": false },
				{ "text": "לויתן", "correct": false },
				{ "text": "היפופותם", "correct": true }
			]
		},
		{
			"question": "באיזה תחום עוסקים בביומימקרי?",
			"answers": [
				{ "text": "טכנולוגיה", "correct": false },
				{ "text": "פיזיקה", "correct": false },
				{ "text": "כימיה", "correct": false },
				{ "text": "כל התשובות נכונות", "correct": true }
			]
		},
		{
			"question": "מה משמעות המילה ביומימקרי?",
			"answers": [
				{ "text": "צירוף של המילים ביום - אזור חיים ומקרי מפני שהגילויים בתחום אינם צפויים", "correct": false },
				{ "text": "התחום נקרא על שמו של הממציא אוליבר ביומימקרי", "correct": false },
				{ "text": "עיצוב אופנה", "correct": false },
				{ "text": "צירוף של המילים ביוס - חיים ומימטיקה - חיקוי", "correct": true }
			]
		},
		{
			"question": "איזה מן הבאים אינו שימוש בביומימקרי?",
			"answers": [
				{ "text": "שאיבת השראה מתהליכים בטבע כמו ארגון של נמלים או של דבורים כדי ליעל ארגון עסקי", "correct": false },
				{ "text": "יישום עקרונות שנלמדו מחקר של דרכי ההתמודדות של ציפורים עם העקה שנוצרת בעקבות מסעות ארוכים בתנאים קשים בניהול מצבי לחץ בבני אדם", "correct": false },
				{ "text": "ייצור צמחים זוהרים בחושך כדי לספק אור טבעי", "correct": true },
				{ "text": "שימוש במבנה העלה של הלוטוס ליצור משטחים דוחי מים ולכלוך", "correct": false }
			]
		}
	]);

});