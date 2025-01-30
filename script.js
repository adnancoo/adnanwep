// تفاصيل اللغات
const languageDetails = {
    JavaScript: "جافاسكريبت هي لغة برمجة تستخدم لتطوير تطبيقات الويب التفاعلية. تُستخدم في كل من الواجهة الأمامية والخلفية.",
    HTML: "HTML هي لغة ترميز تستخدم لإنشاء هيكل صفحات الويب. تُعتبر العمود الفقري لأي موقع ويب.",
    Python: "بايثون هي لغة برمجة عالية المستوى تستخدم في تطوير الويب، الذكاء الاصطناعي، وتحليل البيانات.",
    CSS: "CSS هي لغة تنسيق تستخدم لتزيين صفحات الويب. تُستخدم للتحكم في الألوان، الخطوط، والتخطيط.",
    "C++": "سي++ هي لغة برمجة قوية تستخدم في تطوير الألعاب، الأنظمة المدمجة، والتطبيقات عالية الأداء.",
    "C#": "سي# هي لغة برمجة طورتها مايكروسوفت. تُستخدم في تطوير الألعاب (خاصة مع Unity) وتطبيقات الويب.",
};

// عرض تفاصيل اللغة
document.querySelectorAll(".language-item").forEach((item) => {
    item.addEventListener("click", () => {
        const language = item.getAttribute("data-language");
        const details = languageDetails[language];
        const detailsContainer = document.getElementById("language-details");

        // إضافة التفاصيل إلى العنصر
        detailsContainer.innerHTML = `
            <h3>${language}</h3>
            <p>${details}</p>
        `;

        // إظهار التفاصيل
        detailsContainer.classList.add("active");
    });
});