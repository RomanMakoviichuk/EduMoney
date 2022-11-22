demo = {
    initCharts: function() {
        if ($('#colouredRoundedLineChart').length != 0) {

            /*  **************** Coloured Rounded Line Chart - Line Chart ******************** */
            dataColouredRoundedLineChart = {
                labels: ['\'06', '\'07', '\'08', '\'09', '\'10', '\'11', '\'12', '\'13', '\'14', '\'15'],
                series: [
                    [287, 480, 290, 554, 690, 690, 500, 752, 650, 900, 944]
                ]
            };

            optionsColouredRoundedLineChart = {
                lineSmooth: Chartist.Interpolation.cardinal({
                    tension: 10
                }),
                axisY: {
                    showGrid: true,
                    offset: 40
                },
                axisX: {
                    showGrid: false,
                },
                low: 0,
                high: 1000,
                showPoint: true,
                height: '300px'
            };


            var colouredRoundedLineChart = new Chartist.Line('#colouredRoundedLineChart', dataColouredRoundedLineChart, optionsColouredRoundedLineChart);

            md.startAnimationForLineChart(colouredRoundedLineChart);
        }

    },
    showSwal: function(type) {
        if (type == 'success-message') {
            swal({
                title: "Copied!",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-success",
                type: "success"
            }).catch(swal.noop)
        }
    }
};

$(document).ready(function() {
    //Daterangepicker
    let dateInputs = $('input[name="date"]');
    if (dateInputs.length > 0) {
        dateInputs.daterangepicker({
            opens: "left",
            locale: {
                applyLabel: "Выбрать",
                cancelLabel: "Отмена"
            }
        });
    }

    //Select All Pickers
    let selectAll = $('select[data-select-all="true"]');
    if(selectAll.length > 0) {
        selectAll.selectpicker('selectAll');
    }

    //Charts (need to remove on production)
    demo.initCharts();
});

//Copy link function
const copyLinkToClipboard = (link) => {
    let linkText = link.innerText || link.value;
    if (linkText) {
        if (navigator.clipboard) {
            try {
                navigator.clipboard.writeText(linkText);
                demo.showSwal('success-message');
            } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
            }
        } else {
            let range = document.createRange();
            range.selectNodeContents(link);
            window.getSelection().addRange(range);
            try {
                document.execCommand('copy');
                demo.showSwal('success-message');
            } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
            }
            window.getSelection().removeAllRanges();
        }
    } else {
        return false;
    }
};

//Copy referal link
const copyLinkBtn = document.getElementById('copy_referal_link'),
      referalLink = document.querySelector('.referal-link');

if (copyLinkBtn && referalLink) {
    copyLinkBtn.addEventListener('click', () => {
        copyLinkToClipboard(referalLink);
    });
}

//Copy promocode and partner key
const copyPromoCodeBtn = document.getElementById('copy_promocode'),
      copyPartnerKeyPromoBtn = document.getElementById('copy_partner_key_promocode'),
      promoCode = document.getElementById('promocode'),
      partnerKeyPromo = document.getElementById('partner_key_promocode');

if (copyPromoCodeBtn && promoCode) {
    copyPromoCodeBtn.addEventListener('click', () => {
        copyLinkToClipboard(promoCode);
    });
}

if (copyPartnerKeyPromoBtn && partnerKeyPromo) {
    copyPartnerKeyPromoBtn.addEventListener('click', () => {
        copyLinkToClipboard(partnerKeyPromo);
    });
}

//Copy link with subId
const subIdLink = document.getElementById('sub_id_link'),
      copySubIdLinkBtn = document.getElementById('copy_sub_id_link');

if (copySubIdLinkBtn && subIdLink) {
    copySubIdLinkBtn.addEventListener('click', () => {
        copyLinkToClipboard(subIdLink);
    });
}

//MessagesTable
const messagesTable = document.querySelector('.table-messages');
if (messagesTable) {
    const messagesTableItem = document.querySelectorAll('.table-messages tbody tr');
    messagesTableItem.forEach(item => {
        if (!item.classList.contains('tr_txt_mess')) {
            item.addEventListener('click', () => {
                item.nextElementSibling.classList.toggle('active');
            })
        }
    })
}


//Message Support
const messageSupportBtn = document.getElementById('sup_dep_mess');
const messageSupportForm = document.querySelector('.view_mes_sup');
const cancelMessageSupportForm = document.getElementById('cancel-mess');

const hideShowMessageForm = () => {
    if (!messageSupportForm.classList.contains('opened')) {
        messageSupportBtn.classList.add('hidden');
        messageSupportForm.classList.add('opened');
    } else {
        messageSupportBtn.classList.remove('hidden');
        messageSupportForm.classList.remove('opened');
    }
};

if (messageSupportBtn && messageSupportForm) {
    messageSupportBtn.addEventListener('click', () => {
        hideShowMessageForm();
    });
    cancelMessageSupportForm.addEventListener('click', () => {
        hideShowMessageForm();
    })
}





