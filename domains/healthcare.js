export const questionData = [
  {
    "pages": [],
    "metadata": {
      "Data Type": "Calculated percentage",
      "Clinical Horizon": "روزانه / روند متحرک ۷روزه",
      "System Action": "Green: ثبت وضعیت Yellow: ارسال Reminder Red: Escalation",
      "Owner": "مدیر مرکز پایش"
    },
    "extra": [
      "نوع: Calculated — سؤال مستقیم از بیمار ندارد",
      "Green: همه Check-inهای مورد انتظار ثبت شده‌اند",
      "Yellow: بخشی از Check-inها ثبت نشده‌اند",
      "Red: عدم ثبت مکرر یا عدم ثبت Check-in مهم",
      "Green: ثبت وضعیت",
      "Yellow: ارسال Reminder",
      "Red: Escalation"
    ],
    "title": "Check-in Completion — تکمیل Check-in"
  },
  {
    "pages": [],
    "metadata": {
      "Data Type": "Calculated / Timestamp",
      "Clinical Horizon": "روزانه",
      "System Action": "ارسال Reminder ثبت SLA breach در تأخیر طولانی یا تکرارشونده، Escalation",
      "Owner": "مدیر مرکز پایش"
    },
    "extra": [
      "نوع: Calculated — سؤال مستقیم از بیمار ندارد",
      "Green: ثبت در بازه زمانی تعیین‌شده",
      "Yellow: تأخیر قابل‌توجه",
      "Red: تأخیر طولانی یا عدم ثبت"
    ],
    "title": "Check-in Timeliness — به‌موقع بودن Check-in"
  },
  {
    "pages": [],
    "metadata": {
      "Data Type": "Boolean / Deterministic",
      "Clinical Horizon": "روزانه",
      "System Action": "Yellow: ارسال Reminder Red: Escalation به مدیر مرکز پایش در صورت نیاز: ارجاع به مراقب",
      "Owner": "مدیر مرکز پایش؛ در صورت نیاز مراقب نکته طراحی: این آیتم نباید با Check-in Completion ادغام شود؛ Completion شاخص نسبتی است، اما Missed Check-in یک رویداد قطعی است."
    },
    "extra": [
      "نوع: Boolean / Deterministic — سؤال مستقیم از بیمار ندارد",
      "Green: ثبت به‌موقع",
      "Yellow: تأخیر کمتر از ۲۴ ساعت",
      "Red: عدم ثبت بیش از ۲۴ ساعت",
      "Yellow: ارسال Reminder",
      "Red: Escalation به مدیر مرکز پایش",
      "این آیتم نباید با Check-in Completion ادغام شود؛ Completion شاخص نسبتی است، اما Missed Check-in یک رویداد قطعی است."
    ],
    "title": "Missed Check-in — Check-in از دست‌رفته"
  },
  {
    "pages": [],
    "metadata": {
      "Data Type": "Calculated / Trend",
      "Clinical Horizon": "روند ۳ تا ۷ روزه",
      "System Action": "Yellow: Trend Flag و Reminder Red: بررسی انسانی و Escalation",
      "Owner": "مدیر مرکز پایش نکته طراحی: Trend باید از History محاسبه شود و نباید بر اساس یک Check-in منفرد تعیین شود."
    },
    "extra": [
      "نوع: Calculated — سؤال مستقیم از بیمار ندارد",
      "Green: پایدار یا رو به بهبود",
      "Yellow: کاهش تدریجی",
      "Red: افت واضح، قطع یا اختلال مکرر",
      "Yellow: Trend Flag و Reminder",
      "Red: بررسی انسانی و Escalation"
    ],
    "title": "Check-in Adherence Trend — روند پایبندی به Check-in"
  },
  {
    "pages": [],
    "metadata": {
      "Data Type": "Calculated / Timestamp",
      "Clinical Horizon": "همان روز",
      "System Action": "ارسال Reminder ثبت SLA breach در پاسخ پس از Timeout یا بدون پاسخ، Escalation",
      "Owner": "مدیر مرکز پایش نکته طراحی: آستانه تأخیر برای همه درخواست‌ها یکسان نیست و باید بر اساس نوع Interaction تعیین شود؛ برای مثال Reminder عادی، درخواست مهم و هشدار بالینی SLA متفاوت دارند."
    },
    "extra": [
      "نوع: Calculated — سؤال مستقیم از بیمار ندارد"
    ],
    "title": "Response Delay — تأخیر در پاسخ‌گویی"
  },
  {
    "pages": [],
    "metadata": {
      "Data Type": "Calculated / Trend",
      "Clinical Horizon": "روند ۳ تا ۷ روزه",
      "System Action": "Yellow: Trend Alert و بررسی اولیه Red: بررسی انسانی و Escalation",
      "Owner": "مدیر مرکز پایش نکته طراحی: این آیتم باید تغییر روند تعامل را تشخیص دهد، نه فقط یک پاسخ دیرهنگام منفرد را."
    },
    "extra": [
      "نوع: Calculated — سؤال مستقیم از بیمار ندارد",
      "Green: پایدار یا رو به بهبود",
      "Yellow: افزایش تدریجی تأخیر",
      "Red: تأخیر شدید و تکرارشونده",
      "Yellow: Trend Alert و بررسی اولیه",
      "Red: بررسی انسانی و Escalation",
      "این آیتم باید تغییر روند تعامل را تشخیص دهد، نه فقط یک پاسخ دیرهنگام منفرد را."
    ],
    "title": "Response Delay Trend — روند تأخیر در پاسخ‌گویی"
  },
  {
    "pages": [],
    "metadata": {
      "Data Type": "Calculated",
      "Clinical Horizon": "روند متحرک ۷روزه",
      "System Action": "بررسی Frequency، Recency و Importance در Yellow: بررسی کانال ارتباطی و Reminder در Red: فعال‌سازی مسیر Escalation",
      "Owner": "مدیر مرکز پایش نکته طراحی: یک عدم پاسخ منفرد نباید به‌تنهایی Red شود. ترکیب «تکرارشونده + اخیر + مهم» ریسک بالاتری ایجاد می‌کند."
    },
    "extra": [
      "نوع: Calculated — سؤال مستقیم از بیمار ندارد",
      "Green: عدم پاسخ وجود ندارد",
      "Yellow: یک مورد منفرد یا غیرمهم",
      "Red: عدم پاسخ تکرارشونده به درخواست‌های مهم"
    ],
    "title": "Repeated Non-response — عدم پاسخ تکرارشونده"
  },
  {
    "pages": [],
    "metadata": {
      "Data Type": "System event",
      "Clinical Horizon": "همان روز",
      "System Action": "بررسی وضعیت ارسال و تحویل هشدار در مشاهده‌نشدن: Reminder در هشدار مهمِ بدون تأیید: Escalation در هشدار بالینی: اطلاع به تیم درمان طبق نوع هشدار",
      "Owner": "مدیر مرکز پایش؛ در هشدار بالینی تیم درمان نکته طراحی: Sent، Delivered، Viewed و Acknowledged نباید یک وضعیت واحد تلقی شوند؛ مشاهده‌نشدن ممکن است ناشی از مشکل کانال ارتباطی باشد، نه عدم پایبندی بیمار."
    },
    "extra": [
      "نوع: System Event — سؤال مستقیم از بیمار ندارد"
    ],
    "title": "Alert Acknowledgement — مشاهده و تأیید هشدار"
  },
  {
    "pages": [],
    "metadata": {
      "Data Type": "Calculated / Timestamp",
      "Clinical Horizon": "فوری / همان روز",
      "System Action": "Yellow: ارسال Reminder Red: Escalation تعیین اقدام بر اساس نوع هشدار و مهلت پاسخ مورد انتظار",
      "Owner": "متناسب با نوع هشدار نکته طراحی: مبنای زمان باید نوع هشدار باشد. Rule Engine باید برای هر Alert Type، پنجره پاسخ مورد انتظار را بداند."
    },
    "extra": [
      "نوع: Calculated — سؤال مستقیم از بیمار ندارد",
      "Yellow: ارسال Reminder",
      "Red: Escalation"
    ],
    "title": "Alert Response Timeliness — به‌موقع بودن پاسخ به هشدار"
  },
  {
    "pages": [],
    "metadata": {
      "Data Type": "System + Rule Engine",
      "Clinical Horizon": "همان روز",
      "System Action": "ثبت اقدام انجام‌شده در Yellow: Follow-up در Red: Escalation در صورت نبود امکان بررسی، ایجاد Flag برای بررسی داده",
      "Owner": "مدیر مرکز پایش یا تیم درمان، متناسب با نوع هشدار نکته طراحی: صرفاً کلیک‌کردن روی Notification به معنی تکمیل اقدام نیست؛ اقدام واقعی باید با رویداد مورد انتظار مقایسه شود."
    },
    "extra": [
      "نوع: System + Rule Engine — سؤال مستقیم از بیمار ندارد",
      "Green: اقدام کامل انجام شده است",
      "Yellow: اقدام ناقص یا با تأخیر انجام شده است",
      "Red: اقدام مهم انجام نشده است"
    ],
    "title": "Alert Response Completion — تکمیل اقدام پس از هشدار"
  },
  {
    "pages": [],
    "metadata": {
      "Data Type": "Calculated / Trend",
      "Clinical Horizon": "روند ۷ تا ۳۰ روزه",
      "System Action": "Yellow: Trend Flag و بررسی اولیه Red: Review و Escalation بررسی احتمال خروج تدریجی بیمار از مسیر تعامل با سامانه",
      "Owner": "مدیر مرکز پایش"
    },
    "extra": [
      "نوع: Calculated — سؤال مستقیم از بیمار ندارد",
      "Green: پایدار و مناسب یا رو به بهبود",
      "Yellow: کاهش تدریجی",
      "Red: افت واضح یا عدم واکنش مکرر",
      "Yellow: Trend Flag و بررسی اولیه",
      "Red: Review و Escalation"
    ],
    "title": "Alert Response Trend — روند واکنش به هشدارها"
  },
  {
    "pages": [],
    "metadata": {
      "Data Type": "Calculated composite",
      "Clinical Horizon": "روند متحرک ۷ تا ۱۴روزه",
      "System Action": "Green: بدون اقدام Yellow: Reminder و بررسی تعامل Red: Escalation به مرکز پایش بررسی کانال ارتباطی، نیاز به مراقب یا موانع اجتماعی اتصال به داده‌های Caregiver / Social Support برای اصلاح Response Channel",
      "Owner": "مدیر مرکز پایش نکته طراحی: یک Missed Check-in منفرد الزاماً Interaction Failure نیست. این وضعیت زمانی اهمیت بیشتری پیدا می‌کند که با تأخیر پاسخ، عدم پاسخ تکرارشونده یا عدم واکنش به هشدارها همراه باشد."
    },
    "extra": [
      "نوع: Composite Calculated — سؤال مستقیم از بیمار ندارد",
      "این آیتم آخرین لایه Rule Engine برای شناسایی الگوی معنادار اختلال در تعامل بیمار با CarePilot است.",
      "Green: تعامل پایدار",
      "Yellow: وجود یک مؤلفه مختل یا اختلال خفیف",
      "Red: اختلال چندمؤلفه‌ای، تکرارشونده یا احتمال قطع تعامل",
      "Green: بدون اقدام",
      "Yellow: Reminder و بررسی تعامل",
      "Red: Escalation به مرکز پایش"
    ],
    "title": "Interaction Failure Pattern — الگوی ترکیبی اختلال در تعامل"
  }
];

export const subitems = questionData.map((item) => item.title);

export const details = Object.fromEntries(questionData.map((item) => [item.title, item]));
