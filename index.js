// document.addEventListener("DOMContentLoaded", () => {
//     // region COLOR-SELECT script
//     const colorsGroup = document.getElementsByClassName("group_custom_id-colors")[0];

//     const typeSelect = colorsGroup.getElementsByClassName("type_select");

//     for (let i = 0; i < typeSelect.length; i++) {
//         const options = typeSelect[i].getElementsByClassName("option");

//         for (let j = 0; j < options.length; j++) {
//             const classList = options[j].className;

//             let classArray = classList.split(" ");

//             if (classArray.length > 3) {
//                 classArray = classArray.slice(0, -1);
//             }

//             const atrs = classArray[classArray.length - 1].split("-");
//             const hexColor = atrs[atrs.length - 1];

//             if (hexColor) {
//                 options[j].style.backgroundColor = `${hexColor}`;
//                 console.log(`Set background color: ${hexColor} for`, options[j]);
//             } else {
//                 console.log(`No color found for`, options[j]);
//             }
//         }
//     }

//     const brandingGroup = document.querySelector(".group_custom_id-branding");

//     if (brandingGroup) {
//         const filterOptions = brandingGroup.querySelector(".ar_filter_options");

//         if (!filterOptions) {
//             console.log("ar_filter_options not found");
//         }

//         filterOptions.classList.add("type_checkbox_with_add_img");
//     }
//     // #endregion

//     // region COLOR-PRICE script
//     const colorsContainer = document.getElementsByClassName('group_custom_id-colors')[0];

//     if (!colorsContainer) {
//         console.log("null");
//     }

//     const filterHeader = colorsContainer.getElementsByClassName('ar_filter_header')[0];

//     if (!filterHeader) {
//         console.log("null");
//     }

//     const filterCaption = filterHeader.getElementsByClassName('ar_filter_caption')[0];

//     if (!filterCaption) {
//         console.log("null");
//     }

//     const spanPrice = document.createElement('span');
//     spanPrice.className = 'span_price';

//     spanPrice.innerHTML = '<br>Included';

//     filterCaption.appendChild(spanPrice);
//     // endregion


//     // region Custom DATA-PRICE script
//     const allGroup = document.getElementsByClassName('ar_filter_group');

//     for (const group of allGroup) {
//         const allOptions = group.getElementsByClassName('ar_filter_options');
//         for (const options of allOptions) {
//             const thisOptions = options.getElementsByClassName('option');

//             for (const option of thisOptions) {
//                 const title = option.getElementsByClassName('component_title')[0];

//                 const price = option.getAttribute('data-price');

//                 const visiblePrice = price == 0 ? 'Included' : `$${price}`;

//                 const spanPrice = document.createElement('span');
//                 spanPrice.className = 'span_price';

//                 spanPrice.innerHTML = `<br>${visiblePrice}`;

//                 title.appendChild(spanPrice);
//             }
//         }
//     }
//     // endregion
// });

document.addEventListener("DOMContentLoaded", () => {
    console.log('script start');
    //#region COLOR-ADD-TO-SELECT script
    const colorsGroup = document.getElementsByClassName("group_custom_id-colors")[0];

    const typeSelect = colorsGroup.getElementsByClassName("type_select");

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
    //#endregion

    //#region BRANDING-ADD script
    const brandingGroup = document.querySelector(".group_custom_id-branding");

    if (brandingGroup) {
        const filterOptions = brandingGroup.querySelector(".ar_filter_options");

        if (!filterOptions) {
            console.log("ar_filter_options not found");
        }

        filterOptions.classList.add("type_checkbox_with_add_img");
    }
    //#endregion

    //#region COLOR-PRICE script
    const colorsContainer = document.getElementsByClassName('group_custom_id-colors')[0];

    if (!colorsContainer) {
        console.log("null");
    }

    const filterHeader = colorsContainer.getElementsByClassName('ar_filter_header')[0];

    if (!filterHeader) {
        console.log("null");
    }

    const filterCaption = filterHeader.getElementsByClassName('ar_filter_caption')[0];

    if (!filterCaption) {
        console.log("null");
    }

    const spanPrice = document.createElement('span');
    spanPrice.className = 'span_price';

    spanPrice.innerHTML = '<br>Included';

    filterCaption.appendChild(spanPrice);
    //#endregion

    //#region Custom DATA-PRICE script
    const allGroup = document.getElementsByClassName('ar_filter_group');

    for (const group of allGroup) {
        const allOptions = group.getElementsByClassName('ar_filter_options');
        for (const options of allOptions) {
            const thisOptions = options.getElementsByClassName('option');

            for (const option of thisOptions) {
                const title = option.getElementsByClassName('component_title')[0];

                const price = option.getAttribute('data-price');

                const visiblePrice = price == 0 ? 'Included' : `$${price}`;

                const spanPrice = document.createElement('span');
                spanPrice.className = 'span_price';

                spanPrice.innerHTML = `<br>${visiblePrice}`;

                title.appendChild(spanPrice);
            }
        }
    }
    //#endregion
});