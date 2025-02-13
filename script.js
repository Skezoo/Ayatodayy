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

// ======== تحميل أول آية ========
document.addEventListener('DOMContentLoaded', () => {
    updateVerseDisplay();
    document.getElementById('new-verse').addEventListener('click', updateVerseDisplay);
});
