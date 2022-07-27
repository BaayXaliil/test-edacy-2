
$(function () {

    jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="./../../../assets/img/angle_up_black2.svg" alt=""></div><div class="quantity-button quantity-down"><img src="./../../../assets/img/angle_down_black2.svg" alt=""></div></div>').insertAfter('.quantity input');
    jQuery('.quantity').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(Number(input.val()));
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(Number(input.val()));
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

    // For custom select
    const selector = document.querySelector('.custom-select')
    if (selector) {
        selector.addEventListener('mousedown', e => {
            e.preventDefault();
            const select = document.querySelector('.form-select')
            select.classList.add("active");
            const dropdown = document.createElement('ul');
            dropdown.className = "select-options";
            [...select.children].forEach(option => {
                const dropdownOption = document.createElement('li')
                dropdownOption.textContent = option.textContent
                dropdownOption.addEventListener('mousedown', e =>{
                    e.stopPropagation();
                    select.value = option.value
                    select.dispatchEvent(new Event('change'))
                    selector.dispatchEvent(new Event('change'))
                    dropdown.remove()
                })
                dropdown.appendChild(dropdownOption)
            })
            selector.appendChild(dropdown)
            e.stopPropagation();
            document.addEventListener('mousedown', e => {
                if (!select.contains(e.target)) {
                    select.classList.remove("active");
                    dropdown.remove()
                }
            })
        })
    }
});


