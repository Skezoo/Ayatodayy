const priorityVerses = [
    {
        text: "أَيُّهَا الأَحِبَّاءُ، إِنْ كَانَ اللهُ قَدْ أَحَبَّنَا هَكَذَا، يَنْبَغِي لَنَا أَيْضًا أَنْ يُحِبَّ بَعْضُنَا بَعْضًا.",
        reference: "1 يوحنا 4: 11",
        explanation: "دعوة للمحبة المتبادلة كمثال لمحبة الله لنا"
    },
    {
        text: "وَلَكِنْ قَبْلَ كُلِّ شَيْءٍ لِتَكُنْ مَحَبَّتُكُمْ بَعْضِكُمْ لِبَعْضٍ شَدِيدَةً، لأَنَّ الْمَحَبَّةَ تَسْتُرُ كَثْرَةً مِنَ الْخَطَايَا.",
        reference: "1 بطرس 4: 8",
        explanation: "المحبة الحقيقية تغطي العيوب وتسامح الأخطاء"
    },
    {
        text: "لِيَكُونَ فِيهِمُ ٱلْحُبُّ ٱلَّذِي أَحْبَبْتَنِي بِهِ، وَأَكُونَ أَنَا فِيهِمْ.",
        reference: "يوحنا 17: 26",
        explanation: "طلب المسيح أن يكون حب الله سائدًا فينا"
    },
    {
        text: "أَيُّهَا ٱلْأَحِبَّاءُ، لِنُحِبَّ بَعْضَنَا بَعْضًا، لِأَنَّ ٱلْمَحَبَّةَ هِيَ مِنَ ٱللَّهِ، وَكُلُّ مَنْ يُحِبُّ فَقَدْ وُلِدَ مِنَ ٱللَّهِ وَيَعْرِفُ ٱللَّهَ.",
        reference: "1 يوحنا 4: 7",
        explanation: "الله هو مصدر المحبة، ومن يحب فهو من الله"
    }
];

const verses = [...priorityVerses,
    {
        text: "لأني عرفت الأفكار التي أنا مفتكر بها عنكم، يقول الرب، أفكار سلام لا شر، لأعطيكم آخرة ورجاء.",
        reference: "إرميا 29: 11",
        explanation: "الله يعلن عن محبته ورعايته لشعبه"
    },
    {
        text: "اَلْمَحَبَّةُ تَتَأَنَّى وَتَرْفُقُ. اَلْمَحَبَّةُ لَا تَحْسِدُ. اَلْمَحَبَّةُ لَا تَتَفَاخَرُ وَلَا تَنْتَفِخُ.",
        reference: "1 كورنثوس 13: 4",
        explanation: "وصف لطبيعة المحبة الحقيقية"
    }
];

let currentVerse = null;
let usedVerses = [];

function getOrderedVerse() {
    if (usedVerses.length < priorityVerses.length) {
        const verse = priorityVerses[usedVerses.length];
        usedVerses.push(verse.reference);
        return verse;
    }
    return getRandomVerse();
}

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

    currentVerse = verse;
}

function copyVerse() {
    if (currentVerse) {
        const textToCopy = `${currentVerse.text} ${currentVerse.reference}`;
        navigator.clipboard.writeText(textToCopy)
            .then(() => showToast('تم نسخ الآية بنجاح!'))
            .catch(err => console.error('خطأ في النسخ:', err));
    }
}

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

function saveVerse() {
    if (currentVerse) {
        localStorage.setItem('savedVerse', JSON.stringify(currentVerse));
        showToast('تم حفظ الآية!');
    }
}

function explainVerse() {
    if (currentVerse) {
        alert(`التفسير: ${currentVerse.explanation}`);
    }
}

function showRemembrance() {
    alert("تذكر أن الله معك في كل وقت!");
}

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

document.getElementById('new-verse').addEventListener('click', updateVerseDisplay);
document.getElementById('copy-verse').addEventListener('click', copyVerse);
document.getElementById('share-verse').addEventListener('click', shareVerse);
document.getElementById('save-verse').addEventListener('click', saveVerse);
document.getElementById('explain-verse').addEventListener('click', explainVerse);
document.getElementById('remembrance-button').addEventListener('click', showRemembrance);

window.onload = updateVerseDisplay;
