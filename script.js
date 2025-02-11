
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
    return lastVerse;
}

function showToast(message) {
    const toast = document.getElementById("toast");
    toast.textContent = message;
    toast.style.display = "block";
    setTimeout(() => {
        toast.style.display = "none";
    }, 3000);
}

function getTodaysRemembrance() {
    const remembrances = [
        { date: "02-11", text: "اليوم هو تذكار استشهاد القديسة دميانة." },
        { date: "01-01", text: "اليوم هو تذكار استشهاد القديس مارمينا العجايبي." },
        { date: "01-02", text: "اليوم هو تذكار نياحة البابا كيرلس السادس." },
        // المزيد من التذكارات
    ];

    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    const todayDate = `${month}-${day}`;

    for (let remembrance of remembrances) {
        if (remembrance.date === todayDate) {
            return remembrance.text;
        }
    }
    return null;
}

function showRemembrance() {
    const remembrance = getTodaysRemembrance();
    if (remembrance) {
        showToast(remembrance);
    } else {
        showToast("لا يوجد تذكار لهذا اليوم.");
    }
}

document.getElementById("new-verse").addEventListener("click", () => {
    document.getElementById("verse").textContent = getRandomVerse();
});

document.getElementById("remembrance-button").addEventListener("click", showRemembrance);
