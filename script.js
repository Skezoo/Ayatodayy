const verses = [
    "اَلْمَحَبَّةُ تَتَأَنَّى وَتَرْفُقُ. اَلْمَحَبَّةُ لَا تَحْسِدُ. اَلْمَحَبَّةُ لَا تَتَفَاخَرُ وَلَا تَنْتَفِخُ. - 1 كورنثوس 13:4",
    "وَأَمَّا ثَمَرُ ٱلرُّوحِ فَهُوَ: مَحَبَّةٌ، فَرَحٌ، سَلَامٌ، طُولُ أَنَاةٍ، لُطْفٌ، صَلَاحٌ، إِيمَانٌ. - غلاطية 5:22",
    "اَللَّهُ مَحَبَّةٌ، وَمَنْ يَثْبُتْ فِي ٱلْمَحَبَّةِ، يَثْبُتْ فِي ٱللَّهِ وَٱللَّهُ فِيهِ. - 1 يوحنا 4:16",
    "فَوْقَ كُلِّ ٱلْأَشْيَاءِ ٱلْبَسُوا ٱلْمَحَبَّةَ، ٱلَّتِي هِيَ رِبَاطُ ٱلْكَمَالِ. - كولوسي 3:14",
    "لَيْسَ لِأَحَدٍ حُبٌّ أَعْظَمُ مِنْ هَذَا: أَنْ يَضَعَ أَحَدٌ نَفْسَهُ لِأَجْلِ أَحِبَّائِهِ. - يوحنا 15:13",
    "لِيَكُنْ كُلُّ شَيْءٍ عِنْدَكُمْ بِمَحَبَّةٍ. - 1 كورنثوس 16:14",
    "وَأَمَّا ٱلْمَحَبَّةُ فَلْتَكُنْ بِلاَ رِيَاءٍ. كُونُوا كَارِهِينَ ٱلشَّرَّ، مُلْتَصِقِينَ بِٱلْخَيْرِ. - رومية 12:9",
    "وَٱلْمَحَبَّةُ تَسْتُرُ كَثِيرًا مِنَ ٱلْخَطَايَا. - 1 بطرس 4:8"
];

let lastVerse = "";

function getRandomVerse() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * verses.length);
    } while (verses[randomIndex] === lastVerse);
    lastVerse = verses[randomIndex];
    return verses[randomIndex];
}

function displayVerse() {
    const verseElement = document.getElementById("verse");
    const verseText = getRandomVerse();
    verseElement.textContent = verseText;
    verseElement.style.opacity = 1;
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(() => toast.style.display = "none", 3000);
}

const remembrances = [
    { date: "01-01", text: "اليوم هو تذكار استشهاد القديس مارمينا العجايبي." },
    { date: "01-02", text: "اليوم هو تذكار نياحة البابا كيرلس السادس." },
    { date: "01-03", text: "اليوم هو تذكار استشهاد القديسة دميانة." },
    { date: "01-04", text: "اليوم هو تذكار نياحة الأنبا أنطونيوس أب الرهبان." },
    { date: "01-05", text: "اليوم هو تذكار استشهاد القديس جرجس الروماني." },
    // يمكنك إضافة المزيد من التذكارات هنا
];

function getTodaysRemembrance() {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const todayDate = `${month}-${day}`;

    const remembrance = remembrances.find(r => r.date === todayDate);
    return remembrance ? remembrance.text : "لا يوجد تذكار لهذا اليوم.";
}

function showRemembrance() {
    const remembrance = getTodaysRemembrance();
    showToast(remembrance);
}

document.addEventListener("DOMContentLoaded", () => {
    const remembranceButton = document.getElementById("remembrance-button");
    if (remembranceButton) {
        remembranceButton.addEventListener("click", showRemembrance);
    }

    const newVerseButton = document.getElementById("new-verse");
    newVerseButton.addEventListener("click", displayVerse);
});
