    function showSection(section) {
            // إخفاء كل الأقسام
            var sections = document.querySelectorAll('.content');
            sections.forEach(function (section) {
                section.style.display = 'none';
            });

            // إظهار القسم المحدد
            document.getElementById(section).style.display = 'block';
        }

        // عند تحميل الصفحة، نظهر القسم الرئيسي
        window.onload = function () {
            showSection('home');
        }
