const priorityVerses = [
    { text: "أَيُّهَا الأَحِبَّاءُ، إِنْ كَانَ اللهُ قَدْ أَحَبَّنَا هَكَذَا، يَنْبَغِي لَنَا أَيْضًا أَنْ يُحِبَّ بَعْضَنَا بَعْضًا", reference: "1يو 11:4" },
    { text: "وَلَكِنْ قَبْلَ كُلِّ شَيْءٍ لِتَكُنْ مَحَبَّتُكُمْ بَعْضِكُمْ لِبَعْضٍ شَدِيدَةً، لأَنَّ الْمَحَبَّةَ تَسْتُرُ كَثْرَةً مِنَ الْخَطَايَا", reference: "1بط 8:4" },
    { text: "لِيَكُونَ فِيهِمُ الْحُبُّ الَّذِي أَحْبَبْتَنِي بِهِ، وَأَكُونَ أَنَا فِيهِمْ", reference: "يو 26:17" },
    { text: "أَيُّهَا الأَحِبَّاءُ، لِنُحِبَّ بَعْضَنَا بَعْضًا، لأَنَّ الْمَحَبَّةَ هِيَ مِنَ اللهِ، وَكُلُّ مَنْ يُحِبُّ فَقَدْ وُلِدَ مِنَ اللهِ وَيَعْرِفُ اللهَ. وَمَنْ لاَ يُحِبُّ لَمْ يَعْرِفِ اللهَ، لأَنَّ اللهَ مَحَبَّةٌ", reference: "1يو 8,7:4" },
    { text: "وَالرَّجَاءُ لاَ يُخْزِي، لأَنَّ مَحَبَّةَ اللهِ قَدِ انْسَكَبَتْ فِي قُلُوبِنَا بِالرُّوحِ الْقُدُسِ الْمُعْطَى لَنَا", reference: "رو 5:5" },
    { text: "وَنَحْنُ قَدْ عَرَفْنَا وَصَدَّقْنَا ٱلْمَحَبَّةَ ٱلَّتِي لِلهِ فِينَا. ٱللهُ مَحَبَّةٌ، وَمَنْ يَثْبُتْ فِي ٱلْمَحَبَّةِ، يَثْبُتْ فِي ٱللهِ وَٱللهُ فِيهِ", reference: "1يو 16:4" }
];

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

const remembrances = {
    "01-01": "تذكار استشهاد القديس مارمينا العجايبي",
    "02-01": "نياحة البابا كيرلس السادس",
    "03-01": "استشهاد القديسة دميانة",
    "04-01": "نياحة الأنبا أنطونيوس أب الرهبان",
    "15-10": "تذكار اختباري"
};

let currentVerse = null;
let usedVerses = [];
let usedPriorityVerses = [];

function getRandomVerse() {
    if (usedPriorityVerses.length < priorityVerses.length) {
        const verse = priorityVerses[usedPriorityVerses.length];
        usedPriorityVerses.push(verse);
        return verse;
    }

    if (usedVerses.length === verses.length) {
        usedVerses = [];
    }

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
    const verse = getRandomVerse();
    const verseElement = document.getElementById('verse');

    if (!verse || !verseElement) {
        console.error("خطأ في تحميل الآية");
        verseElement.textContent = "عذرًا، حدث خطأ في تحميل الآية";
        return;
    }

    currentVerse = verse;
    verseElement.innerHTML = `
        <p>${verse.text}</p>
        <p class="verse-reference">${verse.reference}</p>
    `;
    verseElement.classList.add('animate__fadeIn');
    setTimeout(() => verseElement.classList.remove('animate__fadeIn'), 500);
}

function getFormattedDate() {
    const date = new Date();
    return `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}`;
}

function showTodaysRemembrance() {
    const today = getFormattedDate();
    const remembrance = remembrances[today] || `لا يوجد تذكار مسجل لـ ${today}`;

    console.log("تاريخ اليوم:", today);
    showToast(remembrance);
}

document.addEventListener('DOMContentLoaded', () => {
    updateVerseDisplay();

    document.getElementById('new-verse').addEventListener('click', updateVerseDisplay);
    document.getElementById('copy-verse').addEventListener('click', () => {
        navigator.clipboard.writeText(`${currentVerse.text} - ${currentVerse.reference}`);
        showToast("تم نسخ الآية");
    });
    document.getElementById('share-verse').addEventListener('click', async () => {
        try {
            await navigator.share({
                title: `آية اليوم - ${currentVerse.reference}`,
                text: `${currentVerse.text}\n\n${currentVerse.reference}`,
                url: window.location.href
            });
        } catch (err) {
            showToast("تم إلغاء المشاركة");
        }
    });
    document.getElementById('save-verse').addEventListener('click', () => {
        const saved = JSON.parse(localStorage.getItem('savedVerses') || '[]');
        const exists = saved.some(v => v.reference === currentVerse.reference);

        if (!exists) {
            saved.push(currentVerse);
            localStorage.setItem('savedVerses', JSON.stringify(saved));
            showToast("تم حفظ الآية في المفضلة");
        } else {
            showToast("الآية محفوظة مسبقًا");
        }
    });
    document.getElementById('remembrance-button').addEventListener('click', showTodaysRemembrance);
});

function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';
    setTimeout(() => {
        toast.style.display = 'none';
    }, duration);
}
