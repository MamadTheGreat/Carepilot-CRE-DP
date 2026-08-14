export const questionData = [
  {
    "pages": [],
    "metadata": {
      "Data Type": "Calculated / Boolean",
      "Clinical Horizon": "هر Check-in",
      "System Action": "Yellow: درخواست تکمیل فیلد Red: ایجاد Flag و جلوگیری از استفاده از داده ناقص در Ruleهای وابسته عدم تعیین Required بودن فیلد توسط موتور؛ این وضعیت باید از قبل در Schema تعریف شده باشد",
      "Owner": "ادمین سیستم یا سامانه"
    },
    "extra": [
      "نوع: System-generated — سؤال روتین از بیمار ندارد",
      "Green: همه فیلدهای ضروری تکمیل شده‌اند",
      "Yellow: یک یا چند فیلد غیرحیاتی ناقص است",
      "Red: یک یا چند فیلد حیاتی ثبت نشده است",
      "Yellow: درخواست تکمیل فیلد",
      "Red: ایجاد Flag و جلوگیری از استفاده از داده ناقص در Ruleهای وابسته"
    ],
    "title": "Missing Required Field — فیلد ضروریِ تکمیل‌نشده"
  },
  {
    "pages": [],
    "metadata": {
      "Data Type": "Calculated",
      "Clinical Horizon": "هر Check-in / روزانه",
      "System Action": "Yellow: نمایش Prompt برای تکمیل Red: ایجاد Flag برای پیگیری عدم اعتباردهی کامل به Check-in ناقص",
      "Owner": "ادمین سیستم یا سامانه"
    },
    "extra": [
      "نوع: System-generated — سؤال مستقیم از بیمار ندارد",
      "Green: Check-in کامل شده است",
      "Yellow: Check-in ناقص است، اما داده‌های حیاتی موجودند",
      "Red: Check-in ناقص است و یک یا چند جزء حیاتی تکمیل نشده است",
      "Yellow: نمایش Prompt برای تکمیل",
      "Red: ایجاد Flag برای پیگیری"
    ],
    "title": "Incomplete Check-in — Check-in ناقص"
  },
  {
    "pages": [],
    "metadata": {
      "Data Type": "Calculated / Rule-based",
      "Clinical Horizon": "هر Check-in",
      "System Action": "Yellow: درخواست بررسی، اصلاح یا تأیید Red: ثبت Data Validation Failure جلوگیری از ورود داده مشکوک به Clinical Rule Engine",
      "Owner": "ادمین سیستم یا سامانه نکته طراحی: Ruleهای دقیق ناسازگاری باید برای هر متغیر و مسیر بیماری به‌صورت جداگانه تعریف و تأیید شوند."
    },
    "extra": [
      "نوع: System-generated — سؤال مستقیم از بیمار ندارد",
      "Green: داده‌ها سازگارند",
      "Yellow: ناسازگاری خفیف یا قابل اصلاح وجود دارد",
      "Red: تناقض جدی وجود دارد و داده بدون بررسی قابل استفاده نیست",
      "Yellow: درخواست بررسی، اصلاح یا تأیید",
      "Red: ثبت Data Validation Failure"
    ],
    "title": "Internal Data Consistency — سازگاری داخلی داده‌ها"
  },
  {
    "pages": [],
    "metadata": {
      "Data Type": "Calculated / Longitudinal",
      "Clinical Horizon": "روزانه / هفتگی",
      "System Action": "Yellow: درخواست تأیید یا اصلاح Red: ایجاد Flag و توقف استفاده از مقدار مشکوک تا تعیین تکلیف عدم حذف خودکار داده صرفاً به دلیل تغییر زیاد",
      "Owner": "ادمین سیستم یا سامانه نکته طراحی: تغییر زیاد الزاماً به معنی خطای داده نیست و ممکن است نشان‌دهنده تغییر واقعی بالینی باشد."
    },
    "extra": [
      "نوع: System-generated — سؤال مستقیم از بیمار ندارد",
      "Green: مقدار فعلی با روند قبلی سازگار است",
      "Yellow: تغییر غیرمعمول است و به تأیید نیاز دارد",
      "Red: تناقض شدید، جهش غیرقابل توضیح یا احتمال خطای ثبت وجود دارد",
      "Yellow: درخواست تأیید یا اصلاح",
      "Red: ایجاد Flag و توقف استفاده از مقدار مشکوک تا تعیین تکلیف"
    ],
    "title": "Cross-time Data Consistency — سازگاری داده با ثبت‌های قبلی"
  },
  {
    "pages": [],
    "metadata": {
      "Data Type": "Calculated / Numeric validation",
      "Clinical Horizon": "هر ثبت",
      "System Action": "Yellow: درخواست تأیید مقدار Red: Reject یا Flag و درخواست ثبت مجدد جلوگیری از ورود مقدار نامعتبر به Clinical Rule Engine",
      "Owner": "ادمین سیستم یا سامانه نکته طراحی: Validation Range با Clinical Range یکسان نیست. محدوده اعتبار فنی نباید با آستانه‌های بالینی مانند Hyperglycemia ادغام شود."
    },
    "extra": [
      "نوع: System-generated — سؤال مستقیم از بیمار ندارد",
      "Green: مقدار در محدوده فنی معتبر قرار دارد",
      "Yellow: مقدار غیرمعمول، اما از نظر فنی ممکن است",
      "Red: مقدار خارج از محدوده معتبر یا غیرقابل پردازش است",
      "Yellow: درخواست تأیید مقدار",
      "Red: Reject یا Flag و درخواست ثبت مجدد"
    ],
    "title": "Plausible Value Range — معتبر بودن محدوده مقدار ثبت‌شده"
  },
  {
    "pages": [
      {
        "question": "",
        "options": [
          "بله، مقدار درست است",
          "خیر، مقدار را اشتباه وارد کرده‌ام",
          "مطمئن نیستم",
          "فعلاً نمی‌خواهم پاسخ دهم"
        ],
        "responseType": "چندگزینه‌ای، تک‌انتخابی",
        "input": false,
        "explanation": "",
        "condition": "",
        "fallbackLabel": ""
      }
    ],
    "metadata": {
      "Data Type": "Calculated + conditional confirmation",
      "Clinical Horizon": "همان روز / طولی",
      "System Action": "درخواست تأیید یا ثبت مجدد در صورت تأیید بیمار، انتقال مقدار به Clinical Rule Engine در صورت عدم تأیید، اصلاح داده عدم حذف خودکار مقدار غیرمعمول",
      "Owner": "ادمین سیستم یا سامانه؛ در صورت تأیید بالینی، تیم درمان"
    },
    "extra": [
      "نوع: System-generated + Conditional Patient Confirmation",
      "منطق شرطی:",
      "اگر «بله» انتخاب شد: مقدار به‌عنوان Patient-confirmed ثبت و وارد Clinical Rule Engine شود.",
      "اگر «خیر» انتخاب شد: اصلاح مقدار درخواست شود.",
      "اگر «مطمئن نیستم» انتخاب شد: در صورت امکان درخواست اندازه‌گیری مجدد شود.",
      "اگر «فعلاً نمی‌خواهم پاسخ دهم» انتخاب شد: مقدار به‌عنوان Suspect / Needs Validation علامت‌گذاری شود.",
      "توضیح اختیاری:",
      "«اگر لازم است، توضیح کوتاهی درباره علت تفاوت مقدار ثبت‌شده بنویسید.»"
    ],
    "title": "Abrupt Value Change — تغییر ناگهانی مقدار"
  },
  {
    "pages": [],
    "metadata": {
      "Data Type": "Calculated",
      "Clinical Horizon": "هر ثبت",
      "System Action": "Yellow: بررسی خودکار رکورد Red: جلوگیری از Double Counting حفظ Original Record و ثبت وضعیت Duplicate ادغام فقط طبق Rule مشخص",
      "Owner": "ادمین سیستم یا سامانه نکته طراحی: این آیتم بیشتر مربوط به Data Integrity است تا ریسک بالینی مستقیم."
    },
    "extra": [
      "نوع: System-generated — سؤال مستقیم از بیمار ندارد",
      "Green: رکورد یکتا است",
      "Yellow: احتمال ثبت تکراری وجود دارد",
      "Red: ثبت تکراری قطعی شناسایی شده است",
      "Yellow: بررسی خودکار رکورد",
      "Red: جلوگیری از Double Counting",
      "این آیتم بیشتر مربوط به Data Integrity است تا ریسک بالینی مستقیم."
    ],
    "title": "Duplicate Entry — ثبت تکراری"
  },
  {
    "pages": [],
    "metadata": {
      "Data Type": "Calculated",
      "Clinical Horizon": "هر ثبت",
      "System Action": "Input Validation پیش از ورود به Clinical Rule Engine Yellow: اصلاح یا Normalize خودکار Red: Reject و درخواست ثبت مجدد",
      "Owner": "ادمین سیستم یا سامانه"
    },
    "extra": [
      "نوع: System-generated — سؤال مستقیم از بیمار ندارد",
      "Green: قالب داده معتبر است",
      "Yellow: قالب توسط سیستم قابل اصلاح یا Normalize شدن است",
      "Red: داده قابل پردازش نیست",
      "Yellow: اصلاح یا Normalize خودکار",
      "Red: Reject و درخواست ثبت مجدد"
    ],
    "title": "Invalid Data Format — قالب نامعتبر داده"
  },
  {
    "pages": [],
    "metadata": {
      "Data Type": "Calculated / Timestamp",
      "Clinical Horizon": "هر ثبت",
      "System Action": "ایجاد Flag اصلاح Metadata در صورت امکان درخواست بررسی ثبت جلوگیری از استفاده در تحلیل طولی تا تعیین تکلیف",
      "Owner": "ادمین سیستم یا سامانه"
    },
    "extra": [
      "نوع: System-generated — سؤال روتین از بیمار ندارد",
      "Green: Timestamp معتبر و مرتب است",
      "Yellow: تأخیر یا ناسازگاری محدود وجود دارد",
      "Red: Timestamp غیرقابل اعتماد است و تحلیل طولی را مختل می‌کند"
    ],
    "title": "Out-of-Sequence Timestamp — Timestamp خارج از ترتیب"
  },
  {
    "pages": [],
    "metadata": {
      "Data Type": "Calculated / Metadata",
      "Clinical Horizon": "هر ثبت",
      "System Action": "ایجاد Flag درخواست تکمیل Source جلوگیری از استفاده از داده بدون Attribution در محاسبات حساس",
      "Owner": "ادمین سیستم یا سامانه"
    },
    "extra": [
      "نوع: System-generated — سؤال مستقیم از بیمار ندارد",
      "Green: منبع داده مشخص و معتبر است",
      "Yellow: منبع ناقص یا مبهم است",
      "Red: منبع نامشخص یا غیرقابل اعتماد است"
    ],
    "title": "Source/Data Attribution Integrity — یکپارچگی منبع و انتساب داده"
  },
  {
    "pages": [],
    "metadata": {
      "Data Type": "Calculated / Status",
      "Clinical Horizon": "همان روز / تحلیل طولی",
      "System Action": "ایجاد Task ارسال Reminder برای اصلاح در تداوم Issue، Escalation جلوگیری از استفاده از داده حل‌نشده در Ruleهای حساس",
      "Owner": "ادمین سیستم یا سامانه؛ در صورت اثر بالینی، تیم درمان نکته طراحی: این آیتم باید وضعیت همه خطاهای قبلی، درخواست‌های اصلاح، تأییدها و داده‌های مشکوک را در سطح Meta پایش کند."
    },
    "extra": [
      "نوع: System-generated — سؤال مستقیم از بیمار ندارد",
      "این آیتم یک Meta-Item است و بررسی می‌کند آیا خطای کیفیت داده‌ای شناسایی شده که هنوز اصلاح یا تعیین تکلیف نشده است.",
      "Green: هیچ Issue حل‌نشده‌ای وجود ندارد",
      "Yellow: Issue حل‌نشده است، اما اثر بالینی مشخصی ندارد",
      "Red: Issue حیاتی حل‌نشده است و مانع تصمیم‌گیری مطمئن می‌شود",
      "این آیتم باید وضعیت همه خطاهای قبلی، درخواست‌های اصلاح، تأییدها و داده‌های مشکوک را در سطح Meta پایش کند."
    ],
    "title": "Unresolved Data Quality Issue — خطای کیفیت داده حل‌نشده"
  }
];

export const subitems = questionData.map((item) => item.title);

export const details = Object.fromEntries(questionData.map((item) => [item.title, item]));
