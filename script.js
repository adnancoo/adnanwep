// script.js
document.addEventListener("DOMContentLoaded", function () {
    const languageItems = document.querySelectorAll(".language-item");
    const languageDetails = document.getElementById("language-details");

    const languageInfo = {
        JavaScript: "جافاسكريبت هي لغة برمجة تستخدم لتطوير تطبيقات الويب التفاعلية.",
        HTML: "HTML هي لغة ترميز تستخدم لإنشاء هيكل صفحات الويب.",
        Python: "بايثون هي لغة برمجة قوية وسهلة التعلم تستخدم في تطوير الويب والذكاء الاصطناعي.",
        CSS: "CSS هي لغة تنسيق تستخدم لتزيين وتصميم صفحات الويب.",
        "C++": "سي++ هي لغة برمجة قوية تستخدم في تطوير الألعاب والأنظمة.",
        "C#": "سي شارب هي لغة برمجة تستخدم في تطوير تطبيقات الويب والألعاب باستخدام .NET.",
    };

    languageItems.forEach((item) => {
        item.addEventListener("click", () => {
            const language = item.getAttribute("data-language");
            languageDetails.innerHTML = `<p>${languageInfo[language]}</p>`;
            languageDetails.classList.add("active");
        });
    });

    // Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    });
});
