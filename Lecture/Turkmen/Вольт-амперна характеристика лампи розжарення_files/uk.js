(function(global){var Language = {};

Language.pluralFormFunction = function (n) {
		if (n % 10 == 1 && n % 100 != 11) {
			return 'one';
		}

		if (n == (n | 0) && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14)) {
			return 'few';
		}

		return 'other';
	};


Language.bubble = Language.bubble || {};

Language.bubble.attention_grabber = {
	"message": "Приваблювач уваги чату"
};


Language.chat = Language.chat || {};

Language.chat.Warning = {
	"message": "Увага"
};
Language.chat.accept_call = {
	"message": "Прийняти"
};
Language.chat.active = {
	"message": "Активний"
};
Language.chat.agent_profile_image = {
	"message": "Фото консультанта"
};
Language.chat.agent_ringing = {
	"message": "Вхідний виклик"
};
Language.chat.all_conversations = {
	"message": "Переглянути всі бесіди"
};
Language.chat.call_end_details = {
	"message": "Почався в #startedOn і тривав #duration",
	"vars": [
		"startedOn",
		"duration"
	]
};
Language.chat.call_error_load = {
	"message": "Не вдається завантажити деталі виклику."
};
Language.chat.call_started_on = {
	"message": "Почався в #startedOn",
	"vars": [
		"startedOn"
	]
};
Language.chat.chatEnded = {
	"message": "Ваш чат завершено"
};
Language.chat.chat_icon = {
	"message": "Зображення чату"
};
Language.chat.chat_qm = {
	"message": "Чат?"
};
Language.chat.chat_text = {
	"message": "Чат"
};
Language.chat.close_icon = {
	"message": "Іконка закрити"
};
Language.chat.completed_call = {
	"message": "Виклик завершено"
};
Language.chat.conversation_ended_on = {
	"message": "Conversation ended on"
};
Language.chat.decline_call = {
	"message": "Відхилити"
};
Language.chat.defaultName = {
	"message": "Ви (змінити ім'я)"
};
Language.chat.departmentIsAway = {
	"message": "Відділ #strongStart #departmentName #strongEnd на даний час не на місці.",
	"vars": [
		"departmentName",
		"strongStart",
		"strongEnd"
	]
};
Language.chat.departmentIsOffline = {
	"message": "Відділ #strongStart #departmentName #strongEnd зараз не в мережі. Вас може обслужити інший відділ.",
	"vars": [
		"departmentName",
		"strongStart",
		"strongEnd"
	]
};
Language.chat.download = {
	"message": "Завантажити"
};
Language.chat.downloadFile = {
	"message": "Завантажити файл"
};
Language.chat.dragDropText = {
	"message": "Для завантаження перетягніть файли сюди"
};
Language.chat.emoji_error_load = {
	"message": "Емодзі не завантажено"
};
Language.chat.error_title = {
	"message": "Помилка"
};
Language.chat.failed = {
	"message": "Не вдалося"
};
Language.chat.generalUploadError = {
	"message": "\"#fileName\", будь ласка, спробуйте ще раз.",
	"vars": [
		"fileName"
	]
};
Language.chat.generalUploadErrorLabel = {
	"message": "Не вдалося завантажити файл"
};
Language.chat.goToLatest = {
	"message": "Перейти до останньої"
};
Language.chat.hideButton = {
	"message": "Сховати чат"
};
Language.chat.incoming_call_message = {
	"message": "Виклик від #name",
	"vars": [
		"name"
	]
};
Language.chat.insert_emoji = {
	"message": "Додати емодзі"
};
Language.chat.justNow = {
	"message": "зараз"
};
Language.chat.limit2 = {
	"message": "Максимальний розмір файлу для мобільних браузерів становить 2 Мб. Будь ласка, завантажте файл меншого розміру."
};
Language.chat.limit50 = {
	"message": "Максимальний розмір файлу 50МВ, будь ласка, завантажте менший файл."
};
Language.chat.message_not_delivered = {
	"message": "Повідомлення не доставлено, натисніть тут, щоб повторно надіслати."
};
Language.chat.message_too_long = {
	"message": "Повідомлення не може перевищувати 5000 знаків"
};
Language.chat.missed_agent = {
	"message": "Ваш виклик був пропущений"
};
Language.chat.missed_visitor = {
	"message": "Ви пропустили виклик"
};
Language.chat.missed_visitor_messagePreview = {
	"message": "Ви пропустили виклик від"
};
Language.chat.mobileName = {
	"message": "Ви"
};
Language.chat.newChat = {
	"message": "Розпочати новий чат"
};
Language.chat.newMessages = {
	"message": "Нові повідомлення"
};
Language.chat.new_conversation = {
	"message": "Нова бесіда"
};
Language.chat.notificationTitle = {
	"message": "сповіщення"
};
Language.chat.ongoing_call = {
	"message": "Поточний виклик"
};
Language.chat.past = {
	"message": "#time назад",
	"vars": [
		"time"
	]
};
Language.chat.pasted_image_title = {
	"message": "Вставлено зображення в #dateTime",
	"vars": [
		"dateTime"
	]
};
Language.chat.profile_prechat_text = {
	"message": "Будь ласка, заповніть нижче подану форму, щоб розпочати чат зі мною."
};
Language.chat.rejected_call = {
	"message": "Ви відхилили цей виклик"
};
Language.chat.remove_rate = {
	"message": "Ви видалили виставленний рейтинг для цієї переписки"
};
Language.chat.resend = {
	"message": "Надіслати повторно"
};
Language.chat.retry = {
	"message": "Спробувати знову."
};
Language.chat.return_to_live_chat = {
	"message": "Return to live chat"
};
Language.chat.say_something = {
	"message": "Написати відповідь.."
};
Language.chat.screen_share_error = {
	"message": "Демонстрація екрану недоступна."
};
Language.chat.send_mail = {
	"message": "Надіслати листа"
};
Language.chat.sent_file = {
	"message": "Надіслати файл"
};
Language.chat.today_time = {
	"message": "Сьогодні, #time",
	"vars": [
		"time"
	]
};
Language.chat.tryAgain = {
	"message": "Спробуйте ще."
};
Language.chat.unanswered = {
	"message": "Без відповіді"
};
Language.chat.uploading = {
	"message": "Завантаження..."
};
Language.chat.video_call_error = {
	"message": "Відеовиклик недоступний."
};
Language.chat.visitor_ringing = {
	"message": "Виклик..."
};
Language.chat.voice_call_error = {
	"message": "Голосовий виклик недоступний."
};
Language.chat.we_are_live = {
	"message": "Ми на місці і готові розпочати з вами чат. Скажіть щось, щоб розпочати живий чат."
};


Language.days = Language.days || {};

Language.days['0'] = {
	"message": "Неділя"
};
Language.days['1'] = {
	"message": "Понеділок"
};
Language.days['2'] = {
	"message": "Вівторок"
};
Language.days['3'] = {
	"message": "Середа"
};
Language.days['4'] = {
	"message": "Четвер"
};
Language.days['5'] = {
	"message": "П'ятниця"
};
Language.days['6'] = {
	"message": "Субота"
};


Language.form = Language.form || {};

Language.form.CancelButton = {
	"message": "Скасувати"
};
Language.form.CloseButton = {
	"message": "Зачинити"
};
Language.form.DepartmentsErrorMessage = {
	"message": "Треба вказати відділ."
};
Language.form.DepartmentsPlaceholder = {
	"message": "виберіть відділ.."
};
Language.form.EmailErrorMessage = {
	"message": "Невірна адреса ел. пошти."
};
Language.form.EmailPlaceholder = {
	"message": "Адреса електронної пошти"
};
Language.form.EmailTranscriptFormMessage = {
	"message": "Будь ласка, заповніть нижче подану форму, щоб надіслати цю розмову на вашу електронну пошту."
};
Language.form.EmailTranscriptSuccess = {
	"message": "Надішліть запит транскрипту електронної пошти."
};
Language.form.EmailTranscriptTo = {
	"message": "Відправити історію переписки на пошту"
};
Language.form.EndChatMessage = {
	"message": "Дякуємо за спілкування. Почніть новий сеанс чату або введіть адресу Вашої електронної пошти для отримання протоколу цієї розмови на Вашу поштову скриньку."
};
Language.form.EndChatMessage2 = {
	"message": "Дякуємо, що поговорили з нами. Не вагайтесь розпочинати нову сесію розмов."
};
Language.form.EndChatTitle = {
	"message": "Ви впевнені, що хочете залишити цей чат?"
};
Language.form.MessagePlaceholder = {
	"message": "ваше повідомлення.."
};
Language.form.NameErrorMessage = {
	"message": "Треба вказати ім'я."
};
Language.form.NameFormMessage = {
	"message": "Будь ласка, вкажіть своє ім'я, щоб ми могли впізнати вас наступного разу."
};
Language.form.OfflineFormMessage = {
	"message": "Будь ласка, заповніть нижче подану форму і ми вам дамо відповідь, як тільки це буде можливо."
};
Language.form.OfflineMessageNotSent = {
	"message": "Нажаль, Ваше повідомлення не було доставлене, спробуйте знову"
};
Language.form.OfflineMessageSent = {
	"message": "Ваше повідомлення надіслано!"
};
Language.form.PhoneErrorMessage = {
	"message": "Невірний номер"
};
Language.form.PreChatFormMessage = {
	"message": "Будь ласка, заповніть нижче подану форму, щоб розпочати чат із наступним доступним агентом."
};
Language.form.PreChatFormMessageProfile = {
	"message": "Будь ласка, заповніть нижче подану форму, щоб розпочати чат зі мною."
};
Language.form.QuestionPlaceholder = {
	"message": "Ваш запит..."
};
Language.form.RequiredErrorMessage = {
	"message": "Це поле обов'язково до заповнення"
};
Language.form.SaveButton = {
	"message": "Зберегти"
};
Language.form.SendButton = {
	"message": "Відправити"
};
Language.form.SendMessage = {
	"message": "Надіслати повідомлення"
};
Language.form.StartChatButton = {
	"message": "Розпочати чат"
};
Language.form.SubmitButton = {
	"message": "Надіслати"
};
Language.form.SubmittedFrom = {
	"message": "Відправлена форма"
};
Language.form.SubmittingProcess = {
	"message": "Надсилання"
};
Language.form.TranscriptMessage = {
	"message": "Введіть адресу Вашої електронної пошти для отримання протоколу цієї розмови на Вашу поштову скриньку."
};
Language.form.any = {
	"message": "Будь-який"
};
Language.form.chatEnded = {
	"message": "Ваш чат завершено"
};
Language.form.department = {
	"message": "Відділ"
};
Language.form.email = {
	"message": "Email"
};
Language.form.errorSaving = {
	"message": "Неможливо зберегти. Спробуйте ще раз."
};
Language.form.message = {
	"message": "Повідомлення"
};
Language.form.name = {
	"message": "Ім'я"
};
Language.form.sendAgain = {
	"message": "Надіслати знову"
};
Language.form.visitButton = {
	"message": "Відвідати tawk.to"
};


Language.home = Language.home || {};

Language.home.banner_image = {
	"message": "Зображення банеру"
};
Language.home.chat_button = {
	"message": "Нова бесіда"
};
Language.home.chat_input = {
	"message": "Напишіть тут і натисніть ввід"
};
Language.home.heading_main = {
	"message": "Вітаємо, 👋"
};
Language.home.heading_sub = {
	"message": "Потрібна допомога? Шукайте відповіді в нашому Центрі Допомоги або почніть бесіду"
};
Language.home.kb_search = {
	"message": "Шукати відповіді"
};
Language.home.logo_image = {
	"message": "Зображення логотипу"
};


Language.kb = Language.kb || {};

Language.kb.article_image = {
	"message": "Зображення статті"
};
Language.kb.article_rating = {
	"message": "Чи була ця стаття корисною?"
};
Language.kb.article_rating_count = {
	"message": "#totalLikes з #totalVotes вподобали цю статтю",
	"vars": [
		"totalLikes",
		"totalVotes"
	]
};
Language.kb.author_profile_image = {
	"message": "Зображення профілю консультанта"
};
Language.kb.clear_search = {
	"message": "Очистити пошук"
};
Language.kb.downvote_rating_button = {
	"message": "Ні"
};
Language.kb.help_center = {
	"message": "Цент Допомоги"
};
Language.kb.negative_rating = {
	"message": "Негативний"
};
Language.kb.positive_rating = {
	"message": "Позитивний"
};
Language.kb.recent_searches = {
	"message": "Останні пошукові запити"
};
Language.kb.search_fail_description = {
	"message": "Будь-ласка, спробуйте знову"
};
Language.kb.search_fail_title = {
	"message": "Немає результатів пошуку"
};
Language.kb.search_placeholder = {
	"message": "Шукайте відповіді"
};
Language.kb.search_results = {
	"message": "Результати пошуку"
};
Language.kb.show_all_results = {
	"message": "Показати всі результати (#num)",
	"vars": [
		"num"
	]
};
Language.kb.submit_search = {
	"message": "Почати пошук"
};
Language.kb.upvote_rating_button = {
	"message": "Так"
};
Language.kb.view_full = {
	"message": "Показати повністю"
};


Language.menu = Language.menu || {};

Language.menu.add_chat_to_your_website = {
	"message": "Add Chat to your website"
};
Language.menu.change_name = {
	"message": "Змінити ім'я"
};
Language.menu.email_transcript = {
	"message": "Відправити протокол"
};
Language.menu.end_chat_session = {
	"message": "Завершити сесію чата"
};
Language.menu.popout_widget = {
	"message": "Відкрити віджет у вікні"
};
Language.menu.sound_off = {
	"message": "Звук вимкнено"
};
Language.menu.sound_on = {
	"message": "Звук увімкнено"
};


Language.months = Language.months || {};

Language.months['0'] = {
	"message": "Січень"
};
Language.months['1'] = {
	"message": "Лютий"
};
Language.months['10'] = {
	"message": "Листопад"
};
Language.months['11'] = {
	"message": "Грудень"
};
Language.months['2'] = {
	"message": "Березень"
};
Language.months['3'] = {
	"message": "Квітень"
};
Language.months['4'] = {
	"message": "Травень"
};
Language.months['5'] = {
	"message": "Червень"
};
Language.months['6'] = {
	"message": "Липень"
};
Language.months['7'] = {
	"message": "Серпень"
};
Language.months['8'] = {
	"message": "Вересень"
};
Language.months['9'] = {
	"message": "Жовтень"
};


Language.notifications = Language.notifications || {};

Language.notifications.dismiss_alert = {
	"message": "Відхилити оповіщення"
};
Language.notifications.maximum_file_upload_warning = {
	"message": "На жаль, передача файлів обмежена до #limitFileNumber на файл. Будь ласка, спробуйте надіслати наступні файл(и) ще раз:",
	"vars": [
		"limitFileNumber"
	]
};
Language.notifications.maximum_size_upload_warning = {
	"message": "Вибачте, передача файлів обмежена до #limitFileSize на файл. Будь ласка, створіть стиснутий архів з файлу(ів) і повторіть спробу.",
	"vars": [
		"limitFileSize"
	]
};
Language.notifications.reconnecting = {
	"message": "Перез'єднання"
};
Language.notifications.retry = {
	"message": "Спробуйте знову"
};


Language.overlay = Language.overlay || {};

Language.overlay.cookiesOff = {
	"message": "Ви не можете використовувати цей чат, бо у вашому браузері відключено функцію прийому файлів cookie. Будь ласка, увімкніть цю функцію і обновіть сторінку."
};
Language.overlay.inactive = {
	"message": "Щоб перезавантажити чат, натисніть тут"
};
Language.overlay.maintenance = {
	"message": "Чат на обслуговуванні"
};
Language.overlay.tawkContent = {
	"message": "Цей віджет підтримується tawk.to - безкоштовний додаток для обміну повідомленнями, який дозволяє відслідковувати і вести спілкування з користувачами вашого веб-сайту."
};


Language.rollover = Language.rollover || {};

Language.rollover.back = {
	"message": "Назад"
};
Language.rollover.chatMenu = {
	"message": "Меню"
};
Language.rollover.emailTranscriptOption = {
	"message": "Надіслати історію переписки на електронну пошту"
};
Language.rollover.end = {
	"message": "Завершити чат"
};
Language.rollover.knowledgeBase = {
	"message": "База знань"
};
Language.rollover.maximize = {
	"message": "Максимізувати"
};
Language.rollover.minimize = {
	"message": "Мінімізувати"
};
Language.rollover.negativeRating = {
	"message": "Оцінити цю розмову +1"
};
Language.rollover.popOut = {
	"message": "Відокремити вікно"
};
Language.rollover.positiveRating = {
	"message": "Оцінити цю розмову +1"
};
Language.rollover.rateChat = {
	"message": "Поставте оцінку чату"
};
Language.rollover.resendMessage = {
	"message": "Надіслати повідомлення ще раз"
};
Language.rollover.resize = {
	"message": "Змінити розмір"
};
Language.rollover.screenShare = {
	"message": "Демонстрація екрану"
};
Language.rollover.uploadFile = {
	"message": "Додати файл"
};
Language.rollover.videoCall = {
	"message": "Відеовиклик"
};
Language.rollover.voiceCall = {
	"message": "Голосовий виклик"
};


Language.routes = Language.routes || {};

Language.routes.all_agents = {
	"message": "всі консультанти"
};
Language.routes.conversations = {
	"message": "Бесіди"
};
Language.routes.load_more = {
	"message": "Завантажити більше"
};


Language.status = Language.status || {};

Language.status.away = {
	"message": "Відійшов"
};
Language.status.offline = {
	"message": "Офлайн"
};
Language.status.online = {
	"message": "В мережі"
};




Language.chat = Language.chat || {};

Language.chat.hours = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num година",
		"few": "#num годин",
		"many": "#num годин",
		"other": "#num години"
	}
};
Language.chat.messageQueuedText = {
	"pluralVars": [
		"t"
	],
	"message": {
		"one": "Приблизний час очікування становить #strongStart #t хвилину #strongEnd",
		"few": "Приблизний час очікування становить #strongStart #t хвилин #strongEnd",
		"many": "Приблизний час очікування #strongStart #t хвилин #strongEnd",
		"other": "Приблизний час очікування становить #strongStart #t хвилини #strongEnd"
	},
	"vars": [
		"strongStart",
		"strongEnd"
	]
};
Language.chat.minutes = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num хвилина",
		"few": "#num хвилин",
		"many": "#num хвилин",
		"other": "#num хвилини"
	}
};
Language.chat.newMessage = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num нове повідомлення",
		"few": "#num нових повідомлень",
		"many": "#num нових повідомлень",
		"other": "#num нових повідомлень"
	}
};
Language.chat.seconds = {
	"pluralVars": [
		"num"
	],
	"message": {
		"one": "#num секунда",
		"few": "#num секунд",
		"many": "#num секунд",
		"other": "#num секунди"
	}
};


global.$_Tawk.language = Language;})(window);