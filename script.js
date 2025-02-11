const verses = [
    {
        text: "لأني أنا عارف الأفكار التي أنا مفتكر بها عنكم يقول الرب أفكار سلام لا شر",
        reference: "إرميا 29: 11",
        explanation: "الله يعلن عن محبته ورعايته لشعبه"
    },
    {
        text: "اَلْمَحَبَّةُ تَتَأَنَّى وَتَرْفُقُ. اَلْمَحَبَّةُ لَا تَحْسِدُ. اَلْمَحَبَّةُ لَا تَتَفَاخَرُ وَلَا تَنْتَفِخُ",
        reference: "1 كورنثوس 13:4",
        explanation: "وصف لطبيعة المحبة الحقيقية"
    }
    // إضافة المزيد من الآيات هنا
];

const remembrances = {
    "01-01": "تذكار استشهاد القديس مارمينا العجايبي",
    "02-01": "نياحة البابا كيرلس السادس",
    "03-01": "استشهاد القديسة دميانة",
    "04-01": "نياحة الأنبا أنطونيوس أب الرهبان",
    // إضافة التواريخ المتبقية
};

let currentVerse = null;
let notificationsEnabled = false;

// === وظائف الأساسية ===
function getFormattedDate() {
    const date = new Date();
    return `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function getRandomVerse() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * verses.length);
    } while (verses[randomIndex] === currentVerse);
    
    currentVerse = verses[randomIndex];
    return currentVerse;
}

function updateVerseDisplay() {
    const verse = getRandomVerse();
    const verseElement = document.getElementById('verse');
    verseElement.innerHTML = `
        <p>${verse.text}</p>
        <p class="verse-reference">${verse.reference}</p>
    `;
    verseElement.classList.add('animate__fadeIn');
    setTimeout(() => verseElement.classList.remove('animate__fadeIn'), 500);
}

// === نظام التذكارات ===
function showTodaysRemembrance() {
    const today = getFormattedDate();
    const remembrance = remembrances[today] || "لا يوجد تذكار خاص اليوم";
    showToast(remembrance);
}

// === نظام المشاركة ===
async function shareVerse() {
    try {
        await navigator.share({
            title: `آية اليوم - ${currentVerse.reference}`,
            text: `${currentVerse.text}\n\n${currentVerse.reference}`,
            url: window.location.href
        });
    } catch (err) {
        showToast("تم إلغاء المشاركة");
    }
}

// === نظام الحفظ ===
function saveVerse() {
    const saved = JSON.parse(localStorage.getItem('savedVerses') || []);
    const exists = saved.some(v => v.reference === currentVerse.reference);
    
    if (!exists) {
        saved.push(currentVerse);
        localStorage.setItem('savedVerses', JSON.stringify(saved));
        showToast("تم حفظ الآية في المفضلة");
    } else {
        showToast("الآية محفوظة مسبقًا");
    }
}

// === نظام التنبيهات ===
function toggleNotifications() {
    if (!notificationsEnabled) {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                notificationsEnabled = true;
                setupDailyNotification();
                showToast("تم تفعيل التنبيهات اليومية");
            }
        });
    } else {
        notificationsEnabled = false;
        showToast("تم إيقاف التنبيهات");
    }
}

function setupDailyNotification() {
    if (!notificationsEnabled) return;

    const now = new Date();
    const target = new Date(now);
    target.setHours(9, 0, 0, 0); // الساعة 9 صباحًا
    
    if (now > target) {
        target.setDate(target.getDate() + 1);
    }

    const timeout = target - now;
    
    setTimeout(() => {
        new Notification("آية اليوم", {
            body: `${currentVerse.text}\n${currentVerse.reference}`
        });
        setupDailyNotification();
    }, timeout);
}

// === نظام التحميل الأولي ===
document.addEventListener('DOMContentLoaded', () => {
    updateVerseDisplay();
    
    // تهيئة الأحداث
    document.getElementById('new-verse').addEventListener('click', updateVerseDisplay);
    document.getElementById('copy-verse').addEventListener('click', () => {
        navigator.clipboard.writeText(`${currentVerse.text} - ${currentVerse.reference}`);
        showToast("تم نسخ الآية");
    });
    document.getElementById('share-verse').addEventListener('click', shareVerse);
    document.getElementById('save-verse').addEventListener('click', saveVerse);
    document.getElementById('remembrance-button').addEventListener('click', showTodaysRemembrance);
    document.getElementById('notification-button').addEventListener('click', toggleNotifications);
});

// === وظيفة العرض التلقائي ===
function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, duration);
}
