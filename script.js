const priorityVerses = [
    {
        text: "أَيُّهَا الأَحِبَّاءُ، إِنْ كَانَ اللهُ قَدْ أَحَبَّنَا هَكَذَا، يَنْبَغِي لَنَا أَيْضًا أَنْ يُحِبَّ بَعْضُنَا بَعْضًا",
        reference: "1يوحنا 4:11",
        explanation: "دعوة للمحبة المتبادلة كمثال لمحبة الله لنا"
    },
    {
        text: "وَلَكِنْ قَبْلَ كُلِّ شَيْءٍ لِتَكُنْ مَحَبَّتُكُمْ بَعْضِكُمْ لِبَعْضٍ شَدِيدَةً، لأَنَّ الْمَحَبَّةَ تَسْتُرُ كَثْرَةً مِنَ الْخَطَايَا",
        reference: "1بطرس 4:8",
        explanation: "المحبة الحقيقية تغطي العيوب وتسامح الأخطاء"
    },
    {
        text: "لِيَكُونَ فِيهِمُ الْحُبُّ الَّذِي أَحْبَبْتَنِي بِهِ، وَأَكُونَ أَنَا فِيهِمْ",
        reference: "يوحنا 17:26",
        explanation: "طلب المسيح أن يكون حب الله سائدًا فينا"
    },
    {
        text: "أَيُّهَا الأَحِبَّاءُ، لِنُحِبَّ بَعْضَنَا بَعْضًا، لأَنَّ الْمَحَبَّةَ هِيَ مِنَ اللهِ، وَكُلُّ مَنْ يُحِبُّ فَقَدْ وُلِدَ مِنَ اللهِ وَيَعْرِفُ اللهَ. وَمَنْ لاَ يُحِبُّ لَمْ يَعْرِفِ اللهَ، لأَنَّ اللهَ مَحَبَّةٌ",
        reference: "1يوحنا 4:7-8",
        explanation: "الله هو مصدر المحبة، ومن يحب فهو من الله"
    },
    {
        text: "وَالرَّجَاءُ لاَ يُخْزِي، لأَنَّ مَحَبَّةَ اللهِ قَدِ انْسَكَبَتْ فِي قُلُوبِنَا بِالرُّوحِ الْقُدُسِ الْمُعْطَى لَنَا",
        reference: "رومية 5:5",
        explanation: "المحبة الإلهية مزروعة في قلوبنا بالروح القدس"
    },
    {
        text: "وَنَحْنُ قَدْ عَرَفْنَا وَصَدَّقْنَا ٱلْمَحَبَّةَ ٱلَّتِي لِلهِ فِينَا. ٱللهُ مَحَبَّةٌ، وَمَنْ يَثْبُتْ فِي ٱلْمَحَبَّةِ، يَثْبُتْ فِي ٱللهِ وَٱللهُ فِيهِ",
        reference: "1يوحنا 4:16",
        explanation: "الثبات في المحبة يعني الثبات في الله"
    }
];

// دمج الآيات الجديدة مع الآيات الأصلية
const verses = [...priorityVerses,
    {
        text: "لأني أنا عارف الأفكار التي أنا مفتكر بها عنكم يقول الرب أفكار سلام لا شر",
        reference: "إرميا 29:11",
        explanation: "الله يعلن عن محبته ورعايته لشعبه"
    },
    {
        text: "اَلْمَحَبَّةُ تَتَأَنَّى وَتَرْفُقُ. اَلْمَحَبَّةُ لَا تَحْسِدُ. اَلْمَحَبَّةُ لَا تَتَفَاخَرُ وَلَا تَنْتَفِخُ",
        reference: "1 كورنثوس 13:4",
        explanation: "وصف لطبيعة المحبة الحقيقية"
    },
    {
        text: "بِالْمَحَبَّةِ يَحْتَمِلُ كُلُّ شَيْءٍ، بِالْمَحَبَّةِ يَصْبِرُ كُلُّ شَيْءٍ",
        reference: "كولوسي 3:14",
        explanation: "المحبة الحقيقية تسند كل شيء"
    },
    {
        text: "لَا تَكُونُوا لِكُلِّ شَيْءٍ مُتَعَجِّلِينَ، فَإِنَّ صَبْرَكُمْ سَيُكَمِّلُكُمْ",
        reference: "يعقوب 5:7",
        explanation: "التسامح في مواجهة الشدائد"
    },
    {
        text: "اِغْفِرُوا لِمَنْ يَظْلِمُكُمْ، كَمَا غَفَرَ لَكُمُ اللَّهُ فِي الْمَسِيحِ",
        reference: "أفسس 4:32",
        explanation: "أهمية التسامح والمحبة في المسيحية"
    }
];

let currentVerse = null;
let usedVerses = [];

// ======== عرض الآيات بالترتيب ========
function getOrderedVerse() {
    if (usedVerses.length < priorityVerses.length) {
        const verse = priorityVerses[usedVerses.length];
        usedVerses.push(verse.reference);
        return verse;
    }
    return getRandomVerse();
}

// ======== اختيار آية عشوائية بعد انتهاء الأولويات ========
function getRandomVerse() {
    let randomIndex;
    let verse;
    do {
        randomIndex = Math.floor(Math.random() * verses.length);
        verse = verses[randomIndex];
    } while (usedVerses.includes(verse.reference));

    usedVerses.push(verse.reference);
    return verse;
}

// ======== تحديث الآية في الصفحة ========
function updateVerseDisplay() {
    const verse = getOrderedVerse();
    const verseElement = document.getElementById('verse');

    if (!verse || !verseElement) {
        console.error("خطأ في تحميل الآية");
        verseElement.textContent = "عذرًا، لا توجد آية حالياً.";
        return;
    }

    const verseText = document.querySelector(".verse-text");
    const verseReference = document.querySelector(".verse-reference");

    verseText.textContent = verse.text;
    verseReference.textContent = `- ${verse.reference}`;

    currentVerse = verse; // تخزين الآية الحالية لعرض التفسير أو العمليات الأخرى عليها
}

// ======== نسخ الآية ========
function copyVerse() {
    if (currentVerse) {
        const textToCopy = `${currentVerse.text} ${currentVerse.reference}`;
        navigator.clipboard.writeText(textToCopy)
            .then(() => showToast('تم نسخ الآية بنجاح!'))
            .catch(err => console.error('خطأ في النسخ:', err));
    }
}

// ======== مشاركة الآية ========
function shareVerse() {
    if (currentVerse) {
        const shareText = `${currentVerse.text} ${currentVerse.reference}`;
        if (navigator.share) {
            navigator.share({
                title: 'آية اليوم',
                text: shareText,
                url: window.location.href
            })
            .catch(err => console.error('خطأ في المشاركة:', err));
        } else {
            console.log("مشاركة غير مدعومة في هذا المتصفح.");
        }
    }
}

// ======== حفظ الآية ========
function saveVerse() {
    if (currentVerse) {
        localStorage.setItem('savedVerse', JSON.stringify(currentVerse));
        showToast('تم حفظ الآية!');
    }
}

// ======== عرض التفسير ========
function explainVerse() {
    if (currentVerse) {
        alert(`التفسير: ${currentVerse.explanation}`);
    }
}

// ======== تذكار اليوم ========
function showRemembrance() {
    alert("تذكر أن الله معك في كل وقت!");
}

// ======== إظهار الرسائل المنبثقة ========
function showToast(message) {
    const toast = document.createElement('div');
    toast.classList.add('toast');
    toast.textContent = message;
    document.body.appendChild(toast);

    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
        document.body.removeChild(toast);
    }, 3000);
}

// ======== إعداد الأحداث ========
document.getElementById('new-verse').addEventListener('click', updateVerseDisplay);
document.getElementById('copy-verse').addEventListener('click', copyVerse);
document.getElementById('share-verse').addEventListener('click', shareVerse);
document.getElementById('save-verse').addEventListener('click', saveVerse);
document.getElementById('explain-verse').addEventListener('click', explainVerse);
document.getElementById('remembrance-button').addEventListener('click', showRemembrance);

// ======== تحميل أول آية ========
window.onload = updateVerseDisplay;
