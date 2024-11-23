document.addEventListener("DOMContentLoaded", () => {
    const colorsGroup = document.getElementsByClassName("group_custom_id-colors");

    console.log(colorsGroup);

    const specificGroup = colorsGroup[0];

    const typeSelect = specificGroup.getElementsByClassName("type_select");

    for (let i = 0; i < typeSelect.length; i++) {
        const options = typeSelect[i].getElementsByClassName("option");

        for (let j = 0; j < options.length; j++) {
            const classList = options[j].className;

            let classArray = classList.split(" ");

            if (classArray.length > 3) {

                classArray = classArray.slice(0, -1);
            }

            const atrs = classArray[classArray.length - 1].split("-");
            const hexColor = atrs[atrs.length - 1];

            if (hexColor) {
                options[j].style.backgroundColor = `${hexColor}`;
                console.log(`Set background color: ${hexColor} for`, options[j]);
            } else {
                console.log(`No color found for`, options[j]);
            }
        }
    }

    const brandingGroup = document.querySelector(".group_custom_id-branding");
 
    if (brandingGroup) {
        const filterOptions = brandingGroup.querySelector(".ar_filter_options");

        if (filterOptions) {
            filterOptions.classList.add("type_checkbox_with_add_img");
            
            console.log("Клас додано успішно:", filterOptions);
        } else {
            console.warn("Елемент .ar_filter_options не знайдено в group_custom_id-branding");
        }
    } else {
        console.warn("Елемент .group_custom_id-branding не знайдено");
    }
});
